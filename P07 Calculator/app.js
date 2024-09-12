document.addEventListener('DOMContentLoaded', () => {
    // Select the display element where the numbers and result will be shown
    const display = document.getElementById('display');
    // Select all the calculator buttons
    const buttons = document.querySelectorAll('button');
   
    // Variables to hold the current and previous operands and the operator
    let currentOperand = '';
    let previousOperand = '';
    let operator = null;
    // Loop through each button and add a click event listener
    buttons.forEach(button => {
    button.addEventListener('click', () => {
    // Handle number buttons
    if (button.hasAttribute('data-number')) {
    appendNumber(button.getAttribute('data-number'));
    }
    // Handle operator buttons
    else if (button.hasAttribute('data-operator')) {
    chooseOperator(button.getAttribute('data-operator'));
    }
    // Handle equals button
    else if (button.id === 'equal') {
    compute();
    }
    // Handle clear button
    else if (button.id === 'clear') {
    clear();
    }
    // Update the display after each action
    updateDisplay();
});
});
// Function to append a number to the current operand
function appendNumber(number) {
// Prevent appending multiple zeroes at the start
if (number === '0' && currentOperand === '0') return;
// Append the new number to the current operand
currentOperand = currentOperand.toString() + number.toString();
}
// Function to handle operator selection
function chooseOperator(selectedOperator) {
// Do nothing if no number has been entered
if (currentOperand === '') return;
// Compute if there's a previous number and operator
if (previousOperand !== '') {
compute();
}
// Set the chosen operator and prepare for the next number
operator = selectedOperator;
previousOperand = currentOperand;
currentOperand = '';
}
// Function to perform the calculation
function compute() {
let computation;
const prev = parseFloat(previousOperand);
const current = parseFloat(currentOperand);
// Do nothing if either operand is invalid
if (isNaN(prev) || isNaN(current)) return;

// Perform the calculation based on the chosen operator
switch (operator) {
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
computation = prev / current;
break;
default:
return;
}
// Update the current operand with the result and reset other values
currentOperand = computation;
operator = null;
previousOperand = '';
}
// Function to clear the calculator
function clear() {
currentOperand = '';
previousOperand = '';
operator = null;
}
// Function to update the display with the current operand
function updateDisplay() {
// If currentOperand is empty, display '0', otherwise display the current number
display.textContent = currentOperand || '0';
}
// Clear the calculator when the app starts
clear();
});
