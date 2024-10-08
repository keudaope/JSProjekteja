document.addEventListener("DOMContentLoaded", () => {
  // Valitaan näyttöelementti, jossa numerot ja tulos näytetään
  const display = document.getElementById("display");
  // Valitaan kaikki laskimen painikkeet
  const buttons = document.querySelectorAll("button");

  // Muuttujat, jotka säilyttävät nykyisen ja edellisen operaattorin sekä laskutoimituksen
  let currentOperand = "";
  let previousOperand = "";
  let operator = null;
  // Käydään läpi jokainen painike ja lisätään klikkaustapahtuman kuuntelija
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Käsitellään numeropainikkeet
      if (button.hasAttribute("data-number")) {
        appendNumber(button.getAttribute("data-number"));
      }
      // Käsitellään operaattoripainikkeet
      else if (button.hasAttribute("data-operator")) {
        chooseOperator(button.getAttribute("data-operator"));
      }
      // Käsitellään yhtäläisyyspainike
      else if (button.id === "equal") {
        compute();
      }
      // Käsitellään tyhjennyspainike
      else if (button.id === "clear") {
        clear();
      }
      // Päivitetään näyttö jokaisen toiminnon jälkeen
      updateDisplay();
    });
  });
  // Funktio, joka lisää numeron nykyiseen operandin arvoon
  function appendNumber(number) {
    // Estetään useamman nollan lisääminen alussa
    if (number === "0" && currentOperand === "0") return;
    // Lisätään uusi numero nykyiseen operandin arvoon
    currentOperand = currentOperand.toString() + number.toString();
  }
  // Funktio operaattorin valitsemiseksi
  function chooseOperator(selectedOperator) {
    // Ei tehdä mitään, jos numeroa ei ole annettu
    if (currentOperand === "") return;
    // Suoritetaan laskutoimitus, jos edellinen numero ja operaattori on olemassa
    if (previousOperand !== "") {
      compute();
    }
    // Asetetaan valittu operaattori ja valmistellaan seuraavaa numeroa varten
    operator = selectedOperator;
    previousOperand = currentOperand;
    currentOperand = "";
  }
  // Funktio laskutoimituksen suorittamiseksi
  function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    // Ei tehdä mitään, jos jompikumpi operand on virheellinen
    if (isNaN(prev) || isNaN(current)) return;

    // Suoritetaan laskutoimitus valitun operaattorin mukaan
    switch (operator) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    // Päivitetään nykyinen operand tuloksella ja nollataan muut arvot
    currentOperand = computation;
    operator = null;
    previousOperand = "";
  }
  // Funktio laskimen tyhjentämiseksi
  function clear() {
    currentOperand = "";
    previousOperand = "";
    operator = null;
  }
  // Funktio päivittämään näyttö nykyisellä operandin arvolla
  function updateDisplay() {
    // Jos currentOperand on tyhjä, näytetään '0', muuten näytetään nykyinen numero
    display.textContent = currentOperand || "0";
  }
  // Tyhjennetään laskin sovelluksen käynnistyessä
  clear();
});
