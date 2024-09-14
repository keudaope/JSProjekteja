document.addEventListener("DOMContentLoaded", () => {
  // Get references to DOM elements
  const canvas = document.getElementById("drawing-canvas");
  const ctx = canvas.getContext("2d"); // Get the 2D drawing context
  const clearButton = document.getElementById("clear-button");
  // Initialize drawing state
  let drawing = false;
  // Add event listeners for mouse interactions
  canvas.addEventListener("mousedown", startDrawing); // When the user presses the mouse button
  canvas.addEventListener("mousemove", draw); // When the user moves the mouse while drawing
  canvas.addEventListener("mouseup", stopDrawing); // When the user releases the mouse button
  canvas.addEventListener("mouseout", stopDrawing); // If the user moves the mouse out of the canvas
  clearButton.addEventListener("click", clearCanvas); // When the user clicks the "Clear Canvas" button
  // Function to start drawing
  function startDrawing(e) {
    drawing = true; // Set the drawing flag to true
    ctx.beginPath(); // Begin a new path for drawing
    ctx.moveTo(e.offsetX, e.offsetY); // Move the drawing cursor to the mouse position
  }
  // Function to handle drawing on the canvas
  function draw(e) {
    if (!drawing) return; // If the user is not drawing, exit the function
    ctx.lineTo(e.offsetX, e.offsetY); // Draw a line to the current mouse position
    ctx.strokeStyle = "#007bff"; // Set the color of the drawing line
    ctx.lineWidth = 2; // Set the width of the drawing line
    ctx.stroke(); // Actually draw the line on the canvas
  }
  // Function to stop drawing
  function stopDrawing() {
    drawing = false; // Set the drawing flag to false
    ctx.closePath(); // Close the current path
  }
  // Function to clear the canvas
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas;
  }
});
