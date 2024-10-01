# Nettisivu: https://keudaope.github.io/JSProjekteja/P25_Event_Countdown

# Johdanto

**Event Countdown** on hyödyllinen sovellus, joka laskee aikaa tiettyyn tapahtumaan tai päivämäärään. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla, kun opitaan käsittelemään käyttäjän syötteitä, työskentelemään päivämäärien kanssa ja päivittämään DOM:in dynaamisesti. Käyttäjät voivat syöttää tapahtuman nimen ja päivämäärän, ja sovellus näyttää reaaliaikaisen ajanlaskennan kyseiseen tapahtumaan.

# HTML Selitys

## 1. DOCTYPE-määritys (<code><</code>!DOCTYPE html>)

- **Mikä se on**: <code><</code>!DOCTYPE html> -määritys sijoitetaan aina HTML-dokumentin alkuun.
- **Tarkoitus**: Tämä määritys varmistaa, että selain tulkitsee dokumentin HTML5-standardien mukaisesti. Se estää selainta käyttämästä vanhempia renderöintitiloja, mikä voisi johtaa asettelu- tai toiminnallisuusongelmiin.
- **Tärkeä yksityiskohta**: Sisällytä aina <code><</code>!DOCTYPE html> -määritys, jotta nykyaikaiset selaimet tulkitsevat verkkosivun HTML5-dokumenttina.

## 2. HTML-tagi (<code><</code>html lang="en">)

- **Mikä se on**: <code><</code>html> on juurielementti, joka sisältää kaiken sivun sisällön. Lang="en" -attribuutti määrittää, että dokumentti on kirjoitettu englanniksi.
- **Tarkoitus**: Lang-attribuutti on tärkeä saavutettavuuden kannalta, sillä ruudunlukijat ja hakukoneet käyttävät tätä tietoa tulkitessaan sivua oikein.
- **Tärkeä yksityiskohta**: Dokumentin kielen määrittely parantaa verkkosivun saavutettavuutta ja hakukoneoptimointia, mikä helpottaa avustavien teknologioiden käyttöä ja hakukoneiden sisällön indeksointia.

## 3. Head-tagi (<code><</code>head>)

- **Mikä se on**: <code><</code>head> -elementti sisältää metatietoja, ulkoisia resursseja (kuten tyylitiedostoja ja fontteja) ja verkkosivun otsikon.
- **Tarkoitus**: <code><</code>head> -osio auttaa selainta lataamaan tarvittavat tiedot ennen sisällön näyttämistä käyttäjälle. Tämä sisältää linkit ulkoisiin CSS-tiedostoihin ja merkkijonokoodauksen määrittelyn.
- **Tärkeät yksityiskohdat**:
  - **Meta Charset** (<code><</code>meta charset="UTF-8">): Määrittelee merkkikoodauksen UTF-8:ksi, mikä tukee laajaa valikoimaa merkkejä ja symboleja, varmistaen tekstin oikean näyttämisen.
  - **Viewport Meta Tag** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">): Tämä tagi varmistaa, että verkkosivu on responsiivinen ja mukautuu eri näyttökokoihin, erityisesti mobiililaitteilla.
  - **Title Tag** (<code><</code>title>Event Countdown<code><</code>/title>): <code><</code>title> -tunniste määrittää selaimen välilehdessä näytettävän otsikon. Se auttaa myös hakukoneita ymmärtämään sivun pääaihetta.
  - **Linkki ulkoiseen CSS:ään** (<code><</code>link rel="stylesheet" href="styles.css">): Tämä linkki osoittaa ulkoiseen tyylitiedostoon, joka sisältää sivun kaikki tyylisäännöt.

## 4. Body-tagi (<code><</code>body>)

- **Mikä se on**: <code><</code>body> -tunniste sisältää kaiken näkyvän verkkosivun sisällön, kuten otsikot, syötekentät, painikkeet ja tulokset.
- **Tarkoitus**: Kaikki, mihin käyttäjä on vuorovaikutuksessa tai mitä hän näkee verkkosivulla, sijoitetaan <code><</code>body> -elementin sisään. Tässä tapauksessa se sisältää otsikon, lomakesyötteet, painikkeen ja ajastimen tulosnäytön.
- **Tärkeä yksityiskohta**: <code><</code>body> -tunnisteen sisältöä tyylitellään CSS:n avulla ja muokataan JavaScriptillä interaktiivisen kokemuksen luomiseksi.

## 5. Kontaineri-divi (<code><</code>div class="container">)

- **Mikä se on**: Tämä <code><</code>div> -elementti ryhmittelee yhteen sovelluksen koko sisällön: otsikon, syötekentät, painikkeen ja ajastimen tulosnäytön.
- **Tarkoitus**: Kontaineri-divi toimii pääasiallisena kehyksenä sovelluksen sisällölle. Se mahdollistaa keskitetyn tyylittelyn varmistaen, että kaikki sen sisällä olevat elementit ovat linjassa ja tasaisesti sijoitettuja.
- **Tärkeä yksityiskohta**: Kontaineri-luokka lisää pehmustusta, taustavärin, varjostuksia ja muita CSS-tyylejä, mikä tekee sisällöstä visuaalisesti erottuvan korttimaisena rakenteena.

## 6. Otsikkotagi (<code><</code>h1>Event Countdown<code><</code>/h1>)

- **Mikä se on**: <code><</code>h1> -tunniste määrittää sivun pääotsikon, joka on "Event Countdown".
- **Tarkoitus**: Otsikko ilmoittaa selkeästi sivun tarkoituksen. Se on ensimmäinen asia, jonka käyttäjä näkee, ja se on tärkeä hakukoneoptimoinnin kannalta.
- **Tärkeä yksityiskohta**: <code><</code>h1> -tunniste on tärkeä sekä SEO:n että saavutettavuuden kannalta, sillä se antaa sivun sisällölle rakenteen ja auttaa käyttäjiä nopeasti tunnistamaan sivun tarkoituksen.

## 7. Syötekentät (<code><</code>input type="text" id="event-name" placeholder="Enter event name" required>, <code><</code>input type="date" id="event-date" required>)

- **Mitä ne ovat**: Nämä ovat kaksi <code><</code>input> -elementtiä, joiden avulla käyttäjä voi syöttää tietoja. Yksi on tekstikenttä tapahtuman nimen syöttämiseksi ja toinen on päivämääräkenttä tapahtuman päivämäärän valitsemiseksi.
- **Tarkoitus**:
  - Tekstisyöte mahdollistaa tapahtuman nimen syöttämisen.
  - Päivämääräsyöte tarjoaa kalenteriliittymän, josta käyttäjät voivat valita tapahtuman päivämäärän.
- **Tärkeät yksityiskohdat**:
  - **type="text"**: Tämä määrittelee syötteen tekstikentäksi.
  - **id="event-name"**: Id käytetään yksilöimään syöte JavaScript-vuorovaikutusta varten.
  - **placeholder="Enter event name"**: Tämä ohjeteksti antaa käyttäjälle vihjeen siitä, mitä kenttään tulisi syöttää.
  - **required**: Tämä attribuutti varmistaa, että käyttäjä ei voi lähettää lomaketta täyttämättä tätä kenttää.

## 8. Painike (<code><</code>button id="start-button">Start Countdown<code><</code>/button>)

- **Mikä se on**: Tämä on klikattava <code><</code>button> -elementti, jonka tekstinä on "Start Countdown".
- **Tarkoitus**: Painike on sovelluksen pääasiallinen interaktiivinen elementti. Kun sitä klikataan, se käynnistää ajastin-toiminnon.
- **Tärkeä yksityiskohta**: Painike toimii toimintakehotuksena (CTA), joka aloittaa ajastuksen, kun käyttäjä on syöttänyt tapahtuman tiedot.

## 9. Ajastimen näyttö-divi (<code><</code>div class="countdown" id="countdown"><code><</code>/div>)

- **Mikä se on**: Tämä <code><</code>div> -elementti näyttää ajastimen tuloksen. Aluksi se on tyhjä, mutta JavaScript päivittää sitä ajastimen edetessä.
- **Tarkoitus**: Ajastimen näyttödivi tarjoaa varatun tilan sovellukselle näyttää ajastimen tulos. JavaScript päivittää tämän alueen jäljellä olevan ajan perusteella.

## 10. Skriptitagi (<code><</code>script src="app.js"><code><</code>/script>)

- **Mikä se on**: <code><</code>script> -tagi linkittää ulkoisen JavaScript-tiedoston (app.js), joka sisältää ajastintoiminnon logiikan.
- **Tarkoitus**: Ulkoinen skripti hallitsee sovelluksen toiminnallisuutta, kuten jäljellä olevan ajan laskemista tapahtumaan asti ja DOMin päivittämistä. JavaScriptin erottaminen HTML-rakenteesta pitää koodin puhtaana ja modulaarisena.
- **Tärkeä yksityiskohta**: Ulkoinen JavaScript-tiedosto tekee sovelluksesta interaktiivisen käsittelemällä tapahtumia, kuten painikkeen klikkauksia, ja päivittämällä ajastimen dynaamisesti.

# CSS selitys

## 1. Global Reset (\* Selector)

- **Mikä se on:** \*-valitsin on universaali valitsin, joka kohdistuu kaikkiin sivun elementteihin.
- **Tarkoitus:** Tämä sääntö nollaa kaikkien elementtien oletusmarginaalit ja -täytteet varmistaen yhtenäiset välit eri selaimissa. box-sizing: border-box -sääntö varmistaa, että täytteet ja reunat sisällytetään elementtien kokonaisleveyteen ja -korkeuteen.
- **Tärkeä yksityiskohta:** Globaalin nollauksen käyttäminen varmistaa puhtaan pohjan, poistaen ristiriitaisuudet välien ja mitoituksen välillä eri selaimissa. Tämä helpottaa yhdenmukaisten layoutien suunnittelua.

## 2. Body Styling (body)

- **Mikä se on:** body-sääntö tyylittää koko verkkosivun ja määrittää sivun yleisen asettelun ja ulkoasun.
- **Tarkoitus:**
  - **Fonttiperhe:** font-family: 'Arial', sans-serif; asettaa siistin, modernin fontin, joka on laajasti tuettu ja parantaa luettavuutta.
  - **Tausta:** linear-gradient(135deg, #74ebd5, #acb6e5) luo vinon liukuvärin, joka siirtyy tealin ja vaaleansinisen välillä, antaen sivulle raikkaan ja elinvoimaisen ulkonäön.
  - **Flexbox-asettelu:** display: flex; justify-content: center; align-items: center; varmistaa, että sisältö on täydellisesti keskitetty sekä vaaka- että pystysuunnassa.
  - **Korkeus:** height: 100vh; tekee verkkosivusta koko selaimen korkuisen, jolloin sisältö pysyy keskitettynä.
- **Tärkeä yksityiskohta:** Yhdistelmä liukuväritaustaa ja keskitettyä asettelua luo visuaalisesti vaikuttavan suunnittelun, joka mukautuu hyvin eri näyttökokoihin ja näyttää modernilta ja viimeistellyltä.

## 3. Container Styling (.container)

- **Mikä se on:** .container-luokka tyylittää pääsisältökääreen, joka sisältää sovelluksen näkyvät elementit.
- **Tarkoitus:**
  - **Taustaväri:** background-color: #fff; antaa säilölle puhtaan, valkoisen taustan, joka erottuu hyvin body-elementin värikkäästä gradientista.
  - **Täyte:** padding varmistaa, että sisällön ja säilön reunojen välillä on riittävästi tilaa, mikä tekee asettelusta avoimen ja helppolukuisen.
  - **Reunan pyöristys:** border-radius: 12px; luo säilölle pehmeät, pyöristetyt kulmat, mikä antaa modernin korttimaisen ulkonäön.
  - **Varjostus:** box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); lisää syvyyttä antamalla säilölle pehmeän varjon, jolloin se näyttää kohoavan sivun päältä.
  - **Maksimileveys:** max-width: 450px; rajoittaa säilön leveyttä, jotta se ei muutu liian leveäksi suuremmilla näytöillä, varmistaen luettavuuden.
- **Tärkeä yksityiskohta:** Säilö toimii keskipisteenä sisällölle. Sen pyöristetyt kulmat, varjo ja täytteet tarjoavat ammattimaisen, korttimaisen asettelun, joka on visuaalisesti miellyttävä ja toimiva.

## 4. Hover Effect for Container (.container:hover)

- **Mikä se on:** käyttää visuaalista tehostetta, kun käyttäjä vie hiiren säilön päälle.
- **Tarkoitus:** transform: scale(1.05); sääntö suurentaa säilöä hieman hiiren ollessa sen päällä, lisäten hienovaraista zoomaustehostetta, joka parantaa sivun interaktiivisuutta.
- **Tärkeä yksityiskohta:** Tämä hover-tehoste luo syvyyden ja sitoutumisen tunteen, tehden sovelluksesta dynaamisemman ja reaktiivisemman käyttäjän toimille.

## 5. Heading Styling (h1)

- **Mikä se on:** h1-sääntö tyylittää sivun pääotsikon, "Event Countdown."
- **Tarkoitus:**
  - **Fonttikoko:** Suuri fonttikoko tekee otsikosta näkyvän ja huomattavan heti.
  - **Tekstin väri:** Tumma väri (#2c3e50) varmistaa, että teksti erottuu hyvin valkoisesta taustasta, parantaen luettavuutta.
  - **Alamarginaali:** Lisää tilaa otsikon alle, erottaen sen syötekentistä ja tehden asettelusta siistimmän.
- **Tärkeä yksityiskohta:** Otsikko on tyylitelty olemaan rohkea ja selkeä, tarjoten vahvan visuaalisen hierarkian.

## 6. Input Fields Styling (input[type="text"], input[type="date"])

- **Mikä se on:** Nämä säännöt tyylittävät tekstisyötteet tapahtuman nimeä varten ja päivämääräsyötteet tapahtuman päivämäärää varten.
- **Tarkoitus:**
  - **Leveys:** Syötekentät vievät koko säilön leveyden, varmistaen yhdenmukaisen kohdistuksen.
  - **Täyte:** Lisää sisäistä tilaa syötekenttiin, tehden niistä mukavampia käyttää.
- **Tärkeä yksityiskohta:** Syötteet on suunniteltu helpottamaan käyttöä, ja niissä on riittävästi tilaa ja hienovaraisia visuaalisia tehosteita, kuten varjoja ja fokusmuutoksia.

## 7. Focus Effect for Input Fields (input[type="text"]:focus, input[type="date"]:focus)

- **Mikä se on:** Nämä säännöt soveltuvat, kun käyttäjä napsauttaa syötekenttiä, jolloin ne aktivoituvat (focus).
- **Tarkoitus:** Reunaväri muuttuu kirkkaansiniseksi (#007bff), mikä viestii käyttäjälle, että syötekenttä on aktiivinen ja valmis syötteen syöttämiseen. Oletusarvoinen kehys poistetaan, jotta muotoilu pysyy puhtaana.
- **Tärkeä yksityiskohta:** Fokustehoste ohjaa käyttäjän huomion, parantaen käytettävyyttä tekemällä selväksi, mikä elementti on tällä hetkellä aktiivinen. Se myös lisää pienen, mutta tehokkaan interaktiivisuuden.

## 8. Button Styling (button)

- **Mikä se on:** Tämä sääntö tyylittää "Start Countdown" -painikkeen.
- **Tarkoitus:**
  - **Taustaväri:** Kirkas sininen taustaväri (#007bff) tekee painikkeesta erottuvan ja viestii, että se on napsautettava elementti.
  - **Tekstin väri:** Valkoinen teksti luo vahvan kontrastin sinistä taustaa vasten, varmistaen, että painikkeen teksti on helposti luettavissa.
  - **Täyte:** Täyte varmistaa, että painike on riittävän suuri ollakseen helposti napsautettava, mikä parantaa käytettävyyttä.
  - **Reunan pyöristys:** Pyöristetyt kulmat tekevät painikkeesta visuaalisesti yhdenmukaisen muun sovelluksen modernin suunnittelun kanssa.
  - **Kohdistin:** Kohdistin muuttuu osoittimeksi, kun painikkeen päällä on hiiri, mikä viestii, että se on napsautettavissa.
  - **Siirtymä:** Hienovarainen siirtymä tehostaa taustaväriä ja liikettä hover- ja napsautustilanteissa, mikä tekee painikkeesta responsiivisemman.
- **Tärkeä yksityiskohta:** Painike on tyylitelty erottuvaksi ja interaktiiviseksi, rohkaisten käyttäjiä käyttämään sovellusta.

## 9. Hover Effect for Button (button:hover)

- **Mikä se on:** lisää visuaalisen tehosteen, kun käyttäjä vie hiiren painikkeen päälle.
- **Tarkoitus:** Taustaväri tummenee syvemmän siniseksi (#0056b3), mikä antaa käyttäjälle palautetta siitä, että painike on interaktiivinen ja valmiina napsautettavaksi. Kevyt ylöspäin tapahtuva liike (transform: translateY(-3px)) lisää nostovaikutelman, mikä parantaa interaktiivisuutta.
- **Tärkeä yksityiskohta:** Tämä hover-tehoste tarjoaa välittömän visuaalisen palautteen, mikä tekee painikkeesta dynaamisemman ja reaktiivisemman.

## 10. Button Active State (button:active)

- **Mikä se on:** soveltuu, kun painiketta napsautetaan.
- **Tarkoitus:** Taustaväri tummenee entisestään (#004494), ja painike siirtyy hieman alaspäin (transform: translateY(1px)), jäljitellen fyysisen painikkeen painallusta.
- **Tärkeä yksityiskohta:** Tämä taktiilinen palaute tekee painikkeesta reaktiivisemman ja realistisemman, parantaen vuorovaikutuksen kokonaiskokemusta.

## 11. Countdown Display Styling (.countdown)

- **Mikä se on:** .countdown-luokka tyylittää osion, jossa countdown-tulokset näytetään.
- **Tarkoitus:**
  - **Ylämarginaali:** Lisää tilaa countdown-näytön yläpuolelle, erottaen sen painikkeesta ja luoden siistimmän asettelun.
  - **Fonttikoko:** Suuri fonttikoko varmistaa, että countdown on helppolukuinen.
  - **Tekstin väri:** Tummempi väri (#2c3e50) varmistaa, että countdown on selkeä ja luettavissa.
  - **Minimikorkeus:** Minimikorkeus varmistaa, että asettelu pysyy vakaana ennen kuin countdown alkaa, estäen odottamattomat muutokset sisällössä.
- **Tärkeä yksityiskohta:** Countdown-näyttö on tyylitelty selkeäksi ja luettavaksi, varmistaen, että käyttäjä voi helposti seurata tapahtumaan jäljellä olevaa aikaa.

## JavaScript selitys

### 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...});)

- **Mikä se on**: Tämä tapahtumankuuntelija odottaa, että koko HTML-dokumentti ladataan ja jäsennetään ennen JavaScript-koodin suorittamista.
- **Tarkoitus**: Se varmistaa, että skripti voi vuorovaikuttaa DOM-elementtien kanssa vasta, kun ne ovat täysin ladattu. Ilman tätä kuuntelijaa JavaScript voisi yrittää käsitellä elementtejä, jotka eivät ole vielä saatavilla, mikä voi aiheuttaa virheitä.
- **Tärkeä yksityiskohta**: DOMContentLoaded-tapahtumaa käyttämällä varmistetaan, että kaikki HTML-elementit (kuten syötekentät ja painike) ovat JavaScriptin käytettävissä, kun skripti suoritetaan, mikä tekee sovelluksesta luotettavamman.

### 2. DOM-elementtien valinta (const eventNameInput = document.getElementById('event-name');)

- **Mikä se on**: Skripti valitsee keskeiset DOM-elementit, mukaan lukien tapahtuman nimen syötekenttä, tapahtuman päivämäärän syöte, painike ja ajastimen näyttö.
- **Tarkoitus**:
  - **eventNameInput**: Tämä viittaa syötekenttään, johon käyttäjä syöttää tapahtuman nimen.
  - **eventDateInput**: Tämä kohdistaa päivämäärän syötteen, jossa käyttäjä valitsee tapahtuman päivämäärän.
  - **startButton**: Tämä valitsee painikkeen, joka käynnistää ajastimen, kun sitä klikataan.
  - **countdownDiv**: Tämä viittaa diviin, jossa ajastimen tulos näytetään.
- **Tärkeä yksityiskohta**: Näiden elementtien valitseminen mahdollistaa sen, että JavaScript voi dynaamisesti vuorovaikuttaa HTML:n kanssa, kuten hakea käyttäjän syötteitä ja päivittää ajastimen tekstiä.

### 3. Painikkeen klikkauksen tapahtumankuuntelija (startButton.addEventListener('click', startCountdown);)

- **Mikä se on**: startButton-painikkeeseen on lisätty tapahtumankuuntelija, joka kuuntelee klikkaustapahtumaa. Kun painiketta klikataan, suoritetaan startCountdown-funktio.
- **Tarkoitus**: Tämä tapahtumankuuntelija tekee sovelluksesta interaktiivisen ja antaa käyttäjän käynnistää ajastimen. Ilman tätä kuuntelijaa sovellus ei reagoisi käyttäjän toimintoihin.
- **Tärkeä yksityiskohta**: Tapahtumankuuntelija tekee painikkeesta käyttäjän syötteisiin reagoivan, mikä tekee sovelluksesta dynaamisen ja kiinnostavan.

### 4. Ajastinfunktio (function startCountdown() {...})

- **Mikä se on**: Tämä funktio hallitsee sovelluksen päälogiikkaa, laskee jäljellä olevan ajan tapahtumaan asti ja päivittää näytön.
- **Vaiheet**:
  - **Syötteiden hakeminen**: Funktio hakee tapahtuman nimen ja tapahtuman päivämäärän syötekentistä. Tapahtuman päivämäärä muunnetaan Date-olioksi laskutoimituksia varten.
  - **Syötteen validointi**: Funktio tarkistaa, onko sekä tapahtuman nimi että päivämäärä annettu ja ovatko ne kelvollisia. Jos jokin on virheellinen tai puuttuu, se näyttää virheilmoituksen ajastin-divissä ja lopettaa ajastimen.
  - **Edellisen intervallin tyhjentäminen**: Jos edellinen ajastin on käynnissä, se tyhjentää intervallin clearInterval-komennolla estääkseen useiden ajastimien käynnistymisen samanaikaisesti.
  - **Ajastimen käynnistäminen**: setInterval-funktio käynnistää uuden intervallin, joka päivittyy joka sekunti, laskemalla jäljellä olevan ajan tapahtumaan.
- **Tärkeä yksityiskohta**: Funktio on vankka, käsitellen syötteen validointia, edellisten ajastimien tyhjentämistä ja varmistaen, että ajastin päivittyy reaaliajassa.

### 5. Syötteen validointi (if (!eventName || isNaN(eventDate)) {...})

- **Mikä se on**: Tämä osa funktiota varmistaa, että sekä tapahtuman nimi että kelvollinen tapahtuman päivämäärä on annettu. Jos ei, ajastin-diviin näytetään virheilmoitus.
- **Tarkoitus**: Tämä validointi varmistaa, että ajastin alkaa vain kelvollisilla syötteillä. Se estää virheet tai odottamattoman toiminnan, joka voi johtua puutteellisista tai virheellisistä tiedoista.
- **Tärkeä yksityiskohta**: Virheilmoitus näytetään punaisella tekstillä (#e74c3c), mikä informoi selkeästi käyttäjää, kun syöte on virheellinen.

### 6. Ajan laskeminen ja näyttö (const timeDifference = eventDate - now;)

- **Mikä se on**: Kun syötteet on validoitu ja ajastin käynnistetty, setInterval-funktio laskee jäljellä olevan ajan nykyisen päivämäärän ja tapahtuman päivämäärän välillä toistuvasti.
- **Vaiheet**:
  - **Nykyinen aika**: Nykyinen päivämäärä ja aika haetaan new Date()-komennolla.
  - **Aikaero**: Nykyisen päivämäärän ja tapahtuman päivämäärän välinen aikaero lasketaan millisekunneissa.
  - **Ajan muuntaminen**: Aikaero muunnetaan päiviksi, tunneiksi, minuuteiksi ja sekunneiksi suorittamalla matemaattisia operaatioita kunkin aikayksikön erottamiseksi.
- **Tärkeä yksityiskohta**: Ajastin lasketaan reaaliajassa ja päivittyy joka sekunti, varmistaen, että näytetty aika on tarkka.

### 7. Ajastimen loppuunsaattaminen (if (timeDifference <= 0) {...})

- **Mikä se on**: Jos nykyisen päivämäärän ja tapahtuman päivämäärän välinen aikaero tulee nollaksi tai negatiiviseksi, ajastin pysähtyy ja käyttäjälle näytetään viesti, joka kertoo, että tapahtuma on jo tapahtunut.
- **Tarkoitus**: Tämä estää ajastimen juoksemasta loputtomiin sen jälkeen, kun tapahtuman päivämäärä on ohitettu, tarjoten selkeän viestin, kun ajastin saavuttaa nollan.
- **Tärkeä yksityiskohta**: Ajastimen intervalli tyhjennetään clearInterval-komennolla, ja näytetään viesti, joka kertoo, että tapahtuma on jo ohitettu.

### 8. DOM päivittäminen (countdownDiv.textContent = ...;)

- **Mikä se on**: Funktio päivittää dynaamisesti ajastin-divin sisällön jäljellä olevalla ajalla, jolloin käyttäjä näkee ajastimen reaaliajassa.
- **Tarkoitus**: DOM:n dynaaminen päivittäminen mahdollistaa ajastimen näkyvyyden ja tarkkuuden. Se tarjoaa reaaliaikaista palautetta käyttäjälle, mikä tekee sovelluksesta interaktiivisen.
- **Tärkeä yksityiskohta**: DOM:n päivittäminen reaaliajassa tekee ajastimesta reagoivan ja sitouttavan käyttäjän näkökulmasta.

### 9. Edellisen intervallin tyhjentäminen (if (countdownInterval) { clearInterval(countdownInterval); })

- **Mikä se on**: Jos edellinen ajastin on käynnissä, clearInterval-funktiota käytetään sen pysäyttämiseksi ennen uuden ajastimen aloittamista.
- **Tarkoitus**: Tämä varmistaa, että useita ajastimia ei käynnisty samanaikaisesti, mikä voisi aiheuttaa sovelluksen virheellisen toiminnan.
- **Tärkeä yksityiskohta**: Edellisten intervallien tyhjentäminen on välttämätöntä sovelluksen toiminnan ylläpitämiseksi ja päällekkäisten ajastimien välttämiseksi.

### 10. Virheenkäsittely (countdownDiv.textContent = 'Please enter a valid event name and date.';)

- **Mikä se on**: Jos käyttäjä syöttää virheellisiä tietoja (ei tapahtuman nimeä tai virheellinen päivämäärä), sovellus näyttää virheilmoituksen ajastin-divissä.
- **Tarkoitus**: Tämä parantaa käyttökokemusta ohjaamalla käyttäjiä korjaamaan syötteensä ennen ajastimen käynnistämistä.
- **Tärkeä yksityiskohta**: Näyttämällä selkeä virheilmoitus punaisella väreillä, sovellus varmistaa, että käyttäjä ymmärtää, mikä meni pieleen ja miten se voidaan korjata.

### 11. Reaaliaikaiset päivitykset setIntervalilla (setInterval(() => {...}, 1000);)

- **Mikä se on**: setInterval-funktiota käytetään ajastimen päivittämiseen joka sekunti, varmistaen, että käyttäjä näkee jäljellä olevan ajan vähenemisen reaaliajassa.
- **Tarkoitus**: Tämä funktio luo reaaliaikaisen ajastimen efektin, jossa jäljellä oleva aika lasketaan uudelleen joka sekunti.
- **Tärkeä yksityiskohta**: Reaaliaikainen päivitys luo sitouttavan ja dynaamisen käyttökokemuksen, jolloin ajastin tuntuu elävältä ja interaktiiviselta.
