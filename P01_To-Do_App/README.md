# Nettisivu: https://keudaope.github.io/JSProjekteja/P01_To-Do_App/

## Johdanto

Tehtävälista-sovellus on yksinkertainen mutta tehokas työkalu tehtävien hallintaan ja järjestyksessä pysymiseen. Tämä sovellus mahdollistaa käyttäjien lisätä, poistaa ja merkitä tehtäviä suoritetuiksi. Se on täydellinen projekti aloittelijoille oppia JavaScriptin, HTMLn ja CSS:n perusteet, sillä se kattaa keskeisiä käsitteitä, kuten tapahtumien käsittelyn, DOM-manipulaation ja tyylittelyn.

# HTML Selitys

## 1. &lt;!DOCTYPE html>

- **Mikä se on**: Tämä ilmoitus on ensimmäinen rivi missä tahansa HTML-dokumentissa.
- **Tarkoitus**: Se kertoo selaimelle, mikä HTML-versio dokumentissa on käytössä. Tässä tapauksessa käytämme HTML5:ta, joka on uusin standardi.
- **Tärkeys**: Se auttaa selainta renderöimään sivun oikein ja varmistaa yhteensopivuuden eri selainten välillä.

## 2. &lt;html lang="en">

- **Mikä se on**: &lt;html>-elementti on juurielementti, joka sisältää kaiken muun HTML-sisällön.
- **lang="en"**: Tämä attribuutti määrittää dokumentin kielen. Tässä tapauksessa se on englanti ("en").
- **Tärkeys**: Kielen asettaminen on tärkeää saavutettavuustyökaluille, kuten ruudunlukijoille, ja se parantaa hakukoneoptimointia (SEO).

## 3. &lt;head>

- **Mikä se on**: &lt;head>-osio sisältää metadataa dokumentista (tietoa tiedosta). Se ei ole käyttäjille näkyvää.
- **Tarkoitus**: &lt;head>-sisältö antaa tietoja selaimelle, hakukoneille ja muille teknologioille siitä, miten dokumentti tulisi käsitellä.

## 4. &lt;meta charset="UTF-8">

- **Mikä se on**: Tämä rivi määrittää dokumentin merkistökoodauksen.
- **Tarkoitus**: UTF-8 tukee laajaa valikoimaa merkkejä, mukaan lukien erikoismerkit, symbolit ja muut kuin englanninkieliset kielet.
- **Tärkeys**: Ilman oikeaa merkistökoodausta teksti ei välttämättä näy oikein, erityisesti erikoismerkkien kohdalla.

## 5. &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">

- **Mikä se on**: Tämä meta-tagi on tärkeä verkkosivun responsiivisuuden varmistamiseksi.
- **Tarkoitus**: Se varmistaa, että sivu skaalautuu oikein mobiililaitteilla.
- **Attribuutit**:
  - **width=device-width**: Sivun leveys vastaa laitteen näytön leveyttä.
  - **initial-scale=1.0**: Tämä asettaa sivun alkutason zoomauksen 100 %
- **Tärkeys**: Ilman tätä verkkosivusi ei välttämättä näy oikein pienemmillä näytöillä, kuten älypuhelimilla tai tableteilla.

## 6. &lt;title>To-Do List App&lt;/title>

- **Mikä se on**: &lt;title>-elementti asettaa sivun otsikon, joka näkyy selaimen välilehdessä.
- **Tarkoitus**: Tämä antaa käyttäjille ja hakukoneille tietoa sivun sisällöstä.
- **Tärkeys**: Se parantaa käyttäjäkokemusta ja vaikuttaa hakukoneoptimointiin (SEO).

## 7. &lt;link rel="stylesheet" href="styles.css">

- **Mikä se on**: &lt;link>-elementtiä käytetään linkittämään ulkoisia tiedostoja, kuten CSS-tyylejä tai fontteja, HTML-dokumenttiin.
- **Tarkoitus**: Se linkittää styles.css-tiedoston, joka sisältää sivun kaikki tyylit.
- **Tärkeys**: Tämä erottaa rakenteen (HTML) tyyleistä (CSS), mikä tekee koodista modulaarisemman ja helpommin ylläpidettävän.

## 8. &lt;body>

- **Mikä se on**: &lt;body>-elementti sisältää verkkosivun näkyvän sisällön. Kaikki tämän tunnisteen sisällä oleva sisältö renderöidään käyttäjälle.
- **Tarkoitus**: Kaikki sisältöelementit, kuten teksti, kuvat, lomakkeet jne., tulevat body-osioon.
- **Tärkeys**: Ilman body-tunnistetta selain ei tiedä, mihin sijoittaa verkkosivun pääsisältö.

## 9. &lt;div class="container">

- **Mikä se on**: &lt;div>-elementti on lohkotason kontaineri, jota käytetään elementtien ryhmittelyyn.
- **Tarkoitus**: Tämä erityinen div, jossa on luokka "container", sisältää kaiken sovelluksen näkyvän sisällön. Se tarjoaa alueen, jota voidaan muotoilla tai sijoittaa tarpeen mukaan.
- **Tärkeys**: Elementtien ryhmittely kontainereihin helpottaa asettelua ja muotoilua. Tässä tapauksessa sitä käytetään sisällön keskittämiseen ja muotoiluun sivulla.

## 10. &lt;h1>To-Do List&lt;/h1>

- **Mikä se on**: &lt;h1>-elementtiä käytetään verkkosivun pääotsikolle.
- **Tarkoitus**: Se ilmoittaa sovelluksen otsikon.
- **Tärkeys**: Se parantaa saavutettavuutta ja hakukoneoptimointia (SEO), sillä hakukoneet käyttävät &lt;h1>-elementtiä ymmärtääkseen sivun pääaiheen. Se on myös tärkeä ruudunlukijoille, jotka auttavat näkövammaisia käyttäjiä.

## 11. &lt;form id="todo-form" aria-label="To-Do Form">

- **Mikä se on**: &lt;form>-elementtiä käytetään käyttäjän syötteiden keräämiseen.
- **Tarkoitus**: Tämä lomake antaa käyttäjien lisätä uusia tehtäviä tehtävälistaan.
- **Attribuutit**:
  - **id="todo-form"**: Tämä ainutlaatuinen tunniste mahdollistaa lomakkeen kohdistamisen JavaScriptissä tehtävän lisäämistä varten.
  - **aria-label="To-Do Form"**: Tämä parantaa saavutettavuutta kuvailemalla lomakkeen apuvälineille, kuten ruudunlukijoille.
- **Tärkeys**: Lomakkeen rakenne on tärkeä käyttäjien syötteiden keräämiseksi rakenteellisella tavalla.

## 12. &lt;input type="text" id="todo-input" placeholder="Add a new task" required aria-label="New task input">

- **Mikä se on**: &lt;input>-elementtiä käytetään luomaan syöttökenttä, johon käyttäjät voivat kirjoittaa tehtäviään.
- **Attribuutit**:
  - **type="text"**: Määrittää, että tämä on tekstisyötekenttä.
  - **id="todo-input"**: Ainutlaatuinen tunniste, jota käytetään tyylittelyssä tai JavaScriptin yhteydessä.
  - **placeholder="Add a new task"**: Näyttää ohjetekstin syöttökentässä opastaen käyttäjiä.
  - **required**: Tämä varmistaa, että käyttäjä ei voi lähettää lomaketta ilman, että jotain on syötetty.
  - **aria-label="New task input"**: Parantaa saavutettavuutta kuvailemalla syöttökentän apuvälineille.
- **Tärkeys**: Syöttökentät ovat olennaisia käyttäjän vuorovaikutuksen ja tietojen keräämisen kannalta.

## 13. &lt;button type="submit" aria-label="Add task button">Add&lt;/button>

- **Mikä se on**: &lt;button>-elementti luo napsautettavan painikkeen.
- **Tarkoitus**: Kun sitä napsautetaan, tämä painike lähettää lomakkeen, mikä käynnistää JavaScriptin, joka lisää tehtävän listalle.
- **Attribuutit**:
  - **type="submit"**: Ilmoittaa selaimelle, että tämä painike on tarkoitettu lomakkeen lähettämiseen.
  - **aria-label="Add task button"**: Kuvailee painikkeen tarkoituksen apuvälineille, parantaen saavutettavuutta.
- **Tärkeys**: Painikkeet ovat tärkeitä toimintoihin, kuten tietojen lähettämiseen.

## 14. &lt;ul id="todo-list" aria-label="To-Do List">

- **Mikä se on**: &lt;ul>-elementti luo järjestämättömän luettelon (luettelo, jossa on luettelomerkit).
- **Tarkoitus**: Tämä luettelo näyttää dynaamisesti kaikki käyttäjän lisäämät tehtävät.
- **Attribuutit**:
  - **id="todo-list"**: Tämä ainutlaatuinen tunniste mahdollistaa luettelon kohdistamisen JavaScriptillä tehtävien lisäämistä ja poistamista varten.
  - **aria-label="To-Do List"**: Kuvailee luettelon ruudunlukijoille, parantaen saavutettavuutta.
- **Tärkeys**: Luettelot ovat erinomainen tapa jäsentää ja näyttää sisältöä, kuten tehtäviä. Tässä tapauksessa &lt;ul>-elementtiä päivitetään dynaamisesti JavaScriptin avulla.

## 15. &lt;script src="app.js">&lt;/script>

- **Mikä se on**: &lt;script>-elementtiä käytetään linkittämään ulkoisia JavaScript-tiedostoja.
- **Tarkoitus**: Tämä rivi yhdistää HTML:n app.js-tiedostoon, joka sisältää logiikan tehtävälistan käsittelyyn (kuten tehtävien lisääminen ja poistaminen).
- **Tärkeys**: JavaScriptin linkittäminen body-elementin loppuun varmistaa, että skripti latautuu vasta sen jälkeen, kun sisältö on renderöity, mikä estää virheet, jotka johtuvat puuttuvista elementeistä, kun JavaScript yrittää käyttää niitä.

# CSS Selitys

## 1. body

- **Mikä se on**: Body-tagi tyylittelee koko sivun.
- **Keskeiset ominaisuudet**:
  - **font-family: Arial, sans-serif;**: Asettaa sivun fontiksi Arialin. Sans-serif on varafontti, jos Arial ei ole saatavilla.
  - **background: linear-gradient(135deg, #74ebd5, #acb6e5);**: Lisää liukuvärin taustalle, joka vaihtuu vaalean tealin (#74ebd5) ja vaalean violetin (#acb6e5) välillä. Liukuvärit ovat visuaalisesti miellyttäviä ja antavat modernin ilmeen.
  - **display: flex; justify-content: center; align-items: center;**: Flexboxia käytetään keskittämään sisältö sekä vaaka- että pystysuunnassa.
  - **height: 100vh;**: Asettaa body-elementin korkeudeksi koko näkymäkorkeuden (100% ruudun korkeudesta).
  - **margin: 0;**: Poistaa kaikki oletusmarginaalit bodyn ympäriltä, jotta sisältö sopii täydellisesti ilman ylimääräistä tilaa reunoilla.

## 2. .container

- **Mikä se on**: Tämä luokka soveltaa tyylejä pääkontaineriin, joka sisältää tehtävälistan.
- **Keskeiset ominaisuudet**:
  - **background: white;**: Kontainerilla on valkoinen tausta, joka kontrastoi liukuväritaustaa vasten.
  - **padding: 30px;**: Lisää sisäistä tilaa (padding) sisällön ja kontainerin reunojen välille.
  - **border-radius: 10px;**: Pyöristää kontainerin kulmat antaen modernin, pehmeän ilmeen.
  - **box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);**: Lisää varjon kontainerin ympärille, antaen hienovaraisen 3D-efektin. Varjot auttavat tekemään elementit visuaalisesti erottuviksi taustasta.
  - **transition: all 0.3s ease-in-out;**: Tämä mahdollistaa kontainerin sujuvan siirtymisen muutoksien, kuten hover-efektien, aikana.

## 3. .container:hover

- **Mikä se on**: Tämä tyyli soveltuu, kun käyttäjä vie hiiren kontainerin päälle.
- **Keskeinen ominaisuus**:
  - **transform: scale(1.05);**: Suurentaa (skaalaa) kontaineria hieman, 5 %, kun hiiri on sen päällä, antaen vuorovaikutuksen ja keskittymisen tunteen.

## 4. input[type="text"]

- **Mikä se on**: Tekstisyötteiden tyylit, joissa käyttäjät kirjoittavat uusia tehtäviä.
- **Keskeiset ominaisuudet**:
  - **flex: 1;**: Tekee syöttökentästä joustavan täyttämään käytettävissä olevan tilan kontainerissa (lomake).
  - **padding: 12px;**: Lisää tilaa syötteen sisälle, tehden tekstistä helpommin luettavan.
  - **border: 1px solid #ccc;**: Lisää vaaleanharmaan reunuksen syöttökentälle.
  - **border-radius: 4px;:** Pyöristää syöttökentän kulmia hieman, jotta tyyli vastaa kokonaisilmettä.
  - **box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);**: Lisää hienovaraisen varjon syötteen ympärille, luoden lievän 3D-efektin.

## 5. input[type="text"]:focus

- **Mikä se on**: Syöttökentän tyylit, kun se on aktiivinen (eli käyttäjä klikkaa sitä tai siirtyy siihen tab-painikkeella).
- **Keskeinen ominaisuus**:
  - **border-color: #28a745;**: Muuttaa reunuksen värin vihreäksi, kun syöte on aktiivinen. Tämä antaa visuaalista palautetta siitä, että kenttä on aktiivinen.

## 6. button

- **Mikä se on**: Lähetä-painikkeen tyylit.
- **Keskeiset ominaisuudet**:
  - **padding: 12px 24px;**: Lisää sisäistä tilaa (padding) tehden painikkeesta tarpeeksi suuren, jotta se on helppo klikata.
  - **border: none;**: Poistaa oletuspainikkeen reunuksen.
  - **background-color: #28a745;**: Asettaa painikkeen taustaväriksi vihreän, mikä viestii positiivisesta toiminnasta, kuten tehtävän lisäämisestä.
  - **color: white;**: Tekee painikkeen tekstistä valkoisen kontrastin luomiseksi.
  - **border-radius: 4px;**: Pyöristää painikkeen kulmat hieman.
  - **cursor: pointer;**: Vaihtaa osoittimen sormeksi, kun hiiri on painikkeen päällä, viestien, että se on klikattavissa.

## 7. Button:hover

- **Mikä se on**: Painikkeen tyylit, kun käyttäjä vie hiiren sen päälle.
- **Keskeinen ominaisuus**:
  - **background-color: #218838;**: Tummentaa vihreää taustaväriä hover-tilassa antaen visuaalista palautetta siitä, että painike on interaktiivinen.

## 8. ul

- **Mikä se on**: Tyylit järjestämättömälle listalle (<ul>), joka sisältää tehtävät.
- **Keskeiset ominaisuudet**:
  - **list-style: none;**: Poistaa luettelomerkinnät listalta.
  - **padding: 0;**: Poistaa oletuspaddingin listalta.
  - **margin-top: 20px;**: Lisää tilaa lomakkeen ja tehtävälistan väliin.

## 9. li

- **Mikä se on**: Yksittäisten listakohteiden (<li>) tyylit, jotka edustavat tehtäviä.
- **Keskeiset ominaisuudet**:
  - **background: #ffffff;**: Asettaa tehtävän taustaväriksi valkoisen kontrastina sivun taustaa vasten.
  - **padding: 12px;**: Lisää tilaa jokaisen tehtävän sisälle parantaen luettavuutta.
  - **border: 1px solid #ddd;**: Lisää kevyen reunuksen tehtävän rajojen määrittämiseksi.
  - **border-radius: 4px;**: Pyöristää jokaisen tehtävän kulmat.
  - **box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);**: Lisää hienovaraisen varjon jokaisen tehtävän ympärille 3D-efektin luomiseksi.
  - **transition: opacity 0.5s ease-in-out;**: Siirtyy sujuvasti tehtävän läpinäkyvyyden muutoksessa, kun tehtäviä lisätään tai poistetaan.

## 10. li:hover

- **Mikä se on**: Tehtävän tyylit, kun käyttäjä vie hiiren sen päälle.
- **Keskeinen ominaisuus**:
  - **box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);**: Syventää varjoa hover-tilassa, jotta tehtävä näyttää interaktiivisemmalta.

## 11. li.completed

- **Mikä se on**: Tyylit tehtäville, jotka on merkitty valmiiksi.
- **Keskeiset ominaisuudet**:
  - **text-decoration: line-through;**: Yliviivaa tehtävän tekstin osoittaen, että se on valmis.
  - **color: #888;**: Muuttaa tekstin värin vaaleanharmaaksi osoittaen, että tehtävä on suoritettu.

## 12. li button

- **Mikä se on**: Tehtävän sisällä olevan poistopainikkeen tyylit.
- **Keskeiset ominaisuudet**:
  - **background: none;**: Poistaa oletustaustan siistimmän ulkoasun saavuttamiseksi.
  - **color: #d9534f;**: Asettaa poistopainikkeen tekstiväriksi punaisen, viestien tuhoavasta toiminnosta.
  - **cursor: pointer;**: Näyttää osoittimen, kun hiiri on poistopainikkeen päällä, viestien, että se on klikattavissa.

## 13. li button:hover

- **Mikä se on**: Poistopainikkeen tyylit, kun käyttäjä vie hiiren sen päälle.
- **Keskeiset ominaisuudet**:
  - **color: white;**: Muuttaa tekstin värin valkoiseksi, kun painike on hover-tilassa.
  - **background-color: #d9534f;**: Lisää punaisen taustavärin painikkeeseen hover-tilassa paremman näkyvyyden saavuttamiseksi.
  - **padding: 5px 10px;:** Lisää painikkeeseen täytettä, jotta se erottuu paremmin hover-tilassa.
  - **border-radius: 4px;**: Pyöristää painikkeen kulmat hieman vastaamaan kokonaismuotoilua.

## 14. li.fade-out

- **Mikä se on**: Tehtävien tyylit niiden häivytyksen aikana (kun ne poistetaan).
- **Keskeiset ominaisuudet**:

  - **opacity: 0;**: Häivyttää tehtävän (muuttaa sen läpinäkyväksi), kun se poistetaan.
  - **transition: opacity 0.5s ease-in-out;**: Siirtyy sujuvasti läpinäkyvyyden muutoksessa 0.5 sekunnin aikana puhtaan häivytysefektin saavuttamiseksi.

# JavaScript Selitys

## 1. document.addEventListener('DOMContentLoaded', ...)

- **Mikä se on**: Tämä koodi varmistaa, että JavaScript suoritetaan vasta sen jälkeen, kun koko verkkosivu (DOM) on ladattu.
- **Tarkoitus**: Se varmistaa, että kaikki HTML-elementit (kuten lomakkeet, syötteet ja listat) ovat saatavilla ennen kuin JavaScript yrittää käsitellä niitä.
- **Tärkeä yksityiskohta**: 'DOMContentLoaded' -tapahtuma laukeaa, kun selain on ladannut HTML:n kokonaan, mikä tarkoittaa, että voit turvallisesti aloittaa elementtien käsittelyn JavaScriptin avulla.

## 2. const todoForm = document.getElementById('todo-form');

- **Mikä se on**: Tämä rivi valitsee lomake-elementin sen ainutlaatuisen id="todo-form"-tunnisteen avulla.
- **Tarkoitus**: Meidän täytyy napata tämä lomake, jotta voimme myöhemmin lisätä siihen toiminnallisuutta, kuten käsitellä käyttäjän tehtävän lähettämistä.
- **Tärkeä yksityiskohta**: document.getElementById('todo-form') antaa meille mahdollisuuden käyttää lomaketta ja olla vuorovaikutuksessa sen kanssa (esim. kuunnella lomakkeen lähetyksiä).

## 3. const todoInput = document.getElementById('todo-input');

- **Mikä se on**: Tämä valitsee syöttökentän, johon käyttäjät kirjoittavat tehtävänsä sen ainutlaatuisen id="todo-input"-tunnisteen avulla.
- **Tarkoitus**: Meidän täytyy napata käyttäjän kirjoittama tehtäväteksti, ja tämä on kenttä, johon teksti syötetään.
- **Tärkeä yksityiskohta**: todoInput.value antaa meille syöttökentässä olevan nykyisen arvon (tehtäväteksti).

## 4. const todoList = document.getElementById('todo-list');

- **Mikä se on**: Tämä valitsee järjestämättömän listan, johon kaikki tehtävät näytetään sen ainutlaatuisen id="todo-list"-tunnisteen avulla.
- **Tarkoitus**: Tarvitsemme viittauksen listaan, koska lisäämme siihen dynaamisesti uusia tehtäviä JavaScriptin avulla.
- **Tärkeä yksityiskohta**: Lisäämme uusia <li>-elementtejä (listakohteita) tähän listaan, kun uusi tehtävä lisätään.

# Lomakkeen lähetyksen käsittely

## 5. todoForm.addEventListener('submit', (event) => { ... })

- **Mikä se on**: Tämä koodi lisää tapahtumankuuntelijan lomakkeeseen, kuunnellen submit-tapahtumaa.
- **Tarkoitus**: Kun käyttäjä lähettää lomakkeen (eli klikkaa "Add"), keskeytämme oletuskäyttäytymisen ja käsittelemme lähetyksen itse.
- **Tärkeä yksityiskohta**: Välitämme funktiota tapahtumankuuntelijalle. Tämän funktion sisällä käsittelemme lomakkeen lähetyksen lisäämällä tehtävän listaan.

## 6. event.preventDefault();

- **Mikä se on**: Tämä estää lomakkeen oletuskäyttäytymisen.
- **Tarkoitus**: Normaalisti lomakkeen lähettäminen päivittäisi sivun. preventDefault() estää tämän, jolloin voimme käsitellä lomakkeen lähetyksen kokonaan JavaScriptillä.
- **Tärkeä yksityiskohta**: Tämä varmistaa, että sivu ei lataudu uudelleen, ja voimme hallita tehtävän lähetystä saumattomasti.

## 7. const newTodoText = todoInput.value.trim();

- **Mikä se on**: Tämä nappaa syöttökentän arvon (tehtävätekstin), poistaa mahdolliset ylimääräiset välilyönnit alusta ja lopusta ja tallentaa sen newTodoText-muuttujaan.
- **Tarkoitus**: Meidän täytyy saada varsinainen tehtäväteksti syöttökentästä lisätäksemme sen listaan.
- **Tärkeä yksityiskohta**: Käyttämällä .trim()-funktiota varmistamme, että tyhjiä välilyöntejä ei lisätä vahingossa tehtävinä.

## 8. if (newTodoText !== '') { ... }

- **Mikä se on**: Tämä tarkistaa, ettei syöttökenttä ole tyhjä.
- **Tarkoitus**: Haluamme lisätä tehtäviä vain, jos syöttökentässä on oikeaa tekstiä. Jos syöte on tyhjä, tehtävää ei lisätä.
- **Tärkeä yksityiskohta**: Tämä estää tyhjien tehtävien lähettämisen ja näyttämisen.

## 9. addTodoItem(newTodoText);

- **Mikä se on**: Tämä kutsuu addTodoItem-funktiota ja välittää sille uuden tehtävätekstin.
- **Tarkoitus**: Tämä on kohta, jossa delegoimme tehtävän lisäämisen logiikan. addTodoItem-funktio hoitaa loput.

## 10. todoInput.value = '';

- **Mikä se on**: Tämä tyhjentää syöttökentän, kun tehtävä on lisätty.
- **Tarkoitus**: Kun käyttäjä lähettää tehtävän, syöttökenttä tyhjennetään, jotta he voivat helposti syöttää uuden tehtävän.
- **Tärkeä yksityiskohta**: Syöttökentän nollaaminen parantaa käyttäjäkokemusta, tehden useiden tehtävien lisäämisestä tehokkaampaa.

## 11. todoInput.focus();

- **Mikä se on**: Tämä palauttaa kohdistuksen takaisin syöttökenttään.
- **Tarkoitus**: Kun tehtävä on lisätty, syöttökenttä aktivoituu automaattisesti, jotta käyttäjä voi alkaa kirjoittaa seuraavaa tehtävää heti.
- **Tärkeä yksityiskohta**: Tämä on pieni parannus käyttäjäkokemukseen, joka tekee sovelluksesta sujuvamman.

# Tehtävän lisääminen

## 12. function addTodoItem(text) { ... }

- **Mikä se on**: Tämä funktio käsittelee uuden tehtävän lisäämisen tehtävälistaan.
- **Tarkoitus**: Tehtävän teksti välitetään argumenttina (text), ja tämä funktio luo uuden listakohteen, lisää siihen toiminnallisuutta ja liittää sen listaan.
- **Tärkeä yksityiskohta**: Tämä on sovelluksen tehtävänlisäystoiminnallisuuden ydin.

## 13. const li = document.createElement('li');

- **Mikä se on**: Tämä luo uuden <li>-elementin (listakohteen) edustamaan tehtävää.
- **Tarkoitus**: Tehtävät esitetään listakohteina, joten meidän täytyy luoda ne dynaamisesti JavaScriptillä.
- **Tärkeä yksityiskohta**: Käyttämällä document.createElement('li') luomme tyhjän listakohteen, jonka täytämme pian tehtävätekstillä.

## 14. li.textContent = text;

- **Mikä se on**: Tämä asettaa uuden <li>-elementin tekstisisällöksi tehtävän tekstin.
- **Tarkoitus**: Tehtäväteksti (text) on se, mitä käyttäjä näkee, ja se täytyy asettaa listakohteen sisään.
- **Tärkeä yksityiskohta**: Tämä varmistaa, että tehtäväteksti näkyy käyttäjälle.

Tehtävän poistaminen

## 15. const deleteButton = document.createElement('button');

- **Mikä se on**: Tämä luo painike-elementin, joka antaa käyttäjälle mahdollisuuden poistaa tehtävän.
- **Tarkoitus**: Jokaisella tehtävällä tulisi olla poistopainike vieressään, jotta käyttäjät voivat poistaa tehtäviä, joita he eivät enää tarvitse.
- **Tärkeä yksityiskohta**: Poistopainike luodaan dynaamisesti jokaiselle tehtävälle.

## 16. deleteButton.textContent = 'Delete';

- **Mikä se on**: Tämä asettaa poistopainikkeen tekstiksi 'Delete'.
- **Tarkoitus**: Käyttäjän täytyy tietää, että klikkaamalla tätä painiketta tehtävä poistetaan.

## 17. deleteButton.addEventListener('click', () => { ... })

- **Mikä se on**: Tämä lisää klikkaustapahtuman kuuntelijan poistopainikkeeseen.
- **Tarkoitus**: Kun käyttäjä klikkaa poistopainiketta, tehtävä pitäisi poistaa listasta.
- **Tärkeä yksityiskohta**: Klikkaustapahtuma käynnistää poistoprosessin.

## 18. li.classList.add('fade-out');

- **Mikä se on**: Tämä lisää fade-out-luokan tehtäväkohteeseen.
- **Tarkoitus**: Tehtävä häivytetään ennen poistamista, mikä luo sujuvan visuaalisen efektin.
- **Tärkeä yksityiskohta**: CSS-luokka fade-out asettaa läpinäkyvyyden nollaan, mikä aiheuttaa tehtävän häipymisen asteittain.

## 19. setTimeout(() => todoList.removeChild(li), 500);

- **Mikä se on**: Tämä poistaa tehtävän listasta 0,5 sekunnin viiveen jälkeen.
- **Tarkoitus**: Odotamme, että häivytysefekti on valmis, ennen kuin poistamme tehtävän DOMista.
