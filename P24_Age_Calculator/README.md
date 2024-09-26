# Nettisivu: https://keudaope.github.io/JSProjekteja/P24_Age_Calculator

# Johdanto

**Age Calculator** on hyödyllinen sovellus, joka laskee henkilön iän syntymäpäivän perusteella. Tämä projekti auttaa aloittelijoita harjoittelemaan **JavaScriptiä, HTML:ää** ja **CSS:ää**, samalla kun he oppivat käsittelemään käyttäjän syötteitä, työskentelemään päivämäärien kanssa ja päivittämään DOM:in dynaamisesti. Käyttäjät voivat syöttää syntymäpäivänsä ja nähdä lasketun ikänsä.

# HTML selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>)

**Mikä se on**: <code><</code>!DOCTYPE html> -määrittely löytyy jokaisen HTML5-dokumentin alusta.  
**Tarkoitus**: Se varmistaa, että selain käyttää moderneja HTML5-standardeja sivun renderöinnissä. Tämä määrittely on välttämätön, jotta selain ei käytä vanhentuneita tiloja.  
**Tärkeä yksityiskohta**: Sisällytä aina tämä määrittely, jotta verkkosivusi näkyy yhtenäisesti kaikissa nykyaikaisissa selaimissa.

## 2. HTML Tag (<code><</code>html lang="en">)

**Mikä se on**: <code><</code>html> tagi sisältää kaiken verkkosivun sisällön. Lang="en" -attribuutti määrittää dokumentin kielen englanniksi.  
**Tarkoitus**: Lang-attribuuttia käyttävät hakukoneet ja avustavat teknologiat ymmärtääkseen sivuston kielen, mikä parantaa saavutettavuutta ja hakukoneoptimointia (SEO).  
**Tärkeä yksityiskohta**: Lang-attribuutin lisääminen parantaa käyttökokemusta ei-englanninkielisille käyttäjille, jotka käyttävät ruudunlukuohjelmia tai käännöstyökaluja.

## 3. Head Tag (<code><</code>head>)

**Mikä se on**: <code><</code>head> -osio sisältää dokumentin metatiedot, linkit ulkoisiin resursseihin (kuten CSS:ään ja fontteihin) ja määrittää verkkosivun otsikon.  
**Tarkoitus**: <code><</code>head> -tagi lataa sivun renderöintiin tarvittavat resurssit ja metatiedot.  
**Tärkeät yksityiskohdat**:  
**Meta Charset (<code><</code>meta charset="UTF-8">)**: Määrittää merkistöksi UTF-8:ksi, joka tukee laajaa valikoimaa merkkejä ja symboleita varmistaen, että sisältö näkyy oikein.  
**Viewport Meta Tag (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">)**: Varmistaa, että sivu on responsiivinen ja mukautuu eri näyttökokoihin, erityisesti mobiililaitteilla.  
**Title Tag (<code><</code>title>Age Calculator</code><</code>)**: <code><</code>title>-tagi asettaa selainvälilehdessä näkyvän otsikon, joka auttaa käyttäjiä ja hakukoneita ymmärtämään sivun tarkoituksen.  
**Google Fonts Link (<code><</code>link href="[https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap](https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap)" rel="stylesheet">)**: Lataa 'Roboto'-fontin Google Fontsista, mikä tuo verkkosivulle modernia ja selkeää typografiaa.  
**CSS Link (<code><</code>link rel="stylesheet" href="styles.css">)**: Tämä linkittää ulkoiseen CSS-tiedostoon, joka sisältää kaikki sivun tyylisäännöt.

## 4. Body Tag (<code><</code>body>)

**Mikä se on**: <code><</code>body> -tagi sisältää kaiken näkyvän sisällön, jonka käyttäjät näkevät ja joiden kanssa he ovat vuorovaikutuksessa verkkosivulla.  
**Tarkoitus**: <code><</code>body> -sisältö on se, mitä käyttäjät näkevät ja jonka kanssa he toimivat, mukaan lukien otsikot, syötekentät, painikkeet ja tulokset. Nämä elementit saavat muotoilunsa CSS:ssä ja niitä manipuloidaan JavaScriptillä interaktiivisuuden saavuttamiseksi.  
**Tärkeä yksityiskohta**: Kaikki interaktiivinen tai dynaaminen sisältö sijoitetaan <code><</code>body>-tunnisteen sisään.

## 5. Container Div (<code><</code>div class="container">)

**Mikä se on**: Tämä <code><</code>div>-elementti, jossa on "container" -luokka, ryhmittelee sisällön (otsikko, syöte, painike ja tulos).  
**Tarkoitus**: Tämä kontti auttaa järjestämään sivun asettelua ja muotoilua. Se toimii "kääreenä", joka keskittää pääelementit ja lisää tietynlaista suunnittelua, jotta verkkosivu näyttää jäsennellyltä ja visuaalisesti houkuttelevalta.  
**Tärkeä yksityiskohta**: Kontti on olennainen yhtenäisten välimatkojen, taustan ja muiden tyylien soveltamisessa, mikä varmistaa, että sivu näyttää viimeistellyltä.

## 6. Heading (<code><</code>h1>Age Calculator</code><</code>)

**Mikä se on**: <code><</code>h1> -tagi näyttää sivun pääotsikon, joka on "Age Calculator".  
**Tarkoitus**: Otsikko antaa käyttäjälle kontekstin ja osoittaa sivun tarkoituksen. Se on myös tärkeä hakukoneoptimoinnille, koska <code><</code>h1>-tagi auttaa hakukoneita tunnistamaan sivun tärkeimmän aiheen.  
**Tärkeä yksityiskohta**: <code><</code>h1>-otsikko on yleensä muotoiltu erottuvaksi ja se on ensimmäinen asia, jonka käyttäjä huomaa, kun sivu latautuu.

## 7. Input Field (<code><</code>input type="date" id="birthdate" required>)

**Mikä se on**: <code><</code>input>-elementti on tyyppiä "date", mikä mahdollistaa käyttäjän valita päivämäärän kalenterinäkymästä. id="birthdate" tunnistaa elementin JavaScript-manipulaatiota varten.  
**Tarkoitus**: Tämä kenttä kerää käyttäjän syntymäpäivän. "required"-attribuutti varmistaa, että käyttäjä ei voi jättää kenttää tyhjäksi, mikä tekee validoinnista pakollista ennen lomakkeen lähettämistä.  
**Tärkeä yksityiskohta**: Syötekenttätyyppi "date" tarjoaa käyttäjäystävällisen tavan valita päivämäärä. id-attribuuttia käytetään JavaScriptissä, jotta syötteen arvo voidaan noutaa laskentaa varten.

## 8. Button (<code><</code>button id="calculate-button">Calculate Age</code><</code>)

**Mikä se on**: <code><</code>button>-elementti, jossa on id="calculate-button", laukaisee iän laskennan, kun sitä napsautetaan.  
**Tarkoitus**: Tämä painike on käyttäjän tärkein toimintakehotus. Kun käyttäjä napsauttaa sitä, se käynnistää JavaScript-toiminnon, joka laskee käyttäjän iän valitun syntymäpäivän perusteella.  
**Tärkeä yksityiskohta**: id="calculate-button" mahdollistaa JavaScriptin helposti liittää tapahtumakuuntelijan tähän painikkeeseen, mikä mahdollistaa vuorovaikutuksen.

## 9. Result Div (<code><</code>div class="result" id="result">)

**Mikä se on**: <code><</code>div>-elementti, joka näyttää laskentatuloksen. Se on oletuksena tyhjä, mutta JavaScript päivittää sen dynaamisesti.  
**Tarkoitus**: Tämä elementti toimii alueena, jossa käyttäjä näkee lasketun tuloksen painikkeen painamisen jälkeen. Sisältö lisätään dynaamisesti JavaScriptin avulla.  
**Tärkeä yksityiskohta**: id="result" mahdollistaa JavaScriptin kohdistaa ja päivittää tämä elementti lasketulla iällä.

## 10. Script Tag (<code><</code>script src="app.js"></code><</code>)

**Mikä se on**: <code><</code>script>-tagi linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää iän laskentalogiikan.  
**Tarkoitus**: Ulkoinen skripti sisältää JavaScript-koodin, joka hallitsee verkkosovelluksen toiminnallisuutta, kuten käsittelee painikkeen klikkausta ja laskee iän. JavaScriptin pitäminen erillään HTML:stä parantaa koodin järjestettävyyttä ja ylläpidettävyyttä.  
**Tärkeä yksityiskohta**: Ulkoiseen JavaScript-tiedostoon linkittäminen pitää HTML:n siistinä ja logiikan järjestettynä erilliseen tiedostoon.

# CSS selitys

## 1. Global Reset (\* Selector):

- **Mikä se on**: Yleinen \*-valitsin kohdistaa kaikkiin sivun elementteihin.
- **Tarkoitus**: Poistaa oletusmarginaalit ja -täytteet kaikista elementeistä varmistaakseen yhdenmukaisen tilan eri selaimissa. Sääntö box-sizing: border-box; varmistaa, että täytteet ja reunukset sisältyvät elementin kokonaisleveyteen ja -korkeuteen, helpottaen asettelujen hallintaa.
- **Tärkeä yksityiskohta**: Tämä resetointi varmistaa elementtien yhtenäisen renderöinnin selaimissa ja estää ei-toivotut tilanvaihtelut, tarjoten puhtaan lähtökohdan tyylitykselle.

## 2. Body Styling (body):

- **Mikä se on**: Body-sääntö muotoilee koko verkkosivun, asettaen taustan, fontin ja asettelun.
- **Tarkoitus**:
  - **Font Family**: "Roboto", sans-serif fontti antaa sovellukselle modernin ja selkeän ilmeen, joka parantaa luettavuutta ja ulkonäköä.
  - **Background**: Linear-gradient(135deg, #74ebd5, #acb6e5) luo pehmeän värin siirtymän tealin ja vaaleansinisen välillä, antaen sovellukselle raikkaan ja modernin ilmeen.
  - **Flexbox Layout**: Display: flex; justify-content: center; align-items: center; varmistaa, että sisältö on keskitetty sekä vaakasuunnassa että pystysuunnassa näytön sisällä.
  - **Height**: Height: 100vh; tekee verkkosivusta koko näkymäkorkeuden, varmistaen, että sisältö on aina keskitetty pystysuunnassa.
- **Tärkeä yksityiskohta**: Tämä yhdistelmä gradientti-taustaa ja keskitettyä asettelua luo visuaalisesti houkuttelevan suunnittelun, jossa kaikki sisältö näytetään keskellä näyttöä näytön koosta riippumatta.

## 3. Container Styling (.container):

- **Mikä se on**: .container-luokka muotoilee pääsisällön kääreen, joka sisältää otsikon, syötteen, painikkeen ja tuloksen.
- **Tarkoitus**:
  - **Background Color**: Taustaväri #fff; asettaa kontille valkoisen taustan, mikä saa sen erottumaan sivun värikkäästä gradienttitaustasta.
  - **Padding**: Tarjoaa sisäistä tilaa sisällön ympärille, tehden asettelusta vähemmän ahdistavan ja helpommin luettavan.
  - **Border Radius**: Pyöristää kontin kulmat sujuvan, modernin korttimaisen ulkoasun luomiseksi.
  - **Box Shadow**: Lisää pehmeän varjon, joka tekee kontista hieman koholla olevan ja lisää syvyyttä sivulle.
  - **Max Width**: Varmistaa, että kontilla on enimmäisleveys, estäen sitä kasvamasta liian leveäksi suuremmilla näytöillä.
  - **Transition**: Transition: transform 0.3s ease; lisää sujuvan skaalausefektin, kun kohdetta leijutetaan, mikä tekee sovelluksesta vuorovaikutteisemman.
- **Tärkeä yksityiskohta**: .container-luokka on tärkeä korttimaisen rakenteen luomisessa, joka näyttää keskitetyltä ja erottuu taustasta, pehmeillä varjoilla ja pyöristetyillä kulmilla modernin ja ammattimaisen ilmeen aikaansaamiseksi.

## 4. Hover Effect for Container (.container:hover):

- **Mikä se on**: lisää visuaalisen efektin, kun käyttäjä leijuttaa konttia.
- **Tarkoitus**: Transform: scale(1.03); suurentaa konttia hieman, kun sitä leijutetaan, luoden hienovaraisen zoom-efektin, joka lisää vuorovaikutteisuutta ja saa sovelluksen tuntumaan dynaamiselta.
- **Tärkeä yksityiskohta**: Tämä zoom-efekti on hienovarainen mutta tehokas, parantaen käyttäjän vuorovaikutusta ylikuormittamatta suunnittelua, saaden sovelluksen tuntumaan responsiivisemmalta ja viimeistellymmältä.

## 5. Heading Styling (h1):

- **Mikä se on**: H1-elementti näyttää pääotsikon "Age Calculator".
- **Tarkoitus**:
  - **Font Size**: Suuri fonttikoko varmistaa, että otsikko on näkyvä ja kiinnittää käyttäjän huomion.
  - **Text Color**: Tumma väri (#2c3e50) luo hyvän kontrastin valkoista konttitaustaa vasten, tehden tekstistä erittäin luettavan.
  - **Margin Bottom**: Lisää tilaa otsikon alle, erottaen sen syötekentästä ja parantaen asettelun kokonaisrakennetta.
- **Tärkeä yksityiskohta**: Suuri, lihavoitu otsikko luo vahvan visuaalisen hierarkian varmistaen, että otsikko on ensimmäinen asia, jonka käyttäjät huomaavat.

## 6. Input Field Styling (input[type="date"]):

- **Mikä se on**: Muotoilee päivämäärän syöttökentän, johon käyttäjät syöttävät syntymäpäivänsä.
- **Tarkoitus**:
  - **Width**: Syöte vie koko kontin leveyden, luoden siistin ja yhdenmukaisen asettelun.
  - **Padding**: Tarjoaa sisätilaa, jotta käyttäjän on mukava olla vuorovaikutuksessa syöttökentän kanssa.
  - **Border**: Vaalea reuna antaa syötteelle selkeän mutta huomaamattoman ääriviivan, kun taas reunojen pyöristäminen pehmentää ulkoasua.
  - **Box Shadow**: Lisää hienovaraisen varjon, joka tekee syöttökentästä visuaalisesti erottuvan taustasta.
  - **Transition**: Lisää sujuvan fokus-efektin, kun syötettä napsautetaan, tehden vuorovaikutuksesta sulavamman.
- **Tärkeä yksityiskohta**: Pehmennetyt kulmat, varjo ja täyte tekevät syöttökentästä modernin ja selkeän, samalla kun koko leveys tekee siitä responsiivisen.

## 7. Focus Effect for Input (input[type="date"]:focus):

- **Mikä se on**: Muotoilee syöttökentän, kun käyttäjä napsauttaa sitä syöttääkseen päivämäärän.
- **Tarkoitus**: Reunan väri muuttuu eloisaksi siniseksi (#007bff), tarjoten selkeän visuaalisen vihjeen siitä, että syöte on aktiivinen ja valmis käyttäjän syötteelle.
- **Tärkeä yksityiskohta**: Fokus-efekti auttaa ohjaamaan käyttäjän huomion ja parantaa saavutettavuutta osoittamalla, mikä elementti on tällä hetkellä aktiivinen.

## 8. Button Styling (button):

- **Mikä se on**: Muotoilee "Calculate Age" -painikkeen.
- **Tarkoitus**:
  - **Background Color**: Eloisa sininen (#007bff) taustaväri saa painikkeen erottumaan selkeänä toimintakehotuksena.
  - **Text Color**: Valkoinen teksti luo hyvän kontrastin sinistä taustaa vasten, tehden tekstistä erittäin luettavan.
  - **Padding**: Varmistaa, että painike on tarpeeksi suuri ollakseen helposti napsautettavissa.
  - **Border Radius**: Pehmeät, pyöristetyt kulmat vastaavat syöttökentän ja kontin modernia tyyliä.
  - **Cursor**: Muuttuu osoittimeksi, kun sitä leijutetaan, osoittaen käyttäjälle, että painike on vuorovaikutteinen.
  - **Transition**: Taustavärin ja sijainnin muutokset tapahtuvat sujuvasti, kun sitä leijutetaan tai napsautetaan, mikä tekee painikkeesta responsiivisen ja viimeistellyn tuntuisen.
- **Tärkeä yksityiskohta**: Painike on suunniteltu helposti napsautettavaksi ja visuaalisesti houkuttelevaksi, rohkaisten käyttäjiä vuorovaikutukseen. Hover- ja klikkaus-efektit parantavat vuorovaikutuskokemusta.

## 9. Hover Effect for Button (button:hover):

- **Mikä se on**: lisää visuaalisen efektin, kun käyttäjä leijuttaa painiketta.
- **Tarkoitus**: Taustaväri tummenee hieman (#0056b3), mikä osoittaa käyttäjälle, että painike on vuorovaikutteinen ja valmis napsautettavaksi.
- **Tärkeä yksityiskohta**: Tämä hover-efekti lisää vuorovaikutteisuutta, tarjoten visuaalisen palautteen, kun käyttäjä leijuttaa painiketta, tehden sovelluksesta responsiivisemman.

## 10. Active State for Button (button:active):

- **Mikä se on**: lisää tyylin, kun painiketta napsautetaan.
- **Tarkoitus**: Taustaväri tummenee edelleen (#004494), ja painike siirtyy hieman alaspäin (transform: translateY(1px)), antaen vaikutelman, että painiketta on painettu.
- **Tärkeä yksityiskohta**: Tämä painallus-efekti jäljittelee fyysisen painikkeen tuntumaa, parantaen käyttäjän kokemusta antamalla selkeän merkinnän siitä, että painiketta on napsautettu.

## 11. Result Display Styling (.result):

- **Mikä se on**: Muotoilee div-elementin, johon lasketun iän tulos näytetään.
- **Tarkoitus**:
  - **Margin Top**: Lisää tilaa tuloksen yläpuolelle, erottaen sen painikkeesta.
  - **Font Size**: Kasvattaa tuloksen tekstin kokoa, jotta se on helpompi lukea.
  - **Text Color**: Tumma väri (#2d3748) luo hyvän kontrastin valkoista konttitaustaa vasten, varmistaen luettavuuden.
  - **Min Height**: Varmistaa, että tulosalueella on tarpeeksi korkeutta, estäen asettelun siirtymät, kun tulos näytetään.
- **Tärkeä yksityiskohta**: Tulosnäyttö on suunniteltu olemaan selkeä ja näkyvä, riittävällä tilalla ja luettavalla fonttikoolla, jotta tulos on helposti ymmärrettävissä.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener

- **Mikä se on**: Tämä tapahtumankuuntelija odottaa, että HTML-dokumentti on täysin ladattu ennen kuin skripti suoritetaan.
- **Tarkoitus**: Se varmistaa, että JavaScript on vuorovaikutuksessa DOM-elementtien kanssa vasta, kun ne ovat täysin ladattuja ja saatavilla. Ilman tätä JavaScript voisi yrittää käsitellä elementtejä, jotka eivät ole vielä läsnä, mikä johtaisi virheisiin.
- **Tärkeä yksityiskohta**: DOMContentLoaded-tapahtuman käyttäminen takaa, että sovellus toimii oikein, koska kaikki interaktiiviset elementit (kuten päivämäärän syöttökenttä ja painike) ovat JavaScriptin käytettävissä ja muokattavissa.

## 2. Selecting DOM Elements

- **Mikä se on**: JavaScript valitsee tarvittavat DOM-elementit, kuten päivämäärän syöttökentän, laskentapainikkeen ja tulos-divin käyttämällä niiden id-attribuutteja.
- **Tarkoitus**:
  - **birthdateInput**: Viittaa syöttökenttään, johon käyttäjä valitsee syntymäpäivänsä.
  - **calculateButton**: Viittaa painikkeeseen, joka painettaessa käynnistää käyttäjän iän laskemisen.
  - **resultDiv**: Viittaa diviin, johon lasketun iän tulos näytetään.
- **Tärkeä yksityiskohta**: DOM-elementtien tehokas valinta tekee koodista luettavampaa ja helpommin hallittavaa. Se mahdollistaa sen, että JavaScript voi olla vuorovaikutuksessa näiden elementtien kanssa dynaamisesti tarjoten tarvittavan toiminnallisuuden.

## 3. Button Click Event Listener

- **Mikä se on**: CalculateButton-elementtiin on liitetty tapahtumankuuntelija, joka kuuntelee klikkaustapahtumaa. Kun painiketta painetaan, calculateAge-funktio suoritetaan.
- **Tarkoitus**: Tämä tapahtumankuuntelija mahdollistaa sovelluksen päätoiminnon eli käyttäjän iän laskemisen. Se tunnistaa painikkeen klikkauksen ja käynnistää iän laskentaprosessin.
- **Tärkeä yksityiskohta**: Tapahtumankuuntelijan käyttö painikkeessa tekee sovelluksesta interaktiivisen ja reagoi käyttäjän syötteeseen, päivittäen sivun asiaankuuluvilla tiedoilla reaaliajassa.

## 4. Age Calculation Function

- **Mikä se on**: CalculateAge-funktio on sovelluksen ydin. Se suorittaa tehtävän, jossa käyttäjän ikä lasketaan syötettyyn päivämäärään perustuen.
- **Vaiheet**:
  - **Retrieving the Date**: Funktio hakee syntymäpäivän päivämäärän syöttökentästä ja muuntaa sen JavaScriptin Date-objektiksi.
  - **Handling Invalid Dates**: Funktio tarkistaa, onko syötetty arvo kelvollinen päivämäärä. Jos ei ole, se näyttää virheilmoituksen tulos-divissä ja korostaa sen muuttamalla tekstin väriä punaiseksi.
  - **Calculating the Age**: Funktio laskee iän vähentämällä syntymävuoden kuluvasta vuodesta. Se ottaa myös huomioon nykyisen kuukauden ja päivän, jotta ikä voidaan säätää, jos käyttäjän syntymäpäivä ei ole vielä ollut tänä vuonna.
  - **Displaying the Result**: Kun ikä on laskettu, tulos näytetään tulos-divissä, ja tekstin väri palautetaan normaaliksi.
- **Tarkoitus**: Funktio huolehtii käyttäjän syötteeseen perustuvasta iän laskemisen logiikasta varmistaen, että laskelma on tarkka ja että mahdolliset virheet käsitellään sulavasti.
- **Tärkeä yksityiskohta**: Funktio pystyy käsittelemään iän laskemisen samalla halliten virhetilanteita (kuten virheellisiä päivämääriä), mikä tekee sovelluksesta luotettavan ja käyttäjäystävällisen.

## 5. Error Handling

- **Mikä se on**: Funktio sisältää virheenkäsittelylogiikan, joka tunnistaa, onko käyttäjä syöttänyt virheellisen päivämäärän tai jättänyt kentän tyhjäksi.
- **Tarkoitus**: Jos syötetään virheellinen päivämäärä, sovellus antaa palautetta näyttämällä virheilmoituksen. Tämä parantaa käytettävyyttä ohjaamalla käyttäjää antamaan oikean syötteen.
- **Tärkeä yksityiskohta**: Virheilmoitus näkyy selkeästi tulos-divissä, ja tekstin väri muuttuu punaiseksi, jolloin käyttäjän on helppo nähdä, mikä meni pieleen ja korjata syötteensä.

## 6. Updating the Result in the DOM

- **Mikä se on**: ResultDiv.textContent-ominaisuutta käytetään tulos-divin sisällön päivittämiseen. Tekstissä näytetään laskettu ikä tai tarvittaessa virheilmoitus.
- **Tarkoitus**: Tämä mahdollistaa sovelluksen dynaamisen palautteen antamisen. Kun käyttäjä napsauttaa painiketta, tulos-div päivittyy joko lasketulla iällä tai virheilmoituksella.
- **Tärkeä yksityiskohta**: DOMin dynaaminen päivittäminen iän laskennan tuloksella tekee sovelluksesta interaktiivisen ja responsiivisen, tarjoten reaaliaikaista palautetta käyttäjän syötteen perusteella.

## 7. Handling Future Birthdates

- **Mikä se on**: CalculateAge-funktio säätää iän laskemista, jos käyttäjän syöttämä syntymäpäivä on tulevaisuudessa tai jos käyttäjän syntymäpäivä ei ole vielä ollut tänä vuonna.
- **Tarkoitus**: Tämä varmistaa, että iän laskenta on tarkka, huomioiden onko käyttäjän syntymäpäivä jo ollut tänä vuonna. Jos syntymäpäivä on tulevaisuudessa, iän laskentaa säädetään asianmukaisesti.
- **Tärkeä yksityiskohta**: Tämä logiikka estää virheelliset iän laskennat, tehden sovelluksesta luotettavamman säätämällä tilanteissa, joissa käyttäjän syntymäpäivä on myöhemmin vuoden aikana.
