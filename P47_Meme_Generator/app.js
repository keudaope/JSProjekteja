document.addEventListener("DOMContentLoaded", () => {
  const imageInput = document.getElementById("image-input"); // Syötekenttä kuvan lataamista varten
  const topTextInput = document.getElementById("top-text"); // Syötekenttä meemin ylätekstille
  const bottomTextInput = document.getElementById("bottom-text"); // Syötekenttä meemin alatekstille
  const generateMemeButton = document.getElementById("generate-meme-button");
  // Painike meemin luomista varten
  const downloadMemeButton = document.getElementById("download-meme-button");
  // Painike meemin lataamista varten
  const canvas = document.getElementById("meme-canvas"); // Canvas, johon meemi piirretään
  const ctx = canvas.getContext("2d"); // Haetaan 2D-piirtoympäristö

  // Tapahtumankuuntelija meemin luomiseen, kun painiketta painetaan
  generateMemeButton.addEventListener("click", () => {
    const imageFile = imageInput.files[0]; // Haetaan ladattu kuvatiedosto
    if (imageFile) {
      const reader = new FileReader(); // FileReader kuvatiedoston lukemiseen
      reader.onload = () => {
        const img = new Image(); // Luodaan uusi kuvaelementti
        img.onload = () => {
          canvas.width = img.width; // Asetetaan kankaan leveys kuvan leveydeksi
          canvas.height = img.height; // Asetetaan kankaan korkeus kuvan korkeudeksi
          // Piirretään kuva kankaalle
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          // Asetetaan meemin tekstin ominaisuudet
          ctx.font = "30px Impact";
          ctx.fillStyle = "valkoinen"; // Valkoinen teksti
          ctx.strokeStyle = "musta"; // Musta reunus tekstille
          ctx.lineWidth = 2; // Reunaviivan leveys
          ctx.textAlign = "center"; // Keskitetään teksti
          // Lisätään yläteksti meemiin
          ctx.fillText(topTextInput.value.toUpperCase(), canvas.width / 2, 40);
          ctx.strokeText(
            topTextInput.value.toUpperCase(),
            canvas.width / 2,
            40
          );
          // Lisätään alateksti meemiin
          ctx.fillText(
            bottomTextInput.value.toUpperCase(),
            canvas.width / 2,
            canvas.height - 20
          );
          ctx.strokeText(
            bottomTextInput.value.toUpperCase(),
            canvas.width / 2,
            canvas.height - 20
          );
          // Näytetään canvas ja latauspainike meemin luomisen jälkeen
          canvas.style.display = "block";
          downloadMemeButton.style.display = "block";
        };
        img.src = reader.result; // Asetetaan kuvan lähde tiedoston lukutulokselle
      };
      reader.readAsDataURL(imageFile); // Luetaan kuvatiedosto Data URL -muodossa
    } else {
      alert("Lataa kuva luodaksesi meemin."); // Virheilmoitus, jos kuvaa ei ole ladattu
    }
  });

  // Tapahtumankuuntelija luodun meemin lataamista varten
  downloadMemeButton.addEventListener("click", () => {
    const link = document.createElement("a"); // Luodaan linkkielementti latausta varten
    link.download = "meme.png"; // Asetetaan ladattavan tiedoston nimi
    link.href = canvas.toDataURL("image/png"); // Muunnetaan canvas sisältö Data URL -muotoon
    link.click(); // Simuloidaan klikkausta ladataksemme kuvan
  });
});
