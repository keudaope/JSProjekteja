# Nettisivu: https://keudaope.github.io/JSProjekteja/P41_Simple_Poll_

# Johdanto

**Yksinkertainen kysely** -sovellus antaa käyttäjien luoda ja äänestää kyselyissä. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla, kun he oppivat käsittelemään käyttäjän syötteitä, päivittämään DOM:n dynaamisesti ja hallitsemaan kyselydataa. Käyttäjät voivat luoda kyselyitä, joissa on useita vaihtoehtoja, äänestää suosikkivaihtoehtoaan ja nähdä tulokset reaaliajassa.

# HTML Selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on:** <!DOCTYPE html> -määritys määrittelee dokumentin tyypin ja HTML-version (HTML5).
- **Tarkoitus:** Se varmistaa, että selain tulkitsee HTML-dokumentin nykyaikaisten HTML5-standardien mukaisesti.
- **Tärkeä yksityiskohta:** Sisällytä aina DOCTYPE estääksesi selainyhteensopivuusongelmat.

## 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on:** <code><</code>html> -elementti sisältää kaiken dokumentin sisällön. Atribuutti lang="en" määrittää, että sisältö on englanniksi.
- **Tarkoitus:** Se ilmoittaa selaimille ja avustaville teknologioille (kuten ruudunlukijoille), millä kielellä sivun sisältö on.
- **Tärkeä yksityiskohta:** Kielen määrittäminen parantaa saavutettavuutta ja hakukoneoptimointia (SEO), jolloin sisältö on helpommin saavutettavissa käyttäjille ja hakukoneille.

## 3. Head Tag (<code><</code>head>):

- **Mikä se on:** <code><</code>head> -elementti sisältää metadataa ja linkkejä dokumentin ulkoisiin resursseihin.
- **Tarkoitus:** Se sisältää tietoja, kuten merkistöasetukset, näkymäasetukset sekä linkit ulkoisiin CSS- tai JavaScript-tiedostoihin.
- **Tärkeät yksityiskohdat:**
  - **Merkistö (<code><</code>meta charset="UTF-8">):** Määrittää merkistön UTF-8:ksi, varmistaen, että dokumentti voi näyttää laajan valikoiman merkkejä ja symboleja.
  - **Viewport Meta Tag (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">):** Tekee sivusta responsiivisen mobiililaitteilla, mukauttaen sivun leveyden ruudun kokoon.
  - **Otsikko (<code><</code>title>Simple Poll</code><</code>title>):** Määrittää dokumentin otsikon, joka näkyy selaimen välilehdessä.

## 4. Link to CSS (<code><</code>link rel="stylesheet" href="styles.css">):

- **Mikä se on:** <code><</code>link> -tagi linkittää ulkoisen tyylitiedoston (styles.css) dokumenttiin.
- **Tarkoitus:** Se erottaa rakenteen (HTML) ja esityksen (CSS), pitäen koodin siistinä ja modulaarisena.
- **Tärkeä yksityiskohta:** Tämä käytäntö auttaa hallitsemaan suurempia projekteja, joissa CSS:ää käytetään useissa HTML-tiedostoissa.

## 5. Body Tag (<code><</code>body>):

- **Mikä se on:** <code><</code>body> -elementti sisältää kaiken käyttäjille näkyvän sisällön.
- **Tarkoitus:** Se on pääosa, jossa kaikki interaktiiviset elementit, kuten lomakkeet, painikkeet ja tekstit, sijaitsevat.
- **Tärkeä yksityiskohta:** Kaikki, mihin käyttäjä vuorovaikuttaa verkkosivulla, sijoitetaan <code><</code>body> -tagin sisälle.

## 6. Container Div (<code><</code>div class="container">):

- **Mikä se on:** <code><</code>div> -elementti luokalla container käärii kyselyn sisällön ja tyylitetään CSS:llä.
- **Tarkoitus:** Se ryhmittelee sisällön, tarjoten rakenteen asettelulle ja suunnittelulle CSS:n avulla.
- **Tärkeä yksityiskohta:** Container auttaa hallitsemaan kyselyn leveyttä, täyttöä ja kohdistusta sivulla.

## 7. Heading (<code><</code>h1>Simple Poll</code><</code>h1>):

- **Mikä se on:** Otsikkoelementti, <code><</code>h1>, näyttää sivun pääotsikon.
- **Tarkoitus:** Se tarjoaa selkeän visuaalisen hierarkian määrittäen dokumentin tärkeimmän otsikon.
- **Tärkeä yksityiskohta:** Tämä otsikko kertoo käyttäjille, mitä sovellus tekee ja on yleensä ensimmäinen asia, jonka he näkevät.

## 8. Input Fields (<code><</code>input type="text" id="poll-question" placeholder="Enter poll question">):

- **Mikä se on:** <code><</code>input> -elementti, jota käytetään syöttämään kyselyn kysymys. Seuraavat kentät ovat kyselyn valintoja varten.
- **Tarkoitus:** Tämä syöte antaa käyttäjille mahdollisuuden kirjoittaa kyselyn kysymyksen ja vaihtoehdot.
- **Tärkeä yksityiskohta:** placeholder-attribuutti antaa käyttäjille vihjeen siitä, mitä heidän pitäisi syöttää, ja id auttaa JavaScriptiä pääsemään näihin syötteisiin.

## 9. Add Option Button (<code><</code>button id="add-option">Add Option</code><</code>button>):

- **Mikä se on:** <code><</code>button> -elementti antaa käyttäjille mahdollisuuden lisätä enemmän vaihtoehtoja kyselyyn.
- **Tarkoitus:** Tämä painike toimii yhdessä JavaScriptin kanssa lisätäkseen dynaamisesti uusia syötekenttiä kyselyn vaihtoehdoille.
- **Tärkeä yksityiskohta:** Painikkeelle annetaan id, jotta JavaScript voi liittää toiminnallisuuden uusien vaihtoehtojen lisäämiseksi.

## 10. Create Poll Button (<code><</code>button id="create-poll-button">Create Poll</code><</code>button>):

- **Mikä se on:** Toinen painike, mutta tämä painike viimeistelee ja luo kyselyn, kun kaikki vaihtoehdot on syötetty.
- **Tarkoitus:** Tämä painike laukaisee kyselyn luomisen keräämällä käyttäjän syötteet ja näyttämällä ne.
- **Tärkeä yksityiskohta:** Kysely luodaan vasta, kun tämä painike on klikattu, varmistaen, että käyttäjä on saanut syötettyä kaikki kyselyyn tarvittavat tiedot.

## 11. Poll Display Section (<code><</code>div id="poll-display">):

- **Mikä se on:** <code><</code>div> -elementti id="poll-display" on aluksi piilotettu ja näkyy vasta, kun kysely on luotu.
- **Tarkoitus:** Se näyttää kyselyn kysymyksen ja vaihtoehdot valintanappien kanssa, jotta käyttäjät voivat äänestää.
- **Tärkeä yksityiskohta:** Tämä osio näytetään JavaScriptin avulla, kun kysely on valmis äänestettäväksi.

## 12. Poll Results Section (<code><</code>div id="poll-results">):

- **Mikä se on:** Toinen <code><</code>div> -elementti, jolla on id="poll-results", näyttää kyselyn tulokset sen jälkeen, kun käyttäjä on äänestänyt.
- **Tarkoitus:** Se näyttää kyselyn tulokset (kuinka monta ääntä kukin vaihtoehto sai) sen jälkeen, kun ääni on annettu.
- **Tärkeä yksityiskohta:** Tulokset-osio on aluksi piilotettu ja näytetään vasta kyselyn valmistuttua.

## 13. Script Tag (<code><</code>script src="app.js"></code><</code>script>):

- **Mikä se on:** <code><</code>script> -elementti linkittää ulkoisen JavaScript-tiedoston (app.js).
- **Tarkoitus:** Se erottaa JavaScript-logiikan HTML-rakenteesta, mahdollistaen modulaarisen ja ylläpidettävän koodin.
- **Tärkeä yksityiskohta:** Asettamalla <code><</code>script> -elementti loppuun varmistetaan, että HTML on ladattu kokonaan ennen JavaScriptin suorittamista.

# CSS Selitys

## 1. Global Styles (body):

- **Mikä se on:** Body-valitsin kohdistuu koko verkkosivun body-osaan ja soveltaa siihen perusmuotoiluja.
- **Tärkeät ominaisuudet:**
  - **font-family: Arial, sans-serif;**: Asettaa koko sovellukselle Arial-fontin, joka on selkeä ja yleisesti tuettu fontti, sans-serif varafonttina.
  - **background-color: #f0f0f0;**: Asettaa koko sivulle vaaleanharmaan taustan, antaen modernin ja neutraalin ilmeen.
  - **display: flex; flex-direction: column; align-items: center;**: Käyttää Flexboxia sisällön pystysuuntaiseksi keskittämiseksi. Flexbox sopii erinomaisesti elementtien kohdistamiseen säilössä.
  - **padding: 20px;**: Lisää tilaa body-elementin reunoille, varmistaen että säilö ei ole kiinni selainikkunan reunassa.
  - **margin: 0;**: Poistaa oletusmarginaalit bodysta, estäen ei-toivotun valkoisen tilan.
- **Tarkoitus:** Nämä muotoilut varmistavat, että sisältö on keskitetty sivulle ja esitetään puhtaalla ja organisoidulla tavalla, jossa on riittävästi tilaa.

## 2. Container Styling (.container):

- **Mikä se on:** .container-luokka sovelletaan pääosioon, joka sisältää kaiken sisällön.
- **Tärkeät ominaisuudet:**
  - **background: white;**: Antaa säilölle puhtaan valkoisen taustan, joka erottuu harmaasta body-taustasta.
  - **padding: 20px;**: Lisää sisäistä tilaa säilön sisään, varmistaen, että sisältö ei ole liian lähellä reunoja.
  - **border-radius: 8px;**: Pyöristää säilön kulmat, antaen sille pehmeämmän ja modernimman ilmeen.
  - **box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);**: Lisää hienovaraisen varjon säilön ympärille, antaen sille syvyyttä ja erottaen sen taustasta.
  - **width: 300px;**: Määrittää säilölle kiinteän leveyden, helpottaen asettelun hallintaa.
  - **text-align: center;**: Keskittää tekstin säilön sisällä, pitäen käyttöliittymän puhtaana ja symmetrisenä.
- **Tarkoitus:** Säilömuotoilut luovat korttimaisen asettelun, jossa on täytettä ja varjoja, erottavat lomakkeen taustasta ja tekevät siitä rakenteellisesti selkeän.

## 3. Heading Styles (h1):

- **Mikä se on:** H1-valitsin soveltaa tyylejä sovelluksen pääotsikkoon.
- **Tärkeät ominaisuudet:**
  - **margin-bottom: 20px;**: Lisää tilaa otsikon alapuolelle, erottaen sen seuraavista syötekentistä.
- **Tarkoitus:** Tämä väli auttaa visuaalisesti erottamaan otsikon muusta sisällöstä ja parantaa luettavuutta.

## 4. Input, Button, and Select Styles:

- **Mikä se on:** Input-, button- ja select-valitsimet kohdistuvat kaikkiin syötekenttiin, painikkeisiin ja alasvetovalikoihin.
- **Tärkeät ominaisuudet:**
  - **padding: 10px;**: Lisää sisäistä tilaa syötteisiin, painikkeisiin ja valikoihin, tehden niistä suurempia ja helpompia käyttää.
  - **margin-bottom: 10px;**: Lisää tilaa jokaisen elementin välille, varmistaen, että syötteet ja painikkeet eivät ole liian lähellä toisiaan.
  - **width: calc(100% - 22px);**: Varmistaa, että syötteet, painikkeet ja valinnat vievät suurimman osan säilön leveydestä, mutta tilaa jää myös täytteille ja reunuksille.
  - **border: 1px solid #ccc;**: Lisää vaaleanharmaan reunuksen elementtien ympärille, antaen niille rakenteen.
  - **border-radius: 4px;**: Pyöristää syötteiden ja painikkeiden kulmat, antaen pehmeämmän ilmeen.
- **Tarkoitus:** Nämä muotoilut tekevät syötteistä ja painikkeista visuaalisesti yhtenäisiä, helppokäyttöisiä ja selkeitä. Ne on suunniteltu toimimaan hyvin eri laitteilla.

## 5. Button Styling (button):

- **Mikä se on:** Button-valitsin soveltaa erityisiä tyylejä kaikkiin painikkeisiin.
- **Tärkeät ominaisuudet:**
  - **border: none;**: Poistaa oletusreunuksen painikkeista, antaen niille puhtaamman ilmeen.
  - **background-color: #007bff;**: Asettaa kirkkaan sinisen taustavärin, joka erottuu ja tekee painikkeesta huomattavan.
  - **color: white;**: Asettaa painikkeen tekstin valkoiseksi, varmistaen korkean kontrastin sinistä taustaa vasten.
  - **cursor: pointer;**: Muuttaa osoittimen kädeksi, kun käyttäjä vie hiiren painikkeen päälle, antaen visuaalisen vihjeen, että painike on klikattavissa.
- **Tarkoitus:** Painikkeet on muotoiltu huomattaviksi ja helposti käytettäviksi, kannustaen käyttäjän sitoutumista.

## 6. Button Hover State (button:hover):

- **Mikä se on:** Button:hover muuttaa painikkeen ulkoasua, kun käyttäjä vie hiiren sen päälle.
- **Tärkeät ominaisuudet:**
  - **background-color: #0056b3;**: Tummentaa painikkeen taustaväriä, antaen käyttäjälle visuaalista palautetta interaktiivisuudesta.
- **Tarkoitus:** Hover-efekti parantaa käyttäjäkokemusta antamalla visuaalista palautetta, kun käyttäjä vuorovaikuttaa painikkeiden kanssa.

## 7. Poll Option Styling (.poll-option):

- **Mikä se on:** .poll-option-luokka muotoilee yksittäisen kyselyvaihtoehdon säilön.
- **Tärkeät ominaisuudet:**
  - **display: flex; justify-content: space-between; align-items: center;**: Käyttää Flexboxia kohdistamaan vaihtoehtojen syötteet ja poistopainikkeen riviin, varmistaen, että ne ovat asianmukaisesti erotettu toisistaan.
  - **margin-bottom: 10px;**: Lisää tilaa jokaisen kyselyvaihtoehdon alle, estäen niitä kasaantumasta.
- **Tarkoitus:** Tämä luo puhtaan ja hyvin järjestetyn asettelun jokaiselle kyselyvaihtoehdolle, tehden siitä käyttäjille helppokäyttöisen.

## 8. Poll Result Styling (.result):

- **Mikä se on:** .result-luokka muotoilee kyselyn tulosten näyttöalueen.
- **Tärkeät ominaisuudet:**
  - **background-color: #f8f8f8;**: Asettaa vaaleanharmaan taustan kyselyn tuloksille, tehden niistä visuaalisesti erottuvat.
  - **padding: 5px 10px;**: Lisää sisäistä tilaa tulosten ympärille, parantaen luettavuutta.
  - **border-radius: 4px;**: Pyöristää tuloslaatikon reunat.
- **Tarkoitus:** Tulosten muotoilu varmistaa, että ne ovat helppolukuisia ja selkeästi erotettu muusta käyttöliittymästä.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...});)

- **Mikä se on:** Tämä tapahtumankuuntelija odottaa, että koko DOM (Document Object Model) ladataan ennen skriptin suorittamista.
- **Tarkoitus:** Varmistaa, että kaikki HTML-elementit ovat valmiita ja vuorovaikutettavissa JavaScript-koodin kanssa. Ilman tätä skripti voisi yrittää käyttää elementtejä, joita ei ole vielä ladattu, mikä aiheuttaisi virheitä.
- **Tärkeä yksityiskohta:** Tämä on hyvä käytäntö varmistaaksesi, että JavaScript toimii sujuvasti HTML-rakenteen kanssa, erityisesti dynaamisen sisällön kanssa.

## 2. Poll Input Elements (const pollQuestionInput = document.getElementById('poll-question');)

- **Mikä se on:** Nämä rivit tallentavat viittaukset HTML-elementteihin, kuten kyselykysymykseen, vaihtoehtoihin ja painikkeisiin.
- **Tarkoitus:** Valitsemalla elementit alussa, skripti voi helposti käyttää niitä myöhemmin esimerkiksi lukemaan syötearvoja tai päivittämään DOM:ia.
- **Tärkeä yksityiskohta:** getElementById:n käyttäminen on tehokas tapa kohdistaa HTML-elementtejä niiden ainutlaatuisen ID:n perusteella.

## 3. Add Option Button Listener (addOptionButton.addEventListener('click', () => {...});)

- **Mikä se on:** Tämä lisää tapahtumankuuntelijan "Lisää vaihtoehto" -painikkeeseen. Kun painiketta klikataan, se laukaisee uuden kyselyvaihtoehdon syötekentän lisäämisen.
- **Vaiheet:**
  - Luodaan uusi div, joka sisältää syötekentän ja poistopainikkeen.
  - poll-option-luokka lisätään uuteen diviin.
  - Uusi syötekenttä ja poistopainike lisätään DOM:iin.
  - addRemoveOptionListeners()-funktiota kutsutaan vaihtoehtojen poistamisen hallitsemiseksi.
- **Tarkoitus:** Antaa käyttäjille mahdollisuuden lisätä dynaamisesti uusia vaihtoehtoja kyselyyn.
- **Tärkeä yksityiskohta:** createElement- ja appendChild-menetelmät muokkaavat DOM:ia dynaamisesti, mahdollistamalla reaaliaikaiset päivitykset käyttäjän vuorovaikutuksen perusteella.

## 4. Create Poll Button Listener (createPollButton.addEventListener('click', () => {...});)

- **Mikä se on:** Tämä kuuntelija käsittelee kyselyn luomisen, kun "Luo kysely" -painiketta klikataan.
- **Vaiheet:**
  - Kysymys ja vaihtoehdot poimitaan syötekentistä.
  - Koodi tarkistaa, onko kysymys kelvollinen ja onko vähintään kaksi vaihtoehtoa.
  - Jos syötteet ovat kelvollisia, kysely käyttöliittymä päivitetään kysymyksellä ja vaihtoehdoilla.
- **Tarkoitus:** Tämä kuuntelija muuntaa käyttäjän syötteen toimivaksi kyselyksi.
- **Tärkeä yksityiskohta:** Syötteiden validointi varmistaa, että kyselyssä on tarpeeksi sisältöä ennen sen luomista.

## 5. Vote Button Listener (voteButton.addEventListener('click', () => {...});)

- **Mikä se on:** Tämä kuuntelija käsittelee äänestystoiminnon. Kun "Äänestä" -painiketta klikataan, sovellus päivittää äänten määrän valitulle vaihtoehdolle.
- **Vaiheet:**
  - Valittu kyselyvaihtoehto haetaan.
  - Jos vaihtoehto on valittu, äänet sille vaihtoehdolle lisätään.
  - Päivitetyt äänet näytetään kyselyn tulokset -osiossa.
- **Tarkoitus:** Tämä kuuntelija mahdollistaa käyttäjien äänestämisen ja tulosten dynaamisen tarkastelun.
- **Tärkeä yksityiskohta:** Äänet tallennetaan localStorageen, mikä mahdollistaa tietojen säilymisen, vaikka sivu päivitettäisiin.

## 6. LocalStorage Handling

- **Mikä se on:** Sovellus käyttää localStoragea äänimäärien tallentamiseen ja hakemiseen.
- **Tarkoitus:** Tämä varmistaa, että vaikka sivu päivitetään, kyselyn tulokset (äänet) säilyvät.
- **Tärkeä yksityiskohta:** LocalStorage on yksinkertainen tapa tallentaa tietoja pysyvästi selaimeen ilman, että tarvitaan taustapalvelinta.

## 7. Add Remove Option Listener (addRemoveOptionListeners();)

- **Mikä se on:** Tämä funktio lisää tapahtumankuuntelijat jokaiselle "Poista vaihtoehto" -painikkeelle, mikä mahdollistaa käyttäjän kyselyvaihtoehtojen poistamisen dynaamisesti.
- **Vaiheet:**
  - remove-option-painikkeet kohdistetaan, ja niille lisätään tapahtumankuuntelijat.
  - Kun painiketta klikataan, vaihtoehto poistetaan DOM:sta.
- **Tarkoitus:** Antaa käyttäjille mahdollisuuden poistaa vaihtoehtoja, joita he eivät halua kyselyyn ennen sen luomista.
- **Tärkeä yksityiskohta:** Tätä funktiota kutsutaan aina, kun uusi vaihtoehto lisätään, varmistaen että kaikki poistopainikkeet toimivat.

## 8. Removing Options (function removeOption(event) {...})

- **Mikä se on:** Tämä funktio poistaa vaihtoehdon, kun vastaavaa poistopainiketta klikataan.
- **Vaiheet:**
  - Poistetaan vanhempi div (joka sisältää vaihtoehdon syötekentän ja poistopainikkeen) DOM:sta.
- **Tarkoitus:** Varmistaa, että käyttäjät voivat poistaa tarpeettomia kyselyvaihtoehtoja ennen kyselyn luomista.
- **Tärkeä yksityiskohta:** remove()-menetelmä poistaa puhtaasti vaihtoehto-elementin DOM:sta.
