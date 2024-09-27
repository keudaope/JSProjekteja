# Nettisivu: https://keudaope.github.io/JSProjekteja/P34_Light_Dark_Mode_Toggle

# **Johdanto**

Light/Dark Mode Toggle on hyödyllinen sovellus, jonka avulla käyttäjät voivat vaihtaa valon ja tumman teeman välillä. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptin, HTML:n ja CSS:n käyttöä samalla, kun he oppivat käsittelemään käyttäjän vuorovaikutuksia, manipuloimaan DOM:ia ja soveltamaan erilaisia tyylejä dynaamisesti. Käyttäjät voivat klikata painiketta vaihtaakseen valon ja tumman teeman välillä, mikä parantaa käyttökokemusta tarjoamalla visuaalisesti mukavan käyttöliittymän.

# **HTML Selitys**

## 1. DOCTYPE-ilmoitus (<code><</code>!DOCTYPE html>)

- **Mikä se on:** <code><</code>!DOCTYPE html -ilmoitus määrittää, että dokumentti on kirjoitettu HTML5:llä.
- **Tarkoitus:** Se varmistaa, että selain tulkitsee verkkosivun modernien HTML5-standardien mukaisesti, välttäen ongelmat vanhojen renderöintitilojen kanssa.
- **Tärkeä yksityiskohta:** DOCTYPE-ilmoitus tulee aina sisällyttää, jotta selain varmistaa sivun yhtenäisen renderöinnin eri selaimissa.

## 2. HTML-tagi (<code><</code>html lang="en">)

- **Mikä se on:** <code><</code>html-tagi käärii kaiken sivun sisällön. lang="en" -attribuutti määrittää, että dokumentin kieli on englanti.
- **Tarkoitus:** Lang-attribuutti auttaa hakukoneita ja saavutettavuustyökaluja ymmärtämään dokumentin kielen.
- **Tärkeä yksityiskohta:** Dokumentin kielen määrittäminen parantaa saavutettavuutta ja hakukoneoptimointia (SEO), helpottaen työkaluja ymmärtämään sivun sisältöä.

## 3. Head-tagi (<code><</code>head>)

- **Mikä se on:** <code><</code>head-tagi sisältää metatiedot ja linkit ulkoisiin resursseihin, kuten tyylitiedostoihin.
- **Tarkoitus:** <code><</code>head-osio mahdollistaa selaimen lataamaan tärkeät tiedot, kuten merkistökoodauksen, näkymäasetukset mobiililaitteiden responsiivisuutta varten sekä linkit tyylitiedostoihin.
- **Tärkeät yksityiskohdat:**
  - **Meta Charset:** (<code><</code>meta charset="UTF-8">) määrittää merkistökoodauksen UTF-8:ksi, mikä tukee laajaa merkkivalikoimaa varmistaen tekstin oikean esittämisen.
  - **Viewport Meta Tag:** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">) varmistaa, että verkkosivu on responsiivinen ja skaalautuu oikein mobiililaitteilla.
  - **Title-tagi:** (<code><</code>title>Light/Dark Mode Toggle<code><</code>/title>) määrittää selaimen välilehdessä näytettävän tekstin, joka edustaa sivun otsikkoa.
  - **CSS-linkki:** (<code><</code>link rel="stylesheet" href="styles.css">) linkittää ulkoiseen CSS-tiedostoon, joka määrittelee verkkosivun tyylin. Tämä pitää rakenteen ja tyylin erillään.

## 4. Body-tagi (<code><</code>body class="light-mode">)

- **Mikä se on:** <code><</code>body-tagi sisältää kaiken verkkosivun näkyvän sisällön, kuten otsikon, painikkeen ja tilanvaihdon toiminnallisuuden.
- **Tarkoitus:** class="light-mode" -attribuutti asettaa sivun alkuperäisen tyylin valotilaan oletuksena. Body-tagi on pääsäiliö kaikelle käyttäjälle näkyvälle sisällölle.
- **Tärkeä yksityiskohta:** Class-attribuutti auttaa dynaamisessa valon ja pimeän tilan välillä vaihtamisessa, jota ohjataan JavaScriptin avulla.

## 5. Container-divi (<code><</code>div class="container">)

- **Mikä se on:** <code><</code>div-elementti ryhmittelee sivun sisällön, kuten otsikon ja painikkeen.
- **Tarkoitus:** Container-luokka tyylittelee tämän divin lisäämällä täytettä, varjon ja keskityksen, varmistaen yhtenäisen asettelun ja ilmeen. Se pitää sivun sisällön visuaalisesti järjestettynä.
- **Tärkeä yksityiskohta:** Container-luokka varmistaa, että sisältö on keskitetty ja siististi tyylitelty, luoden visuaalisesti yhtenäisen käyttöliittymän.

## 6. Otsikko (<code><</code>h1>Light/Dark Mode Toggle<code><</code>/h1>)

- **Mikä se on:** <code><</code>h1-tagi määrittää sivun pääotsikon "Light/Dark Mode Toggle".
- **Tarkoitus:** <code><</code>h1-elementti toimii sivun pääotsikkona ja kertoo käyttäjälle verkkosivun toiminnallisuuden.
- **Tärkeä yksityiskohta:** <code><</code>h1 on tärkein otsikko SEO:n ja saavutettavuuden kannalta, korostaen sivun ensisijaista tarkoitusta.

## 7. Painike (<code><</code>button id="toggle-button">Switch to Dark Mode<code><</code>/button>)

- **Mikä se on:** <code><</code>button-elementti, joka vaihtaa valotilan ja tumman tilan välillä.
- **Tarkoitus:** Painike toimii interaktiivisena elementtinä, joka klikatessa vaihtaa sivun valotilasta tummaan tilaan ja päinvastoin. Painikkeella on id="toggle-button", mikä mahdollistaa sen viittaamisen JavaScriptissä.
- **Tärkeä yksityiskohta:** Painikkeen sisällä oleva teksti päivittyy dynaamisesti tilan mukaan, ja sitä tyylitellään erikseen sekä valossa että pimeässä tilassa paremman käyttökokemuksen takaamiseksi.

## 8. Script-tagi (<code><</code>script src="app.js"><code><</code>/script>)

- **Mikä se on:** <code><</code>script-tagi linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää logiikan valon ja pimeän tilan välillä vaihtamiseen.
- **Tarkoitus:** Tämä erottaa logiikan (JavaScript) rakenteesta (HTML) ja tyylistä (CSS), noudattaen parhaita käytäntöjä modulaariseen kehitykseen.
- **Tärkeä yksityiskohta:** Skripti ladataan sen jälkeen, kun DOM-elementit on määritelty, varmistaen, että JavaScriptillä on pääsy kaikkiin elementteihin ennen sen suorittamista.

# **CSS Selitys**

## 1. Global Reset (\*)

- **Mikä se on:** \*-valitsin nollaa kaikkien HTML-elementtien oletustyylit.
- **Tarkoitus:** Tämä poistaa oletusmarginaalit ja -täytteet kaikista elementeistä, varmistaen yhdenmukaisuuden eri selainten välillä. **box-sizing: border-box** sisällyttää täytteen ja reunukset elementin leveyteen ja korkeuteen, yksinkertaistaen asettelun laskemista.
- **Tärkeä yksityiskohta:** Globaali nollaus poistaa ei-toivotut välimatkat ja epäjohdonmukaisuudet, joita selainten oletustyylit voivat aiheuttaa.

## 2. Body-tyylitys (body)

- **Mikä se on:** Tämä tyylittää koko sivun rungon, määrittäen asettelun ja ulkoasun.
- **Tärkeät ominaisuudet:**
  - **font-family:** 'Poppins', sans-serif;: Soveltaa modernia ja puhdasta fonttia kaikelle tekstille, parantaen luettavuutta ja tuoden nykyaikaisen ilmeen.
  - **display:** flex; **justify-content:** center; **align-items:** center;: Käyttää Flexboxia sisällön keskittämiseen sekä pysty- että vaakasuunnassa, varmistaen, että tilanvaihtimen käyttöliittymä on ruudun keskellä.
  - **height:** 100vh;: Varmistaa, että body-elementti vie koko näkymän korkeuden, mahdollistaen sisällön pystysuuntaisen keskittämisen.
  - **transition:** background-color 0.5s ease, color 0.5s ease;: Lisää sujuvat siirtymät taustavärille ja tekstivärille, kun vaihdetaan valon ja tumman tilan välillä.
- **Tarkoitus:** Nämä tyylit luovat responsiivisen, keskitetyn asettelun ja takaavat sujuvat visuaaliset siirtymät eri tilojen välillä.

## 3. Container-tyylitys (.container)

- **Mikä se on:** Tämä tyylittää päädivin, joka sisältää sisällön (otsikon ja painikkeen).
- **Tärkeät ominaisuudet:**
  - **text-align:** center;: Keskittää tekstin ja painikkeen säiliön sisällä.
  - **padding:** 40px;: Tarjoaa sisäistä tilaa sisällön ympärille, tehden siitä visuaalisesti houkuttelevamman ja helpommin luettavan.
  - **border-radius:** 12px;: Pyöristää säiliön kulmat, antaen sille modernin ja pehmeän ulkoasun.
  - **box-shadow:** 0 15px 25px rgba(0, 0, 0, 0.1);: Lisää hienovaraisen varjon säiliön ympärille, antaen sille syvyyttä ja tehden sen erottuvaksi taustasta.
- **Tarkoitus:** Säiliö luo puhtaan ja modernin korttimaisen asettelun pehmeällä varjolla, varmistaen käyttöliittymän viimeistellyn ja ammattimaisen ilmeen.

## 4. Light Mode -tyylitys (.light-mode)

- **Mikä se on:** **.light-mode**-luokka määrittelee sivun vaalean teeman.
- **Tärkeät ominaisuudet:**
  - **background-color:** #f0f0f0;: Asettaa vaaleanharmaan taustavärin, joka on tyypillinen vaaleiden teemojen suunnittelussa.
  - **color:** #333;: Soveltaa tummanharmaan tekstivärin, tarjoten riittävän kontrastin vaaleaa taustaa vasten luettavuuden parantamiseksi.
- **Tarkoitus:** Tämä varmistaa, että vaalea tila on visuaalisesti erottuva ja mukava kirkkaissa ympäristöissä.

## 5. Dark Mode -tyylitys (.dark-mode)

- **Mikä se on:** **.dark-mode**-luokka määrittelee sivun tumman teeman.
- **Tärkeät ominaisuudet:**
  - **background-color:** #1e1e1e;: Asettaa tummanharmaan/mustan taustavärin, joka on tyypillinen tumman tilan suunnittelussa.
  - **color:** #f0f0f0;: Soveltaa vaaleanharmaan tekstivärin, joka tarjoaa kontrastin tummaa taustaa vasten luettavuuden varmistamiseksi.
- **Tarkoitus:** Tämä tarjoaa visuaalisesti miellyttävän tumman teeman, joka on helpompi silmille hämärässä ympäristössä.

## 6. Painikkeen tyylitys (button)

- **Mikä se on:** Tyylittää painikkeen, jota käytetään vaihtamaan valon ja tumman tilan välillä.
- **Tärkeät ominaisuudet:**
  - **padding:** 12px 25px;: Lisää sisäistä täytettä painikkeeseen, luoden mukavan klikkausalueen ja tasapainoiset mittasuhteet.
  - **border:** none;: Poistaa oletusreunuksen siistin ulkoasun saavuttamiseksi.
  - **border-radius:** 8px;: Pyöristää painikkeen kulmat, jotta se on visuaalisesti yhtenäinen säiliön pyöristettyjen reunojen kanssa.
  - **cursor:** pointer;: Muuttaa kursorin osoittimeksi hover-tilassa, osoittaen painikkeen olevan interaktiivinen.
  - **font-size:** 1.1em;: Suurentaa painikkeen tekstin hieman paremman luettavuuden ja korostuksen takaamiseksi.
  - **transition:** background-color 0.3s ease, transform 0.2s ease;: Lisää sujuvat siirtymät taustavärimuutoksille ja skaalaamiselle hover-tilassa parantaen interaktiivisuutta.
- **Tarkoitus:** Nämä tyylit tekevät painikkeesta visuaalisesti houkuttelevan, interaktiivisen ja yhtenäisen muun suunnittelun kanssa.

## 7. Light Mode -painikkeen tyylitys (.light-mode button)

- **Mikä se on:** Määrittää painikkeen ulkoasun vaaleassa tilassa.
- **Tärkeät ominaisuudet:**
  - **background-color:** #007bff;: Asettaa kirkkaan sinisen taustavärin painikkeelle vaaleassa tilassa.
  - **color:** #fff;: Varmistaa, että painikkeen teksti on valkoinen, tarjoten kontrastin sinistä taustaa vasten.
- **Tarkoitus:** Tämä tekee painikkeesta erottuvan vaaleassa tilassa ja rohkaisee käyttäjiä vuorovaikutukseen.

## 8. Dark Mode -painikkeen tyylitys (.dark-mode button)

- **Mikä se on:** Määrittää painikkeen ulkoasun tummassa tilassa.
- **Tärkeät ominaisuudet:**
  - **background-color:** #555;: Asettaa hillityn harmaan taustavärin painikkeelle tummassa tilassa.
  - **color:** #fff;: Varmistaa, että teksti pysyy luettavana valkoisella tekstillä tummalla painikkeella.
- **Tarkoitus:** Tumman tilan painike on tyylitelty sopimaan yleiseen teemaan, säilyttäen yhtenäisen ulkoasun koko käyttöliittymässä.

## 9. Hover-efekti (button:hover)

- **Mikä se on:** Määrittää, miten painike käyttäytyy hover-tilassa.
- **Tärkeät ominaisuudet:**
  - **background-color:** #0056b3 (light mode) ja #333 (dark mode): Muuttaa painikkeen taustaväriä tummemmaksi hover-tilassa, tarjoten palautetta käyttäjälle.
  - **transform:** scale(1.05);: Suurentaa painikkeen kokoa hieman hover-tilassa, luoden hienovaraisen zoomaustehon interaktiivisuuden osoittamiseksi.
- **Tarkoitus:** Hover-efekti tarjoaa visuaalista palautetta, kun käyttäjä vuorovaikuttaa painikkeen kanssa, tehden käyttöliittymästä responsiivisemman ja dynaamisemman.

# **JavaScript Selitys**

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...});)

- **Mikä se on:** Tämä on tapahtumankuuntelija, joka odottaa koko HTML-dokumentin latautumista ja jäsentämistä ennen kuin callback-funktion sisällä oleva JavaScript suoritetaan.
- **Tarkoitus:** Se varmistaa, että kaikki DOM-elementit, kuten painike ja body, ovat saatavilla ja valmiita käsiteltäviksi JavaScriptillä, kun sivu on täysin latautunut.
- **Tärkeä yksityiskohta:** Ilman tätä tapahtumankuuntelijaa skripti voisi yrittää käsitellä elementtejä, joita ei ole vielä renderöity, mikä johtaisi virheisiin.

## 2. DOM-elementtien valinta (const body = document.body; const toggleButton = document.getElementById('toggle-button');)

- **Mikä se on:** Nämä rivit valitsevat kaksi tärkeää elementtiä:
  - **body:** Viittaa sivun <code><</code>body-elementtiin, jonka luokkaa vaihdetaan valotilan ja tumman tilan välillä.
  - **toggleButton:** Viittaa painikkeeseen, jonka id="toggle-button", ja joka vastaa tilanvaihdon käynnistämisestä, kun sitä klikataan.
- **Tarkoitus:** Nämä valinnat mahdollistavat skriptin pääsyn body-elementin luokkaan ja painikkeen tekstisisällön käsittelyn.
- **Tärkeä yksityiskohta:** Elementtien valinta id:n perusteella **getElementById()** tarjoaa nopean ja tehokkaan tavan kohdistaa tiettyjä DOM-elementtejä vuorovaikutusta varten.

## 3. Tapahtumankuuntelija painikkeen klikkaukselle (toggleButton.addEventListener('click', () => {...});)

- **Mikä se on:** Tämä rivi lisää painikkeeseen klikkaustapahtuman kuuntelijan. Kun painiketta klikataan, callback-funktion sisällä oleva koodi suoritetaan.
- **Tarkoitus:** Se mahdollistaa käyttäjän vuorovaikutuksen vaihtamalla valon ja tumman tilan välillä klikkaamalla painiketta, tarjoten interaktiivisen kokemuksen.
- **Tärkeä yksityiskohta:** Tapahtumankuuntelija havaitsee käyttäjän vuorovaikutuksen painikkeen kanssa, mikä tekee sovelluksesta dynaamisen ja responsiivisen käyttäjän syötteille.

## 4. Vaihtaminen valotilan ja tumman tilan välillä (body.classList.toggle('dark-mode'); body.classList.toggle('light-mode');)

- **Mikä se on:** Tämä osa koodista vaihtaa kahden CSS-luokan, **light-mode** ja **dark-mode**, välillä body-elementissä.
- **Tarkoitus:** Se muuttaa verkkosivun ulkoasua vaihtamalla kahden tilan välillä. Jos sivu on valotilassa, klikkaamalla painiketta se siirtyy tummaan tilaan, ja päinvastoin.
- **Tärkeä yksityiskohta:** **classList.toggle()**-metodi lisää määritetyn luokan, jos se ei ole jo olemassa, ja poistaa sen, jos se on, mahdollistaen sujuvan siirtymisen tilojen välillä.

## 5. Päivitetään painikkeen teksti (if (body.classList.contains('dark-mode')) {...} else {...})

- **Mikä se on:** Tämä ehdollinen lause tarkistaa, sisältääkö body-luokan **dark-mode**.
- **Tarkoitus:** Se muuttaa dynaamisesti painikkeen tekstin tilan mukaan:
  - Jos body sisältää **dark-mode**-luokan, painikkeen tekstiksi asetetaan "Switch to Light Mode".
  - Muussa tapauksessa painikkeen tekstinä on "Switch to Dark Mode".
- **Tärkeä yksityiskohta:** Tämä varmistaa, että käyttäjä tietää aina, mikä tila on aktiivinen, ja voi helposti vaihtaa toiseen tilaan painamalla painiketta.

## 6. Tekstin vaihtaminen painikkeessa (toggleButton.textContent = 'Switch to Light Mode'; or toggleButton.textContent = 'Switch to Dark Mode';)

- **Mikä se on:** Nämä rivit päivittävät painikkeen tekstisisällön tilasta riippuen.
- **Tarkoitus:** Se kertoo käyttäjälle, missä tilassa sivu tällä hetkellä on, ja tarjoaa mahdollisuuden vaihtaa vastakkaiseen tilaan klikkaamalla painiketta.
- **Tärkeä yksityiskohta:** **textContent**-ominaisuuden käyttö varmistaa, että painikkeen teksti päivittyy reaaliajassa, tarjoten selkeää palautetta käyttäjälle.
