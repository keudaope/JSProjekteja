document.addEventListener("DOMContentLoaded", () => {
  const habitInput = document.getElementById("habit-input"); // Input field for entering a new habit
  const addHabitButton = document.getElementById("add-habit-button"); //Button to add the habit
  const habitsDiv = document.getElementById("habits"); // Container to display the list of habits
  // Fetch habits from localStorage or initialize an empty array
  let habits = JSON.parse(localStorage.getItem("habits")) || [];
  /**
   * Function to save habits to localStorage
   */
  function saveHabits() {
    localStorage.setItem("habits", JSON.stringify(habits));
  }
  /**
   * Function to render the habits on the screen
   */
  function renderHabits() {
    habitsDiv.innerHTML = ""; // Clear existing habits in the DOM
    // Loop through each habit and create its corresponding DOM elements
    habits.forEach((habit, habitIndex) => {
      const habitDiv = document.createElement("div"); // Create the main habit div
      habitDiv.classList.add("habit");
      // Set innerHTML with the habit name and its days
      habitDiv.innerHTML = `
 <span class="habit-name">${habit.name}</span>
 <div class="days">
 ${habit.days
   .map(
     (completed, dayIndex) => `
 <div class="day ${
   completed ? "completed" : ""
 }" datahabit-index="${habitIndex}" data-day-index="${dayIndex}"></div>
 `
   )
   .join("")}
 </div>
 `;
      habitsDiv.appendChild(habitDiv); // Append habit div to the main habits container
    });
    // Add click event listeners to each day to mark it as complete/incomplete
    document.querySelectorAll(".day").forEach((day) => {
      day.addEventListener("click", (e) => {
        const habitIndex = e.target.getAttribute("data-habit-index");
        const dayIndex = e.target.getAttribute("data-day-index");

        // Toggle the completion status of the clicked day
        habits[habitIndex].days[dayIndex] = !habits[habitIndex].days[dayIndex];

        saveHabits(); // Save the updated habits to localStorage
        renderHabits(); // Re-render the habits to reflect the changes
      });
    });
  }
  /**
   * Add habit button functionality
   */
  addHabitButton.addEventListener("click", () => {
    const habitName = habitInput.value.trim(); // Get the input value

    if (habitName === "") {
      alert("Please enter a habit."); // Ensure the user doesn't add an empty habit
      return;
    }
    // Create a new habit object with 7 days initialized to false (incomplete)
    const newHabit = {
      name: habitName,
      days: new Array(7).fill(false),
    };
    habits.push(newHabit); // Add the new habit to the habits array
    habitInput.value = ""; // Clear the input field
    saveHabits(); // Save the updated habits to localStorage
    renderHabits(); // Re-render the habits
  });
  // Render habits on page load
  renderHabits();
});
