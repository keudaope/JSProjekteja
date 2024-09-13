// Wait until the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Select key elements
  const taskInput = document.getElementById("task-input"); // Input field for new tasks
  const addTaskButton = document.getElementById("add-task-button"); // Button to add a new task
  const taskList = document.getElementById("task-list"); // Unordered list to display tasks
  // Retrieve existing tasks from localStorage, or initialize an empty array if none exist
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // Function to save the tasks array to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Convert tasks array to JSON and save it
  }
  // Function to render (display) tasks on the screen
  function renderTasks() {
    taskList.innerHTML = ""; // Clear the current list
    // Loop through tasks array and create HTML elements for each task
    tasks.forEach((task, index) => {
      // Create a list item for each task
      const li = document.createElement("li");
      li.className = task.completed ? "completed" : ""; // Apply 'completed' class if the task is marked as completed
      // Define the content of each task, with complete and delete buttons
      li.innerHTML = `
 <span>${task.text}</span>
 <div>
 <button class="complete-button">${
   task.completed ? "Undo" : "Complete"
 }</button>
 <button class="delete-button">Delete</button>
 </div>
 `;
      // Event listener for the 'Complete' button
      const completeButton = li.querySelector(".complete-button");
      completeButton.addEventListener("click", () => {
        tasks[index].completed = !tasks[index].completed; // Toggle task completion status
        saveTasks(); // Save updated tasks to localStorage
        renderTasks(); // Re-render the task list
      });
      // Event listener for the 'Delete' button
      const deleteButton = li.querySelector(".delete-button");
      deleteButton.addEventListener("click", () => {
        tasks.splice(index, 1); // Remove task from the array
        saveTasks(); // Save updated tasks to localStorage
        renderTasks(); // Re-render the task list
      });
      // Append the task (li) to the task list (ul)
      taskList.appendChild(li);
    });
  }
  // Event listener for adding a new task
  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim(); // Get the text from the input field and trim whitespace
    if (taskText) {
      // Ensure input is not empty
      tasks.push({ text: taskText, completed: false }); // Add the new task to the array
      taskInput.value = ""; // Clear the input field
      saveTasks(); // Save the updated tasks to localStorage
      renderTasks(); // Re-render the task list
    }
  });
  // Initial rendering of tasks when the page loads
  renderTasks();
});
