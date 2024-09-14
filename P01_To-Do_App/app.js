// app.js
// Tämä varmistaa, että JavaScript suoritetaan vasta, kun DOM on täysin latautunut
document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form"); // Lomake uusien tehtävien lisäämiseksi
  const todoInput = document.getElementById("todo-input"); // Tekstikenttä uusille tehtäville
  const todoList = document.getElementById("todo-list"); // Lista, johon tehtävät näytetään
  // Käsitellään lomakkeen lähetys
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Estää lomakkeen oletuslähetyksen, joka päivittäisi sivun
    const newTodoText = todoInput.value.trim(); // Haetaan syötetty tehtävä, poistetaan ylimääräiset välilyönnit alusta ja lopusta
    if (newTodoText !== "") {
      addTodoItem(newTodoText); // Jos syöte on kelvollinen, lisätään tehtävä
      todoInput.value = ""; // Tyhjennetään syöttökenttä tehtävän lisäämisen jälkeen
      todoInput.focus(); // Automaattisesti fokusoidaan syöttökenttä, jotta tehtävien lisääminen on helpompaa
    }
  });
  /**
   * Funktio uuden tehtävän lisäämiseen listaan.
   * @param {string} text - Uuden tehtävän teksti.
   */
  function addTodoItem(text) {
    // Luodaan uusi <li>-elementti edustamaan tehtävää
    const li = document.createElement("li");
    li.textContent = text; // Asetetaan tehtävän teksti
    // Luodaan painike tehtävän poistamiseksi
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Poista"; // Poistopainikkeen teksti
    // Lisätään tapahtumankuuntelija poistamaan tehtävä, kun poistopainiketta klikataan
    deleteButton.addEventListener("click", () => {
      // Lisätään häivytysefekti ennen tehtävän poistamista
      li.classList.add("fade-out");
      // Poistetaan tehtävä DOM:sta häivytysefektin jälkeen (0,5 sekunnin viive)
      setTimeout(() => todoList.removeChild(li), 500);
    });
    // Lisätään tapahtumankuuntelija tehtävän merkitsemiseksi valmiiksi, kun sitä klikataan
    li.addEventListener("click", () => {
      li.classList.toggle("completed"); // Vaihdetaan 'completed'-luokka merkitsemään/poistamaan merkintä valmiista tehtävistä
    });
    // Liitetään poistopainike tehtävään
    li.appendChild(deleteButton);
    // Asetetaan aluksi läpinäkyvyys nollaksi häivytysefektiä varten
    li.style.opacity = 0;
    // Lisätään uusi tehtävä listaan
    todoList.appendChild(li);
    // Häivytysefekti lyhyen viiveen jälkeen
    setTimeout(() => {
      li.style.opacity = 1; // Tehtävä häivyttyy näkyviin
    }, 10); // Viive sujuvaa häivytystä varten
  }
});
