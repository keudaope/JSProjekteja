# Nettisivu: https://keudaope.github.io/JSProjekteja/P28_Stopwatch

# Johdanto

Sekuntikello on yksinkertainen ja hyödyllinen sovellus, joka antaa käyttäjien käynnistää, pysäyttää ja nollata ajastimen. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptin, HTML:n ja CSS:n käyttöä samalla oppien käsittelemään käyttäjän toimintoja, hallitsemaan aikavälejä ja päivittämään DOM-rakennetta dynaamisesti. Käyttäjät voivat hallita sekuntikelloa mitatakseen kulunutta aikaa.

# HTML selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>)

- **Mikä se on:** <code><</code>!DOCTYPE html> -määritelmä kertoo selaimelle, että asiakirja on kirjoitettu HTML5-kielellä.
- **Tarkoitus:** Se varmistaa, että verkkosivu tulkitaan nykyaikaisten HTML5-standardien mukaisesti, mikä estää ongelmia vanhempien renderointitilojen kanssa.
- **Tärkeä yksityiskohta:** Lisää aina <code><</code>!DOCTYPE html> HTML-asiakirjan alkuun varmistaaksesi yhdenmukaisen renderoinnin eri selaimissa.

## 2. HTML Tag (<code><</code>html lang="en">)

- **Mikä se on:** <code><</code>html -tagi on juurielementti, joka sisältää kaikki muut sivun elementit. lang="en" -attribuutti ilmaisee, että sisällön pääasiallinen kieli on englanti.
- **Tarkoitus:** lang-attribuutti on tärkeä hakukoneille ja esteettömyystyökaluille, sillä se auttaa niitä ymmärtämään dokumentin kielen.
- **Tärkeä yksityiskohta:** lang="en" -attribuutin käyttö parantaa hakukoneoptimointia (SEO) ja esteettömyyttä, mahdollistaen paremman tuen apuvälineille.

## 3. Head Tag (<code><</code>head>)

- **Mikä se on:** <code><</code>head>-elementti sisältää metadataa ja linkkejä ulkoisiin resursseihin.
- **Tarkoitus:** Se tarjoaa olennaista tietoa asiakirjasta (kuten sen otsikon ja merkistön koodauksen) sekä linkit tyylitiedostoihin ja skripteihin.
- **Tärkeät yksityiskohdat:**
  - **Meta Charset (<code><</code>meta charset="UTF-8">):** Määrittää, että asiakirja käyttää UTF-8-merkistökoodausta, joka tukee laajaa merkkivalikoimaa.
  - **Viewport Meta Tag (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">):** Varmistaa, että sisältö skaalaantuu oikein eri laitteilla, tehden sovelluksesta responsiivisen.
  - **Title Tag (<code><</code>title>Stopwatch<code><</code>/title>):** Määrittää otsikon, joka näkyy selaimen välilehdellä, auttaen käyttäjiä ja hakukoneita ymmärtämään sivun tarkoituksen.
  - **CSS Link (<code><</code>link rel="stylesheet" href="styles.css">):** Linkittää ulkoiseen tyylitiedostoon, joka muotoilee sivun. CSS:n erottaminen HTML:stä varmistaa siistimmän koodin ja helpomman ylläpidon.

## 4. Body Tag (<code><</code>body>)

- **Mikä se on:** <code><</code>body>-elementti sisältää kaiken näkyvän sisällön verkkosivulla, kuten otsikon, ajastinnäytön ja painikkeet.
- **Tarkoitus:** <code><</code>body>-elementti sisältää kaikki elementit, joiden kanssa käyttäjät ovat vuorovaikutuksessa. Se on tyylitelty CSS:ssä ja tehty interaktiiviseksi JavaScriptin avulla.
- **Tärkeä yksityiskohta:** Kaikki sovelluksen näkyvät elementit, mukaan lukien pääkontti ja painikkeet, sisältyvät <code><</code>body>-elementtiin, tehden siitä ensisijaisen alueen käyttäjän vuorovaikutukselle.

## 5. Main Container Div (<code><</code>div class="container">)

- **Mikä se on:** <code><</code>div>-elementti, jossa on container-luokka, käärii sovelluksen pääsisällön, mukaan lukien otsikon, ajastimen ja painikkeet.
- **Tarkoitus:** Se ryhmittelee yhteen liittyvän sisällön yhdeksi lohkoksi, tehden siitä helpomman tyylitellä ja sijoittaa. Container-luokkaa käytetään soveltamaan tiettyjä tyylejä, kuten pehmustusta, varjoa ja pyöristettyjä kulmia.
- **Tärkeä yksityiskohta:** Container on tyylitelty toimimaan "korttina", mikä antaa sille siistin ja modernin ulkoasun, tehden sovelluksesta visuaalisesti houkuttelevan ja helpon käyttää.

## 6. Heading Tag (<code><</code>h1>Stopwatch<code><</code>/h1>)

- **Mikä se on:** <code><</code>h1>-elementti näyttää sivun pääotsikon: "Stopwatch".
- **Tarkoitus:** Otsikko kertoo käyttäjille heti sovelluksen tarkoituksen. Se auttaa myös hakukoneoptimoinnissa, sillä se korostaa sivun tärkeimmän sisällön.
- **Tärkeä yksityiskohta:** <code><</code>h1>-elementti on tyylitelty olemaan suuri ja näkyvä, tehden siitä ensimmäisen asian, jonka käyttäjät huomaavat sivun latautuessa.

Tässä on korjattu versio ensimmäisistä osioista. Halutessasi voin jatkaa tästä eteenpäin!

## 7. Timer Display Div (<code><</code>div class="timer" id="timer">00:00:00<code><</code>/div>)

- **Mikä se on:** <code><</code>div>-elementti, jossa on timer-luokka ja id="timer", näyttää ajan, joka on kulunut sekuntikellossa (aluksi asetettu arvoon 00:00:00).
- **Tarkoitus:** Tämä elementti on sekuntikellon ajan visuaalinen esitys. Kun käyttäjä aloittaa, pysäyttää tai nollaa sekuntikellon, tämä elementti päivitetään vastaavasti.
- **Tärkeä yksityiskohta:** id-attribuutti tekee tästä elementistä helpon kohdistaa ja käsitellä JavaScriptin avulla, ja alkuarvo (00:00:00) tarjoaa oletuspisteen ajan esittämiselle.

## 8. Buttons Container Div (<code><</code>div class="buttons">)

- **Mikä se on:** <code><</code>div>-elementti, jossa on buttons-luokka, käärii kolme hallintapainiketta: Start, Stop ja Reset.
- **Tarkoitus:** Se ryhmittelee painikkeet yhteen asettelun helpottamiseksi, tehden niistä helpommin tyyliteltäviä (esimerkiksi välitettäväksi) ja sijoitettavaksi vierekkäin.
- **Tärkeä yksityiskohta:** Säilössä käytetään Flexboxia (määritelty CSS:ssä) painikkeiden tasaamiseen siististi riviin, tarjoten siistin ja käyttäjäystävällisen käyttöliittymän.

## 9. Start Button (<code><</code>button id="start-button" class="btn start">Start<code><</code>/button>)

- **Mikä se on:** <code><</code>button>-elementti luo klikattavan painikkeen, jonka teksti on "Start", ja joka aloittaa sekuntikellon.
- **Tarkoitus:** Kun painiketta klikataan, se laukaisee JavaScript-funktion, joka käynnistää sekuntikellon.
- **Tärkeä yksityiskohta:** id- ja class-attribuuttien yhdistelmä tekee tästä painikkeesta helpon tyylitellä ja ohjelmallisesti ohjata.

## 10. Stop Button (<code><</code>button id="stop-button" class="btn stop">Stop<code><</code>/button>)

- **Mikä se on:** <code><</code>button>-elementti luo klikattavan painikkeen, jonka teksti on "Stop", ja joka pysäyttää sekuntikellon.
- **Tarkoitus:** Kun painiketta klikataan, se laukaisee JavaScript-funktion, joka pysäyttää sekuntikellon.
- **Tärkeä yksityiskohta:** Jokaiselle painikkeelle määritetty yksilöllinen luokka (esim. stop) mahdollistaa painikkeiden selkeät tyylieroavaisuudet.

## 11. Reset Button (<code><</code>button id="reset-button" class="btn reset">Reset<code><</code>/button>)

- **Mikä se on:** <code><</code>button>-elementti luo klikattavan painikkeen, jonka teksti on "Reset", ja joka nollaa sekuntikellon.
- **Tarkoitus:** Kun painiketta klikataan, se laukaisee JavaScript-funktion, joka nollaa sekuntikellon takaisin arvoon 00:00:00.
- **Tärkeä yksityiskohta:** Reset-painike on visuaalisesti erotettu Start- ja Stop-painikkeista sen reset-luokan avulla, joka antaa sille punaisen värin, osoittaen sen erilaisen toiminnon.

## 12. Script Tag (<code><</code>script src="app.js"><code><</code>/script>)

- **Mikä se on:** <code><</code>script>-elementti linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää kaiken logiikan sekuntikellon ohjaamiseksi.
- **Tarkoitus:** Linkittämällä ulkoiseen skriptiin, HTML-tiedosto pysyy siistinä ja keskittyy rakenteeseen, kun taas JavaScript-koodi on erillään paremman järjestyksen ja ylläpidettävyyden vuoksi.
- **Tärkeä yksityiskohta:** Ulkoinen skripti ladataan <code><</code>body>-tunnisteen lopussa varmistaakseen, että HTML-elementit ovat täysin ladattuja ennen kuin JavaScript yrittää olla vuorovaikutuksessa niiden kanssa.

# CSS selitys

## 1. Global Reset (\*)

- **Mikä se on:** \*-valitsin on universaali valitsin, joka kohdistuu kaikkiin sivun elementteihin.
- **Tarkoitus:** Se nollaa oletusreunukset ja sisennykset kaikille elementeille, varmistaen yhtenäisen ulkoasun eri selaimissa. Sääntö box-sizing: border-box; varmistaa, että täyte ja reunukset sisällytetään elementin kokonaisleveyteen ja -korkeuteen, mikä helpottaa asettelujen hallintaa.
- **Tärkeä yksityiskohta:** Tämä nollaus tarjoaa siistin perustan tyylittelylle ja eliminoi epäjohdonmukaisuudet selaimien oletustyyleissä.

## 2. Body Styling (body)

- **Mikä se on:** body-sääntö tyylittelee koko verkkosivun asettamalla fontin, taustan ja asettelun ominaisuudet.
- **Tarkoitus:**
  - **Font Family (font-family: 'Arial', sans-serif;):** Määrittää Arial-fontin, joka antaa siistin ja modernin ulkonäön.
  - **Background (background: linear-gradient(135deg, #74ebd5, #acb6e5;):** Lisää diagonaalisen liukuvärjäyksen, joka vaihtuu turkoosista vaaleansiniseen, antaen sovellukselle raikkaan ja visuaalisesti miellyttävän ilmeen.
  - **Flexbox Layout (display: flex; justify-content: center; align-items: center;):** Keskittää sisällön sekä vaaka- että pystysuunnassa ruudulla, varmistaen tasapainoisen ja hyvin keskitetyn asettelun.
  - **Height (height: 100vh;):** Varmistaa, että body vie koko näkymäportin korkeuden, mahdollistaen sisällön kunnollisen keskittämisen pystysuunnassa.
  - **Margin (margin: 0;):** Poistaa kaikki oletusreunukset bodysta, varmistaen, että sisältö täyttää koko näkymäportin.
- **Tärkeä yksityiskohta:** Flexboxin käyttö varmistaa, että pääsisältö (sekuntikellon säilö) pysyy keskitettynä ruudulla, tehden sovelluksesta siistin ja järjestelmällisen näköisen riippumatta näytön koosta.

## 3. Container Styling (.container)

- **Mikä se on:** .container-luokka tyylittelee päälohkkoa, joka sisältää otsikon, ajastimen ja painikkeet.
- **Tarkoitus:**
  - **Background Color (background-color: #fff;):** Antaa säilölle puhtaan valkoisen taustan, joka luo kontrastia liukuvärjätyn taustan kanssa.
  - **Padding (padding: 40px 30px;):** Lisää sisäistä tilaa säilön sisällä olevaan sisältöön, varmistaen, että teksti ja elementit eivät kosketa säilön reunoja.
  - **Border Radius (border-radius: 12px;):** Pyöristää säilön kulmat, tehden sovelluksesta modernimman ja käyttäjäystävällisemmän näköisen.
  - **Box Shadow (box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);):** Lisää hienovaraisen varjon säilön alle, antaen sille syvyyttä ja tehden sen hieman kohotetun näköiseksi.
  - **Max Width (max-width: 350px;):** Varmistaa, että säilöllä on enimmäisleveys, estäen sitä laajenemasta liian leveäksi suuremmilla näytöillä. Tämä pitää sisällön luettavana ja järjestelmällisenä.
  - **Transition (transition: transform 0.3s ease;):** Mahdollistaa sulavan skaalausefektin, kun säilön päälle viedään hiiri, tehden vuorovaikutuksesta houkuttelevamman.
- **Tärkeä yksityiskohta:** Säilö on suunniteltu näyttämään "kortilta", jossa varjot ja pyöristetyt kulmat antavat sovellukselle modernin ja viimeistellyn ulkoasun.

## 4. Hover Effect for Container (.container:hover)

- **Mikä se on:** soveltaa visuaalisen efektin, kun käyttäjä vie hiiren säilön päälle.
- **Tarkoitus:** transform: scale(1.05); suurentaa säilöä hieman, kun sen päälle viedään hiiri, luoden hienovaraisen zoomaustehosteen, joka lisää vuorovaikutteisuutta.
- **Tärkeä yksityiskohta:** Tämä hover-efekti tekee sovelluksesta dynaamisemman ja käyttäjäystävällisemmän, kun se reagoi käyttäjän toimintaan.

## 5. Heading Styling (h1)

- **Mikä se on:** h1-sääntö tyylittelee pääotsikon "Stopwatch."
- **Tarkoitus:**
  - **Font Size (font-size: 2.5em;):** Varmistaa, että otsikko on suuri ja näkyvä, houkutellen käyttäjän huomion välittömästi.
  - **Text Color (color: #333;):** Antaa otsikolle tummanharmaan värin, mikä tekee siitä erottuvan valkoista taustaa vasten.
  - **Margin Bottom (margin-bottom: 20px;):** Lisää tilaa otsikon ja ajastimen väliin, varmistaen selkeän erottelun ja tasapainoisen asettelun.
- **Tärkeä yksityiskohta:** Suuri fonttikoko ja tumma väri tekevät otsikosta helppolukuisen ja visuaalisesti näkyvän, auttaen käyttäjää ymmärtämään sovelluksen tarkoituksen nopeasti.

## 6. Timer Display Styling (.timer)

- **Mikä se on:** .timer-luokka tyylittelee div-elementin, joka näyttää sekuntikellon kuluvan ajan.
- **Tarkoitus:**
  - **Font Size (font-size: 3em;):** Varmistaa, että ajastimen numerot ovat suuria ja helposti luettavissa, tehden sekuntikellosta sovelluksen visuaalisen keskipisteen.
  - **Font Weight (font-weight: bold;):** Tekee ajastimen näytöstä näkyvämmän ja selkeämmän.
  - **Text Color (color: #007bff;):** Käyttää kirkasta sinistä väriä, jotta ajastin erottuu ympäröivästä tekstistä ja painikkeista, korostaen sen tärkeyttä.
  - **Margin Bottom (margin-bottom: 20px;):** Lisää tilaa ajastimen alle, jotta se erottuu painikkeista, parantaen asettelua.
  - **Letter Spacing (letter-spacing: 2px;):** Lisää hieman tilaa numeroiden väliin, parantaen luettavuutta ja luoden modernin ilmeen.
- **Tärkeä yksityiskohta:** Ajastin on sovelluksen keskeinen elementti, joten se on suunniteltu suureksi, selkeäksi ja helposti luettavaksi yhdellä silmäyksellä.

## 7. Buttons Container (.buttons)

- **Mikä se on:** .buttons-luokka tyylittelee divin, joka sisältää kolme hallintapainiketta (Start, Stop, Reset).
- **Tarkoitus:**
  - **Flexbox Layout (display: flex; justify-content: space-between;):** Järjestää painikkeet vaakasuoraan riviin ja varmistaa, että ne ovat tasaisesti etäällä toisistaan.
  - **Margin Top (margin-top: 20px;):** Lisää tilaa ajastimen ja painikkeiden väliin, mikä parantaa luettavuutta ja asettelua.
- **Tärkeä yksityiskohta:** Flexbox varmistaa, että painikkeet ovat tasaisesti järjestetty ja helposti saavutettavissa, tehden käyttöliittymästä selkeän ja käyttäjäystävällisen.

## 8. General Button Styling (.btn)

- **Mikä se on:** .btn-luokka soveltaa yleisiä tyylejä kaikkiin sovelluksen painikkeisiin.
- **Tarkoitus:**
  - **Padding (padding: 10px 20px;):** Lisää sisätilaa painikkeisiin, tehden niistä helpompia klikata ja visuaalisesti suurempia.
  - **Border Radius (border-radius: 8px;):** Pyöristää painikkeiden kulmat, antaen niille modernin ja käyttäjäystävällisen ilmeen.
  - **Font Size (font-size: 1.1em;):** Varmistaa, että painikkeiden teksti on luettavaa ja kooltaan sopiva helppoon käyttöön.
  - **Cursor (cursor: pointer;):** Muuttaa hiiren osoittimen painikkeen päälle vietäessä osoittimeksi, mikä ilmaisee, että painike on klikattavissa.
  - **Margin (margin: 0 5px;):** Lisää tilaa jokaisen painikkeen väliin varmistaen, että ne eivät kosketa toisiaan ja pysyvät visuaalisesti erillään.
  - **Transition (transition: background-color 0.3s ease, transform 0.2s ease;):** Lisää sujuvat muutokset taustaväriin ja hienovaraisen nostoefektin, kun painikkeita leijutetaan tai klikataan, tehden niistä responsiivisempia.
- **Tärkeä yksityiskohta:** .btn-luokka varmistaa, että kaikilla painikkeilla on yhtenäinen tyyli, jossa on sujuvat hover- ja klikkausvaikutukset, parantaen käyttäjäkokemusta.

## 9. Start Button Styling (.start)

- **Mikä se on:** .start-luokka soveltaa erityisiä tyylejä "Start"-painikkeeseen.
- **Tarkoitus:**
  - **Background Color (background-color: #28a745;):** Antaa "Start"-painikkeelle vihreän värin, joka ilmaisee, että se on tarkoitettu käynnistämään sekuntikello.
  - **Text Color (color: white;):** Varmistaa, että painikkeen teksti on selkeästi luettavissa vihreää taustaa vasten.
  - **Hover and Active States:**
    - **Hover (background-color: #218838;):** Tummentaa painiketta hieman, kun sen päälle viedään hiiri, antaen visuaalisen palautteen käyttäjälle.
    - **Active (background-color: #1e7e34;):** Tummentaa painiketta lisää, kun sitä klikataan, luoden tuntuman fyysisestä painikkeen painalluksesta.
- **Tärkeä yksityiskohta:** Vihreä väri "Start"-painikkeessa liittyy visuaalisesti aloittamiseen tai käynnistämiseen, tehden sen toiminnasta intuitiivisen käyttäjille.

## 10. Stop Button Styling (.stop)

- **Mikä se on:** .stop-luokka soveltaa erityisiä tyylejä "Stop"-painikkeeseen.
- **Tarkoitus:**
  - **Background Color (background-color: #ffc107;):** Antaa "Stop"-painikkeelle keltaisen värin, joka ilmaisee, että sen tarkoitus on pysäyttää tai keskeyttää sekuntikello.
  - **Text Color (color: white;):** Varmistaa, että painikkeen teksti on selkeästi luettavissa keltaista taustaa vasten.
  - **Hover and Active States:**
    - **Hover (background-color: #e0a800;):** Tummentaa painiketta, kun sen päälle viedään hiiri, antaen käyttäjälle visuaalista palautetta.
    - **Active (background-color: #d39e00;):** Tummentaa painiketta lisää, kun sitä klikataan, imitoiden fyysisen painikkeen painallusta.
- **Tärkeä yksityiskohta:** Keltainen väri "Stop"-painikkeessa liittyy yleensä keskeyttämiseen tai varoitukseen, mikä tekee sen toiminnasta helppotajuisen käyttäjille.

## 11. Reset Button Styling (.reset)

- **Mikä se on:** .reset-luokka soveltaa erityisiä tyylejä "Reset"-painikkeeseen.
- **Tarkoitus:**
  - **Background Color (background-color: #dc3545;):** Antaa "Reset"-painikkeelle punaisen värin, joka ilmaisee sen tarkoituksen olevan sekuntikellon palauttaminen nollaan.
  - **Text Color (color: white;):** Varmistaa, että painikkeen teksti on selkeästi luettavissa punaista taustaa vasten.
  - **Hover and Active States:**
    - **Hover (background-color: #c82333;):** Tummentaa painiketta, kun sen päälle viedään hiiri, antaen käyttäjälle palautteen siitä, että painike on klikattavissa.
    - **Active (background-color: #bd2130;):** Tummentaa painiketta lisää, kun sitä klikataan, antaen tuntuman fyysisestä painikkeen painalluksesta.
- **Tärkeä yksityiskohta:** Punainen väri "Reset"-painikkeessa viestii yleensä pysäyttämistä tai palauttamista, tehden sen toiminnasta selkeän käyttäjille, jotka haluavat palauttaa sekuntikellon alkuarvoon.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...});)

- **Mikä se on:** Tämä tapahtumankuuntelija odottaa, että koko HTML-dokumentti on ladattu ja valmis ennen kuin skripti suoritetaan.
- **Tarkoitus:** Se varmistaa, että JavaScript on vuorovaikutuksessa DOM-elementtien kanssa vasta, kun ne on ladattu ja jäsennelty kokonaan. Tämä estää virheitä, jos skripti yrittää manipuloida elementtejä, joita ei ole vielä olemassa DOM:ssa.
- **Tärkeä yksityiskohta:** Käyttämällä DOMContentLoaded-varmistusta sovellus käynnistyy vasta, kun tarvittavat HTML-elementit (kuten ajastinnäyttö ja painikkeet) ovat paikoillaan.

## 2. Selecting DOM Elements (const timerElement = document.getElementById('timer');)

- **Mikä se on:** Nämä koodirivit valitsevat tärkeät DOM-elementit, joiden kanssa JavaScript on vuorovaikutuksessa. getElementById()-funktiota käytetään kohdistamaan elementtejä niiden yksilöllisten ID:n perusteella.
- **Tarkoitus:**
  - **timerElement:** Viittaa <code><</code>div-elementtiin, joka näyttää sekuntikellon ajan.
  - **startButton:** Viittaa "Start"-painikkeeseen, joka käynnistää ajastimen.
  - **stopButton:** Viittaa "Stop"-painikkeeseen, joka pysäyttää ajastimen.
  - **resetButton:** Viittaa "Reset"-painikkeeseen, joka palauttaa ajastimen nollaan (00:00:00).
- **Tärkeä yksityiskohta:** Tallentamalla nämä elementit vakioihin, niitä on helppo viitata ja käsitellä skriptissä, mikä pitää koodin järjestyksessä ja tehokkaana.

## 3. Variables for Timer Functionality (let timerInterval = null; let startTime = 0; let elapsedTime = 0;)

- **Mikä se on:** Nämä muuttujat seuraavat ajastimen tilaa:
  - **timerInterval:** Seuraa ajastimen intervallitunnusta.
  - **startTime:** Tallentaa ajan, jolloin sekuntikello käynnistyy.
  - **elapsedTime:** Seuraa kokonaiskulunutta aikaa, mukaan lukien aika ennen ajastimen pysäyttämistä.
- **Tarkoitus:**
  - **timerInterval:** Käytetään setInterval() ja clearInterval() -funktioiden kanssa ajastimen päivittämisen käynnistämiseen ja pysäyttämiseen.
  - **startTime:** Varmistaa, että sekuntikello käynnistyy oikeaan aikaan ja auttaa laskemaan ajan eron jokaiselle päivitykselle.
  - **elapsedTime:** Mahdollistaa ajan seuraamisen, vaikka ajastin keskeytettäisiin ja käynnistettäisiin uudelleen, varmistaa, ettei aikaa menetetä pysäytettäessä ja käynnistettäessä.
- **Tärkeä yksityiskohta:** Nämä muuttujat varmistavat, että ajastin voidaan käynnistää, pysäyttää ja jatkaa ilman ajan nollaamista, ellei käyttäjä nimenomaan nollaa sitä.

## 4. Timer Update Function (function updateTimer() {...})

- **Mikä se on:** Tämä funktio päivittää sekuntikellon näytön joka sekunti laskemalla kuluneen ajan ja muuntamalla sen tunneiksi, minuuteiksi ja sekunneiksi.
- **Vaiheet:**
  - **Calculate Elapsed Time:** Aika lasketaan vähentämällä startTime nykyisestä ajasta (Date.now()) ja lisäämällä elapsedTime, jotta aiemmin pysäytetty aika otetaan huomioon.
  - **Extract Hours, Minutes, and Seconds:** Kulunut aika jaetaan tunteihin, minuutteihin ja sekunteihin. Tätä varten käytetään Math.floor()-funktiota arvojen pyöristämiseen ja moduulioperaatioita jäännöksen käsittelemiseksi.
  - **Update the Timer Display:** timerElement.textContent päivitetään lasketulla ajalla, käyttämällä padStart(2, '0') varmistaakseen, että jokaisessa yksikössä (tunnit, minuutit, sekunnit) on vähintään kaksi numeroa.
- **Tärkeä yksityiskohta:** updateTimer()-funktio suoritetaan joka sekunti ja päivittää näytön uudella ajalla, varmistaen, että ajastin on tarkka ja jatkuvasti päivitetty.

## 5. Start Timer Function (function startTimer() {...})

- **Mikä se on:** Tämä funktio käynnistää sekuntikellon asettamalla startTime-arvon ja alustamalla setInterval()-funktion, joka päivittää ajastimen joka sekunti.
- **Vaiheet:**
  - **Prevent Multiple Starts:** Jos ajastin on jo käynnissä (ts. timerInterval ei ole null), funktio palauttaa arvon aikaisin, jotta ajastinta ei käynnistetä useita kertoja.
  - **Record Start Time:** Nykyinen aika tallennetaan käyttämällä Date.now()-funktiota ja se säilytetään startTime-muuttujassa.
  - **Start the Interval:** setInterval(updateTimer, 1000) asettaa ajastimen kutsumaan updateTimer()-funktiota joka sekunti, joka päivittää näytön.
- **Tärkeä yksityiskohta:** Tämä funktio varmistaa, että ajastin käynnistyy vain kerran ja pitää kirjaa aloitushetkestä, mikä mahdollistaa tarkan ajanlaskennan.

## 6. Stop Timer Function (function stopTimer() {...})

- **Mikä se on:** Tämä funktio pysäyttää sekuntikellon tyhjentämällä intervallin ja laskemalla yhteen kokonaiskuluneen ajan siihen asti, kun sekuntikello pysäytettiin.
- **Vaiheet:**
  - **Check if Timer is Running:** Jos ajastin ei ole käynnissä (ts. timerInterval on null), funktio ei tee mitään.
  - **Add Elapsed Time:** Ajastimen käynnistymisestä kulunut aika lisätään elapsedTime-muuttujaan.
  - **Clear the Interval:** clearInterval(timerInterval) pysäyttää ajastimen päivityksen.
  - **Reset Timer State:** timerInterval asetetaan null-arvoksi, mikä osoittaa, että sekuntikello ei ole enää käynnissä.
- **Tärkeä yksityiskohta:** Tämä funktio sallii käyttäjän keskeyttää ajastimen ilman, että kulunut aika menetetään. Tämä on oleellista, jotta käyttäjä voi aloittaa ja pysäyttää ajastimen ilman edistymisen menettämistä.

## 7. Reset Timer Function (function resetTimer() {...})

- **Mikä se on:** Tämä funktio nollaa sekuntikellon, tyhjentää intervallin, nollaa kuluneen ajan 0:ksi ja päivittää näytön näyttämään 00:00:00.
- **Vaiheet:**
  - **Clear the Interval:** Jos ajastin on käynnissä, se pysäytetään clearInterval(timerInterval)-komennolla.
  - **Reset Variables:** timerInterval asetetaan null-arvoksi ja elapsedTime nollataan.
  - **Reset Display:** timerElement.textContent päivitetään näyttämään 00:00:00.
- **Tärkeä yksityiskohta:** resetTimer()-funktio varmistaa, että sekuntikello voidaan nollata kokonaan, mikä mahdollistaa uuden ajanoton aloittamisen alusta.

## 8. Event Listeners for Buttons (startButton.addEventListener('click', startTimer);)

- **Mikä se on:** Nämä tapahtumankuuntelijat liittävät klikkaustapahtumia Start-, Stop- ja Reset-painikkeisiin.
- **Tarkoitus:**
  - **Start Button:** Kun painiketta klikataan, startTimer()-funktio käynnistetään, mikä aloittaa sekuntikellon.
  - **Stop Button:** Kun painiketta klikataan, stopTimer()-funktio käynnistetään, mikä pysäyttää sekuntikellon.
  - **Reset Button:** Kun painiketta klikataan, resetTimer()-funktio käynnistetään, mikä nollaa sekuntikellon.
- **Tärkeä yksityiskohta:** Nämä tapahtumankuuntelijat tekevät painikkeista toiminnallisia, antaen käyttäjän olla vuorovaikutuksessa sekuntikellon kanssa käynnistämällä, pysäyttämällä tai nollaamalla ajanoton.
