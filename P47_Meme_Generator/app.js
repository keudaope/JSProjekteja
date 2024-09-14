document.addEventListener("DOMContentLoaded", () => {
  const imageInput = document.getElementById("image-input"); // Input for image upload
  const topTextInput = document.getElementById("top-text"); // Input for top meme text
  const bottomTextInput = document.getElementById("bottom-text"); // Input for bottom meme text
  const generateMemeButton = document.getElementById("generate-meme-button");
  // Button to generate meme
  const downloadMemeButton = document.getElementById("download-meme-button");
  // Button to download meme
  const canvas = document.getElementById("meme-canvas"); // Canvas to render meme
  const ctx = canvas.getContext("2d"); // Get 2D rendering context
  // Event listener to generate meme when the button is clicked
  generateMemeButton.addEventListener("click", () => {
    const imageFile = imageInput.files[0]; // Get the uploaded image file
    if (imageFile) {
      const reader = new FileReader(); // FileReader to read the image file
      reader.onload = () => {
        const img = new Image(); // Create a new image element
        img.onload = () => {
          canvas.width = img.width; // Set canvas width to image width
          canvas.height = img.height; // Set canvas height to image height
          // Draw the image on the canvas
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          // Set text properties for the meme
          ctx.font = "30px Impact";
          ctx.fillStyle = "white"; // White text
          ctx.strokeStyle = "black"; // Black border around the text
          ctx.lineWidth = 2; // Width of the stroke
          ctx.textAlign = "center"; // Center-align the text
          // Add top text on the meme
          ctx.fillText(topTextInput.value.toUpperCase(), canvas.width / 2, 40);
          ctx.strokeText(
            topTextInput.value.toUpperCase(),
            canvas.width / 2,
            40
          );
          // Add bottom text on the meme
          ctx.fillText(
            bottomTextInput.value.toUpperCase(),
            canvas.width / 2,
            canvas.height - 20
          );
          ctx.strokeText(
            bottomTextInput.value.toUpperCase(),
            canvas.width / 2,
            canvas.height - 20
          );
          // Display the canvas and download button after generating the meme
          canvas.style.display = "block";
          downloadMemeButton.style.display = "block";
        };
        img.src = reader.result; // Set the image source to the file read result
      };
      reader.readAsDataURL(imageFile); // Read the image file as a Data URL
    } else {
      alert("Please upload an image to generate a meme."); // Error handling if no image is uploaded
    }
  });
  // Event listener to download the generated meme
  downloadMemeButton.addEventListener("click", () => {
    const link = document.createElement("a"); // Create an anchor element for download
    link.download = "meme.png"; // Set the filename for download
    link.href = canvas.toDataURL("image/png"); // Convert canvas content to a data URL
    link.click(); // Simulate a click to download the image
  });
});
