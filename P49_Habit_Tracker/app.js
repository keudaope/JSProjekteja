// document.addEventListener("DOMContentLoaded", () => {
//   const habitInput = document.getElementById("habit-input"); // Syötekenttä uuden tavan lisäämiselle
//   const addHabitButton = document.getElementById("add-habit-button"); // Nappi tavan lisäämistä varten
//   const habitsDiv = document.getElementById("habits"); // Kontti, joka näyttää tapojen listan
//   // Haetaan tavat localStoragesta tai alustetaan tyhjällä taulukolla
//   let habits = JSON.parse(localStorage.getItem("habits")) || [];
//   /**
//    * Funktio tallentamaan tavat localStorageen
//    */
//   function saveHabits() {
//     localStorage.setItem("habits", JSON.stringify(habits));
//   }
//   /**
//    * Funktio tapojen piirtämiseen näytölle
//    */
//   function renderHabits() {
//     habitsDiv.innerHTML = ""; // Tyhjennä nykyiset tavat DOM:sta
//     // Käydään läpi jokainen tapa ja luodaan vastaavat DOM-elementit
//     habits.forEach((habit, habitIndex) => {
//       const habitDiv = document.createElement("div"); // Luodaan pääasiallinen tapa-div
//       habitDiv.classList.add("habit");
//       // Määritetään innerHTML tavan nimellä ja sen päivillä
//       habitDiv.innerHTML = `
//  <span class="habit-name">${habit.name}</span>
//  <div class="days">
//  ${habit.days
//    .map(
//      (completed, dayIndex) => `
//  <div class="day ${
//    completed ? "completed" : ""
//  }" data-habit-index="${habitIndex}" data-day-index="${dayIndex}"></div>
//  `
//    )
//    .join("")}
//  </div>
//  `;
//       habitsDiv.appendChild(habitDiv); // Liitetään tapa-div pääasialliseen tapojen konttiin
//     });
//     // Lisätään klikkaustapahtuma jokaiselle päivälle, jotta se voidaan merkitä tehdyksi/tekemättömäksi
//     document.querySelectorAll(".day").forEach((day) => {
//       day.addEventListener("click", (e) => {
//         const habitIndex = e.target.getAttribute("data-habit-index");
//         const dayIndex = e.target.getAttribute("data-day-index");

//         // Vaihdetaan klikatun päivän suoritustilaa
//         habits[habitIndex].days[dayIndex] = !habits[habitIndex].days[dayIndex];

//         saveHabits(); // Tallennetaan päivitetyt tavat localStorageen
//         renderHabits(); // Piirretään tavat uudelleen, jotta muutokset näkyvät
//       });
//     });
//   }
//   /**
//    * Lisää tapa -napin toiminnallisuus
//    */
//   addHabitButton.addEventListener("click", () => {
//     const habitName = habitInput.value.trim(); // Haetaan syötetty arvo

//     if (habitName === "") {
//       alert("Anna tapa."); // Varmistetaan, ettei käyttäjä lisää tyhjää tapaa
//       return;
//     }
//     // Luodaan uusi tapa-objekti, jossa 7 päivää alustettu false-arvolla (ei suoritettu)
//     const newHabit = {
//       name: habitName,
//       days: new Array(7).fill(false),
//     };
//     habits.push(newHabit); // Lisätään uusi tapa tapojen taulukkoon
//     habitInput.value = ""; // Tyhjennetään syötekenttä
//     saveHabits(); // Tallennetaan päivitetyt tavat localStorageen
//     renderHabits(); // Piirretään tavat uudelleen
//   });
//   // Piirretään tavat sivun latautuessa
//   renderHabits();
// });
document.addEventListener("DOMContentLoaded", () => {
  const habitInput = document.getElementById("habit-input"); // Syötekenttä uuden tavan lisäämiselle
  const addHabitButton = document.getElementById("add-habit-button"); // Nappi tavan lisäämistä varten
  const habitsDiv = document.getElementById("habits"); // Kontti, joka näyttää tapojen listan
  // Haetaan tavat localStoragesta tai alustetaan tyhjällä taulukolla
  let habits = JSON.parse(localStorage.getItem("habits")) || [];

  /**
   * Funktio tallentamaan tavat localStorageen
   */
  function saveHabits() {
    localStorage.setItem("habits", JSON.stringify(habits));
  }

  /**
   * Funktio tapojen piirtämiseen näytölle
   */
  function renderHabits() {
    habitsDiv.innerHTML = ""; // Tyhjennä nykyiset tavat DOM:sta
    // Käydään läpi jokainen tapa ja luodaan vastaavat DOM-elementit
    habits.forEach((habit, habitIndex) => {
      const habitDiv = document.createElement("div"); // Luodaan pääasiallinen tapa-div
      habitDiv.classList.add("habit");
      // Määritetään innerHTML tavan nimellä ja sen päivillä
      habitDiv.innerHTML = `
        <span class="habit-name">${habit.name}</span>
        <div class="days">
        ${habit.days
          .map(
            (completed, dayIndex) => `
          <div class="day ${completed ? "completed" : ""}" 
               data-habit-index="${habitIndex}" 
               data-day-index="${dayIndex}">
          </div>
          `
          )
          .join("")}
        </div>
      `;
      habitsDiv.appendChild(habitDiv); // Liitetään tapa-div pääasialliseen tapojen konttiin
    });
    // Lisätään klikkaustapahtuma jokaiselle päivälle, jotta se voidaan merkitä tehdyksi/tekemättömäksi
    document.querySelectorAll(".day").forEach((day) => {
      day.addEventListener("click", (e) => {
        const habitIndex = e.target.getAttribute("data-habit-index");
        const dayIndex = e.target.getAttribute("data-day-index");

        // Vaihdetaan klikatun päivän suoritustilaa
        habits[habitIndex].days[dayIndex] = !habits[habitIndex].days[dayIndex];

        saveHabits(); // Tallennetaan päivitetyt tavat localStorageen
        renderHabits(); // Piirretään tavat uudelleen, jotta muutokset näkyvät
      });
    });
  }

  /**
   * Lisää tapa -napin toiminnallisuus
   */
  addHabitButton.addEventListener("click", () => {
    const habitName = habitInput.value.trim(); // Haetaan syötetty arvo

    if (habitName === "") {
      alert("Anna tapa."); // Varmistetaan, ettei käyttäjä lisää tyhjää tapaa
      return;
    }
    // Luodaan uusi tapa-objekti, jossa 7 päivää alustettu false-arvolla (ei suoritettu)
    const newHabit = {
      name: habitName,
      days: new Array(7).fill(false),
    };
    habits.push(newHabit); // Lisätään uusi tapa tapojen taulukkoon
    habitInput.value = ""; // Tyhjennetään syötekenttä
    saveHabits(); // Tallennetaan päivitetyt tavat localStorageen
    renderHabits(); // Piirretään tavat uudelleen
  });

  // Piirretään tavat sivun latautuessa
  renderHabits();
});
