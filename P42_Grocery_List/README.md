# Nettisivu: https://keudaope.github.io/JSProjekteja/P42_Grocery_List

# Johdanto

**Grocery List** -sovellus on käytännöllinen sovellus, jonka avulla käyttäjät voivat hallita ostoslistaa tarvittavista elintarvikkeista. Tämä projekti auttaa aloittelijoita harjoittelemaan **JavaScriptin**, **HTML**:n ja **CSS**:n käyttöä samalla kun opitaan käsittelemään käyttäjän syötteitä, päivittämään DOM:n dynaamisesti ja tallentamaan tietoja **local storage** -ominaisuutta hyödyntäen tietojen pysyvyyden varmistamiseksi. Käyttäjät voivat lisätä, muokata ja poistaa elintarvikkeita, ja tiedot tallennetaan siten, että ne ovat käytettävissä, vaikka sivu päivitettäisiin.

# HTML Selitys

## 1. DOCTYPE-ilmoitus (<code><</code>!DOCTYPE html>)

- **Mikä se on**: DOCTYPE-ilmoitus kertoo selaimelle, että tämä dokumentti on kirjoitettu HTML5-muodossa.
- **Tarkoitus**: Varmistaa, että sivu renderöidään nykyaikaisilla standardeilla, välttäen vanhojen selainten virhetilat (quirks mode).
- **Tärkeä yksityiskohta**: Se on aina HTML-dokumentin yläosassa.

## 2. HTML-tagi (<code><</code>html lang="en">)

- **Mikä se on**: HTML-tagi on juurielementti, joka kietoo kaiken HTML-sisällön. "lang"-attribuutti määrittää dokumentin kielen.
- **Tarkoitus**: lang="en"-attribuutti auttaa näytönlukijoita ja hakukoneita ymmärtämään dokumentin kielen saavutettavuuden ja hakukoneoptimoinnin (SEO) kannalta.

## 3. Head-osio (<code><</code>head>)

- **Mikä se on**: Head-osio sisältää metadataa, linkkejä ulkoisiin resursseihin, kuten CSS-tiedostoihin, sekä dokumentin otsikon.
- **Tarkoitus**: Se tarjoaa tärkeää tietoa selaimelle ennen kuin sisältöä renderöidään käyttäjälle.
- **Tärkeät yksityiskohdat**:
  - **Meta Charset** (<code><</code>meta charset="UTF-8">): Määrittää merkistön UTF-8:ksi, joka tukee laajaa valikoimaa merkkejä.
  - **Viewport Meta Tagi** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">): Varmistaa, että verkkosivu on responsiivinen ja mukautuu eri laitteiden näyttöihin.
  - **Title-tagi** (<code><</code>title>Grocery List</title>🍎): Asettaa verkkosivun otsikon, joka näkyy selaimen välilehdessä. Emoji tekee otsikosta visuaalisesti houkuttelevan.
  - **Linkki CSS:ään** (<code><</code>link rel="stylesheet" href="styles.css">): Tämä linkittää ulkoiseen CSS-tiedostoon (styles.css), joka sisältää kaikki sovelluksen tyylit.

## 4. Body-osio (<code><</code>body>)

- **Mikä se on**: Body sisältää kaiken sivun näkyvän sisällön.
- **Tarkoitus**: Kaikki, mitä käyttäjät näkevät ja joiden kanssa he ovat vuorovaikutuksessa, on sijoitettu body-osioon. Se on tyylitelty CSS:llä ja sitä muokataan JavaScriptillä.
- **Tärkeä yksityiskohta**: Body sisältää sovelluksen pääasiallisen rakenteen, mukaan lukien ostoslistan säilön ja interaktiiviset elementit.

## 5. Pääkonteineri (<code><</code>div class="container">)

- **Mikä se on**: <code><</code>div>-elementti, jossa on "container"-luokka, kietoo koko ostoslistan sovelluksen.
- **Tarkoitus**: Kontaineri ryhmittelee yhteen kaikki asiaankuuluvat elementit (syötekenttä, painike, lista) ja tarjoaa keskitetyn tyylin CSS-luokan avulla.
- **Tärkeä yksityiskohta**: Se luo korttimaisen rakenteen, joka erottaa listan visuaalisesti muusta sivusta.

## 6. Otsikko (<code><</code>h1> Grocery List</h1>🛒)

- **Mikä se on**: Otsikkoelementti (<code><</code>h1>), joka sisältää sovelluksen pääotsikon ja emojin visuaalista tehostetta varten.
- **Tarkoitus**: Antaa selkeän otsikon sovellukselle, jotta käyttäjät tietävät heti, että kyseessä on ostoslistasovellus.
- **Tärkeä yksityiskohta**: Emoji (🛒) tekee käyttöliittymästä houkuttelevamman ja visuaalisesti kiinnostavamman.

## 7. Syötekenttä (<code><</code>input type="text" id="item-input" placeholder="Add a new item... ">🥕)

- **Mikä se on**: Syötekenttä (<code><</code>input>) tyypillä "text", johon käyttäjät voivat kirjoittaa ostoslistan kohteet.
- **Tarkoitus**: Tämä antaa käyttäjille mahdollisuuden syöttää haluamansa tuotteen nimi ostoslistaan.
- **Tärkeät yksityiskohdat**:
  - **ID** (id="item-input"): ID:n avulla JavaScript voi viitata helposti tähän syötekenttään.
  - **Placeholder** (placeholder="Add a new item... "🥕): Placeholder-teksti antaa käyttäjälle vihjeen siitä, mitä kenttään tulisi syöttää. Porkkanaemoji (🥕) lisää leikkisyyttä.

## 8. Lisää tuote -painike (<code><</code>button id="add-item-button"> Add➕ Item</button>)

- **Mikä se on**: Painike-elementti (<code><</code>button>), jota käyttäjät napsauttavat lisätäkseen tuotteen listaan.
- **Tarkoitus**: Kun painiketta napsautetaan, JavaScript lisää syötetyn tuotteen ostoslistaan.
- **Tärkeät yksityiskohdat**:
  - **ID** (id="add-item-button"): Painikkeelle annetaan ID, jotta siihen voidaan helposti viitata JavaScript-koodissa.
  - **Teksti ja emoji** ( Add Item➕): Teksti "Add Item" sisältää myös plusmerkin emojin (➕), joka symboloi tuotteiden lisäämistä listalle.

## 9. Järjestämätön lista (<code><</code>ul id="item-list"></ul>)

- **Mikä se on**: Järjestämätön lista (<code><</code>ul>), joka näyttää dynaamisesti kaikki käyttäjän lisäämät ostoslistan kohteet.
- **Tarkoitus**: Toimii säilönä kaikille listakohteille (<code><</code>li>), jotka edustavat yksittäisiä ostoslistan tuotteita.
- **Tärkeä yksityiskohta**: ID="item-list" antaa JavaScriptin kohdistaa tämän elementin ja lisätä siihen dynaamisesti kohteita.

## 10. Skriptitagi (<code><</code>script src="app.js"></code>)

- **Mikä se on**: Skriptitagi, joka linkittää ulkoiseen JavaScript-tiedostoon (app.js).
- **Tarkoitus**: JavaScript-tiedosto hallitsee sovelluksen toiminnallisuutta (esim. tuotteiden lisääminen listalle, tuotteiden poistaminen ja listan tallentaminen paikalliseen muistiin).
- **Tärkeä yksityiskohta**: JavaScriptin linkittäminen ulkoisesti pitää HTML-tiedoston selkeänä ja erillään sovelluksen logiikasta.

# CSS Selitys

## 1. Globaalin kehon tyylit (body)

- **Mikä se on**: CSS-sääntö <code><</code>body>-elementille koskee koko sivua.
- **Tärkeät ominaisuudet**:
  - **Fontti** (font-family: Arial, sans-serif;): Asettaa oletusfontiksi Arialin, ja varafontiksi muun sans-serif-fontin. Tämä antaa tekstille modernin ja siistin ilmeen.
  - **Taustaväri** (background: linear-gradient(135deg, #74ebd5, #acb6e5);): Lisää sivun taustalle liukuvärin, joka vaihtuu teal-väristä (#74ebd5) vaaleansiniseen (#acb6e5) 135 asteen kulmassa. Tämä tekee sovelluksesta visuaalisesti houkuttelevan ja modernin.
  - **Flexbox-asettelu** (display: flex; flex-direction: column; align-items: center;): Keskittää pääsisällön pystysuunnassa ja vaakasuunnassa Flexboxin avulla. Tämä varmistaa, että sisältö on aina keskellä sivua, riippumatta näytön koosta.
  - **Korkeus** (height: 100vh;): Varmistaa, että <code><</code>body> täyttää koko näkymän korkeuden, mikä auttaa pitämään sisällön keskitettynä.
  - **Reunat ja marginaalit** (padding: 20px; margin: 0;): Lisää sivun reunoille täytettä ja poistaa oletusmarginaalit, jotta asettelu on oikein kaikissa selaimissa.

## 2. Pääkonteinerin tyyli (.container)

- **Mikä se on**: Tämä sääntö tyylittää pääasiallisen <code><</code>div>-elementin, joka sisältää ostoslistan sovelluksen.
- **Tärkeät ominaisuudet**:
  - **Taustaväri** (background: white;): Asettaa kontainerin taustaväriksi valkoisen, joka luo kontrastin liukuvärjättyyn taustaan.
  - **Täyte** (padding: 20px;): Lisää sisälle täytettä, jotta sisältö ei ole liian lähellä reunoja, mikä parantaa luettavuutta.
  - **Reunojen pyöristys** (border-radius: 8px;): Pyöristää kontainerin kulmat, mikä antaa sille pehmeän ja modernin ilmeen.
  - **Varjo** (box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);): Lisää kevyen varjon kontainerin ympärille, mikä antaa sille syvyyttä ja nostaa sen taustasta.
  - **Leveys** (width: 300px;): Asettaa kontainerille kiinteän leveyden, mikä tekee siitä kompaktin ja keskitetyn sivulla.
  - **Tekstin tasaus** (text-align: center;): Keskittää tekstin kontainerin sisällä, mikä tekee käyttöliittymästä järjestelmällisen.

## 3. Otsikon tyyli (h1)

- **Mikä se on**: Sääntö, joka tyylittää sovelluksen pääotsikon.
- **Tärkeät ominaisuudet**:
  - **Marginaalin alaosa** (margin-bottom: 20px;): Lisää tilaa otsikon ja seuraavan elementin väliin, varmistaen oikean etäisyyden ja parantaen sisällön visuaalista kulkua.

## 4. Syötekentän tyyli (input[type="text"])

- **Mikä se on**: Tyylit tekstinsyöttökentälle, johon käyttäjät kirjoittavat ostoslistan kohteet.
- **Tärkeät ominaisuudet**:
  - **Täyte** (padding: 10px;): Lisää täytettä syötekentän sisälle, varmistaen, että teksti ei ole liian lähellä reunoja ja on helppolukuista.
  - **Marginaalin alaosa** (margin-bottom: 10px;): Lisää tilaa syötekentän ja painikkeen väliin, mikä tekee asettelusta järjestelmällisemmän.
  - **Leveyden laskeminen** (width: calc(100% - 22px);): Varmistaa, että syötekenttä täyttää koko kontainerin leveyden, miinus pieni marginaali, pitäen sen responsiivisena.
  - **Reuna** (border: 1px solid #ccc;): Lisää vaaleanharmaan reunan syötekentän ympärille antaen sille rakenteen.
  - **Reunojen pyöristys** (border-radius: 4px;): Pyöristää syötekentän kulmat pehmeämmän ilmeen saavuttamiseksi.
  - **Tekstin tasaus** (text-align: center;): Keskittää tekstin ja käyttäjän syöttämän sisällön syötekentässä.

## 5. Painikkeen tyyli (button)

- **Mikä se on**: Tyylit sovelluksessa käytettäville painikkeille (esim. "Add Item" ja "Delete").
- **Tärkeät ominaisuudet**:
  - **Täyte** (padding: 10px 20px;): Antaa painikkeelle täytettä tehden siitä isomman ja helpommin napsautettavan.
  - **Reuna** (border: none;): Poistaa oletusreunan puhtaamman ilmeen saavuttamiseksi.
  - **Taustaväri** (background-color: #007bff;): Asettaa painikkeen taustaväriksi sinisen (#007bff), joka tekee painikkeesta erottuvan.
  - **Tekstin väri** (color: white;): Varmistaa, että painikkeen teksti on helppolukuinen asettamalla tekstin väri valkoiseksi.
  - **Reunojen pyöristys** (border-radius: 4px;): Pyöristää painikkeen kulmat, mikä tekee siitä yhdenmukaisen syötekentän tyylin kanssa.
  - **Kursorin muutos** (cursor: pointer;): Muuttaa kursorin osoittimeksi, kun käyttäjä vie hiiren painikkeen päälle, osoittaen sen olevan napsautettavissa.
  - **Hover-efekti** (background-color: #0056b3;): Tummuttaa taustaväriä, kun käyttäjä vie hiiren painikkeen päälle, antaen visuaalista palautetta.

## 6. Järjestämätön lista (ul)

- **Mikä se on**: Tyylit järjestämättömälle listalle, joka sisältää ostoslistan kohteet.
- **Tärkeät ominaisuudet**:
  - **Listan tyyli** (list-style-type: none;): Poistaa oletusarvoiset luettelomerkit puhtaamman suunnittelun saavuttamiseksi.
  - **Täyte** (padding: 0;): Poistaa oletustäytteen listasta, kohdistamalla sen muuhun sisältöön.

## 7. Listan kohteiden tyyli (li)

- **Mikä se on**: Tyylit yksittäisille ostoslistan kohteille (<code><</code>li>) listassa.
- **Tärkeät ominaisuudet**:
  - **Tausta** (background: #f8f8f8;): Asettaa vaaleanharmaan taustavärin, joka erottaa listakohteet visuaalisesti kontainerista.
  - **Marginaalin alaosa** (margin-bottom: 10px;): Lisää tilaa jokaisen listakohteen väliin, tehden listasta helpommin luettavan.
  - **Täyte** (padding: 10px;): Lisää täytettä jokaiseen listakohteeseen paremman luettavuuden saavuttamiseksi.
  - **Reunojen pyöristys** (border-radius: 4px;): Pyöristää jokaisen listakohteen kulmat yhtenäisen muotoilun saavuttamiseksi.
  - **Flexbox-asettelu** (display: flex; justify-content: space-between; align-items: center;): Käyttää Flexboxia sijoittamaan kohteen nimi vasemmalle ja poistonappi oikealle, kohdistamalla ne oikein.

## 8. Poista-painikkeen tyyli (.delete-button)

- **Mikä se on**: Tyylit "Poista"-painikkeelle, joka näkyy jokaisen listakohteen vieressä.
- **Tärkeät ominaisuudet**:
  - **Taustaväri** (background-color: #dc3545;): Asettaa taustaväriksi punaisen (#dc3545), mikä viittaa siihen, että tämä on tuhoava toiminto (kohteen poistaminen).
  - **Tekstin väri** (color: white;): Varmistaa, että painikkeen teksti on helppolukuinen asettamalla sen valkoiseksi.
  - **Täyte** (padding: 5px 10px;): Lisää täytettä painikkeeseen tehden siitä helpommin napsautettavan.
  - **Reunojen pyöristys** (border-radius: 4px;): Pyöristää poista-painikkeen kulmat, pitäen sen yhdenmukaisena muun muotoilun kanssa.
  - **Hover-efekti** (background-color: #c82333;): Tummuttaa painikkeen väriä, kun hiiri viedään sen päälle, antaen käyttäjälle visuaalista palautetta.

# JavaScript Selitys

## 1. DOMContentLoaded Event Listener

- **Mikä se on**: DOMContentLoaded-tapahtuma varmistaa, että JavaScript suoritetaan vasta, kun koko HTML-dokumentti on ladattu ja jäsennetty.
- **Tarkoitus**: Tämä takaa, että kaikki DOM-elementit, kuten painikkeet ja syötekentät, ovat manipuloitavissa, kun skripti suoritetaan. Ilman tätä skripti voisi yrittää käyttää elementtejä, jotka eivät ole vielä ladattuina, mikä voisi johtaa virheisiin.
- **Tärkeä yksityiskohta**: Koko sovelluksen toiminnallisuus (kuten kohteiden lisääminen tai poistaminen) sisältyy tähän event listeneriin, mikä varmistaa, että se toimii vasta, kun dokumentti on täysin valmis.

## 2. Muuttujat DOM-elementeille

- **Mikä se on**: Muuttujat, kuten itemInput, addItemButton ja itemList, tallentavat viitteitä tärkeisiin DOM-elementteihin käyttämällä document.getElementById()-metodia.
- **Tarkoitus**: Näiden viitteiden tallentaminen mahdollistaa näiden elementtien helpon manipuloinnin (kuten kohteiden lisäämisen listaan tai sisällön päivittämisen) koko skriptin ajan.
- **Tärkeä yksityiskohta**: Tämä vaihe yksinkertaistaa koodia luomalla helposti luettavat muuttujanimet, jotka osoittavat suoraan elementteihin, joiden kanssa halutaan olla vuorovaikutuksessa.

## 3. Kohteiden hakeminen paikallisesta tallennustilasta (let items = JSON.parse(localStorage.getItem('groceryItems')) || [];)

- **Mikä se on**: Tämä rivi hakee selaimen localStoragessa aiemmin tallennetut ostoslistan kohteet ja jäsentää tiedot taulukoksi. Jos tietoja ei löydy, alustetaan tyhjä taulukko.
- **Tarkoitus**: Se varmistaa, että sovellus voi ladata aiemmin tallennetut kohteet localStoragesta, kun käyttäjä palaa sivulle, säilyttäen käyttäjän luettelon.
- **Tärkeä yksityiskohta**: localStorage tallentaa tiedot merkkijonoina, joten JSON.parse() on tarpeen muuntaa merkkijono takaisin taulukoksi, jota JavaScript voi käsitellä.

## 4. Kohteiden tallentaminen paikalliseen tallennustilaan (function saveItems())

- **Mikä se on**: saveItems-funktio muuntaa items-taulukon merkkijonoksi JSON.stringify()-funktion avulla ja tallentaa sen localStorageen avaimella 'groceryItems'.
- **Tarkoitus**: Tämä mahdollistaa sovelluksen tietojen säilyttämisen sivun uudelleenlatausten aikana tallentamalla nykyisen ostoslistan selaimen localStorageen.
- **Tärkeä yksityiskohta**: Tietojen tallentaminen localStorageen takaa, että vaikka käyttäjä sulkee selaimen tai päivittää sivun, tiedot säilyvät tulevia istuntoja varten.

## 5. Ostoslistan renderöinti (function renderItems())

- **Mikä se on**: Tämä funktio käy läpi items-taulukon ja luo dynaamisesti <code><</code>li>-elementit jokaiselle kohteelle, lisäten ne järjestämättömään listaan (<code><</code>ul>).
- **Tarkoitus**: Se näyttää visuaalisesti ostoslistan verkkosivulla päivittämällä DOMin vastaamaan nykyistä items-taulukkoa.
- **Tärkeä yksityiskohta**:
  - Luettelon innerHTML tyhjennetään alussa, jotta vältetään kaksoiskappaleet, kun funktio kutsutaan.
  - Jokainen items-taulukon kohde liitetään uutena <code><</code>li>-elementtinä, jossa on "Poista"-painike, joka tekee listasta interaktiivisen.

## 6. Lisää kohde -painikkeen tapahtumankuuntelija (addItemButton.addEventListener('click', () => {...}))

- **Mikä se on**: Tämä event listener laukeaa, kun "Lisää kohde" -painiketta painetaan.
- **Askeleet**:
  - Funktio hakee ensin syötekenttään (itemInput.value) syötetyn arvon ja siistii sen (trim).
  - Jos syöte ei ole tyhjä, uusi kohde lisätään items-taulukkoon, syötekenttä tyhjennetään ja lista päivitetään sekä visuaalisesti että localStoragessa.
- **Tarkoitus**: Se mahdollistaa käyttäjän lisätä uusia ostoslistan kohteita, päivittäen dynaamisesti sovelluksen tilan ja tallentaen uuden tilan localStorageen.
- **Tärkeä yksityiskohta**: trim()-metodi varmistaa, että vain ei-tyhjät syötteet lisätään listalle, estäen tyhjien tai pelkkää välilyöntiä sisältävien kohteiden lisäämisen.

## 7. Tapahtumadelegointi kohteiden poistamiseen (itemList.addEventListener('click', (e) => {...}))

- **Mikä se on**: Tämä event listener kiinnitetään koko järjestämättömään listaan (<code><</code>ul>) ja kuuntelee klikkauksia "Poista"-painikkeisiin.
- **Tarkoitus**: Se mahdollistaa kohteiden poistamisen listalta. Kun kohteen poistonappia painetaan, vastaava kohde poistetaan sekä DOMista että items-taulukosta, ja päivitetty lista tallennetaan localStorageen.
- **Tärkeä yksityiskohta**:
  - Tapahtumadelegointia käytetään tässä kuuntelemaan dynaamisesti luotujen elementtien ("Poista"-painikkeet) klikkauksia <code><</code>li>-kohteiden sisällä.
  - getAttribute('data-index') -metodilla haetaan poistettavan kohteen indeksi, joka sitten käytetään oikean kohteen poistamiseen items-taulukosta.

## 8. Kohteiden alkuperäinen renderöinti (renderItems())

- **Mikä se on**: Tämä funktiokutsu varmistaa, että kun sivu ladataan ensimmäisen kerran, kaikki aiemmin tallennetut ostoslistan kohteet näytetään listassa.
- **Tarkoitus**: Se alustaa sovelluksen lataamalla nykyisen ostoslistan tilan localStoragesta ja näyttämällä sen käyttäjälle.

## 9. Yleisen toiminnan kommentointi

- **Sovelluksen toiminta**:
  - Kun käyttäjä lisää kohteen, se näytetään välittömästi sivulla ja tallennetaan localStorageen.
  - Kun käyttäjä painaa poistonappia, vastaava kohde poistetaan sekä listalta että localStoragesta, ja lista renderöidään uudelleen, jotta muutokset näkyvät.
