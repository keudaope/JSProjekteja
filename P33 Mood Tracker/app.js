document.addEventListener("DOMContentLoaded", () => {
  // DOM elements for interaction
  const moodSelect = document.getElementById("mood-select"); // Dropdown to select mood
  const submitButton = document.getElementById("submit-button"); // Button to track mood
  const moodLog = document.getElementById("mood-log"); // Area to display the mood log
  // Array to store mood entries (retrieved from localStorage if available)
  let moodEntries = JSON.parse(localStorage.getItem("moodEntries")) || [];
  // Function to display the mood log
  function displayMoodLog() {
    // Clear the mood log before rendering entries
    moodLog.innerHTML = "";
    moodEntries.forEach((entry) => {
      // Create a div for each mood entry
      const moodEntryDiv = document.createElement("div");
      moodEntryDiv.classList.add("mood-entry");
      // Create span for the mood's date
      const dateSpan = document.createElement("span");
      dateSpan.classList.add("mood-date");
      dateSpan.textContent = entry.date;
      // Create span for the mood's emoji and text
      const moodSpan = document.createElement("span");
      moodSpan.classList.add("mood-emoji");
      moodSpan.textContent = `${entry.emoji} ${entry.mood}`;
      // Append date and mood to the entry div
      moodEntryDiv.appendChild(dateSpan);
      moodEntryDiv.appendChild(moodSpan);
      // Append the entry div to the mood log
      moodLog.appendChild(moodEntryDiv);
    });
  }
  // Function to track a new mood
  function trackMood() {
    // Get selected mood
    const selectedMood = moodSelect.value;
    // Emoji dictionary to match mood to emoji
    const emojiDictionary = {
      happy: " ",
      sad: " ",
      excited: " ",
      tired: " ",
      angry: " ",
      neutral: " ",
    };
    // Only proceed if a mood was selected
    if (selectedMood) {
      // Get the current date in a readable format
      const currentDate = new Date().toLocaleDateString();
      // Create a new mood entry object
      const newMoodEntry = {
        mood: selectedMood,
        emoji: emojiDictionary[selectedMood],
        date: currentDate,
      };
      // Add the new entry to the moodEntries array
      moodEntries.push(newMoodEntry);
      // Save updated mood entries to localStorage
      localStorage.setItem("moodEntries", JSON.stringify(moodEntries));
      // Refresh the mood log
      displayMoodLog();
    }
  }
  // Event listener for the "Track Mood" button
  submitButton.addEventListener("click", trackMood);
  // Display the mood log on page load
  displayMoodLog();
});
