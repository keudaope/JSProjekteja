// Odota, että DOM latautuu kokonaan ennen kuin suoritat skriptin
document.addEventListener("DOMContentLoaded", () => {
  // Haetaan viittaukset HTML-elementteihin
  const itemInput = document.getElementById("item-input");
  const addItemButton = document.getElementById("add-item-button");
  const itemList = document.getElementById("item-list");

  // Ladataan tallennetut ruokakauppaostokset localStoragesta tai alustetaan tyhjäksi taulukoksi
  let items = JSON.parse(localStorage.getItem("groceryItems")) || [];

  // Funktio, joka tallentaa tuotteet localStorageen
  function saveItems() {
    localStorage.setItem("groceryItems", JSON.stringify(items));
  }

  // Funktio, joka renderöi kaikki ruokakauppaostokset listaan
  function renderItems() {
    // Tyhjennetään lista ennen uudelleenrenderöintiä
    itemList.innerHTML = "";
    // Käydään läpi items-taulukko ja luodaan listaelementit
    items.forEach((item, index) => {
      const li = document.createElement("li"); // Luodaan uusi listaelementti
      li.innerHTML = `
        <span>${item}</span> <!-- Näytetään ruokakauppaostos -->
        <button class="delete-button" data-index="${index}">❌</button> <!-- Poistonappi, jossa on viittaus indeksiin -->
      `;
      itemList.appendChild(li); // Lisätään listaelementti UL-elementtiin
    });
  }

  // Tapahtumankuuntelija Lisää tuote -napille
  addItemButton.addEventListener("click", () => {
    const newItem = itemInput.value.trim(); // Haetaan syötteen arvo ja poistetaan ylimääräiset välilyönnit
    if (newItem) {
      items.push(newItem); // Lisätään uusi tuote taulukkoon
      itemInput.value = ""; // Tyhjennetään syötekenttä
      saveItems(); // Tallennetaan päivitetyt tuotteet localStorageen
      renderItems(); // Renderöidään lista uudelleen
    }
  });

  // Tapahtumankuuntelija poistonapeille
  itemList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-button")) {
      const index = e.target.getAttribute("data-index"); // Haetaan indeksi napin data-ominaisuudesta
      items.splice(index, 1); // Poistetaan tuote taulukosta
      saveItems(); // Tallennetaan päivitetyt tuotteet localStorageen
      renderItems(); // Renderöidään lista uudelleen
    }
  });

  // Alustava listan renderöinti sivun latauksen yhteydessä
  renderItems();
});
