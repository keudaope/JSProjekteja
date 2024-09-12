// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const bookForm = document.getElementById("book-form");
  const bookTitleInput = document.getElementById("book-title");
  const bookAuthorInput = document.getElementById("book-author");
  const bookDescriptionInput = document.getElementById("book-description");
  const bookList = document.getElementById("book-list");
  // Attach an event listener to the form to handle new book submissions
  bookForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    // Get the values from the input fields
    const bookTitle = bookTitleInput.value.trim();
    const bookAuthor = bookAuthorInput.value.trim();
    const bookDescription = bookDescriptionInput.value.trim();
    if (bookTitle && bookAuthor && bookDescription) {
      addBook(bookTitle, bookAuthor, bookDescription); // Add the book to the list
      // Clear the input fields after submission
      bookTitleInput.value = "";
      bookAuthorInput.value = "";
      bookDescriptionInput.value = "";
    }
  });
  /**
   * Function to add a book to the wishlist
   * @param {string} title - The title of the book
   * @param {string} author - The author of the book
   * @param {string} description - A brief description of the book
   */
  function addBook(title, author, description) {
    const li = document.createElement("li"); // Create a new list item
    // Create the title element
    const titleElement = document.createElement("div");
    titleElement.textContent = title;
    titleElement.classList.add("book-item-title");
    li.appendChild(titleElement);
    // Create the author element
    const authorElement = document.createElement("div");
    authorElement.textContent = `by ${author}`;
    authorElement.classList.add("book-item-author");
    li.appendChild(authorElement);
    // Create the description element
    const descriptionElement = document.createElement("div");
    descriptionElement.textContent = description;
    descriptionElement.classList.add("book-item-description");
    li.appendChild(descriptionElement);
    // Create a delete button for each book item
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.classList.add("delete-btn"); // Add the class for styling
    li.appendChild(deleteBtn); // Add the delete button to the list item
    // Add the list item to the book list
    bookList.appendChild(li);
    // Attach event listener to the delete button
    deleteBtn.addEventListener("click", () => {
      bookList.removeChild(li); // Remove the book item from the list
    });
  }
});
