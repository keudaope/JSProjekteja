# Nettisivu: https://keudaope.github.io/JSProjekteja/P45_Rock_Paper_Scissors_Game

# Johdanto

**Kivi, paperi, sakset** on klassinen peli, jossa pelaajat valitsevat joko kiven, paperin tai sakset. Tämä projekti auttaa aloittelijoita harjoittelemaan **JavaScriptin, HTML**:n ja **CSS**:n käyttöä samalla, kun opitaan käsittelemään käyttäjän syötteitä, generoimaan satunnaisia valintoja, vertaamaan valintoja sekä päivittämään DOM (Document Object Model) dynaamisesti. Käyttäjät voivat pelata tietokonetta vastaan, ja sovellus näyttää jokaisen kierroksen tulokset.

# HTML Selitys

## 1. DOCTYPE-ilmoitus (<code><</code>!DOCTYPE html>):

- **Mikä se on:** <code><</code>!DOCTYPE html> -ilmoitus dokumentin alussa kertoo selaimelle, että verkkosivu on kirjoitettu HTML5-muodossa.
- **Tarkoitus:** Varmistaa, että verkkosivu näytetään modernien HTML5-standardien mukaisesti, mikä takaa yhteensopivuuden ja toiminnallisuuden eri selaimissa.
- **Tärkeä yksityiskohta:** Se on pakollinen ilmoitus, jotta selain käsittelee sivun standarditilassa.

## 2. HTML-tunniste (<code><</code>html lang="en">):

- **Mikä se on:** <code><</code>html>-tunniste ympäröi koko verkkosivun sisällön, ja lang="en" -attribuutti määrittää, että dokumentin kieli on englanti.
- **Tarkoitus:** <code><</code>html>-tunniste on HTML-dokumentin juurielementti, ja lang-attribuutti auttaa hakukoneita ja avustavia teknologioita (kuten ruudunlukijoita) tunnistamaan sisällön kielen.
- **Tärkeä yksityiskohta:** Määritä aina dokumentin kieli saavutettavuuden ja hakukoneoptimoinnin (SEO) kannalta.

## 3. Head-osio (<code><</code>head>):

- **Mikä se on:** <code><</code>head>-osio sisältää metadataa ja linkit ulkoisiin resursseihin, kuten CSS- ja JavaScript-tiedostoihin.
- **Tarkoitus:** Metadata ja linkitetyt resurssit ovat välttämättömiä sivun oikein näyttämiseksi ja sen toiminnan takaamiseksi. Selain käsittelee nämä ennen näkyvän sisällön lataamista.
- **Tärkeät yksityiskohdat:**
  - **Meta Charset-tunniste (<code><</code>meta charset="UTF-8">):** Varmistaa, että verkkosivu käyttää UTF-8-merkistökoodausta, joka mahdollistaa laajan merkkivalikoiman näyttämisen.
  - **Näkymän Meta-tunniste (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">):** Varmistaa, että sivu on responsiivinen, eli sen asettelu mukautuu laitteen leveyden mukaan (erityisesti mobiilissa).
  - **Otsikkotunniste (<code><</code>title>Rock, Paper, Scissors</title>):** Asettaa selainvälilehdellä näkyvän otsikon ja toimii tunnisteena verkkosivulle.
  - **CSS-linkki (<code><</code>link rel="stylesheet" href="styles.css">):** Linkittää ulkoisen CSS-tiedoston (styles.css), joka määrittää sovelluksen visuaaliset tyylit.

## 4. Body-tunniste (<code><</code>body>):

- **Mikä se on:** <code><</code>body>-tunniste ympäröi kaiken näkyvän sisällön verkkosivulla.
- **Tarkoitus:** Se sisältää ytimen rakenteen ja sisällön, jonka kanssa käyttäjät ovat vuorovaikutuksessa, mukaan lukien pelin käyttöliittymä, painikkeet ja tulokset.
- **Tärkeä yksityiskohta:** <code><</code>body>-tunniste on tyylitelty siten, että se keskittää sisällön sekä vertikaalisesti että horisontaalisesti ja käyttää Flexboxia asettelun hallintaan.

## 5. Container Div (<code><</code>div class="container">):

- **Mikä se on:** <code><</code>div>-elementti, jossa on container-luokka, ympäröi sovelluksen tärkeimmät elementit, kuten otsikon, pelipainikkeet ja tulosnäytön.
- **Tarkoitus:** Toimii pääsäiliönä, joka pitää kaikki sisällöt järjestyksessä ja selkeässä asettelussa. Container on tyylitelty näyttämään kortilta, jossa on pehmusteet, taustaväri ja varjoefekti.
- **Tärkeä yksityiskohta:** Container varmistaa, että sovelluksen sisältö on visuaalisesti erotettu taustasta ja siististi järjestetty.

## 6. Otsikkotunniste (<code><</code>h1>Rock, Paper, Scissors</h1>):

- **Mikä se on:** <code><</code>h1>-tunniste näyttää sovelluksen pääotsikon, "Rock, Paper, Scissors".
- **Tarkoitus:** Toimii verkkosivun ensisijaisena otsikkona ja esittelee pelin käyttäjälle. <code><</code>h1>-tunniste on tärkeä sekä SEO:n että saavutettavuuden kannalta, sillä se osoittaa sivun ensisijaisen tarkoituksen.
- **Tärkeä yksityiskohta:** Tämä otsikko on näkyvästi esillä sivun yläosassa ja antaa selkeän kontekstin pelille.

## 7. Valintojen Div (<code><</code>div class="choices">):

- **Mikä se on:** <code><</code>div>-elementti, jossa on choices-luokka, ympäröi yksittäiset valinnat (kivi, paperi, sakset), jotka käyttäjä voi valita.
- **Tarkoitus:** Se järjestää klikattavat valinnat joustavaksi, horisontaalisesti linjatuksi asetteluksi Flexboxin avulla. Jokainen vaihtoehto on lapsielementti, jossa on choice-luokka.
- **Tärkeä yksityiskohta:** Choices-div vastaa valittavien pelivaihtoehtojen asettelusta ja varmistaa, että ne ovat tasaisesti sijoitettuja ja vuorovaikutteisia.

## 8. Valintojen Div(<code><</code>div class="choice" data-choice="rock">):

- **Mikä se on:** Jokainen <code><</code>div>, jossa on choice-luokka, edustaa yhtä pelivaihtoehtoa (kivi, paperi tai sakset). Data-choice-attribuutti sisältää valinnan arvon (kivi, paperi tai sakset).
- **Tarkoitus:** Nämä ovat klikattavia elementtejä, joiden avulla käyttäjä voi tehdä valinnan pelissä. Data-choice-attribuuttia käytetään käyttäjän valinnan tallentamiseen ja hakemiseen JavaScriptissä.
- **Tärkeä yksityiskohta:** Jokainen valinta-div reagoi käyttäjän toimintoihin, jolloin käyttäjä voi valita vaihtoehdon napsauttamalla.

## 9. Tulos Div (<code><</code>div class="result" id="result">):

- **Mikä se on:** <code><</code>div>-elementti, jossa on result-luokka ja id="result", toimii pelin tuloksen näyttämiseen (esim. "Voitit!", "Hävisit!" tai "Tasapeli!").
- **Tarkoitus:** Tämä div päivitetään dynaamisesti pelin tuloksen mukaisesti jokaisen kierroksen jälkeen, antaen palautetta käyttäjälle.
- **Tärkeä yksityiskohta:** Tulos-div on aluksi tyhjä sivun latautuessa, ja se täytetään JavaScriptin avulla käyttäjän ja tietokoneen valintojen perusteella.

## 10. Script-tunniste (<code><</code>script src="app.js"></script>):

- **Mikä se on:** <code><</code>script>-tunniste linkittää ulkoisen JavaScript-tiedoston (app.js), joka sisältää pelin logiikan.
- **Tarkoitus:** Se eriyttää JavaScript-logiikan HTML:stä, mikä noudattaa parhaita käytäntöjä ylläpidettävyyden ja puhtaan koodin organisoinnin kannalta.
- **Tärkeä yksityiskohta:** Skriptin lisääminen body-osan loppuun varmistaa, että HTML-elementit ovat täysin ladattuja ennen JavaScriptin suorittamista.

# CSS Selitys

## 1. Global Body Styling (body):

- **Mikä se on:** body-sääntö määrittää koko verkkosivun ulkonäön ja asettelun.
- **Keskeiset ominaisuudet:**
  - **font-family: Arial, sans-serif;**: Käyttää Arial-fonttia kaikessa tekstissä sivulla, ja varmistaa siistin ja modernin ulkoasun.
  - **background-color: #f0f0f0;**: Asettaa vaaleanharmaan taustan, joka luo kontrastia valkoisen containerin kanssa ja parantaa luettavuutta.
  - **display: flex;**: Käyttää Flexboxia sisällön helppoon keskittämiseen sekä vaakasuunnassa että pystysuunnassa.
  - **justify-content: center; align-items: center;**: Keskittää sisällön vaakasuunnassa ja pystysuunnassa, varmistaen, että pelikäyttöliittymä on keskellä ruutua.
  - **height: 100vh;**: Saa body-tunnisteen täyttämään koko näkymän korkeuden, varmistaen sisällön keskittymisen kaikilla näytöillä.
  - **margin: 0;**: Poistaa selainten oletusmarginaalit, mikä takaa siistin ja yhtenäisen asettelun.
- **Tarkoitus:** Nämä ominaisuudet luovat koko näytön asettelun, jossa peli on täydellisesti keskitetty sivun keskelle.

## 2. Container Styling (.container):

- **Mikä se on:** .container-luokka tyylittää pelin käyttöliittymän pääsäiliön, joka sisältää otsikon, pelivalinnat ja tulosnäytön.
- **Keskeiset ominaisuudet:**
  - **background: white;**: Asettaa säiliön taustaväriksi valkoisen, mikä erottaa sen vaaleanharmaasta sivutaustasta.
  - **padding: 20px;**: Lisää tilaa säiliön sisäpuolelle, varmistaen, että sisältö ei kosketa reunoja, ja luo selkeän ja miellyttävän asettelun.
  - **border-radius: 8px;**: Pyöristää säiliön kulmat, mikä antaa modernin ja pehmeän ulkonäön.
  - **box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);**: Lisää hienovaraisen varjon säiliön ympärille, joka luo syvyyttä ja nostaa sen hieman sivun pinnasta.
  - **text-align: center;**: Keskittää kaiken tekstin ja sisällön säiliön sisällä, luoden tasapainoisen ja hyvin organisoidun asettelun.
- **Tarkoitus:** Säiliö toimii visuaalisesti houkuttelevana korttimaisena rakenteena, joka tekee käyttöliittymästä selkeän ja helpon käyttää.

## 3. Heading Styling (h1):

- **Mikä se on:** h1-sääntö tyylittää sovelluksen pääotsikon ("Rock, Paper, Scissors").
- **Keskeiset ominaisuudet:**
  - **margin-bottom: 20px;**: Lisää tilaa otsikon alapuolelle, erottaen sen valinnoista ja parantaen luettavuutta.
- **Tarkoitus:** Tämä varmistaa, että otsikko erottuu sovelluksen pääasiallisena otsikkona ja luo riittävän tilan otsikon ja pelikäyttöliittymän välille.

## 4. Choices Container (.choices):

- **Mikä se on:** .choices-luokka tyylittää divin, joka sisältää valittavat pelivaihtoehdot (kivi, paperi, sakset).
- **Keskeiset ominaisuudet:**
  - **display: flex;**: Käyttää Flexboxia asettaakseen valinnat vaakasuoraan riviin.
  - **justify-content: center;**: Keskittää valintanapit vaakasuunnassa säiliön sisällä.
  - **gap: 20px;**: Lisää tilaa jokaisen valintanapin väliin varmistaen, etteivät ne näytä ahtailta ja ovat helposti erotettavissa.
  - **margin-bottom: 20px;**: Lisää tilaa valintojen alapuolelle, erottaen ne tulosnäytöstä.
- **Tarkoitus:** Tämä asettelu varmistaa, että pelivaihtoehdot ovat vaakasuorassa ja riittävän erillään, jotta ne ovat helposti klikattavissa.

## 5. Individual Choice Styling (.choice):

- **Mikä se on:** .choice-luokka tyylittää jokaisen valittavan pelivaihtoehdon (kivi, paperi, sakset).
- **Keskeiset ominaisuudet:**
  - **padding: 10px 20px;**: Lisää tilaa valintojen sisälle, jotta niistä tulee suurempia ja helpompia käyttää.
  - **border: 1px solid #ccc;**: Lisää kevyen harmaan reunuksen jokaisen valinnan ympärille, antaen niille selkeyttä ja rakennetta.
  - **border-radius: 4px;**: Pyöristää valintojen kulmat luoden modernin ja pehmeän ilmeen.
  - **cursor: pointer;**: Muuttaa kursorin osoittimeksi, kun valintojen päällä ollaan, osoittaen niiden olevan klikattavia.
  - **user-select: none;**: Estää tekstin valitsemisen, kun käyttäjä klikkaa valintaa, varmistaen sujuvan vuorovaikutuksen.
- **Tarkoitus:** Nämä ominaisuudet tekevät jokaisesta pelivaihtoehdosta napin, joka on visuaalisesti erottuva ja interaktiivinen.

## 6. Choice Hover Effect (.choice:hover):

- **Mikä se on:** .choice-sääntö määrittää visuaaliset muutokset, jotka tapahtuvat, kun käyttäjä vie hiiren valintanapin päälle.
- **Keskeiset ominaisuudet:**
  - **background-color: #007bff;**: Muuttaa taustavärin kirkkaansiniseen, kun käyttäjä vie hiiren valinnan päälle.
  - **color: white;**: Muuttaa tekstin värin valkoiseksi hover-tilassa, luoden korkean kontrastin, joka on helposti luettavissa.
- **Tarkoitus:** Hover-efekti tarjoaa välittömän palautteen, kun käyttäjä on vuorovaikutuksessa nappien kanssa, tehden sovelluksesta dynaamisemman ja reagoivan.

## 7. Result Display Styling (.result):

- **Mikä se on:** .result-luokka tyylittää divin, jossa pelin tulos (voitto, häviö tai tasapeli) näytetään.
- **Keskeiset ominaisuudet:**
  - **font-size: 1.2em;**: Suurentaa fonttikokoa hieman, jotta tulos on näkyvämpi ja helpommin luettavissa.
  - **margin-top: 20px;**: Lisää tilaa tulosnäytön yläpuolelle, erottaen sen valinnoista ja tehden asettelusta selkeämmän.
- **Tarkoitus:** Nämä tyylit varmistavat, että pelin tulos näytetään selkeästi ja erottuu muusta sisällöstä.

# JavaScript Selitys

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...})):

- **Mikä se on:** Tämä tapahtumakuuntelija varmistaa, että JavaScript-koodi suoritetaan vasta, kun HTML-dokumentti on ladattu ja jäsennetty kokonaan.
- **Tarkoitus:** Varmistaa, että kaikki DOM-elementit (kuten napit ja tulossäiliöt) ovat olemassa ennen kuin niitä yritetään manipuloida, mikä estää virheet, jotka johtuvat elementeistä, joita ei vielä ole olemassa.
- **Keskeinen yksityiskohta:** Tämä kuuntelija käärii sovelluksen koko toiminnallisuuden, varmistaen, että kaikki ominaisuudet (kuten pelivalinnat ja tuloksen näyttö) ovat oikein alustettuina, kun sivu on valmis.

## 2. Muuttujat DOM-elementeille (const choices = document.querySelectorAll('.choice') ja const resultDiv = document.getElementById('result')):

- **Mikä se on:** Muuttujat, kuten `choices` ja `resultDiv`, tallentavat viittaukset tärkeisiin DOM-elementteihin käyttäen `querySelectorAll`- ja `getElementById`-metodeja.
- **Tarkoitus:** Nämä viittaukset mahdollistavat elementtien helpon manipuloinnin, kuten tapahtumakuuntelijoiden lisäämisen valintoihin ja tuloksen dynaamisen päivittämisen.
- **Keskeinen yksityiskohta:**
  - **choices:** NodeList, joka sisältää kaikki klikattavat valinnat (kivi, paperi, sakset) HTML:ssä.
  - **resultDiv:** Div, johon pelin tulos näytetään ja päivitetään joka kerta, kun käyttäjä pelaa.

## 3. Pelivalintojen taulukko (const choicesArray = ['rock', 'paper', 'scissors']):

- **Mikä se on:** Taulukko, joka sisältää mahdolliset pelivalinnat: kivi, paperi ja sakset.
- **Tarkoitus:** Tätä taulukkoa käytetään tietokoneen valinnan satunnaiseen valitsemiseen pelissä.
- **Keskeinen yksityiskohta:** Taulukon avulla voidaan helposti valita satunnaisesti tietokoneen valinta käyttämällä indeksejä jokaisella pelikierroksella.

## 4. Tapahtumakuuntelija jokaiselle pelivalinnalle (choices.forEach(choice => {...})):

- **Mikä se on:** Silmukka, joka lisää klikkaustapahtuman kuuntelijan jokaiselle valintaelementille (kivi, paperi, sakset).
- **Vaiheet:**
  - Kun käyttäjä klikkaa valintaa, se hakee valinnan tiedot käyttämällä `getAttribute('data-choice')`.
  - Se kutsuu muita funktioita saadakseen tietokoneen valinnan, määrittääkseen voittajan ja näyttääkseen tuloksen.
- **Tarkoitus:** Antaa käyttäjälle mahdollisuuden olla vuorovaikutuksessa pelin kanssa valitsemalla vaihtoehto, joka aloittaa pelikierroksen.
- **Keskeinen yksityiskohta:** Jokaisella valinnalla on `data-choice`-attribuutti (kivi, paperi tai sakset), jota käytetään käyttäjän valinnan tunnistamiseen.

## 5. Tietokoneen valinnan saaminen (function getComputerChoice() {...}):

- **Mikä se on:** Tämä funktio valitsee satunnaisesti yhden kolmesta mahdollisesta valinnasta (kivi, paperi, sakset) tietokoneelle.
- **Vaiheet:**
  - Se generoi satunnaisen indeksin käyttäen `Math.random()` ja `Math.floor()`.
  - Satunnainen indeksi käytetään valitsemaan arvo `choicesArray`-taulukosta.
- **Tarkoitus:** Simuloi tietokoneen valintaa pelissä, mikä tekee pelistä dynaamisen ja ennalta arvaamattoman.
- **Keskeinen yksityiskohta:** Käyttämällä `Math.random()`- ja `Math.floor()`-funktioita, tämä funktio varmistaa, että tietokoneen valinta on täysin satunnainen jokaisella pelikierroksella.

## 6. Voittajan määrittäminen (function determineWinner(userChoice, computerChoice) {...}):

- **Mikä se on:** Tämä funktio vertaa käyttäjän valintaa ja tietokoneen valintaa määrittääkseen pelin voittajan.
- **Vaiheet:**
  - Jos käyttäjän valinta ja tietokoneen valinta ovat samat, tulos on tasapeli.
  - Jos käyttäjän valinta voittaa tietokoneen valinnan pelin sääntöjen mukaan (kivi voittaa sakset, paperi voittaa kiven, sakset voittavat paperin), käyttäjä voittaa.
  - Muutoin tietokone voittaa.
- **Tarkoitus:** Soveltaa pelin sääntöjä määrittääkseen kunkin kierroksen lopputuloksen.
- **Keskeinen yksityiskohta:** Funktio palauttaa merkkijonon, joka ilmaisee tuloksen (tasapeli, voitto tai häviö), ja se näytetään käyttäjälle.

## 7. Tuloksen näyttäminen (function displayResult(userChoice, computerChoice, result) {...}):

- **Mikä se on:** Tämä funktio päivittää `resultDiv`-elementin näyttämään käyttäjän valinnan, tietokoneen valinnan ja pelin tuloksen (voitto, häviö tai tasapeli).
- **Vaiheet:**
  - Se rakentaa HTML-merkkijonon, joka sisältää valinnat ja tuloksen.
  - Tämä merkkijono lisätään `resultDiv`-elementtiin käyttämällä `innerHTML`-ominaisuutta.
- **Tarkoitus:** Antaa käyttäjälle palautetta ja näyttää kunkin pelikierroksen tuloksen selkeästi ja rakenteellisesti.
- **Keskeinen yksityiskohta:** Funktio käyttää mallimerkintöjä päivittääkseen dynaamisesti tuloksen näyttöön, mikä tekee pelistä interaktiivisen ja käyttäjän toimintaan reagoivan.
