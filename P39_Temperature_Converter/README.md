# Nettisivu: https://keudaope.github.io/JSProjekteja/P39_Temperature_Converter

# Johdanto

**Lämpötilamuunnin** on hyödyllinen sovellus, jonka avulla käyttäjät voivat muuntaa lämpötiloja Celsius-, Fahrenheit- ja Kelvin-asteikon välillä. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla oppien käsittelemään käyttäjän syötteitä, suorittamaan matemaattisia muunnoksia ja päivittämään DOM:ia dynaamisesti. **Tarkoitus**: Käyttäjät voivat syöttää lämpötilan arvon ja valita muunnosyksiköt nähdäksesi muunnetun tuloksen.

# HTML selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>)

- **Mikä se on**: <code><</code>!DOCTYPE html> -ilmoitus määrittää asiakirjan HTML5-muotoiseksi asiakirjaksi.
- **Tarkoitus**: Se varmistaa, että selaimet renderöivät sivun standardien mukaisessa tilassa, välttäen virheitä ja epäjohdonmukaisuuksia asettelussa.

## 2. HTML Tag (<code><</code>html lang="en">)

- **Mikä se on**: <code><</code>html>-tagi on HTML-asiakirjan juurielementti. lang="en" -attribuutti määrittää, että sisältö on englanniksi.
- **Tarkoitus**: Lang-attribuutti on tärkeä saavutettavuuden ja hakukoneiden kannalta, koska se auttaa ymmärtämään sisällön ensisijaisen kielen.
- **Tärkeä yksityiskohta**: Kielen määrittäminen parantaa SEO.a ja saavutettavuustyökalujen, kuten ruudunlukuohjelmien, toimintaa.

## 3. Head Tag (<code><</code>head>)

- **Mikä se on**: <code><</code>head>-osio sisältää metatietoja ja viittauksia ulkoisiin resursseihin, kuten CSS- ja JavaScript-tiedostoihin.
- **Tarkoitus**: <code><</code>head> tarjoaa oleellista tietoa selaimelle sivun oikean renderöinnin ja tarvittavien resurssien lataamisen kannalta.
- **Tärkeät yksityiskohdat**:
  - **Meta Charset (<code><</code>meta charset="UTF-8">)**: Määrittää merkistökoodauksen UTF-8:ksi, mikä tukee laajaa merkkivalikoimaa.
  - **Viewport Meta Tag (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">)**: Varmistaa responsiivisen suunnittelun mukauttamalla asettelua eri laitteille ja näyttöjen kokoihin.
  - **Title Tag (<code><</code>title>Temperature Converter<code><</code>title>)**: Asettaa verkkosivun otsikon, joka näkyy selainvälilehdessä ja on tärkeä hakukoneoptimoinnille.
  - **Link to CSS (<code><</code>link rel="stylesheet" href="styles.css">)**: Linkittää ulkoiseen CSS-tiedostoon, joka muotoilee HTML-elementit.

## 4. Body Tag (<code><</code>body>)

- **Mikä se on**: <code><</code>body>-tagi sisältää verkkosivun näkyvän sisällön.
- **Tarkoitus**: Kaikki käyttäjän näkemät elementit, kuten otsikot, syötekentät, painikkeet ja muuntotulos, sijoitetaan body-osioon.
- **Tärkeä yksityiskohta**: Body on tyylitelty ulkoisella CSS:llä ja päivitetään dynaamisesti JavaScriptin avulla paremman käyttökokemuksen saavuttamiseksi.

## 5. Main Container Div (<code><</code>div class="container">)

- **Mikä se on**: <code><</code>div>-elementti, jossa on luokka "container", ympäröi sovelluksen pääsisällön.
- **Tarkoitus**: Tämä div tarjoaa jäsennellyn ja keskeisen asettelun kaikille muille elementeille (otsikko, syötteet, painikkeet, tulos), ja se on tyylitelty paremman esityksen vuoksi.
- **Tärkeä yksityiskohta**: Luokka "container" käyttää CSS-tiedostosta mukautettuja tyylejä, kuten sisennystä, taustaväriä ja keskittymistä.

## 6. Heading (<code><</code>h1>Temperature Converter<code><</code>h1>)

- **Mikä se on**: <code><</code>h1>-elementti edustaa sivun pääotsikkoa.
- **Tarkoitus**: Se esittelee sovelluksen otsikon ja kertoo käyttäjille ja hakukoneille sivun päätoiminnon.
- **Tärkeä yksityiskohta**: Otsikko on tyylitelty suuremmalla fonttikoolla, jotta se on selvästi näkyvillä sivulla.

## 7. Temperature Input (<code><</code>input type="number" id="temperature-input" placeholder="Enter temperature" step="0.1">)

- **Mikä se on**: <code><</code>input>-elementti, jonka tyyppi on "number", vastaanottaa käyttäjän syötteen (lämpötilan arvon).
- **Tarkoitus**: Sen avulla käyttäjä voi syöttää lämpötilan muuntamista varten.
- **Tärkeät yksityiskohdat**:
  - id="temperature-input" käytetään viittaamaan tähän syötteeseen JavaScriptissä.
  - placeholder="Enter temperature" antaa vihjeen käyttäjälle.
  - step="0.1" varmistaa, että desimaalilukuja voidaan syöttää.

## 8. Dropdown for From Unit (<code><</code>select id="from-unit">)

- **Mikä se on**: <code><</code>select>-elementti, jossa on useita <code><</code>option>-elementtejä, sallii käyttäjän valita, mistä lämpötilayksiköstä halutaan muuntaa.
- **Tarkoitus**: Tarjoaa käyttäjälle vaihtoehdot valita lähtöyksikkö (Celsius, Fahrenheit tai Kelvin).
- **Tärkeä yksityiskohta**: id="from-unit" mahdollistaa tämän alasvetovalikon käytön JavaScriptin muuntologiikassa.

## 9. Dropdown for To Unit (<code><</code>select id="to-unit">)

- **Mikä se on**: Toinen <code><</code>select>-elementti, joka sallii käyttäjän valita yksikön, johon lämpötila halutaan muuntaa.
- **Tarkoitus**: Tarjoaa vaihtoehdot valita kohdeyksikkö muuntamista varten.
- **Tärkeä yksityiskohta**: id="to-unit" mahdollistaa tämän valikon käytön JavaScriptissä yksikköjen välillä muuntamiseen.

## 10. Convert Button (<code><</code>button id="convert-button">Convert<code><</code>button>)

- **Mikä se on**: Klikattava <code><</code>button>-elementti, joka käynnistää lämpötilan muunnon.
- **Tarkoitus**: Kun sitä klikataan, tämä painike aktivoi JavaScript-funktion suorittamaan lämpötilan muuntamisen.
- **Tärkeä yksityiskohta**: id="convert-button" mahdollistaa painikkeeseen viittaamisen JavaScriptissä.

## 11. Result Display Div (<code><</code>div class="result" id="result"><code><</code>div>)

- **Mikä se on**: <code><</code>div>-elementti, jossa on "result"-luokka, johon muuntotulos näytetään.
- **Tarkoitus**: Dynaamisesti näyttää muuntotuloksen (lämpötila kohdeyksikössä) painikkeen painamisen jälkeen.
- **Tärkeä yksityiskohta**: id="result" mahdollistaa tämän divin sisällön päivittämisen JavaScriptillä.

## 12. Script Tag (<code><</code>script src="app.js"><code><</code>script>)

- **Mikä se on**: <code><</code>script>-tagi linkittää ulkoiseen JavaScript-tiedostoon, app.js.
- **Tarkoitus**: Lataa JavaScript-tiedoston, joka käsittelee lämpötilan muuntologiikkaa ja vuorovaikutuksia.
- **Tärkeä yksityiskohta**: Ulkoinen JavaScript on suositeltavaa paremman ylläpidettävyyden ja vastuiden erottelun vuoksi.

# CSS selitys

## 1. Global Body Styling (body)

- **Mikä se on**: Body-sääntö tyylittelee pääsäiliön, joka sisältää kaikki näkyvät elementit verkkosivulla.
- **Tärkeät ominaisuudet**:
  - **font-family: Arial, sans-serif;**: Asettaa fontiksi Arialin, varfonttina sans-serif; Tämä varmistaa, että teksti näkyy siistinä ja helposti luettavana eri laitteilla.
  - **background-color: #f0f0f0;**: Lisää vaaleanharmaan taustavärin koko sivulle, antaen sovellukselle hillityn ja neutraalin ulkonäön.
  - **display: flex;**: Käyttää Flexboxia tekemään asettelusta responsiivisen ja sijoittamaan pääsisällön (lämpötilamuunnin) kehon sisälle.
  - **justify-content: center;**: Keskittää säiliön vaakasuunnassa keskelle sivua.
  - **align-items: center;**: Keskittää säiliön pystysuunnassa koko sivun korkeudella.
  - **height: 100vh;**: Varmistaa, että body vie koko näkymäkorkeuden, mahdollistaen sisällön pystysuuntaisen keskittämisen.
  - **margin: 0;**: Poistaa oletusreunukset rungosta, jotta ei tule odottamattomia välejä.
- **Tarkoitus**: Nämä ominaisuudet varmistavat, että koko sivu keskitetään sekä pystysuunnassa että vaakasuunnassa, luoden siistin ja ammattimaisen ulkoasun.

## 2. Container Styling (.container)

- **Mikä se on**: .container-luokka tyylittelee pääsäiliötä, joka pitää sisällään kaikki syötekentät, painikkeet ja tulokset.
- **Tärkeät ominaisuudet**:
  - **background: white;**: Antaa säiliölle valkoisen taustan, mikä erottaa sen vaaleanharmaasta sivutaustasta.
  - **padding: 20px;**: Lisää tilaa sisällön ympärille säiliössä, varmistaen, ettei teksti ja elementit kosketa reunoja.
  - **border-radius: 8px;**: Pyöristää säiliön kulmia pehmentäen sen ulkonäköä, tehden siitä modernimman ja visuaalisesti houkuttelevamman.
  - **box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);**: Lisää hienovaraisen varjoefektin säiliön ympärille, luoden syvyyden tunteen ja antaen sille korttimaisen ulkoasun.
  - **text-align: center;**: Keskittää kaiken tekstin ja elementit säiliön sisällä, tehden syötteistä ja painikkeista helpommin käytettäviä.
  - **width: 300px;**: Kiinnittää säiliön leveyden 300px, varmistaen, että asettelu pysyy yhtenäisenä ja kompaktina eri näyttökoilla.
- **Tarkoitus**: Nämä tyylit parantavat säiliön visuaalista houkuttelevuutta, tehden sovelluksesta näyttävän ammattimaiselta kortilta. Pehmennys, varjot ja pyöristetyt kulmat luovat siistin ja modernin muotoilun.

## 3. Heading Styling (h1)

- **Mikä se on**: H1-sääntö tyylittelee sovelluksen pääotsikkoa, joka on "Temperature Converter".
- **Tärkeä ominaisuus**:
  - **margin-bottom: 20px;**: Lisää tilaa otsikon alapuolelle erottaakseen sen syötekentistä, luoden siistimmän ja järjestelmällisemmän ulkoasun.
- **Tarkoitus**: Tämä ominaisuus varmistaa, että otsikon ja syötekenttien välillä on riittävästi tilaa, parantaen luettavuutta ja asettelun rakennetta.

## 4. Input Field Styling (input[type="number"])

- **Mikä se on**: Input[type="number"] -sääntö tyylittelee syötekenttää, johon käyttäjät syöttävät muunnettavan lämpötilan.
- **Tärkeät ominaisuudet**:
  - **padding: 10px;**: Lisää tilaa syötekentän sisälle, tehden tekstistä helpommin luettavaa ja kentästä enemmän klikkailtavan.
  - **margin-bottom: 10px;**: Lisää tilaa syötekentän ja alla olevien elementtien (alasvetovalikko ja painike) välille.
  - **width: calc(100% - 22px);**: Asettaa syötekentän leveyden täyttämään koko säiliön, huomioiden paddingin ja reunat.
  - **border: 1px solid #ccc;**: Lisää vaaleanharmaan reunan syötekentän ympärille, antaen sille siistin ja hienovaraisen kehyksen.
  - **border-radius: 4px;**: Pyöristää hieman syötekentän kulmia, mikä sopii säiliön tyyliin ja lisää visuaalista yhtenäisyyttä.
  - **text-align: center;**: Keskittää tekstin syötekentän sisällä, tehden käyttäjän helpommaksi syöttää ja nähdä lämpötilan.
- **Tarkoitus**: Nämä ominaisuudet tekevät syötekentästä käyttäjäystävällisen varmistamalla riittävän tilan, leveyden ja selkeän, ammattimaisen ulkoasun.

## 5. Dropdown (Select) Styling (select)

- **Mikä se on**: Select-sääntö tyylittelee alasvetovalikkoja, joissa käyttäjät valitsevat lämpötilayksiköt (mistä ja mihin).
- **Tärkeät ominaisuudet**:
  - **padding: 10px;**: Lisää tilaa alasvetovalikon sisälle, tehden vaihtoehdoista helpommin luettavia ja varmistamalla, että valikko on helppo klikata.
  - **margin-bottom: 10px;**: Lisää tilaa alasvetovalikon alle, erottaen sen seuraavasta elementistä (alasvetovalikko tai painike).
  - **width: 100%;**: Varmistaa, että alasvetovalikko täyttää säiliön leveyden, pitäen asettelun tasapainossa ja yhtenäisenä.
  - **border: 1px solid #ccc;**: Lisää vaaleanharmaan reunan, antaen alasvetovalikolle hienovaraisen mutta määritellyn reunan.
  - **border-radius: 4px;**: Pyöristää hieman alasvetovalikon kulmia, pitäen tyylin yhtenäisenä muiden elementtien (syötekentät ja säiliö) kanssa.
  - **text-align: center;**: Keskittää valitun vaihtoehdon alasvetovalikossa paremman luettavuuden takaamiseksi.
- **Tarkoitus**: Nämä tyylit varmistavat, että alasvetovalikot ovat helppokäyttöisiä ja visuaalisesti yhtenäisiä syötekenttien ja säiliön kanssa, säilyttäen siistin ja yhtenäisen ulkoasun.

## 6. Button Styling (button)

- **Mikä se on**: Button-sääntö tyylittelee "Convert"-painiketta.
- **Tärkeät ominaisuudet**:
  - **padding: 10px 20px;**: Lisää tilaa painikkeen sisälle, tehden siitä suuremman, helpommin klikattavan ja mukavan käyttää.
  - **border: none;**: Poistaa oletusreunan, antaen painikkeelle modernin ja tasaisen suunnittelun.
  - **background-color: #007bff;**: Asettaa painikkeen taustaväriksi kirkkaan sinisen, tehden siitä visuaalisesti erottuvan ja interaktiivisen elementin.
  - **color: white;**: Tekee painikkeen tekstistä valkoisen, mikä luo terävän kontrastin sinistä taustaa vasten ja varmistaa hyvän luettavuuden.
  - **border-radius: 4px;**: Pyöristää hieman painikkeen kulmia, pitäen suunnittelun yhtenäisenä muiden elementtien (syötekenttien, alasvetovalikoiden) kanssa.
  - **cursor: pointer;**: Muuttaa kursorin osoittimeksi, kun painikkeen päällä liikutaan, mikä ilmaisee, että se on klikattavissa.
- **Tarkoitus**: Nämä tyylit tekevät painikkeesta houkuttelevan, toimivan ja interaktiivisen, rohkaisten käyttäjää klikkaamaan sitä.

## 7. Button Hover Effect (button:hover)

- **Mikä se on**: Button sääntö määrittelee painikkeen ulkonäön, kun käyttäjä vie hiiren sen päälle.
- **Tärkeät ominaisuudet**:
  - **background-color: #0056b3;**: Muuttaa taustavärin tummemmaksi siniseksi, kun hiiren kursori viedään painikkeen päälle, antaen käyttäjälle visuaalista palautetta.
- **Tarkoitus**: Tämä hover-efekti parantaa käyttökokemusta tekemällä sovelluksesta interaktiivisemman ja antamalla välitöntä visuaalista palautetta, kun käyttäjä käyttää painiketta.

## 8. Result Styling (.result)

- **Mikä se on**: .result-luokka tyylittelee div-elementin, johon muunnettu lämpötila näytetään.
- **Tärkeät ominaisuudet**:
  - **margin-top: 20px;**: Lisää tilaa tuloksen yläpuolelle, erottaen sen painikkeesta ja varmistaen siistin asettelun.
  - **font-size: 1.2em;**: Kasvattaa fonttikokoa, tehden tuloksesta erottuvamman ja helpommin luettavan.
- **Tarkoitus**: Nämä tyylit varmistavat, että tulos näkyy selkeästi ja erottuu muusta sisällöstä, kiinnittäen huomion muuntotulokseen.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...});)

- **Mikä se on**: Tämä on tapahtumankuuntelija, joka odottaa koko HTML-dokumentin latautumista ennen kuin se suorittaa callback-funktiossa olevaa koodia.
- **Tarkoitus**: Se varmistaa, että JavaScript käsittelee DOM-elementtejä vasta, kun sivu on täysin ladattu. Ilman tätä, skripti voisi yrittää käyttää elementtejä, joita ei ole vielä saatavilla.
- **Tärkeä yksityiskohta**: Tämä estää ongelmat, joissa JavaScript yrittää muokata elementtejä, joita ei ole vielä renderöity sivulla.

## 2. Selecting DOM Elements

- **Mikä se on**: Seuraavat rivit valitsevat tarvittavat DOM-elementit niiden id:n avulla
  - **temperatureInput**: Valitsee syötekentän, johon käyttäjä syöttää muunnettavan lämpötilan.
  - **fromUnit**: Valitsee alasvetovalikon, jossa käyttäjä valitsee alkuperäisen lämpötilayksikön.
  - **toUnit**: Valitsee alasvetovalikon, jossa käyttäjä valitsee muunnettavan yksikön.
  - **convertButton**: Valitsee painikkeen, joka käynnistää muuntoprosessin.
  - **resultDiv**: Valitsee div-elementin, johon muunnettu tulos näytetään.
- **Tarkoitus**: Nämä muuttujat pitävät viittauksia tärkeisiin DOM-elementteihin, joita käytetään sovelluksen aikana käyttäjän syötteen käsittelyyn ja tulosten näyttämiseen.
- **Tärkeä yksityiskohta**: Näiden elementtien valitseminen mahdollistaa sen, että JavaScript päivittää DOM:in dynaamisesti, vastaten käyttäjän syötteisiin ja toimintoihin.

## 3. Adding Event Listener to the Button (convertButton.addEventListener('click', convertTemperature);)

- **Mikä se on**: Tämä rivi lisää tapahtumankuuntelijan "Convert"-painikkeeseen. Kun painiketta klikataan, se käynnistää **convertTemperature**-funktion.
- **Tarkoitus**: Se varmistaa, että kun käyttäjä klikkaa painiketta, muunnosprosessi alkaa, jolloin sovellus suorittaa muunnoksen ja päivittää tuloksen sivulle.
- **Tärkeä yksityiskohta**: Click-tapahtumankuuntelija tekee painikkeesta toiminnallisen ja interaktiivisen, yhdistäen käyttöliittymän JavaScript-logiikkaan.

## 4. Convert Temperature Function (function convertTemperature() {...})

- **Mikä se on**: Tämä funktio käsittelee lämpötilan muuntamislogiikkaa käyttäjän syötteen perusteella.
- **Vaiheet**:
  - **Fetching Input Values**:
    - Lämpötila haetaan **temperatureInput**-kentästä, ja yksiköt haetaan **fromUnit**- ja **toUnit**-alasvetovalikoista.
    - **parseFloat()** varmistaa, että lämpötilasyöte käsitellään numerona, mahdollistaen desimaalilukujen käytön.
  - **Validating Input**:
    - Funktio tarkistaa, onko syöte kelvollinen numero käyttämällä **isNaN(temperature)**. Jos syöte ei ole kelvollinen numero, funktio näyttää virheilmoituksen ("Please enter a valid temperature.") ja poistuu aikaisin.
  - **Conversion Logic**:
    - Funktio tarkistaa, mistä yksiköstä käyttäjä muuntaa ja mihin, ja suorittaa asianmukaisen laskelman:
      - Jos käyttäjä muuntaa Celsius-asteista Fahrenheitiksi, käytetään kaavaa: (temperature \* 9/5) + 32.
      - Jos muunto tapahtuu Celsius-asteista Kelviniin, lisätään syötteeseen 273,15.
      - Fahrenheitista Celsiukseen muunnos vähentää syötteestä 32 ja kerrotaan 5/9:llä.
      - Fahrenheitista Kelviniin muunto tehdään ensin muuntamalla Celsius-asteiksi ja lisäämällä sitten 273,15.
      - Kelvinistä Celsiukseen vähennetään 273,15.
      - Kelvinistä Fahrenheitiksi vähennetään 273,15, kerrotaan 9/5 ja lisätään 32.
      - Jos käyttäjä valitsee saman yksikön molempiin "from" ja "to" -kenttiin, funktio palauttaa syötteen tuloksena ilman muunnosta.
- **Tarkoitus**: Tämä funktio käsittelee käyttäjän syötteen, muuntaa lämpötilan yksiköstä toiseen ja näyttää sitten tuloksen.
- **Tärkeä yksityiskohta**: Funktio sisältää kaiken muunnoslogiikan, varmistaen, että oikea kaava sovelletaan valittujen yksiköiden perusteella.

## 5. Displaying the Result (resultDiv.textContent = ...)

- **Mikä se on**: Tämä rivi päivittää **resultDiv**-elementin muunnetulla lämpötilalla, näyttäen sen sivulla muodossa "Converted Temperature: X".
- **Tarkoitus**: Se päivittää DOM:in dynaamisesti näyttämään tuloksen käyttäjälle, tehden sovelluksesta interaktiivisen ja antaen välitöntä palautetta.
- **Tärkeä yksityiskohta**: Tulos pyöristetään kahteen desimaaliin käyttämällä **.toFixed(2)**, varmistaen, että ulostulo on luettavaa ja ammattimaista.

## 6. Handling Invalid Input (if (isNaN(temperature)) {...})

- **Mikä se on**: Tämä koodilohko tarkistaa, onko syöte kelvollinen numero käyttämällä **isNaN()**-funktiota. Jos käyttäjä syöttää virheellisen arvon (esim. tekstin tai tyhjän syötteen), se näyttää virheilmoituksen.
- **Tarkoitus**: Se varmistaa, että sovellus käsittelee virheellisen syötteen sulavasti, estäen käyttäjää suorittamasta muunnoksia ei-numeerisilla arvoilla.
- **Tärkeä yksityiskohta**: Aikainen poistuminen (**return;**) estää funktion muunnoslogiikan ajamisen, kun virheellinen syöte havaitaan.
