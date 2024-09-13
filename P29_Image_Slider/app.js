document.addEventListener("DOMContentLoaded", () => {
  // Select all the images inside the slider container
  const images = document.querySelectorAll(".slider img");

  // Select the navigation buttons
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  // Variable to keep track of the current active image index
  let currentIndex = 0;
  // Function to display the image based on the index
  function showImage(index) {
    // Loop through all images
    images.forEach((img, i) => {
      // Remove the 'active' class from all images
      img.classList.remove("active");

      // Add the 'active' class only to the image that matches the current index
      if (i === index) {
        img.classList.add("active");
      }
    });
  }
  // Function to display the next image in the sequence
  function showNextImage() {
    // Increment the current index and loop back to the first image if it exceeds the last index
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex); // Call the showImage function to update the display
  }
  // Function to display the previous image in the sequence
  function showPrevImage() {
    // Decrement the current index and loop back to the last image if it goes below 0
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex); // Call the showImage function to update the display
  }
  // Add event listeners to the navigation buttons
  prevButton.addEventListener("click", showPrevImage); // Show the previous image when the "Previous" button is clicked
  nextButton.addEventListener("click", showNextImage); // Show the next image when the "Next" button is clicked
  // Initial display of the first image
  showImage(currentIndex); // Display the first image by default when the page loads
});
