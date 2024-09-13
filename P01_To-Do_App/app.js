// app.js
// This ensures the JavaScript only runs once the DOM has fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form'); // The form for new task entry
    const todoInput = document.getElementById('todo-input'); // The text input field for new tasks
    const todoList = document.getElementById('todo-list'); // The list where tasks will be displayed
    // Handle form submission
    todoForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    const newTodoText = todoInput.value.trim(); // Get the entered task, removing any leading/trailing spaces
    if (newTodoText !== '') {
    addTodoItem(newTodoText); // If the input is valid, add the task
    todoInput.value = ''; // Clear the input field after adding the task
    todoInput.focus(); // Automatically focus the input field for easier task entry
    }
    });
    /**
    * Function to add a new task to the list.
    * @param {string} text - The text of the new task.
    */
    function addTodoItem(text) {
    // Create a new <li> element to represent the task
    const li = document.createElement('li');
    li.textContent = text; // Set the text of the task
    // Create a button to delete the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'; // Text for the delete button
    // Add an event listener to remove the task when the delete button is clicked
    deleteButton.addEventListener('click', () => {
    // Add fade-out effect before removing the task
    li.classList.add('fade-out');
    // Remove the task from the DOM after the fade-out effect (0.5s delay)
    setTimeout(() => todoList.removeChild(li), 500);
    });
   // Add event listener to toggle the 'completed' status when the task is clicked
li.addEventListener('click', () => {
li.classList.toggle('completed'); // Toggles the 'completed' class to mark/unmark tasks
});
// Append the delete button to the task
li.appendChild(deleteButton);
// Initially set opacity to 0 for fade-in effect
li.style.opacity = 0;
// Append the new task to the list
todoList.appendChild(li);
// Fade-in effect after slight delay
setTimeout(() => {
li.style.opacity = 1; // Task fades in
}, 10); // Delay for smooth fade-in
}
});
