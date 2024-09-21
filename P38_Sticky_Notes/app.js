// Odota, että DOM on kokonaan ladattu ennen kuin suoritat skriptin
document.addEventListener("DOMContentLoaded", () => {
  // Hae painike uuden muistiinpanon lisäämiseksi ja kontti, jossa muistiinpanot näytetään
  const addNoteButton = document.getElementById("add-note-button");
  const notesContainer = document.getElementById("notes-container");
  // Hae olemassa olevat muistiinpanot localStoragesta tai aloita tyhjällä taulukolla, jos niitä ei ole
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  // Funktio, joka renderöi kaikki muistiinpanot käymällä läpi notes-taulukon
  function renderNotes() {
    // Tyhjennä muistiinpanojen kontti kaksoiskappaleiden välttämiseksi
    notesContainer.innerHTML = "";
    // Käy jokainen muistiinpano läpi ja luo uusi muistiinpanoelementti
    notes.forEach((note) => {
      createNoteElement(note.id, note.content);
    });
  }
  // Funktio luo uuden muistiinpanoelementin, jolla on ainutlaatuinen id ja sisältö
  function createNoteElement(id, content = "") {
    // Luo muistiinpanon div
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
    // Aseta muistiinpanon sisällöksi textarea kenttä ja poistonappi
    noteElement.innerHTML = `
      <textarea>${content}</textarea>
      <button class="delete-note">X</button>
    `;
    // Valitse textarea ja poistonappi muistiinpanosta
    const textarea = noteElement.querySelector("textarea");
    const deleteButton = noteElement.querySelector(".delete-note");
    // Kun textarea:ta muokataan, päivitä muistiinpanon sisältö
    textarea.addEventListener("input", () => {
      updateNoteContent(id, textarea.value);
    });
    // Kun poistonappia painetaan, poista muistiinpano
    deleteButton.addEventListener("click", () => {
      deleteNote(id);
    });
    // Lisää uusi muistiinpanoelementti konttiin
    notesContainer.appendChild(noteElement);
  }
  // Funktio uuden muistiinpanon lisäämiseksi notes-taulukkoon
  function addNote() {
    // Luo uusi muistiinpano-objekti ainutlaatuisella id:llä ja tyhjällä sisällöllä
    const note = {
      id: Date.now(), // Käytä nykyistä aikaleimaa ainutlaatuisena id:nä
      content: "",
    };
    // Lisää uusi muistiinpano taulukkoon
    notes.push(note);
    // Tallenna päivitetty notes-taulukko localStorageen
    saveNotes();
    // Renderöi uusi muistiinpano näytölle
    createNoteElement(note.id, note.content);
  }
  // Funktio päivittää olemassa olevan muistiinpanon sisältöä
  function updateNoteContent(id, content) {
    // Etsi muistiinpano, jolla on annettu id taulukosta
    const note = notes.find((note) => note.id === id);
    if (note) {
      // Päivitä löydetyn muistiinpanon sisältö
      note.content = content;
      // Tallenna päivitetty notes-taulukko localStorageen
      saveNotes();
    }
  }
  // Funktio poistaa muistiinpanon id:n perusteella
  function deleteNote(id) {
    // Suodata pois poistettava muistiinpano notes-taulukosta
    notes = notes.filter((note) => note.id !== id);
    // Tallenna päivitetty notes-taulukko localStorageen
    saveNotes();
    // Renderöi kaikki muistiinpanot uudelleen poiston heijastamiseksi
    renderNotes();
  }
  // Funktio tallentaa notes-taulukon localStorageen
  function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  // Lisää uusi muistiinpano, kun 'Add Note' -painiketta painetaan
  addNoteButton.addEventListener("click", addNote);
  // Sivun latautuessa renderöi kaikki olemassa olevat muistiinpanot localStoragesta
  renderNotes();
});
