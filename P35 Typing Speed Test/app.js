document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const testTextElement = document.getElementById("test-text");
  const typingArea = document.getElementById("typing-area");
  const startButton = document.getElementById("start-button");
  const resultDiv = document.getElementById("result");
  // Store the text to be typed and initialize variables
  const testText = testTextElement.innerText;
  let startTime;
  let interval;
  // Function to start the typing test
  function startTest() {
    typingArea.value = ""; // Clear the textarea
    typingArea.disabled = false; // Enable typing
    typingArea.focus(); // Set focus on textarea
    resultDiv.textContent = ""; // Clear previous result
    startButton.disabled = true; // Disable the start button during the test
    startTime = new Date().getTime(); // Record start time
    interval = setInterval(checkTyping, 100); // Start checking typing
  }
  // Function to check the typing progress
  function checkTyping() {
    const typedText = typingArea.value;
    if (typedText === testText) {
      clearInterval(interval); // Stop checking once text matches
      calculateResults();
    }
  }
  // Function to calculate typing speed and accuracy
  function calculateResults() {
    const endTime = new Date().getTime(); // Record end time
    const timeTaken = (endTime - startTime) / 1000; // Calculate time in seconds
    const wordsTyped = testText.split(" ").length;
    const typingSpeed = (wordsTyped / timeTaken) * 60; // Words per minute
    const accuracy = calculateAccuracy(typingArea.value, testText);
    resultDiv.innerHTML = `Typing Speed: ${typingSpeed.toFixed(
      2
    )} WPM<br>Accuracy: ${accuracy.toFixed(2)}%`; // Display results
    typingArea.disabled = true; // Disable typing area after test
    startButton.disabled = false; // Enable start button for next test
  }
  // Function to calculate accuracy
  function calculateAccuracy(typed, original) {
    const typedWords = typed.split(" ");
    const originalWords = original.split(" ");
    let correctWords = 0;
    typedWords.forEach((word, index) => {
      if (word === originalWords[index]) {
        correctWords++;
      }
    });
    return (correctWords / originalWords.length) * 100; // Calculate percentage accuracy
  }
  // Event listener for starting the test
  startButton.addEventListener("click", startTest);
});
