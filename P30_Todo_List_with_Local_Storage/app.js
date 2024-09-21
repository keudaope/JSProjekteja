// Odota, kunnes DOM on täysin ladattu ennen kuin suoritat skriptin
document.addEventListener("DOMContentLoaded", () => {
  // Valitse tärkeät elementit
  const taskInput = document.getElementById("task-input"); // Tekstikenttä uusille tehtäville
  const addTaskButton = document.getElementById("add-task-button"); // Painike uuden tehtävän lisäämiseen
  const taskList = document.getElementById("task-list"); // Järjestämätön lista tehtävien näyttämiseksi
  // Hae olemassa olevat tehtävät localStoragesta tai alusta tyhjä taulukko, jos niitä ei ole
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // Funktio, joka tallentaa tehtävät taulukon localStorageen
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Muunna tehtävät taulukoksi JSON-muotoon ja tallenna se
  }
  // Funktio, joka piirtää (näyttää) tehtävät näytölle
  function renderTasks() {
    taskList.innerHTML = ""; // Tyhjennä nykyinen lista
    // Looppi, joka käy läpi tehtävätaulukon ja luo HTML-elementit jokaiselle tehtävälle
    tasks.forEach((task, index) => {
      // Luo listaelementti (li) jokaiselle tehtävälle
      const li = document.createElement("li");
      li.className = task.completed ? "completed" : ""; // Lisää 'completed'-luokka, jos tehtävä on merkitty valmiiksi
      // Määrittele jokaisen tehtävän sisältö, sisältäen valmis- ja poista-painikkeet
      li.innerHTML = `
 <span>${task.text}</span>
 <div>
 <button class="complete-button">${
   task.completed ? "Peruuta" : "Valmis"
 }</button>
 <button class="delete-button">Poista</button>
 </div>
 `;
      // Tapahtumakuuntelija 'Valmis'-painikkeelle
      const completeButton = li.querySelector(".complete-button");
      completeButton.addEventListener("click", () => {
        tasks[index].completed = !tasks[index].completed; // Vaihda tehtävän valmistumisen tila
        saveTasks(); // Tallenna päivitetyt tehtävät localStorageen
        renderTasks(); // Piirrä tehtävälista uudelleen
      });
      // Tapahtumakuuntelija 'Poista'-painikkeelle
      const deleteButton = li.querySelector(".delete-button");
      deleteButton.addEventListener("click", () => {
        tasks.splice(index, 1); // Poista tehtävä taulukosta
        saveTasks(); // Tallenna päivitetyt tehtävät localStorageen
        renderTasks(); // Piirrä tehtävälista uudelleen
      });
      // Lisää tehtävä (li) tehtävälistaan (ul)
      taskList.appendChild(li);
    });
  }
  // Tapahtumakuuntelija uuden tehtävän lisäämiseen
  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim(); // Hae tekstikentän sisältö ja poista ylimääräiset välilyönnit
    if (taskText) {
      // Varmista, että syöte ei ole tyhjä
      tasks.push({ text: taskText, completed: false }); // Lisää uusi tehtävä taulukkoon
      taskInput.value = ""; // Tyhjennä tekstikenttä
      saveTasks(); // Tallenna päivitetyt tehtävät localStorageen
      renderTasks(); // Piirrä tehtävälista uudelleen
    }
  });
  // Alusta tehtävien piirtäminen, kun sivu ladataan
  renderTasks();
});
