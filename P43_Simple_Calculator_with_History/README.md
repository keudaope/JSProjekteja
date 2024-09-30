# Nettisivu: https://keudaope.github.io/JSProjekteja/P43_Simple_Calculator_with_History

# Johdanto

Yksinkertainen laskin, jolla on historia, on käytännöllinen sovellus, joka suorittaa perusaritmeettisia laskutoimituksia ja säilyttää laskujen historian. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla oppien, kuinka käsitellä käyttäjän syötteitä, suorittaa laskutoimituksia, päivittää DOMia dynaamisesti ja tallentaa tietoja käyttämällä paikallista tallennustilaa (local storage) pysyvyyden takaamiseksi. Käyttäjät voivat tehdä laskutoimituksia ja tarkastella aiempien laskujen historiaa.

# HTML Selitys

## 1. DOCTYPE-määritys (<code><</code>!DOCTYPE html>):

- Ilmoittaa, että dokumentti on HTML5-dokumentti. Varmistaa, että sivu näytetään nykyaikaisten HTML5-standardien mukaisesti.

## 2. HTML-tunniste (<code><</code>html lang="en">):

- HTML-dokumentin juurielementti. lang="en" attribuutti määrittää, että dokumentin kieli on englanti, mikä auttaa saavutettavuuden ja hakukoneoptimoinnin (SEO) kannalta.

## 3. Head-osio (<code><</code>head>):

- Sisältää metatietoja ja linkkejä ulkoisiin resursseihin, kuten tyylitiedostoihin ja merkistömäärityksiin.
- Meta Charset (<code><</code>meta charset="UTF-8">): Määrittää merkistön koodauksen UTF-8-muotoon, mikä tukee laajaa merkkivalikoimaa.
- Viewport Meta Tag (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">): Varmistaa, että sivu on responsiivinen ja skaalautuu oikein mobiililaitteilla.
- Title-tunniste (<code><</code>title>Yksinkertainen laskin historiatoiminnolla</title>): Määrittää selainvälilehdellä näytettävän otsikon.
- Linkki tyylitiedostoon (<code><</code>link rel="stylesheet" href="styles.css">): Yhdistää ulkoisen CSS-tiedoston (styles.css) sovelluksen tyylien hallintaan.

## 4. Body-tunniste (<code><</code>body>):

- Sisältää verkkosivun näkyvän sisällön, mukaan lukien laskimen ja historiatoiminnon. Body on tyylitelty CSS:ssä niin, että sisältö on keskitetty ja visuaalisesti houkutteleva.

## 5. Pääkonteineri (<code><</code>div class="container">):

- Käärii koko laskinsisällön. Se antaa rakenteen ja soveltaa yleistä muotoilua (esim. taustaväri, pehmusteet jne.).

## 6. Otsikko (<code><</code>h1>Laskin</h1>):

- Näyttää sovelluksen otsikon ”Laskin” pääkonteinerin yläosassa.

## 7. Laskimen asettelu (<code><</code>div class="calculator">):

- Sisältää laskimen syöttökentän ja napit, jotka on järjestetty ruudukkomuotoon.
- Näytön syöttökenttä (<code><</code>input type="text" id="display" disabled>): Näyttää nykyiset numerot ja laskutoimitukset. Disabled-attribuutti estää suoran muokkauksen.
- Nappulat (<code><</code>button data-value="7">7<code><</code>/button>): Edustaa numero- ja operaattorinappuloita. data-value attribuutti auttaa tunnistamaan kunkin nappulan arvon JavaScriptissä.

## 8. Historiatoiminto (<code><</code>div class="history">):

- Näyttää viimeaikaisten laskutoimitusten historian. Tämä osio on jaettu seuraaviin osiin:
- Historiatunniste (<code><</code>h2>Historia<code><</code>/h2>): Otsikko historiatoiminnolle.
- Historialista (<code><</code>ul id="history"><code><</code>/ul>): Järjestämätön lista, joka sisältää aiemmat laskutoimitukset. Tätä päivitetään dynaamisesti JavaScriptin avulla.

## 9. Skriptitunniste (<code><</code>script src="app.js"></script>):

- Sisältää ulkoisen JavaScript-tiedoston (app.js), joka huolehtii laskimen toiminnallisuudesta. Tämä skripti käsittelee käyttäjän vuorovaikutuksia, kuten nappulan painalluksia, laskutoimituksia ja näytön päivityksiä.

# CSS selitys

## 1. Body Styling (body):

- **font-family: Arial, sans-serif;**: Soveltaa koko dokumentin tekstille puhdasta ja yksinkertaista fonttia.
- **background-color: #f0f0f0;**: Asettaa vaaleanharmaan taustavärin sivulle, joka antaa modernin ilmeen.
- **display: flex; justify-content: center; align-items: center;**: Käyttää Flexboxia keskittämään sisällön sekä vertikaalisesti että horisontaalisesti näkymässä.
- **height: 100vh;**: Varmistaa, että sisältö vie koko näkymän korkeuden, jotta laskin on aina vertikaalisesti keskitetty.
- **margin: 0;**: Poistaa oletusmarginaalit, jotta asettelu alkaa sivun yläreunasta.

## 2. Container Styling (.container):

- **background: white;**: Asettaa valkoisen taustavärin säiliölle, luoden siistin, korttimaisen ilmeen laskimelle.
- **padding: 20px;**: Lisää sisäistä pehmustetta säiliön sisään, varmistaen, että sisältö ei ole liian lähellä reunoja.
- **border-radius: 8px;**: Pyöristää säiliön kulmat, mikä tekee siitä modernimman näköisen.
- **box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);**: Lisää hienovaraisen varjostuksen säiliön ympärille, joka tuo syvyyttä ja erottuu taustasta.
- **width: 300px;**: Asettaa kiinteän leveyden laskimelle, pitäen sen kompaktina ja keskitettynä.
- **text-align: center;**: Keskittää tekstin säiliön sisällä.

## 3. Header Styling (h1):

- **margin-bottom: 20px;**: Lisää tilaa otsikon alle erottamaan sen laskinrajapinnasta.

## 4. Calculator Layout (.calculator):

- **display: grid;**: Käyttää CSS Grid -asettelua luodakseen rakenteellisen ulkoasun laskimen nappuloille.
- **grid-template-columns: repeat(4, 1fr);**: Määrittää laskimen nappuloille 4 samanarvoista saraketta.
- **gap: 10px;**: Lisää tilaa ruudukkokohteiden (nappuloiden ja syöttökentän) väliin.
- **margin-bottom: 20px;**: Lisää tilaa laskimen alle, erottaen sen historiatoiminnosta.

## 5. Calculator Buttons and Input Styling (.calculator button, .calculator input):

- **padding: 20px;**: Lisää pehmustetta nappuloihin ja syöttökenttään mukavammalle klikkaus- ja kosketusalueelle.
- **font-size: 1.2em;**: Suurentaa fonttikokoa nappuloissa ja syöttökentässä, parantaen luettavuutta ja käytettävyyttä.
- **border: 1px solid #ccc;**: Lisää kevyen reunuksen nappuloihin ja syöttökenttään hienovaraista suunnittelua varten.
- **border-radius: 4px;**: Pyöristää nappuloiden ja syöttökentän kulmat modernia ulkoasua varten.

## 6. Input Field (.calculator input):

- **grid-column: span 4;**: Asettaa syöttökentän kattamaan kaikki 4 saraketta, jolloin se vie koko laskimen leveyden.
- **text-align: right;**: Kohdistaa tekstin syöttökentän sisällä oikealle, joka on tyypillinen laskimille.

## 7. History Section (.history):

- **text-align: left;**: Kohdistaa tekstin historiatoiminnossa vasemmalle parantaakseen luettavuutta.

## 8. History Header (.history h2):

- **margin-bottom: 10px;**: Lisää tilaa "Historia"-otsikon alle erottaen sen laskutoimituslistasta.

## 9. History List Styling (.history ul):

- **list-style-type: none;**: Poistaa oletusluettelomerkit laskutoimituslistalta.
- **padding: 0;**: Poistaa oletuspehmusteen listasta, varmistaen, että sisältö on tasaisesti säiliön reunojen kanssa.

## 10. History List Items (.history li):

- **background: #f8f8f8;**: Asettaa kevyen taustavärin jokaiselle listan kohteelle (laskutoimitukselle), jotta ne erottuvat visuaalisesti.
- **margin-bottom: 5px;**: Lisää tilaa jokaisen listan kohteen väliin.
- **padding: 5px;**: Lisää pehmustetta jokaisen listan kohteen sisälle, antaen niille enemmän tilaa.
- **border-radius: 4px;**: Pyöristää jokaisen listan kohteen kulmat modernin ulkoasun luomiseksi.

# JavaScript-selitys

## 1. DOMContentLoaded-tapahtumakuuntelija (document.addEventListener('DOMContentLoaded', () => {...});):

- **Mikä se on**: Tämä funktio odottaa, että koko HTML-dokumentti on ladattu ja parsittu, ennen kuin se suorittaa callback-funktion sisällä olevaa koodia.
- **Tarkoitus**: Se varmistaa, että DOM-elementit ovat täysin saatavilla ennen kuin JavaScript yrittää käsitellä niitä, mikä estää virheitä, joissa yritetään käyttää elementtejä, joita ei ole vielä renderöity.
- **Tärkeä yksityiskohta**: Tämä varmistaa, että laskimen toiminnallisuus toimii oikein vain silloin, kun dokumentti on täysin ladattu.

## 2. DOM-elementtien valinta:

- **const display = document.getElementById('display');**: Valitsee syöttökentän (näytön), jossa laskutoimitukset ja tulokset näytetään.
- **const historyUl = document.getElementById('history');**: Valitsee <code><ul></code>-elementin, joka sisältää aiempien laskutoimitusten historian.
- **Tarkoitus**: Nämä valinnat sallivat skriptin olla vuorovaikutuksessa näiden tiettyjen elementtien kanssa, joko päivittämällä niiden sisältöä tai vastaamalla käyttäjän toimintoihin.

## 3. Muuttujien määrittely:

- **let currentInput = '';**: Merkkijono, joka tallentaa käyttäjän syöttämän nykyisen luvun tai operaation. Sitä päivitetään aina, kun käyttäjä painaa painikkeita.
- **let history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];**: Hakee tallennetun historian selaimen localStoragesta. Jos historiaa ei löydy, käytetään tyhjää taulukkoa. Tämä varmistaa, että sovellus säilyttää historian sivun uudelleenlatausten välillä.

## 4. Historian tallentaminen ja näyttäminen:

- **function saveHistory():** Tallentaa nykyisen historiataulukon localStorageen, jotta historia säilyy myös sivun uudelleenlatauksen jälkeen.
- **function renderHistory():** Tämä funktio käy läpi historiataulukon ja näyttää jokaisen laskutoimituksen listaelementtinä (<code><</code>li>) laskimen historiatoiminnossa. Se päivittää DOMin, jotta käyttäjä voi nähdä aiemmat laskutoimituksensa.

## 5. Numeroiden lisääminen näyttöön (function appendNumber(number)):

- **Mikä se on**: Kun käyttäjä painaa numeroa, tämä funktio kutsutaan. Se lisää valitun numeron currentInput-merkkijonoon ja päivittää näytön näyttämään uuden syötteen.
- **currentInput += number;**: Lisää valitun numeron olemassa olevaan syötteeseen.
- **display.value = currentInput;**: Päivittää näytön syöttökentän näyttämään uuden syötteen.

## 6. Operaattorien lisääminen (function appendOperator(operator)):

- **Mikä se on**: Tämä funktio lisää operaattorin (esim. +, -, \*, /) currentInput-arvoon.
- **if (currentInput === '' && operator !== '-') return;**: Estää operaattorin lisäämisen, jos numeroita ei ole vielä syötetty, lukuun ottamatta miinusmerkkiä, joka mahdollistaa negatiiviset luvut.
- **currentInput += \ `${operator}` `;**: Lisää operaattorin väleillä selkeyden vuoksi syötteeseen.

## 7. Desimaalipisteen lisääminen (function appendDot()):

- **Mikä se on**: Tämä funktio sallii käyttäjän lisätä desimaalipisteen. Se tarkistaa, onko desimaalipiste jo olemassa currentInput-arvossa ja estää toisen lisäämisen.
- **if (currentInput.includes('.')) return;**: Estää useamman kuin yhden desimaalipisteen lisäämisen nykyiseen syötteeseen.

## 8. Näytön tyhjentäminen (function clearDisplay()):

- **Mikä se on**: Tämä funktio tyhjentää syötemerkkijonon ja nollaa näytön, kun käyttäjä painaa "C"-painiketta.
- **currentInput = '';**: Nollaa syötemerkkijonon tyhjäksi.
- **display.value = currentInput;**: Tyhjentää syöttökentän, mikä käytännössä nollaa laskimen.

## 9. Laskutoimituksen suorittaminen (function calculate()):

- **Mikä se on**: Tämä funktio arvioi nykyisen syötteen, kun käyttäjä painaa "="-painiketta.
- **const result = eval(currentInput);**: eval()-funktio arvioi syötemerkkijonon matemaattisena lausekkeena ja laskee tuloksen.
- **history.push(\ `${currentInput} = ${result}` `);**: Tallentaa laskutoimituksen ja tuloksen historiataulukkoon.
- **Tärkeä yksityiskohta**: Jos historia kasvaa yli 10 kohteen, vanhin kohde poistetaan rajoittaakseen tallennettujen laskutoimitusten määrää.

## 10. Funktioiden uudelleenkäyttö DOMContentLoadedin ulkopuolella:

- **Mikä se on**: Funktiot kuten appendNumber, appendOperator, appendDot, clearDisplay ja calculate määritellään globaalisti, jotta ne voidaan kutsua suoraan painikkeiden onclick-attribuutin kautta.
- **Tärkeä yksityiskohta**: Tämä mahdollistaa yksinkertaisemman ja modulaarisen koodin, koska painikkeet voivat kutsua näitä funktioita suoraan.

## 11. Virheenkäsittely laskutoimituksissa (function calculate()):

- **Mikä se on**: try-catch-lohko yrittää suorittaa laskutoimituksen. Jos virhe tapahtuu (esim. virheellinen syöte), catch-lohko näyttää "Error"-viestin näytössä ja nollaa currentInput-arvon.
