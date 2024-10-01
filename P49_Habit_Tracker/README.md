# Nettisivu: https://keudaope.github.io/JSProjekteja/P49_Habit_Tracker

# Johdanto

**Habit Tracker** on hyödyllinen sovellus, joka auttaa käyttäjiä seuraamaan ja ylläpitämään positiivisia päivittäisiä tapoja. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla, kun he oppivat käsittelemään käyttäjän syötteitä, päivittämään DOM:ia dynaamisesti ja tallentamaan tietoja paikalliseen tallennustilaan (local storage) pysyvyyden takaamiseksi. Käyttäjät voivat lisätä tapoja, merkitä ne suoritetuiksi päivittäin ja nähdä edistymisensä ajan mittaan.

# HTML-selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on**: DOCTYPE-määritys kertoo selaimelle, että sivu tulee renderöidä HTML5-standardien mukaisesti.
- **Tarkoitus**: Varmistaa, että modernit selaimet tulkitsevat sivun HTML5-standardien mukaisesti, mikä on tärkeää monien ominaisuuksien ja yhtenäisen renderöintikokemuksen kannalta.
- **Tärkeä yksityiskohta**: DOCTYPE-määritys on aina sisällytettävä, jotta voidaan välttää mahdolliset yhteensopivuusongelmat selainten välillä.

## 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on**: Tämä tagi kietoo kaiken sivun sisällön. lang="en" -attribuutti määrittelee, että sisällön kieli on englanti.
- **Tarkoitus**: lang-attribuutti on tärkeä saavutettavuustyökaluille ja SEO:lle, koska se auttaa ruudunlukijoita ja hakukoneita ymmärtämään sisällön kielen.
- **Tärkeä yksityiskohta**: Oikean kieliattribuutin sisällyttäminen parantaa saavutettavuutta ja hakukoneoptimointia.

## 3. Head Section (<code><</code>head>):

- **Mikä se on**: <code><</code>head> -osio sisältää metadataa, ulkoisia resursseja (kuten CSS ja JavaScript) sekä muuta näkymätöntä sisältöä, joka on välttämätöntä sivun renderöimiseksi oikein.
- **Tarkoitus**: Määrittelee metatiedot ja lataa ulkoisia resursseja ennen kuin visuaalinen sisältö renderöidään.
- **Tärkeät yksityiskohdat**:
  - Meta Charset (<code><</code>meta charset="UTF-8">): Määrittää merkkikoodaukseksi UTF-8, varmistaen, että sivu voi näyttää minkä tahansa merkin, symbolin tai emojin oikein.
  - Viewport Meta Tag (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">): Varmistaa, että sivu on responsiivinen ja skaalautuu oikein eri laitteilla ja näyttökoilla, erityisesti mobiililaitteilla.
  - Title Tag (<code><</code>title>Habit Tracker</code></title>): Määrittää verkkosivun otsikon, joka näkyy selaimen välilehdessä ja auttaa käyttäjiä tunnistamaan sivun.
  - CSS Link (<code><</code>link rel="stylesheet" href="styles.css">): Linkittää ulkoiseen CSS-tiedostoon, joka tyylittää sivun, pitäen rakenteen ja tyylit erillään ylläpidettävyyden vuoksi.

## 4. Body Tag (<code><</code>body>):

- **Mikä se on**: <code><</code>body> -tagi sisältää kaiken sivulla näkyvän sisällön. Kaikki, mitä käyttäjät näkevät ja joiden kanssa he ovat vuorovaikutuksessa, sijoitetaan body-osioon.
- **Tarkoitus**: Määrittää sovelluksen pääasiallisen rakenteen ja layoutin, sisältäen kaikki visuaaliset ja interaktiiviset elementit.
- **Tärkeä yksityiskohta**: Tyylit ja skriptit kohdistuvat body-osan sisällä oleviin elementteihin, mikä tekee sivusta interaktiivisen ja visuaalisesti houkuttelevan.

## 5. Main Container Div (<code><</code>div class="container">):

- **Mikä se on**: <code><</code>div> -elementti, jolla on container-luokka, ympäröi sovelluksen pääkomponentit, mukaan lukien otsikon, syötekentän, painikkeen ja tapa-listan.
- **Tarkoitus**: Se auttaa jäsentämään layoutia ryhmittelemällä kaikki elementit yhteen tyylitystä ja layoutia varten. Container tarjoaa rakenteellisen, korttimaisen ulkoasun.
- **Tärkeä yksityiskohta**: Soveltamalla tyylejä containeriin sovelluksesta tulee visuaalisesti yhtenäinen ja hyvin jäsennelty, selkeillä marginaaleilla ja täytöillä, jotka parantavat luettavuutta.

## 6. Heading Tag (<code><</code>h1>Habit Tracker<code><</code>/h1>):

- **Mikä se on**: <code><</code>h1> on sivun ylin otsikkotaso, joka näyttää otsikon "Habit Tracker".
- **Tarkoitus**: Se tarjoaa selkeän otsikon, joka auttaa käyttäjiä ymmärtämään sovelluksen tarkoituksen heti.
- **Tärkeä yksityiskohta**: <code><</code>h1> -tagi on tärkeä sekä saavutettavuuden että hakukoneoptimoinnin kannalta, sillä se ilmaisee sivun tärkeimmän otsikon.

## 7. Input Field (<code><</code>input type="text" id="habit-input" placeholder="Enter a new habit">):

- **Mikä se on**: <code><</code>input> -elementti, jonka avulla käyttäjä voi kirjoittaa uuden tavan nimen. id-attribuutti mahdollistaa JavaScriptin vuorovaikutuksen elementin kanssa.
- **Tarkoitus**: Sen avulla käyttäjät voivat syöttää tietoja (uuden tavan), joita käytetään merkinnän luomiseen tapa-seuraajaan.
- **Tärkeä yksityiskohta**: placeholder="Enter a new habit" -attribuutti antaa käyttäjille hyödyllisen kehotteen, joka kertoo, mitä heidän tulisi syöttää.

## 8. Add Habit Button (<code><</code>button id="add-habit-button">Add Habit<code><</code>/button>):

- **Mikä se on**: <code><</code>button> -elementti, joka, kun sitä klikataan, käynnistää uuden tavan lisäämisen.
- **Tarkoitus**: Tämä painike vuorovaikuttaa JavaScriptin kanssa lisätäkseen syötekenttään kirjoitetun tavan seurattavien tapojen listaan.
- **Tärkeä yksityiskohta**: id mahdollistaa sen, että JavaScript voi viitata painikkeeseen ja lisätä toiminnallisuuden (tapahtumankuuntelijat) siihen. Ilman sitä tapojen lisääminen ei olisi mahdollista.

## 9. Habits Div (<code><</code>div class="habits" id="habits"><code><</code>/div>):

- **Mikä se on**: <code><</code>div> -elementti, johon tapa-lista dynaamisesti näytetään.
- **Tarkoitus**: Se toimii säiliönä, joka pitää kaikki tavat, jotka luodaan ja renderöidään JavaScriptin avulla.
- **Tärkeä yksityiskohta**: id="habits" mahdollistaa sen, että JavaScript voi kohdistaa tämän divin dynaamiseen renderöintiin ja tapa-listan manipulointiin.

## 10. JavaScript Script Tag (<code><</code>script src="script.js"></script>):

- **Mikä se on**: <code><</code>script> -tagi, joka linkittää ulkoiseen JavaScript-tiedostoon.
- **Tarkoitus**: Se sisältää sovelluksen logiikan, kuten tapojen lisäämisen ja seuraamisen, DOMin manipuloinnin ja vuorovaikutuksen paikallisen tallennustilan kanssa.
- **Tärkeä yksityiskohta**: Sijoittamalla <code><</code>script> -tagi body-osan loppuun varmistetaan, että HTML on täysin ladattu ennen JavaScriptin suorittamista.

# CSS selitys

## 1. Body Styling (body):

- **Mikä se on**: Body-sääntö määrittää globaalit tyylit, jotka koskevat koko verkkosivua.
- **Tärkeät ominaisuudet**:
  - **font-family: Arial, sans-serif**: Sovelluksessa käytetään Arial-fonttia, jossa sans-serif toimii varafonttina paremman luettavuuden vuoksi.
  - **background-color: #f0f0f0**: Asettaa vaalean harmaan taustavärin luomaan kontrastin valkoisen containerin kanssa.
  - **display: flex**: Käyttää Flexboxia luomaan joustavan asettelun, jossa elementit voidaan helposti keskittää.
  - **flex-direction: column**: Pinoaa elementit pystysuunnassa varmistaen, että asettelu etenee luonnollisesti.
  - **align-items: center**: Keskittää sisällön vaakasuunnassa sivulle.
  - **padding: 20px**: Lisää tilaa sivun reunoille estäen elementtien osumisen selainikkunan reunoihin.
  - **margin: 0**: Poistaa selaimen oletusmarginaalit.
- **Tarkoitus**: Nämä tyylit varmistavat, että sisältö on keskitetty ja asettelu on joustava, säilyttäen siistin ja minimalistisen ilmeen.

## 2. Container Styling (.container):

- **Mikä se on**: Tyylittää pääsäiliön, joka sisältää kaiken habit-seuraajan sisällön.
- **Tärkeät ominaisuudet**:
  - **background: white**: Antaa säiliölle valkoisen taustavärin, luoden kontrastin harmaan sivutaustan kanssa.
  - **padding: 20px**: Lisää tilaa säiliön sisälle varmistaen, ettei sisältö kosketa reunoja.
  - **border-radius: 8px**: Pyöristää säiliön kulmat modernin ja pehmeän ilmeen saavuttamiseksi.
  - **box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)**: Lisää hienovaraisen varjon säiliön ympärille luoden syvyyden tunteen.
  - **text-align: center**: Keskittää tekstin säiliön sisällä.
  - **width: 400px**: Asettaa kiinteän leveyden säiliölle, mikä tekee siitä yhtenäisen eri näyttökoissa.
  - **max-width: 100%**: Varmistaa, ettei säiliö ylitä näytön leveyttä pienemmillä näytöillä, tehden sovelluksesta responsiivisen.
- **Tarkoitus**: Tämä tyyli luo korttimaisen vaikutelman, antaen sovellukselle siistin ja jäsennellyn asettelun, jossa keskitetty huomio on selkeästi esillä.

## 3. Heading Styling (h1):

- **Mikä se on**: Määrittelee sovelluksen pääotsikon tyylit.
- **Tärkeät ominaisuudet**:
  - **margin-bottom: 20px**: Lisää tilaa otsikon alle erottamaan sen muista elementeistä.
- **Tarkoitus**: Varmistaa, että otsikko erottuu selkeästi syötekentästä ja muusta sisällöstä, parantaen luettavuutta ja järjestystä.

## 4. Input Field Styling (input[type="text"]):

- **Mikä se on**: Tyylittää syötekentän, johon käyttäjät syöttävät tapansa.
- **Tärkeät ominaisuudet**:
  - **padding: 10px**: Lisää tilaa syötekentän sisälle, jotta siihen on helpompi tarttua.
  - **margin-bottom: 10px**: Lisää tilaa syötekentän alle, estäen sen osumisen liian lähelle painiketta.
  - **width: calc(100% - 22px)**: Varmistaa, että syötekenttä vie suurimman osan säiliön leveydestä, mutta jättää tilaa täytteelle ja reunoille.
  - **border: 1px solid #ccc**: Lisää vaalean harmaan reunuksen syötekentän ympärille määrittelemään sen paremmin.
  - **border-radius: 4px**: Pyöristää syötekentän kulmat modernin ulkoasun saavuttamiseksi.
- **Tarkoitus**: Tarjoaa selkeän ja helppokäyttöisen syötekentän, jossa on riittävästi täytettä ja tilaa mukavuuden vuoksi.

## 5. Button Styling (button):

- **Mikä se on**: Tyylittää painikkeen, jota käyttäjät painavat lisätäkseen uuden tavan.
- **Tärkeät ominaisuudet**:
  - **padding: 10px 20px**: Varmistaa, että painiketta on helppo painaa tekemällä siitä riittävän suuri.
  - **border: none**: Poistaa oletuspainikkeen reunuksen siistimmän ilmeen saavuttamiseksi.
  - **background-color: #007bff**: Asettaa painikkeen väriksi elävän sinisen, joka erottuu päätoimintopainikkeena.
  - **color: white**: Tekee painikkeen tekstistä helposti luettavan sinistä taustaa vasten.
  - **border-radius: 4px**: Pyöristää painikkeen kulmat, jotta ne sopivat yhteen muun sovelluksen suunnittelun kanssa.
  - **cursor: pointer**: Muuttaa kursorin osoittimeksi, kun painikkeen päällä on hiiri, mikä ilmaisee sen olevan klikattava.
- **Tarkoitus**: Luo interaktiivisen ja visuaalisesti erottuvan painikkeen, joka rohkaisee käyttäjiä lisäämään tapoja seuraajaan.

## 6. Button Hover Effect (button:hover):

- **Mikä se on**: Määrittelee painikkeen hover-tilan.
- **Tärkeät ominaisuudet**:
  - **background-color: #0056b3**: Muuttaa painikkeen taustavärin tummemmaksi siniseksi, kun sitä hoveroidaan, tarjoten visuaalista palautetta.
- **Tarkoitus**: Hover-efekti parantaa sovelluksen interaktiivisuutta, tehden painikkeesta tuntevan responsiivisemmaksi käyttäjän toimiin.

## 7. Habits Container (.habits):

- **Mikä se on**: Tyylittää div-elementin, joka sisältää tapa-listan.
- **Tärkeät ominaisuudet**:
  - **margin-top: 20px**: Lisää tilaa tapa-listan yläpuolelle erottaakseen sen syötekentästä ja painikkeesta.
  - **text-align: left**: Tasailee tapa-tekstit vasemmalle parantaen luettavuutta.
- **Tarkoitus**: Tarjoaa rakenteen ja tilaa tapa-listalle varmistaen, että tavat ovat helposti luettavissa ja hyvin järjestettyjä.

## 8. Individual Habit Styling (.habit):

- **Mikä se on**: Tyylittää jokaisen yksittäisen tavan listassa.
- **Tärkeät ominaisuudet**:
  - **display: flex**: Käyttää Flexboxia asettelemaan tavan nimi ja päivät riviin.
  - **justify-content: space-between**: Jakaa tilan tasaisesti tavan nimen ja päivien seurannan välillä.
  - **align-items: center**: Varmistaa, että tavan nimi ja päivät ovat pystysuorassa linjassa.
  - **padding: 10px**: Lisää tilaa tavatyyliin, tehden siitä mukavamman lukea ja olla vuorovaikutuksessa.
  - **border: 1px solid #ccc**: Lisää kevyen reunuksen jokaisen tavan ympärille erottaen yksittäiset tavat toisistaan.
  - **border-radius: 4px**: Pyöristää jokaisen tavan kulmat pehmeämmän ilmeen saavuttamiseksi.
  - **margin-bottom: 10px**: Lisää tilaa tapojen väliin estäen niiden liian lähekkäisyyden.
- **Tarkoitus**: Luo rakenteellisen, korttimaisen ilmeen jokaiselle tavalle selkeällä tilankäytöllä ja järjestyksellä, mikä tekee listasta visuaalisesti houkuttelevan.

## 9. Habit Name Styling (.habit-name):

- **Mikä se on**: Tyylittää tekstin, joka näyttää kunkin tavan nimen.
- **Tärkeät ominaisuudet**:
  - **flex-grow: 1**: Varmistaa, että tavan nimi vie niin paljon vaakasuoraa tilaa kuin tarvitaan, työntäen päivien seurannan oikealle.
- **Tarkoitus**: Varmistaa, että tavan nimi näkyy selkeästi ja sillä on riittävästi tilaa, jotta pidemmätkin nimet mahtuvat tarvittaessa.

## 10. Days Container Styling (.days):

- **Mikä se on**: Tyylittää säiliön, joka sisältää päivien seurannan kullekin tavalle.
- **Tärkeät ominaisuudet**:
  - **display: flex**: Käyttää Flexboxia näyttämään päivät pieninä ympyröinä rivissä.
  - **gap: 5px**: Lisää tilaa jokaisen päiväympyrän väliin, jotta ne erottuvat visuaalisesti.
- **Tarkoitus**: Varmistaa, että päivät ovat siististi rivissä ja helposti vuorovaikutettavissa, tarjoten selkeän visuaalisen seurannan tavalle.

## 11. Day Circle Styling (.day):

- **Mikä se on**: Tyylittää jokaisen yksittäisen päivän tavan seurannassa.
- **Tärkeät ominaisuudet**:
  - **width: 20px; height: 20px**: Luo pienen, pyöreän elementin, joka edustaa kutakin päivää.
  - **border-radius: 50%**: Muuttaa päivän ympyräksi.
  - **background-color: #e0e0e0**: Antaa päivän ympyrälle neutraalin harmaan taustavärin oletuksena.
  - **cursor: pointer**: Muuttaa kursorin osoittimeksi, mikä ilmaisee, että ympyröitä voi klikata.
- **Tarkoitus**: Päiväympyrät toimivat interaktiivisina elementteinä, joiden avulla käyttäjät voivat seurata edistymistään merkitsemällä päivät tehdyiksi tai tekemättömiksi.

## 12. Completed Day Styling (.day.completed):

- **Mikä se on**: Määrittelee tehdyn päivän ulkoasun tavan seurannassa.
- **Tärkeät ominaisuudet**:
  - **background-color: #007bff**: Muuttaa päivän ympyrän taustavärin siniseksi, mikä ilmaisee, että päivä on tehty.
- **Tarkoitus**: Tarjoaa visuaalista palautetta käyttäjille, kun he merkitsevät päivän tehdyksi, erottaen tehdyt päivät selkeästi tekemättömistä.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...});)

- **Mikä se on**: Tämä tapahtumankuuntelija varmistaa, että JavaScript-koodi suoritetaan vasta, kun koko HTML-dokumentti on ladattu ja jäsennelty.
- **Tarkoitus**: Se varmistaa, että kaikki DOM-elementit, kuten napit ja syötekentät, ovat käytettävissä ennen kuin skripti alkaa käsitellä niitä.
- **Tärkeä yksityiskohta**: Tämä estää virheet, jotka johtuvat DOM-elementtien manipuloinnista ennen niiden latautumista.

## 2. Variables for DOM Elements (const habitInput = document.getElementById('habit-input');)

- **Mikä se on**: Muuttujat, kuten `habitInput`, `addHabitButton` ja `habitsDiv`, tallentavat viittaukset tärkeisiin DOM-elementteihin käyttäen `document.getElementById()`.
- **Tarkoitus**: Nämä viittaukset mahdollistavat elementtien helpon käsittelyn (kuten tapojen lisääminen tai edistymisen seuraaminen).
- **Tärkeä yksityiskohta**: Nämä muuttujat tekevät koodista siistimpää ja helpommin luettavaa osoittamalla suoraan tarvittaviin elementteihin.

## 3. Fetching Habits from Local Storage (let habits = JSON.parse(localStorage.getItem('habits')) || [];)

- **Mikä se on**: Tämä rivi hakee aiemmin tallennetut tavat selaimen localStoragesta. Jos tapoja ei löydy, alustetaan tyhjä taulukko.
- **Tarkoitus**: Tämä varmistaa, että sovellus voi ladata aiemmin tallennetut tavat, kun sivu ladataan uudelleen, ja seurata käyttäjän edistymistä.
- **Tärkeä yksityiskohta**: Koska localStorage tallentaa tiedot merkkijonoina, `JSON.parse()` muuntaa tiedot takaisin taulukoksi.

## 4. Saving Habits to Local Storage (function saveHabits() {...})

- **Mikä se on**: `saveHabits`-funktio muuntaa tapataulukon merkkijonoksi käyttäen `JSON.stringify()`-metodia ja tallentaa sen localStorageen.
- **Tarkoitus**: Tämä mahdollistaa sovelluksen tallentaa tiedot sivun latausten välissä, varmistaen, että lisätyt tavat tai edistyminen säilyvät.
- **Tärkeä yksityiskohta**: Tallentamalla tavat localStorageen, sovellus varmistaa, että käyttäjät löytävät tietonsa tallessa, kun he palaavat sivulle.

## 5. Rendering the Habits List (function renderHabits() {...})

- **Mikä se on**: Tämä funktio käy läpi tapataulukon ja generoi dynaamisesti HTML:n jokaiselle tavalle ja sen vastaavalle päiväseurannalle.
- **Vaiheet**:
  - Tyhjentää nykyisen tapalistan estääkseen kaksoiskappaleet.
  - Luo uuden `div`-elementin jokaiselle tavalle, näyttäen sen nimen ja seurannan päiville.
  - Lisää tapahtumankuuntelijat päiville, jotta niiden tila voidaan merkitä suoritetuksi.
- **Tarkoitus**: Päivittää visuaalisesti sivun, jotta käyttäjät voivat nähdä ja käsitellä tapojaan.
- **Tärkeä yksityiskohta**: Funktio varmistaa, että kaikki tavat renderöidään oikeassa järjestyksessä ja että käyttöliittymä pysyy synkronoituna datan kanssa.

## 6. Toggling Day Completion (document.querySelectorAll('.day').forEach(day => {...});)

- **Mikä se on**: Tapahtumankuuntelijat lisätään jokaiselle päiväelementille, jolloin käyttäjät voivat merkitä päivät suoritetuiksi tai suorittamattomiksi.
- **Vaiheet**:
  - Funktio hakee `habitIndex`- ja `dayIndex`-arvot elementin data-attribuuteista.
  - Se kytkee valitun päivän tilan päälle tai pois päältä.
  - Kutsuu `saveHabits()`- ja `renderHabits()`-funktioita päivittääkseen käyttöliittymän ja tallentaakseen muutokset.
- **Tarkoitus**: Mahdollistaa käyttäjien seurata päivittäistä edistymistään merkitsemällä päivät suoritetuiksi tai suorittamattomiksi.
- **Tärkeä yksityiskohta**: Tämä vuorovaikutus on tärkeää tapojen seurannassa, tarjoten käyttäjille välitöntä palautetta heidän edistymisestään.

## 7. Adding a New Habit (addHabitButton.addEventListener('click', () => {...});)

- **Mikä se on**: Tämä tapahtumankuuntelija aktivoituu, kun käyttäjä napsauttaa "Lisää tapa" -painiketta.
- **Vaiheet**:
  - Hakee ja poistaa ylimääräiset välilyönnit syötekentän arvosta.
  - Luo uuden tapaobjektin, jossa on nimi ja taulukko seitsemästä päivästä (kaikki asetettu false-arvoon aluksi).
  - Lisää uuden tavan tapataulukkoon, tallentaa sen localStorageen ja renderöi tapalistan uudelleen.
- **Tarkoitus**: Tämä toiminto antaa käyttäjille mahdollisuuden lisätä uusia tapoja seurantaan, päivittäen sovelluksen tilan dynaamisesti.
- **Tärkeä yksityiskohta**: Funktio estää tyhjien tapojen lisäämisen validoimalla syötteen ennen uuden tavan luomista.

## 8. Rendering and Saving Habits (renderHabits() and saveHabits())

- **Mikä se on**: Nämä funktiot toimivat yhdessä näyttääkseen tapalistan sivulla ja tallentaakseen kaikki tehdyt muutokset localStorageen.
- **Vaiheet**:
  - `renderHabits()` päivittää käyttöliittymän, näyttäen nykyisen tavanseurannan tilan.
  - `saveHabits()` varmistaa, että kaikki päivitykset (kuten tapojen lisääminen tai päivien merkitseminen) tallennetaan ja säilyvät sivun latausten välillä.
- **Tarkoitus**: Nämä funktiot pitävät sovelluksen tiedot yhdenmukaisina, varmistaen, että käyttäjät voivat käsitellä tapojaan ja tallentaa edistymisensä.
- **Tärkeä yksityiskohta**: Nämä ydintoiminnot ylläpitävät sovelluksen eheyttä, pitäen käyttöliittymän synkronoituna datan kanssa ja varmistaen, että mitään ei katoa istuntojen välillä.
