
        // DOM Elements
        const display = document.getElementById('display');
        const result = document.getElementById('result');
        const buttons = document.querySelectorAll('.btn');
        const historyToggle = document.getElementById('historyToggle');
        const historyPanel = document.getElementById('historyPanel');
        const historyList = document.getElementById('historyList');
        const clearHistory = document.getElementById('clearHistory');
        const themeToggle = document.getElementById('themeToggle');
        
        // Calculator state
        let currentInput = '0';
        let previousInput = '';
        let operation = null;
        let resetScreen = false;
        let calculationHistory = [];
        
        // Initialize calculator
        updateDisplay();
        
        // Button click event
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.getAttribute('data-value');
                handleButtonClick(value);
            });
        });
        
        // Handle button clicks
        function handleButtonClick(value) {
            if (!isNaN(value) || value === '.') {
                appendNumber(value);
            } else if (['+', '-', '*', '/', '%'].includes(value)) {
                setOperation(value);
            } else if (value === '=') {
                calculate();
            } else if (value === 'C') {
                clear();
            } else if (value === 'backspace') {
                backspace();
            }
        }
        
        // Append number to display
        function appendNumber(number) {
            if (currentInput === '0' || resetScreen) {
                currentInput = number;
                resetScreen = false;
            } else {
                // Prevent multiple decimal points
                if (number === '.' && currentInput.includes('.')) return;
                currentInput += number;
            }
            updateDisplay();
        }
        
        // Set operation
        function setOperation(op) {
            if (currentInput === '') return;
            
            if (operation !== null) {
                calculate();
            }
            
            operation = op;
            previousInput = currentInput;
            resetScreen = true;
            updateDisplay();
        }
        
        // Calculate result
        function calculate() {
            if (operation === null || resetScreen) return;
            
            let computation;
            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);
            
            if (isNaN(prev) || isNaN(current)) return;
            
            switch (operation) {
                case '+':
                    computation = prev + current;
                    break;
                case '-':
                    computation = prev - current;
                    break;
                case '*':
                    computation = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        computation = 'Error';
                    } else {
                        computation = prev / current;
                    }
                    break;
                case '%':
                    computation = prev % current;
                    break;
                default:
                    return;
            }
            
            // Format computation to avoid long decimal numbers
            computation = parseFloat(computation.toFixed(10)).toString();
            
            // Add to history
            const historyEntry = {
                expression: `${previousInput} ${getOperatorSymbol(operation)} ${currentInput}`,
                result: computation
            };
            
            calculationHistory.unshift(historyEntry);
            updateHistory();
            
            // Update display
            currentInput = computation;
            operation = null;
            previousInput = '';
            resetScreen = true;
            updateDisplay();
        }
        
        // Get operator symbol for display
        function getOperatorSymbol(op) {
            switch (op) {
                case '+': return '+';
                case '-': return '−';
                case '*': return '×';
                case '/': return '÷';
                case '%': return '%';
                default: return op;
            }
        }
        
        // Clear calculator
        function clear() {
            currentInput = '0';
            previousInput = '';
            operation = null;
            updateDisplay();
        }
        
        // Backspace function
        function backspace() {
            currentInput = currentInput.toString().slice(0, -1);
            if (currentInput === '') {
                currentInput = '0';
            }
            updateDisplay();
        }
        
        // Update display
        function updateDisplay() {
            display.value = currentInput;
            
            if (operation !== null) {
                result.textContent = `${previousInput} ${getOperatorSymbol(operation)}`;
            } else {
                result.textContent = previousInput;
            }
        }
        
        // Update history display
        function updateHistory() {
            historyList.innerHTML = '';
            
            calculationHistory.slice(0, 10).forEach(entry => {
                const li = document.createElement('li');
                li.className = 'history-item';
                li.innerHTML = `
                    <div class="expression">${entry.expression} =</div>
                    <div class="result">${entry.result}</div>
                `;
                historyList.appendChild(li);
            });
        }
        
        // Toggle history panel
        historyToggle.addEventListener('click', () => {
            historyPanel.classList.toggle('active');
        });
        
        // Clear history
        clearHistory.addEventListener('click', () => {
            calculationHistory = [];
            updateHistory();
        });
        
        // Toggle theme
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const icon = themeToggle.querySelector('i');
            
            if (document.body.classList.contains('light-theme')) {
                document.body.style.background = 'linear-gradient(135deg, #8EC5FC, #E0C3FC)';
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                document.body.style.background = 'linear-gradient(135deg, #1a2a6c, #b21f1f, #1a2a6c)';
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
        
        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.key >= 0 && e.key <= 9) handleButtonClick(e.key);
            if (e.key === '.') handleButtonClick('.');
            if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '%') {
                handleButtonClick(e.key);
            }
            if (e.key === 'Enter' || e.key === '=') handleButtonClick('=');
            if (e.key === 'Escape') clear();
            if (e.key === 'Backspace') backspace();
            if (e.key === 'c' || e.key === 'C') clear();
            if (e.key === 'h' || e.key === 'H') historyPanel.classList.toggle('active');
        });
    