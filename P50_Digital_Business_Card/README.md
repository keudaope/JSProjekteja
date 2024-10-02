# Nettisivu: https://keudaope.github.io/JSProjekteja/P50_Digital_Business_Card

# Johdanto

**Digitaalinen käyntikorttisovellus** antaa käyttäjien näyttää yhteystietonsa tyylikkäässä, digitaalisessa muodossa. Tämä projekti auttaa aloittelijoita harjoittelemaan **JavaScriptiä, HTML:ää** ja **CSS:ää** samalla kun he oppivat käsittelemään käyttäjän syötteitä, päivittämään DOM:ia dynaamisesti sekä tyylittelemään digitaalisen kortin. Käyttäjät voivat syöttää yhteystietonsa, ja sovellus näyttää ne ammattimaisessa käyntikortin muodossa.

# HTML Selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on:** Tämä rivi ilmoittaa asiakirjan tyypiksi HTML5:n.
- **Tarkoitus:** Varmistaa, että selain renderöi sivun nykyaikaisten HTML5-standardien mukaisesti, mikä parantaa yhteensopivuutta ja suorituskykyä.
- **Tärkeä yksityiskohta:** Muista aina sisällyttää <code><</code>!DOCTYPE html> asiakirjan alkuun yhtenäisyyden varmistamiseksi selainten välillä.

## 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on:** <code><</code>html>-elementti ympäröi sivun kaiken sisällön, ja lang="en" attribuutti määrittää, että sisältö on englanniksi.
- **Tarkoitus:** Se ilmoittaa hakukoneille ja ruudunlukijoille asiakirjan kielen, mikä parantaa saavutettavuutta ja SEO:a.
- **Tärkeä yksityiskohta:** Kielen määrittäminen auttaa työkaluja ja palveluita, kuten käännöksiä ja ruudunlukijoita, ymmärtämään sisältöä paremmin.

## 3. Head Tag (<code><</code>head>):

- **Mikä se on:** <code><</code>head>-elementti sisältää metatietoja ja resursseja, joita ei näytetä suoraan verkkosivulla, mutta jotka ovat olennaisia sen toimivuuden kannalta.
- **Tarkoitus:** Head-osio lataa tarvittavat resurssit, kuten merkistökoodauksen (<code><</code>meta charset>) ja mobiiliresponsiivisuuden (<code><</code>meta name="viewport">) sekä ulkoiset tyylitiedostot tai JavaScript-tiedostot.
- **Tärkeät yksityiskohdat:**
  - **Charset (<code><</code>meta charset="UTF-8">):** Määrittää merkistökoodauksen, joka mahdollistaa erilaisten merkkien (esim. kirjaimet, symbolit) esittämisen verkkosivulla.
  - **Viewport Meta Tag (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">):** Varmistaa, että sivu skaalautuu oikein eri laitteilla, erityisesti mobiililaitteilla.
  - **Title Tag (<code><</code>title>Digital Business Card</title>):** Näyttää verkkosivun otsikon selainvälilehdessä, mikä myös auttaa SEO:ssa ja kirjanmerkeissä.

## 4. Body Tag (<code><</code>body>):

- **Mikä se on:** <code><</code>body>-elementti sisältää kaikki verkkosivun näkyvät sisällöt, kuten otsikot, syöttökentät, painikkeet ja käyntikortin.
- **Tarkoitus:** Se sisältää interaktiiviset ja näkyvät elementit, joiden kanssa käyttäjä voi olla vuorovaikutuksessa, mukaan lukien lomake tietojen syöttämistä varten ja luotu käyntikortti.
- **Tärkeä yksityiskohta:** Kaikki visuaaliset elementit ja asettelu määritellään body-tagin sisällä ja niitä tyylitellään CSS:n avulla.

## 5. Container Div (<code><</code>div class="container">):

- **Mikä se on:** <code><</code>div>-elementti, jolla on container-luokka, joka ympäröi verkkosivun pääsisällön.
- **Tarkoitus:** Se ryhmittelee sisällön ja soveltaa yhtenäistä tyylittelyä, kuten täyttöjä, marginaaleja ja kohdistusta, jotta lomake ja korttielementit keskitetään.
- **Tärkeä yksityiskohta:** Container toimii pääkehikkona sekä syöttölomakkeelle että luodulle käyntikortille.

## 6. Heading Tag (<code><</code>h1>Digital Business Card<code><</code>/h1>):

- **Mikä se on:** <code><</code>h1>-tagi, joka näyttää verkkosivun pääotsikon.
- **Tarkoitus:** Otsikko ilmoittaa käyttäjälle sovelluksen tarkoituksen — digitaalisen käyntikortin luomisen — ja se on tyylitelty olemaan näkyvä sivun yläosassa.
- **Tärkeä yksityiskohta:** <code><</code>h1>-tagia käytetään ylimmän tason otsikkona, mikä on tärkeää saavutettavuudelle ja hakukoneoptimoinnille.

## 7. Input Fields (<code><</code>input type="text" id="name-input" placeholder="Name">):

- **Mikä se on:** <code><</code>input>-elementit antavat käyttäjien syöttää käyntikortin tietoja, kuten nimi, titteli, sähköpostiosoite ja puhelinnumero.
- **Tarkoitus:** Jokainen syöttökenttä kerää tiettyä tietoa, joka myöhemmin näytetään luodulla käyntikortilla.
- **Tärkeät yksityiskohdat:**
  - **type="text" ja type="email":** Määrittää syötteen tyypin (teksti, sähköposti tai puhelinnumero).
  - **placeholder-attribuutti:** Antaa käyttäjälle vihjeen siitä, mitä tietoja heidän tulisi syöttää jokaiseen kenttään.

## 8. Generate Card Button (<code><</code>button id="generate-card-button">Generate Card<code><</code>/button>):

- **Mikä se on:** <code><</code>button>-elementti, joka laukaisee käyntikortin luomisen, kun sitä klikataan.
- **Tarkoitus:** Se on pääinteraktiivinen elementti, joka kertoo skriptin luomaan käyntikortin käyttäjän syötteen perusteella.
- **Tärkeä yksityiskohta:** id="generate-card-button" antaa JavaScriptin liittää tapahtumakuuntelijan tähän painikkeeseen ja suorittaa toiminnon, kun sitä klikataan.

## 9. Business Card Div (<code><</code>div class="business-card" id="business-card">):

- **Mikä se on:** <code><</code>div>-elementti, joka sisältää luodun käyntikortin tiedot, jotka ovat aluksi piilotettuina.
- **Tarkoitus:** Kun käyttäjä täyttää lomakkeen ja klikkaa painiketta, tämä osio näyttää dynaamisesti heidän käyntikorttinsa syötetyillä tiedoilla.
- **Tärkeä yksityiskohta:** Käyntikortti on aluksi piilotettu ja näkyy, kun kortti on luotu.

## 10. JavaScript Script Tag (<code><</code>script src="script.js"><code><</code>/script>):

- **Mikä se on:** <code><</code>script>-tagi, joka linkittää ulkoiseen JavaScript-tiedostoon, joka sisältää sovelluksen toiminnallisuuden.
- **Tarkoitus:** Se erottaa JavaScript-logiikan HTML-rakenteesta, pitäen koodin järjestettynä ja helppona ylläpitää.
- **Tärkeä yksityiskohta:** Skriptin sijoittaminen body-tagin loppuun varmistaa, että kaikki DOM-elementit ovat täysin ladattuja ennen kuin skripti suoritetaan, mikä estää virheet elementtien käsittelyssä.

# CSS Selitys

## 1. Global Body Styling (body):

- **Mikä se on:** Body-sääntö määrittää koko verkkosivun globaalin asettelun ja ulkoasun.
- **Tärkeät yksityiskohdat:**
  - **font-family: Arial, sans-serif;**: Varmistaa modernin, selkeän fontin (Arial) käytön, ja käyttää sans-serif-fonttia varajärjestelmänä, jos Arial ei ole käytettävissä.
  - **background-color: #f0f0f0;**: Määrittää vaaleanharmaan taustavärin, joka antaa neutraalin kontrastin valkoisen säilön kanssa, luoden puhtaan ja minimalistisen ilmeen.
  - **display: flex;**: Käyttää Flexboxia luodakseen joustavan asettelun, joka helpottaa sisällön kohdistamista sivulla.
  - **flex-direction: column;**: Pinottaa alielementit pystysuoraan, jolloin pääsäilö keskittyy pystysuunnassa.
  - **align-items: center;**: Keskittää sisällön vaakasuunnassa sivun body-osassa.
  - **height: 100vh;**: Varmistaa, että sisältö täyttää koko näkymän korkeuden, auttaen säilön pystysuoraa keskittämistä.
  - **margin: 0;**: Poistaa oletusmarginaalit bodysta, jotta vältetään ei-toivottu tila sivun reunoilla.
- **Tarkoitus:** Nämä tyylit varmistavat, että sisältö on keskitetty sekä pysty- että vaakasuunnassa, luoden tasapainoisen ja tilavan asettelun puhtaalla taustalla.

## 2. Container Styling (.container):

- **Mikä se on:** .container-luokka tyylittää pääsäilön, joka sisältää lomakkeen ja käyntikorttinäytön.
- **Tärkeät yksityiskohdat:**
  - **background: white;**: Asettaa säilön taustaväriksi valkoisen, mikä luo selkeän kontrastin harmaaseen taustaan.
  - **padding: 20px;**: Lisää tilaa säilön sisälle, jotta sisältö ei koske reunoja ja tuntuu tilavalta.
  - **border-radius: 8px;**: Pyöristää säilön kulmat, mikä antaa modernin ja pehmeän ulkoasun.
  - **box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);**: Lisää hienovaraisen varjon säilön ympärille, antaen sille syvyyttä ja erottaen sen taustasta.
  - **width: 300px;**: Asettaa säilön leveydeksi 300px varmistaen kompaktin asettelun, joka toimii hyvin sekä pöytäkoneilla että mobiililaitteilla.
  - **text-align: center;**: Keskittää kaiken tekstin säilön sisällä.
- **Tarkoitus:** Nämä tyylit tekevät säilöstä visuaalisesti houkuttelevan lisäämällä kontrastia, varjoa ja pyöristetyt kulmat, pitäen samalla asettelun kompaktina ja responsiivisena.

## 3. Heading Styling (h1):

- **Mikä se on:** h1-elementti näyttää sovelluksen otsikon.
- **Tärkeät yksityiskohdat:**
  - **margin-bottom: 20px;**: Lisää tilaa otsikon alle erottamaan sen lomake-elementeistä ja luomaan tasapainoisen asettelun.
- **Tarkoitus:** Otsikko on tyylitelty olemaan näkyvä ja varmistaa selkeän sovelluksen otsikon, jossa on riittävästi tilaa sen ja syöttökenttien välillä, mikä parantaa luettavuutta.

## 4. Input Fields Styling (input[type="text"], input[type="email"], input[type="tel"]):

- **Mikä se on:** Tämä sääntö tyylittää kaikki teksti-, sähköposti- ja puhelinnumerosyöttökentät.
- **Tärkeät yksityiskohdat:**
  - **padding: 10px;**: Lisää tilaa syöttökenttien sisälle, mikä helpottaa niiden käyttöä ja parantaa käytettävyyttä.
  - **margin-bottom: 10px;**: Lisää tilaa jokaisen syöttökentän alle, jotta ne eivät kasautuisi yhteen.
  - **width: calc(100% - 22px);**: Varmistaa, että syöttökentät ovat responsiivisia ja vievät suurimman osan säilön leveydestä huomioiden täytön ja reunukset.
  - **border: 1px solid #ccc;**: Lisää vaaleanharmaan reunuksen syöttökenttien ympärille, mikä selkeyttää kenttien rajoja.
  - **border-radius: 4px;**: Pyöristää syöttökenttien kulmat modernin ilmeen saamiseksi.
- **Tarkoitus:** Nämä tyylit parantavat käytettävyyttä tarjoamalla riittävästi täyttöä, tilaa ja reunaviivojen selkeyttä, mikä tekee syöttökentistä mukavia ja helppokäyttöisiä.

## 5. Button Styling (button):

- **Mikä se on:** button-elementti tyylittää "Luo kortti" -painikkeen.
- **Tärkeät yksityiskohdat:**
  - **padding: 10px 20px;**: Lisää painikkeeseen tilaa, mikä tekee siitä helpommin klikattavan ja visuaalisesti tasapainoisen.
  - **border: none;**: Poistaa oletusreunan siistin ilmeen saavuttamiseksi.
  - **background-color: #007bff;**: Asettaa painikkeen taustaväriksi kirkkaan sinisen, joka tekee siitä erottuvan.
  - **color: white;**: Varmistaa, että painikkeen teksti erottuu selkeästi sinistä taustaa vasten.
  - **border-radius: 4px;**: Lisää painikkeen kulmiin pyöristyksen, mikä antaa modernin ulkonäön.
  - **cursor: pointer;**: Muuttaa kursorin osoittimeksi, kun käyttäjä vie hiiren painikkeen päälle, mikä osoittaa, että painiketta voi klikata.
- **Tarkoitus:** Painike on tyylitelty olemaan näkyvä ja kutsuva, tehden selväksi, että se on interaktiivinen elementti. Kirkkaat värit ja täyttö parantavat sen käytettävyyttä ja estetiikkaa.

## 6. Button Hover Effect (button:hover):

- **Mikä se on:** Tämä sääntö lisää hover-efektin painikkeeseen.
- **Tärkeät yksityiskohdat:**
  - **background-color: #0056b3;**: Muuttaa painikkeen taustavärin tummemmaksi siniseksi, kun käyttäjä vie hiiren painikkeen päälle, antaen visuaalista palautetta.
- **Tarkoitus:** Hover-efekti tekee sovelluksesta interaktiivisemman, antaen välitöntä palautetta, kun käyttäjä käyttää painiketta.

## 7. Business Card Styling (.business-card):

- **Mikä se on:** .business-card-luokka tyylittää luodun käyntikortin näytön.
- **Tärkeät yksityiskohdat:**
  - **margin-top: 20px;**: Lisää tilaa käyntikortin yläpuolelle erottaen sen lomake-elementeistä.
  - **padding: 20px;**: Lisää sisäistä tilaa korttiin, varmistaen, että sisältö ei kosketa reunoja.
  - **border: 1px solid #ccc;**: Lisää kevyen reunuksen kortin ympärille, joka rajaa sen selkeästi.
  - **border-radius: 8px;**: Pyöristää kortin kulmat, luoden yhtenäisen ja modernin suunnittelun, joka sopii sovelluksen muihin osiin.
  - **text-align: left;**: Kohdistaa kortin tekstin vasemmalle, luoden ammattimaisen asettelun.
  - **display: none;**: Aluksi piilottaa käyntikortin, kunnes käyttäjä luo sen painikkeen avulla.
- **Tarkoitus:** Nämä tyylit luovat visuaalisesti houkuttelevan ja ammattimaisen näköisen käyntikortin, joka on helposti luettavissa, ja varmistavat, että se pysyy piilossa, kunnes tarvittavat tiedot on syötetty.

## 8. Business Card Text Styling (.business-card h2, .business-card p):

- **Mikä se on:** Tämä sääntö tyylittää käyntikortin tekstin.
- **Tärkeät yksityiskohdat:**
  - **margin: 0;** otsikoille ja **margin: 5px 0;** kappaleille varmistaa oikean välistyksen ja luettavuuden kortin sisällä.
- **Tarkoitus:** Teksti on selkeästi jäsennelty, varmistaen, että jokainen osio (nimi, titteli, sähköposti, puhelin) on helposti luettavissa ja ammattimaisesti esitetty.

# JavaScript Selitys

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...})):

- **Mikä se on:** DOMContentLoaded-tapahtuma varmistaa, että JavaScript-koodi suoritetaan vasta, kun koko HTML-dokumentti on ladattu ja jäsennelty kokonaan.
- **Tarkoitus:** Se varmistaa, että kaikki DOM-elementit, kuten syöttökentät, painikkeet ja säilöt, ovat käytettävissä ennen kuin skripti suoritetaan. Ilman tätä koodi saattaisi yrittää käsitellä elementtejä, jotka eivät ole vielä käytettävissä, mikä johtaisi virheisiin.
- **Tärkeä yksityiskohta:** Tämä tapahtumakuuntelija ympäröi sovelluksen keskeisen logiikan, varmistamalla, että käyntikortti voidaan luoda vasta, kun asiakirja on täysin ladattu.

## 2. Variables for DOM Elements (const nameInput = document.getElementById('name-input');):

- **Mikä se on:** Nämä muuttujat tallentavat viittaukset tärkeisiin DOM-elementteihin käyttämällä `document.getElementById()`-metodia. Elementteihin kuuluvat:
  - **nameInput, titleInput, emailInput, phoneInput:** Syöttökentät, joihin käyttäjä syöttää tietoja käyntikorttia varten.
  - **generateCardButton:** Painike, jota käyttäjä klikkaa luodakseen käyntikortin.
  - **businessCard, cardName, cardTitle, cardEmail, cardPhone:** Nämä muuttujat osoittavat käyntikortin sisällä oleviin elementteihin, joihin käyttäjän tiedot näytetään.
- **Tarkoitus:** Näiden viittausten tallentaminen helpottaa DOM-elementtien käsittelyä koko skriptissä.
- **Tärkeä yksityiskohta:** Käyttämällä `getElementById()`, voimme varmistaa nopean ja tehokkaan vuorovaikutuksen DOM:n kanssa.

## 3. Button Click Event Listener (generateCardButton.addEventListener('click', () => {...})):

- **Mikä se on:** Tämä tapahtumankuuntelija laukeaa, kun "Luo kortti" -painiketta klikataan. Se kuuntelee käyttäjän vuorovaikutusta ja suorittaa koodin sisällä olevan callback-funktion painikkeen klikkaamisen yhteydessä.
- **Vaiheet:**
  - Syöttökenttiin (nimi, titteli, sähköposti, puhelin) syötetyt arvot haetaan `.value`-ominaisuuden avulla.
  - **trim()**-metodia käytetään poistamaan ylimääräiset välilyönnit syötetyistä arvoista, jotta tiedot ovat puhtaita.
- **Tarkoitus:** Tämä tapahtumankuuntelija aloittaa prosessin, jossa käyntikortti luodaan ja näytetään, kun käyttäjä on syöttänyt tietonsa ja klikannut painiketta.
- **Tärkeä yksityiskohta:** Käyttämällä `trim()`-metodia estetään käyntikorttien luominen tyhjillä kentillä tai tarpeettomilla väleillä.

## 4. Validation for Empty Fields (if (name === '' || title === '' || email === '' || phone === '') {...}):

- **Mikä se on:** Tämä ehdollinen lause tarkistaa, onko jokin syöttökentistä (nimi, titteli, sähköposti, puhelin) tyhjä.
- **Tarkoitus:** Se varmistaa, että käyttäjä on täyttänyt kaikki vaaditut kentät ennen käyntikortin luomista. Jos kenttiä on jätetty tyhjäksi, näytetään varoitusviesti, jossa pyydetään käyttäjää täyttämään kaikki kentät.
- **Tärkeä yksityiskohta:** Syötteiden validointi estää puutteellisten tai tyhjien käyntikorttien luomisen.

## 5. Updating the Business Card (cardName.textContent = name;):

- **Mikä se on:** Nämä koodirivit päivittävät käyntikortin sisällön asettamalla syöttökenttien arvot vastaaviin DOM-elementteihin (esim. **cardName**, **cardTitle**, **cardEmail**, **cardPhone**).
- **Vaiheet:**
  - Käyntikortin kenttien tekstisisältö päivitetään käyttäjän syöttämillä arvoilla (nimi, titteli, sähköposti ja puhelin).
  - Kun arvot on asetettu, käyntikortti tehdään näkyväksi asettamalla **businessCard.style.display = 'block';**.
- **Tarkoitus:** Tämä toiminto päivittää käyntikortin sisällön dynaamisesti ja tekee sen näkyväksi sivulla, varmistaen, että käyttäjän tiedot näytetään oikein syöttämisen jälkeen.
- **Tärkeä yksityiskohta:** **textContent**-ominaisuutta käytetään turvallisesti lisäämään käyttäjän syötteet käyntikorttiin, estäen tietoturvariskit, kuten koodin injektoinnin.

## 6. Displaying the Business Card (businessCard.style.display = 'block';):

- **Mikä se on:** Tämä koodirivi tekee käyntikortin näkyväksi muuttamalla sen **display**-ominaisuudeksi **'block'**.
- **Tarkoitus:** Käyntikortti on oletusarvoisesti piilotettu, ja tämä rivi varmistaa, että se näytetään vasta, kun käyttäjä on syöttänyt tietonsa ja klikannut "Luo kortti" -painiketta.
- **Tärkeä yksityiskohta:** Tämä varmistaa, että kortti ei näy ennen kuin kaikki vaaditut tiedot on annettu, mikä parantaa käyttäjäkokemusta.
