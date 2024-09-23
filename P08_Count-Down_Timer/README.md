# Nettisivu: https://keudaope.github.io/JSProjekteja/P08_Count-Down_Timer

# Johdanto

<<<<<<< HEAD
Countdown Timer -sovellus on yksinkertainen mutta hyödyllinen työkalu, joka laskee aikaa alaspäin annetusta ajasta. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla, kun he oppivat käsittelemään aikaan perustuvia tapahtumia, päivittämään DOMin dynaamisesti ja hallitsemaan käyttäjän syötteitä. Käyttäjät voivat asettaa lähtölaskenta-ajan, käynnistää ajastimen ja seurata sen laskemista nollaan.

# HTML Selitys

## 1. DOCTYPE Declaration:

- **Mitä se on**: &lt;!DOCTYPE html> on ohje verkkoselaimelle, joka ilmoittaa, mitä HTML-versiota dokumentti käyttää. Tässä tapauksessa se määrittää HTML5:n .
- **Tarkoitus**: Se varmistaa, että dokumentti renderöidään nykyaikaisten HTML5-standardien mukaisesti ja välttää mahdolliset ongelmat vanhempien selainten "quirks mode" -tilassa.
- **Keskeinen yksityiskohta**: Muista aina sisällyttää DOCTYPE-ilmoitus HTML-dokumentin alkuun rakenteen ja yhteensopivuuden varmistamiseksi.

## 2. HTML Tag:

- **Mitä se on**: &lt;html> elementti kietoo koko HTML-dokumentin ja määrittää HTML-rakenteen juuren.
- **Tarkoitus**: Se toimii säilönä kaikelle sivun sisällölle. lang="en" -attribuutti määrittää, että sisältö on englanniksi, mikä auttaa hakukoneita ja saavutettavuustyökaluja ymmärtämään sivun kielen.
- **Keskeinen yksityiskohta**: Dokumentin kielen määrittäminen on tärkeää hakukoneoptimoinnin (SEO) ja ruudunlukijoita käyttävien käyttäjien kannalta.

## 3. Head Tag:

- **Mitä se on**: &lt;head> elementti sisältää verkkosivun meta-informaation, kuten merkistöasetukset, näkymän asetukset, tyylit ja skriptit.
- **Tarkoitus**: Se tarjoaa selaimelle tärkeitä tietoja ja varmistaa, että dokumentti näytetään oikein eri laitteilla ja kielillä.
- **Keskeiset yksityiskohda**t:
  - **Charset: &lt;meta charset="UTF-8">** määrittää merkistöksi UTF-8, joka tukee lähes kaikkia eri kielten merkkejä.
  - **Viewport: &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">** varmistaa, että verkkosivu on responsiivinen ja sopii eri näyttöjen kokoihin, erityisesti mobiililaitteisiin.
  - **Title: &lt;title>** -elementti määrittää verkkosivun otsikon, joka näkyy selaimen välilehdellä. Tässä tapauksessa "Countdown Timer" on sopiva ja kuvaava.

## 4. Google Fonts Link:

- **Mitä se on**: &lt;link> -elementti sisältää ulkoisen tyylitiedoston Google Fontsista. Tässä tapauksessa se lataa fontin "Poppins".
- **Tarkoitus**: Se mahdollistaa modernin, verkkoturvallisen fontin käytön CSS:ssä ilman, että fonttia tarvitsee asentaa paikallisesti. "Poppins"-fontti valitaan sen puhtaan ja modernin ulkonäön vuoksi.
- **Keskeinen yksityiskohta**: Ulkoisen fontin linkittäminen parantaa typografiaa ja sivun visuaalista ilmettä.

## 5. Body Tag:

- **Mitä se on**: &lt;body> elementti sisältää kaiken näkyvän verkkosivun sisällön, jonka käyttäjä näkee ja vuorovaikuttaa sen kanssa.
- **Tarkoitus**: Body-elementti kietoo koko sivun käyttöliittymän, mukaan lukien ajastinsäilön, lomakkeen ja näytön.
- **Keskeinen yksityiskohta**: Kaikki verkkosivulla näkyvä on sisällytetty &lt;body> elementin sisälle. Sivun muut osat (kuten &lt;head> -elementti) sisältävät metadataa ja asetuksia, kun taas &lt;body> on varattu varsinaiselle sisällölle.

## 6. Main Container (&lt;div class="container">):

- **Mitä se on**: &lt;div> elementti, jossa on luokka "container", käytetään ajastimen sisällön kietomiseen, mukaan lukien lomake ja lähtölaskentanäyttö.
- **Tarkoitus**: Säilö ryhmittelee liittyvän sisällön ja soveltaa ulkoasua ja asettelua. Se myös keskittää sisällön sivulle CSS Flexboxin avulla.
- **Keskeinen yksityiskohta**: Soveltamalla luokkaa container, voimme tyylitellä säilön erikseen CSS-tiedostossa ohjaamaan sen ulkonäköä ja asettelua, kuten pehmusteita, reunojen pyöristämistä ja varjoja.

## 7. Heading (&lt;h1>Countdown Timer&lt;/h1>):

- **Mitä se on**: &lt;h1> elementti on tason yksi otsikko, joka edustaa sivun pääotsikkoa.
- **Tarkoitus**: Se toimii sivun ensisijaisena otsikkona ja on tyylitelty näkyväksi ja houkuttelevaksi. Tässä tapauksessa se yksinkertaisesti näyttää "Countdown Timer" ilmoittaakseen käyttäjille sovelluksen tarkoituksen.
- **Keskeinen yksityiskohta**: &lt;h1> -tagi on tärkeä hakukoneoptimoinnin (SEO) ja saavutettavuuden kannalta, koska se ilmaisee asiakirjan pääotsikon.

## 8. Form Element (&lt;form id="timer-form">):

- **Mitä se on**: &lt;form> elementti, jossa on id "timer-form", käytetään ryhmittelemään syötekenttiä ja lähtölaskennan käynnistyspainiketta.
- **Tarkoitus**: Se mahdollistaa käyttäjän syöttää aika (minuutit ja sekunnit) lähtölaskentaan. Kun se lähetetään, se käynnistää JavaScriptin ajastimen aloittamiseksi.
- **Keskeinen yksityiskohta**: id="timer-form" tekee lomakkeesta helposti viitattavan JavaScriptissä, jossa lähtölaskentatoiminto toteutetaan.

## 9. Input Fields (&lt;input type="number">):

- **Mitä se on**: &lt;input> elementit mahdollistavat käyttäjän syöttää numeerisia arvoja lähtölaskennan minuuteille ja sekunneille.
  - **type="number"** attribuutti rajoittaa syötteen pelkästään numeerisiin arvoihin.
  - **min="0" ja max="59"** attribuutit varmistavat, että syöte on kelvollisissa rajoissa.
- **Tarkoitus**: Nämä kentät keräävät käyttäjän syötteet lähtölaskennan kestoa varten, jotka käsitellään myöhemmin JavaScriptin avulla.
- **Keskeinen yksityiskohta**: Syötteet on rajoitettu kelvollisuuden varmistamiseksi, ja required-attribuutti varmistaa, että molemmat kentät on täytettävä ennen kuin lähtölaskenta voidaan aloittaa.

## 10. Submit Button (&lt;button type="submit">Start Timer&lt;/button>):

- **Mitä se on**: &lt;button> elementti, jossa on type="submit", käytetään käynnistämään lomakkeen lähettäminen, joka aloittaa lähtölaskennan.
- **Tarkoitus**: Kun painiketta napsautetaan, se lähettää lomakkeen ja käynnistää JavaScript-funktion, joka käsittelee lähtölaskentalogiikan.
- **Keskeinen yksityiskohta**: Painike on tyylitelty näyttämään interaktiiviselta, ja siinä on hover-efektit ja värimuutokset. Painikkeen aria-label="Start Countdown" attribuutti parantaa saavutettavuutta tarjoamalla kuvauksen ruudunlukijoille.

## 11. Timer Display (&lt;div class="timer" id="timer">):

- **Mitä se on**: &lt;div> elementti, jossa on id "timer", käytetään näyttämään lähtölaskennan ajastimen arvo, joka alkaa "00:00" arvosta.
- **Tarkoitus**: Tämä osio päivittyy dynaamisesti lähtölaskennan arvoon reaaliajassa ajastimen edetessä.
- **Keskeinen yksityiskohta**: Ajastimen näyttöä manipuloidaan JavaScriptin avulla, päivittämällä sisältöä joka sekunti näyttämään jäljellä olevan ajan. aria-live="polite" attribuutti varmistaa, että ruudunlukijat ilmoittavat ajastimen muutokset.

## 12. JavaScript Link (&lt;script src="app.js">&lt;/script>):

- **Mitä se on**: &lt;script> elementti sisältää ulkoisen JavaScript-tiedoston (app.js), joka sisältää lähtölaskennan toiminnallisuuden.
- **Tarkoitus**: Se lataa JavaScript-koodin, joka käsittelee käyttäjän syötettä, käynnistää lähtölaskennan, päivittää ajastimen näytön ja käsittelee erilaisia vuorovaikutuksia.
- **Keskeinen yksityiskohta**: JavaScript-tiedoston sisällyttäminen body-elementin loppuun varmistaa, että HTML-elementit ovat ladattuja ennen kuin skripti suoritetaan, mikä estää mahdolliset virheet.

# CSS Selitys

## 1. Global Reset (\*):

- **Mikä se on**: \* (yleisvalitsin) kohdistaa kaikkiin sivun elementteihin.
- **Tarkoitus**: Se nollaa kaikkien elementtien oletusmarginaalit ja -pehmusteet varmistaen, että asettelu on yhdenmukainen eri selaimissa.
- **Keskeinen yksityiskohta**: Asettamalla box-sizing: border-box, elementtien leveys ja korkeus sisältävät myös pehmusteet ja reunat, mikä tekee asettelusta helpommin hallittavaa ja ennakoitavampaa.

## 2. Body Styling (body):

- **Mikä se on**: Body-tyylit määrittelevät globaalin ulkoasun ja asettelun koko sivulle.
- **Tarkoitus**:
  - **font-family: 'Poppins', sans-serif;** soveltaa modernin fontin Google Fontsista, parantaen tekstin luettavuutta ja ulkonäköä.
  - **background: linear-gradient(135deg, #74ebd5, #acb6e5);** luo visuaalisesti houkuttelevan liukuvärjätyn taustan, antaen sovellukselle modernin ja raikkaan ilmeen.
  - **display: flex; justify-content: center; align-items: center;** keskittää sisällön (container) sekä vaakasuunnassa että pystysuunnassa sivulle Flexboxin avulla.
  - **height: 100vh;** varmistaa, että body vie koko katselualueen korkeuden, jolloin sisältö on aina pystysuunnassa keskitetty.
- **Keskeinen yksityiskohta**: Flexboxia käytetään sisällön helppoon keskittämiseen sivun keskelle. Liukuvärjätty tausta saa sovelluksen erottumaan ja näyttämään visuaalisesti dynaamiselta.

## 3. Container Styling (.container):

- **Mikä se on**: .container-luokka tyylittää ajastimen sisällön pääsäilön.
- **Tarkoitus**:
  - **background-color: white;** luo puhtaan ja minimalistisen ilmeen ajastinsäilölle, joka erottuu selvästi liukuvärjätyn taustan edessä.
  - **padding: 30px;** tarjoaa sisäistä tilaa, varmistaen, ettei sisältö ole liian lähellä reunoja.
  - **border-radius: 12px**; pyöristää säilön kulmat, antaen sille modernin ja pehmeän ulkonäön.
  - **box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);** lisää hienovaraisen varjon, joka antaa säilölle hieman kohotetun 3D-efektin.
  - **max-width: 400px;** varmistaa, että säilö ei veny liian leveäksi suuremmilla näytöillä, pitäen sen kompaktina.
  - **transition: transform 0.3s ease;** lisää sulavan siirtymän kaikille muunnoksille, kuten suurennukselle hover-tilassa.
- **Keskeinen yksityiskohta**: Pehmusteen, pyöristettyjen kulmien ja varjon yhdistelmä antaa säilölle korttimaisen ulkoasun, mikä on yleinen suunnittelutyyli nykyaikaisissa verkkosovelluksissa.

## 4. Hover Effect on Container (.container: hover):

- **Mikä se on**: Tämä sääntö soveltuu, kun käyttäjä vie hiiren säilön päälle.
- **Tarkoitus**:
- transform: scale(1.05); suurentaa hieman säilöä, kun käyttäjä vie hiiren sen päälle, tarjoten visuaalista palautetta, joka saa sovelluksen tuntumaan interaktiivisemmalta.
- **Keskeinen yksityiskohta**: Hover-efekti luo hienovaraisen suurennuksen, joka antaa säilölle dynaamisen ilmeen ilman, että se on liian häiritsevä.
=======
Ajastinsovellus on yksinkertainen mutta hyödyllinen työkalu, joka laskee aikaa taaksepäin määritetystä ajasta. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla kun he oppivat käsittelemään aikaan perustuvia tapahtumia, päivittämään DOMia dynaamisesti ja hallitsemaan käyttäjän syötteitä. Käyttäjät voivat asettaa ajastinajan, käynnistää ajastimen ja seurata sen laskemista nollaan.

# HTML selitys

## 1. DOCTYPE Declaration:

- **Mikä se on**: &lt;!DOCTYPE html> on ohje verkkoselaimelle siitä, mitä HTML-versiota dokumentti käyttää. Tässä tapauksessa se määrittelee HTML5-version.
- **Tarkoitus**: Se varmistaa, että dokumentti näytetään nykyaikaisilla HTML5-standardeilla ja välttää mahdolliset ongelmat vanhojen selainten "quirks mode" -tilassa.
- **Tärkeä yksityiskohta**: Sisällytä aina DOCTYPE-määritys HTML-dokumentin alkuun, jotta rakenne ja yhteensopivuus säilyvät.

## 2. HTML Tag:

- **Mikä se on**: &lt;html>-elementti ympäröi koko HTML-dokumentin ja määrittää HTML-rakenteen juuren.
- **Tarkoitus**: Se toimii säiliönä kaikelle sivun sisällölle. lang="en" -attribuutti määrittää, että sisältö on englanniksi, mikä auttaa hakukoneita ja saavutettavuustyökaluja ymmärtämään sivun kielen.
- **Tärkeä yksityiskohta**: Dokumentin kielen määrittäminen on tärkeää hakukoneoptimoinnille (SEO) ja käyttäjille, jotka käyttävät ruudunlukijoita.

## 3. Head Tag:

- **Mikä se on**: &lt;head>-elementti sisältää verkkosivun metatiedot, kuten merkistökoodauksen, näkymän asetukset, tyylit ja skriptit.
- **Tarkoitus**: Se antaa selaimelle tärkeää tietoa ja varmistaa, että dokumentti näytetään oikein eri laitteilla ja kielillä.
- **Tärkeät yksityiskohdat**:
  - **Merkistö: &lt;meta charset="UTF-8">** määrittää merkistökoodauksen UTF-8:ksi, joka tukee lähes kaikkia kielten merkkejä.
  - **Näkymä: &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">** varmistaa, että verkkosivu on responsiivinen ja näkyy oikein eri näyttöjen koossa, erityisesti mobiililaitteilla.
  - **Otsikko: &lt;title>**-tagi määrittää verkkosivun otsikon, joka näkyy selaimen välilehdessä. Tässä tapauksessa "Countdown Timer" on sopiva ja kuvaava.

## 4. Google Fonts Link:

- **Mikä se on**: &lt;link>-tagi sisältää ulkoisen tyylitiedoston Google Fontsista. Tässä tapauksessa se lataa fontin "Poppins".
- **Tarkoitus**: Sen avulla voimme käyttää modernia, verkkoturvallista fonttia CSS:ssä ilman, että fonttia tarvitsee asentaa paikallisesti. "Poppins"-fontti on valittu sen selkeän ja modernin ulkonäön vuoksi.
- **Tärkeä yksityiskohta**: Ulkoisen fontin linkittäminen parantaa sivun typografiaa ja visuaalista esteettisyyttä.

## 5. Body Tag:

- **Mikä se on**: &lt;body>-elementti sisältää kaiken verkkosivun näkyvän sisällön, jonka käyttäjä näkee ja jonka kanssa hän on vuorovaikutuksessa.
- **Tarkoitus**: Body-elementti ympäröi koko käyttöliittymän (UI) sisällön, mukaan lukien ajastimen säiliön, lomakkeen ja näytön.
- **Tärkeä yksityiskohta**: Kaikki verkkosivun näkyvä sisältö on &lt;body>-elementin sisällä. Sivun muut osat (kuten &lt;head>-elementti) sisältävät metatietoja ja asetuksia, kun taas &lt;body> on varattu varsinaiselle sisällölle.

## 6. Main Container (&lt;div class="container">):

- **Mikä se on**: &lt;div>-elementti, jossa on luokka "container", käärii kaiken ajastimen sisällön, mukaan lukien lomakkeen ja ajastimen näytön.
- **Tarkoitus**: Kontti ryhmittelee liittyvän sisällön ja mahdollistaa asettelun ja tyylityksen. Se myös keskittää sisällön sivulle CSS Flexboxin avulla.
- **Tärkeä yksityiskohta**: Luokan "container" avulla voimme tyylittää konttia erikseen CSS-tiedostossa hallitaksemme sen ulkonäköä ja asettelua, kuten pehmusteita, reunojen pyöristyksiä ja varjoja.

## 7. Heading (&lt;h1>Countdown Timer&lt;/h1>):

- **Mikä se on**: &lt;h1>-elementti on tason yksi otsikko, joka edustaa sivun pääotsikkoa.
- **Tarkoitus**: Se toimii sivun ensisijaisena otsikkona ja on tyyliltään näkyvä ja houkutteleva. Tässä tapauksessa se näyttää yksinkertaisesti tekstin "Countdown Timer", joka kertoo käyttäjille sovelluksen tarkoituksen.
- **Tärkeä yksityiskohta**: &lt;h1>-tagi on tärkeä SEO-optimoinnin ja saavutettavuuden kannalta, koska se ilmaisee dokumentin pääotsikon.

## 8. Form Element (&lt;form id="timer-form">):

- **Mikä se on**: &lt;form>-elementti, jossa on id "timer-form", ryhmittelee syötekentät ja lähetyspainikkeen ajastinta varten.
- **Tarkoitus**: Sen avulla käyttäjä voi syöttää ajan (minuutit ja sekunnit) ajastimelle. Kun lomake lähetetään, se käynnistää JavaScriptin, joka aloittaa ajastimen.
- **Tärkeä yksityiskohta**: id="timer-form" mahdollistaa lomakkeen helpon viittaamisen JavaScriptissä, jossa ajastintoiminto on toteutettu.

## 9. Input Fields (&lt;input type="number">):

- **Mikä se on**: &lt;input>-elementit mahdollistavat käyttäjän syöttää numeerisia arvoja ajastimen minuuteille ja sekunneille.
  - **type="number"** -attribuutti rajoittaa syötteen vain numeerisiin arvoihin.
  - **min="0" ja max="59"** -attribuutit varmistavat, että syöte on oikeissa rajoissa.
- **Tarkoitus**: Nämä kentät keräävät käyttäjän syötteen ajastimen kestosta, jota käsitellään myöhemmin JavaScriptissä.
- **Tärkeä yksityiskohta**: Syötteet on rajattu varmistamaan oikeanlainen syöte ja parantamaan käyttäjäkokemusta. required-attribuutti varmistaa, että molemmat kentät on täytettävä ennen kuin ajastimen voi aloittaa.

## 10. Submit Button (&lt;button type="submit">Start Timer&lt;/button>):

- **Mikä se on**: &lt;button>-elementti, jossa on type="submit", käytetään lomakkeen lähettämiseen, mikä käynnistää ajastimen.
- **Tarkoitus**: Kun sitä klikataan, se lähettää lomakkeen ja käynnistää JavaScript-funktion, joka käsittelee ajastimen logiikan.
- **Tärkeä yksityiskohta**: Painike on tyylitelty ja räätälöity näyttämään vuorovaikutteiselta, ja siihen on lisätty hover-efektit ja värimuutokset. Painikkeen aria-label="Start Countdown" -attribuutti parantaa saavutettavuutta antamalla kuvaavan tekstin ruudunlukijoille.

## 11. Timer Display (&lt;div class="timer" id="timer">):

- **Mikä se on**: &lt;div>-elementti, jossa on id "timer", käytetään näyttämään ajastimen arvo, joka alkaa "00:00".
- **Tarkoitus**: Tämä osa päivittyy dynaamisesti reaaliajassa, kun ajastin etenee.
- **Tärkeä yksityiskohta**: Ajastimen näyttöä käsitellään JavaScriptin kautta, ja sisältö päivitetään sekunnin välein näyttämään jäljellä oleva aika. aria-live="polite" -attribuutti varmistaa, että ruudunlukijat ilmoittavat muutoksista ajastimessa.

## 12. JavaScript Link (&lt;script src="app.js">):

- **Mikä se on**: &lt;script>-elementti sisältää ulkoisen JavaScript-tiedoston (app.js), joka sisältää ajastimen toiminnallisuuden.
- **Tarkoitus**: Se lataa JavaScript-koodin, joka käsittelee käyttäjän syötettä, käynnistää ajastimen, päivittää ajastimen näytön ja käsittelee erilaisia vuorovaikutuksia.
- **Tärkeä yksityiskohta**: JavaScript-tiedoston sisällyttäminen body-elementin loppuun varmistaa, että HTML-elementit on ladattu ennen kuin skripti suoritetaan, mikä välttää mahdolliset virheet.

# CSS selitys

## 1. Global Reset (\*):

- **Mikä se on**: \* (universaali valitsin) kohdistuu kaikkiin sivun elementteihin.
- **Tarkoitus**: Se nollaa oletusmarginaalit ja -pehmusteet kaikille elementeille, varmistaen, että asettelu on yhdenmukainen eri selaimissa.
- **Tärkeä yksityiskohta**: Asettamalla box-sizing: border-box, elementtien leveys ja korkeus sisältävät pehmusteet ja reunukset, mikä tekee asettelusta helpommin hallittavan ja ennustettavan.

## 2. Body Styling (body):

- **Mikä se on**: Body-tyylit määrittävät koko sivun globaalin ulkoasun ja asettelun.
- **Tarkoitus**:
  - **font-family: 'Poppins', sans-serif;** soveltaa modernia fonttia Google Fontsista parantaen tekstin luettavuutta ja esteettisyyttä;
  - **background: linear-gradient(135deg, #74ebd5, #acb6e5);** luo visuaalisesti houkuttelevan liukuvärjätyn taustan, antaen sovellukselle modernin ja raikkaan ilmeen;
  - **display: flex; justify-content: center; align-items: center;** keskittää sisällön (kontin) vaakasuorassa ja pystysuorassa Flexboxilla;
  - **height: 100vh;** varmistaa, että body kattaa koko näkymäkorkeuden, jotta sisältö on aina pystysuunnassa keskitetty.
- **Tärkeä yksityiskohta**: Flexboxia käytetään sisällön helppoon keskittämiseen sivun keskelle. Liukuväritausta tekee sovelluksesta erottuvan ja visuaalisesti dynaamisemman.

## 3. Container Styling (.container):

- **Mikä se on**: .container-luokka tyylittää pääsäiliön ajastimen sisällölle.
- **Tarkoitus**:
  - **background-color: white;** luo puhtaan ja minimalistisen ilmeen ajastinsäiliölle, joka kontrastoi hyvin liukuväritaustan kanssa;
  - **padding: 30px;** antaa sisätilaa varmistaen, ettei sisältö ole liian tiiviisti reunojen vieressä;
  - **border-radius: 12px;** pyöristää säiliön kulmat, antaen modernin ja pehmeän ilmeen;
  - **box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);** lisää hienovaraisen varjon, joka antaa säiliölle hieman kohotetun, 3D-vaikutelman;
  - **max-width: 400px;** varmistaa, että säiliö ei veny liian leveäksi suuremmilla näytöillä, säilyttäen kompaktin suunnittelun;
  - **transition: transform 0.3s ease;** lisää pehmeän siirtymän kaikille muunnoksille, kuten skaalaamiselle hover-tilassa.
- **Tärkeä yksityiskohta**: Pehmusteen, pyöristettyjen kulmien ja varjon yhdistelmä antaa säiliölle korttimaisen ulkonäön, joka on yleinen suunnittelumalli moderneissa verkkosovelluksissa.

## 4. Hover Effect on Container (.container:hover):

- **Mikä se on**: Tämä sääntö aktivoituu, kun käyttäjä vie hiiren säiliön päälle.
- **Tarkoitus**:
  - **transform: scale(1.05);** suurentaa säiliötä hieman, kun käyttäjä vie hiiren sen päälle, antaen visuaalista palautetta.
- **Tärkeä yksityiskohta**: Hover-efekti luo hienovaraisen zoomauksen, antaen säiliölle dynaamisen tunteen olematta liian häiritsevä.
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671

## 5. Heading Styling (h1):

- **Mikä se on**: h1-elementti tyylittää pääotsikon ("Countdown Timer").
- **Tarkoitus**:
<<<<<<< HEAD
  - **margin-bottom: 20px;** lisää tilaa otsikon ja lomakkeen väliin, varmistaen selkeän sisällön erottelun.
  - **font-size: 2em;** suurentaa otsikon kokoa, jotta se erottuu pääotsikkona.
  - **color: #333;** asettaa värin tummanharmaaksi, tarjoten hyvän kontrastin valkoista taustaa vasten ilman kovaa mustaa.
- **Keskeinen yksityiskohta**: Otsikko on tyylitelty selkeäksi, rohkeaksi ja visuaalisesti huomattavaksi, mikä antaa sovellukselle järjestelmällisen ja modernin ilmeen.

## 6. Form Layout (form):

- **Mikä se on**: Form-elementti on tyylitelty Flexboxin avulla asettelemaan syötekentät ja painikkeen.
- **Tarkoitus**:
  - **display: flex; flex-direction: column; align-items: center;** pinoaa lomakkeen elementit pystysuunnassa ja keskittää ne vaakasuunnassa säilössä.
  - **gap: 15px;** lisää tilaa lomakkeen elementtien (syötekenttien ja painikkeen) välille, varmistaen, että ne ovat tasaisesti eroteltuja ja helposti havaittavissa.
- **Keskeinen yksityiskohta**: Flexboxin käyttö mahdollistaa yksinkertaisen ja selkeän asettelun, jossa kaikki lomakkeen elementit ovat siististi kohdistettuja ja eroteltuja, parantaen luettavuutta ja käytettävyyttä.

## 7. Input Fields Styling (input[type="number"]):

- **Mikä se on**: Syötekentät (minuutit ja sekunnit) on tyylitelty näyttämään yhtenäisiltä ja helposti vuorovaikutteisilta.
- **Tarkoitus**:
  - **width: 100px;** asettaa kiinteän leveyden syötekentille, varmistaen, etteivät ne ole liian leveitä tai kapeita.
  - **padding: 10px;** lisää sisäistä tilaa, tehden kentistä mukavampia käyttäjälle.
  - **border: 1px solid #ccc;** soveltaa vaaleanharmaata reunusta määrittelemään syötealueen.
  - **border-radius: 4px;** antaa syötekentille hieman pyöristetyt kulmat, jotka sopivat säilön yleiseen suunnitteluun.
  - **text-align: center;** keskittää tekstin syötekentissä, tehden numeroista helpommin luettavia.
  - **box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);** lisää hienovaraisen varjon syötekentille, antaen niille hieman kohotetun ulkonäön.
  - **transition: border-color 0.3s ease;** varmistaa sulavan siirtymän, kun syötekenttä on aktiivisena.
- **Keskeinen yksityiskohta**: Syötekenttien yhtenäinen koko ja tyyli tekevät niistä visuaalisesti houkuttelevia ja helppokäyttöisiä. Hienovarainen varjo lisää syvyyttä, tehden kentistä interaktiivisia.

## 8. Input Focus State (input[type="number"]:focus):

- **Mikä se on**: Tämä sääntö soveltuu, kun käyttäjä napsauttaa tai valitsee syötekentän.
- **Tarkoitus**:
- border-color: #28a745; muuttaa reunuksen värin vihreäksi, kun syötekenttä on aktiivisena, tarjoten käyttäjälle visuaalista palautetta siitä, että kenttä on käytössä.
- **Keskeinen yksityiskohta**: Tämä fokus-efekti parantaa käyttäjäkokemusta tekemällä selväksi, mikä syötekenttä on tällä hetkellä aktiivinen.

## 9. Button Styling (button):

- **Mikä se on**: Button-elementti tyylittää "Start Timer" -painikkeen.
- **Tarkoitus**:
  - **padding: 10px 20px;** varmistaa, että painike on tarpeeksi suuri ollakseen helposti napsautettavissa, parantaen käytettävyyttä.
  - **background-color: #28a745;** asettaa eloisan vihreän taustan painikkeelle, mikä ilmaisee positiivista toimintaa (ajastimen käynnistäminen).
  - **color: white;** tekee painikkeen tekstistä selvästi erottuvan vihreää taustaa vasten.
  - **border: none;** poistaa oletusreunuksen, luoden puhtaan ja modernin ulkoasun.
  - **border-radius: 4px;** antaa painikkeelle pyöristetyt kulmat, jotka sopivat sovelluksen yleiseen suunnitteluun.
  - **cursor: pointer;** muuttaa hiiren osoittimen sormeksi, kun se on painikkeen päällä, viitaten siihen, että se on napsautettavissa.
  - **transition: background-color 0.3s ease, transform 0.2s ease;** soveltaa sulavat siirtymät, kun painiketta viedään hiiren päälle, parantaen vuorovaikutteisuutta.
  - **box-shadow: 0 4px 15px rgba(40, 167, 69, 0.2);** lisää hienovaraisen varjon, tehden painikkeesta kohotetun ja huomattavamman.
- **Keskeinen yksityiskohta**: Painike on tyylitelty erottumaan visuaalisesti, ja hover-efektit saavat sen tuntumaan reagoivalta ja interaktiiviselta. Vihreä väri osoittaa, että se on positiivinen toimintapainike.

## 10. Button Hover Effect (button:hover):

- **Mikä se on**: Tämä sääntö soveltuu, kun käyttäjä vie hiiren painikkeen päälle.
- **Tarkoitus**:
  - **background-color: #218838;** tummentaa painikkeen taustan tarjoten visuaalista palautetta käyttäjän toiminnan aikana.
  - **transform: translateY(-2px);** siirtää painiketta hieman ylöspäin, luoden "kohottavan" efektin, joka saa painikkeen tuntumaan dynaamisemmalta.
  - **box-shadow: 0 8px 20px rgba(40, 167, 69, 0.4);** vahvistaa varjoa, antaen painikkeelle voimakkaamman "kohotetun" efektin hiiren ollessa sen päällä.
- **Keskeinen yksityiskohta**: Hover-efekti tekee painikkeesta houkuttelevamman, sulavien värimuutosten ja hienovaraisten liikkeiden ansiosta, parantaen käyttäjäkokemusta.

## 11. Timer Display Styling (.timer):

- **Mikä se on**: .timer-luokka tyylittää lähtölaskennan näyttöalueen.
- **Tarkoitus**:
  - **font-size: 3em;** suurentaa ajastimen tekstin, jotta se on helposti luettavissa.
  - **font-weight: bold;** antaa ajastimen tekstille enemmän painoa, kiinnittäen huomion jäljellä olevaan aikaan.
  - **color: #333;** asettaa ajastimen tekstin tummanharmaaksi, mikä tarjoaa hyvän kontrastin valkoista taustaa vasten.
  - **margin-top: 20px;** lisää tilaa ajastimen ja lomakkeen väliin, parantaen asettelua.
  - **animation: fadeIn 1s ease-out forwards;** soveltaa häivytysanimaation, kun ajastin näytetään ensimmäistä kertaa.
- **Keskeinen yksityiskohta**: Suuri, rohkea fontti tekee ajastimesta helposti luettavan, kun taas häivytysanimaatio lisää sulavan visuaalisen efektin ajastimen käynnistyessä.

## 12. Fade-In Animation (@keyframes fadeIn):

- **Mikä se on**: @keyframes-sääntö määrittelee mukautetun animaation, joka häivyttää ajastimen esiin.
- **Tarkoitus**:
  - **from { opacity: 0; transform: scale(0.9); }** aloittaa animaation, jossa ajastin on hieman pienempi ja läpinäkyvä.
  - **to { opacity: 1; transform: scale(1); }** päättää animaation, jossa ajastin on täysin näkyvä ja normaalikokoinen.
- **Keskeinen yksityiskohta**: Tämä animaatio luo sulavan siirtymän, kun ajastin näytetään, parantaen sovelluksen visuaalista houkuttelevuutta.

# JavaScript Selitys

## 1. **DOMContentLoaded-tapahtuma**:

- **Mikä se on**: document.addEventListener('DOMContentLoaded', ...) on tapahtuma, joka laukeaa, kun koko HTML-dokumentti on ladattu ja jäsennelty, varmistaen, että kaikki DOM-elementit ovat vuorovaikutettavissa.
- **Tarkoitus**: Se varmistaa, että kaikki HTML-elementit (kuten lomake, syötekentät ja ajastimen näyttö) ovat ladattu ennen kuin JavaScript yrittää vuorovaikuttaa niiden kanssa.
- **Keskeinen yksityiskohta**: Tämä tapahtuma on tärkeä estämään virheet, jotka johtuvat siitä, että yritetään käyttää DOM-elementtejä ennen kuin ne ovat valmiita.

## 2. **DOM-elementtien valitseminen**:

- **Mikä se on**: Muuttujat, kuten timerForm, minutesInput, secondsInput ja timerDisplay, tallentavat viitteet tiettyihin HTML-elementteihin.
  - **const timerForm = document.getElementById('timer-form');** valitsee lomakkeen, jonka käyttäjä lähettää käynnistääkseen ajastimen.
  - **const minutesInput = document.getElementById('minutes');** valitsee syötekentän, johon käyttäjä syöttää minuutit.
  - **const secondsInput = document.getElementById('seconds');** valitsee sekuntien syöttökentän.
  - **const timerDisplay = document.getElementById('timer');** valitsee &lt;div>-elementin, joka näyttää lähtölaskennan.
- **Tarkoitus**: Nämä muuttujat mahdollistavat skriptin vuorovaikutuksen vastaavien elementtien kanssa, kuten syötearvojen lukemisen tai näytön päivittämisen.
- **Keskeinen yksityiskohta**: Elementtien valitseminen niiden id-tunnisteen perusteella mahdollistaa niiden helpon ja nopean käsittelyn JavaScriptissä.

## 3. **Lähtölaskennan intervallin määrittäminen**:

- **Mikä se on**: let countdownInterval; julistaa muuttujan, joka tallentaa viitteen lähtölaskentaa hallitsevaan intervalliin.
- **Tarkoitus**: countdownInterval tallentaa setInterval()-toiminnolla luodun intervallin ID:hen, jota tarvitaan, kun lähtölaskenta saavuttaa nollan ja intervalli tulee pysäyttää.
- **Keskeinen yksityiskohta**: Tallentamalla intervallin viitteen voimme myöhemmin pysäyttää intervallin clearInterval()-toiminnolla, mikä estää ajastimen jatkumisen loputtomiin.

## 4. **Lomakkeen lähettämistä kuunteleva tapahtumankuuntelija**:

- **Mikä se on**: timerForm.addEventListener('submit', ...) kuuntelee käyttäjän lomakkeen lähettämistä (kun "Start Timer" -painiketta klikataan).
- **Tarkoitus**: Kun lomake lähetetään, tämä funktio estää oletuskäytöksen (joka olisi sivun uudelleenlataus) ja käynnistää sen sijaan lähtölaskennan.
- **Keskeinen yksityiskohta**: event.preventDefault() estää lomakkeen perinteisen lähettämisen, mikä estäisi sivun uudelleenlatauksen ja mahdollistaa JavaScriptin hallita lähtölaskentaprosessia ilman keskeytyksiä.

## 5. **Aiemman lähtölaskennan tyhjentäminen**:

- **Mikä se on**: clearInterval(countdownInterval); tyhjentää kaikki aiemmin käynnissä olevat lähtölaskennat.
- **Tarkoitus**: Jos käyttäjä aloittaa uuden lähtölaskennan, kun toinen on jo käynnissä, tämä varmistaa, että edellinen lähtölaskenta pysäytetään ennen uuden aloittamista.
- **Keskeinen yksityiskohta**: Ilman intervallin tyhjentämistä useita lähtölaskentoja voisi käynnistyä samanaikaisesti, mikä aiheuttaisi odottamattomia tuloksia.

## 6. **Syötteen käsittely**:

- **Mikä se on**: Käyttäjän syöttämät minuutit ja sekunnit haetaan ja muunnetaan numeroiksi käyttämällä parseInt().
  - **const minutes = parseInt(minutesInput.value) || 0;** hakee minuuttien syötteen ja oletusarvoisesti asettaa arvoksi 0, jos syöte on tyhjä tai virheellinen.
  - **const seconds = parseInt(secondsInput.value) || 0;** hakee sekuntien syötteen ja asettaa arvoksi 0, jos syöte on virheellinen.
  - **let totalSeconds = (minutes \* 60) + seconds;** muuntaa annetun ajan kokonaisiksi sekunneiksi (minuutit muunnetaan sekunneiksi ja lisätään sekuntien syötteeseen).
- **Tarkoitus**: Skriptin tulee käsitellä aikaa sekunneissa, koska tätä on helpompi hallita lähtölaskennassa.
- **Keskeinen yksityiskohta**: Käyttäen || 0 varmistetaan, että jos syöte on tyhjä, lähtölaskenta ei kaadu, vaan se käyttää oletusarvona arvoa 0.

## 7. **Virheellisten syötteiden käsittely**:

- **Mikä se on**: Skripti tarkistaa, onko kokonaisaika pienempi tai yhtä suuri kuin nolla (if (totalSeconds &lt;= 0) return;).
- **Tarkoitus**: Jos käyttäjä ei anna kelvollista aikaa (esim. 00:00), funktio pysähtyy eikä lähtölaskenta ala.
- **Keskeinen yksityiskohta**: Tämä validointi estää lähtölaskennan käynnistymisen, jos ei ole annettu aikaa, parantaen käytettävyyttä ja estäen turhat päivitykset.

## 8. **Lähtölaskennan käynnistäminen (setInterval)**:

- **Mikä se on**: countdownInterval = setInterval(...) aloittaa lähtölaskennan, joka päivittyy 1000 millisekunnin (1 sekunnin) välein.
- **Tarkoitus**: setInterval() vähentää totalSeconds-arvoa yhdellä joka sekunti, päivittäen ajastimen näytön vastaavasti. Intervalli jatkuu, kunnes totalSeconds saavuttaa nollan.
- **Keskeinen yksityiskohta**: Intervalli suoritetaan sekunnin välein (1000 ms), mikä tekee lähtölaskennasta sujuvan ja reagoivan tuntuisen. Kun lähtölaskenta saavuttaa nollan, intervalli pysäytetään käyttämällä clearInterval(countdownInterval).

## 9. **Lähtölaskennan pysäyttäminen**:

- **Mikä se on**: Kun kokonaissekunnit saavuttavat nollan, intervalli pysäytetään (clearInterval(countdownInterval)).
- **Tarkoitus**: Kun lähtölaskenta on valmis, intervallin pysäyttäminen varmistaa, ettei lähtölaskenta jatku tai päivitä näyttöä enää.
- **Keskeinen yksityiskohta**: Tämä vaihe on tärkeä, jotta ajastin pysähtyy oikealla hetkellä eikä tee lisäpäivityksiä, kun ajastin on nollassa.

## 10. **Ajastimen näytön päivittäminen**:

- **Mikä se on**: Skripti laskee jäljellä olevat minuutit ja sekunnit käyttäen Math.floor()-toimintoa ja päivittää ajastimen näytön:
  - **const displayMinutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');** laskee jäljellä olevat minuutit ja varmistaa, että näytössä on aina kaksi numeroa.
  - **const displaySeconds = (totalSeconds % 60).toString().padStart(2, '0');** laskee jäljellä olevat sekunnit ja varmistaa, että sekin näytetään kaksinumeroisena.
  - timerDisplay.textContent = ${displayMinutes}:${displaySeconds}; päivittää ajastimen näytön tekstisisällön näyttämään muotoiltua aikaa.
- **Tarkoitus**: Tämä logiikka varmistaa, että näytetty aika on aina muodossa MM, mikä tekee siitä käyttäjille helposti luettavan.
- **Keskeinen yksityiskohta**: padStart(2, '0') -metodi varmistaa, että numerot näytetään aina kaksinumeroisina (esim. 09 eikä 9), mikä tekee ajastimesta ammattimaisen näköisen ja yhdenmukaisen.

## 11. **Ajastimen värin dynaaminen muuttaminen**:

- **Mikä se on**: Lähtölaskennan edetessä ajastimen väri muuttuu jäljellä olevan ajan perusteella:
  - **Jos totalSeconds &lt; 10, ajastimen väri muuttuu punaiseksi (timerDisplay.style.color = 'red';)**, viestien, että aika on loppumassa.
  - **Jos totalSeconds &lt; 30, ajastin muuttuu oranssiksi (timerDisplay.style.color = 'orange';),** antaen varoituksen ajan vähyydestä.
  - **Normaalilla ajalla** väri pysyy oletuksena tummanharmaana.
- **Tarkoitus**: Värin muutos antaa käyttäjälle visuaalista palautetta jäljellä olevan ajan tärkeydestä, tehden ajan seuraamisesta helpompaa.
- **Keskeinen yksityiskohta**: Tämä dynaaminen värimuutos lisää vuorovaikutteisuutta ja parantaa käyttäjäkokemusta visuaalisilla vihjeillä ajan kulumisesta.
=======
  - **margin-bottom: 20px;** lisää tilaa otsikon ja lomakkeen väliin, varmistaen selkeän sisällön erottelun;
  - **font-size: 2em;** suurentaa otsikon kokoa, jotta se erottuu pääotsikkona;
  - **color: #333;** asettaa värin tummanharmaaksi, joka tarjoaa hyvän kontrastin valkoista taustaa vasten ilman, että käytetään karkeaa mustaa.
- **Tärkeä yksityiskohta**: Otsikko on tyylitelty selkeäksi, rohkeaksi ja visuaalisesti erottuvaksi, antaen sovellukselle järjestäytyneen ja modernin ilmeen.

## 6. Form Layout (form):

- **Mikä se on**: Form-elementti on tyylitelty Flexboxilla asettelemaan syötekentät ja painike.
- **Tarkoitus**:
  - **display: flex; flex-direction: column; align-items: center;** asettelee lomake-elementit pystysuoraan ja keskittää ne vaakasuorassa säiliön sisällä;
  - **gap: 15px;** lisää tilaa lomake-elementtien (syötekenttien ja painikkeen) väliin, varmistaen, että ne ovat tasaisesti erotettu ja helposti tunnistettavissa.
- **Tärkeä yksityiskohta**: Flexboxin käyttö mahdollistaa yksinkertaisen ja selkeän asettelun, jossa kaikki lomake-elementit ovat siististi linjassa ja tilavasti aseteltu.

## 7. Input Fields Styling (input[type="number"]):

- **Mikä se on**: Syötekentät (minuuteille ja sekunneille) on tyylitelty näyttämään yhtenäisiltä ja helppokäyttöisiltä.
- **Tarkoitus**:
  - **width: 100px;** asettaa kiinteän leveyden syötekentille;
  - **padding: 10px;** lisää sisäistä tilaa;
  - **border: 1px solid #ccc;** soveltaa vaaleanharmaan reunuksen määrittämään syötealueen;
  - **border-radius: 4px;** antaa syötekentille hieman pyöristetyt kulmat;
  - **text-align: center;** keskittää tekstin syötekenttien sisällä;
  - **box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);** lisää hienovaraisen varjon;
  - **transition: border-color 0.3s ease;** varmistaa sujuvan siirtymän, kun syötekenttä saa fokuksen.
- **Tärkeä yksityiskohta**: Syötekenttien yhtenäinen koko ja tyyli tekevät niistä visuaalisesti houkuttelevia ja helppokäyttöisiä.

## 8. Input Focus State (input[type="number"]:focus):

- **Mikä se on**: Tämä sääntö aktivoituu, kun käyttäjä klikkaa tai keskittyy syötekenttään.
- **Tarkoitus**:
  - **border-color: #28a745;** muuttaa reunuksen värin vihreäksi.
- **Tärkeä yksityiskohta**: Tämä fokusefekti parantaa käyttäjäkokemusta tekemällä selväksi, mikä syötekenttä on aktiivinen.

## 9. Button Styling (button):

- **Mikä se on**: Painike-elementti tyylittää "Start Timer" -painikkeen.
- **Tarkoitus**:
  - **padding: 10px 20px;** varmistaa, että painike on helposti klikattavissa;
  - **background-color: #28a745;** asettaa kirkkaan vihreän taustan painikkeelle;
  - **color: white;** tekee tekstistä selkeästi erottuvan;
  - **border: none;** poistaa oletusreunuksen;
  - **border-radius: 4px;** antaa painikkeelle pyöristetyt kulmat;
  - **cursor: pointer;** muuttaa hiiren osoittimen osoittimeksi;
  - **transition: background-color 0.3s ease, transform 0.2s ease;** soveltaa sujuvia siirtymiä;
  - **box-shadow: 0 4px 15px rgba(40, 167, 69, 0.2);** lisää hienovaraisen varjon.
- **Tärkeä yksityiskohta**: Painike on tyylitelty visuaalisesti erottuvaksi ja hover-efektit tekevät siitä vuorovaikutteisen.

## 10. Button Hover Effect (button:hover):

- **Mikä se on**: Tämä sääntö aktivoituu, kun käyttäjä vie hiiren painikkeen päälle.
- **Tarkoitus**:
  - **background-color: #218838;** tummentaa painikkeen taustaa;
  - **transform: translateY(-2px);** siirtää painiketta hieman ylöspäin;
  - **box-shadow: 0 8px 20px rgba(40, 167, 69, 0.4);** tehostaa varjoa.
- **Tärkeä yksityiskohta**: Hover-efekti tekee painikkeesta vuorovaikutteisemman ja parantaa käyttökokemusta.

## 11. Timer Display Styling (.timer):

- **Mikä se on**: .timer-luokka tyylittää ajastimen näyttöalueen.
- **Tarkoitus**:
  - **font-size: 3em;** tekee ajastimen tekstistä suurta ja näkyvää;
  - **font-weight: bold;** antaa tekstille enemmän painoarvoa;
  - **color: #333;** asettaa tekstin tummanharmaaksi;
  - **margin-top: 20px;** lisää tilaa ajastimen ja lomakkeen väliin;
  - **animation: fadeIn 1s ease-out forwards;** soveltaa fade-in-animoinnin.
- **Tärkeä yksityiskohta**: Suuri ja lihavoitu fontti tekee ajastimesta helposti luettavan ja fade-in-animointi lisää visuaalista tehoa.

## 12. Fade-In Animation (@keyframes fadeIn):

- **Mikä se on**: @keyframes-sääntö määrittää mukautetun animoinnin.
- **Tarkoitus**:
  - **from { opacity: 0; transform: scale(0.9); }** aloittaa animoinnin;
  - **to { opacity: 1; transform: scale(1); }** päättää animoinnin.
- **Tärkeä yksityiskohta**: Tämä animointi parantaa sovelluksen visuaalista vetovoimaa.

# JavaScript selitys

## 1. DOMContentLoaded Event:

- **Mikä se on**: **document.addEventListener('DOMContentLoaded', ...)** on tapahtuma, joka aktivoituu, kun koko HTML-dokumentti on ladattu ja jäsennelty, varmistaen, että kaikki DOM-elementit ovat valmiita vuorovaikutukseen.
- **Tarkoitus**: Se varmistaa, että kaikki HTML-elementit (kuten lomake, syötekentät ja ajastimen näyttö) on ladattu ennen kuin JavaScript yrittää käsitellä niitä.
- **Tärkeä yksityiskohta**: Tämä tapahtuma on tärkeä virheiden estämiseksi, joita voi syntyä, kun yritetään käyttää DOM-elementtejä ennen kuin ne ovat valmiita.

## 2. Selecting DOM Elements:

- **Mikä se on**: Muuttujia kuten **timerForm**, **minutesInput**, **secondsInput** ja **timerDisplay** käytetään viittaamaan tiettyihin HTML-elementteihin.
  - **const timerForm = document.getElementById('timer-form');** valitsee lomakkeen, jonka käyttäjä lähettää aloittaakseen ajastimen.
  - **const minutesInput = document.getElementById('minutes');** valitsee syötekentän, johon käyttäjä syöttää minuutit.
  - **const secondsInput = document.getElementById('seconds');** valitsee syötekentän sekunneille.
  - **const timerDisplay = document.getElementById('timer');** valitsee **<div>**-elementin, joka näyttää ajastimen.
- **Tarkoitus**: Nämä muuttujat sallivat skriptin olla vuorovaikutuksessa vastaavien elementtien kanssa, kuten lukemalla syötearvoja tai päivittämällä näyttöä.
- **Tärkeä yksityiskohta**: Elementtien valitseminen niiden ID:n perusteella varmistaa, että voimme helposti ja nopeasti käsitellä niitä JavaScriptin sisällä.

## 3. Defining the Countdown Interval:

- **Mikä se on**: **let countdownInterval;** määrittelee muuttujan, johon tallennetaan ajastuksen hallitsevan intervallin viittaus.
- **Tarkoitus**: **countdownInterval** tallentaa ID:n intervallille, jonka **setInterval()** luo. Tätä ID:tä tarvitaan intervallin pysäyttämiseksi, kun ajastin saavuttaa nollan.
- **Tärkeä yksityiskohta**: Intervallin viittauksen tallentaminen sallii meidän pysäyttää intervallin myöhemmin **clearInterval()**-funktiolla, mikä on tärkeää estämään ajastimen jatkumisen loputtomasti.

## 4. Form Submission Event Listener:

- **Mikä se on**: **timerForm.addEventListener('submit', ...)** kuuntelee, kun käyttäjä lähettää lomakkeen (klikkaamalla "Start Timer" -painiketta).
- **Tarkoitus**: Kun lomake lähetetään, tämä funktio estää oletuskäytöksen (joka päivittäisi sivun) ja sen sijaan käynnistää ajastimen.
- **Tärkeä yksityiskohta**: **event.preventDefault()** estää lomakkeen perinteisen lähettämisen (joka aiheuttaisi sivun latautumisen uudelleen), mahdollistaen JavaScriptin käsitellä ajastimen käynnistämisen ilman keskeytyksiä.

## 5. Clearing Previous Countdown:

- **Mikä se on**: **clearInterval(countdownInterval);** pysäyttää kaikki jo käynnissä olevat ajastusintervallit.
- **Tarkoitus**: Jos käyttäjä käynnistää uuden ajastuksen, kun toinen on jo käynnissä, tämä varmistaa, että edellinen ajastus pysäytetään ennen uuden alkamista.
- **Tärkeä yksityiskohta**: Ilman intervallin pysäyttämistä useita ajastuksia voisi olla käynnissä samanaikaisesti, mikä aiheuttaisi arvaamatonta käytöstä.

## 6. Input Handling:

- **Mikä se on**: Käyttäjän syötteet minuuteille ja sekunneille haetaan ja muunnetaan numeroiksi käyttäen **parseInt()**-funktiota.
  - **const minutes = parseInt(minutesInput.value) || 0;** hakee minuuttisyötteen arvon ja oletuksena käyttää nollaa, jos syöte on tyhjä tai virheellinen.
  - **const seconds = parseInt(secondsInput.value) || 0;** hakee sekuntisyötteen arvon ja käyttää nollaa virheellisessä tapauksessa.
  - **let totalSeconds = (minutes \* 60) + seconds;** muuntaa syötetyn kokonaisajan sekunneiksi.
- **Tarkoitus**: Skripti käsittelee kokonaisaikaa sekunneissa, sillä tämä on helpompi hallita ajastuksen logiikkaa varten.
- **Tärkeä yksityiskohta**: **|| 0** takaa, että jos käyttäjä jättää syötteen tyhjäksi, ajastin ei rikkoonnu, vaan se käyttää oletusarvona nollaa.

## 7. Handling Invalid Inputs:

- **Mikä se on**: Skripti tarkistaa, onko kokonaisaika alle tai yhtä suuri kuin nolla (**if (totalSeconds <= 0) return;**).
- **Tarkoitus**: Jos käyttäjä ei anna kelvollista aikaa (esim. 00:00), funktio pysähtyy eikä ajastin käynnisty.
- **Tärkeä yksityiskohta**: Tämä validointi estää ajastimen käynnistämisen ilman syöteä, parantaen käytettävyyttä ja estäen turhat päivitykset.

## 8. Starting the Countdown (setInterval):

- **Mikä se on**: **countdownInterval = setInterval(...)** käynnistää ajastuksen, joka päivittyy joka 1000 millisekunnin (1 sekunnin) välein.
- **Tarkoitus**: **setInterval()**-funktiota käytetään vähentämään kokonaissekuntilukua yhdellä joka sekunti ja päivittämään ajastimen näyttö. Intervalli jatkuu, kunnes **totalSeconds** saavuttaa nollan.
- **Tärkeä yksityiskohta**: Intervalli toimii joka sekunti (1000 millisekuntia), mikä tekee ajastuksesta sujuvan ja reagoivan. Kun ajastus saavuttaa nollan, intervalli pysäytetään käyttämällä **clearInterval(countdownInterval)**.

## 9. Stopping the Countdown:

- **Mikä se on**: Kun sekunnit saavuttavat nollan, intervalli pysäytetään (**clearInterval(countdownInterval)**).
- **Tarkoitus**: Kun ajastus on valmis, intervallin pysäyttäminen varmistaa, ettei ajastus jatka toimintaansa tai päivitä näyttöä enää.
- **Tärkeä yksityiskohta**: Tämä vaihe on ratkaiseva ajastimen pysäyttämiseksi oikeaan aikaan ja estää lisäpäivitykset ajastimen saavuttaessa nollan.

## 10. Updating the Timer Display:

- **Mikä se on**: Skripti laskee jäljellä olevat minuutit ja sekunnit käyttäen **Math.floor()**-funktiota ja päivittää ajastimen näytön:
  - **const displayMinutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');** laskee jäljellä olevat minuutit ja varmistaa, että näyttö näyttää aina kaksi numeroa.
  - **const displaySeconds = (totalSeconds % 60).toString().padStart(2, '0');** laskee jäljellä olevat sekunnit.
  - **timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;** päivittää ajastimen näyttöelementin tekstin.
- **Tarkoitus**: Tämä logiikka varmistaa, että näytetty aika on aina muodossa MM

  , tehden siitä käyttäjälle helposti luettavan.

- **Tärkeä yksityiskohta**: **.padStart(2, '0')** varmistaa, että numerot näytetään aina kaksinumeroisina (esim. 09 sijaan 9), antaen ammattimaisen ilmeen.

## 11. Dynamically Changing the Timer Color:

- **Mikä se on**: Ajastuksen edetessä ajastimen väri muuttuu jäljellä olevan ajan perusteella:
  - Jos **totalSeconds < 10**, ajastimen väri muuttuu punaiseksi (**timerDisplay.style.color = 'red';**), mikä osoittaa, että aika on loppumassa.
  - Jos **totalSeconds < 30**, ajastin muuttuu oranssiksi (**timerDisplay.style.color = 'orange';**), varoittaen, että aikaa on vähän.
  - **Normaalilla** ajalla väri pysyy tummanharmaana.
- **Tarkoitus**: Värinmuutos antaa käyttäjälle visuaalista palautetta jäljellä olevan ajan kiireellisyydestä, tehden ajastimen seurannasta helpompaa.
- **Tärkeä yksityiskohta**: Tämä dynaaminen värinmuutos parantaa vuorovaikutusta ja tarjoaa visuaalisia signaaleja ajastimen etenemisestä.
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
