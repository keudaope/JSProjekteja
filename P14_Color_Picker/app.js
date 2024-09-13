// Wait until the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the color picker input, color code display, and copy button    elements
    const colorPicker = document.getElementById('color-picker');
    const colorCode = document.getElementById('color-code');
    const copyButton = document.getElementById('copy-button');
    /**
    * Update the displayed color code when a new color is selected
    * The color picker returns a hexadecimal value, which is displayed in the
   colorCode element.
    */
    colorPicker.addEventListener('input', () => {
    // Update the color code display with the selected color
    colorCode.textContent = colorPicker.value;
    });
    /**
    * Copy the current color code to the clipboard when the copy button is
   clicked
    * Uses the Clipboard API to copy text to the user's clipboard.
    */
   copyButton.addEventListener('click', () => {
    // Copy the displayed color code to the clipboard
    navigator.clipboard.writeText(colorCode.textContent)
    .then(() => {
    // Indicate success by changing the button text
    copyButton.textContent = 'Copied!';
    // Reset the button text after 2 seconds
    setTimeout(() => {
    copyButton.textContent = 'Copy Color';
    }, 2000);
    })
    .catch(err => {
    // Log any errors that occur during the copy operation
    console.error('Failed to copy text: ', err);
    });
    });
   });