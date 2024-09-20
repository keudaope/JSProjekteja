// Odotetaan, että DOM latautuu kokonaan ennen kuin suoritetaan skripti
document.addEventListener("DOMContentLoaded", () => {
  // Valitaan DOM-elementit
  const bookForm = document.getElementById("book-form");
  const bookTitleInput = document.getElementById("book-title");
  const bookAuthorInput = document.getElementById("book-author");
  const bookDescriptionInput = document.getElementById("book-description");
  const bookList = document.getElementById("book-list");
  // Lisätään lomakkeeseen tapahtumankuuntelija uuden kirjan lisäämistä varten
  bookForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Estetään lomakkeen uudelleenlataus
    // Haetaan arvot syötekentistä
    const bookTitle = bookTitleInput.value.trim();
    const bookAuthor = bookAuthorInput.value.trim();
    const bookDescription = bookDescriptionInput.value.trim();
    if (bookTitle && bookAuthor && bookDescription) {
      addBook(bookTitle, bookAuthor, bookDescription); // Lisätään kirja listaan
      // Tyhjennetään syötekentät lähetyksen jälkeen
      bookTitleInput.value = "";
      bookAuthorInput.value = "";
      bookDescriptionInput.value = "";
    }
  });
  /**
   * Funktio, joka lisää kirjan toivelistaan
   * @param {string} title - Kirjan nimi
   * @param {string} author - Kirjan kirjoittaja
   * @param {string} description - Lyhyt kuvaus kirjasta
   */
  function addBook(title, author, description) {
    const li = document.createElement("li"); // Luodaan uusi listaelementti
    // Luodaan elementti kirjan nimelle
    const titleElement = document.createElement("div");
    titleElement.textContent = title;
    titleElement.classList.add("book-item-title");
    li.appendChild(titleElement);
    // Luodaan elementti kirjan kirjoittajalle
    const authorElement = document.createElement("div");
    authorElement.textContent = `by ${author}`;
    authorElement.classList.add("book-item-author");
    li.appendChild(authorElement);
    // Luodaan elementti kirjan kuvaukselle
    const descriptionElement = document.createElement("div");
    descriptionElement.textContent = description;
    descriptionElement.classList.add("book-item-description");
    li.appendChild(descriptionElement);
    // Luodaan poistonappi jokaiselle kirjalle
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Poista";
    deleteBtn.classList.add("delete-btn"); // Lisätään luokka tyylittelyä varten
    li.appendChild(deleteBtn); // Lisätään poistonappi listaelementtiin
    // Lisätään listaelementti kirjalistaan
    bookList.appendChild(li);
    // Lisätään tapahtumankuuntelija poistonapille
    deleteBtn.addEventListener("click", () => {
      bookList.removeChild(li); // Poistetaan kirja listasta
    });
  }
});
