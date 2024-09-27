# Nettisivu: https://keudaope.github.io/JSProjekteja/P36_Simple_Drawing_App

# **Johdanto**

**Yksinkertainen piirustussovellus** on peruspiirustussovellus, joka sallii käyttäjän piirtää vapaasti kankaalle hiiren avulla. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptin, HTML:n ja CSS:n käyttöä samalla, kun he oppivat käyttämään **HTML5 canvas**-elementtiä, käsittelemään **hiiritapahtumia** ja manipuloimaan **canvas-kontekstia**. Käyttäjät voivat piirtää kankaalle ja tyhjentää sen tarvittaessa. Projekti esittelee tärkeitä ohjelmointikäsitteitä, kuten **tapahtumien käsittelyä** ja **canvas-manipulaatiota**, tehden siitä käytännöllisen työkalun interaktiivisten sovellusten rakentamisen opetteluun.

# **HTML Selitys**

## 1. DOCTYPE-määritelmä (<code><</code>!DOCTYPE html>)

- **Mikä se on:** <code><</code>!DOCTYPE html> -määritelmä ilmoittaa, että dokumentti on kirjoitettu HTML5:llä.
- **Tarkoitus:** Se varmistaa, että nykyaikaiset selaimet tulkitsevat verkkosivun oikein HTML5-standardien mukaisesti.
- **Tärkeä yksityiskohta:** Määritelmä tulee aina sisällyttää, jotta selaimet näyttävät sivun yhdenmukaisesti.

## 2. HTML-tagi (<code><</code>html lang="en">)

- **Mikä se on:** <code><</code>html> -tagi on juurielementti, joka kietoo kaikki muut HTML-elementit sivulle. lang="en" -attribuutti asettaa dokumentin kieleksi englannin.
- **Tarkoitus:** Se ilmoittaa selaimille, hakukoneille ja ruudunlukijoille dokumentin kielen, mikä parantaa saavutettavuutta ja hakukoneoptimointia (SEO).
- **Tärkeä yksityiskohta:** Kielen määrittäminen **lang**-attribuutilla parantaa saavutettavuutta käyttäjille, jotka käyttävät apuvälineitä, kuten ruudunlukijoita.

## 3. Head-tagi (<code><</code>head>)

- **Mikä se on:** <code><</code>head> -osio sisältää metatiedot ja linkit ulkoisiin resursseihin, kuten tyylitiedostoihin.
- **Tarkoitus:** Tämä osio mahdollistaa selaimen lataamaan tietoja, joita ei näytetä käyttäjälle, mutta jotka ovat olennaisia sivun näyttämisessä.
- **Tärkeät yksityiskohdat:**
  - **Meta Charset** (<code><</code>meta charset="UTF-8">): Määrittelee merkistökoodauksen UTF-8:ksi, mikä sallii sovelluksen käsitellä erilaisia tekstisymboleja oikein.
  - **Viewport Meta Tag** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">): Varmistaa, että sivu on responsiivinen ja skaalautuu oikein eri näyttöjen kokoihin, erityisesti mobiililaitteilla.
  - **Title Tag** (<code><</code>title>Simple Drawing App<code><</code>/title>): Asettaa verkkosivun otsikon, joka näytetään selaimen välilehdessä ja jota hakukoneet käyttävät ymmärtääkseen sivun sisällön.

## 4. Body-tagi (<code><</code>body>)

- **Mikä se on:** <code><</code>body> -tagi sisältää kaikki verkkosivun näkyvät sisällöt.
- **Tarkoitus:** **Body**-tagiin sijoitetaan käyttäjille näkyvät elementit. Se on tyylitelty CSS:llä ja sitä manipuloidaan JavaScriptillä interaktiivisen sovelluksen luomiseksi.
- **Tärkeä yksityiskohta:** Sivun sisältö on keskitetty Flexboxin avulla, ja CSS-siirtymät varmistavat sujuvan ja modernin asettelun.

## 5. Container-divi (<code><</code>div class="container">)

- **Mikä se on:** <code><</code>div> -elementti ryhmittelee pääsisällön, mukaan lukien otsikon, canvasin ja painikkeen.
- **Tarkoitus:** Se kietoo keskeiset käyttöliittymäelementit ja mahdollistaa niiden keskitetyn tyylityksen. **container**-luokka lisää paddingia, varjoja ja pyöristettyjä kulmia parantaakseen ulkoasua.
- **Tärkeä yksityiskohta:** Sisällön ryhmittely konttiin helpottaa koko osion yhtenäistä tyylittelyä, tarjoten korttimaisen ulkoasun.

## 6. Otsikko-tagi (<code><</code>h1>Simple Drawing App<code><</code>/h1>)

- **Mikä se on:** <code><</code>h1> -tagi edustaa sivun ensisijaista otsikkoa.
- **Tarkoitus:** Otsikko kertoo käyttäjille heti sovelluksen tarkoituksen, ja se on tyylitelty korostetusti huomion kiinnittämiseksi.
- **Tärkeä yksityiskohta:** **<code><</code>h1>** on tyylitelty marginaalilla luomaan tilaa sen ja canvasin välille, parantaen luettavuutta.

## 7. Canvas-elementti (<code><</code>canvas id="drawing-canvas" width="600" height="400"><code><</code>/canvas>)

- **Mikä se on:** **<code><</code>canvas>** on HTML5-elementti, jota käytetään piirtämään grafiikkaa ja animaatioita JavaScriptin avulla.
- **Tarkoitus:** Se tarjoaa alueen, jossa käyttäjät voivat piirtää, ja sen koko hallitaan **width**- ja **height**-attribuuteilla.
- **Tärkeä yksityiskohta:** **Canvas**-elementti on tyylitelty ja se vuorovaikuttaa JavaScriptin kanssa mahdollistaakseen käyttäjille vapaan piirtämisen.

## 8. Rivinvaihto (<code><</code>br>)

- **Mikä se on:** <code><</code>br> -tagi lisää rivinvaihdon canvasin ja painikkeen välille.
- **Tarkoitus:** Se luo pystysuuntaista tilaa, tehden asettelusta visuaalisesti miellyttävämmän ja erottaen canvasin painikkeesta.
- **Tärkeä yksityiskohta:** **<code><</code>br>** on yksinkertainen tapa lisätä tilaa, mutta sen voisi saavuttaa myös CSS:llä marginaalin avulla.

## 9. Painike-elementti (<code><</code>button id="clear-button">Clear Canvas<code><</code>/button>)

- **Mikä se on:** **<code><</code>button>** -elementti on "Clear Canvas" -painike.
- **Tarkoitus:** Tämä painike antaa käyttäjille mahdollisuuden tyhjentää canvas ja poistaa kaikki piirretyt elementit.
- **Tärkeä yksityiskohta:** Painike on viitattu JavaScriptissä **id**-attribuutin avulla, jotta se voi laukaista canvasin tyhjennyksen toiminnallisuuden.

## 10. Skripti-tagi (<code><</code>script src="app.js"><code><</code>/script>)

- **Mikä se on:** <code><</code>script> -tagi linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka hallitsee sovelluksen interaktiivisia toimintoja.
- **Tarkoitus:** JavaScriptin linkittäminen ulkoisesti pitää HTML:n siistinä ja erillään logiikasta, joka käsittelee piirtämistä ja canvasin tyhjentämistä.
- **Tärkeä yksityiskohta:** JavaScriptin pitäminen erillisessä tiedostossa noudattaa parhaita käytäntöjä, tehden koodista modulaarisen ja helposti ylläpidettävän.

# CSS Selitys

## 1. Body-tyylittely (body):

- **Mikä se on:** Body-sääntö määrittää koko verkkosivun asettelun ja ulkoasun.
- **Tärkeät ominaisuudet:**
  - **font-family: 'Arial', sans-serif;**: Asettaa modernin ja selkeän fontin koko sivulle, mikä parantaa luettavuutta.
  - **background-color: #f0f0f0;**: Asettaa vaaleanharmaan taustan koko sivulle, luoden neutraalin ja pehmeän taustan, joka kontrastoi canvas- ja container-elementtien kanssa.
  - **display: flex; justify-content: center; align-items: center;**: Käyttää Flexboxia keskittääkseen sisällön sekä vaakasuunnassa että pystysuunnassa näytön sisällä, varmistaen, että piirrossovellus on keskitetty ja tarjoaa tasapainoisen, esteettisesti miellyttävän asettelun.
  - **height: 100vh;**: Varmistaa, että body vie koko näkymän korkeuden, tehden sovelluksesta pystysuuntaan keskitetyn, riippumatta näytön koosta.
  - **margin: 0;**: Poistaa selainten oletusmarginaalit varmistaen yhdenmukaisen renderöinnin kaikilla laitteilla.
- **Tarkoitus:** Nämä tyylit varmistavat, että pääsisältö on täydellisesti keskitetty sivulle, luoden siistin ja ammattimaisen ilmeen samalla optimoiden eri näyttökokoja varten.

## 2. Container-tyylittely (.container):

- **Mikä se on:** .container-luokka tyylittelee pääasiallisen kehyksen, joka sisältää otsikon, canvasin ja painikkeen.
- **Tärkeät ominaisuudet:**
  - **text-align: center;**: Keskittää tekstin containerin sisällä varmistaen, että otsikko ja painike ovat linjassa.
  - **padding: 20px;**: Lisää sisäistä tilaa containerin sisällön ympärille, tehden siitä visuaalisesti tasapainoisemman ja mukavamman lukea.
  - **background: #ffffff;**: Asettaa valkoisen taustan containerille, luoden selkeän kontrastin harmaata body-taustaa vasten.
  - **box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);**: Lisää hienovaraisen varjon containerin taakse, antaen sille modernin, korttimaisen ulkoasun, joka luo syvyyttä.
  - **border-radius: 10px;**: Pyöristää containerin kulmat, antaen sille sileän ja modernin ilmeen.
  - **max-width: 700px; width: 100%;**: Varmistaa, että containerin maksimileveys on 700px, mikä tekee siitä responsiivisen. Leveys on asetettu 100 %, jotta se skaalautuu oikein pienemmillä näytöillä.
- **Tarkoitus:** Nämä tyylit luovat visuaalisesti miellyttävän, keskitetyn asettelun, joka näyttää ammattimaiselta. Containerin suunnittelu erottaa sisällön taustasta pehmennyksen, varjojen ja pyöristettyjen kulmien avulla, tehden sovelluksesta siistin ja modernin.

## 3. Canvas-tyylittely (canvas):

- **Mikä se on:** Canvas-sääntö tyylittelee piirtopinnan, jolla käyttäjät voivat luoda piirroksiaan.
- **Tärkeät ominaisuudet:**
  - **border: 2px solid #007bff;**: Lisää sinisen kehyksen canvasin ympärille, tehden siitä visuaalisesti erottuvan ja kehystää piirtopinnan.
  - **background-color: #fff;**: Asettaa valkoisen taustan canvasille, tarjoten selkeän pinnan piirtämiselle.
  - **cursor: crosshair;**: Muuttaa kursorin ristikohdistimeksi canvasin päällä, antaen käyttäjille selkeän merkin siitä, että he voivat piirtää.
  - **border-radius: 8px;**: Pyöristää canvasin kulmat, visuaalisesti yhdenmukaistaen sen containerin pyöristetyn muotoilun kanssa.
- **Tarkoitus:** Nämä tyylit parantavat canvasin ulkonäköä, tehden siitä erottuvan näkyvällä kehyksellä ja intuitiivisella piirtopinnalla. Ristikohdistin parantaa käyttökokemusta osoittamalla selvästi, että canvasilla voi piirtää.

## 4. Painikkeen tyylittely (button):

- **Mikä se on:** Painikkeen säännöt määrittelevät "Clear Canvas" -painikkeen ulkonäön, jonka käyttäjät klikkaavat nollatakseen piirtoalueen.
- **Tärkeät ominaisuudet:**
  - **padding: 12px 24px;**: Lisää ylimääräistä pehmustetta painiketekstin ympärille, tehden siitä helpommin klikattavan ja mukavamman käyttää.
  - **margin-top: 20px;**: Lisää tilaa painikkeen ja canvasin väliin, parantaen asettelua ja tekemällä käyttöliittymästä vähemmän ahtaan.
  - **border: none;**: Poistaa oletuspainikkeen reunan, antaen sille siistimmän ilmeen.
  - **background-color: #007bff;**: Asettaa painikkeelle elävän sinisen taustavärin, tehden siitä visuaalisesti erottuvan valkoista containeria vasten.
  - **color: white;**: Varmistaa, että painikkeen teksti erottuu hyvin sinistä taustaa vasten, parantaen luettavuutta.
  - **border-radius: 8px;**: Pyöristää painikkeen kulmat, tehden siitä visuaalisesti yhdenmukaisen canvasin ja containerin kanssa.
  - **cursor: pointer;**: Muuttaa kursorin osoittimeksi, kun se on painikkeen päällä, osoittaen, että se on vuorovaikutteinen.
  - **transition: background-color 0.3s ease;**: Lisää sujuvan siirtymävaikutuksen, kun painikkeen taustaväri muuttuu, parantaen hover-efektiä.
- **Tarkoitus:** Nämä tyylit tekevät painikkeesta helppokäyttöisen, visuaalisesti miellyttävän ja yhdenmukaisen yleisen suunnittelun kanssa. Pyöristetyt kulmat ja sujuvat siirtymät parantavat käyttökokemusta, tehden painikkeesta reagoivamman.

## 5. Painikkeen hover-efekti (button:hover):

- **Mikä se on:** lisää visuaalisen efektin, kun käyttäjä vie hiiren painikkeen päälle.
- **Tärkeät ominaisuudet:**
  - **background-color: #0056b3;**: Tummuttaa painikkeen taustaväriä, kun sitä leijutetaan, antaen käyttäjille visuaalista palautetta siitä, että painike on vuorovaikutteinen.
- **Tarkoitus:** Hover-efekti tarjoaa selvän ja sujuvan osoituksen siitä, että painike on klikattavissa, parantaen sovelluksen käytettävyyttä.

# JavaScript Selitys

## 1. DOMContentLoaded-tapahtumakuuntelija (document.addEventListener('DOMContentLoaded', () => {...})):

- **Mikä se on:** Tämä on tapahtumakuuntelija, joka odottaa HTML-dokumentin latautumista ja jäsentelyä kokonaan ennen kuin JavaScript suoritetaan callback-funktion sisällä.
- **Tarkoitus:** Se varmistaa, että skripti vuorovaikuttaa DOM-elementtien (kuten canvasin ja painikkeen) kanssa vasta, kun ne on kokonaan ladattu. Ilman tätä JavaScript saattaa yrittää käyttää elementtejä, joita ei ole vielä ladattu, mikä johtaa virheisiin.
- **Tärkeä yksityiskohta:** Käyttämällä DOMContentLoaded-varmistetaan, että sovellus alkaa toimia oikein heti, kun DOM on valmis, välttäen mahdolliset ongelmat elementtien käytön kanssa.

## 2. DOM-elementtien valinta (const canvas = document.getElementById('drawing-canvas'); const ctx = canvas.getContext('2d');):

- **Mikä se on:** Nämä rivit käyttävät `document.getElementById()`-funktiota valitakseen canvas-elementin ja saadakseen sen 2D-piirtoasiayhteyden käyttämällä `getContext('2d')`.
- **Tarkoitus:** Canvas-elementti on se alue, jolle käyttäjä piirtää, ja `ctx` tarjoaa joukon menetelmiä ja ominaisuuksia, joilla voidaan piirtää muotoja, viivoja ja kuvia canvasiin.
- **Tärkeä yksityiskohta:** 2D-asiayhteys antaa mahdollisuuden piirtää canvasille käyttämällä funktioita, kuten `moveTo()` ja `lineTo()` luodaksesi piirroksia hiiren liikkeiden perusteella.

## 3. Tyhjennyspainikkeen valinta (const clearButton = document.getElementById('clear-button');):

- **Mikä se on:** Tämä rivi valitsee "Clear Canvas" -painikkeen sen ID:n (clear-button) avulla.
- **Tarkoitus:** `clearButton`-painiketta käytetään kuuntelemaan käyttäjän klikkauksia, jolloin käyttäjät voivat tyhjentää canvaksen klikatessaan.
- **Tärkeä yksityiskohta:** Painike on välttämätön canvasin nollaamiseksi, ja JavaScript kuuntelee käyttäjän vuorovaikutuksia laukaistakseen tämän toiminnon.

## 4. Hiiren tapahtumakuuntelijat (esim. canvas.addEventListener('mousedown', startDrawing);):

- **Mikä se on:** Nämä rivit liittävät tapahtumakuuntelijoita canvasille hiireen liittyviä tapahtumia varten (`mousedown`, `mousemove`, `mouseup` ja `mouseout`).
  - **mousedown:** Laukaistaan, kun käyttäjä painaa hiiren painiketta, aloittaen piirtämisen.
  - **mousemove:** Laukaistaan, kun hiiri liikkuu canvasin päällä, mahdollistaen piirtämisen, jos käyttäjä pitää hiiren painiketta alhaalla.
  - **mouseup:** Laukaistaan, kun käyttäjä vapauttaa hiiren painikkeen, pysäyttäen piirtämisen.
  - **mouseout:** Laukaistaan, kun käyttäjä siirtää hiiren canvasin ulkopuolelle, myös pysäyttäen piirtämisen.
- **Tarkoitus:** Nämä tapahtumat mahdollistavat käyttäjän piirtämisen canvasille, kun he klikkaavat, ja piirtämisen lopettamisen, kun he vapauttavat hiiren painikkeen tai liikkuvat canvasin ulkopuolelle.
- **Tärkeä yksityiskohta:** Näiden tapahtumakuuntelijoiden käyttö varmistaa, että piirtotoiminto reagoi käyttäjän vuorovaikutuksiin ja pysähtyy oikein, kun piirtäminen lopetetaan.

## 5. Piirtolippu (let drawing = false;):

- **Mikä se on:** `drawing` on Boolean-lippu, joka seuraa, piirtääkö käyttäjä parhaillaan (true) vai ei (false).
- **Tarkoitus:** Se auttaa hallitsemaan, milloin piirtämisen tulisi tapahtua. Piirtäminen tapahtuu vain, kun `drawing` on true (eli käyttäjä on painanut hiiren painiketta).
- **Tärkeä yksityiskohta:** Tämä lippu varmistaa, että piirtäminen tapahtuu vain, kun hiiren painiketta pidetään alhaalla, estäen ei-toivottujen viivojen piirtämisen, kun hiiri liikkuu ilman painiketta.

## 6. Piirtämisen aloitusfunktio (function startDrawing(e) {...}):

- **Mikä se on:** Tämä funktio laukaistaan, kun käyttäjä painaa hiiren painiketta canvasilla (`mousedown`-tapahtuma).
- **Vaiheet:**
  - Asettaa `drawing` arvoksi true, osoittaen, että käyttäjä piirtää aktiivisesti.
  - Kutsuu `ctx.beginPath()` aloittaakseen uuden piirto-polun.
  - Siirtää piirto-kohdistimen nykyiseen hiiren sijaintiin käyttämällä `ctx.moveTo(e.offsetX, e.offsetY)` (tämä estää viivojen piirtämisen edellisistä pisteistä).
- **Tarkoitus:** Tämä funktio käynnistää piirtoprosessin aloittamalla uuden polun canvasilla ja seuraamalla piirron aloituskohtaa.
- **Tärkeä yksityiskohta:** `moveTo()`-menetelmä asettaa piirtämisen aloituskohdan luomatta alkuviivaa.

## 7. Piirtämisfunktio (function draw(e) {...}):

- **Mikä se on:** Tämä funktio laukaistaan aina, kun hiiri liikkuu canvasilla (`mousemove`-tapahtuma).
- **Vaiheet:**
  - Jos `drawing` on true (eli hiiren painiketta painetaan), funktio piirtää viivan edellisestä pisteestä nykyiseen hiiren sijaintiin käyttäen `ctx.lineTo(e.offsetX, e.offsetY)` ja `ctx.stroke()`.
- **Tarkoitus:** Tämä funktio piirtää jatkuvasti viivoja, kun käyttäjä vetää hiirtä canvasin yli, luoden halutun piirroksen.
- **Tärkeä yksityiskohta:** `lineTo()`-menetelmä piirtää viivat uuteen hiiren sijaintiin, ja `stroke()` renderöi viivan. Piirtäminen tapahtuu vain, kun `drawing` on true, varmistaen, että käyttäjän täytyy pitää hiiren painiketta alhaalla piirtääkseen.

## 8. Piirtämisen lopetusfunktio (function stopDrawing() {...}):

- **Mikä se on:** Tämä funktio laukaistaan, kun käyttäjä vapauttaa hiiren painikkeen (`mouseup`-tapahtuma) tai siirtää hiiren canvasin ulkopuolelle (`mouseout`-tapahtuma).
- **Vaiheet:**
  - Asettaa `drawing` arvoksi false, osoittaen, että piirtoprosessi tulisi lopettaa.
  - Kutsuu `ctx.closePath()` päättääkseen nykyisen piirto-polun.
- **Tarkoitus:** Tämä funktio lopettaa piirtoprosessin ja sulkee polun, varmistaen, että piirto ei jatku sen jälkeen, kun hiiren painike on vapautettu.
- **Tärkeä yksityiskohta:** `closePath()`-menetelmä estää viivojen piirtämisen vahingossa, kun käyttäjä aloittaa uuden piirron.

## 9. Canvasin tyhjennysfunktio (function clearCanvas() {...}):

- **Mikä se on:** Tämä funktio laukaistaan, kun käyttäjä klikkaa "Clear Canvas" -painiketta.
- **Vaiheet:**
  - Kutsuu `ctx.clearRect(0, 0, canvas.width, canvas.height)` tyhjentääkseen koko canvasin ja poistaakseen kaikki piirrokset.
- **Tarkoitus:** Se nollaa canvasin antaen käyttäjälle puhtaan pinnan uuden piirroksen aloittamiseksi.
- **Tärkeä yksityiskohta:** `clearRect()` tyhjentää koko canvasin määrittämällä koordinaatit (0, 0) ja leveys/korkeus, käytännössä pyyhkimällä kaiken pois.
