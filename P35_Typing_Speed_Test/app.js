document.addEventListener("DOMContentLoaded", () => {
  // Valitse DOM-elementit
  const testTextElement = document.getElementById("test-text");
  const typingArea = document.getElementById("typing-area");
  const startButton = document.getElementById("start-button");
  const resultDiv = document.getElementById("result");

  // Tallennetaan kirjoitettava teksti ja alustetaan muuttujat
  const testText = testTextElement.innerText;
  let startTime;
  let interval;

  // Funktio kirjoitustestin aloittamiseen
  function startTest() {
    typingArea.value = ""; // Tyhjennä tekstikenttä
    typingArea.disabled = false; // Ota kirjoittaminen käyttöön
    typingArea.focus(); // Aseta fokus tekstikenttään
    resultDiv.textContent = ""; // Tyhjennä aiemmat tulokset
    startButton.disabled = true; // Poista start-nappi käytöstä testin ajaksi
    startTime = new Date().getTime(); // Tallenna aloitusaika
    interval = setInterval(checkTyping, 100); // Aloita kirjoituksen tarkistus
  }

  // Funktio kirjoituksen etenemisen tarkistamiseen
  function checkTyping() {
    const typedText = typingArea.value;
    if (typedText === testText) {
      clearInterval(interval); // Lopeta tarkistus, kun teksti vastaa
      calculateResults();
    }
  }

  // Funktio kirjoitusnopeuden ja tarkkuuden laskemiseen
  function calculateResults() {
    const endTime = new Date().getTime(); // Tallenna lopetusaika
    const timeTaken = (endTime - startTime) / 1000; // Laske aika sekunteina
    const wordsTyped = testText.split(" ").length;
    const typingSpeed = (wordsTyped / timeTaken) * 60; // Sanat per minuutti
    const accuracy = calculateAccuracy(typingArea.value, testText);
    resultDiv.innerHTML = `Kirjoitusnopeus: ${typingSpeed.toFixed(
      2
    )} WPM<br>Tarkkuus: ${accuracy.toFixed(2)}%`; // Näytä tulokset
    typingArea.disabled = true; // Poista kirjoitus käytöstä testin jälkeen
    startButton.disabled = false; // Ota start-nappi takaisin käyttöön seuraavaa testiä varten
  }

  // Funktio tarkkuuden laskemiseen
  function calculateAccuracy(typed, original) {
    const typedWords = typed.split(" ");
    const originalWords = original.split(" ");
    let correctWords = 0;
    typedWords.forEach((word, index) => {
      if (word === originalWords[index]) {
        correctWords++;
      }
    });
    return (correctWords / originalWords.length) * 100; // Laske prosentuaalinen tarkkuus
  }

  // Tapahtumankuuntelija testin aloittamiselle
  startButton.addEventListener("click", startTest);
});
