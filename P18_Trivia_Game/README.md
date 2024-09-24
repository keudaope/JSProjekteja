# Nettisivu: https://keudaope.github.io/JSProjekteja/P18_Trivia_Game

# Johdanto

Trivia-peli on interaktiivinen sovellus, jossa käyttäjät voivat vastata tietokilpailukysymyksiin ja ansaita pisteitä. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptin, HTML:n ja CSS:n käyttöä samalla oppien käsittelemään API-pyyntöjä, hallitsemaan pelilogiikkaa ja päivittämään DOMia dynaamisesti. Käyttäjät voivat valita vastauksia, nähdä ovatko ne oikein, ja seurata pisteitään.

# HTML Selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on:** <!DOCTYPE html> -määrittely kertoo selaimelle, että dokumentti noudattaa HTML5-standardeja.
- **Tarkoitus:** Se varmistaa, että selain tulkitsee dokumentin HTML5-standardien mukaisesti, mikä mahdollistaa modernien verkkotoimintojen ja paremman yhteensopivuuden eri selainten välillä.
- **Tärkeä yksityiskohta:** Muista aina lisätä DOCTYPE, jotta vältetään mahdolliset renderöintiongelmat ja varmistetaan, että modernit ominaisuudet toimivat odotetusti.

## 2. HTML Tag (<code><</code>html lang="en"<code>></code>):

- **Mikä se on:** <code><</code>html<code>></code>-tagi on juurielementti, joka ympäröi koko verkkosivun sisällön. lang="en" määrittää sivun sisällön kieleksi englannin.
- **Tarkoitus:** lang-attribuutti auttaa hakukoneita ja ruudunlukijoita tunnistamaan sivun sisällön kielen, mikä parantaa saavutettavuutta ja SEO:a.
- **Tärkeä yksityiskohta:** Aina kannattaa määrittää kieli juuritasolla, jotta parannetaan sivun käytettävyyttä apuvälineillä ja hakukoneoptimointia.

## 3. Head Tag (<code><</code>head<code>></code>):

- **Mikä se on:** <code><</code>head<code>></code>-tagi sisältää metatiedot ja linkit ulkoisiin resursseihin, kuten CSS-tyylitiedostoihin ja fontteihin.
- **Tarkoitus:** Head-osio hallitsee sivun metatietoja, mukaan lukien linkit ulkoiseen CSS-tiedostoon (styles.css) ja Google-fontteihin. Se myös määrittää dokumentin otsikon, joka näkyy selainvälilehdessä.
- **Tärkeät yksityiskohdat:**
  - **Meta Charset Tag (<code><</code>meta charset="UTF-8"<code>></code>):** Määrittää, että sivu käyttää UTF-8-merkkikoodausta, mikä mahdollistaa laajan valikoiman merkkien näyttämisen oikein.
  - **Viewport Meta Tag (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0"<code>></code>):** Varmistaa, että verkkosivu on responsiivinen skaalautumalla laitteen näytön koon mukaan.
  - **Google Fonts Link:** Lataa "Roboto"-fontin Google Fontsista, mikä antaa sivulle modernin typografian.
  - **Title Tag (<code><</code>title<code>></code>):** Määrittää sivun otsikon, joka näkyy selaimen välilehdessä ja kuvaa sovelluksen tarkoitusta.

## 4. Body Tag (<code><</code>body<code>></code>):

- **Mikä se on:** <code><</code>body<code>></code>-tagi sisältää kaiken verkkosivun näkyvän sisällön, mukaan lukien triviasovelluksen, kysymykset, vastaukset, palautteen ja pisteet.
- **Tarkoitus:** Body on pääsäilö kaikille triviasovelluksen interaktiivisille elementeille. Se sisältää HTML-elementit, joita JavaScript päivittää dynaamisesti (esim. kysymykset, vastaukset, palaute).
- **Tärkeä yksityiskohta:** Kaikki interaktiiviset elementit ja dynaaminen sisältö näkyvät <code><</code>body<code>></code>-tagin sisällä. Näiden elementtien asettelu ja tyylit hallitaan CSS:ssä, ja niiden käyttäytyminen JavaScriptillä.

## 5. Container Div (<code><</code>div class="container"<code>></code>):

- **Mikä se on:** <code><</code>div<code>></code>-elementti, jolla on luokka "container", ympäröi koko triviasovelluksen, mukaan lukien otsikon, kysymyksen, vastaukset ja palautteet.
- **Tarkoitus:** Säiliö ryhmittelee kaiken triviasovelluksen sisällön yhdeksi rakenteelliseksi lohkoksi. Se mahdollistaa helpon tyylien ja asettelun hallinnan CSS:n avulla ja antaa sovellukselle korttimaisen ulkonäön.
- **Tärkeä yksityiskohta:** Container-luokka helpottaa keskitettyjen tyylien, kuten taustavärin, täyttöjen ja pyöristettyjen kulmien, soveltamista kaikkiin divin sisällä oleviin elementteihin.

## 6. Heading (<code><</code>h1<code>></code>Trivia Game<code><</code>/h1<code>></code>):

- **Mikä se on:** <code><</code>h1<code>></code>-elementti edustaa triviasovelluksen pääotsikkoa "Trivia Game".
- **Tarkoitus:** Otsikko antaa sovellukselle selkeän nimen ja auttaa käyttäjiä ymmärtämään sivun tarkoituksen välittömästi. Lisäksi <code><</code>h1<code>></code>-tagi on tärkeä SEO

  ja saavutettavuuden kannalta, sillä se määrittää sivun pääsisällön ja aiheen.

- **Tärkeä yksityiskohta:** Otsikko on visuaalisesti korostettu ja ensimmäinen elementti, johon käyttäjät kiinnittävät huomiota sivun ladatessa.

## 7. Question Display Div (<code><</code>div class="question" id="question" aria-live="polite"<code>></code>):

- **Mikä se on:** Tämä <code><</code>div<code>></code> näyttää trivian kysymyksen käyttäjälle ja sillä on id="question", jotta se voidaan päivittää dynaamisesti JavaScriptillä.
- **Tarkoitus:** Kysymys-div toimii paikkana trivian kysymykselle, joka haetaan API:sta . aria-live="polite"-attribuuttia käytetään ilmoittamaan ruudunlukijoille sisällön muutoksista keskeyttämättä käyttäjän toimintaa, mikä parantaa saavutettavuutta.
- **Tärkeä yksityiskohta:** id="question" antaa JavaScriptin helposti lisätä trivia-kysymyksen tähän diviin, kun taas aria-live parantaa saavutettavuutta ruudunlukijoiden avulla.

## 8. Answers Container Div (<code><</code>div class="answers" id="answers"<code>></code>):

- **Mikä se on:** <code><</code>div<code>></code>-elementti, jolla on luokka "answers", sisältää kysymykseen liittyvät vastausvaihtoehdot painikkeina. Siinä on id="answers", jotta JavaScript voi dynaamisesti lisätä vastausvaihtoehdot.
- **Tarkoitus:** Tämä div toimii säiliönä monivalintavastauksille. Jokainen vastaus esitetään painikkeena, ja vastausvaihtoehdot generoidaan dynaamisesti trivia-API:sta haettujen tietojen perusteella.
- **Tärkeä yksityiskohta:** id="answers" mahdollistaa JavaScriptin dynaamisen vastauspainikkeiden luomisen ja lisäämisen. Vastausvaihtoehdot sekoitetaan, jotta jokaisessa kysymyksessä on satunnaisuus.

## 9. Feedback Div (<code><</code>div class="feedback" id="feedback"<code>></code>):

- **Mikä se on:** Tämä <code><</code>div<code>></code> näyttää palautteen käyttäjälle sen jälkeen, kun hän on valinnut vastauksen. Palautteessa kerrotaan, oliko vastaus oikein vai väärin.
- **Tarkoitus:** Feedback-div tarjoaa käyttäjälle reaaliaikaista palautetta, jossa näkyy vihreä ✔-merkki, jos vastaus on oikein, ja punainen ✘-merkki, jos vastaus on väärin. Tämä välitön visuaalinen palaute parantaa käyttökokemusta.
- **Tärkeä yksityiskohta:** id="feedback" mahdollistaa JavaScriptin kohdistamisen tähän diviin palautteen näyttämiseksi käyttäjän valinnan perusteella.

## 10. Score Display Div (<code><</code>div class="stats"<code>></code>):

- **Mikä se on:** Tämä <code><</code>div<code>></code> sisältää kaksi kappaletta (<code><</code>p<code>></code>), joissa näytetään käyttäjän oikeiden ja väärien vastausten määrät.
- **Tarkoitus:** Stats-osio tarjoaa käyttäjälle jatkuvan tilannepäivityksen siitä, kuinka monta kysymystä hän on vastannut oikein ja väärin. Se käyttää <code><</code>span<code>></code>-elementtejä kappaleiden sisällä, jotta luvut voidaan päivittää dynaamisesti JavaScriptin avulla.
- **Tärkeät yksityiskohdat:**
  - **Oikeiden vastausten määrä (<code><</code>p<code>></code>Correct: <code><</code>span id="correct-count"<code>></code>0<code><</code>/span<code>></code><code><</code>/p<code>></code>):** Näyttää oikeiden vastausten määrän. id="correct-count" mahdollistaa JavaScriptin dynaamisen päivityksen.
  - **Väärien vastausten määrä (<code><</code>p<code>></code>Incorrect: <code><</code>span id="incorrect-count"<code>></code>0<code><</code>/span<code>></code><code><</code>/p<code>></code>):** Näyttää väärien vastausten määrän. id="incorrect-count" käytetään dynaamisia päivityksiä varten.

## 11. Script Tag (<code><</code>script src="app.js"<code>></code>):

- **Mikä se on:** <code><</code>script<code>></code>-tagi linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää logiikan kysymysten hakemiseen, käyttäjän syötteen käsittelyyn ja pelin dynaamiseen päivittämiseen.
- **Tarkoitus:** Se eriyttää JavaScript-logiikan HTML:stä, noudattaen parhaita käytäntöjä koodin ylläpidettävyyden ja selkeyden kannalta.
- **Tärkeä yksityiskohta:** Linkittämällä ulkoiseen JavaScript-tiedostoon HTML-dokumentti keskittyy rakenteeseen, kun taas toiminnallisuus hallitaan erillään, parantaen luettavuutta ja ylläpidettävyyttä.

# CSS selitys

## 1. Global Reset (\* Selector):

- **Mikä se on:** Universaali valitsin \* kohdistuu kaikkiin sivun elementteihin.
- **Tarkoitus:** Se nollaa oletusmarginaalit, pehmusteet ja asettaa box-sizing: border-box kaikille elementeille. Tämä varmistaa, että pehmusteet ja reunukset sisällytetään elementin kokonaisleveyteen ja -korkeuteen, mikä helpottaa ja yhtenäistää asettelulaskelmia eri selaimissa.
- **Tärkeä yksityiskohta:** Globaalin nollauksen avulla vältetään epäjohdonmukaiset välit ja asetteluongelmat standardoimalla marginaalit ja pehmusteet selainten välillä.

## 2. Body Styling (<code><</code>body<code>></code>):

- **Mikä se on:** Tämä sääntö tyylittää <code><</code>body<code>></code>-elementin, joka sisältää sivun kaiken sisällön.
- **Tarkoitus:**
  - **Fontti:** font-family: 'Roboto', sans-serif; soveltaa modernia, selkeää fonttia Google Fontsista parantaen luettavuutta ja tyylikästä ulkoasua.
  - **Tausta:** background: linear-gradient(135deg, #74ebd5, #acb6e5); luo houkuttelevan liukuvärjätyn taustan, joka siirtyy vinosti vihreänsinisestä siniseen, parantaen sovelluksen estetiikkaa.
  - **Asettelu:** display: flex; justify-content: center; align-items: center; käyttää Flexboxia keskittääkseen sisällön sekä vaakasuunnassa että pystysuunnassa, varmistaen että sisältö on keskitettynä ruudulla.
  - **Korkeus:** height: 100vh; varmistaa, että body vie koko näkymän korkeuden, pitäen tietovisakontin pystysuunnassa keskitettynä.
- **Tärkeä yksityiskohta:** Flexbox-asettelu takaa, että sisältö pysyy keskitettynä, ja liukuvärjätty tausta lisää visuaalista syvyyttä sivulle.

## 3. Container Styling (.container):

- **Mikä se on:** .container-luokan säännöt soveltuvat pääkonttiin, joka pitää sisällään pelin sisällön, kuten kysymykset, vastaukset, palautteen ja pisteet.
- **Tarkoitus:**
  - **Taustaväri:** background-color: #fff; antaa kontille puhtaan valkoisen taustan, joka luo kontrastin body-elementin värikkään taustan kanssa.
  - **Pehmuste:** padding: 30px; varmistaa, että sisällön ja kontin reunojen välillä on riittävästi tilaa, tehden asettelusta mukavammin luettavan.
  - **Reunan pyöristys:** border-radius: 15px; lisää konttiin pyöristetyt reunat, antaen sille modernin, korttimaisen ulkonäön.
  - **Varjo:** box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); lisää hienovaraisen varjon, joka antaa kontille syvyyttä ja erottaa sen taustasta.
  - **Leveys:** width: 400px; varmistaa, että kontin leveys on kiinteä, pitäen asettelun yhtenäisenä eri laitteilla.
  - **Responsiivinen suunnittelu:** max-width: 100%; varmistaa, että kontti mukautuu pienempiin näyttöihin, tehden siitä responsiivisen.
  - **Siirtymä:** transition: transform 0.3s ease; lisää sujuvan siirtymäefektin vuorovaikutuksia, kuten hover-toimintoa varten.
- **Tärkeä yksityiskohta:** Yhdistelmä pehmusteita, pyöristettyjä kulmia ja varjoa antaa kontille tyylikkään, modernin suunnittelun, kun taas leveys ja responsiiviset muutokset varmistavat, että sisältö mukautuu eri näyttökokoihin.

## 4. Container Hover Effect (.container:hover):

- **Mikä se on:** Tämä sääntö astuu voimaan, kun käyttäjä vie hiiren kontin päälle.
- **Tarkoitus:** transform: scale(1.05); suurentaa konttia hieman hiiren päälle vietäessä, lisäten hienovaraisen zoom-efektin, joka parantaa vuorovaikutusta ja tekee sovelluksesta dynaamisemman.
- **Tärkeä yksityiskohta:** Hover-efekti antaa sovellukselle reagoivan tunteen, tehden siitä käyttäjäystävällisemmän.

## 5. Heading Styling (<code><</code>h1<code>></code>):

- **Mikä se on:** Tämä sääntö tyylittää sovelluksen pääotsikon "Trivia Game".
- **Tarkoitus:**
  - **Fonttikoko:** font-size: 2.5em; tekee otsikosta suuren ja helposti luettavan, varmistaen, että otsikko erottuu.
  - **Alamarginaali:** margin-bottom: 20px; lisää tilaa otsikon alapuolelle, erottaen sen muusta sisällöstä ja parantaen asettelun rakennetta.
  - **Tekstin väri:** color: #2d3748; lisää tummaa väriä tekstiin, luoden hyvän kontrastin valkoiseen taustaan.
- **Tärkeä yksityiskohta:** Suuri fonttikoko ja välit tekevät otsikosta visuaalisesti erottuvan, kiinnittäen käyttäjien huomion sovelluksen tarkoitukseen heti.

## 6. Question Styling (.question):

- **Mikä se on:** Tämä sääntö tyylittää tietovisan kysymyksen, joka lisätään sivulle dynaamisesti.
- **Tarkoitus:**
  - **Fonttikoko:** font-size: 1.4em; varmistaa, että kysymys on suurempi kuin tavallinen teksti, tehden siitä helpommin luettavan ja merkittävän sivulla.
  - **Alamarginaali:** margin-bottom: 20px; lisää tilaa kysymyksen alapuolelle, pitäen asettelun järjestyksessä ja luoden tilaa vastauspainikkeille.
  - **Tekstin väri:** color: #333; käyttää tummempaa tekstiväriä paremman luettavuuden takaamiseksi valkoista taustaa vasten.
- **Tärkeä yksityiskohta:** Kysymyksen tyyli varmistaa, että se erottuu selkeästi, tehden siitä sovelluksen keskipisteen.

## 7. Answers Container Styling (.answers):

- **Mikä se on:** Tämä sääntö tyylittää kontin, joka sisältää monivalintavastaukset painikkeina.
- **Tarkoitus:** display: flex; flex-direction: column; käyttää Flexboxia järjestääkseen painikkeet pystysuunnassa, luoden selkeän ja järjestetyn asettelun. gap: 10px; lisää tilaa jokaisen vastauspainikkeen väliin, estäen niitä näyttämästä liian lähekkäin.
- **Tärkeä yksityiskohta:** Flexbox tarjoaa helpon tavan järjestää vastaukset pystysuoraan pinoon tasaisella välyksellä, parantaen sekä estetiikkaa että käytettävyyttä.

## 8. Answer Button Styling (.answers button):

- **Mikä se on:** Tämä sääntö tyylittää jokaisen vastauksen painikkeen vastauskontissa.
- **Tarkoitus:**
  - **Pehmuste:** padding: 12px; lisää sisäistä tilaa painikkeisiin, tehden niistä mukavampia klikata.
  - **Taustaväri:** background-color: #007bff; antaa painikkeille sinisen taustan, tehden niistä visuaalisesti erottuvia interaktiivisina elementteinä.
  - **Tekstin väri:** color: white; varmistaa, että teksti painikkeissa on selkeästi näkyvissä sinistä taustaa vasten.
  - **Reunan pyöristys:** border-radius: 8px; antaa painikkeille pyöristetyt kulmat, säilyttäen sovelluksen modernin ulkoasun.
  - **Kursorin tyyli:** cursor: pointer; vaihtaa hiiren osoittimen "osoittimeksi" painikkeen päällä, osoittaen, että se on klikattava.
  - **Fonttikoko:** font-size: 1em; tarjoaa selkeän ja luettavan tekstikoon.
  - **Siirtymä:** transition: background-color 0.3s ease, transform 0.2s ease; lisää sujuvat siirtymät, kun painikkeen päälle viedään hiiri tai sitä klikataan.
- **Tärkeä yksityiskohta:** Painikkeet on tyylitelty toimiviksi ja visuaalisesti erottuviksi, keskittyen luettavuuteen ja vuorovaikutettavuuteen.

## 9. Hover Effect on Answer Buttons (.answers button:hover):

- **Mikä se on:** Tämä sääntö astuu voimaan, kun käyttäjä vie hiiren vastauspainikkeen päälle.
- **Tarkoitus:** background-color: #0056b3; vaihtaa taustavärin tummemmaksi siniseksi, kun painikkeen päälle viedään hiiri, antaen välitöntä visuaalista palautetta. transform: translateY(-2px); nostaa painiketta hieman, luoden dynaamisen 3D-efektin.
- **Tärkeä yksityiskohta:** Hover-efekti tekee painikkeista vuorovaikutteisia ja reagoivia, parantaen käyttäjäkokemusta.

## 10. Feedback Message Styling (.feedback):

- **Mikä se on:** Tämä sääntö tyylittää palautteen, joka kertoo käyttäjälle, onko vastaus oikein vai väärin.
- **Tarkoitus:**
  - **Fonttikoko:** font-size: 1.2em; varmistaa, että palauteviesti on riittävän suuri huomattavaksi.
  - **Fontin paino:** font-weight: bold; korostaa palauteviestiä, lisäten tehoa oikean tai väärän vastauksen esittämiseen.
  - **Ylämarginaali:** margin-top: 20px; luo tilaa palautteen ja vastausten välille, parantaen asettelun rakennetta.
- **Tärkeä yksityiskohta:** Palauteviesti on tyylitelty näkyväksi, antaen käyttäjälle selvän ja vahvan palautteen valitsemastaan vastauksesta.

## 11. Correct and Incorrect Feedback Styling (.feedback.correct and .feedback.incorrect):

- **Mikä se on:** Nämä säännöt soveltuvat erityiseen tyylitykseen, riippuen siitä, onko vastaus oikein vai väärin.
- **Tarkoitus:**
  - **Oikea palaute (.feedback.correct):** color: green; näyttää palauteviestin vihreänä, osoittaen oikean vastauksen.
  - **Väärä palaute (.feedback.incorrect):** color: red; näyttää palauteviestin punaisena, osoittaen väärän vastauksen.
- **Tärkeä yksityiskohta:** Eri värien käyttäminen oikeille ja väärille vastauksille antaa välittömän visuaalisen palautteen käyttäjälle, parantaen vuorovaikutuksen selkeyttä.

## 12. Score Display Styling (.stats):

- **Mikä se on:** Tämä sääntö tyylittää osion, joka näyttää käyttäjän oikeiden ja väärien vastausten määrän.
- **Tarkoitus:**
  - **Ylämarginaali:** margin-top: 20px; varmistaa, että tilastot-osio on selkeästi erotettu muista elementeistä, pitäen asettelun siistinä.
  - **Fonttikoko:** font-size: 1em; varmistaa, että tilastot ovat helposti luettavissa.
  - **Tekstin väri:** color: #2d3748; käyttää tummaa harmaata väriä, parantaen kontrastia valkoiseen taustaan.
- **Tärkeä yksityiskohta:** Tilastot on suunniteltu helposti luettaviksi ja selkeästi erotetuiksi muusta sisällöstä selkeyden takaamiseksi.

# JavaScript selitys

## 1. **DOMContentLoaded Event Listener:**

- **Mikä se on:** document.addEventListener('DOMContentLoaded', ...) on tapahtumankuuntelija, joka laukeaa, kun HTML-dokumentti on täysin ladattu ja selain on sen jäsentänyt.
- **Tarkoitus:** Tämä varmistaa, että JavaScript-koodi suoritetaan vasta sen jälkeen, kun kaikki sivun elementit (kuten kysymys, vastaukset ja palaute-divit) ovat valmiita muokattavaksi.
- **Tärkeä yksityiskohta:** Tämä estää virheet, joita voisi tapahtua, jos skripti yrittäisi käyttää elementtejä, joita selain ei ole vielä renderöinyt.

## 2. Selecting DOM Elements:

- **Mikä se on:** Useita document.getElementById() -funktioita käytetään valitsemaan keskeisiä elementtejä DOM:ssa, kuten:
  - **questionElement:** Säilyttää tietovisan kysymyksen.
  - **answersElement:** Sisältää vastauspainikkeet.
  - **feedbackElement:** Näyttää palautteen käyttäjän valitsemasta vastauksesta.
  - **correctCountElement:** Näyttää oikeiden vastausten määrän.
  - **incorrectCountElement:** Näyttää väärien vastausten määrän.
- **Tarkoitus:** Nämä muuttujat tallentavat viittaukset DOM-elementteihin, jolloin JavaScript voi dynaamisesti päivittää kysymyksen, vastaukset, palautteen ja pisteet.
- **Tärkeä yksityiskohta:** Viittausten tallentaminen DOM-elementteihin takaa tehokkaan vuorovaikutuksen, koska se mahdollistaa sisällön muokkaamisen suoraan valituissa elementeissä.

## 3. Initializing the Score:

- **Mikä se on:** Kaksi muuttujaa, correctCount ja incorrectCount, alustetaan arvoon 0 seuraamaan oikeiden ja väärien vastausten määrää.
- **Tarkoitus:** Nämä muuttujat tallentavat käyttäjän etenemisen tietovisassa, ja ne päivittyvät dynaamisesti käyttäjän vastatessa kysymyksiin oikein tai väärin.
- **Tärkeä yksityiskohta:** Näiden muuttujien avulla sovellus voi seurata ja näyttää käyttäjän edistymistä reaaliajassa, antaen välitöntä palautetta.

## 4. Fetching a New Trivia Question (fetchQuestion function):

- **Mikä se on:** fetchQuestion() -funktio käyttää Fetch API:a noutaakseen tietovisakysymyksen Open Trivia Database -palvelusta (OpenTDB).
- **Tarkoitus:** Se lähettää pyynnön API:lle ja noutaa satunnaisen tietovisakysymyksen, joka sisältää kysymyksen tekstin, oikean vastauksen ja sarjan vääriä vastauksia.
- **Tärkeät yksityiskohdat:**
  - **Hakupyyntö:** Funktio tekee verkkopyynnön osoitteeseen [https://opentdb.com/api.php?amount=1&type=multiple](https://opentdb.com/api.php?amount=1&type=multiple), joka noutaa yhden monivalintakysymyksen.
  - **Vastauksen jäsentäminen:** response.json() jäsentää JSON-vastauksen, tehden datasta käyttökelpoista JavaScriptissä.
  - **Virheenkäsittely:** Jos hakupyynnön aikana tapahtuu virhe, virheilmoitus näytetään questionElementissä, jotta käyttäjä tietää, että jotain meni pieleen.
- **Tärkeä yksityiskohta:** Fetch API:n käyttö tekee sovelluksesta asynkronisen ja ei-blokkaavan, jolloin se voi noutaa uusia kysymyksiä dynaamisesti ilman sivun uudelleenlatausta.

## 5. Displaying the Question and Answers (displayQuestion function):

- **Mikä se on:** Tämä funktio ottaa API:sta noudetun tietovisadatan ja päivittää dynaamisesti kysymyksen ja vastausvaihtoehdot sivulle.
- **Tarkoitus:** Se purkaa mahdolliset HTML-entiteetit kysymyksestä ja vastauksista, sekoittaa vastaukset satunnaisesti ja luo painikkeet jokaiselle vastaukselle, lisäten ne vastauksia sisältävään konttiin.
- **Tärkeät yksityiskohdat:**
  - **HTML-entiteettien purkaminen:** decodeHTML() -funktiota käytetään purkamaan erikoismerkit (esim. &, ') tietovisakysymyksistä ja -vastauksista.
  - **Oikea vastaus ja sekoittaminen:** Oikea vastaus ja väärät vastaukset yhdistetään ja sekoitetaan, jotta vastausjärjestys vaihtelee.
  - **Dynaaminen painikkeiden luonti:** Jokaiselle vastaukselle luodaan painike, joka lisätään DOM:iin. Jokaiselle painikkeelle liitetään tapahtumankuuntelija, joka tarkistaa, onko valittu vastaus oikea.
- **Tärkeä yksityiskohta:** Funktio varmistaa, että tietovisakysymykset ja -vastaukset näytetään dynaamisesti, tarjoten uuden kokemuksen jokaisella kysymyksellä.

## 6. Checking the User's Answer (checkAnswer function):

- **Mikä se on:** Tämä funktio vertaa käyttäjän valitsemaa vastausta oikeaan vastaukseen ja antaa palautetta.
- **Tarkoitus:** Se tarkistaa, onko käyttäjän klikkaama vastaus oikea ja päivittää palautteen sen mukaisesti. Se myös kasvattaa oikeiden tai väärien vastausten määrää tuloksen mukaan.
- **Tärkeät yksityiskohdat:**
  - **Oikea vastaus:** Jos käyttäjä valitsee oikean vastauksen, palauteviestissä lukee "Oikein!" vihreällä, ja oikeiden vastausten määrä kasvaa yhdellä.
  - **Väärä vastaus:** Jos vastaus on väärä, palauteviestissä lukee "Väärin!" punaisella, ja väärien vastausten määrä kasvaa yhdellä.
  - **Pisteiden päivitys:** Vastausten tarkistamisen jälkeen oikeiden ja väärien vastausten määrät päivitetään näytölle muuttamalla correctCountElementin ja incorrectCountElementin tekstisisältöä.
  - **Uuden kysymyksen haku:** Lyhyen viiveen (1 sekunti) jälkeen uusi kysymys haetaan, jotta peli etenee sujuvasti.
- **Tärkeä yksityiskohta:** Tämä funktio varmistaa, että käyttäjä saa välitöntä palautetta siitä, oliko vastaus oikein vai väärin, ja päivittää pisteet reaaliajassa.

## 7. Decoding HTML Entities (decodeHTML function):

- **Mikä se on:** decodeHTML() -funktio ottaa merkkijonon, joka sisältää HTML-entiteettejä (esim. & tarkoittaa &-merkkiä), ja purkaa ne tavallisiksi merkeiksi.
- **Tarkoitus:** Tietovisakysymykset ja -vastaukset sisältävät usein HTML-entiteettejä, joten tätä funktiota käytetään varmistamaan, että teksti näytetään oikein sivulla.
- **Tärkeä yksityiskohta:** Tämä funktio parantaa tietovisakysymysten ja -vastausten luettavuutta, varmistaen, että erikoismerkit näytetään tarkoitetulla tavalla.

## 8. Shuffling the Answers (shuffleArray function):

- **Mikä se on:** shuffleArray() -funktio sekoittaa vastausten järjestyksen taulukossa, jotta oikea vastaus ei aina ole samassa paikassa.
- **Tarkoitus:** Vastausten sekoittaminen varmistaa, että tietovisapeli on arvaamaton ja mukaansatempaava, estäen käyttäjiä arvaamasta oikeaa vastausta sijainnin perusteella.
- **Tärkeä yksityiskohta:** Käytössä on Fisher-Yatesin sekoitusalgoritmi, joka on tehokas tapa sekoittaa taulukko satunnaisesti.

## 9. Dynamic Interaction with the DOM:

- **Mikä se on:** Sovelluksessa DOM päivitetään dynaamisesti tietovisakysymysten, vastausvaihtoehtojen, palautteiden ja päivitettyjen pisteiden näyttämiseksi.
- **Tarkoitus:** JavaScript-funktiot toimivat yhdessä manipuloidakseen DOM:ia reaaliajassa, luoden vuorovaikutteisen käyttäjäkokemuksen ilman, että sivua tarvitsee ladata uudelleen.
- **Tärkeä yksityiskohta:** Dynaamisesti päivittyvä sisältö käyttäjän toimien mukaan tarjoaa sujuvan ja reaaliaikaisen tietovisakokemuksen.
