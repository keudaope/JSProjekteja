document.addEventListener('DOMContentLoaded', () => {
    // Selecting elements from the DOM
    const noteForm = document.getElementById('note-form'); // Form for new notes
    const noteInput = document.getElementById('note-input'); // Input field for note text
    const noteList = document.getElementById('note-list'); // Container for  displaying notes
    // Array to store notes, initialized from localStorage if available
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    /**
    * Saves the notes array to localStorage.
    */
    function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes)); // Save notes to localStorage
    }
    /**
    * Adds a new note item to the DOM with a fade-in effect.
    * @param {string} note - The note text to display.
    */
    function addNoteItem(note) {
    const div = document.createElement('div'); // Create a new div for the note
    div.className = 'note-item adding'; // Apply 'adding' class for fade-in effect
    // Set innerHTML with note text and edit/delete buttons
    div.innerHTML = `
    <input type="text" value="${note}" readonly> <!-- Read-only input
   field for note -->
    <button class="edit" onclick="editNoteItem(this)">Edit</button> <!--
   Edit button -->
    <button onclick="deleteNoteItem(this)">Delete</button> <!-- Delete
   button -->
    `;
    // Append the new note item to the note list
    noteList.appendChild(div);
    // Trigger the fade-in effect after a short delay
    setTimeout(() => {
    div.classList.add('show'); // Apply 'show' class for full visibility
    }, 10);
    }
    /**
    * Renders all notes by iterating through the notes array.
    */
    function renderNotes() {
    noteList.innerHTML = ''; // Clear current notes
    notes.forEach(note => addNoteItem(note)); // Add each note from the array to the list
    }
    /**
    * Handles the edit functionality of a note.
    * @param {HTMLElement} button - The edit button that was clicked.
    */
    window.editNoteItem = function(button) {
    const input = button.previousElementSibling; // Select the input field  before the button
    if (button.textContent === 'Edit') {
    input.removeAttribute('readonly'); // Make input editable
    input.focus(); // Focus the input for editing
    button.textContent = 'Save'; // Change button text to 'Save'
    } else {
    const index =
   Array.from(noteList.children).indexOf(button.parentElement); // Get note index
    notes[index] = input.value; // Update the note in the array
    saveNotes(); // Save updated notes
    renderNotes(); // Re-render the notes
    }
    };
    /**
    * Deletes a note with a fade-out effect.
    * @param {HTMLElement} button - The delete button that was clicked.
    */
    window.deleteNoteItem = function(button) {
    const noteItem = button.parentElement; // Select the note item
    const index = Array.from(noteList.children).indexOf(noteItem); // Get note index
    // Add 'removing' class to trigger the fade-out effect
    noteItem.classList.add('removing');
    // Wait for the transition to complete before removing the note
    setTimeout(() => {
    notes.splice(index, 1); // Remove the note from the array
    saveNotes(); // Save updated notes
    renderNotes(); // Re-render the notes
}, 500); // Match the transition duration
};
/**
* Handles form submission to add a new note.
*/
noteForm.addEventListener('submit', (event) => {
event.preventDefault(); // Prevent default form submission
const note = noteInput.value.trim(); // Get and trim input value
if (note !== '') { // Ensure the note is not empty
notes.push(note); // Add the new note to the array
saveNotes(); // Save the updated notes array
renderNotes(); // Re-render the notes
noteForm.reset(); // Reset the form input
}
});
// Initial rendering of notes when the page is loaded
renderNotes();
});
