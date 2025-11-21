// // Simple calculator logic (handles keyboard input too)
// const displayEl = document.getElementById('display');
// let current = '0';
// let lastKey = null;

// function updateDisplay() {
//   displayEl.textContent = current;
// }

// function inputValue(val) {
//   if (current === '0' && val !== '.') current = val;
//   else {
//     // prevent multiple dots in the same number
//     if (val === '.' && current.slice(-1) === '.') return;
//     current += val;
//   }
//   lastKey = 'digit';
//   updateDisplay();
// }

// function clearAll() {
//   current = '0';
//   updateDisplay();
// }

// function backspace() {
//   if (current.length === 1) current = '0';
//   else current = current.slice(0, -1);
//   updateDisplay();
// }

// function safeEval(expr) {
//   // sanitize: allow only digits, operators, dot, parentheses
//   if (!/^[0-9+\-*/.() \t]+$/.test(expr)) return 'Error';
//   try {
//     // Use Function to evaluate in a safer scope
//     // eslint-disable-next-line no-new-func
//     const result = Function(`"use strict"; return (${expr})`)();
//     return (Number.isFinite(result) ? result : 'Error');
//   } catch {
//     return 'Error';
//   }
// }

// function calculate() {
//   const result = safeEval(current.replace(/×/g,'*').replace(/÷/g,'/'));
//   current = (result === 'Error') ? 'Error' : String(result);
//   updateDisplay();
//   lastKey = 'equals';
// }

// // button clicks
// document.querySelectorAll('.btn').forEach(btn => {
//   btn.addEventListener('click', () => {
//     const v = btn.dataset.value;
//     const action = btn.dataset.action;
//     if (action === 'clear') clearAll();
//     else if (action === 'back') backspace();
//     else if (action === 'equals') calculate();
//     else if (v) inputValue(v);
//   });
// });

// // keyboard support
// window.addEventListener('keydown', (e) => {
//   const key = e.key;
//   if ((/^[0-9]$/).test(key)) inputValue(key);
//   else if (key === '.') inputValue('.');
//   else if (key === 'Enter' || key === '=') { e.preventDefault(); calculate(); }
//   else if (key === 'Backspace') backspace();
//   else if (key === 'Escape') clearAll();
//   else if (['+','-','*','/','(',')'].includes(key)) inputValue(key);
// });
// updateDisplay();

let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        let value = btn.innerText;

        if (value === "C") {
            expression = "";
            display.value = "";
        } 
        else if (value === "=") {
            try {
                display.value = eval(expression);
            } catch {
                display.value = "Error";
            }
        }
        else {
            expression += value;
            display.value = expression;
        }
    });
});
