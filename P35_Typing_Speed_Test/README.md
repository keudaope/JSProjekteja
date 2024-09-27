# Nettisivu: https://keudaope.github.io/JSProjekteja/P35_Typing_Speed_Test

# **Johdanto**

Typing Speed Test on hyödyllinen sovellus, joka mittaa käyttäjän kirjoitusnopeutta ja tarkkuutta. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptin, HTML:n
ja CSS:n käyttöä samalla, kun he oppivat käsittelemään käyttäjän syötteitä, mittaamaan aikavälejä ja päivittämään DOM:ia dynaamisesti. Käyttäjät voivat aloittaa testin, kirjoittaa annetun tekstin ja nähdä lopuksi tuloksena heidän kirjoitusnopeutensa ja tarkkuutensa.

# **HTML Selitys**

## 1. DOCTYPE-ilmoitus (<code><</code>!DOCTYPE html>)

- **Mikä se on:** Tämä ilmoittaa, että dokumentti on kirjoitettu HTML5-standardin mukaisesti.
- **Tarkoitus:** Se varmistaa, että verkkosivu tulkitaan modernien HTML-standardien mukaan kaikissa selaimissa.
- **Tärkeä yksityiskohta:** Tämän ilmoituksen lisääminen auttaa välttämään mahdolliset ongelmat vanhojen renderöintitilojen kanssa.

## 2. HTML-tagi (<code><</code>html lang="en">)

- **Mikä se on:** <code><</code>html-tagi on juurielementti, joka käärii kaikki muut HTML-elementit sivulla. **lang="en"**-attribuutti määrittää kielen englanniksi.
- **Tarkoitus:** Lang-attribuutti on tärkeä saavutettavuustyökaluille ja hakukoneille, auttaen niitä ymmärtämään dokumentin kielen.
- **Tärkeä yksityiskohta:** Kielen määrittäminen parantaa sekä hakukoneoptimointia (SEO) että saavutettavuutta.

## 3. Head-tagi (<code><</code>head>)

- **Mikä se on:** <code><</code>head-osio sisältää metatiedot ja linkit ulkoisiin resursseihin.
- **Tarkoitus:** Se mahdollistaa selaimen lataamaan olennaiset tiedot, kuten CSS-tyylit, fontit ja metatiedot.
- **Tärkeät yksityiskohdat:**
  - **Meta Charset:** (<code><</code>meta charset="UTF-8">) varmistaa, että dokumentti käyttää UTF-8-enkoodausta, tukien laajaa merkkivalikoimaa.
  - **Viewport Meta Tag:** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">) tekee sovelluksesta responsiivisen, skaalaamalla sen sopimaan eri näyttökokoihin, erityisesti mobiililaitteilla.
  - **Title-tagi:** (<code><</code>title>Typing Speed Test<code><</code>/title>) määrittää selaimen välilehdessä näytettävän tekstin, joka kuvaa sivun sisältöä.

## 4. Body-tagi (<code><</code>body>)

- **Mikä se on:** <code><</code>body sisältää kaiken sivulla näkyvän sisällön, kuten otsikot, tekstialueet, painikkeet ja tulokset.
- **Tarkoitus:** <code><</code>body on osa, jossa kaikki käyttäjän nähtävissä oleva sisältö näytetään. Se on tyylitelty CSS:llä ja sitä manipuloidaan JavaScriptillä interaktiivisen kokemuksen luomiseksi.
- **Tärkeä yksityiskohta:** Kaikki sisältö, jonka kanssa käyttäjä vuorovaikuttaa, on sijoitettu <code><</code>body-elementtiin, mukaan lukien tekstisyöte ja painikkeet.

## 5. Container-divi (<code><</code>div class="container">)

- **Mikä se on:** <code><</code>div-elementti, jolla on **class="container"**, ryhmittelee kaikki sivun pääelementit yhteen.
- **Tarkoitus:** Se ryhmittelee liittyvän sisällön (otsikko, tekstialue, painike ja tulokset) yhteen, mikä mahdollistaa keskitetyn tyylittelyn ja asettelun hallinnan.
- **Tärkeä yksityiskohta:** Container toimii korttimaisena säiliönä, jossa on täytettä, varjoa ja pyöristetyt kulmat, mikä luo siistin ja modernin ulkoasun.

## 6. Otsikkotagi (<code><</code>h1>Typing Speed Test<code><</code>/h1>)

- **Mikä se on:** <code><</code>h1-tagi näyttää sivun pääotsikon.
- **Tarkoitus:** Se tarjoaa otsikon, joka ilmoittaa käyttäjälle, että kyseessä on kirjoitusnopeustesti.
- **Tärkeä yksityiskohta:** Otsikko on tyylitelty näkyväksi, tehden sovelluksen tarkoituksen selväksi.

## 7. Testitekstin divi (<code><</code>div class="test-text" id="test-text">)

- **Mikä se on:** <code><</code>div-elementti näyttää testitekstin, jonka käyttäjän tulee kirjoittaa.
- **Tarkoitus:** Se tarjoaa kiinteän tekstin, jonka käyttäjät toistavat testin aikana.
- **Tärkeä yksityiskohta:** Teksti on tyylitelty niin, että se on helppolukuinen ja selkeä käyttäjän kirjoittaessa.

## 8. Tekstialue (<code><</code>textarea id="typing-area" placeholder="Start typing here..." disabled><code><</code>/textarea>)

- **Mikä se on:** <code><</code>textarea-elementti, johon käyttäjät voivat kirjoittaa testitekstin.
- **Tarkoitus:** Se toimii syötekenttänä, johon käyttäjät kirjoittavat. Aluksi se on pois käytöstä ja otetaan käyttöön vasta, kun testi alkaa.
- **Tärkeä yksityiskohta:** **id="typing-area"** mahdollistaa sen viittaamisen JavaScriptissä, jolloin sitä voidaan ottaa käyttöön, poistaa käytöstä ja lukea käyttäjän syötteitä.

## 9. Painike (<code><</code>button id="start-button">Start Test<code><</code>/button>)

- **Mikä se on:** <code><</code>button-elementti, joka käynnistää kirjoitusnopeustestin.
- **Tarkoitus:** Se antaa käyttäjille hallinnan testin aloittamisesta, jolloin he voivat valmistautua ennen aloittamista.
- **Tärkeä yksityiskohta:** **id="start-button"**-attribuuttia käytetään JavaScriptissä liittämään tapahtumankuuntelija ja hallitsemaan testin aloitusta.

## 10. Tulosten divi (<code><</code>div class="result" id="result">)

- **Mikä se on:** <code><</code>div, jossa kirjoitusnopeuden ja tarkkuuden tulokset näytetään testin jälkeen.
- **Tarkoitus:** Se toimii dynaamisen sisällön paikkamerkkinä ja näyttää käyttäjälle heidän tuloksensa.
- **Tärkeä yksityiskohta:** **id="result"** tekee siitä helpon päivittää JavaScriptin avulla laskettujen tulosten perusteella.

## 11. Script-tagi (<code><</code>script src="app.js"><code><</code>/script>)

- **Mikä se on:** <code><</code>script-tagi linkittää ulkoiseen JavaScript-tiedostoon, joka sisältää sovelluksen toiminnallisuuden.
- **Tarkoitus:** Se varmistaa, että kirjoittamiseen liittyvä logiikka ja testin laskelmat ovat erillään HTML-rakenteesta.
- **Tärkeä yksityiskohta:** JavaScriptin linkittäminen ulkoisesti auttaa pitämään HTML-tiedoston siistinä ja modulaarisena, noudattaen parhaita käytäntöjä rakenteen ja toiminnallisuuden erottamiseksi.

# **CSS Selitys**

## 1. Global Reset (\*)

- **Mikä se on:** Universaali valitsin (\*) kohdistaa tyylit kaikkiin sivun elementteihin.
- **Tarkoitus:** Se nollaa oletusmarginaalit ja -täytteet kaikissa elementeissä, varmistaen yhdenmukaisuuden eri selainten välillä. Lisäksi **box-sizing: border-box** sisällyttää täytteen ja reunukset elementin leveyteen ja korkeuteen.
- **Tärkeä yksityiskohta:** Tämä reset antaa selkeän pohjan asettelulle ja välttää selainkohtaiset tyylit, jotka voisivat häiritä suunnittelua.

## 2. Body-tyylitys (body)

- **Mikä se on:** Body-säännöllä määritellään sivun yleinen asettelu ja ulkoasu.
- **Tärkeät ominaisuudet:**
  - **font-family:** 'Roboto', sans-serif;: Asettaa sivun fontiksi Google Fontsista haetun modernin ja puhtaan 'Roboto'-fontin.
  - **background:** lineaarigradientti (135 astetta, #74ebd5, #acb6e5);: Lisää pehmeän gradienttitaustan, joka vaihtuu tealin ja vaaleansinisen välillä, tehden sovelluksesta visuaalisesti houkuttelevan.
  - **display:** flex; **justify-content:** center; **align-items:** center;: Keskittää sisällön sekä vaakasuunnassa että pystysuunnassa varmistaen, että sovellus sijoittuu ruudun keskelle.
  - **height:** 100vh;: Varmistaa, että sisältö vie koko näkymän korkeuden, tehden asettelusta responsiivisen ja keskitetyn kaikilla näytön kokoluokilla.
- **Tarkoitus:** Nämä tyylit varmistavat, että sivun asettelu on täysin responsiivinen, visuaalisesti tasapainoinen ja moderni.

## 3. Container-tyylitys (.container)

- **Mikä se on:** **.container**-luokka tyylittää pääsisällön säilön, joka sisältää testitekstin, tekstialueen, painikkeen ja tuloksen.
- **Tärkeät ominaisuudet:**
  - **background-color:** #fff;: Asettaa puhtaan valkoisen taustan säilölle, tarjoten hyvän kontrastin gradienttitaustaa vasten.
  - **padding:** 40px;: Lisää sisäistä tilaa säilössä, estäen sisällön koskettamasta reunoja ja parantaen luettavuutta.
  - **border-radius:** 12px;: Pyöristää säilön kulmat, luoden modernin ja pehmeäreunaisen ulkoasun.
  - **box-shadow:** 0 10px 25px rgba(0, 0, 0, 0.1);: Lisää hienovaraisen varjon säilön ympärille, tehden siitä visuaalisesti erottuvan.
  - **width:** 600px;: Määrittää säilön leveyden, varmistaen yhtenäisen asettelun suuremmilla näytöillä.
  - **transition:** transform 0.3s ease;: Mahdollistaa sujuvan siirtymäefektin, kun säilöä skaalataan hover-tilassa.
- **Tarkoitus:** Säilön tyylit luovat korttimaisen ulkoasun, jossa on pehmeyttä, varjostusta ja pyöristetyt reunat, tehden sovelluksesta tyylikkään ja modernin.

## 4. Hover-efekti säilölle (.container:hover)

- **Mikä se on:** Hover-efekti, joka aktivoituu, kun käyttäjä siirtää hiiren säilön päälle.
- **Tärkeät ominaisuudet:**
  - **transform:** scale(1.03);: Suurentaa säilöä hieman hover-tilassa, luoden hienovaraisen zoomaustehon.
- **Tarkoitus:** Tämä hover-efekti lisää interaktiivisuutta sovellukseen, tehden säilöstä dynaamisen ja responsiivisen käyttäjän toimille.

## 5. Otsikon tyylitys (h1)

- **Mikä se on:** **h1**-tagi tyylittää sovelluksen pääotsikon.
- **Tärkeät ominaisuudet:**
  - **font-size:** 2.5em;: Tekee otsikosta suuren ja näkyvän, jotta se kiinnittää käyttäjän huomion.
  - **margin-bottom:** 20px;: Lisää tilaa otsikon alle, erottaen sen alla olevasta sisällöstä ja parantaen asettelua.
  - **color:** #333;: Asettaa tummanharmaan värin, joka erottuu vaaleasta taustasta.
- **Tarkoitus:** Otsikko on suunniteltu olemaan rohkea ja visuaalisesti vaikuttava, varmistaen, että käyttäjä tietää heti sovelluksen tarkoituksen.

## 6. Testitekstin tyylitys (.test-text)

- **Mikä se on:** **.test-text**-luokka tyylittää tekstin, jonka käyttäjän tulee kirjoittaa.
- **Tärkeät ominaisuudet:**
  - **margin-bottom:** 20px;: Lisää tilaa tekstin alle, erottaen sen tekstialueesta.
  - **font-size:** 1.3em;: Tekee testitekstistä helposti luettavan ja selkeästi näkyvän.
  - **background-color:** #f8f8f8;: Asettaa vaalean taustan, joka parantaa luettavuutta.
  - **padding:** 15px;: Lisää sisäistä tilaa tekstin ympärille tehden siitä luettavamman.
  - **border-radius:** 8px;: Pyöristää testitekstialueen kulmat, pitäen sen visuaalisesti yhtenäisenä säilön kanssa.
- **Tarkoitus:** Nämä tyylit varmistavat, että teksti on visuaalisesti selkeä ja erottuva muista elementeistä, helpottaen käyttäjän lukemista ja kirjoittamista.

## 7. Tekstialueen tyylitys (textarea)

- **Mikä se on:** **textarea** tyylittää syötealueen, johon käyttäjät kirjoittavat testitekstin.
- **Tärkeät ominaisuudet:**
  - **width:** 100%;: Varmistaa, että tekstialue täyttää koko säilön leveyden.
  - **height:** 120px;: Tarjoaa tarpeeksi tilaa mukavaan kirjoittamiseen.
  - **padding:** 15px;: Lisää sisäistä tilaa parantaen luettavuutta ja mukavuutta kirjoittaessa.
  - **border:** 1px solid #ccc;: Asettaa kevyen reunuksen tekstialueen ympärille, erottaen sen visuaalisesti säilön taustasta.
  - **border-radius:** 8px;: Pyöristää tekstialueen kulmat yhtenäisyyden vuoksi.
  - **box-shadow:** 0 5px 15px rgba(0, 0, 0, 0.05);: Lisää hienovaraisen varjon syvyyden luomiseksi.
  - **transition:** border-color 0.3s ease;: Siirtää sujuvasti reunuksen väriä, kun tekstialue on aktiivinen.
- **Tarkoitus:** Nämä tyylit tekevät tekstialueesta käyttäjäystävällisen ja visuaalisesti miellyttävän, varmistaen mukavan ja responsiivisen kirjoituskokemuksen.

## 8. Tekstialueen fokus-efekti (textarea:focus)

- **Mikä se on:** Tämä sääntö aktivoituu, kun tekstialue saa fokuksen (käyttäjä klikkaa sisälle).
- **Tärkeät ominaisuudet:**
  - **border-color:** #007bff;: Muuttaa reunuksen värin siniseksi, kun tekstialue on aktiivinen, tarjoten visuaalista palautetta.
- **Tarkoitus:** Fokus-efekti auttaa käyttäjiä tunnistamaan aktiivisen syötekentän ja parantaa kokonaiskäyttökokemusta.

## 9. Painikkeen tyylitys (button)

- **Mikä se on:** Tyylit määrittävät "Start Test" -painikkeen ulkoasun.
- **Tärkeät ominaisuudet:**
  - **padding:** 12px 25px;: Tarjoaa riittävästi tilaa tekstille ja varmistaa, että painike on helppo klikata.
  - **background-color:** #007bff;: Asettaa sinisen taustan, joka erottuu säilön taustasta.
  - **color:** #fff;: Varmistaa, että painikkeen teksti on valkoinen, tarjoten hyvän kontrastin sinisen taustan kanssa.
  - **border-radius:** 8px;: Pyöristää painikkeen kulmat modernin ulkoasun saavuttamiseksi.
  - **cursor:** pointer;: Muuttaa kursorin osoittimeksi, kun käyttäjä liikuttaa sen painikkeen päälle, mikä viestii, että painiketta voi klikata.
  - **transition:** background-color 0.3s ease, transform 0.2s ease;: Lisää sujuvat siirtymäefektit hover- ja klikkaustilanteissa, tehden painikkeesta interaktiivisemman.
- **Tarkoitus:** Nämä tyylit varmistavat, että painike on visuaalisesti erottuva, helposti klikattava ja tarjoaa sujuvat vuorovaikutukset.

## 10. Painikkeen hover-efekti (button:hover)

- **Mikä se on:** Hover-efekti aktivoituu, kun käyttäjä liikuttaa hiiren painikkeen päälle.
- **Tärkeät ominaisuudet:**
  - **background-color:** #0056b3;: Muuttaa painikkeen taustavärin tummemmaksi siniseksi hover-tilassa, tarjoten visuaalista palautetta.
  - **transform:** translateY(-3px);: Nostaa painiketta hieman hover-tilassa, tehden siitä interaktiivisemman.
- **Tarkoitus:** Tämä hover-efekti parantaa käyttäjäkokemusta tarjoamalla välitöntä palautetta ja rohkaisee vuorovaikutukseen.

## 11. Tulosnäytön tyylitys (.result)

- **Mikä se on:** **.result**-luokka tyylittää alueen, jossa testin tulokset (kirjoitusnopeus ja tarkkuus) näytetään.
- **Tärkeät ominaisuudet:**
  - **margin-top:** 20px;: Lisää tilaa tuloksen yläpuolelle, erottaen sen painikkeesta.
  - **font-size:** 1.3em;: Suurentaa fonttikokoa, tehden tuloksesta näkyvämmän.
  - **color:** #2c3e50;: Asettaa tumman värin hyvän luettavuuden takaamiseksi.
  - **min-height:** 50px;: Varmistaa, että tulosalue on yhtenäisen kokoinen, vaikka tuloksia ei olisi vielä näytetty.
- **Tarkoitus:** Nämä tyylit tekevät tuloksista visuaalisesti selkeitä ja näkyviä, varmistaen, että käyttäjät voivat helposti nähdä kirjoitusnopeutensa ja tarkkuutensa.

# **JavaScript Selitys**

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...}))

- **Mikä se on:** Tämä on tapahtumankuuntelija, joka odottaa koko HTML-dokumentin latautumista ennen kuin se suorittaa sisällä olevan skriptin.
- **Tarkoitus:** Se varmistaa, että JavaScript voi vuorovaikuttaa DOM-elementtien kanssa vasta, kun ne on kokonaan ladattu ja jäsennelty. Ilman tätä skripti saattaisi yrittää käsitellä elementtejä, joita ei vielä ole olemassa, mikä voi aiheuttaa virheitä.
- **Tärkeä yksityiskohta:** **DOMContentLoaded** takaa, että sovellus alkaa toimia vasta sen jälkeen, kun kaikki HTML-elementit, kuten tekstialue ja painike, ovat käytettävissä.

## 2. Testitekstin valinta (const testText = document.getElementById('test-text').innerText)

- **Mikä se on:** Tämä rivi hakee käyttäjän kirjoitettavan testitekstin käyttämällä elementin ID:tä (test-text) ja tallentaa sen merkkijonoksi.
- **Tarkoitus:** Testitekstiä käytetään käyttäjän syötteen vertailuun, mikä mahdollistaa sen, että sovellus voi arvioida, kirjoittiko käyttäjä tekstin oikein ja laskea nopeuden ja tarkkuuden.
- **Tärkeä yksityiskohta:** Tallentamalla teksti muuttujaan sitä on helppo verrata käyttäjän syötteeseen kirjoitustestin aikana.

## 3. Tekstialueen ja painikkeen valinnat (const typingArea = document.getElementById('typing-area'), const startButton = document.getElementById('start-button'))

- **Mikä se on:** Nämä rivit hakevat viittaukset tekstialueeseen, johon käyttäjä kirjoittaa, ja painikkeeseen, jolla testi aloitetaan, käyttäen niiden ID-tunnuksia.
- **Tarkoitus:** Sovellus seuraa ja hallitsee näitä elementtejä testin aikana. Tekstialue on paikka, johon käyttäjät kirjoittavat, ja painike käynnistää testin.
- **Tärkeä yksityiskohta:** Näiden elementtien valitseminen varmistaa, että sovellus voi vuorovaikuttaa niiden kanssa käyttäjän syötteen ja toiminnan hallitsemiseksi.

## 4. Alkuajan määritys (let startTime)

- **Mikä se on:** **startTime**-muuttuja on määritelty tallentamaan ajankohta, jolloin testi alkaa.
- **Tarkoitus:** Tämä on välttämätöntä, jotta voidaan laskea testin suorittamiseen kulunut kokonaisaika. Se asetetaan testin alkaessa ja verrataan aikaan, jolloin käyttäjä lopettaa kirjoittamisen.
- **Tärkeä yksityiskohta:** Alkuajan tallentaminen mahdollistaa kirjoitussession keston tarkan mittaamisen.

## 5. Start Test -funktio (function startTest() {...})

- **Mikä se on:** Tämä funktio tyhjentää tekstialueen ja muut elementit, mahdollistaa käyttäjän aloittaa kirjoittamisen ja tallentaa aloitusajan.
- **Vaiheet:**
  - Tekstialue tyhjennetään uutta alkua varten.
  - Tekstialue mahdollistetaan kirjoittamista varten.
  - Fokus asetetaan tekstialueeseen, jotta käyttäjä voi aloittaa kirjoittamisen välittömästi.
  - Kaikki tulokset nollataan.
  - Nykyinen aika tallennetaan (startTime), jotta voidaan laskea kirjoitussession kesto.
  - Asetetaan intervalli tarkistamaan käyttäjän kirjoittamista jatkuvasti (checkTyping()).
- **Tarkoitus:** Tämä funktio aloittaa kirjoitustestin valmistamalla käyttöliittymän ja asettamalla ajastimen käyttäjän edistymisen seuraamiseksi.
- **Tärkeä yksityiskohta:** Funktio varmistaa, että kaikki tarvittavat komponentit nollataan ja valmistellaan testiä varten ennen ajastimen käynnistämistä.

## 6. Check Typing -funktio (function checkTyping() {...})

- **Mikä se on:** Tämä funktio seuraa käyttäjän syötettä, vertaa sitä testitekstiin ja laskee kirjoitusnopeuden ja tarkkuuden, kun käyttäjä on valmis.
- **Vaiheet:**
  - Hakee käyttäjän kirjoittaman tekstin tekstialueelta.
  - Vertailee kirjoitettua tekstiä alkuperäiseen testitekstiin.
  - Jos käyttäjä on kirjoittanut koko tekstin oikein, funktio pysäyttää intervallin, tallentaa lopetusajan ja laskee kirjoitusnopeuden (WPM) ja tarkkuuden.
  - Kutsuu **calculateAccuracy()**-funktiota tarkkuuden määrittämiseksi.
- **Tarkoitus:** Tämä funktio varmistaa, että sovellus voi seurata käyttäjän edistymistä reaaliajassa ja antaa palautetta, kun käyttäjä on suorittanut kirjoitustestin.
- **Tärkeä yksityiskohta:** Funktio tarkistaa jatkuvasti, onko käyttäjä kirjoittanut tekstin oikein ja laskee lopputuloksen vasta, kun koko teksti on oikein kirjoitettu.

## 7. Kirjoitusnopeuden laskeminen (const timeTaken = (endTime - startTime) / 1000)

- **Mikä se on:** Tämä rivi laskee testiin käytetyn ajan vähentämällä **startTime** nykyajasta (**endTime**) ja jakamalla luvun 1000:lla muuttaen millisekunnit sekunneiksi.
- **Tarkoitus:** Tiedossa oleva testiaika mahdollistaa kirjoitusnopeuden laskemisen sanoina minuutissa (WPM).
- **Tärkeä yksityiskohta:** Tämä on tärkeä askel käyttäjän kirjoitusnopeuden määrittämisessä.

## 8. Sanojen minuutissa (WPM) laskeminen (const typingSpeed = (wordsTyped / timeTaken) \* 60)

- **Mikä se on:** Tämä rivi laskee käyttäjän kirjoitusnopeuden jakamalla kirjoitettujen sanojen määrän kuluneella ajalla ja kertomalla tulos 60:llä saadakseen sanoja minuutissa (WPM).
- **Tarkoitus:** Tämä mittari antaa palautetta siitä, kuinka nopeasti käyttäjä kirjoitti testitekstin aikana.
- **Tärkeä yksityiskohta:** Tulos on yleinen mittari (WPM), jota käytetään kirjoitustesteissä kirjoitustaidon arvioimiseksi.

## 9. Tarkkuuden laskeminen (function calculateAccuracy(typed, original) {...})

- **Mikä se on:** Tämä funktio vertaa käyttäjän kirjoittamia sanoja alkuperäiseen testitekstiin laskemalla, kuinka tarkasti käyttäjä kirjoitti.
- **Vaiheet:**
  - Jakaa sekä kirjoitetun että alkuperäisen tekstin sanataulukoiksi.
  - Käy läpi jokaisen sanan ja vertaa niitä laskeakseen oikein kirjoitettujen sanojen määrän.
  - Laskee oikein kirjoitettujen sanojen prosenttiosuuden suhteessa alkuperäisen tekstin kokonaismäärään.
- **Tarkoitus:** Tämä funktio varmistaa, että käyttäjät saavat palautetta paitsi nopeudestaan myös siitä, kuinka tarkasti he kirjoittivat annetun tekstin.
- **Tärkeä yksityiskohta:** Tarkkuus on tärkeä osa kirjoitustestejä, sillä se mittaa sekä nopeutta että huolellisuutta.

## 10. Intervallin hallinta (clearInterval(interval))

- **Mikä se on:** Tämä rivi pysäyttää intervallin, joka jatkuvasti tarkistaa käyttäjän kirjoittamisen edistymistä, kun testi on valmis.
- **Tarkoitus:** Intervallin pysäyttäminen estää lisätarkistukset testin päätyttyä, mikä vähentää tarpeetonta suorituskyvyn kuormitusta.
- **Tärkeä yksityiskohta:** Intervallin lopettaminen on oleellista kirjoitussession päättämiseksi oikein ja sen varmistamiseksi, ettei sovellus jatka turhaa tarkkailua.
