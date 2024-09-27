# Nettisivu: https://keudaope.github.io/JSProjekteja/P27_Weather_Forecast_App

# Johdanto

Säätiedote-sovellus on käytännöllinen sovellus, joka näyttää 5 päivän sääennusteen käyttämällä API:a. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla kun he oppivat käsittelemään API-pyyntöjä, käsittelemään JSON-dataa ja päivittämään DOM:in dynaamisesti. Käyttäjät voivat syöttää kaupungin nimen ja nähdä sääennusteen seuraavalle viidelle päivälle.

# HTML selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>)

- **Mikä se on**: <code><</code>!DOCTYPE html> -määritys osoittaa, että dokumentti on kirjoitettu HTML5-kielellä.
- **Tarkoitus**: Se varmistaa, että verkkosivu tulkitaan modernien HTML5-standardien mukaisesti kaikissa selaimissa, estäen vanhojen renderointitilojen aiheuttamat ongelmat.
- **Tärkeä yksityiskohta**: DOCTYPE-määritys tulee aina sisällyttää varmistamaan johdonmukainen renderointi eri selaimissa ja välttämään vanhat renderointitilat.

## 2. HTML Tag (<code><</code>html lang="en">)

- **Mikä se on**: <code><</code>html-tagi on juurielementti, joka käärii kaikki muut HTML-elementit sivulla. Lang="en" -attribuutti määrittää dokumentin kieleksi englannin.
- **Tarkoitus**: Lang-attribuutti on tärkeä saavutettavuustyökaluille ja hakukoneille, sillä se ilmoittaa dokumentin pääkielen.
- **Tärkeä yksityiskohta**: Kielen määrittäminen parantaa hakukoneoptimointia (SEO) ja saavutettavuutta, helpottaen sekä hakukoneita että avustavia teknologioita käsittelemään sisältöä.

## 3. Head Tag (<code><</code>head>)

- **Mikä se on**: <code><</code>head>-osio sisältää metatietoja verkkosivusta, kuten merkistökoodauksen, viewport-asetukset ja linkit ulkoisiin resursseihin, kuten tyylitiedostoihin tai JavaScript-tiedostoihin.
- **Tarkoitus**: <code><</code>head>-tunniste mahdollistaa selaimen ladata tarvittavat tiedot sivun oikein renderoimiseksi, kuten CSS-tyylit ja metatiedot hakukoneille.
- **Tärkeät yksityiskohdat**:
  - **Meta Charset (<code><</code>meta charset="UTF-8">)**: Määrittelee merkistökoodauksen UTF-8:ksi, tukien laajaa valikoimaa merkkejä ja symboleja, varmistaen tekstin oikean esityksen eri laitteilla ja alustoilla.
  - **Viewport Meta Tag (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">)**: Varmistaa, että verkkosivu on responsiivinen mukauttamalla sisällön erikokoisiin näyttöihin, erityisesti mobiililaitteilla.
  - **Title Tag (<code><</code>title>Weather Forecast App</code></code>)**: Määrittelee verkkosivun otsikon, joka näytetään selaimen välilehdellä ja jota hakukoneet käyttävät indeksointiin.

## 4. Body Tag (<code><</code>body>)

- **Mikä se on**: <code><</code>body>-tunniste sisältää kaiken verkkosivun näkyvän sisällön, kuten otsikon, syötekentän, painikkeen ja ennusteen näytön.
- **Tarkoitus**: <code><</code>body>-osio sisältää kaiken käyttäjälle näkyvän sisällön, jota tyylitellään CSS:n avulla ja tehdään interaktiiviseksi JavaScriptillä. Tämä on pääalue, jossa käyttäjä on vuorovaikutuksessa sovelluksen kanssa.
- **Tärkeä yksityiskohta**: Kaikki verkkosivulla näkyvä sisältö on sijoitettu <code><</code>body>-tunnisteen sisään, tehden siitä tärkeimmän osion sisällön näytölle ja käyttäjän vuorovaikutukselle.

## 5. Main Container Div (<code><</code>div class="container">)

- **Mikä se on**: <code><</code>div>-elementti, jolla on luokka container, käärii sovelluksen pääsisällön, mukaan lukien otsikon, syötekentän, painikkeen ja ennusteosion.
- **Tarkoitus**: Kontti ryhmittelee yhteen liittyvät elementit ja tarjoaa sovellukselle rakenteellisen asettelun. Se auttaa tyylittelyssä keskittämällä CSS-säännöt, kuten pehmustuksen, taustavärin ja varjostuksen, antaen sovellukselle "korttimaisen" ulkonäön.
- **Tärkeä yksityiskohta**: Kontti-div on kriittinen tarjoamaan rakenteellisen, responsiivisen asettelun. Se varmistaa, että sisältö on keskitetty ja visuaalisesti erotettu taustasta käyttämällä CSS-ominaisuuksia, kuten reunoja, varjostuksia ja pehmustuksia.

## 6. Heading Tag (<code><</code>h1>Weather Forecast App</code></code>)

- **Mikä se on**: <code><</code>h1>-tunniste näyttää sivun pääotsikon: "Weather Forecast App".
- **Tarkoitus**: Otsikko toimii sovelluksen otsikkona ja antaa välittömän vihjeen sen toiminnallisuudesta. <code><</code>h1>-tunniste on myös tärkeä hakukoneoptimoinnissa, koska se korostaa sivun tärkeimmän sisällön.
- **Tärkeä yksityiskohta**: <code><</code>h1>-tunnistetta käytetään yleensä vain kerran sivulla edustamaan pääotsikkoa. Se on tyylitelty erottuvaksi, varmistaen, että se on ensimmäinen asia, jonka käyttäjät huomaavat.

## 7. Input Field (<code><</code>input type="text" id="city" placeholder="Enter city name" required>)

- **Mikä se on**: Tekstityyppinen <code><</code>input>-elementti, joka antaa käyttäjän syöttää kaupungin nimen, jolle he haluavat saada sääennusteen.
- **Tarkoitus**: Syötekenttä on paikka, johon käyttäjä syöttää kaupungin nimen, jolle he haluavat hakea sääennusteen.
- **Tärkeä yksityiskohta**: ID-attribuutti on tärkeä, jotta tämä elementti voidaan kohdistaa JavaScriptissä, ja required-attribuutti varmistaa käyttäjän syötteen validoinnin.

## 8. Button Element (<code><</code>button id="get-forecast">Get Forecast</code></code>)

- **Mikä se on**: <code><</code>button>-elementti luo klikattavan painikkeen, joka käynnistää sääennusteen hakemisen, kun käyttäjä painaa sitä.
- **Tarkoitus**: Tämä painike käynnistää prosessin sääennusteen hakemiseksi. Kun sitä klikataan, se kutsuu JavaScript-funktion, joka hakee ja näyttää ennustedatan.
- **Tärkeä yksityiskohta**: Painike on sovelluksen pääasiallinen interaktiivinen elementti, joka yhdistää käyttäjän syötteen sovelluksen keskeiseen toiminnallisuuteen (säädatan haku ja näyttö).

## 9. Forecast Display Div (<code><</code>div class="forecast" id="forecast">)

- **Mikä se on**: <code><</code>div>-elementti, jossa on luokka forecast, jossa sääennuste näytetään.
- **Tarkoitus**: Tämä div toimii paikkamerkkinä ennustetuloksille. API-kutsun jälkeen ennustetiedot (kuten lämpötila ja sääolosuhteet) lisätään tähän diviin ja näytetään käyttäjälle.
- **Tärkeä yksityiskohta**: Ennuste-div on aluksi tyhjä ja täytetään datalla dynaamisesti JavaScript-funktion avulla. Se on tärkeä rooli käyttäjälle annettavan palautteen näyttämisessä.

## 10. Script Tag (<code><</code>script src="app.js"></code></code>)

- **Mikä se on**: <code><</code>script>-tunniste linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää logiikan sääennusteen hakemiseksi ja näyttämiseksi.
- **Tarkoitus**: JavaScriptin sisällyttäminen ulkoiseen tiedostoon pitää HTML:n puhtaana ja modulaarisena. Skripti vastaa kaikesta interaktiivisuudesta, kuten käyttäjän syötteisiin vastaamisesta, API-pyynnöistä ja DOMin päivittämisestä ennustedatalla.
- **Tärkeä yksityiskohta**: Linkittämällä JavaScript ulkoisesti HTML pysyy siistinä ja keskittyy rakenteeseen. Tämä noudattaa parhaita käytäntöjä vastuiden erottamiseksi web-kehityksessä.

# CSS selitys

## 1. Global Reset ( \* )

- **Mikä se on**: <code><</code>\*-valitsin on universaali valitsin, joka kohdistaa kaikki sivun elementit.
- **Tarkoitus**: Se nollaa oletusmarginaalit ja -pehmustukset kaikilta elementeiltä, varmistaen, että jokainen elementti alkaa johdonmukaisella välimatkalla. **Box-sizing: border-box;** -sääntö varmistaa, että pehmusteet ja reunukset sisältyvät elementin kokonaisleveyteen ja -korkeuteen, yksinkertaistaen asettelulaskelmia.
- **Tärkeä yksityiskohta**: Tämä nollaus varmistaa johdonmukaisen käyttäytymisen eri selaimissa, tarjoten puhtaan lähtökohdan tyylittelylle.

## 2. Body Styling (body)

- **Mikä se on**: Body-sääntö tyylittelee koko verkkosivun määritellen taustan, typografian ja asettelun.
- **Tarkoitus**:
  - **Font Family (font-family: 'Arial', sans-serif;)**: Käyttää selkeää sans-serif-kirjasinta luettavuuden ja modernin ulkonäön vuoksi.
  - **Background (background: linear-gradient(135deg, #74ebd5, #acb6e5;)**: Lisää diagonaalisen gradientin taustalle, joka siirtyy sulavasti teal-sävyisestä vaaleansiniseen, luoden raikkaan ja visuaalisesti miellyttävän ilmeen.
  - **Layout (display: flex; justify-content: center; align-items: center; height: 100vh;)**: Käyttää Flexboxia keskittääkseen sisällön sekä vaakasuunnassa että pystysuunnassa. Body-elementin korkeus on asetettu 100vh:ksi (100 % näkymäportin korkeudesta), varmistaen, että kontti on pystysuunnassa keskitetty.
  - **Margin (margin: 0;)**: Poistaa oletusmarginaalin kehon ympäriltä, varmistaen, että asettelu ulottuu koko näkymäporttiin.
- **Tärkeä yksityiskohta**: Flexboxin ja gradienttitaustan yhdistelmä varmistaa, että asettelu pysyy keskitettynä ja visuaalisesti tasapainoisena riippumatta näytön koosta.

## 3. Container Styling (.container)

- **Mikä se on**: .container-luokka tyylittelee pääsäiliön, joka pitää sisällään lomake-elementit (otsikko, syötekentät, valintaruudut ja painikkeen).
- **Tarkoitus**:
  - **Background Color (background-color: #fff;)**: Asettaa puhtaan valkoisen taustan säiliölle, luoden korttimaisen ulkonäön, joka kontrastoi mukavasti gradienttitaustan kanssa.
  - **Padding (padding: 40px 30px;)**: Lisää sisätilaa sisällön ympärille varmistaen, että teksti ja elementit eivät kosketa säiliön reunoja.
  - **Border Radius (border-radius: 12px;)**: Pyöristää säiliön kulmat, antaen sille modernin ja ystävällisen ulkonäön.
  - **Box Shadow (box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);)**: Lisää hienovaraisen varjon säiliön alle, antaen sille syvyyttä ja tehden siitä näyttämään hieman kohotetulta sivulta.
  - **Text Alignment (text-align: center;)**: Keskittää säiliön sisäisen tekstin, tehden asettelusta selkeämmän ja helpommin luettavan.
  - **Max Width (max-width: 500px;)**: Rajoittaa säiliön leveyden varmistaen, että se on helppolukuinen eikä veny liian leveäksi suuremmilla näytöillä.
  - **Transition (transition: transform 0.3s ease;)**: Sallii pehmeän zoomausvaikutuksen, kun säiliöön kohdistetaan hover-efekti, luoden hienovaraisen interaktiivisen tunteen.
- **Tärkeä yksityiskohta**: Säiliö on suunniteltu näyttämään korttimaiselta, pyöristetyillä kulmilla ja varjolla, joka lisää syvyyttä. Tämä auttaa sovellusta erottumaan visuaalisesti ja antaa sille viimeistellyn, modernin ulkoasun.

## 4. Hover Effect for Container (.container:hover)

- **Mikä se on**: lisää visuaalisen vaikutuksen, kun käyttäjä siirtää osoittimen säiliön päälle.
- **Tarkoitus**: **Transform: scale(1.05;)**-sääntö suurentaa säiliötä hieman, kun siihen kohdistetaan hover-efekti, tarjoten hienovaraisen zoomausvaikutuksen, joka parantaa vuorovaikutteisuutta.
- **Tärkeä yksityiskohta**: Tämä hover-efekti lisää säiliöön dynaamisen kosketuksen, tehden siitä käyttäjäystävällisemmän ja responsiivisemman käyttäjän vuorovaikutukseen nähden.

## 5. Heading Styling (h1)

- **Mikä se on**: H1-sääntö tyylittelee sivun pääotsikon, "Weather Forecast App".
- **Tarkoitus**:
  - **Font Size (font-size: 2.5em;)**: Varmistaa, että otsikko on suuri ja näkyvä, kiinnittäen käyttäjän huomion välittömästi.
  - **Text Color (color: #333;)**: Asettaa otsikkotekstin tummanharmaaksi, varmistaen hyvän kontrastin valkoista taustaa vasten.
  - **Margin Bottom (margin-bottom: 20px;)**: Lisää tilaa otsikon ja seuraavan elementin väliin, parantaen yleistä asettelurakennetta.
- **Tärkeä yksityiskohta**: Otsikko on suunniteltu olemaan sivun näkyvin teksti, auttaen käyttäjää tunnistamaan sovelluksen tarkoituksen helposti.

## 6. Input Field Styling (input[type="text"])

- **Mikä se on**: Input[type="text"]-sääntö tyylittelee syötekentän, johon syötetään kaupungin nimi.
- **Tarkoitus**:
  - **Width (width: 100%;)**: Varmistaa, että syötekenttä ulottuu säiliön koko leveydelle.
  - **Padding (padding: 12px;)**: Lisää sisäpehmusteen syötekenttään, tehden siitä helpomman käyttää ja visuaalisesti tasapainoisemman.
  - **Border (border: 1px solid #ccc;)**: Asettaa kevyen harmaan reunan syötekenttään, luoden hienovaraisen, siistin ulkonäön.
  - **Border Radius (border-radius: 8px;)**: Pyöristää syötekentän kulmat sopimaan yhteen muun muotoilun kanssa.
  - **Box Shadow (box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);)**: Lisää hienovaraisen varjon syötekentän alle, antaen sille syvyyttä ja tehden siitä näyttämään kohotetulta.
  - **Font Size (font-size: 1.1em;)**: Varmistaa, että tekstin koko syötekentässä on helposti luettavissa.
  - **Margin Bottom (margin-bottom: 20px;)**: Lisää tilaa syötekentän alle, erottaen sen seuraavasta elementistä.
  - **Transition (transition: border-color 0.3s ease;)**: Lisää pehmeän siirtymävaikutuksen, kun syötekentän reunan väri muuttuu.
- **Tärkeä yksityiskohta**: Syötekenttä on suunniteltu käyttäjäystävälliseksi, riittävillä pehmusteilla, selkeillä reunoilla ja pyöristetyillä kulmilla modernin ulkonäön vuoksi.

## 7. Focus Effect for Input Field (input[type="text"]:focus)

- **Mikä se on**: kohdistaa tyylejä, kun syötekenttä on valittuna (eli kun käyttäjä napsauttaa tai valitsee sen).
- **Tarkoitus**: Muuttaa reunan väri eloisaksi siniseksi (**border-color: #007bff;**) ja poistaa oletuskorostuksen, jotta syötekenttä tuntuu interaktiivisemmalta ja visuaalisesti houkuttelevammalta, kun se on aktiivinen.
- **Tärkeä yksityiskohta**: Focus-efekti parantaa käyttökokemusta tarjoamalla selkeän visuaalisen merkin siitä, että syötekenttä on valittuna ja valmis tekstin syöttämiseen.

## 8. Button Styling (button)

- **Mikä se on**: Button-sääntö tyylittelee painikkeen, jota käyttäjä napsauttaa saadakseen säätiedot.
- **Tarkoitus**:
  - **Background Color (background-color: #007bff;)**: Asettaa painikkeen taustan eloisaksi siniseksi, tehden siitä näkyvän ensisijaisen toimintakehotteen.
  - **Text Color (color: white;)**: Varmistaa, että painikkeen teksti on helposti luettavissa sinistä taustaa vasten.
  - **Padding (padding: 12px 30px;)**: Lisää painikkeen kokoa, jotta siitä tulee klikkausystävällisempi ja visuaalisesti houkuttelevampi.
  - **Border Radius (border-radius: 8px;)**: Pyöristää painikkeen kulmat, sovittaen sen sovelluksen moderniin ja sulavaan ulkoasuun.
  - **Cursor (cursor: pointer;)**: Muuttaa kohdistimen osoittimeksi, kun se on painikkeen päällä, antaen käyttäjälle merkin siitä, että se on klikattavissa.
  - **Font Size (font-size: 1.1em;)**: Asettaa painikkeen tekstin koon mukavaksi ja helposti luettavaksi.
  - **Width (width: 100%;)**: Varmistaa, että painike kattaa säiliön koko leveyden.
  - **Transition (transition: background-color 0.3s ease, transform 0.2s ease;)**: Lisää pehmeät siirtymät hover- ja klikkaustoimintoihin, parantaen painikkeen tuntumaa.
- **Tärkeä yksityiskohta**: Painike on suunniteltu visuaalisesti erottuvaksi ja helposti vuorovaikutteisemmaksi, käyttäen eläviä värejä ja sulavia siirtymiä rohkaisemaan käyttäjiä napsauttamaan ja käyttämään sovellusta.

## 9. Button Hover Effect (button:hover)

- **Mikä se on**: lisää visuaalisen vaikutuksen, kun käyttäjä siirtää osoittimen painikkeen päälle.
- **Tarkoitus**: Taustaväri muuttuu tummemmaksi siniseksi (**background-color: #0056b3;**), ja painike kohoaa hieman sivusta (**transform: translateY(-3px);**), tarjoten välitöntä palautetta käyttäjälle.
- **Tärkeä yksityiskohta**: Hover-efekti parantaa vuorovaikutteisuutta, tehden sovelluksesta tuntuvamman responsiiviselta, antaen käyttäjille välitöntä palautetta, kun he siirtävät osoittimen painikkeen päälle.

## 10. Button Active State (button:active)

- **Mikä se on**: kohdistaa tyylin, kun painiketta napsautetaan tai painetaan.
- **Tarkoitus**: Taustaväri tummenee edelleen (**background-color: #004494;**) osoittamaan, että painiketta on painettu, ja **transform**-ominaisuus luo hienoisen alaspäin työntymisen efektin (**transform: translateY(1px);**).
- **Tärkeä yksityiskohta**: Tämä aktiivinen tila jäljittelee fyysisen painikkeen painamista, parantaen kokonaiskäyttökokemusta tarjoamalla taktiilista palautetta.

## 11. Forecast Styling (.forecast)

- **Mikä se on**: .forecast-luokka tyylittelee div-elementin, jossa säätiedot näytetään.
- **Tarkoitus**:
  - **Margin Top (margin-top: 20px;)**: Lisää tilaa painikkeen ja säätulosten väliin.
  - **Text Alignment (text-align: left;)**: Tasailee tekstin vasemmalle, parantaen säätietojen luettavuutta.
- **Tärkeä yksityiskohta**: Säätiedot on erotettu siististi muusta sovelluksesta, mikä tekee säädatan lukemisesta helppoa.

## 12. Forecast Day Styling (.forecast-day)

- **Mikä se on**: .forecast-day-luokka tyylittelee jokaisen yksittäisen päivän säätiedon.
- **Tarkoitus**:
  - **Background Color (background-color: #f8f8f8;)**: Tarjoaa pehmeän harmaan taustan jokaiselle sääkortille, erottaen ne pääsäiliöstä.
  - **Padding (padding: 15px;)**: Lisää sisätilaa, tehden sisällön lukemisesta helpompaa jokaisessa kortissa.
  - **Margin Bottom (margin-bottom: 10px;)**: Lisää tilaa jokaisen sääkortin väliin.
  - **Border Radius (border-radius: 8px;)**: Pyöristää sääkorttien kulmat, ylläpitäen sovelluksen yhtenäistä muotoilua.
  - **Border (border: 1px solid #ccc;)**: Lisää kevyen reunan sääkorttien ympärille, luoden visuaalista erottelua niiden välille.
  - **Box Shadow (box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);)**: Lisää hienovaraisen varjon korttien alle, antaen niille syvyyttä ja vahvistaen visuaalista hierarkiaa.
  - **Transition (transition: transform 0.2s ease;)**: Lisää hienovaraisen skaalautumisen efektin, kun sääkortteja leijutetaan.
- **Tärkeä yksityiskohta**: Jokaisen päivän sää esitetään omassa "kortissaan", tehden säätiedoista selkeitä, luettavia ja visuaalisesti houkuttelevia.

## 13. Hover Effect for Forecast Day (.forecast-day:hover)

- **Mikä se on**: lisää hienovaraisen skaalautumisen efektin, kun käyttäjä leijuttaa jokaisen sääkortin päällä.
- **Tarkoitus**: **Transform: scale(1.02;)** -sääntö suurentaa sääkortteja hieman, kun niitä leijutetaan, lisäten interaktiivisuutta.
- **Tärkeä yksityiskohta**: Tämä hover-efekti parantaa käyttäjäkokemusta tekemällä sääkorttien käytöstä dynaamisemman ja responsiivisemman.

## 14. Heading Styling Inside Forecast Day (.forecast-day h2)

- **Mikä se on**: H2-sääntö tyylittelee jokaisen sääkortin otsikon (viikonpäivä).
- **Tarkoitus**:
  - **Font Size (font-size: 1.3em;)**: Varmistaa, että viikonpäivä erottuu, tehden jokaisen päivän sääennusteen erottelusta helppoa.
  - **Text Color (color: #333;)**: Käyttää tummaa harmaata väriä selkeyden ja luettavuuden vuoksi.
  - **Margin (margin: 0;)**: Poistaa oletusmarginaalin, luoden siistimmän ulkoasun.
- **Tärkeä yksityiskohta**: Viikonpäivä on tyylitelty näkyvästi erottaakseen sen sääennusteen yksityiskohdista, tehden datan seuraamisesta helppoa käyttäjälle.

## 15. Paragraph Styling Inside Forecast Day (.forecast-day p)

- **Mikä se on**: P-sääntö tyylittelee jokaisen sääkortin sisällä olevat kappaleet (lämpötila ja sääkuvaus).
- **Tarkoitus**:
  - **Margin (margin: 5px 0;)**: Lisää tilaa tekstirivien väliin, varmistaen, että lämpötila ja sääkuvaus ovat selkeästi eroteltuja.
  - **Font Size (font-size: 1.1em;)**: Asettaa mukavan lukukoon säätiedoille.
  - **Text Color (color: #555;)**: Käyttää pehmeämpää harmaata väriä kappaletekstille, varmistaen luettavuuden ilman, että se ylivoimaisesti korostaa pääotsikkoa.
- **Tärkeä yksityiskohta**: Säätiedot on tyylitelty helppoa luettavuutta varten, selkeästi erotellen eri tiedot.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...});)

- **Mikä se on**: Tämä on tapahtumankuuntelija, joka odottaa, että koko HTML-dokumentti on ladattu ja jäsennelty ennen kuin funktion sisällä oleva skripti suoritetaan.
- **Tarkoitus**: Se varmistaa, että kaikki DOM-elementit (kuten syötekenttä, painike ja forecast-div) ovat täysin käytettävissä ennen kuin skripti vuorovaikuttaa niiden kanssa. Ilman tätä tapahtumankuuntelijaa skripti saattaa yrittää käsitellä elementtejä, joita ei ole vielä ladattu, mikä johtaa virheisiin.
- **Tärkeä yksityiskohta**: Käyttämällä DOMContentLoaded tapahtuman käsittely varmistetaan, että sovellus alkaa toimia vasta, kun kaikki tarvittavat elementit ovat valmiina. Tämä varmistaa sujuvamman vuorovaikutuksen DOM:in kanssa ja estää mahdolliset ongelmat sivun latauksen aikana.

## 2. Selecting DOM Elements (const cityInput = document.getElementById('city');)

- **Mikä se on**: Nämä koodirivit valitsevat DOM-elementit käyttäjän vuorovaikutusta varten käyttämällä document.getElementById(). Jokainen elementti tallennetaan vakioihin, jotta niitä voidaan käyttää helposti myöhemmin skriptissä.
- **Tarkoitus**:
  - **cityInput**: Viittaa syötekenttään, johon käyttäjä kirjoittaa kaupungin nimen.
  - **getForecastButton**: Viittaa painikkeeseen, joka käynnistää ennusteen hakemisen.
  - **forecastDiv**: Viittaa diviin, johon säätiedot näytetään.
- **Tärkeä yksityiskohta**: Valitsemalla nämä elementit ja tallentamalla ne vakioihin skripti voi tehokkaasti vuorovaikuttaa DOM:in kanssa, manipuloida sisältöä tai reagoida käyttäjän toimintoihin. Tämä pitää koodin modulaarisena ja helpottaa ylläpitoa.

## 3. Button Click Event Listener (getForecastButton.addEventListener('click', getWeatherForecast);)

- **Mikä se on**: Tämä rivi lisää tapahtumankuuntelijan "Get Forecast" -painikkeeseen. Se kuuntelee klikkaustapahtumaa ja käynnistää getWeatherForecast()-funktion, kun painiketta klikataan.
- **Tarkoitus**: Tämä tapahtumankuuntelija yhdistää käyttäjän toiminnon (painikkeen klikkaaminen) sovelluksen keskeiseen toiminnallisuuteen (sään hakeminen ja näyttäminen). Ilman tätä kuuntelijaa sovellus ei vastaisi käyttäjän syötteisiin.
- **Tärkeä yksityiskohta**: Lisäämällä tapahtumankuuntelijat varmistetaan, että sovellus on vuorovaikutteinen ja reagoi käyttäjän toimiin, jolloin se päivittyy dynaamisesti syötteen perusteella.

## 4. Fetching the Weather Forecast (function getWeatherForecast() {...})

- **Mikä se on**: getWeatherForecast()-funktio vastaa säädatan hakemisesta käyttäjän syöttämälle kaupungille. Se käyttää OpenWeatherMap API:a ennusteen noutamiseen.
- **Vaiheet**:
  - **Get the city name**: Kaupungin nimi haetaan cityInput-kentästä ja tyhjennetään ylimääräisistä väleistä, jotta syöte on siisti.
  - **Input validation**: Jos käyttäjä ei ole syöttänyt kaupungin nimeä, forecastDivissä näytetään virheilmoitus, joka kehottaa syöttämään kaupungin nimen.
  - **API Request**: fetch()-funktiota käytetään lähettämään HTTP GET -pyyntö OpenWeatherMap API:lle, joka hakee säädatan määritetylle kaupungille. Pyyntö sisältää kaupungin nimen, yksiköt (Celsius) ja API-avaimen.
  - **Handling the Response**:
    - API-vastaus muunnetaan JSON-muotoon.
    - Jos API palauttaa virhekoodin (esim. jos kaupunkia ei löydy), forecastDivissä näytetään virheilmoitus.
    - Jos pyyntö onnistuu, displayForecast()-funktio kutsutaan päivittämään UI säädatalla.
  - **Error Handling**: Jos tapahtuu virhe (esim. verkkoyhteysongelma), näytetään virheilmoitus ja virheen yksityiskohdat kirjataan konsoliin.
- **Tärkeä yksityiskohta**: Tämä funktio on sovelluksen ydintoiminnallisuus. Se käsittelee sekä käyttäjän syötteen validoinnin että vuorovaikutuksen OpenWeatherMap API:n kanssa, varmistaen, että sovellus vastaa dynaamisesti käyttäjän kaupungin syöttöön.

## 5. Displaying the Weather Forecast (function displayForecast(data) {...})

- **Mikä se on**: displayForecast()-funktio vastaa säätiedon renderöinnistä sivulle. Se ottaa API:sta saadun säädatan ja päivittää forecastDivin tiedoilla.
- **Vaiheet**:
  - **Clear previous forecast**: forecastDiv.innerHTML tyhjennetään poistamaan vanhat tiedot edellisistä ennusteista, varmistaen, että jokainen ennuste näytetään tuoreena.
  - **Iterating over the forecast data**: Ennustedata sisältää säätiedot 3 tunnin välein 5 päivän ajalta. Funktio käy datan läpi, mutta valitsee vain yhden ennusteen per päivä (24 tunnin välein) lisäämällä silmukan arvoa 8.
  - **Formatting the date**: Jokaisessa ennusteessa on UNIX-aikaleima, joka muunnetaan luettavaan päivämäärämuotoon. Viikonpäivä näytetään käyttämällä toLocaleDateString()-metodia.
  - **Temperature and weather description**: Lämpötila ja sään kuvaus haetaan ennustedatasta.
  - **Emoji for the weather**: Sääkuvauksen perusteella valitaan vastaava emoji kuvaamaan sääolosuhteita (esim. selkeälle säälle ☀️, sateelle 🌧️).
  - **Creating forecast cards**: Jokaiselle päivälle luodaan uusi div-elementti luokalla forecast-day, joka sisältää päivän, lämpötilan, sään kuvauksen ja emojin. Tämä div lisätään forecastDiviin.
- **Tärkeä yksityiskohta**: displayForecast()-funktio on keskeinen tiedon näyttämisessä visuaalisesti miellyttävällä tavalla. Käyttämällä silmukkaa luomaan useita "ennustekortteja" sovellus näyttää 5 päivän säätiedon selkeästi ja rakenteellisesti.

## 6. Fetching and Parsing Data (fetch(https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=40&appid=${apiKey}`))

- **Mikä se on**: Tämä on fetch()-metodi, jota käytetään lähettämään HTTP GET -pyyntö OpenWeatherMap API:lle. Se rakentaa dynaamisesti URL-osoitteen kaupungin nimellä, yksiköillä (Celsius) ja API-avaimella.
- **Tarkoitus**: fetch()-funktio hakee säätiedot OpenWeatherMap API:sta käyttäjän syöttämän kaupungin perusteella. API palauttaa tiedot JSON-muodossa, jota voidaan helposti käsitellä JavaScriptin avulla.
- **Tärkeä yksityiskohta**: API-pyyntö on muotoiltu hakemaan säätiedot seuraavalle 5 päivälle, jossa mittaukset tehdään 3 tunnin välein. Käyttämällä tätä API:a sovellus tarjoaa tarkat ja ajan tasalla olevat säätiedot.

## 7. Error Handling (.catch(error => {...}))

- **Mikä se on**: .catch()-lohko käsittelee kaikki virheet, jotka voivat tapahtua säätietojen haun aikana, kuten verkkoyhteysongelmat tai ongelmat API-pyynnössä.
- **Tarkoitus**: Jos virhe tapahtuu, sovellus antaa käyttäjälle palautteen näyttämällä virheilmoituksen forecastDivissä. Tämä varmistaa, että sovellus ei kaadu tai lakkaa toimimasta ongelmatilanteessa.
- **Tärkeä yksityiskohta**: Asianmukainen virheenkäsittely parantaa käyttäjäkokemusta hallitsemalla virheitä sujuvasti ja pitämällä sovelluksen toiminnassa, vaikka jokin menisi pieleen API-kutsun aikana.

## 8. Adding Emojis to the Weather Forecast (let weatherEmoji = '';)

- **Mikä se on**: Tämä lohko sisältää ehtolauseita, jotka tarkistavat sääkuvauksen ja liittävät sopivan emojin sään mukaan (esim. selkeälle ☀️, sateelle 🌧️, lumelle ❄️).
- **Tarkoitus**: Emojien lisääminen ennusteeseen tarjoaa hauskan ja nopean visuaalisen esityksen sääolosuhteista. Tämä parantaa käyttäjäkokemusta tekemällä ennusteesta helpommin ymmärrettävän yhdellä silmäyksellä.
- **Tärkeä yksityiskohta**: Emojien käyttö tekee ennusteesta houkuttelevamman ja visuaalisesti mielenkiintoisemman, mikä antaa sovellukselle ystävällisen ja vuorovaikutteisen ilmeen.

## 9. Creating and Displaying Forecast Cards (const forecastDayDiv = document.createElement('div');)

- **Mikä se on**: Jokaiselle päivän ennusteelle luodaan uusi div-elementti luokalla forecast-day. Päivämäärä, lämpötila, sään kuvaus ja emoji lisätään tähän diviin.
- **Tarkoitus**: Dynaamisesti luodut div-elementit toimivat yksittäisinä "ennustekortteina" jokaiselle päivälle. Nämä kortit tyylitellään CSS:ssä, jotta säätiedot saadaan esitettyä rakenteellisesti ja visuaalisesti miellyttävällä tavalla.
- **Tärkeä yksityiskohta**: Ennustekorttien modulaarinen luominen tekee sovelluksesta skaalautuvan ja helposti muokattavan. Liittämällä nämä kortit forecastDiviin sovellus päivittyy dynaamisesti API-datan perusteella.
