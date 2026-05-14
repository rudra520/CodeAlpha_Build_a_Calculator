<div align="center">
  <h1>📱 Calculator Web App</h1>
  <p><strong>A Simple, Responsive Calculator</strong></p>
  <p>CodeAlpha Internship - Task 1</p>
  
  ![License](https://img.shields.io/badge/license-MIT-green)
  ![Language](https://img.shields.io/badge/language-TypeScript%20%7C%20HTML%20%7C%20CSS-blue)
  ![Status](https://img.shields.io/badge/status-Active-brightgreen)
</div>

---

## 🌟 Overview

A fully functional, responsive calculator web application built with modern web technologies. This project demonstrates core web development skills including DOM manipulation, event handling, and responsive design principles.

**Key Features:**
- ✅ Basic arithmetic operations (+, −, ×, ÷)
- ✅ Clean and intuitive user interface
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Real-time calculation display
- ✅ Error handling for invalid operations

---
### 📸 Live View Preview

<div align="center">
  <img src="https://github.com/rudra520/CodeAlpha_Build_a_Calculator/blob/8345bfdd8d5338d5a3bcb77940351185e31cef6b/CodeAlpha-Build-a-Calculator.png" alt="Calculator Live View" width="600" style="border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  <p><em>Interactive Calculator Interface - Live at https://rudracodealpha1.netlify.app/</em></p>
</div>
---

## 🛠️ Tech Stack

| Technology | Usage | Percentage |
|-----------|-------|-----------|
| **TypeScript** | Logic & interactivity | 93.3% |
| **CSS** | Styling & responsiveness | 4% |
| **HTML** | Structure & markup | 2.7% |

---

## 📋 Table of Contents

- [Features](#-features)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## ✨ Features

### Core Functionality
- **Basic Operations**: Addition, Subtraction, Multiplication, Division
- **Clear Function**: Reset calculator to initial state
- **Delete Function**: Remove the last entered digit
- **Decimal Support**: Handle floating-point calculations
- **Keyboard Support**: Use keyboard for number and operator input

### Design Features
- **Responsive Layout**: Works seamlessly on all screen sizes
- **Modern UI**: Clean, minimalist interface
- **Visual Feedback**: Clear display of current input and results
- **Error Handling**: Graceful handling of mathematical errors

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js 16+ (for development)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rudra520/CodeAlpha_Build_a_Calculator.git
   cd CodeAlpha_Build_a_Calculator
   ```

2. **Install dependencies** (if using build tools)
   ```bash
   npm install
   ```

3. **Start development server** (optional)
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or navigate to `http://localhost:3000` if using dev server

---

## 💻 Usage

### Basic Operations

1. **Enter Numbers**: Click number buttons (0-9) or use keyboard
2. **Select Operation**: Click an operation button (+, −, ×, ÷)
3. **Enter Second Number**: Enter the second operand
4. **Calculate**: Press `=` or Enter key to see the result
5. **Clear**: Press `C` to clear the display and start fresh

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Enter numbers |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `=` or `Enter` | Calculate result |
| `Backspace` | Delete last digit |
| `C` or `Escape` | Clear display |

### Example Calculations

```
15 + 8 = 23
100 - 45 = 55
12 × 5 = 60
144 ÷ 12 = 12
5.5 + 2.5 = 8
```

---

## 📁 Project Structure

```
CodeAlpha_Build_a_Calculator/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.ts           # TypeScript logic
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
└── README.md           # This file
```

### File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | HTML structure with calculator layout and buttons |
| `styles.css` | CSS styling for responsive design and UI |
| `script.ts` | TypeScript code for calculator logic |
| `package.json` | Project metadata and dependencies |

---

## 🔧 How It Works

### Architecture Overview

```
User Input → Event Handler → Validation → Calculation → Display Update
```

### Key Components

1. **Display Screen**: Shows current input and results
2. **Number Buttons**: 0-9 for numerical input
3. **Operation Buttons**: +, −, ×, ÷ for operations
4. **Control Buttons**: 
   - `=` for calculation
   - `C` for clear
   - `←` for delete
5. **Decimal Point**: For floating-point numbers

### Logic Flow

```typescript
// Simplified logic flow
1. User clicks a button
2. Event listener captures the input
3. Input is validated and processed
4. If operation is selected, store current value
5. If equals is pressed, perform calculation
6. Update display with result
7. Ready for next calculation
```

---

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| Opera | ✅ Full |
| IE 11 | ⚠️ Limited |

---

## 🎯 Learning Outcomes

This project covers:
- ✓ DOM manipulation and event handling
- ✓ TypeScript fundamentals
- ✓ CSS Grid and Flexbox layouts
- ✓ Responsive web design
- ✓ Error handling and validation
- ✓ State management basics

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Suggestions for Enhancement
- Add calculation history
- Implement scientific calculator functions
- Add dark mode toggle
- Support for percentage calculations
- Keyboard number pad support

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

MIT License © 2026 rudra520

---

## 👤 Author

**Rudra** 
- GitHub: [@rudra520](https://github.com/rudra520)
- Project: [CodeAlpha Internship](https://github.com/rudra520/CodeAlpha_Build_a_Calculator)

---

## 📊 Repository Stats

- 📅 Created: May 2026
- 🔨 Language: TypeScript (93.3%)
- 📦 License: MIT
- ⭐ Status: Active Development

---

## 🎓 What I Learned

Through building this calculator, I've gained experience with:
- Frontend web development fundamentals
- TypeScript and static typing
- Responsive design principles
- User interface best practices
- Event-driven programming
- Code organization and structure

---

## 🔗 Useful Resources

- [MDN Web Docs - DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- 

---

<div align="center">
  <p>Made with ❤️ during CodeAlpha Internship</p>
  <p>⭐ If you found this helpful, please consider giving it a star!</p>
</div>
