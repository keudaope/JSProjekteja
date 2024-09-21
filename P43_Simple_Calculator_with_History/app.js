document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display"); // Laskimen näyttö
  const historyUl = document.getElementById("history"); // Lista laskutoimitusten historiaa varten
  let currentInput = ""; // Tallentaa nykyisen syötteen laskua varten
  let history = JSON.parse(localStorage.getItem("calculatorHistory")) || [];
  // Lataa historia localStoragesta
  // Tallenna historia localStorageen
  function saveHistory() {
    localStorage.setItem("calculatorHistory", JSON.stringify(history));
  }
  // Piirrä historia käyttöliittymään
  function renderHistory() {
    historyUl.innerHTML = ""; // Tyhjennä aikaisempi historia
    history.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item; // Näytä jokainen historian merkintä
      historyUl.appendChild(li);
    });
  }
  // Lisää numero näyttöön
  function appendNumber(number) {
    currentInput += number; // Lisää numero nykyiseen syötteeseen
    display.value = currentInput; // Päivitä näyttö
  }
  // Lisää operaattori näyttöön
  function appendOperator(operator) {
    if (currentInput === "" && operator !== "-") return; // Estä operaattorin lisääminen, jos syöte on tyhjä
    currentInput += ` ${operator} `; // Lisää operaattori väleillä
    display.value = currentInput; // Päivitä näyttö
  }
  // Lisää desimaalipiste
  function appendDot() {
    if (currentInput.includes(".")) return; // Estä useiden pisteiden lisääminen
    currentInput += "."; // Lisää piste syötteeseen
    display.value = currentInput; // Päivitä näyttö
  }
  // Tyhjennä näyttö
  function clearDisplay() {
    currentInput = ""; // Nollaa nykyinen syöte
    display.value = currentInput; // Tyhjennä näyttö
  }
  // Suorita laskutoimitus
  function calculate() {
    try {
      const result = eval(currentInput); // Arvioi lauseke
      history.push(`${currentInput} = ${result}`); // Lisää historiaan
      if (history.length > 10) history.shift(); // Säilytä vain viimeiset 10 historiatietoa
      currentInput = result.toString(); // Päivitä nykyinen syöte tuloksella
      display.value = currentInput; // Näytä tulos näytössä
      saveHistory(); // Tallenna historia
      renderHistory(); // Päivitä historian näyttö
    } catch {
      display.value = "Virhe"; // Näytä virheilmoitus, jos laskutoimitus epäonnistuu
      currentInput = ""; // Nollaa syöte
    }
  }
  // Piirrä tallennettu historia, kun sivu latautuu
  renderHistory();
  // Tapahtumien delegointi painikkeille
  document.querySelectorAll(".calculator button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const value = e.target.getAttribute("data-value");
      if (value) {
        if (!isNaN(value) || value === ".") {
          appendNumber(value);
        } else {
          appendOperator(value);
        }
      }
    });
  });
  // Tyhjennysnapin tapahtuma
  document.getElementById("clear").addEventListener("click", clearDisplay);
  // Yhtä kuin -napin tapahtuma laskutoimitukselle
  document.getElementById("equals").addEventListener("click", calculate);
});
