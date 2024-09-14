// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get the button to add a new note and the container where notes will be displayed
  const addNoteButton = document.getElementById("add-note-button");
  const notesContainer = document.getElementById("notes-container");
  // Fetch existing notes from localStorage, or start with an empty array if none exist
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  // Function to render all notes by looping through the notes array
  function renderNotes() {
    // Clear the notes container to avoid duplications
    notesContainer.innerHTML = "";
    // Loop through each note and create a new note element
    notes.forEach((note) => {
      createNoteElement(note.id, note.content);
    });
  }
  // Function to create a new note element, with unique id and content
  function createNoteElement(id, content = "") {
    // Create the note div
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
    // Set the innerHTML of the note with a textarea for content and a delete button
    noteElement.innerHTML = `
 <textarea>${content}</textarea>
 <button class="delete-note">X</button>
 `;
    // Select the textarea and the delete button within the note
    const textarea = noteElement.querySelector("textarea");
    const deleteButton = noteElement.querySelector(".delete-note");
    // When the textarea is edited, update the note's content
    textarea.addEventListener("input", () => {
      updateNoteContent(id, textarea.value);
    });
    // When the delete button is clicked, remove the note
    deleteButton.addEventListener("click", () => {
      deleteNote(id);
    });
    // Append the new note element to the container
    notesContainer.appendChild(noteElement);
  }
  // Function to add a new note to the notes array
  function addNote() {
    // Create a new note object with a unique id and empty content
    const note = {
      id: Date.now(), // Use the current timestamp as a unique id
      content: "",
    };
    // Add the new note to the array
    notes.push(note);
    // Save the updated notes array to localStorage
    saveNotes();
    // Render the new note on the screen
    createNoteElement(note.id, note.content);
  }
  // Function to update the content of an existing note
  function updateNoteContent(id, content) {
    // Find the note with the given id in the array
    const note = notes.find((note) => note.id === id);
    if (note) {
      // Update the content of the found note
      note.content = content;
      // Save the updated notes array to localStorage
      saveNotes();
    }
  }
  // Function to delete a note based on its id
  function deleteNote(id) {
    // Filter out the note to be deleted from the notes array
    notes = notes.filter((note) => note.id !== id);
    // Save the updated notes array to localStorage
    saveNotes();
    // Re-render all notes to reflect the deletion
    renderNotes();
  }
  // Function to save the notes array to localStorage
  function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  // Add a new note when the 'Add Note' button is clicked
  addNoteButton.addEventListener("click", addNote);
  // On page load, render any existing notes from localStorage
  renderNotes();
});
