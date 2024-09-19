// Odotetaan, että DOM latautuu kokonaan ennen skriptin suorittamista
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
});
