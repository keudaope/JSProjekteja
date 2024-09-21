document.addEventListener("DOMContentLoaded", () => {
  // Hae viittauksia DOM-elementteihin
  const canvas = document.getElementById("drawing-canvas");
  const ctx = canvas.getContext("2d"); // Hanki 2D-piirtokonteksti
  const clearButton = document.getElementById("clear-button");
  // Alusta piirustuksen tila
  let drawing = false;
  // Lisää tapahtumankuuntelijat hiiren vuorovaikutuksille
  canvas.addEventListener("mousedown", startDrawing); // Kun käyttäjä painaa hiiren painiketta
  canvas.addEventListener("mousemove", draw); // Kun käyttäjä liikuttaa hiirtä piirtäessään
  canvas.addEventListener("mouseup", stopDrawing); // Kun käyttäjä vapauttaa hiiren painikkeen
  canvas.addEventListener("mouseout", stopDrawing); // Jos käyttäjä vie hiiren pois kankaalta
  clearButton.addEventListener("click", clearCanvas); // Kun käyttäjä napsauttaa "Tyhjennä kangas" -painiketta
  // Funktio piirtämisen aloittamiseksi
  function startDrawing(e) {
    drawing = true; // Aseta piirustustila todeksi
    ctx.beginPath(); // Aloita uusi polku piirtämistä varten
    ctx.moveTo(e.offsetX, e.offsetY); // Siirrä piirtokursori hiiren sijaintiin
  }
  // Funktio piirtämisen käsittelyyn kankaalle
  function draw(e) {
    if (!drawing) return; // Jos käyttäjä ei piirrä, poistu funktiosta
    ctx.lineTo(e.offsetX, e.offsetY); // Piirrä viiva nykyiseen hiiren sijaintiin
    ctx.strokeStyle = "#007bff"; // Aseta piirtoviivan väri
    ctx.lineWidth = 2; // Aseta piirtoviivan leveys
    ctx.stroke(); // Piirrä viiva kankaalle
  }
  // Funktio piirtämisen lopettamiseksi
  function stopDrawing() {
    drawing = false; // Aseta piirustustila epätodeksi
    ctx.closePath(); // Sulje nykyinen polku
  }
  // Funktio kankaan tyhjentämiseksi
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Tyhjennä koko kangas
  }
});
