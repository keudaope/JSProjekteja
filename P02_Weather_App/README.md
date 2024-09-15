# Nettisivu: https://keudaope.github.io/JSProjekteja/P02_Weather_App

# HTML Selitys

## 1. &lt;!DOCTYPE html>

- **Mitä se on**: Tämä deklarointi on jokaisen HTML-dokumentin ensimmäinen rivi.

- **Tarkoitus**: Se kertoo selaimelle, että dokumentissa käytetään HTML5:sta, HTML:n uusinta versiota.

- **Tärkeys**: Se varmistaa, että selain tulkitsee HTML-koodin nykyaikaisten standardien mukaisesti, mikä auttaa välttämään yhteensopivuusongelmia.

## 2. &lt;html lang="en">

- **Mitä se on**: &lt;html> -elementti on koko HTML-dokumentin juurielementti.

- **lang="en"**: Tämä attribuutti määrittää dokumentin kielen, tässä tapauksessa englannin.

- **Tärkeys**: Tämä on hyödyllistä hakukoneille ja saavutettavuustyökaluille, kuten ruudunlukuohjelmille, koska se auttaa niitä ymmärtämään sisällön kielen.

## 3. &lt;head>

- **Mitä se on**: &lt;head> -elementti sisältää metadataa ja linkkejä ulkoisiin resursseihin, kuten tyylitiedostoihin ja skripteihin.

- **Tarkoitus**: Se tarjoaa tietoja dokumentista selaimelle, hakukoneille ja muille työkaluille.

## 4. &lt;meta charset="UTF-8">

- **Mitä se on**: Tämä rivi asettaa dokumentin merkistökoodauksen UTF-8.

- **Tarkoitus**: UTF-8 on yleinen merkistö, joka tukee suurinta osaa eri kielten merkeistä, mukaan lukien erikoismerkit ja ei-latinalaiset merkit.

- **Tärkeys**: Ilman oikeaa merkistökoodausta jotkut merkit eivät välttämättä näy oikein, erityisesti ei-latinalaiset merkit.

## 5. &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">

- **Mitä se on**: Tämä meta-tagi varmistaa, että sivu on responsiivinen.
- **Tarkoitus**: Se varmistaa, että asettelu mukautuu oikein eri laitteille, kuten älypuhelimille ja tableteille.
- **Attribuutit**:
  - **width=device-width**: Asettaa verkkosivun leveyden vastaamaan laitteen näytön leveyttä.
  - **initial-scale=1.0**: Varmistaa, että sivu näytetään oletustasolla, kun se ladataan ensimmäisen kerran.
- **Tärkeys**: Tämä on tärkeää, jotta sovellus näyttää hyvältä kaikilla näytön kokoisilla laitteilla.

## 6. &lt;title>Weather App&lt;/title>

- **Mitä se on**: &lt;title> -elementti asettaa verkkosivun otsikon, joka näkyy selaimen välilehdessä.
- **Tarkoitus**: Se antaa selkeän viitteen siitä, mistä sivulla on kyse.
- **Tärkeys**: Se parantaa käyttökokemusta ja auttaa hakukoneoptimoinnissa (SEO) ilmoittamalla sivun tarkoituksen selkeästi.

## 7. &lt;link rel="stylesheet" href="styles.css">

- **Mitä se on**: &lt;link> -elementtiä käytetään linkittämään ulkoinen CSS-tiedosto HTML-dokumenttiin.
- **Tarkoitus**: Tämä linkittää styles.css-tiedoston, joka sisältää kaikki tyylit, jotka määrittävät Weather App -sovelluksen ulkoasun.
- **Tärkeys**: CSS:n erottaminen ulkoiseen tiedostoon pitää HTML:n siistinä ja helpommin ylläpidettävänä. Se tekee myös sovelluksesta modulaarisemman, mikä mahdollistaa tyylien päivittämisen ilman HTML:n muokkausta.

## 8. &lt;body>

- **Mitä se on**: &lt;body> -elementti sisältää verkkosivun näkyvän sisällön.
- **Tarkoitus**: Kaikki elementit, jotka pitäisi näyttää käyttäjälle, menevät &lt;body> -elementin sisälle, kuten tekstit, kuvat, lomakkeet ja painikkeet.
- **Tärkeys**: &lt;body> määrittelee sivun pääsisällön, ja ilman sitä sivu ei renderöidy oikein.

## 9. &lt;div class="container">

- **Mitä se on**: &lt;div> on kontainerielementti, joka ryhmittelee muita elementtejä yhteen.
- **Tarkoitus**: Tämä div käärii koko sovelluksen ja käyttää "container"-luokkaa asettelun tyylittämiseen. On yleinen käytäntö kääriä sisältö osioihin, jotta asettelua ja tyylitystä voidaan hallita helpommin.
- **Tärkeys**: Sisällön ryhmittely kontainereihin helpottaa tiettyjen tyylien soveltamista ja asettelun hallintaa eri näyttökoille.

## 10. &lt;h1>Weather App&lt;/h1>

- **Mitä se on**: &lt;h1> -elementti määrittelee sivun pääotsikon.
- **Tarkoitus**: Se kertoo käyttäjälle (ja hakukoneille), että tämä on sivun tärkein otsikko. Tässä se ilmoittaa selkeästi sovelluksen olevan "Weather App".
- **Tärkeys**: &lt;h1> -tägeillä parannetaan hakukoneoptimointia (SEO) ja saavutettavuutta määrittelemällä sisällön rakenne selkeästi. Se myös auttaa ruudunlukuohjelmia navigoimaan sivulla.

## 11. &lt;form id="weather-form" aria-label="Weather Form">

- **Mitä se on**: &lt;form> -elementtiä käytetään käyttäjän syötteen keräämiseen.
- **Tarkoitus**: Tämä lomake sallii käyttäjän syöttää kaupunkinimen ja lähettää sen säädatan hakemiseksi.
- **Attribuutit**:
  - **id="weather-form"**: Yksilöllinen id mahdollistaa lomakkeen käsittelyn JavaScriptin avulla lähetyksen yhteydessä.
  - **aria-label="Weather Form"**: Tämä tarjoaa saavutettavuuden kannalta tärkeän selitteen ruudunlukuohjelmille, mikä helpottaa näkövammaisten käyttäjien ymmärrystä lomakkeen tarkoituksesta.
- **Tärkeys**: Lomakkeet ovat olennaisia käyttäjän syötteen keräämisessä. Tämä lomake tarjoaa selkeän ja saavutettavan tavan syöttää kaupunkinimi ja hakea säätietoja.

## 12. &lt;input type="text" id="city-input" placeholder="Enter city name" required aria-label="City name input">

- **Mitä se on**: &lt;input> -elementti luo tekstisyötekentän, johon käyttäjä voi kirjoittaa kaupunkinimen.
- **Attribuutit**:
  - **type="text"**: Tämä määrittää, että syötekenttä hyväksyy tekstin.
  - **id="city-input"**: Tämä yksilöllinen id mahdollistaa syöttökentän käsittelyn JavaScriptin avulla.
  - **placeholder="Enter city name"**: Tämä esimerkkiopastus auttaa käyttäjää ymmärtämään, mitä kenttään tulee syöttää.
  - **required**: Tämä varmistaa, että lomaketta ei voi lähettää ilman kaupunkinimen syöttämistä.
  - **aria-label="City name input"**: Tarjoaa saavutettavuuden kannalta tärkeän selitteen ruudunlukuohjelmille, parantaen sovelluksen käytettävyyttä näkövammaisille.
- **Tärkeys**: Syöttökenttä on sovelluksen keskeinen osa, koska se kerää käyttäjän syötteen (kaupunkinimen). Käytettävyyttä parannetaan opastetekstin ja saavutettavuusselitteiden avulla.

## 13. &lt;button type="submit" aria-label="Get Weather">Get Weather&lt;/button>

- **Mitä se on**: &lt;button> -elementti luo klikattavan painikkeen, joka lähettää lomakkeen.
- **Attribuutit**:
  - **type="submit"**: Tämä kertoo selaimelle, että painike lähettää lomakkeen.
  - **aria-label="Get Weather"**: Tarjoaa saavutettavuuden kannalta selitteen, joka selittää painikkeen toiminnon ruudunlukuohjelmille.
- **Tarkoitus**: Kun painiketta klikataan, se lähettää lomakkeen ja kaupunkinimen, jonka käyttäjä on syöttänyt, sää-API:lle
- **Tärkeys**: Painike käynnistää säädatan hakemisen. Sen on oltava selkeä, saavutettava ja käyttäjäystävällinen, jotta käyttäjä ymmärtää sen toiminnan.

## 14. &lt;div class="weather-info" id="weather-info" aria-live="polite">&lt;/div>

- **Mitä se on**: &lt;div> -elementti, joka näyttää sää-API:sta palautetun säädatan.
- **Attribuutit**:
  - **id="weather-info"**: Yksilöllinen id mahdollistaa tämän elementin sisällön dynaamisen päivittämisen JavaScriptin avulla.
  - **aria-live="polite"**: Tämä attribuutti on tärkeä saavutettavuudelle. Se kertoo ruudunlukuohjelmille, että tähän sivun osaan tehdyt muutokset pitää ilmoittaa käyttäjälle.
- **Tarkoitus**: Tämä div täytetään dynaamisesti säätiedoilla sen jälkeen, kun käyttäjä on syöttänyt kaupunkinimen.
- **Tärkeys**: Ilman tätä osaa haettua säätietoa ei olisi minnekään näytettävissä. Se myös parantaa saavutettavuutta aria-live-attribuutin avulla, joka varmistaa, että ruudunlukuohjelmia käyttävät käyttäjät saavat tiedon päivityksistä.

## 15. &lt;script src="app.js">&lt;/script>

- **Mitä se on**: &lt;script> -elementtiä käytetään ulkoisen JavaScript-tiedoston linkittämiseen.
- **Tarkoitus**: Se yhdistää HTML-dokumentin app.js-tiedostoon, joka sisältää JavaScript-koodin, joka käsittelee Weather App -sovelluksen logiikan (kuten säätietojen hakemisen ja käyttöliittymän päivittämisen).
- **Tärkeys**: JavaScriptin erottaminen ulkoiseen tiedostoon tekee koodista modulaarisempaa ja helpommin ylläpidettävää. Se myös pitää HTML-dokumentin siistinä ja keskittyneenä sisällön rakenteeseen.

# CSS Selitys

## 1. body

- **Mitä se on**: Tämä määrittää tyylit koko sivulle (&lt;body>-elementille).
- **Tärkeät ominaisuudet**:
  - **font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;**: Asettaa sovellukselle oletusfontin. Ensimmäinen fontti on Segoe UI (moderni, selkeä fontti). Muut ovat varafontteja, jos ensimmäinen ei ole käytettävissä.
  - **background: linear-gradient(135deg, #74ebd5, #acb6e5);**: Luo taustagradientin, joka vaihtuu vihreästä (#74ebd5) vaalean violettiin (#acb6e5). Tämä antaa sovellukselle modernin ja visuaalisesti houkuttelevan taustan.
  - **display: flex;**: Flexbox käytetään sisällön asettamiseen helposti sivulla.
  - **justify-content: center;**: Keskittää kontainerin vaakasuunnassa.
  - **align-items: center;**: Keskittää kontainerin pystysuunnassa.
  - **height: 100vh;**: Varmistaa, että sisältö täyttää koko näkymäkorkeuden, jolloin sovellus on keskitetty näytön koosta riippumatta.
  - **margin: 0;**: Poistaa oletusmarginaalit sivun ympäriltä, jotta asettelu on siistimpi ja paremmin keskitetty.

## 2. .container

- **Mitä se on**: Tämä määrittää pääkontainerin, joka sisältää Weather Appin sisällön.
- **Tärkeät ominaisuudet**:
  - **background: white;:** Valkoinen tausta tarjoaa kontrastia gradienttia vasten.
  - **padding: 30px;**: Lisää sisätilaa (padding) kontaineriin, jotta sisältö ei ole liian tiivistä.
  - **border-radius: 15px;**: Tämä tekee kontainerin kulmista pyöristetyt, mikä on yleinen suunnittelutrendi moderneissa käyttöliittymissä.
  - **box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);**: Lisää varjon kontainerin ympärille, joka luo hienovaraisen 3D-efektin ja saa sen näyttämään koholla taustasta.
  - **width: 350px;**: Kontainerin kiinteä leveys 350 pikseliä takaa yhtenäisyyden eri laitteilla.
  - **text-align: center;**: Keskittää kaiken tekstin kontainerin sisällä.
  - **animation: fadeIn 1s ease-in-out;**: Luo sisäänfadausanimaation sovelluksen latautuessa, jolloin se näkyy pehmeämmin.
  - **transition: all 0.3s ease;**: Tämä mahdollistaa pehmeät siirtymät kontainerissa, kun tapahtuu muutoksia (esim. hover-efektit).

## 3. .container:hover

- **Mitä se on**: Tämä määrittää tyylit, kun käyttäjä vie hiiren kontainerin päälle.
- **Tärkeä ominaisuus**:
  - **transform: scale(1.02);**: Suurentaa kontaineria hieman, kun käyttäjä vie hiiren sen päälle, mikä luo hienovaraisen interaktiivisen efektin.

## 4. h1

- **Mitä se on**: Määrittää sivun pääotsikon (&lt;h1>) tyylit.
- **Tärkeät ominaisuudet**:
  - **font-size: 2em;**: Asettaa suuremman fonttikoon, jotta otsikko erottuu paremmin.
  - **margin-bottom: 20px;**: Lisää tilaa otsikon alle erottaakseen sen lomakkeesta.
  - **color: #333;**: Käyttää tummanharmaata väriä paremman kontrastin ja luettavuuden saavuttamiseksi.

## 5. form

- **Mitä se on**: Määrittää &lt;form>-elementin tyylit, joka ympäröi syöttökentän ja painikkeen.
- **Tärkeät ominaisuudet**:
  - **display: flex;**: Flexbox käytetään elementtien asetteluun lomakkeen sisällä.
  - **flex-direction: column;**: Asettaa lomakkeen elementit pystysuoraan (yksi toisen päälle).
  - **align-items: center;**: Keskittää lomakkeen elementit vaakasuunnassa.
  - **margin-bottom: 20px;**: Lisää tilaa lomakkeen alle erottaakseen sen sääinformaatiosta.

## 6. input[type="text"]

- **Mitä se on**: Määrittää syöttökentän tyylit, johon käyttäjä syöttää kaupunkinimen.
- **Tärkeät ominaisuudet**:
  - **width: 100%;**: Tekee syöttökentästä lomakekontainerin levyisen, jolloin se näyttää yhtenäiseltä ja tasapainoiselta painikkeen kanssa.
  - **padding: 12px;**: Lisää täytettä sisälle, mikä parantaa tekstin luettavuutta.
  - **border: 1px solid #ccc;**: Lisää vaaleanharmaan reunuksen syöttökenttään.
  - **border-radius: 6px;**: Pyöristää syöttökentän kulmat vastaamaan sovelluksen yleistä tyyliä.
  - **margin-bottom: 15px;**: Lisää tilaa syöttökentän alle erottaakseen sen painikkeesta.
  - **box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);**: Lisää pehmeän varjon syöttökentän ympärille, mikä tekee siitä näkyvämmän ja luo hienovaraisen 3D-efektin.
  - **transition: border-color 0.3s ease;**: Varmistaa, että reunuksen väri muuttuu sujuvasti, kun kenttä on aktiivinen.

## 7. input[type="text"]:focus

- **Mitä se on**: Tämä määrittää tyylit, kun syöttökenttä on aktiivinen (käyttäjä klikkaa tai aktivoi sen).
- **Tärkeät ominaisuudet**:
  - **border-color: #28a745;**: Muuttaa reunuksen värin vihreäksi, kun syöttökenttä on aktiivinen, mikä antaa visuaalista palautetta käyttäjälle.
  - **outline: none;**: Poistaa oletusselaimen rajauksen, jolloin muotoilu on siistimpi.

## 8. button

- **Mitä se on**: Määrittää painikkeen tyylit, jota käytetään lomakkeen lähettämiseen.
- **Tärkeät ominaisuudet**:
  - **width: 100%;**: Painike ottaa täyden leveyden lomakkeessa vastaamaan syöttökentän leveyttä.
  - **padding: 12px 24px;**: Lisää täytettä painikkeeseen, mikä tekee siitä helpommin klikattavan ja visuaalisesti tasapainoisen.
  - **border: none;**: Poistaa oletuspainikkeen reunuksen puhtaamman ulkoasun saavuttamiseksi.
  - **background-color: #28a745;**: Asettaa painikkeen taustaväriksi vihreän, mikä viittaa positiiviseen toimintaan (lähetys).
  - **color: white;**: Asettaa tekstin väriksi valkoisen hyvän kontrastin saavuttamiseksi vihreää taustaa vasten.
  - **border-radius: 6px;**: Pyöristää painikkeen kulmat modernin muotoilun saavuttamiseksi.
  - **cursor: pointer;**: Muuttaa kursorin osoittimeksi, kun käyttäjä vie hiiren painikkeen päälle, mikä osoittaa, että se on klikattavissa.
  - **transition: background-color 0.3s ease;**: Tekee painikkeen taustavärin muutoksesta sujuvan, kun sitä viedään hiiren päälle.
  - **box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);**: Lisää varjon painikkeeseen, mikä antaa sille kelluvan efektin.

## 9. Button:hover

- **Mitä se on**: Tämä määrittää tyylit, kun painikkeen päälle viedään hiiri.
- **Tärkeä ominaisuus**:
  - **background-color: #218838;**: Tummenee painikkeen taustaväri, kun sen päälle viedään hiiri, mikä antaa käyttäjälle visuaalista palautetta.

## 10. .weather-info

- **Mitä se on**: Määrittää &lt;div>-elementin tyylit, jossa sääinformaatio näytetään.
- **Tärkeät ominaisuudet**:
  - **margin-top: 20px;**: Lisää tilaa lomakkeen ja sääinformaation väliin.
  - **font-size: 1.1em;**: Suurentaa hieman tekstikokoa luettavuuden parantamiseksi.
  - **color: #333;**: Käyttää tummanharmaata tekstiä hyvän kontrastin saavuttamiseksi.
  - **opacity: 0;**: Piilottaa sääinformaation aluksi (se haetaan näkyviin, kun data on saatavilla).
  - **transition: opacity 0.3s ease-in-out;**: Varmistaa, että näkyvyys siirtyy sujuvasti, kun sääinformaatio tulee näkyviin.

## 11. .weather-info.visible

- **Mitä se on**: Tämä luokka lisätään, kun sääinformaatio on saatavilla ja näytetään.
- **Tärkeä ominaisuus**:
  - **opacity: 1;**: Tekee sääinformaation täysin näkyväksi.

## 12. .weather-info p

- **Mitä se on**: Määrittää sääinformaation sisällä olevien kappaleiden (&lt;p>) tyylit.
- **Tärkeä ominaisuus**:
  - **margin: 5px 0;**: Lisää pystysuoraa tilaa kunkin säädatan osan väliin, jotta ne ovat helpommin luettavissa.

## 13. @keyframes fadeIn

- **Mitä se on**: Määrittelee avainkehysanimaation kontainerille, kun sovellus latautuu.
- **Tärkeät ominaisuudet**:
  - **from { opacity: 0; transform: translateY(20px); }**: Aluksi kontainer on näkymätön (opacity: 0) ja sijoitettu 20 pikseliä alemmaksi lopullisesta sijainnistaan.
  - **to { opacity: 1; transform: translateY(0); }**: Kontainer tulee täysin näkyväksi (opacity: 1) ja siirtyy lopulliseen paikkaansa.
- **Tarkoitus**: Tämä luo pehmeän sisäänfadaus-efektin, kun sovellus latautuu, mikä parantaa käyttökokemusta.

# JavaScript Selitys

## 1. document.addEventListener('DOMContentLoaded', () => { ... });

- **Mitä se on**: Tämä rivi lisää tapahtumankuuntelijan, joka odottaa, että koko DOM (Document Object Model) latautuu ennen kuin se suorittaa JavaScript-koodia.
- **Tarkoitus**: Se varmistaa, että JavaScript-koodi käsittelee HTML-elementtejä vasta, kun ne on täysin ladattu.
- **Keskeinen yksityiskohta**: 'DOMContentLoaded' -tapahtuma laukeaa, kun HTML on täysin parsittu, mikä tarkoittaa, että JavaScript voi turvallisesti aloittaa elementtien käsittelyn.

## 2. const weatherForm = document.getElementById('weather-form');

- **Mitä se on**: Tämä valitsee lomake-elementin, johon käyttäjät syöttävät kaupungin nimen.
- **Tarkoitus**: Tarvitsemme tämän lomakkeen viittauksen kuunnellaksemme lomakkeen lähetyksiä, jotka käynnistävät säätietojen hakuprosessin.
- **Keskeinen yksityiskohta**: Käyttämällä document.getElementById() voimme hakea tiettyjä elementtejä niiden id:n perusteella.

## 3. const cityInput = document.getElementById('city-input');

- **Mitä se on**: Tämä valitsee syöttökentän, johon käyttäjät kirjoittavat kaupungin nimen.
- **Tarkoitus**: Tämä syöttökenttä tallentaa kaupungin nimen, joka lähetetään sää-API
- **Keskeinen yksityiskohta**: Tämä syöttökenttä käyttää value-ominaisuutta noutaakseen käyttäjän kirjoittaman tekstin.

## 4. const weatherInfo = document.getElementById('weather-info');

- **Mitä se on**: Tämä valitsee div-elementin, johon säätiedot näytetään.
- **Tarkoitus**: Tämä kontainer sisältää API:sta haetut säätiedot, kuten lämpötilan ja kosteuden.
- **Keskeinen yksityiskohta**: Syötämme säätiedot dynaamisesti tähän elementtiin JavaScriptin avulla.

## 5. const apiKey = 'your_api_key_here';

- **Mitä se on**: Tämä tallentaa API-avaimen, joka tarvitaan sääpalvelun käyttämiseen.
- **Tarkoitus**: API-avain on tarpeen, jotta voimme hakea todennuspyynnöt OpenWeatherMap-API:sta
- **Keskeinen yksityiskohta**: Korvaa 'your_api_key_here' omalla API-avaimellasi, jonka saat OpenWeatherMap-palvelusta.

## 6. const apiBaseUrl = '[https://api.openweathermap.org/data/2.5/weather](https://api.openweathermap.org/data/2.5/weather)';

- **Mitä se on**: Tämä tallentaa sää-APIn perus-URL-osoitteen.
- **Tarkoitus**: Se toimii lähtökohtana API-pyynnön rakentamiselle, johon lisätään kaupunki ja API-avain.
- **Keskeinen yksityiskohta**: API-URL sisältää parametreja, kuten kaupungin nimi ja yksiköt (tässä tapauksessa celsius).

# Säätietojen hakeminen

## 7. function fetchWeather(city) { ... }

- **Mitä se on**: Tämä funktio käsittelee pyynnön lähettämistä OpenWeatherMap-API:lle saadakseen säätiedot määritetylle kaupungille.
- **Tarkoitus**: Se hakee säätiedot rakentamalla täyden API-URL-osoitteen ja lähettämällä pyynnön.
- **Keskeinen yksityiskohta**: Funktio käyttää fetch()-metodia tietojen hakemiseen API asynkronisesti, mikä sallii sivun jatkaa toimintaansa odottaessaan API-vastausta.

## 8. const apiUrl = `${apiBaseUrl}?q=${city}&appid=${apiKey}&units=metric`;

- **Mitä se on**: Tämä rakentaa täyden API-URL-osoitteen yhdistämällä perus-URL:n, kaupungin nimen, API-avaimen ja määrittämällä lämpötilayksiköksi celsius.
- **Tarkoitus**: Tätä URL-osoitetta käytetään pyynnön tekemiseen sää-API:lle tietyn kaupungin osalta.
- **Keskeinen yksityiskohta**: ${city} ja ${apiKey} korvataan dynaamisesti käyttäjän syöttämällä kaupungin nimellä ja API-avaimellasi.

## 9. fetch(apiUrl).then(response => { ... })

- **Mitä se on**: Tämä lähettää pyynnön sää-API:lle ja odottaa vastausta.
- **Tarkoitus**: fetch()-metodi lähettää GET-pyynnön API:lle saadakseen säätiedot.
- **Keskeinen yksityiskohta**: fetch() palauttaa lupauksen, joka ratkaistaan, kun vastaus on vastaanotettu. Jos vastaus on onnistunut, sitä käsitellään edelleen.

## 10. if (!response.ok) { throw new Error('City not found'); }

- **Mitä se on**: Tämä tarkistaa, oliko API-vastaus onnistunut (tilakoodi 200–299).
- **Tarkoitus**: Se varmistaa, että kaupunki on olemassa, ja jos ei, se heittää virheen viestillä 'City not found'.
- **Keskeinen yksityiskohta**: Jos kaupunkia ei löydy, virhe näytetään weatherInfo-osiossa.

## 11. return response.json();

- **Mitä se on**: Tämä muuntaa APIn vastauksen JSON-objektiksi.
- **Tarkoitus**: API palauttaa tiedot JSON-muodossa, joten se muunnetaan JavaScript-objektiksi, jota voidaan helposti käsitellä.
- **Keskeinen yksityiskohta**: response.json() palauttaa myös lupauksen, jota käsitellään seuraavassa .then()-kohdassa.

## 12. .catch(error => { ... })

- **Mitä se on**: Tämä käsittelee mahdolliset virheet, joita tapahtuu API-pyynnön aikana, kuten jos kaupunkia ei löydy.
- **Tarkoitus**: Jos virhe tapahtuu, se käsitellään tässä ja virheviesti näytetään käyttäjälle.
- **Keskeinen yksityiskohta**: Virheviesti näytetään weatherInfo-kontainerissa, ja visible-luokka lisätään, jotta viesti tulee näkyviin.

# Säätietojen näyttäminen

## 13. function displayWeather(data) { ... }

- **Mitä se on**: Tämä funktio ottaa APIn palauttamat säätiedot ja näyttää ne sivulla.
- **Tarkoitus**: Se luo dynaamisesti HTML-sisällön, joka näyttää kaupungin nimen, lämpötilan, sääkuvauksen, kosteuden ja tuulen nopeuden.
- **Keskeinen yksityiskohta**: innerHTML-ominaisuutta käytetään syöttämään säätiedot weatherInfo-kontaineriin.

## 14. const cityName = data.name;

- **Mitä se on**: Tämä noutaa kaupungin nimen API-vastauksesta.
- **Tarkoitus**: Kaupungin nimi näytetään, jotta käyttäjä tietää, minkä kaupungin säätietoja näytetään.
- **Keskeinen yksityiskohta**: data.name hakee kaupungin nimen APIn JSON-vastauksen nimi-ominaisuudesta.

## 15. const temperature = data.main.temp;

- **Mitä se on**: Tämä noutaa lämpötilan API-vastauksesta.
- **Tarkoitus**: Lämpötila (celsiusasteina) näytetään osana säätietoja.
- **Keskeinen yksityiskohta**: data.main.temp hakee lämpötilan main-objektista API-vastauksessa.

## 16. weatherInfo.innerHTML = ...

- **Mitä se on**: Tämä asettaa weatherInfo-divin sisällön näyttämään säätiedot.
- **Tarkoitus**: Tämä näyttää kaupungin nimen, lämpötilan, sääkuvauksen, kosteuden ja tuulen nopeuden käyttäjäystävällisessä muodossa.
- **Keskeinen yksityiskohta**: HTML luodaan dynaamisesti APIn palauttamien tietojen perusteella.

## 17. weatherInfo.classList.add('visible');

- **Mitä se on**: Tämä lisää visible-luokan weatherInfo-diviin.
- **Tarkoitus**: Se tuo säätiedot näkyville sivulle pehmeällä fade-in-efektillä.
- **Keskeinen yksityiskohta**: visible-luokka laukaisee CSS-siirtymän, joka haalentaa sisällön esiin.

# Lomakkeen lähettämisen käsittely

## 18. weatherForm.addEventListener('submit', (event) => { ... });

- **Mitä se on**: Tämä lisää tapahtumankuuntelijan lomakkeeseen, joka kuuntelee submit-tapahtumaa.
- **Tarkoitus**: Kun käyttäjä lähettää lomakkeen (klikkaamalla "Get Weather" -painiketta), tämä kuuntelija käynnistää funktio, joka hakee säätiedot.
- **Keskeinen yksityiskohta**: Sieppaamme lomakkeen lähetyksen käsitelläksemme sen kokonaan JavaScriptin avulla ilman sivun uudelleenlatausta.

## 19. event.preventDefault();

- **Mitä se on**: Tämä estää lomakkeen oletustoiminnon, joka on sivun uudelleenlataaminen lähetyksen yhteydessä.
- **Tarkoitus**: Estämällä oletustoiminnon voimme käsitellä lomakkeen lähetyksen JavaScriptilla ja päivittää sisällön dynaamisesti.
- **Keskeinen yksityiskohta**: Ilman tätä sivu latautuisi uudelleen, tyhjentäen syötteen ja mahdolliset näytetyt säätiedot.

## 20. const city = cityInput.value.trim();

- **Mitä se on**: Tämä noutaa käyttäjän syöttämän kaupungin nimen ja poistaa mahdolliset ylimääräiset välilyönnit.
- **Tarkoitus**: Se tallentaa kaupungin nimen, jota käyttäjä haluaa hakea.
- **Keskeinen yksityiskohta**: .trim() poistaa tarpeettomat välilyönnit varmistaakseen, että syöte on siisti.

## 21. if (city) { fetchWeather(city); } else { ... }

- **Mitä se on**: Tämä tarkistaa, onko käyttäjä syöttänyt kelvollisen kaupungin nimen.
- **Tarkoitus**: Jos kaupungin nimi on syötetty, fetchWeather()-funktio kutsutaan hakemaan säätiedot. Jos ei, virheviesti näytetään.
- **Keskeinen yksityiskohta**: Tämä estää sovellusta yrittämästä hakea säätietoja tyhjälle tai virheelliselle kaupungin nimelle.
