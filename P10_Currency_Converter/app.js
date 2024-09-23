<<<<<<< HEAD
// Odota, että DOM latautuu kokonaan ennen kuin suoritat skriptin, jotta kaikki elementit ovat käytettävissä
document.addEventListener('DOMContentLoaded', () => {
    // Valitse avainelementit DOM:sta, joita käytetään skriptissä
    const converterForm = document.getElementById('converter-form'); // Lomake valuuttamuunnoksen lähettämistä varten
    const amountInput = document.getElementById('amount'); // Syötekenttä muunnettavalle summalle
    const fromCurrencySelect = document.getElementById('from-currency'); // Valikko lähtövaluutan valitsemiseen
    const toCurrencySelect = document.getElementById('to-currency'); // Valikko kohdevaluutan valitsemiseen
    const resultDiv = document.getElementById('result'); // Div, jossa näytetään muuntotulos
    // Määritä API-URL, josta haetaan valuuttakurssit, käyttäen USD:ta oletusvaluuttana
    const apiURL = 'https://api.exchangerate-api.com/v4/latest/USD';
    /**
    * Hae valuuttatiedot API:sta, kun sivu latautuu.
    * Tämä fetch-pyyntö hakee uusimmat valuuttakurssit käyttäen USD:ta perusvaluuttana.
    * Tiedot sisältävät kurssit USD:sta muihin valuuttoihin, joita käytetään
   pudotusvalikoiden täyttämiseen.
    */
    fetch(apiURL)
    .then(response => response.json()) // Muunna API:n JSON-vastaus
    .then(data => {
    // Ota lista valuutoista API-vastauksesta
    const currencies = Object.keys(data.rates); // `data.rates` sisältää valuuttakurssit jokaiselle valuutalle
   
    // Täytä dynaamisesti sekä "Lähtö"- että "Kohde"-valuuttavalikot
    currencies.forEach(currency => {
    // Luo uusi vaihtoehto "Lähtö"-valuuttavalikkoon
    const optionFrom = document.createElement('option');
    optionFrom.value = currency; // Aseta vaihtoehdon arvoksi valuuttakoodi (esim. USD, EUR)
    optionFrom.textContent = currency; // Näytä valuuttakoodi vaihtoehdon tekstinä
    fromCurrencySelect.appendChild(optionFrom); // Lisää vaihtoehto "Lähtö"-valuuttavalikkoon
    // Luo uusi vaihtoehto "Kohde"-valuuttavalikkoon
    const optionTo = document.createElement('option');
    optionTo.value = currency; // Aseta vaihtoehdon arvoksi valuuttakoodi
    optionTo.textContent = currency; // Näytä valuuttakoodi vaihtoehdon tekstinä
    toCurrencySelect.appendChild(optionTo); // Lisää vaihtoehto "Kohde"-valuuttavalikkoon
    });
    })
    .catch(error => {
    // Käsittele virheitä, jotka tapahtuvat fetch-pyynnön aikana (esim. verkkoyhteysongelmat, API-virheet)
    console.error('Virhe valuuttatietojen haussa:', error); // Kirjaa virhe konsoliin virheenkorjausta varten
    resultDiv.textContent = 'Valuuttatietojen lataaminen epäonnistui.'; // Ilmoita käyttäjälle, että valuuttatietoja ei saatu ladattua
    });
    /**
    * Käsittele lomakkeen lähetys valuuttamuunnoksen suorittamiseksi.
    * Kun käyttäjä lähettää lomakkeen, tämä tapahtumankuuntelija estää oletusarvoisen
   lomakkeen toiminnan (sivun päivityksen)
    * ja sen sijaan suorittaa valuuttamuunnoksen valittujen syötteiden avulla.
    */
    converterForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Estä lomakkeen perinteinen lähettäminen (joka päivittäisi sivun)
    // Hae käyttäjän syöttämä summa ja muunna se desimaaliluvuksi
    const amount = parseFloat(amountInput.value);
    // Hae valittu lähtövaluutta (valuutta, josta muunnetaan)
    const fromCurrency = fromCurrencySelect.value;
    // Hae valittu kohdevaluutta (valuutta, johon muunnetaan)
    const toCurrency = toCurrencySelect.value;
    // Varmista käyttäjän syötteiden oikeellisuus: varmista, että summa on kelvollinen ja että molemmat valuutat on valittu
    if (isNaN(amount) || !fromCurrency || !toCurrency) {
    resultDiv.textContent = 'Anna kelvollinen summa ja valitse valuutat.'; // Näytä virheilmoitus käyttäjälle
    return; // Lopeta suoritus, jos syöte on virheellinen
    }
    /**
    * Hae valuuttakurssit valitulle "lähtö" valuutalle.
    * API-URL rakennetaan dynaamisesti valitun "lähtö"-valuutan avulla.
    * Esimerkiksi, jos käyttäjä valitsee "EUR", API hakee muuntokurssit käyttäen EUR:ta perusvaluuttana.
    */
   fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
   .then(response => response.json()) // Muunna API:n JSON-vastaus
   .then(data => {
   // Hae muuntokurssi valitulle "kohde" valuutalle API:n tiedoista
   const conversionRate = data.rates[toCurrency]; // `data.rates` sisältää kurssit kaikille valuutoille
   // Laske muunnettu summa kertomalla käyttäjän syöttämä summa muuntokurssilla
   const convertedAmount = (amount * conversionRate).toFixed(2); // Pyöristä 2 desimaaliin valuutan esittämistä varten
   // Päivitä tulosdivi muotoillulla muuntotuloksella
   resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
   })
   .catch(error => {
   // Käsittele virheitä, jotka tapahtuvat fetch-pyynnön aikana (esim. verkkoyhteysongelmat, API-virheet)
   console.error('Virhe muuntotietojen haussa:', error); // Kirjaa virhe konsoliin virheenkorjausta varten
   resultDiv.textContent = 'Valuutan muuntaminen epäonnistui.'; // Näytä virheilmoitus käyttäjälle
   });
   });
   });
   
=======
// Odota, että DOM latautuu kokonaan ennen JavaScriptin suorittamista, jotta kaikki elementit ovat käytettävissä
document.addEventListener("DOMContentLoaded", () => {
  // Valitse keskeiset elementit DOM:sta, joita käytetään skriptissä
  const converterForm = document.getElementById("converter-form"); // Lomake valuutan muuntamiselle
  const amountInput = document.getElementById("amount"); // Syötekenttä summalle, joka muunnetaan
  const fromCurrencySelect = document.getElementById("from-currency"); // Valintalista perusvaluutalle
  const toCurrencySelect = document.getElementById("to-currency"); // Valintalista kohdevaluutalle
  const resultDiv = document.getElementById("result"); // Div, jossa muuntotulos näytetään

  // Määritä API-URL, jolla haetaan valuuttakursseja, käyttäen USD:ta oletusvaluuttana
  const apiURL = "https://api.exchangerate-api.com/v4/latest/USD";

  /**
   * Hae valuuttadata API:sta, kun sivu ladataan.
   * Tämä pyyntö hakee uusimmat valuuttakurssit käyttäen USD:ta perusvaluuttana.
   * Data sisältää kurssit USD:sta muihin valuuttoihin, joita käytetään valintalistojen täyttämiseen.
   */
  fetch(apiURL)
    .then((response) => response.json()) // Parsitaan JSON-vastaus API:sta
    .then((data) => {
      // Poimitaan valuuttojen lista API-vastauksesta
      const currencies = Object.keys(data.rates); // `data.rates` sisältää valuuttakurssit jokaista valuuttaa varten

      // Täytetään dynaamisesti sekä "From" että "To" valuuttavalintalistat
      currencies.forEach((currency) => {
        // Luodaan uusi optioelementti "From" valuuttavalintalistaan
        const optionFrom = document.createElement("option");
        optionFrom.value = currency; // Asetetaan option arvoksi valuuttakoodi (esim. USD, EUR)
        optionFrom.textContent = currency; // Näytetään valuuttakoodi option tekstinä
        fromCurrencySelect.appendChild(optionFrom); // Lisätään optio "From" valuuttalistaan

        // Luodaan uusi optioelementti "To" valuuttavalintalistaan
        const optionTo = document.createElement("option");
        optionTo.value = currency; // Asetetaan option arvoksi valuuttakoodi
        optionTo.textContent = currency; // Näytetään valuuttakoodi option tekstinä
        toCurrencySelect.appendChild(optionTo); // Lisätään optio "To" valuuttalistaan
      });
    })
    .catch((error) => {
      // Käsitellään mahdolliset virheet hakupyynnön aikana (esim. verkko-ongelmat, API:n virhe)
      console.error("Virhe valuuttadatan hakemisessa:", error); // Kirjataan virhe konsoliin virheenkorjausta varten
      resultDiv.textContent = "Valuuttadatan lataaminen epäonnistui."; // Ilmoitetaan käyttäjälle, että valuuttadataa ei saatu ladattua
    });

  /**
   * Käsitellään lomakkeen lähetys valuutan muuntamista varten.
   * Kun käyttäjä lähettää lomakkeen, tämä tapahtumankuuntelija estää oletusarvoisen
   * lomakkeen käyttäytymisen (sivun uudelleenlataus)
   * ja käynnistää sen sijaan valuutan muuntamisen käyttäen valittuja syötteitä.
   */
  converterForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Estetään lomakkeen perinteinen lähettäminen (joka uudelleenlataisi sivun)

    // Haetaan käyttäjän syöttämä summa ja muunnetaan se liukuluvuksi (desimaaliluku)
    const amount = parseFloat(amountInput.value);

    // Haetaan valittu perusvaluutta (valuutta, josta muunnetaan)
    const fromCurrency = fromCurrencySelect.value;

    // Haetaan valittu kohdevaluutta (valuutta, johon muunnetaan)
    const toCurrency = toCurrencySelect.value;

    // Varmistetaan käyttäjän syöte: varmistetaan, että summa on kelvollinen luku ja että molemmat valuutat on valittu
    if (isNaN(amount) || !fromCurrency || !toCurrency) {
      resultDiv.textContent = "Syötä kelvollinen summa ja valitse valuutat."; // Näytetään virheilmoitus käyttäjälle
      return; // Lopetetaan suoritus, jos syöte on virheellinen
    }

    /**
     * Hae valuuttakurssit valitulle "from" valuutalle.
     * API-URL rakennetaan dynaamisesti käyttäen valittua "from" valuuttaa.
     * Esimerkiksi, jos käyttäjä valitsee "EUR", API hakee muuntokurssit EUR:sta muihin valuuttoihin.
     */
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => response.json()) // Parsitaan JSON-vastaus API:sta
      .then((data) => {
        // Haetaan muuntokurssi valitulle "to" valuutalle API-datasta
        const conversionRate = data.rates[toCurrency]; // `data.rates` sisältää valuuttakurssit kaikille valuutoille

        // Lasketaan muunnettu summa kertomalla käyttäjän syöte (amount) muuntokurssilla
        const convertedAmount = (amount * conversionRate).toFixed(2); // Pyöristetään kahden desimaalin tarkkuuteen

        // Päivitetään tulos diviin muotoiltu muuntotulos
        resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
      })
      .catch((error) => {
        // Käsitellään mahdolliset virheet hakupyynnön aikana (esim. verkko-ongelmat, API:n virhe)
        console.error("Virhe muuntodatan hakemisessa:", error); // Kirjataan virhe konsoliin virheenkorjausta varten
        resultDiv.textContent = "Valuutan muuntaminen epäonnistui."; // Näytetään virheilmoitus käyttäjälle
      });
  });
});
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
