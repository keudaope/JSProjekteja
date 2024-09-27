# Nettisivu: https://keudaope.github.io/JSProjekteja/P30_Todo_List_with_Local_Storage

# Johdanto

**Tehtävälista paikallisella tallennuksella** on hyödyllinen sovellus, jonka avulla käyttäjät voivat hallita tehtäviään ja säilyttää ne selaimen istuntojen välillä. Tämä projekti auttaa aloittelijoita harjoittelemaan **JavaScriptin**, **HTML**:n ja **CSS**:n käyttöä samalla, kun opitaan käsittelemään käyttäjän syötteitä, manipuloimaan DOM:ia ja käyttämään selaimen **paikallisen tallennuksen APIa**. Käyttäjät voivat lisätä, merkitä valmiiksi ja poistaa tehtäviä, ja nämä tehtävät tallennetaan selaimen **paikalliseen tallennukseen**.

# HTML Selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on**: <code><</code>!DOCTYPE html> -ilmoitus kertoo selaimelle, että tämä on HTML5-dokumentti.
- **Tarkoitus**: Se varmistaa, että verkkosivu tulkitaan modernien HTML5-standardien mukaisesti, mikä estää ongelmat vanhojen renderöintitilojen kanssa ja takaa yhteensopivuuden eri selainten välillä.
- **Tärkeä yksityiskohta**: Lisää aina DOCTYPE-ilmoitus, jotta selain ymmärtää dokumentin rakenteen oikein.

## 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on**: <code><</code>html> -elementti on HTML-dokumentin juurielementti. lang="en" määrittää, että sisältö on englanninkielistä.
- **Tarkoitus**: Kielen määrittely auttaa saavutettavuustyökaluja (kuten ruudunlukijoita) ja hakukoneita ymmärtämään dokumentin pääkielen.
- **Tärkeä yksityiskohta**: Määrittele aina lang-attribuutti parantaaksesi SEO:a ja saavutettavuutta.

## 3. Head Section (<code><</code>head>):

- **Mikä se on**: <code><</code>head> sisältää meta-tietoja verkkosivusta, kuten merkkikoodauksen, näkymäasetukset ja linkit ulkoisiin resursseihin.
- **Tarkoitus**: Selain käsittelee <code><</code>head> -osiossa olevat tiedot ennen sisällön renderöintiä, mikä valmistelee sivun asioille, kuten responsiiviselle suunnittelulle ja ulkoisille tyyleille.
- **Tärkeät yksityiskohdat**:
  - **Meta Charset (<code><</code>meta charset="UTF-8">)**: Määrittää merkkikoodaukseksi UTF-8:n, joka tukee laajaa merkkijoukkoa varmistaen tekstin oikean näyttämisen.
  - **Viewport Meta Tag (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">)**: Varmistaa, että sivu on responsiivinen ja skaalautuu eri näyttökokoihin, erityisesti mobiililaitteilla.
  - **Title Tag (<code><</code>title>Todo List with Local Storage<code><</code>/title>)**: Asettaa selaimen välilehdessä näkyvän otsikon ja kertoo sivun tarkoituksen.
  - **Link to CSS (<code><</code>link rel="stylesheet" href="styles.css">)**: Linkittää ulkoiseen CSS-tiedostoon, joka määrittää sivun tyylit, pitäen HTML:n rakenteen siistinä ja erottaen tyylin sisällöstä.

## 4. Body Tag (<code><</code>body>):

- **Mikä se on**: <code><</code>body> sisältää verkkosivun näkyvän sisällön, kuten otsikot, syöttökentät, painikkeet ja tehtävälistan.
- **Tarkoitus**: Kaikki <code><</code>body> -tagin sisällä olevat elementit ovat niitä, joiden kanssa käyttäjät ovat vuorovaikutuksessa. Tyylit ja JavaScript-toiminnot parantavat näiden elementtien interaktiivisuutta.
- **Tärkeä yksityiskohta**: <code><</code>body> toimii päätasona, jossa käyttäjät näkevät ja käyttävät todo-listaa.

## 5. Main Container (<code><</code>div class="container">):

- **Mikä se on**: <code><</code>div> -elementti, jossa on luokka container, ympäröi koko todo-listasovelluksen, mukaan lukien otsikon, syöttökentän, painikkeen ja tehtävälistan.
- **Tarkoitus**: Tämä kontti ryhmittelee kaikki liittyvät elementit yhteen, jolloin niihin voidaan soveltaa keskitetysti tyylejä ja asettelun hallintaa. Se tarjoaa rakenteellisen tavan soveltaa CSS-tyylejä, kuten täytettä, marginaaleja ja varjoja.
- **Tärkeä yksityiskohta**: Kontti luo puhtaan korttimaisen rakenteen sovellukselle, erottaen sen visuaalisesti sivun muusta sisällöstä.

## 6. Heading (<code><</code>h1>Todo List<code><</code>/h1>):

- **Mikä se on**: <code><</code>h1> -elementti näyttää todo-listasovelluksen otsikon "Todo List".
- **Tarkoitus**: Otsikko tarjoaa selkeän ja näkyvän nimen sovellukselle, tehden heti selväksi, mikä sen tarkoitus on. <code><</code>h1> -elementillä on myös merkitystä SEO:lle, sillä se kertoo hakukoneille sivun pääsisällöstä.
- **Tärkeä yksityiskohta**: Käytä vain yhtä <code><</code>h1> -elementtiä per sivu paremman saavutettavuuden ja SEO:n parantamiseksi.

## 7. Input Field (<code><</code>input type="text" id="task-input" placeholder="Enter a new task">):

- **Mikä se on**: <code><</code>input> -elementti on tarkoitettu uusien tehtävien syöttämiseen. Sillä on id "task-input", jotta se on helppo tavoittaa JavaScriptissä, ja placeholder-attribuutti tarjoaa vihjeen käyttäjälle, mitä heidän tulisi syöttää.
- **Tarkoitus**: Tämä syöttökenttä on tärkein tapa, jolla käyttäjät voivat olla vuorovaikutuksessa sovelluksen kanssa. He kirjoittavat tänne tehtävänsä, jotka lisätään listalle, kun he painavat "Add Task" -painiketta.
- **Tärkeä yksityiskohta**: Placeholder-attribuutti parantaa käyttökokemusta tekemällä selväksi, mitä tyyppiä syötettä odotetaan ilman, että tarvitaan ylimääräisiä etikettejä.

## 8. Add Task Button (<code><</code>button id="add-task-button">Add Task<code><</code>/button>):

- **Mikä se on**: <code><</code>button> -elementti tarjoaa klikattavan painikkeen, jossa lukee "Add Task". Sillä on id "add-task-button", jotta se voidaan helposti tavoittaa JavaScriptin avulla tehtävän luomista varten.
- **Tarkoitus**: Tämä painike lisää sovellukseen vuorovaikutteisuutta. Kun käyttäjä klikkaa sitä, syöttökenttään kirjoitettu tehtävä lisätään listalle.
- **Tärkeä yksityiskohta**: Painike on tyylitelty erottumaan visuaalisesti ja olemaan interaktiivinen, käyttämällä CSS:ssä määriteltyjä hover-efektejä, jotka tekevät siitä käyttäjälle responsiivisen.

## 9. Task List (<code><</code>ul id="task-list"><code><</code>/ul>):

- **Mikä se on**: <code><</code>ul> -elementti on järjestämätön lista, johon tehtävät lisätään dynaamisesti. Jokainen tehtävä lisätään <code><</code>li> (list item) -elementiksi JavaScriptin avulla.
- **Tarkoitus**: Tämä on tehtävien pääkontti. Kun käyttäjät lisäävät tehtäviä, uusia <code><</code>li> -elementtejä luodaan ja lisätään tähän listaan. Lista on tyylitelty poistamaan luettelomerkit ja näyttämään jokainen tehtävä siististi.
- **Tärkeä yksityiskohta**: Lista alkaa tyhjänä, mutta JavaScript-koodi täyttää sen käyttäjän syötteen ja localStoragen tietojen perusteella. Id "task-list" mahdollistaa listan sisällön helpon manipuloinnin JavaScriptissä.

## 10. JavaScript File Link (<code><</code>script src="app.js"><code><</code>/script>):

- **Mikä se on**: <code><</code>script> -elementti lataa ulkoisen JavaScript-tiedoston (app.js), joka hoitaa sovelluksen dynaamisen toiminnallisuuden.
- **Tarkoitus**: Tämä skripti hallitsee tehtävien luomisen, poistamisen, valmistumisen ja localStorage-toimintojen logiikkaa. Pitämällä JavaScript erillisessä tiedostossa HTML pysyy siistinä ja keskittyy rakenteeseen.
- **Tärkeä yksityiskohta**: Skripti lisätään <code><</code>body> -elementin loppuun varmistaen, että DOM-elementit ovat täysin ladattuja ennen kuin JavaScript alkaa suorittaa koodia, mikä estää mahdollisia virheitä.

# CSS selitys

## 1. Global Reset (\* { ... })

- **Mikä se on:** Universaali valitsin soveltaa globaalia nollausasetusta kaikille elementeille.
- **Tarkoitus:** Se poistaa oletusmarginaalit ja -täytteet, varmistaen yhtenäisen asettelun kaikissa selaimissa. Box-sizing: border-box varmistaa, että täyte ja reunukset sisällytetään elementtien kokonaisleveyteen ja -korkeuteen, tehden koon laskemisesta helpompaa responsiivisissa asetteluissa.
- **Tärkeä yksityiskohta:** Tämä nollaus välttää epäjohdonmukaisuudet selainten oletusvälissä, antaen sinulle täyden hallinnan asettelusta ja suunnittelusta.

## 2. Body-tyylitys (body { ... })

- **Mikä se on:** Body-tag määrittää sivun kokonaisulkoasun ja -asettelun.
- **Tarkoitus:**
  - **Fontti:** Font-family: Arial, sans-serif; asettaa puhtaan, modernin fontin sivulle. Arial on laajalti tuettu sans-serif-fontti, joka parantaa luettavuutta.
  - **Taustaväri:** Background-color: #f0f0f0; asettaa vaalean harmaan taustan koko sivulle, mikä luo hyvän kontrastin valkoiseen konttiin nähden.
  - **Flexbox-asettelu:** Display: flex; justify-content: center; align-items: center; keskittää pääkontin sekä vaaka- että pystysuunnassa, jolloin sovellus näyttää keskitetyltä riippumatta näytön koosta.
  - **Koko näytön korkeus:** Height: 100vh; varmistaa, että body vie koko näytön korkeuden, mahdollistaen pystykeskityksen.
- **Tärkeä yksityiskohta:** Flexboxin ja koko näytön asettelun yhdistelmä varmistaa, että tehtävälistakontti on täydellisesti keskitetty millä tahansa näytön koolla, samalla kun vaalean harmaa tausta korostaa valkoista konttia.

## 3. Container-tyylitys (.container { ... })

- **Mikä se on:** .Container-luokka tyylittää sovelluksen pääsäiliön, joka sisältää kaiken sisällön.
- **Tarkoitus:**
  - **Taustaväri:** Background-color: white; antaa kontille puhtaan, neutraalin taustan, joka erottuu harmaasta sivutaustasta.
  - **Täyte ja reunojen pyöristys:** Padding: 30px 20px; lisää tilaa kontin sisälle, varmistaen, että sisältö ei koske reunoja. Border-radius: 12px; pyöristää kulmat, antaen pehmeän ja modernin ilmeen.
  - **Varjo:** Box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); luo hienovaraisen varjon kontin ympärille, lisäten syvyyttä ja antaen kontille korttimaisen ulkoasun.
  - **Leveys:** Width: 400px; varmistaa, että kontti säilyttää kiinteän leveyden, tehden sovelluksesta kompaktin ja keskittyneen sekä työpöytä- että mobiilinäytöillä.
- **Tärkeä yksityiskohta:** Tämä kontti toimii korttina tai modaalina, luoden puhtaan ja keskittyneen alueen, jossa käyttäjä voi olla vuorovaikutuksessa tehtävälistan kanssa.

## 4. Otsikon tyylitys (h1 { ... })

- **Mikä se on:** H1-tag tyylittää sivun pääotsikon.
- **Tarkoitus:**
  - **Tekstin tasaus:** Text-align: center; keskittää otsikon vaakasuunnassa.
  - **Väri:** Otsikolle annetaan tummanharmaa väri (color: #333;), mikä luo selkeän kontrastin valkoista taustaa vasten.
  - **Marginaali:** Margin-bottom: 20px; erottaa otsikon syöttökentästä, varmistaen visuaalisesti miellyttävän välin.
- **Tärkeä yksityiskohta:** Keskitetty otsikko antaa selkeyttä ja tekee heti selväksi, mistä sovelluksessa on kyse.

## 5. Syöttökentän tyylitys (input[type="text"] { ... })

- **Mikä se on:** Tämä tyylittää syöttökentän, johon käyttäjät kirjoittavat uusia tehtäviä.
- **Tarkoitus:**
  - **Leveys:** Width: calc(100% - 22px); varmistaa, että syöttökenttä vie koko kontin leveyden, huomioiden täytteet ja reunukset.
  - **Täyte:** Padding sisällä syöttölaatikossa (padding: 10px;) tekee kirjoittamisesta mukavaa.
  - **Reuna ja reunojen pyöristys:** Border: 1px solid #ccc; lisää vaaleanharmaan reunan syöttökentän ympärille, kun taas border-radius: 8px; pehmentää kulmat modernin ilmeen saavuttamiseksi.
  - **Varjo:** Box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05); lisää hienoisen varjon, joka nostaa syöttökentän irti sivusta.
  - **Fokus-siirtymä:** Syöttökenttä vaihtaa sujuvasti reunan väriä ja varjoa, kun se saa fokuksen, antaen visuaalista palautetta käyttäjälle.
- **Tärkeä yksityiskohta:** Tämä syöttökenttä on sekä toiminnallinen että visuaalisesti miellyttävä, varmistaen sen sulautumisen sovelluksen yleiseen esteettisyyteen.

## 6. Painikkeen tyylitys (button { ... })

- **Mikä se on:** Button-tag tyylittää "Lisää tehtävä" -painikkeen.
- **Tarkoitus:**
  - **Täyte:** Painikkeella on ylimääräinen täyte (padding: 10px 20px;), jotta siitä on helppo klikata.
  - **Taustaväri ja tekstiväri:** Kirkas sininen tausta (background-color: #007bff;) saa painikkeen erottumaan, kun taas valkoinen teksti takaa luettavuuden.
  - **Reunojen pyöristys:** Border-radius: 8px; pyöristää painikkeen reunat, vastaten sovelluksen pehmeää ja modernia muotoilua.
  - **Hover-efekti:** Painike tummenee, kun sen päällä leijuu, tarjoten välitöntä palautetta siitä, että painiketta voi klikata.
  - **Siirtymä:** Siirtymäominaisuudet varmistavat, että painike muuttuu sujuvasti, parantaen käyttäjäkokemusta.
- **Tärkeä yksityiskohta:** Painikkeen väri, täyte ja hover-efektit saavat sen erottumaan samalla, kun ne säilyttävät yhtenäisen, modernin ilmeen.

## 7. Tehtävälista (ul { ... })

- **Mikä se on:** Ul-valitsin tyylittää järjestämättömän listan, joka sisältää tehtäväkohteet.
- **Tarkoitus:** Lista poistaa oletusluettelomerkit (list-style-type: none;) ja nollaa täytteen (padding: 0;), varmistaen, että jokainen tehtävä esitetään puhtaana, erillisenä lohkona.
- **Tärkeä yksityiskohta:** Tämä minimaalinen tyylitys mahdollistaa tehtävien selkeän esittämisen ilman tarpeetonta visuaalista hälyä.

## 8. Tehtäväkohteen tyylitys (li { ... })

- **Mikä se on:** Li-valitsin tyylittää yksittäiset tehtävät tehtävälistan sisällä.
- **Tarkoitus:**
  - **Taustaväri:** Jokaisella tehtävällä on vaaleanharmaa tausta (background-color: #f8f8f8;), joka luo hienovaraista visuaalista erottelua valkoisesta kontista.
  - **Täyte ja marginaalit:** Reilu täyte (padding: 10px;) tekee jokaisesta tehtävästä helppolukuisen, kun taas margin-bottom: 10px; erottaa tehtävät visuaalisesti toisistaan.
  - **Reunojen pyöristys:** Border-radius: 8px; pyöristää jokaisen tehtävän reunat, antaen modernin ja yhtenäisen ilmeen sovelluksen kanssa.
  - **Flexbox-asettelu:** Display: flex; justify-content: space-between; align-items: center; järjestää tehtävän tekstin vasemmalle ja toimintopainikkeet oikealle, varmistaen oikean kohdistuksen ja tilan.
- **Tärkeä yksityiskohta:** Tämä joustava asettelu mahdollistaa puhtaan ja rakenteellisen tehtävälistan, jossa jokainen tehtävä on helppo lukea ja käyttää.

## 9. Valmiin tehtävän tyylitys (li.completed { ... })

- **Mikä se on:** .Completed-luokka lisätään tehtäville, jotka on merkitty valmiiksi.
- **Tarkoitus:** Tämä luokka lisää yliviivauksen (text-decoration: line-through;) tehtävän tekstiin, mikä visuaalisesti osoittaa, että tehtävä on valmis. Tausta muuttuu myös vaaleanvihreäksi (background-color: #d4edda;), erottaen valmiit tehtävät keskeneräisistä.
- **Tärkeä yksityiskohta:** Tämä visuaalinen erottelu valmiiden ja aktiivisten tehtävien välillä parantaa käytettävyyttä, tehden tehtävälistan hallinnasta helppoa.

## 10. Valmiin painikkeen tyylitys (.complete-button { ... })

- **Mikä se on:** .Complete-button tyylittää "Valmis"-painikkeen jokaiselle tehtävälle.
- **Tarkoitus:** Painikkeen vihreä tausta (background-color: #28a745;) osoittaa sen toiminnon (tehtävien viimeistely), kun taas pyöristetyt kulmat (border-radius: 8px;) ja täyte tekevät siitä helppokäyttöisen. Painike muuttaa väriä, kun sen päällä leijuu, tarjoten selkeää palautetta.
- **Tärkeä yksityiskohta:** Vihreä väri yhdistetään valmiiksi tulemiseen, mikä tekee painikkeen toiminnosta intuitiivisen käyttäjälle.

## 11. Poistopainikkeen tyylitys (.delete-button { ... })

- **Mikä se on:** .Delete-button tyylittää "Poista"-painikkeen jokaiselle tehtävälle.
- **Tarkoitus:** Punainen tausta (background-color: #dc3545;) osoittaa sen toiminnon (tehtävien poistaminen). Kuten valmis-painike, sitä on helppo klikata täytteen ja pyöristettyjen kulmien ansiosta. Hover-efekti tummenee painikkeen, tarjoten palautetta.
- **Tärkeä yksityiskohta:** Punainen väri viestii heti, että painike suorittaa tuhoavan toiminnon (tehtävien poistaminen).

## 12. Valmiin ja Poista-painikkeen Hover-efektit (.complete-button:hover, .delete-button:hover)

- **Mikä se on:** Toimintopainikkeiden hover-efektit.
- **Tarkoitus:** Kun painiketta leijutetaan, valmis-painike tummenee syvempään vihreään (background-color: #218838;), kun taas poistopainike tummenee syvempään punaiseen (background-color: #c82333;). Nämä efektit tarjoavat visuaalista palautetta käyttäjälle, osoittaen, että painikkeet ovat vuorovaikutteisia.
- **Tärkeä yksityiskohta:** Hover-efektit saavat sovelluksen tuntumaan reagoivalta ja houkuttelevalta, kannustaen käyttäjää toimimaan.

# JavaScript Selitys

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...});)

- **Mikä se on:** Tämä on tapahtumankuuntelija, joka odottaa, että HTML-dokumentti on täysin ladattu ja jäsennelty, ennen kuin suljetun koodin suoritus alkaa.
- **Tarkoitus:** Se varmistaa, että JavaScript käsittelee DOM-elementtejä vasta, kun ne ovat täysin ladattuja ja valmiita muokattavaksi. Ilman tätä skripti saattaa yrittää käyttää DOM-elementtejä, jotka eivät ole vielä saatavilla, mikä voi johtaa virheisiin.
- **Tärkeä yksityiskohta:** Käyttämällä DOMContentLoaded-tapahtumaa sovellus alustetaan oikein, kun kaikki HTML-elementit (kuten tehtävän syöttö ja painikkeet) ovat käytettävissä.

## 2. DOM-elementtien valitseminen (const taskInput = document.getElementById('task-input');, jne.)

- **Mikä se on:** Useita DOM-elementtejä (kuten syöttökenttä, painikkeet ja tehtävälista) valitaan käyttämällä document.getElementById() ja ne tallennetaan muuttujiksi helppoa käyttöä varten.
- **Tarkoitus:**
  - **taskInput:** Viittaa syöttökenttään, johon käyttäjät syöttävät uusia tehtäviä.
  - **addTaskButton:** Viittaa "Lisää tehtävä" -painikkeeseen, joka lisää tehtävät listaan.
  - **taskList:** Viittaa järjestämättömään listaan (ul), joka sisältää yksittäiset tehtäväkohteet.
- **Tärkeä yksityiskohta:** Avain-DOM-elementtien viittausten tallentaminen muuttujiksi mahdollistaa niiden tehokkaan käytön (esim. tehtävien lisääminen, listan päivittäminen).

## 3. Tehtävien hakeminen paikallisesta tallennustilasta (let tasks = JSON.parse(localStorage.getItem('tasks')) || [];)

- **Mikä se on:** Tämä rivi hakee aiemmin tallennetut tehtävät selaimen paikallisesta tallennustilasta tai alustaa tyhjän taulukon, jos tehtäviä ei ole.
- **Tarkoitus:**
  - **localStorage.getItem('tasks'):** Hakee selaimen paikalliseen tallennustilaan tallennetun tehtävälistan (JSON-merkkijonona).
  - **JSON.parse():** Muuntaa JSON-merkkijonon takaisin tehtävätaulukoksi.
  - **|| []:** Varmistaa, että sovellus aloittaa tyhjällä taulukolla, jos paikallisessa tallennustilassa ei ole tehtäviä.
- **Tärkeä yksityiskohta:** Tämä mekanismi säilyttää tehtävät sivun uudelleenlatausten välillä, mahdollistaen käyttäjän palata listaansa milloin tahansa.

## 4. Tehtävien tallentaminen paikalliseen tallennustilaan (localStorage.setItem('tasks', JSON.stringify(tasks));)

- **Mikä se on:** Tämä rivi tallentaa nykyisen tehtävälistan paikalliseen tallennustilaan muuntamalla tehtävätaulukon JSON-merkkijonoksi.
- **Tarkoitus:**
  - **localStorage.setItem('tasks', JSON.stringify(tasks)):** Muuntaa tehtävätaulukon JSON-merkkijonoksi ja tallentaa sen paikalliseen tallennustilaan avaimella "tasks".
- **Tärkeä yksityiskohta:** Tallentamalla tehtävät paikalliseen tallennustilaan sovellus varmistaa, että käyttäjän tiedot säilyvät, vaikka sivu suljettaisiin tai päivitetään.

## 5. Tehtävien näyttäminen (function renderTasks() {...})

- **Mikä se on:** RenderTasks-funktio vastaa tehtävien näyttämisestä tehtävälistassa.
- **Vaiheet:**
  - Se tyhjentää tehtävälistan asettamalla taskList.innerHTML = ''; välttääkseen kaksoiskappaleet.
  - Se käy läpi tehtävätaulukon forEach()-metodilla, luoden li-elementin jokaiselle tehtävälle.
  - Jokainen tehtävä näytetään siihen liittyvän tekstin ja painikkeiden ("Valmis" ja "Poista") kanssa.
  - Tapahtumankuuntelijat lisätään painikkeille, jotta tehtävä voidaan merkitä valmiiksi tai poistaa.
- **Tarkoitus:** Tämä funktio pitää tehtävälistan synkronoituna tehtävätaulukon kanssa, varmistaen, että näytetyt tehtävät ovat aina ajan tasalla.
- **Tärkeä yksityiskohta:** RenderTasks()-funktio kutsutaan aina, kun tehtävä lisätään, merkitään valmiiksi tai poistetaan, varmistaen, että näytetty tehtävälista heijastaa tehtävätaulukon nykyistä tilaa.

## 6. Tehtävien lisääminen (addTaskButton.addEventListener('click', () => {...});)

- **Mikä se on:** Tämä tapahtumankuuntelija on kiinnitetty "Lisää tehtävä" -painikkeeseen ja käynnistää logiikan uuden tehtävän lisäämiseksi, kun painiketta painetaan.
- **Vaiheet:**
  - Syöttökentän arvo (taskInput.value.trim()) haetaan ja ylimääräiset välilyönnit poistetaan.
  - Jos syöte ei ole tyhjä, uusi tehtävä (objekti, jolla on teksti- ja valmis-ominaisuudet) lisätään tehtävätaulukkoon.
  - Syöttökenttä tyhjennetään, tehtävälista päivitetään kutsumalla renderTasks(), ja päivitetty tehtävälista tallennetaan paikalliseen tallennustilaan saveTasks()-metodilla.
- **Tarkoitus:** Tämä funktio mahdollistaa käyttäjien lisätä uusia tehtäviä tehtävälistaan kirjoittamalla syöttökenttään ja painamalla painiketta.
- **Tärkeä yksityiskohta:** Trim()-funktio varmistaa, että vain välilyöntejä sisältäviä tehtäviä ei lisätä listaan, ja saveTasks()-kutsulla varmistetaan, että päivitetty tehtävälista tallennetaan.

## 7. Tehtävien merkitseminen valmiiksi (completeButton.addEventListener('click', () => {...});)

- **Mikä se on:** Jokaisella tehtävällä on "Valmis"-painike, joka vaihtaa tehtävän valmiustilaa, kun sitä painetaan.
- **Vaiheet:**
  - Funktio vaihtaa tehtävän valmis-ominaisuutta (väärästä todeksi tai päinvastoin).
  - Tehtävälista renderoidaan uudelleen päivitetyn tilan kanssa kutsumalla renderTasks().
  - Päivitetty tehtävälista tallennetaan paikalliseen tallennustilaan saveTasks()-metodilla.
- **Tarkoitus:** Tämä toiminnallisuus mahdollistaa käyttäjien merkitä tehtävät valmiiksi tai keskeneräisiksi painamalla "Valmis"-painiketta.
- **Tärkeä yksityiskohta:** Tehtävän ulkonäkö muuttuu valmiustilan perusteella (CSS:n avulla), ja valmiit tehtävät erotetaan visuaalisesti yliviivauksella ja vihreällä taustalla.

## 8. Tehtävien poistaminen (deleteButton.addEventListener('click', () => {...});)

- **Mikä se on:** Jokaisella tehtävällä on "Poista"-painike, joka poistaa tehtävän listasta, kun sitä painetaan.
- **Vaiheet:**
  - Vastaava tehtävä poistetaan tehtävätaulukosta käyttämällä tasks.splice(index, 1) -metodia.
  - Tehtävälista renderoidaan uudelleen kutsumalla renderTasks().
  - Päivitetty tehtävälista tallennetaan paikalliseen tallennustilaan saveTasks()-metodilla.
- **Tarkoitus:** Tämä funktio mahdollistaa käyttäjien poistaa tehtäviä listasta painamalla "Poista"-painiketta.
- **Tärkeä yksityiskohta:** Splice()-metodi muokkaa tehtävätaulukkoa poistamalla tehtävän määritellyssä kohdassa, ja päivitetty taulukko tallennetaan paikalliseen tallennustilaan.

## 9. Alustava tehtävien näyttäminen (renderTasks();)

- **Mikä se on:** Tämä rivi kutsutaan sivun latautuessa näyttämään paikalliseen tallennustilaan tallennetut tehtävät.
- **Tarkoitus:** Se varmistaa, että sovellus latautuu aiemmin tallennettujen tehtävien kanssa, tehden tehtävälistasta pysyvän istuntojen välillä.
- **Tärkeä yksityiskohta:** Ilman tätä alustavaa renderTasks()-kutsua tehtävälista olisi tyhjä, kun käyttäjä lataa sivun uudelleen, vaikka tehtäviä olisi aiemmin tallennettu.
