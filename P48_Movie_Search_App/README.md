# Nettisivu: https://keudaope.github.io/JSProjekteja/P48_Movie_Search_App

# Johdanto

Elokuvahakusovellus antaa käyttäjien hakea tietoja elokuvista ja näyttää tulokset elokuva-API:n avulla. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla, kun he oppivat käsittelemään API-pyyntöjä, prosessoimaan JSON-dataa ja päivittämään DOM:indynaamisesti. Käyttäjät voivat syöttää elokuvan nimen, ja sovellus hakee ja näyttää tietoja, kuten elokuvan nimen, julkaisupäivän, juonen ja julisteen.

# HTML Explanation

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

**Mikä se on:** <code><</code>!DOCTYPE html> -määrittely määrittelee asiakirjan tyypiksi HTML5:n.  
**Tarkoitus:** Varmistaa, että selain näyttää verkkosivun modernien HTML5-standardien mukaisesti, välttäen "quirks mode" -tilan ja varmistaen yhteensopivuuden selainten välillä.  
**Tärkeä yksityiskohta:** Lisää aina DOCTYPE-määrittely HTML-asiakirjojen alkuun, jotta selain käyttäytyy johdonmukaisesti kaikissa ympäristöissä.

## 2. HTML Tag (<code><</code>html lang="en">):

**Mikä se on:** <code><</code>html>-tagi on asiakirjan juurielementti, joka sisältää kaikki verkkosivun sisällöt. Lang="en" -attribuutti määrittää asiakirjan kielen englanniksi.  
**Tarkoitus:** Kielen määrittäminen auttaa saavutettavuustyökaluja, kuten ruudunlukijoita, ja on hyödyllinen hakukoneoptimoinnin (SEO) kannalta.  
**Tärkeä yksityiskohta:** Määritä aina asiakirjan kieli <code><</code>html>-tagissa, jotta sivustosta tulee saavutettavampi ja hakukoneystävällisempi.

## 3. Head Tag (<code><</code>head>):

**Mikä se on:** <code><</code>head>-elementti sisältää metatiedot ja resurssit, jotka eivät ole suoraan näkyvissä sivulla, kuten CSS-linkit, JavaScript-tiedostot ja muut metatiedot.  
**Tarkoitus:** Se auttaa selainta ymmärtämään, kuinka asiakirjaa käsitellään ennen sisällön näyttämistä, mukaan lukien tyylien asettaminen, ulkoisten resurssien lataaminen ja koodauksen määrittäminen.  
**Tärkeät yksityiskohdat:**

- **Meta Charset (<code><</code>meta charset="UTF-8">):** Määrittää, että asiakirjassa käytetään UTF-8-merkistöä, joka tukee laajaa valikoimaa merkkejä.
- **Viewport Meta Tag (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">):** Varmistaa, että sivu on responsiivinen mukauttamalla sen leveys laitteen näytön kokoon.
- **Title Tag (<code><</code>title>Movie Search App<code><</code>/title>):** Asettaa sivun otsikon, joka näkyy selaimen välilehdessä ja parantaa hakukoneoptimointia.

## 4. Body Tag (<code><</code>body>):

**Mikä se on:** <code><</code>body>-elementti sisältää kaiken verkkosivun näkyvän sisällön, mukaan lukien elokuvahaun lomakkeen ja tulokset.  
**Tarkoitus:** Kaikki, mitä käyttäjä näkee ja minkä kanssa vuorovaikuttaa, kuten teksti, painikkeet ja hakutulokset, on sijoitettu <code><</code>body>-tagiin.  
**Tärkeä yksityiskohta:** Sivun runkoa tyylitellään CSS:n avulla, jotta saadaan aikaan visuaalisesti houkutteleva asettelu sekä varmistetaan oikeat välit ja kohdistus.

## 5. Container Div (<code><</code>div class="container">):

**Mikä se on:** Kontti <code><</code>div> ryhmittelee kaikki sovelluksen elementit, mukaan lukien otsikon, tekstikentän, painikkeen ja elokuvatulokset.  
**Tarkoitus:** Se tarjoaa rakenteellisen asettelun ja helpottaa yhtenäisen tyylin soveltamista koko sisältöön CSS:n avulla.  
**Tärkeä yksityiskohta:** Konttiin sovelletaan CSS:n kautta tyylejä, kuten täyttöä, taustaa ja pyöristettyjä kulmia, jolloin se erottuu visuaalisesti taustasta ja on keskitettynä sivulla.

## 6. Heading Element (<code><</code>h1>Movie Search App<code><</code>/h1>):

**Mikä se on:** <code><</code>h1>-elementti toimii verkkosivun pääotsikkona ja näyttää otsikon "Movie Search App".  
**Tarkoitus:** Otsikko antaa käyttäjille selkeän käsityksen sivun tarkoituksesta ja parantaa saavutettavuutta sekä hakukoneoptimointia tarjoamalla ylimmän tason otsikon.  
**Tärkeä yksityiskohta:** <code><</code>h1>-tagi on tärkein otsikkotaso ja sitä tulisi käyttää sivun pääotsikossa, johon sovelletaan CSS:n kautta tyylejä ulkoasun hallitsemiseksi.

## 7. Input Field (<code><</code>input type="text" id="movie-input" placeholder="Enter movie name">):

**Mikä se on:** Syöttökenttä (<code><</code>input>), johon käyttäjät voivat kirjoittaa elokuvan nimen, jota he haluavat hakea.  
**Tarkoitus:** Se sallii käyttäjien syöttää tietoja (elokuvan nimi), joita sovellus käsittelee.  
**Tärkeä yksityiskohta:** Placeholder-attribuutti antaa käyttäjille vihjeen siitä, mitä kenttään syötetään, kun taas id="movie-input" mahdollistaa JavaScriptin vuorovaikutuksen tämän kentän kanssa.

## 8. Search Button (<code><</code>button id="search-movie-button">Search Movie<code><</code>/button>):

**Mikä se on:** Painike-elementti, joka laukaisee haun toiminnallisuuden, kun sitä napsautetaan JavaScriptin avulla.  
**Tarkoitus:** Se tarjoaa vuorovaikutteisen elementin, joka käynnistää elokuvan haun, kun käyttäjä napsauttaa sitä.  
**Tärkeä yksityiskohta:** Painikkeella on id="search-movie-button", jota käytetään JavaScriptissä klikkaustoiminnon lisäämiseksi.

## 9. Movie Display Div (<code><</code>div class="movie" id="movie"><code><</code>/div>):

**Mikä se on:** <code><</code>div>-elementti, joka täyttyy elokuvan tiedoilla, kun haku suoritetaan.  
**Tarkoitus:** Se toimii säiliönä dynaamiselle sisällölle, kuten elokuvan julisteelle, nimelle, julkaisupäivälle, lajityypille ja juonelle, jotka haetaan OMDB-API:sta.  
**Tärkeä yksityiskohta:** Aluksi tämä <code><</code>div> on tyhjä, ja se täyttyy dynaamisesti elokuvatiedoilla JavaScriptin avulla onnistuneen haun jälkeen.

## 10. Script Tag (<code><</code>script src="app.js"><code><</code>/script>):

**Mikä se on:** <code><</code>script>-tagi linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää elokuvan tietojen hakemiseen ja näyttämiseen liittyvän logiikan.  
**Tarkoitus:** Se erottaa JavaScript-toiminnallisuuden HTML-rakenteesta, pitäen koodin puhtaana, modulaarisena ja helposti ylläpidettävänä.  
**Tärkeä yksityiskohta:** Script-tagi on sijoitettu body-osan loppuun, jotta sivun sisältö latautuu ennen JavaScriptin suorittamista, mikä varmistaa sujuvan vuorovaikutuksen.

# CSS Explanation

## 1. Global Styling for Body (body):

- **Mikä se on:** Tämä sääntö määrittää koko sivun ulkoasun ja asettelun tyylittämällä <code><</code>body>-elementin.
- **Tärkeät ominaisuudet:**
  - **font-family: Arial, sans-serif;**: Määrittää selkeän, modernin fontin (Arial) kaikelle tekstille, ja käyttää sans-serif-fonttia, jos Arial ei ole saatavilla.
  - **background-color: #f0f0f0;**: Tarjoaa vaaleanharmaan taustan, joka luo kontrastin valkoisen kontin kanssa, tarjoten neutraalin ja hillityn ilmeen.
  - **display: flex;**: Käyttää Flexbox-asettelua sisällön kohdistamiseen pystysuunnassa ja vaakasuunnassa sivun keskelle.
  - **flex-direction: column;**: Varmistaa, että body-elementin sisällä olevat elementit (esim. kontti) on järjestetty pystysuoraan sarakkeeseen.
  - **align-items: center;**: Kohdistaa kaikki elementit vaakasuunnassa katseluikkunan sisälle.
  - **padding: 20px;**: Lisää tilaa sivun reunojen ja sisällön välille, estäen sisällön ahtautumisen.
  - **margin: 0;**: Poistaa oletusmarginaalit, jotka selaimet lisäävät, varmistaen johdonmukaisen tilan eri laitteissa.
- **Tarkoitus:** Nämä tyylit keskittävät pääsisällön sekä pystysuunnassa että vaakasuunnassa ja luovat puhtaan, modernin taustan, jossa on hyvä tilankäyttö sovelluksen ympärillä.

## 2. Container Styling (.container):

- **Mikä se on:** .container-luokka tyylittää pääkotelon, joka sisältää elokuvahakulomakkeen ja tulokset.
- **Tärkeät ominaisuudet:**
  - **background: white;**: Asettaa taustavärin valkoiseksi, mikä kontrastoi vaaleanharmaan body-taustan kanssa ja tekee sisällöstä erottuvan.
  - **padding: 20px;**: Lisää sisäistä tilaa kontin sisälle varmistaen, että sisältö on hyvin erillään reunoista.
  - **border-radius: 8px;**: Pyöristää kontin kulmat, antaen sille pehmeän ja modernin ilmeen.
  - **box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);**: Lisää pehmeän varjon kontin ympärille, antaen sille syvyyttä ja saaden sen näyttämään kohotetulta taustasta.
  - **text-align: center;**: Varmistaa, että kaikki kontin sisällä oleva teksti on keskitetty vaakasuunnassa.
  - **width: 400px;**: Asettaa kontin kiinteän leveyden, varmistaen kompaktin asettelun.
  - **max-width: 100%;**: Varmistaa, että kontti pysyy responsiivisena pienemmillä näytöillä, mukautuen käytettävissä olevaan tilaan.
- **Tarkoitus:** .container-tyylitys antaa sovellukselle korttimaisen ulkoasun, jossa on valkoinen tausta, täyttöä ja pyöristetyt kulmat, varmistaen sovelluksen puhtaan, modernin ja keskitetyn ulkoasun sivulla.

## 3. Heading Styling (h1):

- **Mikä se on:** Tämä sääntö koskee <code><</code>h1>-otsikkoelementin tyyliä.
- **Tärkeät ominaisuudet:**
  - **margin-bottom: 20px;**: Lisää tilaa otsikon alle, erottamalla sen syöttökentästä ja painikkeesta, varmistaen hyvän pystysuuntaisen tilankäytön.
- **Tarkoitus:** Otsikko on visuaalisesti erotettu syöttökentästä ja painikkeesta, säilyttäen puhtaan ja helposti luettavan asettelun.

## 4. Input Field Styling (input[type="text"]):

- **Mikä se on:** Tämä sääntö koskee syöttökenttää, johon käyttäjät kirjoittavat elokuvan nimen.
- **Tärkeät ominaisuudet:**
  - **padding: 10px;**: Lisää täytettä syöttökentän sisälle, tehden siitä mukavamman käyttää ja helpomman vuorovaikuttaa.
  - **margin-bottom: 10px;**: Lisää tilaa syöttökentän alle, erottamalla sen muista elementeistä (esim. painikkeesta), varmistaen hyvin tilaan järjestetyn asettelun.
  - **width: calc(100% - 22px);**: Varmistaa, että syöttökenttä vie koko kontin leveyden, lukuun ottamatta tilaa täytteelle ja reunuksille.
  - **border: 1px solid #ccc;**: Lisää vaaleanharmaan reunuksen syöttökentän ympärille, antaen sille selkeän määritelmän.
  - **border-radius: 4px;**: Pyöristää hieman syöttökentän kulmat, antaen sille modernin ja viimeistellyn ulkoasun.
- **Tarkoitus:** Nämä tyylit varmistavat, että syöttökenttä on helppokäyttöinen, visuaalisesti erottuva ja hyvin sijoitettu kontin sisälle.

## 5. Button Styling (button):

- **Mikä se on:** Tämä sääntö koskee "Search Movie" -painikkeen tyyliä.
- **Tärkeät ominaisuudet:**
  - **padding: 10px 20px;**: Lisää tilaa painikkeen sisälle, tehden siitä suuremman ja helpomman napsauttaa.
  - **border: none;**: Poistaa oletusarvoisen reunuksen, luoden puhtaamman ja modernimman ilmeen.
  - **background-color: #007bff;**: Asettaa painikkeen taustavärin kirkkaan siniseksi, jolloin se erottuu interaktiivisena elementtinä.
  - **color: white;**: Varmistaa, että painikkeen teksti on valkoinen, luoden kontrastin ja tehden siitä helposti luettavan sinistä taustaa vasten.
  - **border-radius: 4px;**: Pyöristää hieman painikkeen kulmia, jolloin se sopii sovelluksen moderniin ulkoasuun.
  - **cursor: pointer;**: Muuttaa kursorin osoittimeksi, kun käyttäjä leijuu painikkeen päällä, osoittaen, että se on napsautettavissa.
- **Tarkoitus:** Painikkeen tyylitys varmistaa, että se erottuu visuaalisesti, on helposti napsautettavissa ja sillä on moderni ulkoasu, joka täydentää sovelluksen yleistä suunnittelua.

## 6. Button Hover Effect (button:hover):

- **Mikä se on:** Tämä sääntö muotoilee painikkeen, kun käyttäjä leijuu sen päällä hiirellä.
- **Tärkeät ominaisuudet:**
  - **background-color: #0056b3;**: Tummentaa painikkeen taustaväriä, kun käyttäjä leijuu sen päällä, tarjoten visuaalista palautetta vuorovaikutuksesta.
- **Tarkoitus:** Hover-efekti parantaa sovelluksen interaktiivisuutta tarjoamalla välitöntä palautetta, kun käyttäjä vuorovaikuttaa painikkeen kanssa.

## 7. Movie Section Styling (.movie):

- **Mikä se on:** .movie-luokka muotoilee osion, jossa elokuvan tiedot näytetään haun jälkeen.
- **Tärkeät ominaisuudet:**
  - **margin-top: 20px;**: Lisää tilaa elokuvan tietojen yläpuolelle, erottaen sen syöttökentästä ja painikkeesta, varmistaen puhtaan asettelun.
  - **text-align: left;**: Kohdistaa elokuvan tietojen tekstin vasemmalle, luoden luonnollisemman lukusuunnan.
- **Tarkoitus:** Nämä tyylit varmistavat, että elokuvan tiedot ovat visuaalisesti erillään hakulomakkeesta ja niillä on helposti luettava asettelu.

## 8. Movie Image Styling (.movie img):

- **Mikä se on:** Tämä sääntö muotoilee hakutuloksissa näytettävän elokuvan julistekuvan.
- **Tärkeät ominaisuudet:**
  - **max-width: 100%;**: Varmistaa, että kuva on responsiivinen eikä ylitä kontin leveyttä.
  - **border-radius: 8px;**: Pyöristää kuvan kulmat, antaen sille pehmeämmän ja modernin ilmeen.
- **Tarkoitus:** Nämä tyylit varmistavat, että elokuvan juliste on hyvin suhteutettu, sopii asetteluun ja sillä on viimeistelty, moderni ulkoasu.

## 9. Movie Details Section (.movie-details):

- **Mikä se on:** .movie-details-luokka tyylittää osion, jossa näytetään elokuvan nimi, julkaisupäivä, lajityyppi ja juoni.
- **Tärkeät ominaisuudet:**
  - **margin-top: 10px;**: Lisää tilaa elokuvan julisteen ja tekstin välille, varmistaen puhtaan asettelun.
- **Tarkoitus:** Tämä tila varmistaa, että tekstin yksityiskohdat ovat visuaalisesti erillään kuvasta, tehden asettelusta helpommin luettavan.

## 10. Movie Title Styling (.movie-details h2):

- **Mikä se on:** Tämä sääntö koskee elokuvan nimen tyyliä.
- **Tärkeät ominaisuudet:**
  - **margin: 0;**: Poistaa oletusmarginaalit nimestä, pitäen sen tiiviinä muiden tietojen kanssa.
- **Tarkoitus:** Varmistaa, että nimi sopii siististi asetteluun ilman tarpeetonta tilaa.

## 11. Movie Details Paragraph Styling (.movie-details p):

- **Mikä se on:** Tämä sääntö koskee kappaleita, jotka näyttävät elokuvan julkaisupäivän, lajityypin ja juonen.
- **Tärkeät ominaisuudet:**
  - **margin: 5px 0;**: Lisää pienet pystysuuntaiset välit jokaisen kappaleen väliin varmistaen luettavuuden ilman liikaa tilaa.
- **Tarkoitus:** Nämä tyylit varmistavat, että elokuvan tiedot ovat hyvin sijoitettuja ja helposti luettavissa.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener

- **Mikä se on:** Tämä tapahtumakuuntelija odottaa, että koko HTML-dokumentti on ladattu ja jäsennelty ennen JavaScript-koodin suorittamista.
- **Tarkoitus:** Se varmistaa, että DOM (Document Object Model) -elementit, kuten painikkeet ja syöttökentät, ovat täysin saatavilla ennen kuin JavaScript yrittää vuorovaikuttaa niiden kanssa.
- **Tärkeä yksityiskohta:** Käärittämällä koko sovelluksen logiikan DOMContentLoaded-tapahtuman sisälle varmistetaan, että sovellus ei yritä vuorovaikuttaa elementtien kanssa, joita ei ole vielä ladattu, välttäen mahdolliset virheet.

## 2. Variables for DOM Elements:

- **Mikä se on:** Muuttujat, kuten movieInput, searchMovieButton ja movieDiv, tallentavat viitteitä tärkeisiin DOM-elementteihin käyttämällä <code>document.getElementById()</code>.
- **Tarkoitus:** Näiden viitteiden tallentaminen helpottaa vuorovaikutusta näiden elementtien kanssa koko skriptin ajan, esimerkiksi hakusanojen hakemisessa tai elokuvanäytön sisällön päivittämisessä.
- **Tärkeä yksityiskohta:** Tämä vaihe yksinkertaistaa koodia luomalla helposti luettavia muuttujia, jotka osoittavat suoraan tarvittaviin keskeisiin elementteihin.

## 3. Event Listener for the Search Button

- **Mikä se on:** Tämä tapahtumakuuntelija kuuntelee "Search Movie" -painikkeen klikkaustapahtumaa ja kutsuu fetchMovie-funktiota, kun painiketta klikataan.
- **Tarkoitus:** Se käynnistää hakuprosessin kutsumalla fetchMovie-funktion, kun käyttäjä klikkaa painiketta, aloittaen API-pyynnön elokuvan tietojen hakemiseksi.
- **Tärkeä yksityiskohta:** Tapahtumakuuntelija yhdistää käyttäjän toiminnan sovelluksen ydintoiminnallisuuteen varmistaen, että elokuvan haku tapahtuu vain, kun painiketta on klikattu.

## 4. Function to Fetch Movie Data (async function fetchMovie() {...}):

- **Mikä se on:** Tämä on asynkroninen funktio, joka tekee API-pyynnön elokuvatietojen hakemiseksi käyttäjän syötteen perusteella.
- **Vaiheet:**
  1.  **Trim the User Input (const movieName = movieInput.value.trim();):**
      - **Mikä se on:** Hakee syöttökenttään kirjoitetun arvon ja poistaa ylimääräiset välilyönnit.
      - **Tarkoitus:** Varmistaa, että sovellus käsittelee kelvollista syötettä, välttäen tarpeettomia API-pyyntöjä tyhjille tai virheellisille arvoille.
  2.  **Check for Empty Input:**
      - **Mikä se on:** Tarkistaa, onko käyttäjä kirjoittanut elokuvan nimen. Jos ei, se näyttää ilmoituksen, jossa kehotetaan syöttämään kelvollinen nimi.
      - **Tarkoitus:** Estää sovellusta tekemästä tarpeettomia API-pyyntöjä, kun syöte on tyhjä.
  3.  **API Request:**
      - **Mikä se on:** Sovellus lähettää fetch-pyynnön OMDB API:lle käyttäjän antaman elokuvan nimen avulla. API palauttaa JSON-objektin, joka sisältää elokuvan tiedot.
      - **Tarkoitus:** Tämä vaihe vastaa reaaliaikaisten elokuvatietojen hakemisesta ulkoisesta lähteestä (OMDB).
      - **Tärkeä yksityiskohta:** API-avain (YOUR_API_KEY) on välttämätön OMDB-palvelun käyttöön, ja pyyntö-URL muodostetaan dynaamisesti käyttäjän syötteen perusteella.
  4.  **Handling the API Response (const data = await response.json();):**
      - **Mikä se on:** Kun vastaus on saatu, tiedot muunnetaan JavaScript-objektiksi käyttämällä <code>.json()</code>.
      - **Tarkoitus:** API-vastauksen muuntaminen JSON-muotoon varmistaa, että sovellus voi helposti käyttää ja näyttää tiedot.
      - **Tärkeä yksityiskohta:** <code>await</code>-avainsanaa käytetään keskeyttämään funktion suoritus, kunnes API-vastaus on täysin vastaanotettu.

## 5. Handling Search Results:

- **Mikä se on:** Saatuaan API-tiedot sovellus tarkistaa, sisältääkö vastaus kelvolliset elokuvatiedot (<code>if (data.Response === "False")</code>).
- **Vaiheet:**
  1.  **If No Movie is Found:**
      - **Mikä se on:** Jos elokuvaa ei löydy, sovellus näyttää viestin ("Movie not found!") movieDiv:ssä.
      - **Tarkoitus:** Antaa käyttäjälle palautetta, jos heidän hakunsa ei tuota mitään tuloksia.
  2.  **If the Movie is Found:**
      - **Mikä se on:** Jos elokuva löytyy, sovellus luo dynaamisesti HTML-elementtejä, joissa näytetään elokuvan juliste, nimi, julkaisupäivä, genre ja juoni.
      - **Tarkoitus:** Tämä vaihe näyttää olennaiset elokuvatiedot verkkosivulla puhtaassa ja luettavassa muodossa.
      - **Tärkeä yksityiskohta:** Sovellus käyttää mallilausekkeita elokuvatietojen lisäämiseksi HTML-rakenteeseen.

## 6. Error Handling (catch(error) {...}):

- **Mikä se on:** Catch-lohko käsittelee mahdolliset virheet, jotka tapahtuvat API-pyynnön aikana, kuten verkko-ongelmat tai epäonnistuneet API-kutsut.
- **Tarkoitus:** Se varmistaa, että sovellus ei kaadu, jos API-pyyntö epäonnistuu, ja tarjoaa käyttäjäystävällisen virheilmoituksen.
- **Tärkeä yksityiskohta:** Virheiden käsittelyn ansiosta sovellus pysyy vakaana ja antaa merkityksellistä palautetta käyttäjälle, jos jotain menee pieleen.

## 7. Movie Display:

- **Mikä se on:** <code>movieDiv.innerHTML</code> käytetään dynaamisesti päivittämään sisällön movieDiv:iin ja näyttämään elokuvatiedot (juliste, nimi, julkaisupäivä jne.).
- **Tarkoitus:** Tämä antaa sovelluksen näyttää elokuvatiedot visuaalisesti houkuttelevalla tavalla.
- **Tärkeä yksityiskohta:** HTML-rakenne luodaan dynaamisesti API-vastauksen perusteella, varmistaen, että elokuvatiedot esitetään heti niiden haun jälkeen.
