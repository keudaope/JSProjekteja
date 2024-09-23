// Odota, että DOM latautuu kokonaan ennen kuin suoritat skriptin
document.addEventListener("DOMContentLoaded", () => {
  // Valitse DOM-elementit
  const billAmountInput = document.getElementById("bill-amount");
  const tipPercentageInput = document.getElementById("tip-percentage");
  const numberOfPeopleInput = document.getElementById("number-of-people");
  const calculateButton = document.getElementById("calculate-button");
  const resultDiv = document.getElementById("result");

  // Lisää tapahtumankuuntelija laskunappiin
  calculateButton.addEventListener("click", calculateSplit);

  // Funktio tippi- ja kokonaissumman laskemiseksi per henkilö
  function calculateSplit() {
    // Parsitaan syötearvot
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value);
    const numberOfPeople = parseInt(numberOfPeopleInput.value);

    // Tarkista syötearvot
    if (
      isNaN(billAmount) ||
      isNaN(tipPercentage) ||
      isNaN(numberOfPeople) ||
      numberOfPeople <= 0
    ) {
      resultDiv.textContent = "Syötä kelvolliset arvot.";
      resultDiv.style.color = "#e74c3c"; // Näytä virhe punaisella
      return;
    }

    // Laske tippi ja kokonaissumma
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    const amountPerPerson = totalAmount / numberOfPeople;

    // Näytä tulos tulosdivissä
    resultDiv.textContent = `Jokainen maksaa: $${amountPerPerson.toFixed(2)}`;
    resultDiv.style.color = "#2d3748"; // Palauta tekstin väri normaaliksi
  }
});
