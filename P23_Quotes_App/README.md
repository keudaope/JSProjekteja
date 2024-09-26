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

# CSS selitys

## 1. Global Reset (\* Selector):

- **Mikä se on:** Yleinen \*-valitsin asettaa kaikkien sivun elementtien asetukset uusiksi.
- **Tarkoitus:** Se poistaa oletusmarginaalit ja -pehmusteet kaikista elementeistä varmistaakseen yhtenäisen tilankäytön eri selaimissa. **box-sizing: border-box;** -sääntö varmistaa, että pehmusteet ja reunukset lasketaan mukaan elementtien kokonaisleveyteen ja -korkeuteen, mikä helpottaa asettelun hallintaa.
- **Tärkeä yksityiskohta:** Tämä resetointi varmistaa, että elementit näkyvät johdonmukaisesti eri selaimissa, estäen ei-toivotut tilankäyttöongelmat ja tarjoten selkeän lähtökohdan tyylittelylle.

## 2. Body Styling (body):

- **Mikä se on:** body-sääntö muotoilee koko verkkosivun, määrittäen taustan, fontin ja asettelun.
- **Tarkoitus:**
  - **Font Family (font-family: 'Poppins', sans-serif;):** Käyttää "Poppins"-fonttia Google Fontsista, antaen sovellukselle modernin ja selkeän typografian, parantaen luettavuutta ja estetiikkaa;
  - **Background (background: linear-gradient(135deg, #74ebd5, #acb6e5);):** Lisää liukuvärin, joka vaihtuu turkoosista siniseen, luoden visuaalisesti houkuttelevan ja modernin ilmeen sovellukselle;
  - **Layout (display: flex; justify-content: center; align-items: center;):** Käyttää Flexboxia keskittääkseen sisällön sekä vaaka- että pystysuunnassa varmistaen, että sovellus on visuaalisesti tasapainossa sivulla;
  - **Height (height: 100vh;):** Varmistaa, että verkkosivu käyttää koko näkymän korkeuden, mahdollistaen sisällön pystysuuntaisen keskittämisen.
- **Tärkeä yksityiskohta:** Flexboxin ja liukuvärin yhdistelmä luo visuaalisesti houkuttelevan ja hyvin keskitetyn asettelun, joka toimii kaikilla näytön kokoisilla.

## 3. Container Styling (.container):

- **Mikä se on:** .container-luokka muotoilee pääsisältöpaketin, joka sisältää otsikon, lainauksen, kirjoittajan ja painikkeen.
- **Tarkoitus:**
  - **Background Color (background-color: #fff;):** Antaa säiliölle puhtaan valkoisen taustan, joka kontrastoi hyvin sivun värikkään liukuvärin kanssa;
  - **Padding (padding: 40px 30px;):** Lisää riittävästi sisäistä tilaa sisällön ympärille varmistaen, että teksti ja elementit eivät kosketa reunoja ja ovat paremmin luettavissa;
  - **Border Radius (border-radius: 20px;):** Pyöristää säiliön kulmat luoden modernin ja pehmeän korttimaisen ulkoasun;
  - **Box Shadow (box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);):** Lisää hienovaraisen varjon säiliön alle, saaden sen näyttämään hieman kohotetulta ja antaen sivulle syvyyttä;
  - **Max Width (max-width: 450px;):** Varmistaa, että säiliöllä on enimmäisleveys, joka pitää sisällön helposti luettavana suuremmilla näytöillä;
  - **Transition (transition: transform 0.3s ease;):** Mahdollistaa pehmeän suurennusefektin, kun säiliötä leijutetaan, luoden hienovaraisen zoomausvaikutuksen.
- **Tärkeä yksityiskohta:** Säiliö on suunniteltu näyttämään kortilta, jossa on pehmeitä varjoja ja pyöristetyt reunat, tarjoten modernin ja visuaalisesti miellyttävän asettelun, joka parantaa käyttäjäkokemusta.

## 4. Hover Effect for Container (.container:hover):

- **Mikä se on:** soveltaa visuaalisen efektin, kun käyttäjä leijuttaa hiirtä säiliön päällä.
- **Tarkoitus:** **transform: scale(1.03);** -ominaisuus suurentaa säiliötä hieman leijutettaessa, lisäten vuorovaikutteisuutta ja tehden sovelluksesta dynaamisemman ja houkuttelevamman.
- **Tärkeä yksityiskohta:** Tämä hover-efekti tarjoaa hienovaraisen zoomausanimaation, parantaen käyttäjän vuorovaikutusta ilman, että se ylittää käyttöliittymän, saaden sen tuntumaan responsiivisemmalta ja viimeistellymmältä.

## 5. Heading Styling (h1):

- **Mikä se on:** Muotoilee <code><</code>h1>-elementin, joka näyttää sovelluksen pääotsikon "Inspirational Quotes".
- **Tarkoitus:**
  - **Font Size (font-size: 2.5em;):** Varmistaa, että otsikko on suuri ja huomion herättävä, kiinnittäen huomion otsikkoon;
  - **Text Color (color: #2c3e50;):** Antaa otsikolle tumman värin, joka tarjoaa hyvän kontrastin säiliön valkoista taustaa vasten ja varmistaa luettavuuden;
  - **Margin Bottom (margin-bottom: 20px;):** Lisää tilaa otsikon alle erottamaan se lainauksesta, parantaen asettelun rakennetta.
- **Tärkeä yksityiskohta:** Suuri fonttikoko ja tumma väri tekevät otsikosta visuaalisesti hallitsevan, varmistaen, että se on ensimmäinen asia, jonka käyttäjät huomaavat, kun he ovat vuorovaikutuksessa sovelluksen kanssa.

## 6. Quote Styling (.quote):

- **Mikä se on:** .quote-luokka muotoilee <code><</code>div>-elementin, joka näyttää haetun lainauksen.
- **Tarkoitus:**
  - **Font Size (font-size: 1.3em;):** Lisää lainauksen tekstin kokoa, jotta se olisi paremmin luettavissa ja visuaalisesti erottuva;
  - **Font Style (font-style: italic;):** Lisää kursiivin tyylin, joka antaa lainaukselle elegantin, lainausmaisen ulkoasun;
  - **Margin Bottom (margin-bottom: 20px;):** Lisää tilaa lainauksen alle erottamaan sen kirjoittajan nimestä ja parantamaan rakennetta;
  - **Text Color (color: #34495e;):** Asettaa pehmeämmän tumman sävyn lainauksen tekstille varmistaen, että se on helposti luettavissa ja samalla säilyttäen hienostuneen ilmeen;
  - **Min Height (min-height: 80px;):** Varmistaa, että lainausalueella on vähimmäiskorkeus estäen asettelun vaihtelut, kun uusia lainauksia ladataan;
  - **Transition (transition: color 0.3s ease;):** Lisää pehmeän siirtymän, kun lainauksen tekstin väri muuttuu, luoden viimeistellyn vaikutelman.
- **Tärkeä yksityiskohta:** Lainaus on suunniteltu olemaan helposti luettavissa ja visuaalisesti houkutteleva, riittävällä tilalla ja hienovaraisilla siirtymillä, jotka parantavat käyttäjäkokemusta.

## 7. Author Styling (.author):

- **Mikä se on:** .author-luokka muotoilee <code><</code>div>-elementin, joka näyttää lainauksen kirjoittajan.
- **Tarkoitus:**
  - **Font Size (font-size: 1.1em;):** Tekee kirjoittajan nimestä luettavan, mutta hieman pienemmän kuin lainauksen, jotta visuaalinen hierarkia säilyy;
  - **Font Weight (font-weight: 500;):** Lisää keskitason fonttipainon korostaen kirjoittajan nimeä ilman, että se ylittää lainauksen;
  - **Text Color (color: #2980b9;):** Lisää sinisen värin kirjoittajan nimeen, luoden selkeän kontrastin lainaukseen ja lisäten persoonallisuutta;
  - **Margin Bottom (margin-bottom: 20px;):** Lisää tilaa kirjoittajan nimen alle erottaen sen painikkeesta ja pitäen asettelun siistinä ja järjestettynä.
- **Tärkeä yksityiskohta:** Kirjoittajan nimi on muotoiltu täydentämään lainausta samalla kun säilytetään luettavuus, ja erottuvalla värillä, joka parantaa sovelluksen visuaalista houkuttelevuutta.

## 8. Button Styling (button):

- **Mikä se on:** button-sääntö muotoilee "Get a Quote" -painikkeen tehden siitä visuaalisesti houkuttelevan ja helppokäyttöisen.
- **Tarkoitus:**
  - **Background Color (background-color: #007bff;):** Tarjoaa elävän sinisen taustan, joka saa painikkeen erottumaan toimintakehotteena;
  - **Text Color (color: white;):** Varmistaa, että painikkeen teksti on helposti luettavissa sinisen taustan päällä;
  - **Padding (padding: 12px 30px;):** Lisää painikkeen kokoa, jotta sitä olisi helpompi klikata ja vuorovaikutus olisi mukavampi;
  - **Border Radius (border-radius: 8px;):** Pyöristää painikkeen kulmat, mikä vastaa sovelluksen modernia ja sujuvaa ulkoasua;
  - **Cursor (cursor: pointer;):** Vaihtaa osoittimen osoittimeksi, kun käyttäjä leijuttaa painikkeen päällä, osoittaen, että se on klikattavissa;
  - **Font Size (font-size: 1em;):** Asettaa painikkeen tekstin koon mukavaksi ja helposti luettavaksi;
  - **Transition (transition: background-color 0.3s ease, transform 0.2s ease;):** Lisää sujuvia animaatioita leijutus- ja klikkausvuorovaikutuksille, parantaen painikkeen käyttötuntumaa.
- **Tärkeä yksityiskohta:** Painike on suunniteltu olemaan sekä visuaalisesti erottuva että helppokäyttöinen, käyttäen eläviä värejä ja sujuvia siirtymiä rohkaistakseen käyttäjiä klikkaamaan ja vuorovaikuttamaan sovelluksen kanssa.

## 9. Button Hover Effect (button:hover):

- **Mikä se on:** soveltaa visuaalisen efektin, kun käyttäjä leijuttaa hiirtä painikkeen päällä.
- **Tarkoitus:** Taustaväri muuttuu tummemmaksi siniseksi (#0056b3), tarjoten visuaalisen vihjeen siitä, että painike on vuorovaikutteinen.
- **Tärkeä yksityiskohta:** Hover-efekti lisää vuorovaikutteisuutta, saaden sovelluksen tuntumaan responsiivisemmalta antamalla käyttäjille välitöntä palautetta, kun he leijuttavat painikkeen päällä.

## 10. Button Active State (button:active):

- **Mikä se on:** soveltaa tyyliä, kun painiketta klikataan tai painetaan.
- **Tarkoitus:** Taustaväri tummenee vielä enemmän (#004494) osoittaen, että painiketta on painettu, ja **transform: translateY(1px)** lisää kevyen visuaalisen painallusefektin.
- **Tärkeä yksityiskohta:** Tämä tarjoaa käyttäjille kosketuspalautteen jäljitellen fyysistä painallusta ja parantaa yleistä vuorovaikutuskokemusta.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...});):

- **Mikä se on:** Tämä on tapahtumankuuntelija, joka odottaa, että koko HTML-dokumentti on ladattu kokonaan, ennen kuin skripti suoritetaan.
- **Tarkoitus:** Se varmistaa, että JavaScript on vuorovaikutuksessa DOM-elementtien kanssa vasta, kun ne on kokonaan ladattu ja jäsennelty. Ilman tätä skripti saattaisi yrittää käsitellä elementtejä, jotka eivät vielä ole käytettävissä, mikä johtaisi virheisiin.
- **Tärkeä yksityiskohta:** DOMContentLoaded-tapahtuman käyttäminen takaa, että sovellus alkaa toimia vasta, kun kaikki HTML-elementit (kuten lainaus ja painike) ovat saatavilla JavaScriptin muokattavaksi.

## 2. Selecting DOM Elements (const quoteElement, const authorElement, const quoteButton):

- **Mikä se on:** Nämä rivit valitsevat tarvittavat DOM-elementit (lainauksen, kirjoittajan ja painikkeen) niiden id:n avulla käyttäen document.getElementById()-funktiota.
- **Tarkoitus:**
  - **quoteElement:** Viittaa div-elementtiin, jossa haettu lainaus näytetään;
  - **authorElement:** Viittaa div-elementtiin, jossa näytetään lainauksen kirjoittaja;
  - **quoteButton:** Viittaa painikkeeseen, joka painettaessa käynnistää prosessin uuden lainauksen hakemiseksi.
- **Tärkeä yksityiskohta:** DOM-elementtien tehokas valitseminen ja viittaaminen tekee koodista luettavampaa ja helpommin hallittavaa, mahdollistaen sovelluksen päivittää nämä elementit dynaamisesti, kun käyttäjä vuorovaikuttaa painikkeen kanssa.

## 3. Button Click Event Listener (quoteButton.addEventListener('click', fetchQuote);):

- **Mikä se on:** Tämä tapahtumankuuntelija on liitetty painike-elementtiin (quoteButton) ja kuuntelee klik-tapahtumaa. Kun käyttäjä klikkaa painiketta, fetchQuote-funktio käynnistyy.
- **Tarkoitus:** Se mahdollistaa sovelluksen päätoiminnon — uuden motivoivan lainauksen hakemisen — aktivoimalla API-haun, kun käyttäjä klikkaa painiketta.
- **Tärkeä yksityiskohta:** Tapahtumankuuntelijoiden käyttäminen takaa, että käyttäjän vuorovaikutukset otetaan helposti huomioon ja käsitellään, mahdollistaen dynaamisen ja interaktiivisen käyttäjäkokemuksen.

## 4. Fetch Quote Function (function fetchQuote() {...}):

- **Mikä se on:** fetchQuote()-funktio vastaa satunnaisen lainauksen hakemisesta API:sta ja sivun sisällön päivittämisestä haetulla datalla.
- **Askeleet:**
  - **Fetch API Call (fetch('[https://api.quotable.io/random](https://api.quotable.io/random)')):** Lähettää GET-pyynnön Quotable API:lle satunnaisen lainauksen hakemiseksi;
  - **Handling the Response (.then(response => response.json()):** Jäsentää API:n vastauksen JSON-muodossa, muuntaen sen helposti käsiteltävään muotoon JavaScriptissä;
  - **Updating the DOM (quoteElement.textContent = data.content; authorElement.textContent = "- " + data.author;):** Kun lainaus on haettu, quoteElement tekstisisältö päivitetään lainauksella ja authorElement päivitetään kirjoittajan nimellä;
  - **Error Handling (.catch(error => {...})):** Käsittelee mahdolliset virheet, jotka voivat ilmetä haun aikana (esim. verkkoyhteysongelmat), ja näyttää virheilmoituksen lainausalueella.
- **Tarkoitus:** Funktio hoitaa koko prosessin satunnaisen lainauksen hakemisesta ja sivun sisällön päivittämisestä uudella datalla, tehden sovelluksesta dynaamisen ja vuorovaikutteisen.
- **Tärkeä yksityiskohta:** Funktio on suunniteltu käsittelemään virheet sujuvasti varmistaen, että käyttäjä näkee selkeän viestin, jos jokin menee pieleen, mikä parantaa kokonaiskäyttäjäkokemusta.

## 5. Error Handling (.catch(error => {...})):

- **Mikä se on:** .catch()-lohko käsittelee mahdolliset virheet, jotka ilmenevät lainauksen haun aikana, kuten verkkoyhteysongelmat tai API-ongelmat.
- **Tarkoitus:** Jos lainauksen haussa tapahtuu virhe, sovellus ottaa virheen kiinni ja tarjoaa käyttäjäystävällisen palautteen, ilmoittaen käyttäjälle, että jokin meni pieleen.
- **Tärkeä yksityiskohta:** Sen sijaan, että sovellus jäisi reagoimattomaksi virheen sattuessa, tämä lohko varmistaa, että käyttäjille ilmoitetaan ongelmista selkeästi ja ytimekkäästi, parantaen luotettavuutta ja käytettävyyttä.

## 6. Updating the Quote and Author in the DOM (quoteElement.textContent, authorElement.textContent):

- **Mikä se on:** Nämä rivit päivittävät quoteElement- ja authorElement-elementtien sisällön DOM:iin. textContent-ominaisuutta käytetään näiden elementtien tekstin asettamiseen.
- **Tarkoitus:** Kun uusi lainaus haetaan API:sta, nämä rivit varmistavat, että sivulla oleva teksti heijastaa uutta sisältöä. Lainaus näytetään lainaus-divissä ja kirjoittajan nimi näytetään kirjoittaja-divissä.
- **Tärkeä yksityiskohta:** DOM:in dynaaminen päivittäminen tekee sovelluksesta responsiivisen ja interaktiivisen, varmistaen, että sisältö päivittyy aina, kun käyttäjä klikkaa painiketta.

## 7. Initial Quote Fetch on Page Load (fetchQuote();):

- **Mikä se on:** Tämä funktiokutsu skriptin lopussa varmistaa, että sovellus hakee aloituslainauksen, kun sivu ladataan, ennen kuin käyttäjä edes vuorovaikuttaa painikkeen kanssa.
- **Tarkoitus:** Tämä parantaa käyttäjäkokemusta näyttämällä lainauksen heti, välttäen tyhjän sivun, kun sovellus ladataan ensimmäisen kerran.
- **Tärkeä yksityiskohta:** Lainauksen hakeminen sivun latauksen yhteydessä varmistaa, että käyttäjiä tervehtii heti motivoiva sisältö, mikä lisää sovelluksen yleistä sitoutumista.
