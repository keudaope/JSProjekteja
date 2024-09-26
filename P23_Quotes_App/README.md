# Nettisivu: https://keudaope.github.io/JSProjekteja/P23_Quotes_App

# Johdanto

**Mikä se on:** Quotes App on yksinkertainen ja inspiroiva sovellus, joka näyttää käyttäjälle satunnaisia motivoivia lainauksia. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla, kun he oppivat käsittelemään API-pyyntöjä, prosessoimaan JSON-dataa ja päivittämään DOMin dynaamisesti. Käyttäjät voivat napsauttaa painiketta saadakseen uuden motivoivan lainauksen joka kerta.

# HTML selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on:** <code><</code>!DOCTYPE html> -määritys ilmoittaa, että dokumentti on kirjoitettu HTML5-muodossa.
- **Tarkoitus:** Se varmistaa, että verkkosivu tulkitaan modernien HTML5-standardien mukaisesti kaikilla selaimilla, estäen vanhojen selainten yhteensopivuusongelmat.
- **Tärkeä yksityiskohta:** Sisällytä aina DOCTYPE-määritys varmistaaksesi yhtenäisen renderöinnin kaikissa selaimissa.

## 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on:** <code><</code>html> -elementti on juuri, joka ympäröi kaikkia muita HTML-elementtejä sivulla. lang="en" -attribuutti määrittää dokumentin kieleksi englannin.
- **Tarkoitus:** lang-attribuutti on tärkeä saavutettavuustyökaluille ja hakukoneille, koska se ilmoittaa dokumentin ensisijaisen kielen.
- **Tärkeä yksityiskohta:** Kielen määrittäminen parantaa SEO:a ja saavutettavuutta, mikä tekee sisällöstä helpommin käsiteltävää sekä hakukoneille että apuvälineteknologioille.

## 3. Head Tag (<code><</code>head>):

- **Mikä se on:** <code><</code>head> -osa sisältää metatietoja ja linkkejä ulkoisiin resursseihin, kuten tyylitiedostoihin ja fontteihin.
- **Tarkoitus:** <code><</code>head> -elementti mahdollistaa selaimen lataamaan tarvittavat tiedot sivun renderöimistä varten, kuten CSS-tyylit, fontit ja metatiedot.
- **Tärkeät yksityiskohdat:**
  - **Meta Charset ( <code><</code>meta charset="UTF-8">):** Määrittää merkistökoodauksen UTF-8-muodossa, joka tukee laajaa valikoimaa merkkejä ja symboleja, varmistaen, että teksti näytetään oikein.
  - **Viewport Meta Tag ( <code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">):** Varmistaa, että sivu on responsiivinen ja mukautuu eri näytön kokoihin, erityisesti mobiililaitteilla.
  - **Title Tag ( <code><</code>title>Quotes App</code>):** Asettaa tekstin, joka näkyy selaimen välilehdessä, osoittaen sivun sisällön.
  - **Google Fonts Link ( <code><</code>link>):** Lataa "Poppins" fontin Google Fontsista, antaen sovellukselle modernin ja selkeän ilmeen, joka parantaa luettavuutta.
  - **CSS Link ( <code><</code>link rel="stylesheet" href="styles.css">):** Linkittää ulkoiseen CSS-tiedostoon, joka sisältää sovelluksen visuaalista ilmettä parantavat tyylit.

## 4. Body Tag (<code><</code>body>):

- **Mikä se on:** <code><</code>body> -elementti sisältää kaikki näkyvät sisällöt verkkosivulla, kuten otsikon, lainauksen, kirjoittajan ja painikkeen.
- **Tarkoitus:** <code><</code>body> on paikka, johon kaikki käyttäjän näkemä sisältö sijoitetaan. Sitä muotoillaan CSS:llä ja se toimii JavaScriptin kanssa luoden responsiivisen ja interaktiivisen käyttökokemuksen.
- **Tärkeä yksityiskohta:** Kaikki dynaaminen ja interaktiivinen sisältö on <code><</code>body> -elementin sisällä, mikä tekee siitä pääalueen käyttäjän vuorovaikutukselle.

## 5. Container Div (<code><</code>div class="container">):

- **Mikä se on:** <code><</code>div> -elementti, jossa on container-luokka, ympäröi pääsisällön, mukaan lukien otsikon, lainauksen, kirjoittajan ja painikkeen.
- **Tarkoitus:** Se ryhmittelee yhteen liittyvät elementit, mahdollistaen keskitetyn tyylittelyn ja asettelun hallinnan. Container-luokka varmistaa, että sisältö näyttää korttimaiselta rakenteelta, erottaen sen visuaalisesti muusta sivusta.
- **Tärkeä yksityiskohta:** Container-luokka on tärkeä CSS-ominaisuuksien, kuten taustan, pehmusteen ja varjon, soveltamiseksi, antaen sovellukselle siistin ja modernin asettelun.

## 6. Heading Tag (<code><</code>h1>Inspirational Quotes</code>):

- **Mikä se on:** <code><</code>h1> -elementti näyttää sivun pääotsikon, "Inspirational Quotes".
- **Tarkoitus:** Se tarjoaa näkyvän otsikon, joka kertoo heti käyttäjille sovelluksen tarkoituksen. <code><</code>h1> on myös tärkeä SEO:lle, sillä se korostaa sivun tärkeintä sisältöä.
- **Tärkeä yksityiskohta:** Ylätason otsikkona <code><</code>h1> on muotoiltu erottumaan, varmistaen, että se on ensimmäinen asia, jonka käyttäjät huomaavat sivun latautuessa.

## 7. Quote Div (<code><</code>div class="quote" id="quote">Press the button for an inspiring quote!</code>):

- **Mikä se on:** <code><</code>div> -elementti, jossa on quote-luokka ja id="quote", näyttää motivoivan lainauksen, joka haetaan API:sta.
- **Tarkoitus:** Tämä elementti toimii paikkamerkkinä lainaukselle, joka päivitetään dynaamisesti JavaScriptin avulla, kun käyttäjä napsauttaa painiketta.
- **Tärkeä yksityiskohta:** id="quote" mahdollistaa JavaScriptin helposti kohdistaa ja päivittää sisältöä uudella lainauksella. Alkuperäinen teksti tarjoaa käyttäjille kehotuksen olla vuorovaikutuksessa sovelluksen kanssa.

## 8. Author Div (<code><</code>div class="author" id="author"></code>):

- **Mikä se on:** <code><</code>div> -elementti, jossa on author-luokka ja id="author", näyttää lainauksen kirjoittajan nimen.
- **Tarkoitus:** Tämä elementti toimii paikkamerkkinä kirjoittajan nimelle, joka päivitetään dynaamisesti, kun uusi lainaus haetaan.
- **Tärkeä yksityiskohta:** id="author" tekee JavaScriptille helpoksi kohdistaa tämä elementti ja päivittää se kirjoittajan nimellä, jättäen sen aluksi tyhjäksi dynaamista täyttöä varten.

## 9. Button Element (<code><</code>button id="quote-button">Get a Quote</code>):

- **Mikä se on:** <code><</code>button> -elementti käynnistää uuden lainauksen hakemisen, kun käyttäjä napsauttaa sitä.
- **Tarkoitus:** Se toimii sovelluksen ensisijaisena interaktiivisena elementtinä. Kun käyttäjä napsauttaa painiketta, se käynnistää JavaScript-funktion, joka hakee satunnaisen lainauksen ja päivittää lainauksen ja kirjoittajan sivulla.
- **Tärkeä yksityiskohta:** id="quote-button" mahdollistaa JavaScriptin helposti liittää tapahtumakuuntelijan painikkeeseen, linkittäen sen lainauksen hakufunktioon.

## 10. Script Tag (<code><</code>script src="app.js"></code>):

- **Mikä se on:** <code><</code>script> -elementti linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää lainauksien hakemisen ja näyttämisen logiikan.
- **Tarkoitus:** Se erottaa JavaScript-logiikan rakenteesta (HTML) ja tyylittelystä (CSS), noudattaen modulaarisen kehittämisen parhaita käytäntöjä.
- **Tärkeä yksityiskohta:** Ulkoisen JavaScript-tiedoston käyttäminen varmistaa, että HTML-tiedosto pysyy siistinä, samalla kun lainauksien hakemiseen liittyvä toiminnallisuus pidetään erillisessä, uudelleenkäytettävässä skriptissä.
