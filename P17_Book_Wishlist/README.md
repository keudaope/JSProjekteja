# Nettisivu: https://keudaope.github.io/JSProjekteja/P17_Book_Wishlist

# Johdanto

Book Wishlist -sovellus antaa käyttäjien luoda ja hallita luettavien kirjojen listaa lisäämällä nimikkeitä, kirjoittajia ja kuvauksia. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää, keskittyen lomakkeiden käsittelyyn, DOM-manipulaatioon ja responsiiviseen suunnitteluun. Se on yksinkertainen ja vuorovaikutteinen tapa järjestää lukutavoitteita samalla, kun opitaan keskeisiä front-end-kehityksen taitoja.

# HTML Selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on:** <!DOCTYPE html> -määritelmä ilmoittaa, että asiakirja on kirjoitettu HTML5-muodossa.
- **Tarkoitus:** Se varmistaa, että selain näyttää asiakirjan standardien mukaisessa tilassa, tukien moderneja HTML5-ominaisuuksia.
- **Tärkeä yksityiskohta:** Sisällytä aina <!DOCTYPE html> välttääksesi renderointiongelmia eri selaimissa.

## 2. HTML Tag (<code><</code>html lang="en"<code>></code>):

- **Mikä se on:** <code><</code>html<code><</code>-tagi on sivun juurielementti, joka sisältää kaiken verkkosivun sisällön, ja lang="en" määrittää kielen englanniksi.
- **Tarkoitus:** lang-attribuutti auttaa parantamaan saavutettavuutta ja SEO:a, mikä helpottaa hakukoneiden ja apuvälineteknologioiden ymmärtää sisällön kieltä.
- **Tärkeä yksityiskohta:** Kielen määrittäminen juuritasolla parantaa hakukoneoptimointia ja käytettävyyttä apuvälineitä käyttävien henkilöiden kannalta.

## 3. Head Section (<code><</code>head<code>></code>):

- **Mikä se on:** <code><</code>head<code><</code>-tagi sisältää metatiedot, linkit ulkoisiin resursseihin, kuten tyylitiedostoihin ja fontteihin, sekä asiakirjan otsikon.
- **Tarkoitus:** Se määrittää asiakirjan olennaiset metatiedot ja linkittää ulkoisiin tyyleihin (CSS) ja fontteihin (Google Fonts). Se asettaa myös asiakirjan otsikon, joka näkyy selaimen välilehdessä.
- **Tärkeät yksityiskohdat:**
  - **Charset Meta Tag:** (<code><</code>meta charset="UTF-8"<code><</code>): Määrittää merkistön koodauksen, mikä mahdollistaa laajan merkkien tuen.
  - **Viewport Meta Tag:** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0"<code><</code>): Tekee verkkosivusta responsiivisen, mukauttaen ulkoasun eri laitteiden näytön koon mukaan.
  - **Google Fonts Link:** Lisää "Roboto"-fontin Google Fontsista, mikä parantaa sovelluksen typografiaa modernilla ilmeellä.
  - **Title Tag:** (<code><</code>title<code><</code>Book Wishlist<code><</code><code><</code>): Asettaa sivun otsikon, joka näkyy selaimen välilehdessä.

## 4. Body Tag (<code><</code>body<code>></code>):

- **Mikä se on:** <code><</code>body<code><</code>-tagi sisältää kaiken näkyvän verkkosivun sisällön, mukaan lukien lomakkeen kirjojen lisäämiseen ja kirjojen listan lukulistassa.
- **Tarkoitus:** Se sisältää kaikki vuorovaikutteiset ja näkyvät elementit, kuten lomakkeen ja kirjalistan. Kaikki <code><</code>body<code><</code>-tägissä oleva sisältö tyylitellään ja hallitaan CSS:n ja JavaScriptin avulla.
- **Tärkeä yksityiskohta:** Sovelluksen sisältö sijaitsee body-tägissä, joka on olennainen näkyvien elementtien renderöinnille sivulla.

## 5. Container Div (<code><</code>div class="container"<code>></code>):

- **Mikä se on:** <code><</code>div<code><</code>-elementti, jolla on container-luokka, käärii sovelluksen koko sisällön, mukaan lukien otsikon, lomakkeen ja kirjalistan.
- **Tarkoitus:** Kontti ryhmittelee sisällön ja tarjoaa rakenteen sovellukselle. Se mahdollistaa keskitetyn tyylin, kuten paddingin, taustavärin ja asettelun, korttimaisen ulkoasun aikaansaamiseksi.
- **Tärkeä yksityiskohta:** Containerin käyttö auttaa organisoimaan sisällön ja tekee sivusta responsiivisen ja helposti tyyliteltävän.

## 6. Heading (<code><</code>h1<code></code>Book Wishlist<code><</code>h1>):

- **Mikä se on:** <code><</code>h1<code><</code>-tagi määrittää sovelluksen pääotsikon, "Book Wishlist".
- **Tarkoitus:** Se antaa sovellukselle selkeän otsikon, tehden verkkosivun tarkoituksen välittömästi selväksi käyttäjälle. Se myös parantaa saavutettavuutta ja hakukoneoptimointia.
- **Tärkeä yksityiskohta:** <code><</code>h1<code><</code>-tagi on tärkeä määrittämään ensisijainen sisältö ja parantamaan sovelluksen näkyvyyttä hakutuloksissa.

## 7. Form Element (<code><</code>form id="book-form"<code>></code>):

- **Mikä se on:** <code><</code>form<code><</code>-elementti sisältää syötekentät (otsikko, kirjoittaja, kuvaus) ja lähetyspainikkeen, mikä mahdollistaa käyttäjien lisätä kirjoja lukulistaan.
- **Tarkoitus:** Lomake ryhmittelee kaikki syötekentät yhteen, mikä mahdollistaa käyttäjien lähettää kirjatiedot. id="book-form" helpottaa lomakkeen kohdistamista JavaScriptillä käyttäjän syötteen käsittelyä varten.
- **Tärkeät yksityiskohdat:**
  - **Title Input Field:** (<code><</code>input type="text" id="book-title" placeholder="Enter book title" required<code><</code>): Mahdollistaa käyttäjien syöttää kirjan otsikon. Required-attribuutti varmistaa, ettei lomaketta voi lähettää ilman otsikkoa.
  - **Author Input Field:** (<code><</code>input type="text" id="book-author" placeholder="Enter author's name" required<code><</code>): Mahdollistaa käyttäjien syöttää kirjan kirjoittajan. Se on myös pakollinen.
  - **Description Textarea:** (<code><</code>textarea id="book-description" placeholder="Enter book description" required<code><</code><code><</code><code><</code>): Mahdollistaa käyttäjien syöttää lyhyen kuvauksen kirjasta. Required-attribuutti varmistaa, että kuvaus täytetään ennen lähettämistä.
  - **Submit Button:** (<code><</code>button type="submit"<code><</code>Add Book<code><</code><code><</code>): Lähettää lomakkeen ja käynnistää JavaScriptin, joka käsittelee ja lisää kirjan lukulistaan.

## 8. Book List Display (<code><</code>ul id="book-list" class="book-list"<code>></code>):

- **Mikä se on:** <code><</code>ul<code><</code>-elementti toimii lukulistan kirjojen säilönä, joka päivitetään dynaamisesti JavaScriptillä kirjojen lisäämisen tai poistamisen yhteydessä.
- **Tarkoitus:** Järjestämätön lista tarjoaa rakenteellisen tavan näyttää lukulistaan lisätyt kirjat. Jokainen kirja lisätään <code><</code>li<code><</code>-elementtinä, joka sisältää kirjan otsikon, kirjoittajan ja kuvauksen.
- **Tärkeä yksityiskohta:** id="book-list" mahdollistaa listan helpon kohdistamisen JavaScriptillä, mikä mahdollistaa sisällön dynaamisen päivityksen kirjojen lisäyksen yhteydessä.

## 9. Script Tag (<code><</code>script src="app.js"<code>></code>):

- **Mikä se on:** <code><</code>script<code><</code>-tagi linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää logiikan kirjojen lisäämiseksi ja poistamiseksi lukulistasta.
- **Tarkoitus:** Linkittäminen ulkoiseen JavaScript-tiedostoon erottelee logiikan verkkosivun rakenteesta, noudattaen parhaita käytäntöjä modulariteetin ja ylläpidettävyyden suhteen.
- **Tärkeä yksityiskohta:** JavaScriptin pitäminen ulkoisessa tiedostossa tekee HTML:stä helpommin luettavan ja ylläpidettävän, samalla varmistaen, että kaikki vuorovaikutteinen toiminnallisuus käsitellään tehokkaasti.

# CSS selitys

## 1. Global Reset (\* Selector):

- **Mikä se on:** Universaali valitsin \* soveltaa tyylejä kaikkiin sivun elementteihin.
- **Tarkoitus:** Se nollaa marginaalit, pehmusteet ja asettaa box-sizing: border-box kaikille elementeille, varmistaen, että pehmusteet ja reunukset sisältyvät elementin kokonaisleveyteen ja -korkeuteen. Tämä nollaus takaa yhdenmukaisuuden eri selaimissa.
- **Tärkeä yksityiskohta:** Globaali nollaus estää odottamattomat tilankäyttöön ja asetteluun liittyvät ongelmat, erityisesti responsiivisia asetteluja luotaessa.

## 2. Body Styling (<code><</code>body>):

- **Mikä se on:** Tämä sääntö tyylittää <code><</code>body>-elementin, joka sisältää kaiken sivun sisällön.
- **Tarkoitus:**
  - **Fontti:** font-family: 'Roboto', sans-serif; soveltaa siistin, modernin fontin Google Fontsista luettavuuden ja esteettisen ulkoasun parantamiseksi.
  - **Tausta:** background: linear-gradient(135deg, #74ebd5, #acb6e5); luo silmiinpistävän liukuvärjätyn taustan, joka siirtyy vinosti tealista pehmeään siniseen, antaen sivulle visuaalisesti houkuttelevan ilmeen.
  - **Flexbox Asettelu:** display: flex; justify-content: center; align-items: center; keskittää sisällön sekä vaaka- että pystysuunnassa Flexboxilla, mikä asettaa pääkontainerin täydellisesti keskelle näkymää.
  - **Täysikorkeus Asettelu:** height: 100vh; varmistaa, että body täyttää koko näkymäkorkeuden, pitäen keskitetyn asettelun myös pienemmillä näytöillä.
- **Tärkeä yksityiskohta:** Flexbox tekee sisällön keskittämisestä yksinkertaista ja tehokasta, kun taas liukuvärjätty tausta lisää modernin kosketuksen.

## 3. Container Styling (.container):

- **Mikä se on:** Tämä sääntö tyylittää .container-divin, joka sisältää lomakkeen ja kirjalistan.
- **Tarkoitus:**
  - **Taustaväri:** background-color: #fff; antaa kontainerille puhtaan valkoisen taustan, joka kontrastoi värikkään liukuvärjätyn taustan kanssa.
  - **Pehmuste:** padding: 30px; tarjoaa sisäistä tilaa sisällön ympärille, parantaen luettavuutta ja estäen sisällön koskemasta reunoja.
  - **Reunuksen Pyöristys:** border-radius: 15px; antaa kontainerille pehmeät, pyöristetyt kulmat, luoden modernin, korttimaisen ulkoasun.
  - **Varjo:** box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); lisää pehmeän varjon kontainerin ympärille, saaden sen näyttämään hieman kohotetulta, mikä lisää syvyyttä muotoiluun.
  - **Leveys:** width: 400px; varmistaa, että kontainerilla on kiinteä leveys paremman asettelun hallitsemiseksi. max-width: 100%; varmistaa, että kontainer on responsiivinen ja mukautuu pienemmille näytöille tarvittaessa.
  - **Siirtymä:** transition: transform 0.3s ease; mahdollistaa sujuvat siirtymät, kun kontaineria leijutetaan.
- **Tärkeä yksityiskohta:** Pehmusteen, pyöristettyjen kulmien ja varjon yhdistelmä antaa kontainerille siistin, modernin ja visuaalisesti houkuttelevan korttimaisen ulkoasun.

## 4. Hover Effect on Container (.container:hover):

- **Mikä se on:** Tämä sääntö soveltuu, kun käyttäjä leijuttaa kursoria kontainerin yllä.
- **Tarkoitus:** transform: scale(1.05); suurentaa kontaineria hieman leijutuksen aikana, lisäten hienovaraisen zoomaustehosteen, joka parantaa vuorovaikutusta ja reagoivuutta.
- **Tärkeä yksityiskohta:** Hover-efekti antaa kontainerille dynaamisen tunteen, parantaen käyttäjän sitoutumista tekemällä sovelluksesta interaktiivisemman.

## 5. Heading Styling (<code><</code>h1>):

- **Mikä se on:** Tämä sääntö tyylittää <code><</code>h1>-elementin, joka näyttää otsikon "Book Wishlist".
- **Tarkoitus:**
  - **Fonttikoko:** font-size: 2.5em; tekee otsikosta suuren ja näkyvän, varmistaen, että otsikko erottuu.
  - **Alamarginaali:** margin-bottom: 20px; luo tilaa otsikon alle, erottaen sen lomakkeesta.
  - **Väri:** color: #2d3748; käyttää tummanharmaata väriä tekstissä, mikä takaa hyvän kontrastin ja luettavuuden valkoista taustaa vasten.
- **Tärkeä yksityiskohta:** Näkyvä fonttikoko ja asettelu tekevät otsikosta selkeän ja visuaalisesti houkuttelevan, ohjaten käyttäjiä sovelluksen tarkoitukseen heti.

## 6. Form Layout (form):

- **Mikä se on:** Tämä sääntö tyylittää lomakkeen, joka sisältää syötekentät ja painikkeen.
- **Tarkoitus:**
  - **Flex-suunnittelu:** flex-direction: column; pinottaa syötekentät ja painikkeen pystysuoraan.
  - **Väli:** gap: 10px; lisää tilaa syötekenttien ja painikkeen väliin, parantaen lomakkeen asettelua.
  - **Alamarginaali:** margin-bottom: 20px; tarjoaa tilaa lomakkeen ja kirjalistan väliin.
- **Tärkeä yksityiskohta:** Flexboxin käyttö varmistaa, että lomakkeen asettelu on siisti ja responsiivinen, ja elementtien väliin jää riittävästi tilaa käyttäjän kannalta miellyttävään kokemukseen.

## 7. Input and Textarea Styling (input[type="text"], textarea):

- **Mikä se on:** Tämä sääntö tyylittää sekä tekstisyötekentät että tekstialueen kirjan kuvaukselle.
- **Tarkoitus:**
  - **Pehmuste:** padding: 12px; lisää sisäistä tilaa, mikä tekee syötekenttien käytöstä mukavaa.
  - **Reunus:** border: 1px solid #ccc; tarjoaa hienovaraisen reunuksen syötekenttien ympärille, pitäen ulkoasun yksinkertaisena ja siistinä.
  - **Reunuksen pyöristys:** border-radius: 8px; antaa syötekentille pyöristetyt kulmat pehmeämpää ja modernimpaa muotoilua varten.
  - **Varjo:** box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05); lisää kevyen varjon, joka antaa kentille hienovaraista syvyyttä ja saa ne erottumaan taustasta.
  - **Siirtymä:** transition: border-color 0.3s ease; varmistaa sujuvan siirtymisen, kun syötekentät ovat aktiivisia.
- **Tärkeä yksityiskohta:** Pehmusteen, pyöristettyjen kulmien ja varjon yhdistelmä tekee syötekentistä houkuttelevia ja helppokäyttöisiä.

## 8. Focus Effect on Input and Textarea (input[type="text"]:focus, textarea:focus):

- **Mikä se on:** Tämä sääntö soveltuu, kun tekstisyötekenttä tai tekstialue on valittuna (klikattu tai aktivoitu).
- **Tarkoitus:** border-color: #007bff; vaihtaa reunuksen värin siniseksi, kun kenttä on aktiivinen, antaen käyttäjälle välitöntä visuaalista palautetta.
- **Tärkeä yksityiskohta:** Fokusefekti parantaa käytettävyyttä tekemällä selväksi, mikä kenttä on tällä hetkellä valittuna.

## 9. Button Styling (button):

- **Mikä se on:** Tämä sääntö tyylittää "Add Book" -painikkeen.
- **Tarkoitus:**
  - **Pehmuste:** padding: 12px 20px; varmistaa, että painike on tarpeeksi suuri ollakseen helposti klikattavissa, samalla kun säilytetään tasapainoinen ulkoasu.
  - **Taustaväri:** background-color: #007bff; antaa painikkeelle kirkkaan sinisen taustan, mikä tekee siitä näkyvän ja signaaloi toimintokelpoisen elementin.
  - **Tekstin väri:** color: white; varmistaa, että teksti on selkeästi luettavissa sinistä taustaa vasten.
  - **Reunuksen pyöristys:** border-radius: 8px; antaa painikkeelle pyöristetyt kulmat, jotka ovat yhdenmukaisia muun muotoilun kanssa.
  - **Kursori:** cursor: pointer; muuttaa kursorin osoittimeksi hover-tilassa, mikä signaloi painikkeen interaktiivisuutta.
  - **Siirtymä:** transition: background-color 0.3s ease, transform 0.2s ease; lisää sujuvia siirtymiä, kun painiketta leijutetaan tai klikataan.
- **Tärkeä yksityiskohta:** Painikkeen muotoilu tekee siitä visuaalisesti erottuvan ja helppokäyttöisen, ja se tarjoaa selvää visuaalista palautetta leijutuksessa tai klikkauksessa.

## 10. Hover Effect on Button (button:hover):

- **Mikä se on:** Tämä sääntö soveltuu, kun käyttäjä leijuttaa kursorin painikkeen yllä.
- **Tarkoitus:** background-color: #0056b3; tummentaa painikkeen taustaväriä, antaen visuaalista palautetta, kun käyttäjä leijuttaa sen yllä. transform: translateY(-2px); nostaa painiketta hieman, luoden 3D-vaikutelman.
- **Tärkeä yksityiskohta:** Hover-efekti tekee painikkeesta dynaamisemman ja houkuttelevamman, rohkaisten käyttäjää vuorovaikutukseen.

## 11. Book List Styling (.book-list):

- **Mikä se on:** Tämä sääntö tyylittää <code><</code>ul>-elementin, joka näyttää kirjalistan.
- **Tarkoitus:** list-style-type: none; poistaa oletuksena olevat luettelopisteet, varmistaen, että kirjalista näyttää puhtaalta ja modernilta.
- **Tärkeä yksityiskohta:** Lista on tyyliltään visuaalisesti siisti ja helposti navigoitava.

## 12. Individual Book Items (.book-list li):

- **Mikä se on:** Tämä sääntö tyylittää jokaisen kirjan listassa.
- **Tarkoitus:**
  - **Taustaväri:** background-color: #f9f9f9; antaa jokaiselle kirjaelementille vaalean taustan visuaalisen eron luomiseksi muuhun sisältöön nähden.
  - **Pehmuste:** padding: 15px; varmistaa riittävästi sisäistä tilaa luettavuuden parantamiseksi.
  - **Reunuksen pyöristys:** border-radius: 8px; antaa kirjaelementeille pyöristetyt kulmat yhdenmukaistaen modernia ulkoasua.
  - **Varjo:** box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05); lisää hienovaraisen varjon syvyyden lisäämiseksi.
  - **Näyttö:** display: flex; flex-direction: column; pinottaa kirjan tiedot pystysuoraan.
- **Tärkeä yksityiskohta:** Jokainen kirjaelementti on tyylitelty niin, että se on visuaalisesti erottuva, hyvin tilava ja helposti luettavissa.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener:

- **Mikä se on:** document.addEventListener('DOMContentLoaded', ...) on tapahtumankuuntelija, joka aktivoituu, kun koko HTML-dokumentti on ladattu ja jäsennetty.
- **Tarkoitus:** Tämä varmistaa, että JavaScript-koodi suoritetaan vasta, kun kaikki DOM-elementit (kuten lomake ja syötekentät) ovat saatavilla, mikä estää virheet yrittäessä käyttää elementtejä, jotka eivät vielä ole renderöityneet.
- **Tärkeä yksityiskohta:** DOMContentLoaded:in käyttö takaa, että JavaScript voi olla turvallisesti vuorovaikutuksessa DOMin kanssa, varmistaen, että skripti voi käyttää ja käsitellä tarvittavia elementtejä.

## 2. Selecting DOM Elements:

- **Mikä se on:**
  - **const bookForm = document.getElementById('book-form');:** Valitsee lomake-elementin sen id:n avulla.
  - **const bookTitleInput = document.getElementById('book-title');:** Valitsee kirjan otsikkosyötekentän.
  - **const bookAuthorInput = document.getElementById('book-author');:** Valitsee kirjoittajan syötekentän.
  - **const bookDescriptionInput = document.getElementById('book-description');:** Valitsee kuvauksen syötekentän.
  - **const bookList = document.getElementById('book-list');:** Valitsee <code><</code>ul>-elementin, joka näyttää kirjalistan.
- **Tarkoitus:** Nämä muuttujat tallentavat viittaukset keskeisiin DOM-elementteihin, jolloin JavaScript voi olla vuorovaikutuksessa niiden kanssa (esim. lisätä kirjoja listalle tai tyhjentää syötekentät).
- **Tärkeä yksityiskohta:** DOM-elementtien tehokas valinta niiden id:n avulla auttaa virtaviivaistamaan tapahtumankäsittelyä ja DOM-manipulointia sovelluksessa.

## 3. Form Submission Event Listener:

- **Mikä se on:** bookForm.addEventListener('submit', event => {...}); kiinnittää tapahtumankuuntelijan lomakkeeseen, joka kuuntelee "submit"-tapahtumaa (kun käyttäjä napsauttaa "Add Book" -painiketta).
- **Tarkoitus:** Tämä funktio käsittelee lomakkeen lähettämistä, estäen lomakkeen oletuskäyttäytymisen (joka lataisi sivun uudelleen) ja sallii sovelluksen käsitellä käyttäjän syötteitä ilman sivun päivitystä.
- **Tärkeät yksityiskohdat:**
  - **event.preventDefault();:** Estää lomakkeen oletuskäyttäytymisen, mikä varmistaa, että sovellus pysyy toiminnassa samalla sivulla.
  - Otsikon, kirjoittajan ja kuvauksen kentistä saadut arvot poimitaan ja trimmataan, jotta ylimääräiset välilyönnit poistetaan.

## 4. Input Validation:

- **Mikä se on:** Tapahtumankuuntelijan sisällä koodi tarkistaa, että otsikko, kirjoittaja ja kuvauskentät eivät ole tyhjiä ennen kuin kirja lisätään.
- **Tarkoitus:** Tämä varmistaa, että vain kelvolliset syötteet (ei-tyhjät arvot) käsitellään. Jos jokin kenttä on tyhjä, kirjaa ei lisätä listalle.
- **Tärkeä yksityiskohta:** Syötteen validointi varmistaa, että sovellus käsittelee käyttäjän syötteen oikein ja estää keskeneräisten merkintöjen lisäämisen lukulistaan.

## 5. Adding a Book to the Wishlist (addBook function):

- **Mikä se on:** function addBook(title, author, description) {...} on funktio, joka luo uuden kirjamaininnan ja lisää sen lukulistaan (<code><</code>ul>-elementti).
- **Tarkoitus:** Tämä funktio luo dynaamisesti uuden listaelementin (<code><</code>li>) jokaiselle lisätylle kirjalle, mukaan lukien sen otsikko, kirjoittaja ja kuvaus, ja lisää sen DOMiin.
- **Tärkeät yksityiskohdat:**
  - **Elementtien luominen:** Funktio luo uusia <code><</code>div>-elementtejä kirjan otsikolle, kirjoittajalle ja kuvaukselle sekä poistonappulan jokaiselle kirjalle.
  - **Tekstisisältö:** textContent-ominaisuutta käytetään määrittämään käyttäjän syöttämät arvot vastaaviin elementteihin (otsikko, kirjoittaja ja kuvaus).
  - **Elementtien lisääminen:** Jokainen <code><</code>div> ja poistonappula lisätään <code><</code>li>-elementtiin, joka sitten lisätään <code><</code>ul>-elementtiin (kirjalista).

## 6. Delete Button for Each Book Item:

- **Mikä se on:** addBook()-funktion sisällä luodaan "Remove"-painike jokaiselle kirjaelementille, jolloin käyttäjät voivat poistaa kirjoja listalta.
- **Tarkoitus:** Poistonappula mahdollistaa kirjojen poistamisen lukulistalta dynaamisesti, mikä parantaa käyttäjän hallintaa listaan nähden.
- **Tärkeät yksityiskohdat:**
  - **deleteBtn.textContent = 'Remove';:** Asettaa napin tekstiksi "Remove".
  - Tapahtumankuuntelija kiinnitetään poistonappulaan, joten kun käyttäjä napsauttaa sitä, vastaava kirja poistetaan DOMista käyttämällä bookList.removeChild(li);.

## 7. Clearing Input Fields After Submission:

- **Mikä se on:** Kun kirja on onnistuneesti lisätty, otsikon, kirjoittajan ja kuvauksen syötekentät tyhjennetään asettamalla niiden arvot tyhjäksi merkkijonoksi.
- **Tarkoitus:** Tämä parantaa käyttökokemusta tyhjentämällä lomakkeen, jolloin käyttäjät voivat helposti lisätä uuden kirjan ilman, että heidän tarvitsee manuaalisesti tyhjentää syötekenttiä.
- **Tärkeä yksityiskohta:** Syötekenttien tyhjentäminen lisäämisen jälkeen tekee lomakkeesta valmiin uusia merkintöjä varten, parantaen vuorovaikutuksen sujuvuutta.

## 8. Dynamically Updating the DOM:

- **Mikä se on:** Joka kerta, kun kirja lisätään, DOM päivittyy dynaamisesti lisäämällä uusia <code><</code>li>-elementtejä kirjalistaan, ja aina kun kirja poistetaan, vastaava <code><</code>li> poistetaan listalta.
- **Tarkoitus:** Tämä varmistaa, että sovellus on interaktiivinen ja että käyttäjä näkee lukulistansa reaaliaikaisesti ilman sivun päivitystä.
- **Tärkeä yksityiskohta:** DOMin dynaaminen manipulointi tarjoaa sujuvan ja responsiivisen käyttökokemuksen, jolloin käyttäjät voivat olla vuorovaikutuksessa sovelluksen kanssa reaaliajassa.
