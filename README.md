# CodeAlpha_Task
Overview
This is a sleek, modern calculator with advanced features beyond basic arithmetic operations. It includes a dark theme with vibrant accents, calculation history tracking, theme switching, and full keyboard support.

Key Features
Basic Operations: +, -, ×, ÷, percentage

Advanced Functions: Backspace, clear, decimal support

History Panel: Track previous calculations

Theme Switching: Toggle between dark and light modes

Responsive Design: Works on all device sizes

Keyboard Support: Full keyboard accessibility

Visual Feedback: Interactive animations and hover effects

Technical Implementation
HTML Structure
Main calculator container with macOS-style window controls

Dual display system (input and result)

Grid-based button layout

Slide-out history panel

CSS Design
Dark glass-morphism UI with vibrant accents

Responsive layout using flexbox and grid

Smooth transitions and animations

Circular button ripple effects

Theme switching with CSS variables

Mobile-optimized design

JavaScript Functionality
javascript
// Calculator state management
let currentInput = '0';
let previousInput = '';
let operation = null;
let resetScreen = false;
let calculationHistory = [];

// Core functions
function appendNumber(number) { /* Handles digit input */ }
function setOperation(op) { /* Sets current operation */ }
function calculate() { /* Performs calculation */ }
function clear() { /* Resets calculator */ }
function backspace() { /* Removes last digit */ }

// Additional features
function updateDisplay() { /* Updates UI */ }
function updateHistory() { /* Manages history panel */ }
function handleKeyboardInput() { /* Keyboard support */ }
Advanced Features
Calculation History

Stores expressions and results

Accessible via slide-out panel

Clear history functionality

Theme Switching

Toggle between dark and light modes

Dynamic background gradient change

Icon updates (sun/moon)

Keyboard Support

Number keys (0-9)

Operators (+, -, *, /, %)

Enter (=), Escape (clear), Backspace

Shortcuts (h for history, c for clear)

How to Use
Click numbers or use keyboard to input values

Select an operation (+, -, ×, ÷, %)

Press = or Enter to calculate

Use C to clear or backspace to correct

Toggle history with the clock icon

Switch themes with the moon/sun icon

Technical Highlights
Ripple Effect Animation: Visual feedback on button press

Dual Display: Shows current input and ongoing operation

Floating Point Precision: Avoids common decimal errors

Error Handling: Prevents division by zero

Responsive Design: Adapts to mobile and desktop

Performance Optimized: Minimal re-renders

File Structure
text
calculator/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
└── script.js           # JavaScript functionality
Dependencies
Font Awesome 6.4.0 (for icons)

This calculator combines aesthetic design with robust functionality, making it both visually appealing and highly practical for everyday calculations.


