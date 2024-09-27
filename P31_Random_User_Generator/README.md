# Nettisivu: https://keudaope.github.io/JSProjekteja/P31_Random_User_Generator

# **Johdanto**

Random User Generator on hyödyllinen sovellus, joka luo satunnaisia käyttäjäprofiileja API:n avulla. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla, kun he oppivat käsittelemään API-pyyntöjä, prosessoimaan JSON-dataa ja päivittämään DOMia dynaamisesti. Käyttäjät voivat klikata painiketta luodakseen ja näyttääkseen satunnaisen käyttäjäprofiilin.

# **HTML Selitys**

## 1. DOCTYPE-ilmoitus (<code><</code>!DOCTYPE html>)

- **Mikä se on:** <code><</code>!DOCTYPE html -ilmoitus määrittää, että dokumentti on kirjoitettu HTML5:llä.
- **Tarkoitus:** Se varmistaa, että verkkosivua tulkitaan nykyaikaisten HTML5-standardien mukaisesti kaikissa selaimissa, estäen ongelmat vanhojen renderöintitilojen kanssa.
- **Tärkeä yksityiskohta:** DOCTYPE-ilmoitus tulee aina sisällyttää, jotta verkkosivut renderöidään yhtenäisesti kaikissa selaimissa.

## 2. HTML-tagi (<code><</code>html lang="en">)

- **Mikä se on:** <code><</code>html -tagi on juurielementti, joka käärii kaikki muut HTML-elementit sivulla. lang="en" -attribuutti määrittää dokumentin kieleksi englannin.
- **Tarkoitus:** Lang-attribuutti on tärkeä saavutettavuustyökaluille ja hakukoneille, koska se ilmoittaa dokumentin ensisijaisen kielen.
- **Tärkeä yksityiskohta:** Kielen määrittäminen parantaa hakukoneoptimointia (SEO) ja saavutettavuutta, tehden sisällön helpommaksi sekä hakukoneille että avustaville teknologioille.

## 3. Head-tagi (<code><</code>head>)

- **Mikä se on:** <code><</code>head -osio sisältää metatietoja ja linkkejä ulkoisiin resursseihin, kuten tyylitiedostoihin ja fontteihin.
- **Tarkoitus:** <code><</code>head -tagi sallii selaimen ladata tietoja, jotka ovat tarpeen sivun renderöintiä varten, kuten CSS, fontit ja metatiedot.
- **Tärkeät yksityiskohdat:**
  - **Meta Charset (<code><</code>meta charset="UTF-8">):** Määrittää merkistöksi UTF-8, tukien laajaa valikoimaa merkkejä ja symboleita, varmistaen tekstin oikean näyttämisen.
  - **Viewport Meta Tag (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">):** Varmistaa, että sivu on responsiivinen skaalautuen eri näytönkokoihin, erityisesti mobiililaitteisiin.
  - **Otsikkotagi (<code><</code>title>Random User Generator<code><</code>/title>):** Asettaa tekstin, joka näytetään selaimen välilehdessä, viitaten sivun sisältöön.
  - **Google Fonts -linkki (<code><</code>link href="[https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap](https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap)" rel="stylesheet">):** Lataa "Roboto"-fontin Google Fontsista, antaen sovellukselle modernin ja puhtaan ilmeen, joka parantaa luettavuutta.
  - **CSS-linkki (<code><</code>link rel="stylesheet" href="styles.css">):** Linkittää ulkoiseen CSS-tiedostoon, joka sisältää sovelluksessa käytetyt tyylit visuaalisen ilmeen parantamiseksi.

## 4. Body-tagi (<code><</code>body>)

- **Mikä se on:** <code><</code>body -tagi sisältää kaiken näkyvän sisällön verkkosivulla, kuten otsikon, käyttäjäprofiilin ja painikkeen.
- **Tarkoitus:** <code><</code>body on alue, johon kaikki käyttäjälle näkyvä sisältö sijoitetaan. Se tyylitellään CSS:n avulla ja sitä käsitellään JavaScriptillä responsiivisen ja interaktiivisen käyttökokemuksen luomiseksi.
- **Tärkeä yksityiskohta:** Kaikki dynaaminen ja interaktiivinen sisältö sijoitetaan <code><</code>body-tagin sisään, tehden siitä pääalueen, jossa käyttäjä vuorovaikuttaa sisällön kanssa.

## 5. Container-divi (<code><</code>div class="container">)

- **Mikä se on:** <code><</code>div -elementti, jossa on container-luokka, käärii pääsisällön, mukaan lukien profiilinäytön ja painikkeen.
- **Tarkoitus:** Se ryhmittelee yhteen liittyvät elementit, mahdollistaen keskitetyn tyylittelyn ja asettelun hallinnan. Container varmistaa, että sisältö näkyy korttimaisessa rakenteessa, erottuen visuaalisesti muusta sivusta.
- **Tärkeä yksityiskohta:** Container-luokka on keskeinen CSS-ominaisuuksien, kuten taustan, täytteen ja varjon, soveltamisessa, antaen sovellukselle siistin ja modernin ulkoasun.

## 6. Profiiliosio (<code><</code>div class="profile" id="profile">)

- **Mikä se on:** <code><</code>div -elementti, jossa on profile-luokka, sisältää käyttäjän profiilikuvan, nimen, sähköpostin ja sijainnin. Jokainen näistä näytetään erillisissä elementeissä.
- **Tarkoitus:** Tämä osio järjestää kaikki API:sta haetut käyttäjätiedot yhtenäiseksi ja selkeästi muotoilluksi kokonaisuudeksi.
- **Tärkeä yksityiskohta:** Profiilin luokka mahdollistaa profiilin tyylin keskitetyn hallinnan, kun taas yksilöllinen id="profile" auttaa JavaScriptiä kohdistamaan tämän osion helposti.

## 7. Kuvan tagi profiilikuvaa varten (<code><</code>img id="profile-picture" src="" alt="Profile Picture" width="120" height="120">)

- **Mikä se on:** <code><</code>img -tagia käytetään näyttämään käyttäjän profiilikuva. Src="" -attribuutti on aluksi tyhjä, mutta se päivitetään profiilikuvan URL:n, kun tiedot on haettu.
- **Tarkoitus:** Se tarjoaa visuaalisen esityksen API:sta haetusta käyttäjästä. Alt-attribuutti kuvailee kuvaa saavutettavuustarkoituksiin, varmistaen, että ruudunlukijat voivat selostaa sen.
- **Tärkeä yksityiskohta:** Id="profile-picture" auttaa JavaScriptiä kohdistamaan kuvan elementin ja päivittämään sen src-dynamiikkaa.

## 8. Käyttäjätietojen kappaletagit (<code><</code>p id="name" class="info"></p>, jne.)

- **Mikä se on:** <code><</code>p -tageja käytetään näyttämään käyttäjän nimi, sähköposti ja sijainti. Aluksi ne ovat tyhjiä, mutta niiden sisältö päivitetään, kun tiedot on haettu.
- **Tarkoitus:** Nämä elementit toimivat paikkamerkkeinä käyttäjätiedoille ja päivitetään dynaamisesti API:sta saadulla tiedolla.
- **Tärkeät yksityiskohdat:**
  - Jokaiselle kappale-elementille annetaan id (id="name", id="email", id="location"), jotta JavaScript voi päivittää niiden sisällön.
  - Luokka "info" tarjoaa yhtenäisen tyylin kaikille teksteille.

## 9. Painike-elementti (<code><</code>button id="generate-button">Generate User<code><</code>/button>)

- **Mikä se on:** <code><</code>button -elementti käynnistää uuden satunnaisen käyttäjän luomisen, kun käyttäjä klikkaa sitä.
- **Tarkoitus:** Se tarjoaa sovelluksen ensisijaisen vuorovaikutusmekanismin. Kun painiketta klikataan, JavaScript hakee uudet käyttäjätiedot API:sta ja päivittää näytetyt tiedot.
- **Tärkeä yksityiskohta:** Id="generate-button" mahdollistaa sen, että JavaScript voi liittää tapahtumankuuntelijan painikkeeseen, yhdistäen sen funktioon, joka hakee ja näyttää uudet käyttäjätiedot.

## 10. Script-tagi (<code><</code>script src="app.js"><code><</code>/script>)

- **Mikä se on:** <code><</code>script -tagi linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää logiikan käyttäjätietojen hakemiseen ja profiiliosion päivittämiseen.
- **Tarkoitus:** Se erottaa JavaScript-logiikan rakenteesta (HTML) ja tyylittelystä (CSS), noudattaen parhaita käytäntöjä modulaariseen kehitykseen.

# **CSS Selitys**

## 1. Global Reset (\*)

- **Mikä se on:** Universaali valitsin \* soveltaa tyylejä kaikille sivun elementeille.
- **Tarkoitus:** Se nollaa selainten oletustyylit, kuten marginaalit ja täytteet, varmistaen yhtenäisen lähtökohdan kaikille elementeille. Box-sizing: border-box; varmistaa, että täyte ja reunukset sisällytetään elementtien leveyteen ja korkeuteen, helpottaen asettelulaskelmia.
- **Tärkeä yksityiskohta:** Tämä nollaus poistaa erot siinä, kuinka elementit renderöidään eri selaimissa, estäen odottamattomat tilan- tai asetteluongelmat.

## 2. Body-tyylitys (body)

- **Mikä se on:** Body-sääntö määrittää koko sivun ulkoasun ja asettelun.
- **Tärkeät ominaisuudet:**
  - **font-family:** 'Roboto', sans-serif;: Käyttää Google Fontsista ladattua "Roboto"-fonttia, mikä antaa modernin ja puhtaan ulkoasun, parantaen luettavuutta.
  - **background:** linear-gradient(135deg, #74ebd5, #acb6e5);: Lisää diagonaalisen gradienttitaustan, joka siirtyy turkoosista vaaleansiniseen, luoden visuaalisesti houkuttelevan ilmeen.
  - **display:** flex; justify-content: center; align-items: center;: Keskittää sisällön sekä vaakasuunnassa että pystysuunnassa näkymän keskelle, varmistaen, että sovellus on sijoitettu ruudun keskelle.
  - **height:** 100vh;: Varmistaa, että sisältö vie koko näkymän korkeuden, mahdollistaen pystysuuntaisen keskityksen.
  - **margin:** 0;: Poistaa oletusmarginaalit, varmistaen, että sovellus istuu siististi näkymässä.
- **Tarkoitus:** Nämä tyylit varmistavat, että koko sovellus on keskitetty sivulle visuaalisesti miellyttävällä taustalla ja modernilla fontilla.

## 3. Container-tyylitys (.container)

- **Mikä se on:** .Container-luokka tyylittää pääsäiliön, joka sisältää käyttäjäprofiilin ja painikkeen.
- **Tärkeät ominaisuudet:**
  - **background-color:** #fff;: Asettaa valkoisen taustan säiliölle, tarjoten siistin ja kontrastin taustaa vasten.
  - **padding:** 40px 30px;: Lisää runsaasti tilaa säiliön sisälle, varmistaen, että sisältö ei ole ahdasta ja siinä on riittävästi tilaa hengittää.
  - **border-radius:** 15px;: Pyöristää säiliön kulmat, antaen sille pehmeän ja modernin ilmeen.
  - **box-shadow:** 0 15px 30px rgba(0, 0, 0, 0.1);: Lisää hienovaraisen varjon säiliön alapuolelle, luoden syvyyden tunnetta ja nostaen säiliön taustasta.
  - **max-width:** 350px; width: 100%;: Rajoittaa säiliön enimmäisleveyden 350 pikseliin, varmistaen, ettei siitä tule liian leveä, mutta samalla sen mahdollistaa responsiivisuuden.
  - **transition:** transform 0.3s ease;: Lisää sujuvan siirtymäefektin, kun säiliöä muutetaan (esim. hover-tilassa).
- **Tarkoitus:** Nämä tyylit luovat korttimaisen rakenteen, joka visuaalisesti erottaa sisällön muusta sivusta ja tarjoaa modernin ja hyvin jäsennellyn asettelun.

## 4. Hover-efekti säiliössä (.container:hover)

- **Mikä se on:** sovelletaan, kun käyttäjä vie hiiren .container-elementin päälle.
- **Tärkeä ominaisuus:**
  - **transform:** scale(1.05);: Suurentaa hieman säiliötä hover-tilassa, luoden hienovaraisen zoom-efektin huomion kiinnittämiseksi.
- **Tarkoitus:** Tämä hover-efekti lisää interaktiivisuutta ja reagointikykyä, parantaen käyttäjäkokemusta tekemällä sovelluksesta dynaamisemman.

## 5. Otsikon tyylitys (h1)

- **Mikä se on:** H1-sääntö tyylittää sovelluksen pääotsikon.
- **Tärkeät ominaisuudet:**
  - **font-size:** 2.2em;: Tekee otsikosta suuren ja näkyvän, varmistaen, että se kiinnittää huomion sovelluksen otsikkona.
  - **color:** #333;: Käyttää tummaa väriä tekstille, tarjoten vahvan kontrastin valkoista säiliötaustaa vasten paremman luettavuuden saavuttamiseksi.
  - **margin-bottom:** 20px;: Lisää väliä otsikon alle, erottaen sen sitä seuraavasta sisällöstä.
- **Tarkoitus:** Suuri fonttikoko ja tumma väri saavat otsikon erottumaan, varmistaen, että käyttäjät huomaavat sen heti.

## 6. Profiiliosion tyylitys (.profile)

- **Mikä se on:** .Profile-luokka tyylittää osion, joka sisältää käyttäjän profiilitiedot (kuvan, nimen, sähköpostin, sijainnin).
- **Tärkeä ominaisuus:**
  - **margin-bottom:** 20px;: Lisää väliä profiiliosion ja painikkeen väliin, estäen niitä näkymästä liian lähekkäin.
- **Tarkoitus:** Tämä marginaali varmistaa, että profiiliosio ja painike ovat visuaalisesti erilliset ja hyvin jäsennellyt.

## 7. Profiilikuvan tyylitys (.profile img)

- **Mikä se on:** .Profile img -sääntö tyylittää käyttäjän profiilikuvan.
- **Tärkeät ominaisuudet:**
  - **border-radius:** 50%;: Pyöristää kuvan täydelliseksi ympyräksi, tehden siitä siistimmän ja visuaalisesti miellyttävämmän.
  - **margin-bottom:** 15px;: Lisää väliä kuvan alle, varmistaen, että se on erillään käyttäjän nimestä.
  - **border:** 4px solid #007bff;: Lisää sinisen reunuksen profiilikuvan ympärille, antaen sille selkeämmän ja korostetun ilmeen.
- **Tarkoitus:** Nämä tyylit parantavat käyttäjän profiilikuvan ulkoasua, tehden siitä keskeisen elementin ympyrämuodon ja rohkean reunuksen avulla.

## 8. Tekstitietojen tyylitys (.info)

- **Mikä se on:** .Info-luokka tyylittää käyttäjän nimen, sähköpostin ja sijainnin tekstin.
- **Tärkeät ominaisuudet:**
  - **font-size:** 1.1em;: Lisää hieman tekstin kokoa, tehden siitä luettavamman ja selkeämmän.
  - **color:** #555;: Käyttää pehmeää harmaata väriä tekstille, tarjoten hyvän kontrastin valkoista taustaa vasten, mutta säilyttäen silmille miellyttävän ilmeen.
  - **margin:** 5px 0;: Lisää pienen marginaalin jokaisen teksti-elementin väliin, varmistaen, että ne ovat selkeästi eroteltuja ja helppolukuisia.
- **Tarkoitus:** Nämä tyylit parantavat teksti-elementtien luettavuutta, varmistaen, että käyttäjätiedot ovat helppoja lukea ja visuaalisesti houkuttelevia.

## 9. Painikkeen tyylitys (button)

- **Mikä se on:** Button-sääntö tyylittää "Generate User" -painikkeen.
- **Tärkeät ominaisuudet:**
  - **background-color:** #007bff;: Antaa painikkeelle kirkkaan sinisen taustan, tehden siitä näkyvän ensisijaisena toimintakehotuksena.
  - **color:** white;: Varmistaa, että painikkeen teksti erottuu selkeästi sinistä taustaa vasten.
  - **padding:** 12px 30px;: Tarjoaa riittävästi täytettä painikkeen sisälle, tehden siitä suuren ja klikattavan, parantaen käytettävyyttä.
  - **border-radius:** 8px;: Lisää pyöristetyt kulmat painikkeelle, tehden siitä pehmeän ja modernin näköisen.
  - **cursor:** pointer;: Muuttaa kursorin osoittimeksi hover-tilassa, osoittaen, että painiketta voi klikata.
  - **transition:** background-color 0.3s ease, transform 0.2s ease;: Lisää sujuvat siirtymät väreihin ja pieneen liikkeeseen hover-tilassa.
- **Tarkoitus:** Nämä tyylit tekevät painikkeesta visuaalisesti erottuvan ja helppokäyttöisen, rohkaisten käyttäjiä klikkaamaan sitä uuden satunnaisen käyttäjän luomiseksi.

## 10. Painikkeen hover-efekti (button:hover)

- **Mikä se on:** sovelletaan, kun käyttäjä vie hiiren painikkeen päälle.
- **Tärkeät ominaisuudet:**
  - **background-color:** #0056b3;: Tummentaa sinistä taustaa hover-tilassa, tarjoten selkeän visuaalisen vihjeen siitä, että painike on vuorovaikutteinen.
  - **transform:** translateY(-2px);: Nostaa painiketta hieman ylöspäin, luoden hienovaraisen 3D-efektin, joka tekee siitä interaktiivisemman tuntuisen.
- **Tarkoitus:** Hover-efekti tarjoaa välittömän visuaalisen palautteen käyttäjälle, parantaen sovelluksen interaktiivisuutta ja tehden painikkeesta houkuttelevamman.

# **JavaScript Selitys**

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...});)

- **Mikä se on:** Tämä on tapahtumankuuntelija, joka odottaa, että koko HTML-dokumentti on täysin ladattu ennen kuin se suorittaa callback-funktion sisällä olevan koodin.
- **Tarkoitus:** Se varmistaa, että JavaScript käsittelee DOM-elementtejä vasta, kun ne ovat täysin ladattu ja jäsennelty. Ilman tätä skripti saattaa yrittää muokata elementtejä, jotka eivät vielä ole käytettävissä, mikä voi johtaa virheisiin.
- **Tärkeä yksityiskohta:** DOMContentLoaded-tapahtuman käyttäminen takaa, että sovellus alkaa toimia vasta, kun kaikki HTML-elementit (kuten profiilikuva, nimi ja painike) ovat käytettävissä ja JavaScript voi muokata niitä.

## 2. DOM-elementtien valitseminen (const profilePicture = document.getElementById('profile-picture');)

- **Mikä se on:** Nämä rivit valitsevat tietyt HTML-elementit niiden id-attribuutin perusteella käyttäen document.getElementById().
  - **profilePicture:** Viittaa <code><</code>img -elementtiin, jossa näytetään käyttäjän profiilikuva.
  - **nameElement:** Viittaa <code><</code>p -elementtiin, joka näyttää käyttäjän nimen.
  - **emailElement:** Viittaa <code><</code>p -elementtiin, joka näyttää käyttäjän sähköpostin.
  - **locationElement:** Viittaa <code><</code>p -elementtiin, joka näyttää käyttäjän sijainnin.
  - **generateButton:** Viittaa <code><</code>button -elementtiin, joka käynnistää käyttäjän luomisprosessin.
- **Tarkoitus:** Nämä viittaukset mahdollistavat JavaScriptin päivittää näiden elementtien sisältöä dynaamisesti muuttamalla niiden ominaisuuksia tai tekstiä.
- **Tärkeä yksityiskohta:** Jokainen elementti on yksilöity sen id:llä, jotta siihen päästään käsiksi ja sitä voidaan muokata helposti skriptissä.

## 3. Tapahtumankuuntelija painikkeelle (generateButton.addEventListener('click', generateUser);)

- **Mikä se on:** Tämä rivi liittää tapahtumankuuntelijan generateButton-painikkeeseen, joka kuuntelee click-tapahtumaa ja käynnistää generateUser-funktion, kun painiketta painetaan.
- **Tarkoitus:** Tämä tekee painikkeesta interaktiivisen. Kun käyttäjä painaa sitä, API:sta haetaan uusi satunnainen käyttäjä ja profiilitiedot päivitetään.
- **Tärkeä yksityiskohta:** addEventListenerin käyttö mahdollistaa sen, että skripti käsittelee käyttäjän vuorovaikutusta ei-estävällä tavalla, varmistaen, että sovellus pysyy reagoivana.

## 4. Generate User -funktio (function generateUser() {...})

- **Mikä se on:** GenerateUser-funktio vastaa satunnaisten käyttäjätietojen hakemisesta Random User API:sta ja profiiliosion päivittämisestä haetuilla tiedoilla.
- **Vaiheet:**
  - **Fetch API -kutsu:** (fetch('[https://randomuser.me/api/](https://randomuser.me/api/)')): Lähettää HTTP GET -pyynnön Random User API:lle uuden satunnaisen käyttäjän hakemiseksi.
  - **Vastauksen käsittely:** (.then(response => response.json())): Kun API palauttaa vastauksen, .then()-metodi käsittelee vastauksen muuntamalla sen JavaScript-objektiksi käyttämällä .json()-metodia.
  - **Käyttäjätietojen haku:** (const user = data.results[0];): Hakee käyttäjätiedot API-vastauksesta. Results[0] edustaa ensimmäistä (ja ainoaa) käyttäjää palautetussa datassa.
  - **Profiilitietojen päivittäminen:** Skripti päivittää dynaamisesti profiilikuvan, nimen, sähköpostin ja sijainnin DOM:iin käyttäen API:sta haettuja tietoja.
    - **Profiilikuva:** (profilePicture.src = user.picture.large;): Päivittää <code><</code>img -elementin src-attribuutin näyttämään haetun profiilikuvan.
    - **Nimi:** (nameElement.textContent = `${user.name.first} ${user.name.last}`;): Päivittää <code><</code>p -elementin näyttämään käyttäjän etu- ja sukunimen.
    - **Sähköposti:** (emailElement.textContent = user.email;): Päivittää <code><</code>p -elementin näyttämään käyttäjän sähköpostin.
    - **Sijainti:** (locationElement.textContent = `${user.location.city}, ${user.location.country}`;): Päivittää <code><</code>p -elementin näyttämään käyttäjän kaupungin ja maan.
- **Tarkoitus:** Tämä funktio hoitaa sovelluksen ydinominaisuuden: se hakee uuden satunnaisen käyttäjän ja päivittää näyttöön hänen tietonsa.
- **Tärkeä yksityiskohta:** Fetch API tekee sovelluksesta dynaamisen hakemalla uutta tietoa aina, kun käyttäjä painaa painiketta, luoden interaktiivisen kokemuksen.

## 5. Virheenkäsittely (.catch(error => {...}))

- **Mikä se on:** .Catch()-metodia käytetään käsittelemään virheitä, joita voi tapahtua API-pyynnön aikana (esim. verkko-ongelmat tai palvelinvirheet).
- **Vaiheet:**
  - Jos virhe tapahtuu fetch-pyynnön aikana (esim. palvelin ei vastaa), .catch()-metodi kirjaa virheen konsoliin (console.error('Error fetching user data:', error);).
  - Sovellus jatkaa toimintaansa, vaikka virhe tapahtuu, estäen sitä kaatumasta.
- **Tarkoitus:** Tämä varmistaa, että sovellus voi käsitellä virheitä sujuvasti ja ilmoittaa kehittäjälle, jos jokin menee pieleen, ilman että toiminnallisuus kärsii.
- **Tärkeä yksityiskohta:** Virheenkäsittely on tärkeää verkkosovelluksissa, jotka tekevät ulkoisia API-pyyntöjä, koska se auttaa varmistamaan luotettavuuden ja hyvän käyttäjäkokemuksen.

## 6. Automaattinen alkuperäisen käyttäjän luominen (generateUser();)

- **Mikä se on:** Tämä rivi kutsuu generateUser()-funktion heti sivun latauksen jälkeen, varmistaen, että käyttäjäprofiili näytetään oletuksena, kun sovellus avataan ensimmäistä kertaa.
- **Tarkoitus:** Ilman tätä riviä profiiliosio jäisi tyhjäksi, kunnes käyttäjä klikkaa painiketta. Kutsumalla funktio sivun latauksen yhteydessä sovellus tarjoaa sisältöä heti, parantaen käyttäjäkokemusta.
- **Tärkeä yksityiskohta:** Automaattisesti luomalla alkuperäinen käyttäjä vältetään tyhjä tai keskeneräinen käyttöliittymä sovelluksen ensimmäisessä latauksessa.
