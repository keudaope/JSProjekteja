# Nettisivu: https://keudaope.github.io/JSProjekteja/P19_BMI_Calculator

# Johdanto

BMI-laskin (Body Mass Index) on hyödyllinen sovellus, joka laskee painoindeksin henkilön pituuden ja painon perusteella. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää sekä oppimaan, miten käsitellä käyttäjän syötteitä, suorittaa peruslaskutoimituksia ja päivittää DOM-dynamiikkaa. Käyttäjät voivat syöttää pituutensa ja painonsa nähdäkseen BMI-arvonsa ja ymmärtääkseen terveydentilansa.

# HTML selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on**: <!DOCTYPE html> -määrittely dokumentin yläosassa ilmoittaa, että verkkosivu on kirjoitettu HTML5-standardilla.
- **Tarkoitus**: Se varmistaa, että selain renderöi dokumentin standardin mukaisesti, mahdollistaen modernit ominaisuudet ja varmistaa yhteensopivuuden eri selainten välillä.
- **Tärkeä yksityiskohta**: DOCTYPE-määrittely tulee aina sisällyttää, jotta vältetään mahdolliset yhteensopivuusongelmat eri selaimissa ja varmistetaan, että sivu tulkitaan HTML5-dokumenttina.

## 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on**: <code><</code>html>-elementti on dokumentin juuri, joka sisältää kaikki muut HTML-elementit. Lang="en" määrittää sivun kieleksi englannin.
- **Tarkoitus**: Lang-attribuutti on hyödyllinen hakukoneille ja apuvälineille (esim. ruudunlukijat) sisällön kielen ymmärtämiseksi, parantaen hakukoneoptimointia (SEO) ja saavutettavuutta.
- **Tärkeä yksityiskohta**: Kielen määrittäminen juuritasolla varmistaa, että apuvälineet ja selaimet voivat tulkita sivun kielen oikein.

## 3. Head Tag (<code><</code>head>):

- **Mikä se on**: <code><</code>head>-elementti sisältää metatietoja verkkosivusta, kuten merkkikoodauksen, näkymäasetukset, ulkoiset tyylitiedostot ja sivun otsikon.
- **Tarkoitus**: <code><</code>head>-osio on paikka, jossa ulkoiset CSS-tiedostot, fontit ja muut resurssit ladataan sekä metatiedot, kuten responsiivisuus ja merkkikoodaus, asetetaan.
- **Tärkeät yksityiskohdat**:
  - **Meta Charset** (<code><</code>meta charset="UTF-8">): Määrittää UTF-8-merkkikoodauksen, joka tukee laajaa valikoimaa eri kielten merkkejä, varmistaen tekstin oikean esittämisen.
  - **Viewport Meta Tag** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">): Varmistaa, että sivu on responsiivinen ja mukautuu laitteen näytön kokoon, tehden sovelluksesta käytettävän sekä mobiili- että työpöytälaitteilla.
  - **Google Fonts Link**: <code><</code>link>-elementti lataa "Roboto"-fontin Google Fontsista, parantaen typografiaa ja antaen modernin ulkoasun.
  - **Title Tag** (<code><</code>title>BMI Calculator</title>): <code><</code>title>-elementti asettaa verkkosivun otsikon, joka näkyy selaimen välilehdessä ja auttaa käyttäjiä ymmärtämään sovelluksen tarkoituksen.

## 4. Body Tag (<code><</code>body>):

- **Mikä se on**: <code><</code>body>-elementti sisältää kaiken verkkosivun näkyvän sisällön, mukaan lukien lomakkeen, syötekentät, painikkeen ja BMI-laskelman tuloksen.
- **Tarkoitus**: Kaikki, mitä käyttäjä näkee ja mihin vuorovaikuttaa verkkosivulla, sijaitsee <code><</code>body>-elementin sisällä. Se määrittelee sivun rakenteen ja sisällön asettelun, joka näytetään käyttäjille.
- **Tärkeä yksityiskohta**: Body-elementti on paikka, johon kaikki interaktiiviset elementit sijoitetaan, ja se on vuorovaikutuksessa CSS:n ja JavaScriptin kanssa dynaamisesti sisällön esittämiseksi ja muokkaamiseksi.

## 5. Container Div (<code><</code>div class="container">):

- **Mikä se on**: <code><</code>div>-elementti, jolla on container-luokka, sisältää koko BMI-laskimen sovelluksen sisällön, mukaan lukien otsikon, lomakkeen ja tulosnäytön.
- **Tarkoitus**: Kontti ryhmittelee kaikki sovelluksen elementit yhteen rakenteelliseen lohkoon, mahdollistaen keskitetyn tyylittelyn. Se tarjoaa myös pehmusteen, reunat ja varjot, antaen laskimelle korttimaisen ulkoasun.
- **Tärkeä yksityiskohta**: Container-luokka auttaa asettelun tyylittämisessä, tarjoten johdonmukaisen pehmusteen, pyöristetyt reunat ja varjon visuaalisesti miellyttävälle rakenteelle.

## 6. Heading Tag (<code><</code>h1>BMI Calculator</code><</code>h1>):

- **Mikä se on**: <code><</code>h1>-elementti on sivun ylin otsikko, joka esittää otsikon "BMI Calculator".
- **Tarkoitus**: Otsikko antaa sovellukselle selkeän nimen, auttaen käyttäjiä ymmärtämään heti sivun tarkoituksen. Se on myös tärkeä hakukoneoptimoinnin kannalta, sillä se määrittää sivun pääsisällön.
- **Tärkeä yksityiskohta**: <code><</code>h1>-elementti on tyylitelty suureksi ja näkyväksi, varmistaen, että se erottuu sovelluksen keskipisteenä.

## 7. Form Tag (<code><</code>form id="bmi-form">):

- **Mikä se on**: <code><</code>form>-elementti sisältää syötekentät ja lähetyspainikkeen, tarjoten rakenteellisen tavan käyttäjän tietojen syöttämiselle.
- **Tarkoitus**: Lomake on vastuussa käyttäjän pituuden ja painon keräämisestä ja BMI-laskennan käynnistämisestä, kun se lähetetään. Se on suunniteltu käsittelemään käyttäjän syötteet ilman sivun uudelleenlatausta JavaScriptin ansiosta.
- **Tärkeä yksityiskohta**: Id="bmi-form" mahdollistaa lomakkeen helpon käytön ja muokkauksen JavaScriptillä. Form-tag on olennainen ryhmittelemällä liittyvät syötekentät ja tarjoten järjestetyn käyttöliittymän käyttäjän syötteelle.

## 8. Height Input Field (<code><</code>input type="number" id="height" placeholder="Height (cm)" required>):

- **Mikä se on**: Tämä on <code><</code>input>-elementti, johon käyttäjä syöttää pituutensa senttimetreissä. Type="number" rajoittaa syötteen numeromuotoon ja required-attribuutti varmistaa, että kenttä ei voi jäädä tyhjäksi.
- **Tarkoitus**: Se mahdollistaa käyttäjän syöttää pituutensa, joka on tarpeen BMI-laskennalle. Paikkamerkintä "Height (cm)" antaa ohjeen siitä, mitä käyttäjän tulee syöttää.
- **Tärkeä yksityiskohta**: Id="height" mahdollistaa syötteen helpon käytön JavaScriptillä, ja required-attribuutti varmistaa, että käyttäjä täyttää kentän ennen lomakkeen lähettämistä.

## 9. Weight Input Field (<code><</code>input type="number" id="weight" placeholder="Weight (kg)" required>):

- **Mikä se on**: Tämä on toinen <code><</code>input>-elementti, johon käyttäjä syöttää painonsa kilogrammoina. Se käyttää myös type="number"-attribuuttia numeerisen syötteen rajoittamiseksi ja required-attribuuttia, jotta kenttä täytetään ennen lomakkeen lähettämistä.
- **Tarkoitus**: Se kerää käyttäjän painon, joka on tarpeen BMI-laskennalle. Paikkamerkintä "Weight (kg)" neuvoo käyttäjää siitä, minkä tyyppistä tietoa tulee syöttää.
- **Tärkeä yksityiskohta**: Id="weight" mahdollistaa JavaScriptin helpon arvon noutamisen käsittelyä varten, ja required-attribuutti varmistaa, että käyttäjä antaa tarvittavat tiedot ennen lomakkeen lähettämistä.

## 10. Submit Button (<code><</code>button type="submit">Calculate BMI</code><</code>button>):

- **Mikä se on**: <code><</code>button>-elementti käynnistää lomakkeen lähetyksen ja suorittaa JavaScript-funktion BMI:n laskemiseksi.
- **Tarkoitus**: Se tarjoaa selkeän toimintakehotuksen, joka mahdollistaa käyttäjän laskea BMI:n syötettyjen arvojen perusteella. Kun sitä painetaan, se lähettää lomakkeen ja suorittaa JavaScriptin tiedon käsittelyyn ilman sivun uudelleenlatausta.
- **Tärkeä yksityiskohta**: Type="submit" varmistaa, että painike toimii lomakkeen lähetyspainikkeena, jonka JavaScript sieppaa BMI-laskennan suorittamiseksi.

## 11. Result Div (<code><</code>div class="result" id="result"></code><</code>div>):

- **Mikä se on**: Tämä <code><</code>div>-elementti näyttää BMI-laskelman tuloksen sekä viestin, joka kertoo, onko käyttäjä alipainoinen, normaalipainoinen, ylipainoinen vai lihava.
- **Tarkoitus**: Se toimii paikkamerkkinä dynaamisesti luodulle sisällölle BMI:n laskemisen jälkeen. JavaScript päivittää tämän osion BMI-arvolla ja vastaavalla palautteella.
- **Tärkeä yksityiskohta**: Id="result" mahdollistaa JavaScriptin helpon kohdentamisen tähän diviin ja BMI-tuloksen sekä palautteen lisäämisen, varmistaen saumattoman, reaaliaikaisen käyttäjäkokemuksen.

## 12. Script Tag (<code><</code>script src="app.js"></code><</code>script>):

- **Mikä se on**: <code><</code>script>-elementti linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää BMI-laskennan logiikan.
- **Tarkoitus**: Se erottaa toiminnallisuuden (JavaScript) rakenteesta (HTML) ja tyylittelystä (CSS), noudattaen parhaiden käytäntöjen mukaista koodin modulaarisuutta. JavaScript käsittelee lomakkeen lähetyksen, validoinnin ja tulososan dynaamisen päivityksen.
- **Tärkeä yksityiskohta**: Ulkoiseen JavaScript-tiedostoon linkittäminen pitää HTML:n siistinä ja keskittyneenä rakenteeseen, parantaen luettavuutta ja ylläpidettävyyttä.

# CSS selitys

## 1. Global Reset (\* Selector):

- **Mikä se on**: Universaali valitsin \* koskee kaikkia sivun elementtejä.
- **Tarkoitus**: Se nollaa oletusmarginaalit, pehmusteet ja asettaa box-sizing: border-box kaikille elementeille. Tämä varmistaa, että pehmusteet ja reunat sisältyvät elementin kokonaisleveyteen ja -korkeuteen, mikä tekee asetteluiden hallinnasta helpompaa selainten välillä.
- **Tärkeä yksityiskohta**: Globaali nollaus varmistaa johdonmukaisuuden tilan ja asettelukäyttäytymisen eri selaimissa, estäen ennakoimattoman renderöinnin.

## 2. Body Styling (body):

- **Mikä se on**: Tämä sääntö tyylittelee <code><</code>body>-elementin, vaikuttaen koko sivun ulkoasuun ja asetteluun.
- **Tarkoitus**:
  - **Fontti**: font-family: 'Roboto', sans-serif; asettaa Roboto-fontin, joka tarjoaa modernin ja selkeän ulkoasun sovelluksen tekstille.
  - **Tausta**: background: linear-gradient(135deg, #74ebd5, #acb6e5); lisää gradienttitaustan, joka siirtyy vihertävästä siniseen, antaen sovellukselle raikkaan ja houkuttelevan ilmeen.
  - **Asettelu**: display: flex; justify-content: center; align-items: center; keskittää sisällön vaakasuunnassa ja pystysuunnassa Flexboxin avulla, varmistaen, että sovelluskontti pysyy sivun keskellä.
  - **Korkeus**: height: 100vh; varmistaa, että body täyttää koko näkymän korkeuden, pitäen sisällön pystysuunnassa keskitettynä.
  - **Marginaali**: margin: 0; poistaa oletusmarginaalit, jotka voisivat häiritä asettelua.
- **Tärkeä yksityiskohta**: Flexboxia käytetään sisällön keskittämiseen näkymän sisällä, kun taas gradienttitausta lisää visuaalista vetovoimaa ja tekee sovelluksesta modernin näköisen.

## 3. Container Styling (.container):

- **Mikä se on**: .container-luokka tyylittelee BMI-laskimen sisällön pääkonttia.
- **Tarkoitus**:
  - **Taustaväri**: background-color: #fff; asettaa valkoisen taustan kontille, joka luo hyvän kontrastin värikkääseen gradienttitaustaan.
  - **Pehmuste**: padding: 30px; lisää sisäistä tilaa kontissa olevien sisältöjen ympärille, tehden siitä helpommin luettavan ja esteettisesti miellyttävän.
  - **Reunan pyöristys**: border-radius: 15px; lisää pyöristetyt kulmat, antaen kontille modernin, korttimaisen ulkoasun.
  - **Varjo**: box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); lisää varjon kontin alle, antaen sille syvyyttä ja saaden sen näyttämään nousevalta taustasta.
  - **Leveys**: width: 400px; kiinnittää kontin leveyden varmistaen kompaktin ja johdonmukaisen koon.
  - **Maksimileveys**: max-width: 100%; tekee kontista responsiivisen, varmistaen, ettei se ylitä ruudun leveyttä pienemmillä laitteilla.
  - **Siirtymä**: transition: transform 0.3s ease; lisää pehmeän siirtymisen, kun konttia hoveroidaan, parantaen vuorovaikutusta.
- **Tärkeä yksityiskohta**: Pehmusteen, varjon ja pyöristettyjen kulmien yhdistelmä antaa kontille tyylikkään ja ammattimaisen ulkoasun, kun taas kiinteä leveys takaa hyvin tasapainoisen asettelun eri laitteilla.

## 4. Hover Effect for Container (.container:hover):

- **Mikä se on**: Tämä sääntö lisää hover-efektin, kun käyttäjä siirtää osoittimen kontin ylle.
- **Tarkoitus**: transform: scale(1.05); suurentaa konttia hieman hoverin aikana, tarjoten hienovaraisen zoomausvaikutuksen, joka lisää vuorovaikutteisuutta ja tekee sovelluksesta dynaamisemman.
- **Tärkeä yksityiskohta**: Hover-efekti lisää reagointikokemusta, tehden kontista houkuttelevamman ilman, että se ylikuormittaa käyttäjää.

## 5. Heading Styling (h1):

- **Mikä se on**: Tämä sääntö tyylittelee <code><</code>h1>-elementin, joka näyttää otsikon "BMI Calculator".
- **Tarkoitus**:
  - **Fonttikoko**: font-size: 2.5em; varmistaa, että otsikko on suuri ja selkeä, tehden siitä sovelluksen keskipisteen.
  - **Alamarginaali**: margin-bottom: 20px; luo tilaa otsikon alle, erottaen sen lomakkeesta ja tehden asettelusta siistimmän.
  - **Tekstiväri**: color: #2d3748; asettaa tumman tekstivärin, joka parantaa luettavuutta valkoista taustaa vasten.
- **Tärkeä yksityiskohta**: Otsikko on tyylitelty erottumaan visuaalisesti ja olemaan helposti luettavissa, ilmaisten sivun tarkoituksen selkeästi.

## 6. Form Layout and Styling (form):

- **Mikä se on**: Lomakesääntö tyylittelee BMI-syöttölomakkeen.
- **Tarkoitus**:
  - **Flexbox-asettelu**: display: flex; flex-direction: column; käyttää Flexboxia järjestämään lomake-elementit (syötekentät ja painike) pystysuunnassa.
  - **Väli**: gap: 10px; varmistaa johdonmukaisen välin jokaisen lomake-elementin välillä, tehden asettelusta selkeän ja helpon käyttää.
  - **Alamarginaali**: margin-bottom: 20px; lisää tilaa lomakkeen ja tulososion väliin, parantaen visuaalista rakennetta.
- **Tärkeä yksityiskohta**: Flexbox tekee syöttökenttien ja painikkeen pystysuuntaisesta asettelusta helpon, kun taas väli varmistaa hyvin rakennetun ja luettavan asettelun.

## 7. Input Field Styling (input[type="number"]):

- **Mikä se on**: Tämä sääntö tyylittelee pituuden ja painon syötekentät.
- **Tarkoitus**:
  - **Pehmuste**: padding: 12px; lisää sisäistä tilaa syötekenttien sisällä, tehden niistä mukavampia käyttää.
  - **Reuna**: border: 1px solid #ccc; lisää hienovaraisen harmaan reunan syötekenttien ympärille määrittelyä varten.
  - **Reunan pyöristys**: border-radius: 8px; antaa sujuvat, pyöristetyt kulmat syötekentille, jotka vastaavat kontin modernia suunnittelua.
  - **Fonttikoko**: font-size: 1em; varmistaa, että syötekenttien sisällä oleva teksti on helposti luettavissa.
  - **Varjo**: box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05); antaa syötekentille pehmeän varjon, lisäten syvyyttä ja parantaen visuaalista hierarkiaa.
  - **Siirtymä**: transition: border-color 0.3s ease; varmistaa pehmeän siirtymisen, kun syötekenttä on fokuksessa.
- **Tärkeä yksityiskohta**: Syötekentät on suunniteltu toimiviksi, siisteiksi ja visuaalisesti modernin sovelluksen linjaan sopiviksi, keskittyen luettavuuteen ja käytettävyyteen.

## 8. Input Focus Effect (input[type="number"]:focus):

- **Mikä se on**: Tämä sääntö astuu voimaan, kun käyttäjä kohdistaa syötekentän (esim. klikkaamalla tai napauttamalla sitä).
- **Tarkoitus**: border-color: #007bff; muuttaa reunavärin siniseksi, kun syöte on fokuksessa, antaen välittömän visuaalisen palautteen käyttäjälle.
- **Tärkeä yksityiskohta**: Fokusefekti selventää, mihin syötekenttään käyttäjä on vuorovaikutuksessa, parantaen kokonaiskäyttäjäkokemusta.

## 9. Button Styling (button):

- **Mikä se on**: Tämä sääntö tyylittelee painiketta, joka laskee BMI:n, kun sitä klikataan.
- **Tarkoitus**:
  - **Pehmuste**: padding: 12px 20px; varmistaa, että painike on riittävän suuri ollakseen helposti klikattavissa ja visuaalisesti tasapainoinen.
  - **Taustaväri**: background-color: #007bff; antaa painikkeelle sinisen taustan, joka viestii sen olevan päätapahtuman elementti.
  - **Tekstiväri**: color: white; varmistaa, että painikkeen teksti erottuu selkeästi sinistä taustaa vasten.
  - **Reunan pyöristys**: border-radius: 8px; tekee painikkeen kulmista pyöreät, pitäen sen linjassa muiden elementtien kanssa.
  - **Kursori**: cursor: pointer; muuttaa hiiren osoittimen osoittamaan, että painiketta voidaan klikata, mikä parantaa käytettävyyttä.
  - **Fonttikoko**: font-size: 1em; varmistaa, että painikkeen teksti on helposti luettavissa.
  - **Siirtymä**: transition: background-color 0.3s ease, transform 0.2s ease; lisää pehmeät siirtymät hover- ja aktiivisille tiloille, parantaen vuorovaikutteisuutta.
- **Tärkeä yksityiskohta**: Painike on suunniteltu visuaalisesti erottuvaksi ja helposti käytettäväksi, käyttäen pehmeitä siirtymiä ja selkeää toimintakutsua.

## 10. Button Hover Effect (button:hover):

- **Mikä se on**: Tämä sääntö astuu voimaan, kun käyttäjä siirtää osoittimen painikkeen päälle.
- **Tarkoitus**:
  - **Taustaväri**: background-color: #0056b3; tummentaa painikkeen taustaa hoverin aikana, antaen visuaalisen palautteen käyttäjälle.
  - **Transformointi**: transform: translateY(-2px); nostaa painiketta hieman, lisäten dynaamisen 3D-efektin.
- **Tärkeä yksityiskohta**: Hover-efekti tekee painikkeesta vuorovaikutteisemman ja parantaa käyttäjän sitoutumista sovellukseen.

## 11. Button Active State (button:active):

- **Mikä se on**: Tämä sääntö sovelletaan, kun painiketta klikataan.
- **Tarkoitus**:
  - **Taustaväri**: background-color: #004494; tummentaa painiketta entisestään, kun sitä klikataan, antaen palautteen painikkeen aktivoinnista.
  - **Transformointi**: transform: translateY(1px); luo pienen painallusliikkeen, joka tekee interaktiosta realistisemman.
- **Tärkeä yksityiskohta**: Aktiivinen tila tarjoaa taktiilista palautetta, tehden käyttäjän kokemuksesta miellyttävämmän ja realistisemman.

## 12. Result Display Styling (.result):

- **Mikä se on**: Tämä sääntö tyylittelee tulososion, jossa BMI ja palaute näytetään.
- **Tarkoitus**:
  - **Ylämarginaali**: margin-top: 20px; lisää tilaa lomakkeen ja tulososion välille, erottaen sisällön visuaalisesti.
  - **Fonttikoko**: font-size: 1.2em; suurentaa tulostekstin fonttia, tehden siitä näkyvämmän ja helposti luettavan.
  - **Fonttipaino**: font-weight: bold; korostaa tulostekstiä, lisäten painoarvoa BMI-laskelmalle ja palautteelle.
- **Tärkeä yksityiskohta**: Tulos on tyylitelty olemaan selkeä ja helposti luettava, tarjoten käyttäjille välittömän palautteen, joka erottuu selkeästi muusta sisällöstä.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener:

- **Mikä se on**: document.addEventListener('DOMContentLoaded', ...) on tapahtumankuuntelija, joka laukaistaan, kun HTML-dokumentti on kokonaan ladattu ja selain on jäsentänyt sen.
- **Tarkoitus**: Tämä varmistaa, että JavaScript-koodi suoritetaan vasta, kun kaikki tarvittavat elementit (kuten lomake, syötekentät ja tulosdivi) on ladattu ja ne ovat valmiina käytettäväksi.
- **Tärkeä yksityiskohta**: DOMContentLoaded-tapahtuman käyttö estää virheitä, joita voi syntyä, jos JavaScript yrittää manipuloida elementtejä, joita ei vielä ole renderöity DOM

  .

## 2. Selecting DOM Elements:

- **Mikä se on**: useita document.getElementById() -kutsuja käytetään viittaamaan keskeisiin elementteihin sivulla:
  - **form**: viittaa BMI-lomakkeeseen, jossa käyttäjä syöttää pituutensa ja painonsa.
  - **heightInput**: viittaa syötekenttään, johon käyttäjä syöttää pituutensa senttimetreinä.
  - **weightInput**: viittaa syötekenttään, johon käyttäjä syöttää painonsa kilogrammoina.
  - **resultDiv**: viittaa diviin, jossa BMI-tulos ja palaute näytetään.
- **Tarkoitus**: Nämä viittaukset antavat JavaScriptin helposti käyttää ja manipuloida vastaavia elementtejä, kuten käyttäjän syötteiden lukemista tai lasketun BMI:n näyttämistä.
- **Tärkeä yksityiskohta**: DOM-elementtien viittausten tallentaminen tehokkaasti vähentää tarvetta toistuvaan DOM-kyselyyn, mikä parantaa suorituskykyä ja tekee koodista luettavampaa.

## 3. Form Submission Event Listener:

- **Mikä se on**: form.addEventListener('submit', ...) kuuntelee, kun käyttäjä lähettää lomakkeen klikkaamalla "Laske BMI" -painiketta.
- **Tarkoitus**: Se keskeyttää lomakkeen oletusarvoisen lähetyskäyttäytymisen (joka normaalisti päivittäisi sivun) käyttämällä event.preventDefault(). Sen sijaan JavaScript käsittelee lomakkeen lähetyksen, käsittelee tiedot ja laskee BMI:n.
- **Tärkeä yksityiskohta**: Lomakkeen oletuskäyttäytymisen estäminen varmistaa, että sovellus pysyy samalla sivulla ja antaa välitöntä palautetta ilman sivun päivitystä, mikä tarjoaa sulavamman käyttökokemuksen.

## 4. Retrieving and Parsing User Input:

- **Mikä se on**: Syötearvot pituudelle ja painolle haetaan vastaavista syötekentistä:
  - **const height = parseFloat(heightInput.value) / 100;**: Tämä hakee pituuden syötekentästä ja muuntaa sen senttimetreistä metreiksi jakamalla 100:lla.
  - **const weight = parseFloat(weightInput.value);**: Tämä hakee painon syötekentästä ja muuntaa sen liukuluvuksi.
- **Tarkoitus**: Syötteet muunnetaan numeerisiksi arvoiksi, jotta niitä voidaan käyttää BMI-laskennassa.
- **Tärkeä yksityiskohta**: parseFloat() on tärkeää käyttää, jotta arvot käsitellään numeroina, ja pituuden jakaminen 100:lla muuntaa sen metreiksi, mikä on tarpeen BMI-kaavaa varten.

## 5. Input Validation:

- **Mikä se on**: if-ehdossa tarkistetaan, ovatko pituus- tai painosyötteet kelvollisia numeroita:
  - **isNaN(height)** ja **isNaN(weight)** tarkistavat, ovatko syötearvot numeroita.
  - **height <= 0** tai **weight <= 0** varmistavat, että syötteet ovat positiivisia arvoja, jotka ovat suurempia kuin nolla.
- **Tarkoitus**: Syötteen validointi varmistaa, että käyttäjä antaa kelvollisia, realistisia arvoja pituudelle ja painolle ennen BMI-laskennan aloittamista.
- **Tärkeä yksityiskohta**: Jos validointi epäonnistuu, sovellus näyttää virheilmoituksen resultDivissä, kehottaen käyttäjää antamaan kelvolliset arvot. Tämä parantaa käyttökokemusta estämällä virheelliset laskelmat.

## 6. BMI Calculation:

- **Mikä se on**: BMI lasketaan seuraavalla kaavalla:
  - **const bmi = (weight / (height \* height)).toFixed(2);**
- **Tarkoitus**: Kaavassa paino jaetaan pituuden neliöllä BMI:n laskemiseksi. Tulos pyöristetään kahteen desimaaliin käyttämällä .toFixed(2), jotta tulos on helpommin luettavissa.
- **Tärkeä yksityiskohta**: BMI-kaava on ratkaiseva käyttäjän kehon massaindeksin määrittämisessä, ja pyöristys kahteen desimaaliin antaa selkeän ja helposti luettavan tuloksen.

## 7. Displaying the Result:

- **Mikä se on**: Alustava BMI-tulos näytetään käyttäen:
  - **resultDiv.innerHTML = 'Your BMI is ' + bmi + '. ';**
- **Tarkoitus**: Tämä rivi lisää lasketun BMI:n resultDiviin, jotta käyttäjä näkee heti BMI-arvonsa lomakkeen lähettämisen jälkeen.
- **Tärkeä yksityiskohta**: Tulososion dynaaminen päivittäminen tarjoaa reaaliaikaista palautetta ilman, että sivua tarvitsee päivittää.

## 8. Providing Feedback Based on BMI:

- **Mikä se on**: Skripti tarkistaa BMI-arvon ja antaa palautetta käyttäjän BMI-kategorian perusteella:
  - **Alipainoinen (BMI < 18.5)**: Jos BMI on alle 18.5, sovellus näyttää "You are underweight" lautas-emoji 🍽️ kanssa.
  - **Normaalipaino (BMI 18.5 - 24.9)**: Jos BMI on välillä 18.5 - 24.9, sovellus näyttää "You have a normal weight" tähti-emoji 🌟 kanssa.
  - **Ylipaino (BMI 25 - 29.9)**: Jos BMI on välillä 25 ja 29.9, sovellus näyttää "You are overweight" vaaka-emoji ⚖️ kanssa.
  - **Lihavuus (BMI ≥ 30)**: Jos BMI on 30 tai suurempi, sovellus näyttää "You are obese" pysäytysmerkki-emoji 🛑 kanssa.
- **Tarkoitus**: Tämä osa antaa käyttäjälle helposti ymmärrettävää palautetta BMI-kategorioiden perusteella, jotka ovat terveysorganisaatioiden määrittelemiä.
- **Tärkeä yksityiskohta**: Emojien käyttö tekee palautteesta mielenkiintoisemman ja visuaalisesti selkeämmän, auttaen käyttäjää tulkitsemaan BMI-tuloksensa nopeasti.

## 9. Error Handling and User Guidance:

- **Mikä se on**: Jos syötteen validointi epäonnistuu, tulosdivi näyttää virheilmoituksen:
  - **resultDiv.textContent = 'Please enter valid height❗ and weight values.'**
- **Tarkoitus**: Tämä varmistaa, että käyttäjä saa hyödyllistä palautetta, jos hän syöttää virheellisiä tietoja, kehottaen häntä korjaamaan syötteensä.
- **Tärkeä yksityiskohta**: Selkeiden virheilmoitusten antaminen parantaa käyttökokemusta, auttaen käyttäjiä ymmärtämään, mikä meni pieleen ja miten syötteet voidaan korjata.
