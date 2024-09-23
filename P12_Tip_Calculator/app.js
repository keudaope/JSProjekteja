// Odotetaan, että DOM latautuu kokonaan ennen skriptin suorittamista
<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    // Haetaan viittaukset lomakkeeseen, syötekenttiin ja tulosnäkymään
    const tipForm = document.getElementById('tip-form');
    const billAmountInput = document.getElementById('bill-amount');
    const tipPercentageSelect = document.getElementById('tip-percentage');
    const resultDiv = document.getElementById('result');

    /**
     * Lomakkeen lähetyksen kuuntelija
     * Tämä funktio estää oletuslomakkeen lähetyskäyttäytymisen ja
     * laskee tipin määrän
     */
    tipForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Estetään lomakkeen lähetys ja sivun päivitys
        // Haetaan laskun määrä ja tipin prosenttiosuus syötekentistä
        const billAmount = parseFloat(billAmountInput.value); // Muutetaan laskun määrä liukuluvuksi
        const tipPercentage = parseFloat(tipPercentageSelect.value); // Muutetaan tipin prosenttiosuus liukuluvuksi

        // Varmistetaan syötteiden oikeellisuus: varmistetaan, että laskun määrä ja tipin prosenttiosuus ovat numeroita
        if (isNaN(billAmount) || isNaN(tipPercentage)) {
            resultDiv.textContent = 'Anna kelvollinen laskun määrä ja valitse tipin prosenttiosuus.'; // Virheilmoitus
            return; // Lopetetaan toiminto, jos syöte on virheellinen
        }

        // Lasketaan tipin määrä ja pyöristetään se kahteen desimaaliin
        const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
        // Näytetään tulos tulosnäkymässä
        resultDiv.textContent = `Tipin määrä: $${tipAmount}`;
    });
=======
document.addEventListener("DOMContentLoaded", () => {
  // Haetaan viitteet lomakkeeseen, syötekenttiin ja tulosnäyttöön
  const tipForm = document.getElementById("tip-form");
  const billAmountInput = document.getElementById("bill-amount");
  const tipPercentageSelect = document.getElementById("tip-percentage");
  const resultDiv = document.getElementById("result");

  /**
   * Tapahtumakuuntelija lomakkeen lähetykselle
   * Tämä funktio estää lomakkeen oletusarvoisen lähetyksen ja
   * laskee juomarahan
   */
  tipForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Estetään lomakkeen lähetys, joka päivittäisi sivun
    // Haetaan laskun summa ja tipin prosenttiosuus syötekentistä
    const billAmount = parseFloat(billAmountInput.value); // Muutetaan laskun summa liukuluvuksi
    const tipPercentage = parseFloat(tipPercentageSelect.value); // Muutetaan tipin prosenttiosuus liukuluvuksi

    // Tarkistetaan syötteet: Varmistetaan, että sekä laskun summa että tipin prosentti ovat kelvollisia lukuja
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
      resultDiv.textContent =
        "Syötä kelvollinen laskun summa ja valitse tipin prosenttiosuus."; // Virheilmoitus
      return; // Lopetetaan toiminto, jos syöte on virheellinen
    }

    // Lasketaan juomarahan määrä ja pyöristetään se kahden desimaalin tarkkuuteen
    const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);

    // Näytetään tulos tulosalueella
    resultDiv.textContent = `Juomarahan määrä: $${tipAmount}`;
  });
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
});
