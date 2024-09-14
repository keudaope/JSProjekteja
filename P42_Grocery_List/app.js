// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get references to HTML elements
  const itemInput = document.getElementById("item-input");
  const addItemButton = document.getElementById("add-item-button");
  const itemList = document.getElementById("item-list");
  // Load saved grocery items from localStorage or initialize as an empty array
  let items = JSON.parse(localStorage.getItem("groceryItems")) || [];
  // Function to save items to localStorage
  function saveItems() {
    localStorage.setItem("groceryItems", JSON.stringify(items));
  }
  // Function to render all grocery items in the list
  function renderItems() {
    // Clear the list first before re-rendering
    itemList.innerHTML = "";
    // Loop through the items array and create list elements
    items.forEach((item, index) => {
      const li = document.createElement("li"); // Create a new list item
      li.innerHTML = `
 <span>${item}</span> <!-- Display the grocery item -->
 <button class="delete-button" data-index="${index}"> </button> ❌
<!-- Delete button with index reference -->
 `;
      itemList.appendChild(li); // Add the list item to the UL
    });
  }
  // Event listener for the Add Item button
  addItemButton.addEventListener("click", () => {
    const newItem = itemInput.value.trim(); // Get the input value and remove extra spaces
    if (newItem) {
      items.push(newItem); // Add the new item to the array
      itemInput.value = ""; // Clear the input field
      saveItems(); // Save the updated items to localStorage
      renderItems(); // Re-render the list
    }
  });
  // Event listener for the delete buttons
  itemList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-button")) {
      const index = e.target.getAttribute("data-index"); // Get the index from the button's data attribute
      items.splice(index, 1); // Remove the item from the array
      saveItems(); // Save the updated items to localStorage
      renderItems(); // Re-render the list
    }
  });
  // Initial render of the grocery list on page load
  renderItems();
});
