document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display"); // The calculator display
  const historyUl = document.getElementById("history"); // The list to show calculation history
  let currentInput = ""; // Holds the current input for calculation
  let history = JSON.parse(localStorage.getItem("calculatorHistory")) || [];
  // Load history from localStorage
  // Save history to localStorage
  function saveHistory() {
    localStorage.setItem("calculatorHistory", JSON.stringify(history));
  }
  // Render history to the UI
  function renderHistory() {
    historyUl.innerHTML = ""; // Clear previous history
    history.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item; // Display each history item
      historyUl.appendChild(li);
    });
  }
  // Append number to the display
  function appendNumber(number) {
    currentInput += number; // Add number to the current input
    display.value = currentInput; // Update the display
  }
  // Append operator to the display
  function appendOperator(operator) {
    if (currentInput === "" && operator !== "-") return; // Prevent adding operator if input is empty
    currentInput += ` ${operator} `; // Add operator with spaces
    display.value = currentInput; // Update the display
  }
  // Append decimal dot
  function appendDot() {
    if (currentInput.includes(".")) return; // Prevent multiple dots
    currentInput += "."; // Add dot to input
    display.value = currentInput; // Update the display
  }
  // Clear the display
  function clearDisplay() {
    currentInput = ""; // Reset current input
    display.value = currentInput; // Clear the display
  }
  // Perform calculation
  function calculate() {
    try {
      const result = eval(currentInput); // Evaluate the expression
      history.push(`${currentInput} = ${result}`); // Add to history
      if (history.length > 10) history.shift(); // Keep last 10 history items
      currentInput = result.toString(); // Update the current input with the result
      display.value = currentInput; // Show result on the display
      saveHistory(); // Save the history
      renderHistory(); // Update history display
    } catch {
      display.value = "Error"; // Show error if calculation fails
      currentInput = ""; // Reset input
    }
  }
  // Render the saved history when the page loads
  renderHistory();
  // Event delegation for buttons
  document.querySelectorAll(".calculator button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const value = e.target.getAttribute("data-value");
      if (value) {
        if (!isNaN(value) || value === ".") {
          appendNumber(value);
        } else {
          appendOperator(value);
        }
      }
    });
  });
  // Clear button event
  document.getElementById("clear").addEventListener("click", clearDisplay);
  // Equals button event for calculation
  document.getElementById("equals").addEventListener("click", calculate);
});
