// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements for interaction
  const editor = document.getElementById("editor"); // Textarea for markdown input
  const preview = document.getElementById("preview"); // Div to display the rendered markdown
  // Function to update the preview area with parsed markdown
  function updatePreview() {
    const markdownText = editor.value; // Get the user's input from the textarea
    preview.innerHTML = marked.parse(markdownText); // Parse markdown and update the preview
  }
  // Event listener to update the preview whenever the user types
  editor.addEventListener("input", updatePreview);
  // Initial preview update to ensure content is parsed when the page loads
  updatePreview();
});
