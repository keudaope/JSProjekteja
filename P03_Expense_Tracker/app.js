document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form"); // Lomake kulujen lisäämistä varten
  const expenseName = document.getElementById("expense-name"); // Syöttökenttä kulun nimelle
  const expenseAmount = document.getElementById("expense-amount"); // Syöttökenttä kulun summalle
  const expenseCategory = document.getElementById("expense-category"); // Pudotusvalikko kulun kategorian valitsemista varten
  const expenseList = document.getElementById("expense-list"); // Kontaineri lisättyjen kulujen näyttämiseen
  const summary = document.getElementById("summary"); // Kontaineri kaikkien kulujen yhteenvedon näyttämiseen
  let expenses = []; // Taulukko kulujen tallentamista varten
  // Tapahtumankuuntelija lomakkeen lähettämistä varten
  expenseForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Estetään lomakkeen lähetys, joka päivittäisi sivun
    const name = expenseName.value.trim(); // Haetaan kulun nimi
    const amount = parseFloat(expenseAmount.value); // Haetaan summa ja muunnetaan se numeroksi
    const category = expenseCategory.value; // Haetaan valittu kategoria
    // Jatketaan vain, jos kentät ovat kelvollisia
    if (name !== "" && !isNaN(amount) && category !== "") {
      const expense = { name, amount, category }; // Luodaan kulutietue
      expenses.push(expense); // Lisätään uusi kulu taulukkoon
      addExpenseItem(expense); // Kutsutaan funktiota kulun lisäämiseksi listaan
      updateSummary(); // Päivitetään kulujen yhteissumma
      expenseForm.reset(); // Nollataan lomake kulun lisäämisen jälkeen
    }
  });
  // Funktio uuden kulun lisäämiseksi listaan fade-in-efektillä
  function addExpenseItem(expense) {
    const div = document.createElement("div"); // Luodaan div-elementti kulutietueelle
    div.className = "expense-item added"; // Lisätään luokka tyylittelyä ja alkufade-in-efektiä varten
    // Annetaan jokaiselle kululle indeksi, jotta poistaminen on helpompaa
    const index = expenses.indexOf(expense);
    div.innerHTML = `
    <span>${expense.name} - ${expense.amount.toFixed(2)} € (${
      expense.category
    })</span>
    <button onclick="removeExpense(${index})">Poista</button>
    `; // Luodaan kuluerä poistopainikkeen kanssa
    div.setAttribute("data-index", index); // Annetaan mukautettu attribuutti jokaisen erän indeksin seuraamiseksi
    expenseList.appendChild(div); // Lisätään kuluerä listaan
    // Viive fade-in-efektin käynnistämiseksi
    setTimeout(() => {
      div.classList.add("show"); // Lisätään 'show'-luokka käynnistämään fade-in-efekti
    }, 10); // Lyhyt viive, jotta siirtymä ehtii aktivoitua
  }
  // Funktio kulujen yhteenvedon päivittämiseksi
  function updateSummary() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0); // Lasketaan kulujen yhteissumma
    summary.innerHTML = `<p>Yhteensä: ${total.toFixed(2)} €</p>`; // Näytetään yhteissumma
  }
  // Funktio kulun poistamiseksi listasta fade-out-efektillä
  window.removeExpense = function (index) {
    const expenseItem = expenseList.querySelector(`[data-index="${index}"]`); // Haetaan tietty kuluerä data-index-attribuutin avulla
    expenseItem.classList.add("removing"); // Lisätään luokka käynnistämään fade-out-efekti
    setTimeout(() => {
      expenses.splice(index, 1); // Poistetaan kulu taulukosta
      expenseList.removeChild(expenseItem); // Poistetaan kulu DOMista
      updateSummary(); // Päivitetään kulujen yhteissumma
    }, 400); // Viive, jotta fade-out-siirtymä ehtii suorittua
  };
});
