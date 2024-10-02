# Nettisivu: https://keudaope.github.io/JSProjekteja/P49_Habit_Tracker

# Johdanto

**Tapa Tracker** on hyödyllinen sovellus, joka auttaa käyttäjiä seuraamaan ja ylläpitämään positiivisia päivittäisiä tapoja. Tämä projekti auttaa aloittelijoita harjoittelemaan **JavaScriptiä**, **HTML:ää** ja **CSS:ää** sekä oppimaan, kuinka käsitellä käyttäjän syötteitä, päivittää DOM dynaamisesti ja tallentaa tietoja käyttäen **local storagea** pysyvyyden varmistamiseksi. Käyttäjät voivat lisätä tapoja, merkitä ne suoritetuiksi kullekin päivälle ja seurata edistymistään ajan myötä.

## HTML Selitys

### 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on**: DOCTYPE-ilmoitus kertoo selaimelle, että sivu tulee renderöidä HTML5-standardeilla.
- **Tarkoitus**: Varmistaa, että modernit selaimet tulkitsevat sivun HTML5-muodossa, mikä on välttämätöntä monille ominaisuuksille ja yhdenmukaiselle renderöintikokemukselle.
- **Tärkeä yksityiskohta**: DOCTYPE-ilmoitus tulisi aina sisällyttää välttämään mahdollisia yhteensopivuusongelmia selainten kanssa.

### 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on**: Tämä tagi käärii koko sivun sisällön. lang="en" -attribuutti määrittää, että sisällön kieli on englanti.
- **Tarkoitus**: lang-attribuutti on tärkeä saavutettavuustyökaluille ja SEO:lle, sillä se auttaa ruudunlukijoita ja hakukoneita ymmärtämään sisällön kielen.
- **Tärkeä yksityiskohta**: Oikean kieliattribuutin lisääminen parantaa saavutettavuutta ja hakukoneoptimointia.

### 3. Head Section (<code><</code>head>):

- **Mikä se on**: <code><</code>head>-osio sisältää metatiedot, ulkoiset resurssit (kuten CSS ja JavaScript) ja muuta ei-näkyvää sisältöä, joka on välttämätöntä sivun oikealle renderöinnille.
- **Tarkoitus**: Määrittää metatiedot ja lataa ulkoiset resurssit ennen visuaalisen sisällön renderöintiä.
- **Tärkeät yksityiskohdat**:
  - **Meta Charset** (<code><</code>meta charset="UTF-8">): Määrittää merkkikoodauksen UTF-8:ksi varmistaen, että sivu voi näyttää oikein erilaisia merkkejä, symboleja ja emojeja.
  - **Viewport Meta Tag** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">): Varmistaa, että sivu on responsiivinen ja skaalaa oikein eri kokoisilla näytöillä ja laitteilla, erityisesti mobiilissa.
  - **Title Tag** (<code><</code>title>Habit Tracker<code><</code>/title>): Määrittää verkkosivun otsikon, joka näkyy selaimen välilehdellä ja auttaa käyttäjiä tunnistamaan sivun.
  - **CSS Link** (<code><</code>link rel="stylesheet" href="styles.css">): Linkittää ulkoiseen CSS-tiedostoon, joka määrittää sivun tyylit, pitäen rakenteen ja tyylit erillään ylläpidettävyyden vuoksi.

### 4. Body Tag (<code><</code>body>):

- **Mikä se on**: <code><</code>body>-tagi sisältää kaiken näkyvän sisällön sivulla. Kaikki, mitä käyttäjät näkevät ja joiden kanssa he ovat vuorovaikutuksessa, on sijoitettu bodyyn.
- **Tarkoitus**: Määrittää sovelluksen päästruktuurin ja asettelun, pitäen kaikki visuaaliset ja vuorovaikutteiset elementit.
- **Tärkeä yksityiskohta**: Body-elementteihin sovelletaan tyyliä ja skriptausta, jotta sivusta tulee vuorovaikutteinen ja visuaalisesti houkutteleva.

### 5. Main Container Div (<code><</code>div class="container">):

- **Mikä se on**: <code><</code>div>-elementti, jossa on luokka "container", käärii sovelluksen pääkomponentit, mukaan lukien otsikko, tekstikenttä, painike ja tapalista.
- **Tarkoitus**: Auttaa järjestämään asettelua ryhmittämällä kaikki elementit yhteen tyyliä ja asettelua varten. Container luo korttimaisen ulkoasun.
- **Tärkeä yksityiskohta**: Soveltamalla tyyliä containeriin, sovellus näyttää visuaalisesti yhtenäiseltä ja hyvin rakennetulta, selkeillä marginaaleilla ja sisäyksillä parantaen luettavuutta.

### 6. Heading Tag (<code><</code>h1>Habit Tracker<code><</code>/h1>):

- **Mikä se on**: <code><</code>h1>-tagi on sivun ylin otsikko, joka näyttää otsikon "Habit Tracker".
- **Tarkoitus**: Antaa selkeän otsikon, joka auttaa käyttäjiä ymmärtämään sovelluksen tarkoituksen välittömästi.
- **Tärkeä yksityiskohta**: <code><</code>h1>-tagi on tärkeä sekä saavutettavuuden että SEO:n kannalta, koska se ilmaisee sivun tärkeimmän otsikon.

### 7. Input Field (<code><</code>input type="text" id="habit-input" placeholder="Enter a new habit">):

- **Mikä se on**: <code><</code>input>-elementti, jonka avulla käyttäjä voi kirjoittaa uuden tavan nimen. id-attribuutti mahdollistaa JavaScriptin vuorovaikutuksen elementin kanssa.
- **Tarkoitus**: Mahdollistaa käyttäjien syöttää tietoja (uusi tapa), jota käytetään tapamerkinnän luomiseen seurannassa.
- **Tärkeä yksityiskohta**: placeholder="Enter a new habit" -attribuutti antaa käyttäjälle ohjeen, mitä syöttää.

### 8. Add Habit Button (<code><</code>button id="add-habit-button">Add Habit<code><</code>/button>):

- **Mikä se on**: <code><</code>button>-elementti, joka klikattaessa käynnistää toiminnon lisätä uusi tapa.
- **Tarkoitus**: Tämä painike toimii yhdessä JavaScriptin kanssa lisätäkseen tekstikenttään kirjoitetun tavan tapalistan seurantaan.
- **Tärkeä yksityiskohta**: id mahdollistaa JavaScriptin viittauksen ja toiminnallisuuden (event listeners) lisäämisen painikkeeseen. Ilman sitä, tapojen lisääminen ei olisi mahdollista.

### 9. Habits Div (<code><</code>div class="habits" id="habits"><code><</code>/div>):

- **Mikä se on**: <code><</code>div>-elementti, johon tapalista näytetään dynaamisesti.
- **Tarkoitus**: Toimii säiliönä, joka pitää kaikki tavat, jotka luodaan ja renderöidään JavaScriptin kautta.
- **Tärkeä yksityiskohta**: id="habits" mahdollistaa JavaScriptin kohdentamisen tähän div:iin dynaamista renderöintiä ja tapalistan muokkausta varten.

### 10. JavaScript Script Tag (<code><</code>script src="script.js"><code><</code>/script>):

- **Mikä se on**: <code><</code>script>-tagi, joka linkittää ulkoiseen JavaScript-tiedostoon.
- **Tarkoitus**: Se sisältää sovelluksen logiikan, kuten tapojen lisäämisen ja seuraamisen, DOM:in käsittelyn ja vuorovaikutuksen paikallisen tallennuksen kanssa.
- **Tärkeä yksityiskohta**: Asettamalla <code><</code>script>-tagi bodyn loppuun varmistetaan, että HTML on täysin ladattu ennen kuin JavaScript suoritetaan.
