# Nettisivu: https://keudaope.github.io/JSProjekteja/P07_Calculator

# Johdanto

Peruslaskin on yksinkertainen projekti, joka auttaa käyttäjiä suorittamaan tavanomaisia aritmeettisia toimintoja, kuten yhteenlaskua, vähennyslaskua, kertolaskua ja jakolaskua. Tämä sovellus on ihanteellinen aloittelijoille harjoittelemaan JavaScriptin, HTML:n ja CSS:n käyttöä samalla oppien käsittelemään käyttäjän syötteitä, suorittamaan laskutoimituksia ja päivittämään DOM-rakennetta dynaamisesti.

# HTML Selitys

## 1. DOCTYPE Declaration:

- **Mikä se on**: &lt;!DOCTYPE html> -määritys kertoo selaimelle, että sivu käyttää HTML5-standardeja.
- **Tarkoitus**: Se varmistaa, että verkkosivua näytetään HTML5-sääntöjen mukaisesti, mikä auttaa välttämään ongelmia sivun ulkoasussa tai renderöinnissä.
- **Tärkeä yksityiskohta**: Lisää aina &lt;!DOCTYPE html> HTML-dokumentin alkuun, jotta varmistat yhteensopivuuden nykyaikaisten verkkoselainten kanssa.

## 2. HTML Tag:

- **Mikä se on**: &lt;html> -elementti ympäröi koko verkkosivun sisällön. Attribuutti lang="en" määrittelee, että dokumentin kieli on englanti.
- **Tarkoitus**: &lt;html> -tagi määrittää HTML-dokumentin juuren. Lang-attribuutti on tärkeä saavutettavuuden ja hakukoneoptimoinnin (SEO) kannalta, sillä se kertoo hakukoneille ja apuvälineille (kuten ruudunlukijoille), mitä kieltä sivulla käytetään.
- **Tärkeä yksityiskohta**: Kielen asettaminen oikein auttaa hakukoneita luokittelemaan sisällön ja auttaa käyttäjiä, jotka luottavat ruudunlukijoihin.

## 3. Meta Charset Tag:

- **Mikä se on**: &lt;meta charset="UTF-8"> -tagi määrittelee dokumentin merkistökoodauksen.
- **Tarkoitus**: Se varmistaa, että sivu voi näyttää laajan valikoiman merkkejä, mukaan lukien erikoismerkit eri kielistä, ilman renderöintiongelmia.
- **Tärkeä yksityiskohta**: UTF-8 on yleisin merkistökoodaus, sillä se tukee lähes kaikkia maailman käytössä olevia merkkejä. Ilman tätä tagia jotkin merkit eivät ehkä näy oikein.

## 4. Meta Viewport Tag:

- **Mikä se on**: &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"> -tagi varmistaa, että verkkosivu on responsiivinen.
- **Tarkoitus**: Se sallii verkkosivun mukautua laitteen näytön kokoon ja varmistaa, että se näyttää hyvältä sekä työpöytä- että mobiililaitteilla.
- **Tärkeä yksityiskohta**: Tämä tagi on olennaisen tärkeä, jotta verkkosivusto on mobiiliystävällinen, sillä se hallitsee skaalausta ja ulkoasun käyttäytymistä eri laitteilla. Ilman tätä tagia verkkosivu ei välttämättä näytä optimoidulta pienemmillä näytöillä, mikä heikentää käyttökokemusta.

## 5. Title Tag:

- **Mikä se on**: &lt;title> -tagi määrittää verkkosivun otsikon, joka näkyy selaimen välilehdessä.
- **Tarkoitus**: Otsikko auttaa käyttäjiä tunnistamaan verkkosivun ja sitä käytetään myös hakukoneissa hakutulosten otsikkona.
- **Tärkeä yksityiskohta**: Otsikon tulisi olla kuvaava ja liittyä sivun sisältöön. Tässä tapauksessa "Calculator" on selkeä ja ytimekäs otsikko, joka heijastaa verkkosivun **Tarkoitus**ta.

## 6. Link to CSS File:

- **Mikä se on**: &lt;link rel="stylesheet" href="styles.css"> -tagi yhdistää HTML-dokumentin ulkoiseen CSS-tiedostoon.
- **Tarkoitus**: Se mahdollistaa sivun muotoilun CSS-sääntöjen avulla, jotka on määritelty erillisessä tiedostossa, erottaen sisällön (HTML) ja ulkoasun (CSS).
- **Tärkeä yksityiskohta**: Ulkoisen CSS-tiedoston linkittäminen tekee koodista siistimmän ja helpommin ylläpidettävän. Selaimen lataama CSS-tiedosto soveltaa tyylejä HTML-elementteihin.

## 7. Body Tag:

- **Mikä se on**: &lt;body> -tagi sisältää kaiken verkkosivun näkyvän sisällön.
- **Tarkoitus**: Kaikki, mitä on &lt;body> -tagin sisällä, näkyy ja on vuorovaikutteista käyttäjälle verkkosivulla. Se sisältää laskimen näytön, painikkeet ja muut elementit, joita käyttäjä voi käyttää.
- **Tärkeä yksityiskohta**: &lt;body> -tagin tulisi näkyä HTML-dokumentissa vain kerran, ja sen tulee sisältää kaikki sivun pääsisältö.

## 8. Main Container (div with class "container"):

- **Mikä se on**: &lt;div class="container"> on elementti, joka ympäröi kaiken laskimen sisällön.
- **Tarkoitus**: Tämä container-luokka ryhmittelee liittyvän sisällön ja mahdollistaa tyylien (kuten sisennysten, taustan ja reunojen) soveltamisen koko laskimen ulkoasuun.
- **Tärkeä yksityiskohta**: Div-elementtejä käytetään yleisesti HTML:ssä sisällön jäsentelyyn. Luokan container käyttö helpottaa laskimen tyylittelyä CSS-tiedostossa ja antaa sille jäsennellyn ja yhtenäisen ulkoasun.

## 9. Display Element (div with id "display"):

- **Mikä se on**: &lt;div id="display"> on säiliö, joka näyttää laskimen nykyisen syötteen tai tuloksen.
- **Tarkoitus**: Tämä elementti näyttää käyttäjän syöttämät numerot ja lasketut tulokset. Sitä päivitetään dynaamisesti JavaScriptin avulla käyttäjän toiminnan perusteella.
- **Tärkeä yksityiskohta**: id="display" mahdollistaa JavaScriptin helposti kohdentamaan tämän elementin ja päivittämään sen sisällön. Alkuarvo on "0", mutta se muuttuu, kun käyttäjä käyttää laskinta.

## 10. Buttons Section (div with class "buttons"):

- **Mikä se on**: &lt;div class="buttons"> ympäröi kaikki laskimen painikkeet (numerot, operaattorit, yhtäsuuruusmerkki ja tyhjennys).
- **Tarkoitus**: Tämä osio järjestää painikkeet ruudukkona paremman luettavuuden ja vuorovaikutuksen saavuttamiseksi. Painikkeet ovat dynaamisesti tyylitelty ja sijoitettu CSS Gridin avulla.
- **Tärkeä yksityiskohta**: Painikkeiden ryhmittely yhden divin alle sallii CSS-tiedoston hallita ulkoasua tehokkaammin, varmistaen, että kaikki painikkeet ovat tasaisesti ja oikein asetettuja.

## 11. Number Buttons (button with data-number attribute):

- **Mikä se on**: &lt;button> -elementit, joissa on data-number-attribuutti, edustavat laskimen numeronäppäimiä (0–9).
- **Tarkoitus**: Nämä painikkeet sallivat käyttäjien syöttää numeroita laskimeen. Data-number-attribuutti sisältää numeron arvon, jota JavaScript käyttää syötteen käsittelyyn.
- **Tärkeä yksityiskohta**: Data-number-attribuuttia käytetään JavaScriptissä tunnistamaan helposti, kun numeropainiketta painetaan, jotta oikea toiminto voidaan suorittaa (esim. numeron lisääminen näyttöön).

## 12. Operator Buttons (button with class "operator"):

- **Mikä se on**: &lt;button> -elementit, joissa on class="operator", edustavat laskimen operaattoripainikkeita (+, -, \*, /).
- **Tarkoitus**: Nämä painikkeet antavat käyttäjille mahdollisuuden valita aritmeettinen operaatio syötettyjen numeroiden käsittelemiseksi. Data-operator-attribuutti sisältää operaattorin arvon, jota JavaScript käyttää laskutoimituksessa.
- **Tärkeä yksityiskohta**: Class="operator" käytetään tyylitarkoituksiin (erottamaan ne numeropainikkeista), ja data-operator-attribuutti mahdollistaa JavaScriptin tunnistamaan, milloin operaattoripainiketta on painettu.

## 13. Equal Button (button with id "equal"):

- **Mikä se on**: &lt;button id="equal"> edustaa yhtäsuuruusmerkkiä (=).
- **Tarkoitus**: Painiketta painamalla laskin suorittaa laskutoimituksen käyttäjän valitsemien numeroiden ja operaattorin perusteella.
- **Tärkeä yksityiskohta**: id="equal" mahdollistaa JavaScriptin helposti kohdentamaan tämän tietyn painikkeen ja suorittamaan laskutoimituksen, kun sitä painetaan. Painike ulottuu kahden sarakkeen yli ruudukkoasettelussa, mikä tekee siitä visuaalisesti erottuvan.

## 14. Clear Button (button with id "clear"):

- **Mikä se on**: &lt;button id="clear"> edustaa tyhjennyspainiketta (C).
- **Tarkoitus**: Tyhjennyspainike nollaa laskimen, poistaa nykyisen syötteen ja tallennetut arvot. Se palauttaa laskimen oletustilaan.
- **Tärkeä yksityiskohta**: id="clear" mahdollistaa JavaScriptin kohdentamaan tämän painikkeen näyttöjen tyhjentämiseksi ja laskimen nollaamiseksi. Painike ulottuu kahden sarakkeen yli ruudukkoasettelussa, tehden siitä leveämmän ja näkyvämmän.

## 15. JavaScript Link:

- **Mikä se on**: &lt;script src="app.js">&lt;/script> -tagi linkittää HTML-dokumentin ulkoiseen JavaScript-tiedostoon.
- **Tarkoitus**: Ulkoinen JavaScript-tiedosto sisältää kaiken laskimen toiminnallisuuden, mukaan lukien painikkeiden käsittelyn, laskutoimitusten suorittamisen ja näytön päivittämisen.
- **Tärkeä yksityiskohta**: JavaScriptin linkittäminen &lt;body>-osion loppuun varmistaa, että HTML-sisältö on täysin ladattu ennen skriptin suorittamista, mikä parantaa suorituskykyä ja estää mahdolliset virheet.

# CSS Selitys

## 1. Universal Selector (\*):

- **Mikä se on**: \* -valitsin soveltaa tyylejä kaikkiin sivun elementteihin.
- **Tarkoitus**: Nollaa kaikkien elementtien oletusmarginaalit ja -täytteet arvoon 0, mikä varmistaa yhtenäisen lähtökohdan ulkoasun ja tilan hallinnassa. Asettaa myös box-sizing: border-box, jolloin leveys- ja korkeuslaskelmiin sisältyy täyte ja reunukset.
- **Tärkeä yksityiskohta**: Asettamalla box-sizing: border-box varmistetaan, että elementin kokonaisleveys ja -korkeus sisältävät täytteen ja reunukset, mikä helpottaa ulkoasun hallintaa, erityisesti responsiivisten sivujen suunnittelussa.

## 2. Body Styling:

- **Mikä se on**: Bodyn tyylit määrittävät koko sivun perusasettelun ja ulkoasun.
- **Tarkoitus**:
  - **font-family: 'Arial', sans-serif** asettaa modernin ja luettavan fontin koko sivulle.
  - **background-color: #f0f0f0** antaa sivulle vaaleanharmaan taustan, mikä luo pehmeän ja neutraalin taustan laskimelle.
  - **display: flex; justify-content: center; align-items: center; height: 100vh** käyttää Flexboxia laskimen keskittämiseen sekä vaaka- että pystysuunnassa, varmistaa sen täydellisen sijoittumisen ikkunaan.
  - **margin: 0** poistaa bodyn oletusmarginaalit, jolloin sisältö voi käyttää koko näytön leveyttä ja korkeutta.
- **Tärkeä yksityiskohta**: Flexboxin käyttö (display: flex) tekee laskimen keskittämisestä helppoa riippumatta näytön koosta. Height: 100vh varmistaa laskimen pystysuuntaisen keskittämisen myös ikkunan koon muuttuessa.

## 3.Container Styling (.container):

- **Mikä se on**: .container-luokka tyylittää laskimen pääsäiliön, antaen sille ulkoasun ja rakenteen.
- **Tarkoitus**:
  - **background-color: white** antaa laskimelle siistin ja modernin ilmeen tekemällä säiliön taustasta valkoisen.
  - **padding: 20px** lisää tilaa säiliön sisälle, varmistaen, ettei sisältö näytä ahtaalta.
  - **border-radius: 8px** pyöristää säiliön kulmat, mikä luo pehmeämmän ja modernin suunnittelun.
  - **box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)** lisää hienovaraisen varjon, mikä antaa säiliölle hieman kohotetun ulkoasun ja erottaa sen sivun taustasta.
  - **width: 300px** rajoittaa säiliön leveyttä, pitäen sen kompaktina ja keskitettynä.
  - **text-align: center** keskittää tekstin säiliön sisällä, linjaten kaikki painikkeiden etiketit ja näyttösisällön keskeisesti.
- **Tärkeä yksityiskohta**: Yhdistelmä pehmusteita, varjoa ja pyöristettyjä reunoja antaa laskimelle siistin, modernin ja ammattimaisen ulkoasun. Box-shadow lisää syvyyttä, tehden säiliöstä näyttävän siltä kuin se kohoaisi hieman taustasta.

## 4. Display Styling (.display):

- **Mikä se on**: .display-luokka tyylittää alueen, jossa luvut ja tulokset näytetään.
- **Tarkoitus**:
  - **width: calc(100% - 24px)** varmistaa, että näyttö vie lähes koko säiliön leveyden, pois lukien pehmusteet, mikä tekee siitä responsiivisen.
  - **padding: 10px** lisää tilaa näytön sisälle, jotta numerot eivät ole liian lähellä reunoja.
  - **margin-bottom: 10px** luo tilaa näytön ja painikkeiden väliin, varmistaen selkeän erottelun.
  - **border: 1px solid #ccc** lisää kevyen reunan näytön ympärille, auttaen sitä erottumaan.
  - **border-radius: 4px** pyöristää kulmat yhtenäisiksi muun laskimen pyöristetyn muotoilun kanssa.
  - **font-size: 1.5em** kasvattaa fonttikokoa, tehden numeroista helpommin luettavia.
  - **text-align: right** asettaa numerot oikealle, jäljitellen perinteisten laskinten toimintaa.
  - **background-color: #f9f9f9** antaa näytölle hieman vaaleamman taustan kuin säiliö, tehden siitä visuaalisesti erottuvan.
- **Tärkeä yksityiskohta**: Oikealle kohdistettu teksti ja suurempi fonttikoko helpottavat käyttäjiä seuraamaan syötteitään, kun taas pehmeä taustaväri luo kontrastin olematta liian voimakas.

## 5. Grid Layout for Buttons (.buttons):

- **Mikä se on**: .buttons-luokka käyttää CSS Grid -tekniikkaa järjestämään painikkeet siistiksi, yhtenäiseksi asetteluksi.
- **Tarkoitus**:
  - **display: grid** luo ruudukkoasettelun painikkeille, mikä helpottaa niiden järjestämistä riveiksi ja sarakkeiksi.
  - **grid-template-columns: repeat(4, 1fr)** asettaa neljä yhtä leveää saraketta painikkeille, varmistaen, että jokainen painike on saman levyinen.
  - **gap: 10px** lisää tilaa jokaisen painikkeen väliin, tehden asettelusta vähemmän ahtaan ja helpommin käytettävän.
- **Tärkeä yksityiskohta**: CSS Grid yksinkertaistaa painikkeiden järjestämistä siistiksi ja yhtenäiseksi asetteluksi. Repeat(4, 1fr) varmistaa, että jokainen painike vie yhden neljäsosan säiliön leveydestä.

## 6. Button Styling:

- **Mikä se on**: Painikkeiden tyylit sovelletaan kaikkiin laskimen painikkeisiin (numerot, operaattorit, yhtäsuuruus ja tyhjennys).
- **Tarkoitus**:
  - **padding: 20px** varmistaa, että painikkeilla on suuri klikkausalue, mikä tekee niistä helppokäyttöisiä.
  - **font-size: 1.2em** kasvattaa painikkeiden etikettien fonttikokoa, parantaen luettavuutta.
  - **border: none** poistaa painikkeiden oletusselaimen reunan, antaen niille litteän ja modernin ulkoasun.
  - **background-color: #f0f0f0** asettaa painikkeille vaaleanharmaan taustan, säilyttäen sovelluksen neutraalin värimaailman.
  - **cursor: pointer** muuttaa hiiren kursorin osoittimeksi, kun käyttäjä liikuttaa sen painikkeen päälle, osoittaen sen olevan klikattavissa.
  - **border-radius: 4px** pyöristää painikkeiden kulmat, pitäen muotoilun yhtenäisenä muun laskimen kanssa.
  - **transition: background-color 0.3s ease** lisää pehmeän siirtymän, kun painikkeen taustaväri muuttuu hover-tilassa, parantaen käyttökokemusta.
- **Tärkeä yksityiskohta**: Nämä tyylit tekevät painikkeista visuaalisesti houkuttelevia ja helppokäyttöisiä. Suurempi pehmuste ja fonttikoko varmistavat, että ne ovat mukavia käyttää millä tahansa laitteella.

## 7. Button Hover Effect:

- **Mikä se on**: button:hover määrittelee, miltä painikkeet näyttävät, kun niiden päälle siirretään hiiri.
- **Tarkoitus**:
  - **background-color: #ddd** muuttaa painikkeen taustavärin hieman tummemmaksi, kun käyttäjä siirtää hiiren sen päälle, tarjoten visuaalista palautetta.
- **Tärkeä yksityiskohta**: Tämä hienovarainen hover-efekti tekee sovelluksesta vuorovaikutteisemman ja responsiivisemman. Käyttäjät voivat helposti nähdä, mitä painiketta he ovat painamassa.

## 8. Operator Button Styling (.operator):

- **Mikä se on**: .operator-luokka sovelletaan laskimen operaattoripainikkeisiin (+, -, \*, /).
- **Tarkoitus**:
  - **background-color: #28a745** antaa operaattoripainikkeille vihreän taustan, erottamaan ne numeropainikkeista.
  - **color: white** varmistaa, että tekstin väri on selkeästi näkyvä vihreää taustaa vasten.
- **Tärkeä yksityiskohta**: Erottuva väri operaattoripainikkeille helpottaa niiden erottamista numeropainikkeista, parantaen yleistä käyttökokemusta.

## 9. Operator Button Hover Effect:

- **Mikä se on**: .operator luokka määrittelee, miltä operaattoripainikkeet näyttävät, kun niiden päälle siirretään hiiri.
- **Tarkoitus**:
  - **background-color: #218838** tummentaa vihreää väriä, kun operaattoripainike on hover-tilassa, tarjoten selkeän visuaalisen indikaation siitä, että painike on vuorovaikutteinen.
- **Tärkeä yksityiskohta**: Hover-efekti on yhtenäinen kaikkien painikkeiden kanssa, mutta operaattoripainikkeilla on oma erillinen värimaailmansa, jotta ne erottuvat.

## 10. Equal Button Styling (.equal):

- **Mikä se on**: .equal-luokka sovelletaan yhtäsuuruus (=) -painikkeeseen.
- **Tarkoitus**:
  - **background-color: #007bff** antaa yhtäsuuruuspainikkeelle erottuvan sinisen taustan, tehden siitä visuaalisesti erottuvan muista painikkeista.
  - **color: white** varmistaa, että painikkeen teksti on helposti luettavissa.
  - **grid-column: span 2** tekee painikkeesta kahden sarakkeen levyisen, korostaen sen tärkeyttä.
- **Tärkeä yksityiskohta**: Yhtäsuuruuspainikkeen erottuva väri ja suurempi koko selkeyttävät, että kyseessä on keskeinen toimintopainike laskimessa.

## 11. Equal Button Hover Effect:

- **Mikä se on**: .equal luokka määrittelee, miltä yhtäsuuruuspainike näyttää, kun sen päälle siirretään hiiri.
- **Tarkoitus**:
  - **background-color: #0056b3** tummentaa sinistä taustaa hover-tilassa, osoittaen käyttäjälle, että he ovat painamassa keskeistä painiketta.
- **Tärkeä yksityiskohta**: Hover-efekti lisää sujuvaa vuorovaikutusta, tehden yhtäsuuruuspainikkeesta mukaansatempaavamman ja responsiivisemman.

## 12. Clear Button Styling (.clear):

- **Mikä se on**: .clear-luokka sovelletaan tyhjennys (C) -painikkeeseen.
- **Tarkoitus**:
  - **background-color: #dc3545** antaa tyhjennyspainikkeelle punaisen taustan, mikä viestii "tuhon" toimintoa (laskimen nollaus).
  - **color: white** varmistaa, että painikkeen teksti on selkeästi näkyvä.
  - **grid-column: span 2** tekee tyhjennyspainikkeesta kahden sarakkeen levyisen, kuten yhtäsuuruuspainike, korostaen sen tärkeyttä.
- **Tärkeä yksityiskohta**: Punaisen käytöllä tyhjennyspainikkeessa viestitään universaalisti toimintoa, joka nollaa tai poistaa sisältöä, mikä tekee siitä intuitiivisen käyttäjille.

## 13. Clear Button Hover Effect:

- **Mikä se on**: .clear luokka määrittelee, miltä tyhjennyspainike näyttää, kun sen päälle siirretään hiiri.
- **Tarkoitus**:
  - **background-color: #c82333** tummentaa punaista taustaväriä, kun tyhjennyspainike on hover-tilassa, vahvistaen sen olevan tärkeä toimintopainike.
- **Tärkeä yksityiskohta**: Hover-efekti auttaa erottamaan tyhjennyspainikkeen tärkeäksi kontrolliksi, varmistaen, että käyttäjät ovat varmoja toiminnastaan.

# JavaScript Selitys

## 1. DOMContentLoaded Event:

- **Mikä se on**: document.addEventListener('DOMContentLoaded', ...) odottaa, kunnes koko DOM (Document Object Model) on ladattu ennen skriptin suorittamista.
- **Tarkoitus**: JavaScript voi olla vuorovaikutuksessa HTML-elementtien kanssa vasta niiden latautumisen jälkeen. Tämä tapahtuma varmistaa, että kaikki elementit (kuten painikkeet ja näyttö) ovat käytettävissä ennen kuin JavaScript yrittää manipuloida niitä.
- **Tärkeä yksityiskohta**: Ilman DOMContentLoaded-tapahtuman odottamista, JavaScript voi yrittää käyttää elementtejä, joita ei ole vielä renderöity, mikä johtaa virheisiin.

## 2. Selecting DOM Elements:

- **Mikä se on**: document.getElementById() ja document.querySelectorAll() -metodeja käytetään valitsemaan elementtejä DOMissa ja tallentamaan ne muuttujiksi.
  - **const display = document.getElementById('display');** valitsee laskimen näytön, johon numerot ja tulokset näytetään.
  - **const buttons = document.querySelectorAll('button');** valitsee kaikki laskimen painikkeet (numerot, operaattorit, yhtäsuuruus ja tyhjennys).
- **Tarkoitus**: Näitä muuttujia käytetään viittaamaan tiettyihin sivun elementteihin, jotta niitä voidaan käsitellä (esim. näytön päivittäminen tai tapahtumankäsittelijöiden lisääminen painikkeisiin).
- **Tärkeä yksityiskohta**: Painikkeiden ja näytön valitseminen heti alussa mahdollistaa tehokkaan vuorovaikutuksen näiden elementtien kanssa koko koodissa.

## 3. Calculator State Variables:

- **Mikä se on**: Kolme keskeistä muuttujaa (currentOperand, previousOperand ja operator) tallentavat laskimen tilan.
  - **currentOperand**: Tallentaa käyttäjän syöttämän nykyisen numeron tai laskun tuloksen.
  - **previousOperand**: Tallentaa edellisen numeron ennen operaattorin painamista.
  - **operator**: Tallentaa käyttäjän valitseman matemaattisen operaattorin (+, -, \*, tai /).
- **Tarkoitus**: Nämä muuttujat pitävät kirjaa käyttäjän syötteestä ja valitusta operaattorista, mahdollistaen oikeiden matemaattisten laskujen suorittamisen.
- **Tärkeä yksityiskohta**: Tallentamalla nämä arvot muuttujiksi laskin voi saumattomasti siirtyä numeroiden syöttämisen ja laskutoimitusten välillä.

## 4. Event Listener for Buttons:

- **Mikä se on**: Silmukkaa (buttons.forEach(...)) käytetään lisäämään tapahtumankäsittelijä jokaiselle laskimen painikkeelle.
- **Tarkoitus**: Tapahtumankäsittelijä varmistaa, että kun painiketta klikataan, vastaava funktio kutsutaan sen perusteella, onko kyseessä numeropainike, operaattoripainike tai erityispainike (yhtäsuuruus tai tyhjennys).
- **Tärkeä yksityiskohta**: Käyttämällä forEach()-silmukkaa kaikkiin painikkeisiin saadaan tiivis ja uudelleenkäytettävä koodi. Jokaisen painikkeen tyyppi tarkistetaan (data-number, data-operator, id) ja käsitellään sen mukaisesti.

## 5. Handling Number Button Clicks (appendNumber Function):

- **Mikä se on**: appendNumber(number)-funktio kutsutaan, kun numeropainiketta klikataan. Se lisää valitun numeron currentOperand-muuttujaan.
- **Tarkoitus**: Tämä funktio mahdollistaa käyttäjien rakentaa moninumeroisia lukuja lisäämällä jokaisen klikattavan numeron olemassa olevaan numeroon.
- **Tärkeä yksityiskohta**: Funktio tarkistaa, yrittääkö käyttäjä lisätä 0:n, kun nykyinen numero on jo 0, estäen tarpeettomien nollien lisäämisen. Numero muunnetaan merkkijonoksi ja lisätään currentOperand-muuttujaan, jotta moninumeroisia lukuja käsitellään oikein.

## 6. Handling Operator Selection (chooseOperator Function):

- **Mikä se on**: chooseOperator(selectedOperator)-funktio käynnistyy, kun operaattoripainiketta (+, -, \*, /) painetaan.
- **Tarkoitus**:
- Tallentaa currentOperandin previousOperand-muuttujaan ja tyhjentää currentOperandin, jotta käyttäjä voi syöttää uuden numeron.
- Tallentaa myös valitun operaattorin myöhempää käyttöä varten, kun yhtäsuuruuspainiketta painetaan.
- **Tärkeä yksityiskohta**: Jos käyttäjä on jo syöttänyt aiemman numeron ja valitsee operaattorin, funktio tarkistaa, tuleeko laskutoimitus suorittaa ennen uuden operaattorin asettamista. Tämä varmistaa, että laskin toimii sujuvasti ketjutetuissa operaatioissa.

## 7. Performing the Calculation (compute Function):

- **Mikä se on**: compute()-funktio käynnistyy, kun yhtäsuuruuspainiketta (=) painetaan. Se suorittaa varsinaisen laskutoimituksen previousOperandin, currentOperandin ja operaattorin perusteella.
- **Tarkoitus**: Tämä funktio suorittaa laskutoimituksen muuntamalla previousOperandin ja currentOperandin numeroiksi ja soveltaen oikeaa matemaattista operaatiota operaattorin perusteella.
- **Tärkeä yksityiskohta**:
  - Se tarkistaa, ovatko arvot kelvollisia numeroita ennen laskutoimituksen suorittamista, jotta virheitä vältetään.
  - Laskutoimituksen tulos tallennetaan takaisin currentOperand-muuttujaan, jotta käyttäjä voi jatkaa laskemista tuloksesta.
  - Laskutoimituksen jälkeen previousOperand nollataan ja operaattori tyhjennetään, valmiina seuraavaa laskua varten.

## 8. Handling Special Buttons:

- **Tyhjennyspainike**:
  - **Mikä se on**: clear()-funktio käynnistyy, kun tyhjennyspainiketta (C) painetaan.
  - **Tarkoitus**: Se nollaa laskimen alkuperäiseen tilaan tyhjentämällä currentOperandin, previousOperandin ja operaattorin, käytännössä nollaten näytön.
  - **Tärkeä yksityiskohta**: Tyhjennyspainike on tärkeä laskimen nollaamiseksi, kun käyttäjä haluaa aloittaa alusta. Ilman tätä käyttäjän täytyisi päivittää sivu nollatakseen laskimen.
- **Yhtäsuuruuspainike**:
  - **Mikä se on**: Yhtäsuuruuspainike (=) käynnistää compute()-funktion, joka suorittaa laskutoimituksen ja näyttää tuloksen.
  - **Tarkoitus**: Tämä painike viimeistelee operaation käyttäjän syötteiden ja valitun operaattorin perusteella.

## 9. Updating the Display (updateDisplay Function):

- **Mikä se on**: updateDisplay()-funktio päivittää laskimen näytön sisällön jokaisen painalluksen jälkeen.
- **Tarkoitus**: Jokaisen muutoksen (numeron syöttö, operaattorin valinta, laskutoimitus tai tyhjennys) jälkeen tämä funktio päivittää näytön näyttämään currentOperandin nykyisen arvon (tai 0, jos tyhjä).
- **Tärkeä yksityiskohta**: Tämä funktio varmistaa, että käyttäjä näkee aina oikean arvon näytöllä, tehden laskimesta vuorovaikutteisen ja responsiivisen. Näyttö päivittyy reaaliajassa käyttäjän vuorovaikutuksen mukaan.

## 10. Assembling the Logic:

- **Mikä se on**: Näiden funktioiden yhdistäminen—appendNumber(), chooseOperator(), compute(), clear() ja updateDisplay()—tekee laskimesta täysin toimivan.
- **Tarkoitus**: Jokaisella funktiolla on tietty tehtävä: numeron syöttö, operaattorin hallinta, laskutoimituksen suorittaminen ja näytön päivittäminen. Yhdessä ne muodostavat logiikan, joka simuloi peruslaskimen toimintaa.
- **Tärkeä yksityiskohta**: Näiden funktioiden modulaarinen rakenne tekee koodista helppolukuista ja ylläpidettävää. Jokainen funktio tekee yhden asian, mikä parantaa koodin organisointia ja uudelleenkäytettävyyttä.

## 11. Initial Setup (clear Function):

- **Mikä se on**: clear()-funktio kutsutaan heti, kun laskin ladataan, jotta tila alustetaan.
- **Tarkoitus**: Tämä varmistaa, että kun laskin ilmestyy, se on puhtaassa, oletustilassa, eikä aiempia syötteitä tai operaatioita ole tallennettu.
- **Tärkeä yksityiskohta**: Laskin alustetaan aina tyhjällä tilalla, jotta se alkaa tuoreena jokaisessa käyttäjän vuorovaikutuksessa.
