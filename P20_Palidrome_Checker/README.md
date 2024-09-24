# Nettisivu: https://keudaope.github.io/JSProjekteja/P20_Palidrome_Checker

# Johdanto

Palindromintarkistaja on hyödyllinen sovellus, joka tarkistaa, onko annettu sana tai lause palindromi. Palindromi on sana tai lause, joka luetaan samoin etu- ja takaperin, kun välilyönnit, välimerkit ja isot kirjaimet jätetään huomiotta. Tämä projekti auttaa aloittelijoita harjoittelemaan **JavaScriptin**, **HTML**:n ja **CSS**:n käyttöä samalla, kun opitaan käsittelemään käyttäjän syötteitä, muokkaamaan merkkijonoja ja päivittämään **DOM**-rakennetta dynaamisesti. Käyttäjät voivat syöttää sanan tai lauseen tarkistaakseen, onko se palindromi.

# HTML selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on:** **DOCTYPE**-määritys ilmoittaa, että asiakirja on kirjoitettu **HTML5**-kielellä.
- **Tarkoitus:** Se varmistaa, että verkkosivu tulkitaan käyttäen moderneja **HTML5**-standardeja kaikilla selaimilla, estäen ongelmia, jotka johtuvat vanhoista renderöintitiloista.
- **Tärkeä yksityiskohta:** Sisällytä aina **DOCTYPE**-määritys varmistaaksesi, että selain tulkitsee asiakirjan oikein.

## 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on:** **HTML**-elementti on juurielementti, joka sisältää kaikki muut sivun elementit. **Lang="en"**-attribuutti määrittää asiakirjan kielen englanniksi.
- **Tarkoitus:** **Lang**-attribuutti on tärkeä saavutettavuustyökaluille ja hakukoneille, koska se kertoo verkkosivun ensisijaisen kielen.
- **Tärkeä yksityiskohta:** **Lang**-attribuutin sisällyttäminen parantaa saavutettavuutta ja **SEO**:a.

## 3. Head Tag (<code><</code>head>):

- **Mikä se on:** **Head**-osio sisältää verkkosivusta metatietoja, kuten linkkejä ulkoisiin tyylitiedostoihin, fontteihin ja asiakirjan otsikkoon.
- **Tarkoitus:** **Head**-tagi antaa selaimelle tarvittavat tiedot sivun renderöimiseen, kuten merkistön koodauksen ja näkymäasetukset, sekä lataa ulkoiset resurssit, kuten **CSS** ja fontit.
- **Tärkeät yksityiskohdat:**
  - **Meta Charset** (<code><</code>meta charset="UTF-8">): Tämä määrittää merkistön koodauksen **UTF-8**:ksi, joka tukee laajaa valikoimaa merkkejä ja symboleja, varmistaen tekstin oikean näyttämisen.
  - **Viewport Meta Tag** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">): Tämä varmistaa, että sivu on responsiivinen, ja mukauttaa sisällön laitteen näytön kokoon, tarjoten optimaalisen käyttökokemuksen mobiililaitteilla.
  - **Title Tag** (<code><</code>title>Palindrome Checker</title>): Otsikko määrittää tekstin, joka näkyy selaimen välilehdessä, auttaen käyttäjiä ymmärtämään sivun tarkoituksen.
  - **Google Fonts Link** (<code><</code>link>): Tämä <code><</code>link>-elementti lataa **Roboto**-fontin Google Fontsista, antaen sovellukselle puhtaan ja modernin ulkoasun.

## 4. Body Tag (<code><</code>body>):

- **Mikä se on:** **Body**-elementti sisältää kaikki verkkosivun näkyvät osat, mukaan lukien syötekentän, painikkeen ja tulosnäytön.
- **Tarkoitus:** Kaikki käyttäjän näkemä sisältö ja vuorovaikutteiset elementit sijoitetaan **body**-tunnisteen sisälle, jota **CSS** tyylittää ja jota **JavaScript** käsittelee.
- **Tärkeä yksityiskohta:** **Body**-tagi toimii sovelluksen pääsäiliönä, varmistaen, että kaikki sisältö näkyy ja on vuorovaikutuksessa **CSS**:n ja **JavaScript**:in kanssa.

## 5. Container Div (<code><</code>div class="container">):

- **Mikä se on:** **Div**-elementti, jossa on **class="container"**, ympäröi pääsisällön, mukaan lukien otsikon, syötekentän, painikkeen ja tulosnäytön.
- **Tarkoitus:** Tämä **div** ryhmittelee toisiinsa liittyvät elementit yhteen, mahdollistaen keskitetyn tyylityksen ja asettelun hallinnan. Se toimii korttimaisena säiliönä, joka erottaa sovelluksen visuaalisesti muusta sivusta.
- **Tärkeä yksityiskohta:** **Class="container"** mahdollistaa **CSS**:n soveltamisen yhdenmukaisella paddingilla, varjoilla ja asettelun ominaisuuksilla, parantaen käyttöliittymää.

## 6. Heading Tag (<code><</code>h1>Palindrome Checker</h1>):

- **Mikä se on:** **H1**-elementti näyttää sivun otsikon "Palindrome Checker."
- **Tarkoitus:** **H1**-elementti tarjoaa selkeän ja näkyvän otsikon, kertoen käyttäjille sovelluksen tarkoituksen. Se on myös tärkeä **SEO**:lle, koska se osoittaa sivun pääsisällön.
- **Tärkeä yksityiskohta:** **H1**-elementti on suunniteltu erottumaan, varmistaen, että se on ensimmäinen asia, jonka käyttäjät huomaavat.

## 7. Input Field (<code><</code>input type="text" id="input-text" placeholder="Enter text" required>):

- **Mikä se on:** Tämä on **input**-elementti, johon käyttäjä voi syöttää tekstiä tarkistaakseen, onko se palindromi.
- **Tarkoitus:** Syötekenttä mahdollistaa käyttäjien syöttää minkä tahansa merkkijonon tarkistettavaksi. **Placeholder**-attribuutti antaa vihjeen käyttäjälle, ja **required**-attribuutti varmistaa, että lomaketta ei voi lähettää ilman syötettä.
- **Tärkeä yksityiskohta:** **Id="input-text"** mahdollistaa **JavaScript**:in pääsyn ja käsittelyn syötekenttään, ja **required**-attribuutti parantaa käyttökokemusta varmistamalla syötteen validoinnin.

## 8. Button Element (<code><</code>button id="check-button">Check</button>):

- **Mikä se on:** **Button**-elementti käynnistää palindromitarkistuksen, kun sitä klikataan.
- **Tarkoitus:** Se toimii käyttäjän toiminnan laukaisijana. Kun sitä klikataan, painike aloittaa prosessin, joka tarkistaa, onko syötetty teksti palindromi.
- **Tärkeä yksityiskohta:** **Id="check-button"** mahdollistaa **JavaScript**:n helposti liittämään tapahtumakuuntelijan tähän painikkeeseen, yhdistäen sen palindromitarkistustoimintoon.

## 9. Result Div (<code><</code>div class="result" id="result">):

- **Mikä se on:** **Div**-elementti, jossa on **class="result"**, käytetään palindromitarkistuksen tuloksen näyttämiseen.
- **Tarkoitus:** Tämä elementti toimii paikkamerkkinä, jossa palindromitarkistuksen tulos näytetään dynaamisesti. Se alkaa tyhjänä ja **JavaScript** täyttää sen, kun käyttäjä klikkaa painiketta.
- **Tärkeä yksityiskohta:** **Id="result"** mahdollistaa **JavaScript**:n kohdistamisen tähän div-elementtiin ja sen sisällön päivittämisen palindromitarkistuksen tuloksella.

## 10. Script Tag (<code><</code>script src="app.js"></code>):

- **Mikä se on:** **Script**-tagi linkittää ulkoiseen **JavaScript**-tiedostoon (**app.js**), joka sisältää logiikan, joka tarkistaa, onko merkkijono palindromi.
- **Tarkoitus:** Se erottaa toiminnallisuuden (**JavaScript**) rakenteesta (**HTML**) ja tyylistä (**CSS**), noudattaen modulaarisuuden parhaiden käytäntöjen mukaisia periaatteita. **JavaScript** käsittelee käyttäjän vuorovaikutuksen ja päivittää tuloksen dynaamisesti.
- **Tärkeä yksityiskohta:** Ulkoiseen skriptiin linkittäminen pitää **HTML**-dokumentin siistinä ja rakenteeseen keskittyneenä, kun taas **JavaScript**-tiedosto sisältää sovelluksen interaktiivisen logiikan.

# CSS Selitys

## 1. Global Reset (\*-valitsin):

- **Mikä se on:** Yleinen \*-valitsin soveltaa resetointia kaikkiin sivun elementteihin.
- **Tarkoitus:** Se nollaa oletusmarginaalit ja -paddingit, jotta vältytään epäjohdonmukaiselta välistykseltä selaimissa. **box-sizing: border-box;** -sääntö varmistaa, että padding ja reunat sisällytetään elementin kokonaisleveyteen ja -korkeuteen, tehden asettelujen hallinnasta helpompaa.
- **Tärkeä yksityiskohta:** Globaali resetointi tarjoaa johdonmukaisuutta siinä, miten elementit renderöidään eri selaimissa, varmistaen luotettavan asettelun.

## 2. Body Styling (<code><</code>body>):

- **Mikä se on:** **body**-sääntö tyylittää koko verkkosivun.
- **Tarkoitus:**
  - **Fonttiperhe:** **font-family: 'Roboto', sans-serif;** soveltaa "Roboto"-fonttia, modernia ja selkeää kirjasinta, joka parantaa luettavuutta.
  - **Tausta:** **background: linear-gradient(135deg, #74ebd5, #acb6e5);** lisää gradienttitaustan, joka vaihtuu vihreästä siniseksi, luoden visuaalisesti houkuttelevan ja modernin ilmeen.
  - **Asettelu:** **display: flex; justify-content: center; align-items: center;** käyttää Flexboxia keskittämään pääkontainerin sekä pysty- että vaakasuunnassa, pitäen sisällön keskitettynä kaikilla näyttökoon tyypeillä.
  - **Korkeus:** **height: 100vh;** varmistaa, että sivun sisältö vie koko selainikkunan korkeuden, mahdollistaen täydellisen pystysuoran keskityksen.
  - **Marginaali:** **margin: 0;** poistaa oletusmarginaalit varmistaakseen, että asettelu on oikein keskitetty.
- **Tärkeä yksityiskohta:** Flexboxin ja gradienttitaustan yhdistelmä tekee sovelluksesta visuaalisesti tasapainoisen ja helposti käytettävän eri laitteilla, parantaen sekä esteettisyyttä että käytettävyyttä.

## 3. Container Styling (<code><</code>div class="container">):

- **Mikä se on:** **.container**-luokka tyylittää pääsovelluksen sisällön säilön.
- **Tarkoitus:**
  - **Taustaväri:** **background-color: #fff;** antaa säilölle puhtaan valkoisen taustan, joka kontrastoi hyvin gradienttitaustan kanssa.
  - **Padding:** **padding: 30px;** lisää sisäistä väliä sisällön ympärille, tehden siitä helpommin luettavaa ja mukavampaa käyttäjälle.
  - **Reunan säde:** **border-radius: 15px;** lisää säilölle pyöristetyt kulmat, mikä myötävaikuttaa moderniin, korttimaisen muotoiluun.
  - **Varjo:** **box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);** lisää säilön alle varjon, saaden sen näyttämään kohoavalta taustasta ja lisäämään syvyyttä asetteluun.
  - **Leveys:** **width: 350px;** kiinnittää säilön leveyden hallittavaan kokoon sekä mobiili- että työpöytänäytöille.
  - **Maksimileveys:** **max-width: 100%;** varmistaa, että säilö mukautuu responsiivisesti pienempiin näyttöihin.
  - **Siirtymä:** **transition: transform 0.3s ease;** mahdollistaa sulavat animaatiot, kun säilöön kohdistuu hover-efekti.
- **Tärkeä yksityiskohta:** Säilö on suunniteltu näyttämään puhtaalta, modernilta kortilta, jossa on syvyyttä ja varjoa, tarjoten visuaalisesti houkuttelevan asettelun, joka on samalla toimiva ja responsiivinen.

## 4. Hover Effect for Container (<code><</code>.container:hover>):

- **Mikä se on:** **hover**-pseudoluokka lisää visuaalisen efektin, kun käyttäjä vie hiiren säilön päälle.
- **Tarkoitus:** **transform: scale(1.05);** suurentaa säilöä hieman, kun sen päälle viedään hiiri, luoden zoomaavan efektin, joka tekee sovelluksesta interaktiivisen ja dynaamisen tuntuisen.
- **Tärkeä yksityiskohta:** **hover**-efekti tarjoaa hienovaraista vuorovaikutteisuutta, parantaen käyttökokemusta ilman, että se on liian voimakas.

## 5. Heading Styling (<code><</code>h1>):

- **Mikä se on:** **h1**-elementti tyylittää sovelluksen pääotsikon "Palindrome Checker".
- **Tarkoitus:**
  - **Fonttikoko:** **font-size: 2.2em;** varmistaa, että otsikko on suuri ja näkyvä, tehden selväksi, että tämä on sovelluksen pääotsikko.
  - **Alamarginaali:** **margin-bottom: 20px;** lisää tilaa otsikon alle, erottaen sen syötekentästä ja parantaen asettelun rakennetta.
  - **Tekstin väri:** **color: #2d3748;** käyttää tummaa väriä otsikolle, tehden siitä helposti luettavan ja tarjoten kontrastia valkoista taustaa vasten.
- **Tärkeä yksityiskohta:** Suuri, lihavoitu otsikko kiinnittää välittömästi huomion, kun taas väri ja välistys tekevät sivusta visuaalisesti tasapainoisen.

## 6. Input Field Styling (<code><</code>input type="text">):

- **Mikä se on:** Syötekentän tyyli koskee tekstikenttää, johon käyttäjä syöttää tekstiä palindromin tarkistamista varten.
- **Tarkoitus:**
  - **Padding:** **padding: 12px;** lisää sisäistä väliä syötteeseen, tehden siitä mukavamman käyttää.
  - **Leveys:** **width: 100%;** varmistaa, että syötekenttä vie koko säilön leveyden, parantaen käytettävyyttä ja tehden asettelusta yhtenäisen.
  - **Alamarginaali:** **margin-bottom: 15px;** luo tilaa syötekentän ja painikkeen väliin, antaen lomakkeelle selkeän rakenteen.
  - **Reuna:** **border: 1px solid #ccc;** lisää hienovaraisen harmaan reunan syötekentän ympärille, antaen sille hyvin määritellyn ilmeen.
  - **Reunan säde:** **border-radius: 8px;** soveltaa pyöristettyjä kulmia, mikä vastaa säilön modernia suunnittelua.
  - **Fonttikoko:** **font-size: 1em;** asettaa standardin fonttikoon luettavuuden parantamiseksi.
  - **Varjo:** **box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);** lisää syötteeseen pehmeän varjon, tuoden syvyyttä ja saaden sen näyttämään huolitellulta.
  - **Siirtymä:** **transition: border-color 0.3s ease;** luo sujuvan siirtymän, kun käyttäjä on vuorovaikutuksessa syötekentän kanssa.
- **Tärkeä yksityiskohta:** Syötekenttä on suunniteltu olemaan sekä toimiva että visuaalisesti houkutteleva, hienovaraisilla varjoilla ja sulavilla siirtymillä, jotka tekevät siitä visuaalisesti kiinnostavan.

## 7. Input Focus Effect (input [type="text"]:focus):

- **Mikä se on:** Tämä sääntö koskee syötekenttää, kun se on aktiivisena (esim. kun käyttäjä klikkaa tai koskettaa sitä).
- **Tarkoitus:** **border-color: #007bff;** vaihtaa reunavärin siniseksi, kun syötekenttä on aktiivisena, antaen visuaalisen vihjeen siitä, että kenttä on valittu.
- **Tärkeä yksityiskohta:** Fokusvaikutus parantaa käytettävyyttä korostamalla aktiivisen syötekentän, tehden selväksi, mihin käyttäjä kirjoittaa.

## 8. Button Styling (<code><</code>button>):

- **Mikä se on:** **button**-elementti tyylittää "Tarkista"-painikkeen, joka aloittaa palindromin tarkistamisen.
- **Tarkoitus:**
  - **Padding:** **padding: 12px 20px;** varmistaa, että painike on mukava klikata ja siinä on riittävästi sisäistä tilaa.
  - **Taustaväri:** **background-color: #007bff;** lisää kirkkaan sinisen taustan, tehden painikkeesta erottuvan päätapahtumana.
  - **Tekstin väri:** **color: white;** varmistaa, että painikkeen teksti on selkeästi luettavissa sinistä taustaa vasten.
  - **Reunan säde:** **border-radius: 8px;** lisää pyöristetyt kulmat painikkeeseen, sopien sovelluksen yleiseen muotoiluun.
  - **Hiiren osoitin:** **cursor: pointer;** vaihtaa hiiren osoittimen osoittimeksi, ilmoittaen, että painiketta voi klikata.
  - **Fonttikoko:** **font-size: 1em;** varmistaa, että teksti on luettavaa ja suhteessa painikkeen kokoon.
  - **Siirtymä:** **transition: background-color 0.3s ease, transform 0.2s ease;** takaa sulavat siirtymät painikkeen hover- ja aktiivisissa tiloissa, parantaen vuorovaikutusta.
- **Tärkeä yksityiskohta:** Painike on suunniteltu erottumaan visuaalisesti ja olemaan erittäin interaktiivinen, rohkaisten käyttäjiä klikkaamaan ja tarkistamaan, onko syöte palindromi.

## 9. Button Hover Effect (button:hover):

- **Mikä se on:** Tämä sääntö koskee painiketta, kun käyttäjä vie hiiren sen päälle.
- **Tarkoitus:**
  - **Taustaväri:** **background-color: #0056b3;** tummentaa painikkeen taustavärin hover-tilassa, antaen visuaalisen vihjeen, että painike on vuorovaikutteinen.
  - **Muutos:** **transform: translateY(-2px);** nostaa painiketta hieman, luoden dynaamisen 3D-efektin.
- **Tärkeä yksityiskohta:** Hover-efekti lisää vuorovaikutteisuutta, tehden painikkeesta reagoivan ja rohkaisten käyttäjää sitoutumaan.

## 10. Button Active State (button:active):

- **Mikä se on:** Tämä sääntö koskee painiketta, kun sitä klikataan tai painetaan.
- **Tarkoitus:**
  - **Taustaväri:** **background-color: #004494;** tummentaa painiketta edelleen aktiivisessa tilassa, osoittaen, että painiketta on painettu.
  - **Muutos:** **transform: translateY(1px);** siirtää painiketta hieman alaspäin, lisäten taktiilisen vaikutelman, joka jäljittelee oikean maailman painikkeen painamista.
- **Tärkeä yksityiskohta:** Aktiivinen tila tarjoaa välittömän palautteen käyttäjälle, kun painiketta klikataan, parantaen vuorovaikutuskokemusta.

## 11. Result Display Styling (<code><</code>div class="result">):

- **Mikä se on:** **.result**-luokka tyylittää <code><</code>div>, jossa näkyy palindromin tarkistuksen tulos.
- **Tarkoitus:**
  - **Ylämarginaali:** **margin-top: 20px;** luo tilaa painikkeen ja tuloksen näytön väliin, parantaen asettelun rakennetta.
  - **Fonttikoko:** **font-size: 1.2em;** kasvattaa tulostekstin kokoa, tehden siitä näkyvämmän ja helpommin luettavan.
  - **Fontin lihavoitus:** **font-weight: bold;** korostaa tulostekstiä, tehden siitä erottuvan muusta sisällöstä.
- **Tärkeä yksityiskohta:** Tulosdiv on tyylitelty olemaan selkeä ja visuaalisesti erottuva, varmistaen, että käyttäjät näkevät helposti, onko syötetty teksti palindromi.

# JavaScript Selitys

## 1. DOMContentLoaded Event Listener:

- **Mikä se on:** document.addEventListener('DOMContentLoaded', ...) on tapahtumankuuntelija, joka laukeaa, kun HTML-dokumentti on ladattu ja parsittu kokonaan.
- **Tarkoitus:** Tämä varmistaa, että JavaScript-koodi suoritetaan vasta, kun DOM on täysin ladattu, mikä estää virheet, jotka johtuvat elementtien yrittämisestä käsitellä ennen niiden olemassaoloa.
- **Tärkeä yksityiskohta:** DOMContentLoaded varmistaa, että sovellus voi turvallisesti käyttää ja manipuloida DOM-elementtejä (kuten syötekenttää, painiketta ja tulosdiviä) sivun latautumisen jälkeen.

## 2. DOM-elementtien valinta:

- **Mikä se on:** Useita document.getElementById()-kutsuja käytetään tiettyjen HTML-elementtien viittaamiseen:
  - **inputText:** Viittaa syötekenttään, johon käyttäjä kirjoittaa merkkijonon palindromien tarkistamista varten.
  - **checkButton:** Viittaa "Tarkista"-painikkeeseen, joka käynnistää palindromien tarkistuksen.
  - **resultDiv:** Viittaa diviin, jossa näkyy palindromien tarkistuksen tulos.
- **Tarkoitus:** Nämä viittaukset mahdollistavat JavaScriptin helpon vuorovaikutuksen kyseisten elementtien kanssa, kuten käyttäjän syötteen hakemisen tai tulostekstin dynaamisen päivittämisen.
- **Tärkeä yksityiskohta:** Tehokkaasti valitut ja tallennetut DOM-elementit tekevät koodista selkeämmän, helpommin luettavan ja estävät toistuvia pyyntöjä DOM:iin.

## 3. Button Click Event Listener:

- **Mikä se on:** **checkButton.addEventListener('click', ...)** kuuntelee käyttäjän klikkausta "Tarkista"-painikkeessa.
- **Tarkoitus:** Kun painiketta klikataan, tapahtumankuuntelija laukaisee toiminnon, joka hakee tekstin syötekentästä, tarkistaa, onko se palindromi, ja näyttää tuloksen.
- **Tärkeä yksityiskohta:** Tapahtumankuuntelijat mahdollistavat käyttäjän vuorovaikutuksen sovelluksen kanssa. Tässä tapauksessa kuuntelija käynnistää palindromin tarkistuksen ja päivittää käyttöliittymän käyttäjän syötteen perusteella.

## 4. Käyttäjän syötteen hakeminen ja käsittely:

- **Mikä se on:** **const text = inputText.value.trim();** hakee arvon syötekentästä ja poistaa kaikki johtavat tai jäljessä olevat välilyönnit .trim()-menetelmällä.
- **Tarkoitus:** Tämä sieppaa käyttäjän syötteen ja varmistaa, että se on puhdas (eli ei ylimääräisiä välilyöntejä), mikä tekee palindromin tarkistamisesta luotettavampaa.
- **Tärkeä yksityiskohta:** **.trim()-**menetelmä varmistaa, että syöte on oikein muotoiltu ennen palindromin tarkistamista, estäen virheellisiä negatiivisia tuloksia ylimääräisten välilyöntien vuoksi.

## 5. Syötteen validointi:

- **Mikä se on:** **if (text === '') { ... }** tarkistaa, onko käyttäjä syöttänyt mitään tekstiä. Jos syötekenttä on tyhjä, tulosDiv näyttää virheilmoituksen.
- **Tarkoitus:** Tämä validointi varmistaa, että käyttäjä antaa syötteen ennen kuin palindromin tarkistusta yritetään. Jos tekstiä ei ole syötetty, toiminto palautetaan ja käyttäjälle näytetään kehotus syöttää tekstiä.
- **Tärkeä yksityiskohta:** Syötteen validointi estää sovellusta käsittelemästä tyhjiä tai virheellisiä syötteitä, varmistaen, että käyttäjäkokemus pysyy sujuvana ja selkeänä.

## 6. Palindromin tarkistusfunktio (checkPalindrome):

- **Mikä se on:** **checkPalindrome(str)**-funktio ottaa syötemerkkijonon, poistaa ei-aakkosnumeeriset merkit, muuntaa sen pieniksi kirjaimiksi ja tarkistaa, lukeeko se samoin etu- ja takaperin.
- **Vaiheet:**
  - **const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();**: Tämä rivi poistaa kaikki ei-aakkosnumeeriset merkit (esim. välimerkit, välilyönnit) merkkijonosta ja muuntaa sen pieniksi kirjaimiksi.
  - **const reversedStr = cleanedStr.split('').reverse().join('');**: Tämä jakaa puhdistetun merkkijonon merkkitauluksi, kääntää taulukon ja liittää sen takaisin merkkijonoksi.
  - **return cleanedStr === reversedStr;**: Tämä vertaa puhdistettua merkkijonoa sen käännettyyn versioon ja palauttaa true, jos ne ovat samat (mikä osoittaa, että syöte on palindromi) tai false, jos ne eivät ole.
- **Tarkoitus:** Tämä funktio suorittaa varsinaisen palindromin tarkistuksen normalisoimalla merkkijonon (poistamalla ei-toivotut merkit ja muuntamalla pieniksi kirjaimiksi) ja vertaamalla alkuperäistä ja käännettyä versiota.
- **Tärkeä yksityiskohta:** Merkkijonon puhdistaminen varmistaa, että palindromin tarkistus on kirjainkoolle herkkä ja jättää huomiotta välilyönnit tai erikoismerkit, mikä tekee tarkistuksesta luotettavamman ja tarkemman.

## 7. Tuloksen näyttäminen:

- **Mikä se on:** Palindromin tarkistuksen tuloksen perusteella sovellus näyttää viestin tulosDivissä:
  - Jos merkkijono on palindromi, tulos on: **"input" is a ✅palindrome.**
  - Jos merkkijono ei ole palindromi, tulos on: **"input" is not a ❌palindrome.**
- **Tarkoitus:** Tämä tarjoaa käyttäjälle välitöntä palautetta siitä, onko syötetty teksti palindromi vai ei.
- **Tärkeä yksityiskohta:** Dynaamisten viestien käyttäminen vastaavilla emojeilla (✅ onnistumiselle ja ❌ epäonnistumiselle) parantaa käyttäjäkokemusta tekemällä tuloksen selkeäksi ja mukaansatempaavaksi.

## 8. Virheenkäsittely:

- **Mikä se on:** Jos syötekenttä on tyhjä, sovellus näyttää viestin (**Please ❗enter some text.**) tulosDivissä, kehottaen käyttäjää antamaan syötteen.
- **Tarkoitus:** Tämä varmistaa, että käyttäjiä ohjataan syöttämään kelvollisia tietoja, parantaen sovelluksen käytettävyyttä.
- **Tärkeä yksityiskohta:** Selkeät virheilmoitukset auttavat käyttäjiä ymmärtämään, mikä meni pieleen ja miten he voivat korjata toimintansa, tarjoten paremman käyttäjäkokemuksen.
