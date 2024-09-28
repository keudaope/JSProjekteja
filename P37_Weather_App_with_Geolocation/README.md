# Nettisivu: https://keudaope.github.io/JSProjekteja/P37_Weather_App_with_Geolocation

# Johdanto

Sääsovellus geopaikannuksella on hyödyllinen sovellus, joka näyttää sääolosuhteet käyttäjän sijainnin perusteella. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla kun opitaan käyttämään Geolocation APIa, käsittelemään API-pyyntöjä, prosessoimaan JSON-dataa ja päivittämään DOM:ia dynaamisesti. Käyttäjät voivat nähdä ajankohtaisen sään omassa sijainnissaan myöntämällä luvan geopaikannustietojensa käyttöön.

# HTML selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on**: <code><</code>!DOCTYPE html> -määritys kertoo selaimelle, että dokumentti on kirjoitettu HTML5:llä.
- **Tarkoitus**: Se varmistaa, että verkkosivu näytetään nykyaikaisten HTML5-standardien mukaisesti, mikä estää yhteensopivuusongelmia vanhempien selainten kanssa.
- **Tärkeä yksityiskohta**: Lisää aina DOCTYPE-määritys varmistaaksesi johdonmukaisen renderöinnin kaikissa selaimissa.

## 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on**: <code><</code>html>-elementti käärii kaikki verkkosivun sisällöt. lang="en" -attribuutti määrittää, että dokumentin kieli on englanti.
- **Tarkoitus**: Lang-attribuutti auttaa hakukoneita ja esteettömyystyökaluja, kuten näytönlukuohjelmia, ymmärtämään dokumentin kielen.
- **Tärkeä yksityiskohta**: Kielen määrittäminen parantaa SEO:a ja saavutettavuutta.

## 3. Head Tag (<code><</code>head>):

- **Mikä se on**: <code><</code>head>-elementti sisältää metatiedot ja linkit ulkoisiin resursseihin, kuten tyylitiedostoihin ja JavaScript-tiedostoihin.
- **Tarkoitus**: Se valmistaa verkkosivun oikeaan näyttöön lataamalla tarvittavat resurssit ja metatiedot ennen kuin sisältö näytetään.
- **Tärkeät yksityiskohdat**:
  - **Meta Charset** (<code><</code>meta charset="UTF-8">): Määrittää merkkikoodauksen UTF-8:ksi, tukien laajaa merkkien ja symbolien valikoimaa.
  - **Viewport Meta Tag** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">): Varmistaa, että sivu on responsiivinen ja mukautuu eri näyttökokoihin, erityisesti mobiililaitteilla.
  - **Title Tag** (<code><</code>title>Weather App with Geolocation</title>): Määrittää sivun otsikon, joka näytetään selaimen välilehdessä.
  - **CSS Link** (<code><</code>link rel="stylesheet" href="styles.css">): Linkittää ulkoiseen tyylitiedostoon (styles.css), joka määrittää sovelluksen visuaalisen ulkoasun.

## 4. Body Tag (<code><</code>body>):

- **Mikä se on**: <code><</code>body>-elementti sisältää kaikki verkkosivun näkyvät sisällöt.
- **Tarkoitus**: Se pitää sisällään kaikki sovelluksen vuorovaikutteiset ja visuaaliset elementit, kuten painikkeet ja säätiedot.
- **Tärkeä yksityiskohta**: Body on tyylitelty käyttämällä CSS:ää keskitetyn asettelun ja taustagradientin luomiseksi.

## 5. Container Div (<code><</code>div class="container">):

- **Mikä se on**: <code><</code>div>-elementti, jolla on luokka "container", käärii pääsisällön, mukaan lukien otsikon, painikkeen ja säätiedot.
- **Tarkoitus**: Se ryhmittelee liittyvät elementit yhteen ja soveltaa tyylitystä sijoittaakseen ne näytön keskelle, visuaalisesti erottaen ne taustasta.
- **Tärkeä yksityiskohta**: Container tarjoaa täytettä, taustavärin ja varjostuksen visuaalisen ilmeen parantamiseksi.

## 6. Title Tag (<code><</code>h1>Weather App<code><</code>/h1>):

- **Mikä se on**: <code><</code>h1>-elementti näyttää sivun pääotsikon, "Weather App."
- **Tarkoitus**: Otsikko toimii sivun otsikkona ja kertoo käyttäjille sovelluksen toiminnallisuuden. Se on tyylitelty erottuvaksi ja helposti luettavaksi.
- **Tärkeä yksityiskohta**: Pääotsikkona <code><</code>h1> on tärkeä SEO:n ja esteettömyyden kannalta, ilmaisten sivun pääasiallisen tarkoituksen.

## 7. Button Element (<code><</code>button id="get-weather-button">Get Weather<code><</code>/button>):

- **Mikä se on**: <code><</code>button>-elementti antaa käyttäjän olla vuorovaikutuksessa sovelluksen kanssa klikkaamalla hakeakseen säätietoja.
- **Tarkoitus**: Se tarjoaa käyttäjälle päätoiminnon: säätietojen hakemisen käyttäjän sijainnin perusteella.
- **Tärkeä yksityiskohta**: id="get-weather-button" tunnistaa painikkeen yksilöllisesti, jolloin JavaScript voi laukaista toimintoja, kun sitä klikataan.

## 8. Weather Info Div (<code><</code>div class="weather-info" id="weather-info"></div>):

- **Mikä se on**: <code><</code>div>-elementti, jolla on luokka weather-info ja ID weather-info, johon haetut säätiedot näytetään.
- **Tarkoitus**: Se toimii paikkamerkkinä, johon dynaamisesti näytetään säätietoja, kuten kaupungin nimi, lämpötila ja sääkuvaus.
- **Tärkeä yksityiskohta**: Aluksi tämä div on tyhjä ja se täytetään säätiedoilla, kun käyttäjä klikkaa painiketta ja sovellus hakee tiedot.

## 9. Script Tag (<code><</code>script src="app.js"></script>):

- **Mikä se on**: <code><</code>script>-tag linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka käsittelee sovelluksen toiminnallisuuden.
- **Tarkoitus**: Se erottaa JavaScript-logiikan HTML-rakenteesta, tehden koodista järjestelmällisemmän ja helpommin ylläpidettävän.
- **Tärkeä yksityiskohta**: Ulkoisiin skripteihin linkittäminen pitää HTML-tiedoston siistinä ja mahdollistaa dynaamisen vuorovaikutuksen JavaScriptin kautta.

# CSS selitys

## 1. Global Body Styling (<code><</code>body>):

- **Mikä se on**: <code><</code>body>-sääntö määrittää koko verkkosivun yleisilmeen ja asettelun.
- **Tärkeät ominaisuudet**:
  - **font-family: Arial, sans-serif;**: Asettaa modernin ja helposti luettavan fontin (Arial) koko sivulle. Sans-serif toimii varana, jos Arial ei ole käytettävissä.
  - **background-color: #f0f0f0;**: Tarjoaa vaaleanharmaan taustan, joka luo kontrastia sivun taustan ja valkoisen container-elementin välille.
  - **display: flex;**: Käyttää Flexboxia joustavan asettelun luomiseen, mikä helpottaa sisällön keskittämistä sekä vertikaalisesti että horisontaalisesti.
  - **justify-content: center; align-items: center;**: Keskittää containerin sekä horisontaalisesti että vertikaalisesti näkymäportin sisällä.
  - **height: 100vh;**: Varmistaa, että body täyttää koko näkymäportin korkeuden, mahdollistaen sisällön vertikaalisen keskittämisen.
  - **margin: 0;**: Poistaa oletusmarginaalit, jotka selaimet yleensä lisäävät, varmistaen, että asettelu kohdistuu oikein.
- **Tarkoitus**: Nämä tyylit varmistavat, että sisältö (sääsovellus) on täydellisesti keskitetty näkymäporttiin, tarjoten puhtaan ja minimalistisen taustan sovellukselle.

## 2. Container Styling (<code><</code>div class="container">):

- **Mikä se on**: <code><</code>.container>-luokka tyylittää pääasiallisen kääre-elementin, joka sisältää sovelluksen elementit, kuten otsikon, painikkeen ja säätiedot.
- **Tärkeät ominaisuudet**:
  - **background: white;**: Asettaa containerin taustaväriksi valkoisen, jolloin sisältö erottuu selkeästi harmaasta taustasta.
  - **padding: 20px;**: Lisää tilaa containerin sisälle, varmistaen, ettei sisältö kosketa reunoja ja tehden asettelusta mukavamman ja visuaalisesti miellyttävämmän.
  - **border-radius: 8px;**: Pyöristää containerin kulmat, antaen sille modernin ja pehmeän ulkonäön.
  - **box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);**: Lisää hienovaraisen varjon containerin ympärille, luoden syvyyden tunteen ja kohottaen containerin taustasta.
  - **text-align: center;**: Keskittää kaiken containerin sisällä olevan tekstin, mukaan lukien otsikon ja painikkeen.
  - **width: 300px;**: Määrittelee containerille kiinteän leveyden, mikä varmistaa, että se pysyy kompaktina koosta riippumatta.
- **Tarkoitus**: .container-tyylit antavat sovellukselle modernin korttimaisen ulkoasun pyöristetyillä kulmilla ja varjostuksella, tehden siitä visuaalisesti houkuttelevan ja selkeästi erottuvan taustasta.

## 3. Heading Styling (<code><</code>h1>):

- **Mikä se on**: <code><</code>h1>-sääntö tyylittää sovelluksen pääotsikon, joka on "Weather App."
- **Tärkeät ominaisuudet**:
  - **margin-bottom: 20px;**: Lisää tilaa otsikon alle erottaen sen painikkeesta, varmistaen selkeän eron otsikon ja vuorovaikutteisten elementtien välillä.
- **Tarkoitus**: Varmistaa hyvän tilan otsikon alla ja pitää asettelun siistinä estämällä elementtien pakkautumisen yhteen.

## 4. Weather Info Styling (<code><</code>div class="weather-info">):

- **Mikä se on**: <code><</code>.weather-info>-luokka tyylittää div-elementin, jossa näytetään säätiedot tietojen haun jälkeen.
- **Tärkeät ominaisuudet**:
  - **margin-top: 20px;**: Lisää tilaa säätietojen yläpuolelle, jotta ne erottuvat painikkeesta, varmistaen selkeän asettelun, kun tiedot näytetään.
- **Tarkoitus**: Varmistaa, että säätiedot ovat asianmukaisesti erillään painikkeesta, parantaen luettavuutta ja säilyttäen selkeän rakenteen, kun tiedot lisätään dynaamisesti.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...});):

- **Mikä se on**: Tämä event listener odottaa, että koko HTML-dokumentti on täysin ladattu ennen kuin koodi callback-funktion sisällä suoritetaan.
- **Tarkoitus**: Se varmistaa, että skripti suoritetaan vasta, kun DOM-elementit (kuten painike ja weather info -div) ovat käytettävissä. Tämä estää virheet, joita voisi syntyä, jos yritettäisiin käsitellä elementtejä, joita ei ole vielä ladattu.
- **Tärkeä yksityiskohta**: DOMContentLoaded:n käyttäminen takaa, että sovellus toimii oikein varmistamalla, että kaikki HTML-elementit ovat valmiina ennen kuin JavaScript-koodi suoritetaan.

## 2. Selecting DOM Elements (const getWeatherButton = document.getElementById('get-weather-button');):

- **Mikä se on**: Tämä rivi käyttää document.getElementById-metodia valitakseen painikkeen ja weather info -divin niiden id-attribuuttien perusteella.
- **Tarkoitus**:
  - **getWeatherButton**: Viittaa painikkeeseen, joka, kun sitä klikataan, käynnistää käyttäjän sijainnin ja säädatan haun.
  - **weatherInfoDiv**: Viittaa div-elementtiin, jossa säätiedot (kuten kaupunki, lämpötila ja kuvaus) näytetään.
- **Tärkeä yksityiskohta**: Valitsemalla nämä elementit voimme helposti lisätä event listenereitä ja päivittää sisältöä dynaamisesti tarpeen mukaan.

## 3. Adding a Click Event Listener to the Button (getWeatherButton.addEventListener('click', getWeather);):

- **Mikä se on**: Tämä rivi lisää event listenerin getWeatherButton-painikkeeseen, joka kuuntelee klikkaustapahtumaa. Kun painiketta klikataan, getWeather-funktio kutsutaan.
- **Tarkoitus**: Klikkaustapahtuma käynnistää prosessin, jossa haetaan käyttäjän geosijainti ja säädata API:sta.
- **Tärkeä yksityiskohta**: Tämä event listener varmistaa, että sovellus on interaktiivinen ja yrittää hakea säätietoja vasta, kun käyttäjä pyytää sitä.

## 4. Getting Geolocation (navigator.geolocation.getCurrentPosition(position => {...});):

- **Mikä se on**: Tämä funktio tarkistaa, tukeeko selain geosijaintia. Jos tukee, se hakee käyttäjän nykyisen sijainnin (leveys- ja pituusasteet) getCurrentPosition-metodin avulla.
- **Tarkoitus**: Näin sovellus hakee käyttäjän koordinaatit, jotka ovat tarpeen säädatan hakemiseksi käyttäjän sijainnin perusteella.
- **Tärkeä yksityiskohta**: Jos geosijainnin haku onnistuu, position-objekti tarjoaa leveyspiirin ja pituuspiirin, jotka sitten lähetetään OpenWeatherMap API:lle.

## 5. Making the API Call (fetch('https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}')):

- **Mikä se on**: fetch-funktio lähettää pyynnön OpenWeatherMap API:lle käyttäjän leveys- ja pituusasteiden perusteella, jolloin saadaan säätiedot heidän nykyisestä sijainnistaan.
- **Tarkoitus**: Tämä hakee reaaliaikaiset säätiedot, jotka sitten käsitellään ja näytetään sovelluksessa. Parametri units=metric varmistaa, että lämpötila näytetään Celsius-asteina.
- **Tärkeä yksityiskohta**: API-avain ja käyttäjän sijainti sisällytetään URL-osoitteeseen säädatan hakemiseksi. Jos pyyntö onnistuu, vastaus muunnetaan JSON-muotoon, jota sovellus voi käyttää.

## 6. Processing the API Response (.then(response => response.json())):

- **Mikä se on**: Tämä metodi käsittelee API:sta saadun vastauksen. Vastaus muunnetaan JSON-objektiksi, mikä tekee säädatan käsittelemisestä helpompaa.
- **Tarkoitus**: Se mahdollistaa sen, että sovellus voi ottaa API:n vastauksesta olennaiset säätiedot (kuten lämpötilan, kaupungin nimen ja kuvauksen) ja käyttää niitä DOM:in päivittämiseen.
- **Tärkeä yksityiskohta**: .then()-metodi varmistaa, että sovellus odottaa API-vastauksen ennen kuin yrittää näyttää säätiedot. Data siirretään sitten displayWeather-funktioon, joka vastaa sen näyttämisestä.

## 7. Displaying the Weather Data (function displayWeather(data) {...}):

- **Mikä se on**: Tämä funktio ottaa API:sta saadut säätiedot ja päivittää dynaamisesti weatherInfoDivin sisällön, jotta relevantit tiedot näytetään.
- **Tarkoitus**: Se muotoilee datan (kuten kaupungin nimi, lämpötila ja sään kuvaus) ja asettaa sen HTML:ään käyttämällä template-lausekkeita, tehden sovelluksesta interaktiivisen ja käyttäjän syötteeseen reagoivan.
- **Tärkeä yksityiskohta**: Tämä funktio varmistaa, että säätiedot näytetään käyttäjäystävällisessä muodossa päivittämällä DOM:in kaupungin nimellä, Celsius-lämpötilalla ja sään kuvauksella.

## 8. Error Handling for Geolocation and Fetch (catch(error => {...}); and navigator.geolocation.getCurrentPosition(..., error => {...})):

- **Mikä se on**: .catch()-lohko käsittelee kaikki virheet, jotka voivat ilmetä säätietojen haun aikana (esimerkiksi verkkoyhteysongelmat tai API-virheet). navigator.geolocation-metodi sisältää myös virheenpalautteen geosijainnin hakemisen epäonnistuessa.
- **Tarkoitus**: Nämä virheidenkäsittelymekanismit varmistavat, että jos jokin menee pieleen (esim. geosijainnin haku epäonnistuu tai API-pyyntö kohtaa ongelman), käyttäjälle näytetään selkeä virheilmoitus.
- **Tärkeä yksityiskohta**: Käsittelemällä virheet sulavasti sovellus antaa käyttäjälle palautteen sen sijaan, että se jättäisi käyttöliittymän tyhjäksi tai epäaktiiviseksi, parantaen näin käyttäjäkokemusta.
