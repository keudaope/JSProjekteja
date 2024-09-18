# Nettisivu: https://keudaope.github.io/JSProjekteja/P05_Quiz_App

# HTML Selitys

## 1. &lt;!DOCTYPE html>

- **Mitä se on**: Tämä rivi määrittelee asiakirjan tyypin ja käytössä olevan HTML-version (tässä tapauksessa HTML5).
- **Tarkoitus**: Selaimen on tiedettävä tämä julistus, jotta se tulkitsee HTML-rakenteen oikein ja näyttää sivun asianmukaisesti. Ilman sitä selain voi siirtyä niin sanottuun "quirks modeen", mikä voi aiheuttaa sivun odottamattoman esittämisen.
- **Tärkeä yksityiskohta**: &lt;!DOCTYPE>-julistuksen on oltava aina HTML-asiakirjan alussa, jotta varmistetaan nykyaikaiset, standardien mukaiset toiminnot.

## 2. &lt;html lang="en">

- **Mitä se on**: Tämä on HTML-asiakirjan juurielementin aloitustunniste, ja lang-attribuutti määrittää dokumentin kielen.
- **Tarkoitus**: lang="en"-attribuutti ilmaisee, että tämän sivun sisältö on englanniksi. Tämä auttaa hakukoneita ja apuvälineitä (kuten ruudunlukuohjelmia) ymmärtämään sisällön.
- **Tärkeä yksityiskohta**: &lt;html>-tunniste sisältää kaikki muut HTML-elementit ja asettaa asiakirjan kielen, mikä on tärkeää saavutettavuuden kannalta.

## 3. &lt;head>

- **Mitä se on**: &lt;head>-elementti sisältää dokumenttiin liittyviä metatietoja, joita ei näytetä suoraan verkkosivulla, mutta joita selain ja hakukoneet käyttävät.
- **Tarkoitus**: &lt;head>-osioon sisällytetään meta-tietoja, kuten asiakirjan merkistö, otsikko ja linkit tyylitiedostoihin tai JavaScript-tiedostoihin.
- **Tärkeä yksityiskohta**: Sisältö &lt;head>-osassa auttaa selaimia näyttämään sivun oikein ja varmistaa, että ulkoiset resurssit (kuten CSS ja JS-tiedostot) on linkitetty oikein.

## 4. &lt;meta charset="UTF-8">

- **Mitä se on**: Tämä &lt;meta>-tunniste määrittää dokumentin käytettävän merkistön.
- **Tarkoitus**: charset="UTF-8"-asetuksen avulla selain pystyy näyttämään oikein kaikki merkit, mukaan lukien erikoismerkit, aksentilliset kirjaimet ja muut kuin latinalaiset aakkoset.
- **Tärkeä yksityiskohta**: UTF-8 on yleisimmin käytetty merkistö, koska se tukee lähes kaikkia eri kielten merkkejä ja symboleja.

## 5. &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">

- **Mitä se on**: Tämä &lt;meta>-tunniste on ratkaiseva responsiivisen suunnittelun kannalta.
- **Tarkoitus**: Se varmistaa, että sivu skaalaa oikein eri laitteilla (kuten älypuhelimilla, tableteilla ja pöytäkoneilla) asettamalla näkymän leveydeksi laitteen leveyden ja hallitsemalla zoomaustasoa initial-scale=1.0.
- **Tärkeä yksityiskohta**: Ilman tätä tunnistetta verkkosivustot eivät ehkä näy kunnolla pienemmillä näytöillä, koska selaimet saattavat oletuksena näyttää sivun työpöydän leveydellä, mikä voi kutistaa sisältöä.

## 6. &lt;title>Quiz App&lt;/title>

- **Mitä se on**: &lt;title>-elementti määrittää verkkosivun otsikon, joka näkyy selaimen välilehdessä ja kun sivu tallennetaan kirjanmerkkeihin.
- **Tarkoitus**: Se auttaa käyttäjiä tunnistamaan nopeasti verkkosivun tarkoituksen selaimen välilehdistä tai historiasta. Hakukoneet käyttävät sitä myös sivun otsikon näyttämiseen hakutuloksissa.
- **Tärkeä yksityiskohta**: Otsikon tulisi olla lyhyt, kuvaava ja sivun sisältöön liittyvä. Tässä tapauksessa "Quiz App" kuvaa tarkasti verkkosivua.

## 7. &lt;link rel="stylesheet" href="styles.css">

- **Mitä se on**: Tämä &lt;link>-tunniste linkittää ulkoisen CSS-tiedoston (styles.css) HTML-asiakirjaan.
- **Tarkoitus**: Linkitetty CSS-tiedosto sisältää kaikki verkkosivun tyylisäännöt. CSS:n erottaminen HTML:stä pitää rakenteen ja tyylin järjestettynä ja helpommin ylläpidettävänä.
- **Tärkeä yksityiskohta**: Linkittämällä CSS ulkoisesti voit käyttää samaa tyylitiedostoa useissa HTML-tiedostoissa, mikä tekee suunnittelusta yhtenäisemmän ja helpommin päivitettävän.

## 8. &lt;body>

- **Mitä se on**: &lt;body>-elementti sisältää kaiken verkkosivulla näkyvän sisällön.
- **Tarkoitus**: Kaikki käyttäjälle näkyvä sisältö, kuten teksti, kuvat, painikkeet ja muut interaktiiviset elementit, sijoitetaan &lt;body>-tunnisteen sisälle.
- **Tärkeä yksityiskohta**: &lt;body>-tunnisteessa näkyy sivun varsinainen sisältö, toisin kuin &lt;head>, joka sisältää metatietoja.

## 9. &lt;div class="container">

- **Mitä se on**: &lt;div> on lohkotason säilö, jota käytetään sisällön ryhmittelyyn. Tässä container-luokkaa käytetään tämän osion tyylittelemiseen CSS:n avulla.
- **Tarkoitus**: Säilö pitää sisällään kaikki tietovisailun elementit, kuten otsikon, kysymykset, vaihtoehdot ja painikkeet. Se toimii tietovisailusovelluksen päästruktuurielementtinä, mikä helpottaa tyylien kohdentamista koko tietovisailualueeseen.
- **Tärkeä yksityiskohta**: Käyttämällä &lt;div>-säilöjä voit järjestää sivusi asettelun, ja luokkien, kuten container, avulla voit kohdentaa tiettyjä tyylejä CSS-tiedostossa.

## 10. &lt;h1>Quiz App&lt;/h1>

- **Mitä se on**: &lt;h1>-tunniste määrittää sivun ylimmän tason otsikon. Se on tärkein otsikko, ja sitä tulisi käyttää vain kerran per sivu.
- **Tarkoitus**: Se tarjoaa käyttäjälle selkeän otsikon, joka kertoo, että tämä sivu on "Quiz App". &lt;h1>-tunniste on myös tärkeä hakukoneille, sillä se antaa kontekstin siitä, mistä sivulla on kyse.
- **Tärkeä yksityiskohta**: Otsikot (&lt;h1> - &lt;h6>) auttavat jäsentämään sisältöä semanttisesti, mikä tekee siitä helpommin navigoitavan sekä käyttäjille että hakukoneille.

## 11. &lt;div class="quiz-container" id="quiz-container">

- **Mitä se on**: Toinen &lt;div>-elementti, jossa on quiz-container-luokka ja id quiz-container. Id tekee tämän elementin kohdistamisesta JavaScriptissä helppoa.
- **Tarkoitus**: Tämä säilö pitää sisällään tietovisailun sisällön, kuten kysymykset ja vaihtoehdot, jotka lisätään dynaamisesti JavaScriptin avulla.
- **Tärkeä yksityiskohta**: id="quiz-container"-attribuutin avulla JavaScript voi manipuloida tätä tiettyä sivun osaa ja päivittää sisältöä käyttäjän tehdessä valintoja tietovisailussa.

## 12. &lt;div class="question" id="question">Question will appear here&lt;/div>

- **Mitä se on**: Tämä &lt;div> toimii paikkamerkkinä tietovisailun kysymykselle. JavaScript lisää siihen kysymystekstin dynaamisesti.
- **Tarkoitus**: Tämä alue näyttää kulloisenkin tietovisailukysymyksen. Oletuksena näkyy paikkamerkkiteksti ("Question will appear here"), kunnes JavaScript päivittää sen.
- **Tärkeä yksityiskohta**: id="question"-attribuutti tekee tämän elementin helppokäyttöiseksi JavaScriptissä, jolloin tietovisailuskripti voi päivittää kysymystekstin käyttäjän edetessä tietovisassa.

## 13. &lt;ul class="options" id="options">&lt;/ul>

- **Mitä se on**: &lt;ul>-elementti edustaa järjestämätöntä listaa. Se täytetään dynaamisesti monivalintavaihtoehdoilla kullekin kysymykselle.
- **Tarkoitus**: Lista sisältää vastausvaihtoehdot kuluvalle kysymykselle, ja kukin vaihtoehto on lista-elementti (&lt;li>), joka lisätään JavaScriptin avulla.
- **Tärkeä yksityiskohta**: id="options" tekee listan kohdentamisesta ja täyttämisestä JavaScriptissä helppoa tietovisailun edetessä.

## 14. &lt;button id="next-button" class="hidden">Next&lt;/button>

- **Mitä se on**: Painike-elementti, joka on aluksi piilotettu (class="hidden") ja tulee näkyviin, kun käyttäjä valitsee vastausvaihtoehdon. id="next-button" mahdollistaa sen käytön JavaScriptissä.
- **Tarkoitus**: Tämä painike antaa käyttäjän siirtyä seuraavaan kysymykseen, kun vastaus on valittu. Aluksi se on piilotettu, jotta käyttäjä ei voi ohittaa kysymystä ilman valintaa.
- **Tärkeä yksityiskohta**: Painiketta hallitaan JavaScriptillä, ja se tulee näkyviin vain tarvittaessa, mikä parantaa tietovisailun sujuvuutta ja käyttäjän vuorovaikutusta.

## 15. &lt;div class="result hidden" id="result">&lt;/div>

- **Mitä se on**: &lt;div>, joka näyttää lopullisen tuloksen tai pistemäärän tietovisailun päätyttyä. Aluksi se on piilotettu hidden-luokan avulla.
- **Tarkoitus**: Tämä säilö näyttää käyttäjän pistemäärän tietovisailun päätyttyä ja kertoo, kuinka monta oikeaa vastausta käyttäjä sai kaikkien kysymysten joukosta.
- **Tärkeä yksityiskohta**: id="result"-attribuutin avulla JavaScript voi helposti kohdistaa ja päivittää tämän elementin tietovisailun päätyttyä.

## 16. &lt;button id="reset-button" class="hidden">Reset Quiz&lt;/button>

- **Mitä se on**: Toinen painike-elementti, joka palauttaa tietovisailun alkuun. Tämä painike on myös aluksi piilotettu ja tulee näkyviin tietovisailun päättyessä.
- **Tarkoitus**: Palautuspainike antaa käyttäjän aloittaa tietovisailun alusta. Se palauttaa kaikki arvot (kuten pistemäärän ja kysymysindeksin) ja vie käyttäjän takaisin ensimmäiseen kysymykseen.
- **Tärkeä yksityiskohta**: id="reset-button"-attribuutin avulla JavaScript hallitsee, milloin painike näkyy ja mitä tapahtuu, kun käyttäjä klikkaa sitä (eli tietovisailun uudelleenkäynnistys).

## 17. &lt;script src="app.js">&lt;/script>

- **Mitä se on**: Tämä &lt;script>-tunniste linkittää ulkoisen JavaScript-tiedoston (app.js), jossa tietovisailun logiikka on kirjoitettu.
- **Tarkoitus**: Ulkoinen skripti sisältää kaiken tarvittavan koodin tietovisailun toiminnallisuuden käsittelyyn, kuten kysymysten lataamisen, pistemäärän seuraamisen ja käyttäjän vuorovaikutuksen hallinnan.
- **Tärkeä yksityiskohta**: JavaScriptin linkittäminen ulkoisesti pitää koodin järjestettynä, erottaen toiminnallisuuden (JavaScript) rakenteesta (HTML) ja tyylistä (CSS).
