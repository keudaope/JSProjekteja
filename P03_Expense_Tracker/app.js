document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form'); // Form for adding expenses
    const expenseName = document.getElementById('expense-name'); // Input field  for the name of the expense
    const expenseAmount = document.getElementById('expense-amount'); // Input  field for the amount of the expense
    const expenseCategory = document.getElementById('expense-category'); // Dropdown for selecting the category of the expense
    const expenseList = document.getElementById('expense-list'); // Container to  display added expenses
    const summary = document.getElementById('summary'); // Container for  displaying the total expenses
    let expenses = []; // Array to store the list of expenses
    // Event listener for form submission
    expenseForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    const name = expenseName.value.trim(); // Get the name of the expense
    const amount = parseFloat(expenseAmount.value); // Get the amount and  convert it to a number
    const category = expenseCategory.value; // Get the selected category
    // Only proceed if the fields are valid
    if (name !== '' && !isNaN(amount) && category !== '') {
    const expense = { name, amount, category }; // Create an expense object
    expenses.push(expense); // Add the new expense to the array
    addExpenseItem(expense); // Call function to add the expense to the list
    updateSummary(); // Update the total expenses
    expenseForm.reset(); // Reset the form after adding an expense
    }
    });
    // Function to add a new expense to the list with fade-in effect
    function addExpenseItem(expense) {
    const div = document.createElement('div'); // Create a div for the  expense item
    div.className = 'expense-item added'; // Add class for styling with  initial fade-in
    // Assign an index to each expense div for easier reference during deletion
const index = expenses.indexOf(expense);
div.innerHTML = `
<span>${expense.name} - $${expense.amount.toFixed(2)} ($
{expense.category})</span>
<button onclick="removeExpense(${index})">Delete</button>
`; // Create the expense item with delete button
div.setAttribute('data-index', index); // Assign a custom attribute to track the index of each item
expenseList.appendChild(div); // Add the expense item to the list
// Delay to trigger the fade-in effect
setTimeout(() => {
div.classList.add('show'); // Add 'show' class to trigger fade-in effect
}, 10); // Short delay to ensure the transition applies
}
// Function to update the total expenses in the summary section
function updateSummary() {
const total = expenses.reduce((sum, expense) => sum + expense.amount,
0); // Calculate the total amount
summary.innerHTML = `<p>Total: $${total.toFixed(2)}</p>`; // Display the total
}
// Function to remove an expense from the list with fade-out effect
window.removeExpense = function(index) {
const expenseItem = expenseList.querySelector(`[data-index="$
{index}"]`); // Get the specific item using the data-index attribute
expenseItem.classList.add('removing'); // Add class to trigger fade-out effect
setTimeout(() => {
expenses.splice(index, 1); // Remove the expense from the array
expenseList.removeChild(expenseItem); // Remove the expense from the DOM
updateSummary(); // Update the total expenses
}, 400); // Delay to allow the fade-out transition to complete
};
});