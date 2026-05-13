/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Delete, RotateCcw, Equal, Plus, Minus, X, Divide } from 'lucide-react';

type Operation = '+' | '-' | '*' | '/' | null;

interface HistoryItem {
  id: string;
  formula: string;
  result: string;
}

export default function App() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [lastAction, setLastAction] = useState<'number' | 'operator' | 'equal' | 'clear'>('clear');
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const calculate = useCallback((expr: string): string => {
    try {
      const sanitized = expr.replace(/×/g, '*').replace(/÷/g, '/');
      const result = Function('"use strict";return (' + sanitized + ')')();
      
      if (isNaN(result) || !isFinite(result)) return 'Error';
      
      const formattedResult = Number(result.toFixed(8)).toString();
      return formattedResult;
    } catch {
      return 'Error';
    }
  }, []);

  const handleNumber = useCallback((num: string) => {
    setDisplay((prev) => {
      if (lastAction === 'equal' || prev === '0' || prev === 'Error') {
        setLastAction('number');
        if (num === '.') return '0.';
        return num;
      }
      if (num === '.' && prev.includes('.')) return prev;
      setLastAction('number');
      return prev + num;
    });
  }, [lastAction]);

  const handleOperator = useCallback((op: string) => {
    if (display === 'Error') return;

    setExpression((prevExpr) => {
      if (lastAction === 'operator') {
        return prevExpr.slice(0, -1) + op;
      }
      return (lastAction === 'equal' ? display : prevExpr + display) + op;
    });
    setDisplay('0');
    setLastAction('operator');
  }, [display, lastAction]);

  const handleEqual = useCallback(() => {
    if (lastAction === 'operator' || lastAction === 'equal') return;
    
    const finalExpression = expression + display;
    const result = calculate(finalExpression);
    
    if (result !== 'Error') {
      const historyItem: HistoryItem = {
        id: crypto.randomUUID(),
        formula: finalExpression.replace(/\*/g, '×').replace(/\//g, '÷'),
        result: result
      };
      setHistory(prev => [historyItem, ...prev].slice(0, 10));
    }

    setExpression('');
    setDisplay(result);
    setLastAction('equal');
  }, [display, expression, calculate, lastAction]);

  const handleClear = useCallback(() => {
    setDisplay('0');
    setExpression('');
    setLastAction('clear');
  }, []);

  const handleDelete = useCallback(() => {
    if (lastAction === 'equal') {
      handleClear();
      return;
    }
    setDisplay((prev) => {
      if (prev.length === 1 || prev === 'Error') return '0';
      return prev.slice(0, -1);
    });
  }, [lastAction, handleClear]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const { key } = e;
      if (key >= '0' && key <= '9') handleNumber(key);
      if (key === '.') handleNumber('.');
      if (key === '+') handleOperator('+');
      if (key === '-') handleOperator('-');
      if (key === '*') handleOperator('*');
      if (key === '/') handleOperator('/');
      if (key === 'Enter' || key === '=') handleEqual();
      if (key === 'Escape') handleClear();
      if (key === 'Backspace') handleDelete();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNumber, handleOperator, handleEqual, handleClear, handleDelete]);

  const Button = ({ 
    children, 
    onClick, 
    className = '', 
    variant = 'default' 
  }: { 
    children: ReactNode; 
    onClick: () => void; 
    className?: string;
    variant?: 'default' | 'operator' | 'action' | 'equals';
  }) => {
    const variants = {
      default: 'bg-zinc-800/30 hover:bg-zinc-800 text-white font-light',
      operator: 'bg-zinc-800 hover:bg-zinc-700 text-sky-400 font-medium',
      action: 'bg-zinc-800/50 hover:bg-zinc-800 text-rose-400 font-medium',
      equals: 'bg-sky-500 hover:bg-sky-400 text-white font-medium shadow-[0_0_20px_rgba(56,189,248,0.3)]'
    };

    return (
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`flex items-center justify-center rounded-2xl text-2xl transition-all duration-200 h-16 w-full ${variants[variant]} ${className}`}
      >
        {children}
      </motion.button>
    );
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex items-center justify-center overflow-hidden font-sans select-none p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[800px] h-[600px] bg-[#121215] rounded-3xl border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-row overflow-hidden"
      >
        {/* Sidebar */}
        <aside className="w-64 border-r border-zinc-800 p-6 flex flex-col justify-between bg-[#0e0e11] shrink-0 overflow-y-auto scrollbar-hide">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-rose-500 shadow-sm shadow-rose-500/20" />
              <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm shadow-amber-500/20" />
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/20" />
            </div>
            
            <nav className="flex-1 space-y-6">
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">History</p>
                <div className="space-y-4 max-h-[380px] overflow-y-auto scrollbar-hide">
                  <AnimatePresence initial={false}>
                    {history.length === 0 ? (
                      <p className="text-zinc-600 text-xs italic">No recent calculations</p>
                    ) : (
                      history.map((item) => (
                        <motion.div 
                          key={item.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="group cursor-default"
                        >
                          <p className="text-xs text-zinc-600 group-hover:text-zinc-500 transition-colors">{item.formula}</p>
                          <p className="text-zinc-300 group-hover:text-white transition-colors">{item.result}</p>
                        </motion.div>
                      ))
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </nav>

            <div className="pt-4 border-t border-zinc-800 mt-auto">
              <div className="flex items-center justify-between text-[10px] text-zinc-500 font-medium">
                <p>PRECISION MODE</p>
                <p>64-BIT</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Calculator Body */}
        <main className="flex-1 flex flex-col">
          <header className="h-48 p-8 flex flex-col justify-end text-right bg-gradient-to-b from-[#18181b] to-transparent shrink-0">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={expression}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-zinc-500 text-lg font-light mb-1 h-8 tracking-tight"
              >
                {expression.replace(/\*/g, '×').replace(/\//g, '÷')}
              </motion.div>
            </AnimatePresence>
            <motion.div
              layout
              className="text-6xl font-extralight tracking-tighter text-white overflow-x-auto whitespace-nowrap scrollbar-hide"
            >
              {Number(display).toLocaleString(undefined, { maximumFractionDigits: 8 })}
            </motion.div>
          </header>

          <section className="flex-1 p-8 grid grid-cols-4 gap-4 bg-[#121215]">
            <Button variant="action" onClick={handleClear}>AC</Button>
            <Button variant="default" onClick={handleDelete}>
              <Delete className="w-6 h-6" />
            </Button>
            <Button variant="default" onClick={() => handleNumber('.')}>.</Button>
            <Button variant="operator" onClick={() => handleOperator('/')}>÷</Button>

            <Button onClick={() => handleNumber('7')}>7</Button>
            <Button onClick={() => handleNumber('8')}>8</Button>
            <Button onClick={() => handleNumber('9')}>9</Button>
            <Button variant="operator" onClick={() => handleOperator('*')}>×</Button>

            <Button onClick={() => handleNumber('4')}>4</Button>
            <Button onClick={() => handleNumber('5')}>5</Button>
            <Button onClick={() => handleNumber('6')}>6</Button>
            <Button variant="operator" onClick={() => handleOperator('-')}>−</Button>

            <Button onClick={() => handleNumber('1')}>1</Button>
            <Button onClick={() => handleNumber('2')}>2</Button>
            <Button onClick={() => handleNumber('3')}>3</Button>
            <Button variant="operator" onClick={() => handleOperator('+')}>+</Button>

            <Button onClick={() => handleNumber('0')} className="col-span-2">0</Button>
            <Button variant="equals" onClick={handleEqual} className="col-span-2">
              <Equal className="w-8 h-8" />
            </Button>
          </section>
        </main>
      </motion.div>
    </div>
  );
}
