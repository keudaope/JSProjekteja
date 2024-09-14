document.addEventListener("DOMContentLoaded", () => {
  // Valitaan elementit DOM:sta
  const noteForm = document.getElementById("note-form"); // Lomake uusille muistiinpanoille
  const noteInput = document.getElementById("note-input"); // Syöttökenttä muistiinpanon tekstille
  const noteList = document.getElementById("note-list"); // Kontaineri muistiinpanojen näyttämiseen
  // Taulukko muistiinpanojen tallentamista varten, alustetaan localStoragesta jos saatavilla
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  /**
   * Tallentaa muistiinpanot-taulukon localStorageen.
   */
  function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes)); // Tallentaa muistiinpanot localStorageen
  }
  /**
   * Lisää uuden muistiinpanon DOM:iin fade-in-efektillä.
   * @param {string} note - Muistiinpanon teksti, joka näytetään.
   */
  function addNoteItem(note) {
    const div = document.createElement("div"); // Luodaan uusi div muistiinpanoa varten
    div.className = "note-item adding"; // Lisätään 'adding'-luokka fade-in-efektiä varten
    // Asetetaan innerHTML muistiinpanotekstillä ja muokkaa/poista-painikkeilla
    div.innerHTML = `
    <input type="text" value="${note}" readonly> <!-- Vain luku -syöttökenttä muistiinpanolle -->
    <button class="edit" onclick="editNoteItem(this)">Muokkaa</button> <!-- Muokkaa-painike -->
    <button onclick="deleteNoteItem(this)">Poista</button> <!-- Poista-painike -->
    `;
    // Lisätään uusi muistiinpano muistiinpanolistaan
    noteList.appendChild(div);
    // Käynnistetään fade-in-efekti lyhyen viiveen jälkeen
    setTimeout(() => {
      div.classList.add("show"); // Lisätään 'show'-luokka täydelle näkyvyydelle
    }, 10);
  }
  /**
   * Renderöi kaikki muistiinpanot iteroinnin avulla muistiinpanot-taulukosta.
   */
  function renderNotes() {
    noteList.innerHTML = ""; // Tyhjennetään nykyiset muistiinpanot
    notes.forEach((note) => addNoteItem(note)); // Lisätään jokainen muistiinpano taulukosta listaan
  }
  /**
   * Käsittelee muistiinpanon muokkaustoiminnon.
   * @param {HTMLElement} button - Muokkaa-painike, jota klikattiin.
   */
  window.editNoteItem = function (button) {
    const input = button.previousElementSibling; // Valitaan syöttökenttä, joka on ennen painiketta
    if (button.textContent === "Muokkaa") {
      input.removeAttribute("readonly"); // Tehdään syöttökentästä muokattava
      input.focus(); // Fokusoidaan kenttä muokkausta varten
      button.textContent = "Tallenna"; // Vaihdetaan painikkeen tekstiksi 'Tallenna'
    } else {
      const index = Array.from(noteList.children).indexOf(button.parentElement); // Haetaan muistiinpanon indeksi
      notes[index] = input.value; // Päivitetään muistiinpano taulukossa
      saveNotes(); // Tallennetaan päivitetyt muistiinpanot
      renderNotes(); // Renderöidään muistiinpanot uudelleen
    }
  };
  /**
   * Poistaa muistiinpanon fade-out-efektillä.
   * @param {HTMLElement} button - Poista-painike, jota klikattiin.
   */
  window.deleteNoteItem = function (button) {
    const noteItem = button.parentElement; // Valitaan muistiinpanokohde
    const index = Array.from(noteList.children).indexOf(noteItem); // Haetaan muistiinpanon indeksi
    // Lisätään 'removing'-luokka fade-out-efektin käynnistämiseksi
    noteItem.classList.add("removing");
    // Odotetaan siirtymän päättymistä ennen muistiinpanon poistamista
    setTimeout(() => {
      notes.splice(index, 1); // Poistetaan muistiinpano taulukosta
      saveNotes(); // Tallennetaan päivitetyt muistiinpanot
      renderNotes(); // Renderöidään muistiinpanot uudelleen
    }, 500); // Viive, joka vastaa siirtymän kestoa
  };
  /**
   * Käsittelee lomakkeen lähetyksen uuden muistiinpanon lisäämiseksi.
   */
  noteForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Estetään oletuslomakkeen lähetys
    const note = noteInput.value.trim(); // Haetaan ja trimmataan syötteen arvo
    if (note !== "") {
      // Varmistetaan, että muistiinpano ei ole tyhjä
      notes.push(note); // Lisätään uusi muistiinpano taulukkoon
      saveNotes(); // Tallennetaan päivitetty muistiinpanot-taulukko
      renderNotes(); // Renderöidään muistiinpanot uudelleen
      noteForm.reset(); // Nollataan lomakkeen syötekenttä
    }
  });
  // Alustava muistiinpanojen renderöinti sivun latautuessa
  renderNotes();
});
