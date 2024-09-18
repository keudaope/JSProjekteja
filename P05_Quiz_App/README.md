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

# CSS Selitys

## 1. **body**

- **Mitä se on**: Muotoilee koko verkkosivun.
- **Tarkoitus**: Keskittää tietovisailun säilön sekä vaaka- että pystysuunnassa näytölle ja lisää vaaleanharmaan taustan luodakseen kontrastin säilön kanssa.
- **Tärkeimmät ominaisuudet**:
  - **font-family**: Asettaa sivun oletusfontiksi Arialin, joka on selkeä ja laajalti käytetty sans-serif-fontti, parantaen luettavuutta.
  - **background-color**: Lisää vaaleanharmaan taustan, joka korostaa valkoista tietovisailusäilöä ja parantaa visuaalista selkeyttä.
  - **display: flex; justify-content: center; align-items: center**;: Flexbox-ominaisuudet keskittävät tietovisailun sisällön vaaka- ja pystysuunnassa näkymässä, luoden tasapainoisen asettelun.
  - **height: 100vh**: Varmistaa, että runko vie koko näkymän korkeuden, mikä on tärkeää sisällön pystysuuntaiselle keskittämiselle.
  - **margin: 0**: Poistaa selaimen oletusmarginaalin varmistaen, että sisältö on oikein linjassa ilman ylimääräistä tilaa reunojen ympärillä.

## 2. **.container**

- **Mitä se on**: Tietovisailun sisällön pääasiallinen säilö.
- **Tarkoitus**: Tarjoaa rakenteellisen alueen tietovisailun sisällölle, lisäämällä pehmustetta, pyöristettyjä kulmia ja varjoa korttimaisen ulkonäön luomiseksi.
- **Tärkeimmät ominaisuudet**:
  - **background-color**: Valkoinen tausta tekee tietovisailusäilöstä selkeästi erottuvan harmaasta taustasta.
  - **padding**: Lisää sisäistä tilaa säilöön varmistaen, ettei sisältö koske säilön reunoja, mikä parantaa luettavuutta.
  - **border-radius**: Pyöristää säilön kulmat, antaen modernimman ja viimeistellyn ilmeen.
  - **box-shadow**: Lisää hienovaraisen varjon säilön ympärille, luoden syvyyttä ja erottamalla sen visuaalisesti taustasta.
  - **width**: Asettaa säilön kiinteän leveyden varmistaen, että tietovisailun sisältö näkyy tasaisesti riippumatta näytön koosta.
  - **text-align: center**: Keskittää kaiken tekstin ja inline-elementit (kuten painikkeet) säilön sisällä, tehden asettelusta selkeämmän ja helpommin luettavan.

## 3. **h1**

- **Mitä se on**: Muotoilee tietovisailun sovelluksen pääotsikon.
- **Tarkoitus**: Otsikko on muotoiltu luomaan tilaa otsikon ja muun sisällön välille, tehden siitä näkyvämmän ja erottuvamman.
- **Tärkeimmät ominaisuudet**:
  - **margin-bottom**: Lisää tilaa otsikon ja tietovisailusisällön väliin. Tämä tekee otsikosta luettavamman ja erottelee sen tietovisailuelementeistä, parantaen yleistä rakennetta.

## 4. **.question**

- **Mitä se on**: Muotoilee kysymysosion, jossa nykyinen tietovisailukysymys esitetään.
- **Tarkoitus**: Lisää väliä kysymystekstin ja vastausvaihtoehtojen välille, pitäen asettelun selkeänä ja järjestettynä.
- **Tärkeimmät ominaisuudet**:
  - **margin-bottom**: Lisää tilaa kysymyksen ja vastausvaihtoehtojen väliin, varmistaen, että käyttäjä erottaa selvästi kysymyksen ja vaihtoehdot toisistaan.

## 5. **.options**

- **Mitä se on**: Muotoilee järjestämättömän listan (&lt;ul>), joka sisältää vastausvaihtoehdot jokaista kysymystä varten.
- **Tarkoitus**: Poistaa oletuspisteet ja sisäisen pehmusteen listasta, antaen sille siistimmän ja jäsennellymmän ulkonäön.
- **Tärkeimmät ominaisuudet**:
  - **list-style: none**: Poistaa listaelementtien oletuspisteet, antaen niille virtaviivaisemman ulkonäön.
  - **padding: 0**: Poistaa sisäisen pehmusteen, varmistaen, että vaihtoehdot ovat oikein linjassa säilön kanssa.
  - **margin-bottom**: Lisää tilaa vaihtoehtolistan ja painikkeen tai seuraavan osion väliin, parantaen kokonaisrakennetta.

## 6. **.options li**

- **Mitä se on**: Muotoilee jokaisen yksittäisen vastausvaihtoehdon (listaelementin) &lt;ul>-listan sisällä.
- **Tarkoitus**: Luo visuaalisesti erottuvat vastausvaihtoehdot, joissa on pehmustetta, pyöristetyt kulmat ja vaalea tausta. Vaihtoehdoille lisätään interaktiivisuutta hover- ja klikkaustehosteilla.
- **Tärkeimmät ominaisuudet**:
  - **background-color**: Jokaiselle vaihtoehdolle asetetaan vaaleanharmaa tausta, joka erottaa ne valkoisesta säilöstä ja tekee niistä selkeämpiä.
  - **margin**: Lisää tilaa jokaisen vaihtoehdon väliin, varmistaen, etteivät ne ole suoraan päällekkäin.
  - **padding**: Lisää sisäistä tilaa jokaiselle vaihtoehdolle, tehden valinta-alueesta suuremman ja helpommin valittavan.
  - **border**: Määrittelee hienovaraisen reunan jokaisen vaihtoehdon ympärille, antaen sille selkeät rajat.
  - **border-radius**: Pyöristää jokaisen vaihtoehdon kulmat, luoden yhdenmukaisen modernin suunnittelun.
  - **cursor: pointer**: Muuttaa kursorin osoittimeksi, kun se on vaihtoehdon päällä, ilmoittaen sen olevan valittavissa.
  - **transition: background-color 0.3s ease**: Lisää sujuvan siirtymätehosteen, kun taustaväri muuttuu (esim. hover-tilassa tai valittuna), parantaen käyttökokemusta.

## 7. **.options li:hover**

- **Mitä se on**: Määrittelee hover-efektin jokaiselle vastausvaihtoehdolle, kun käyttäjä vie hiiren niiden päälle.
- **Tarkoitus**: Tarjoaa välitöntä visuaalista palautetta muuttamalla taustaväriä, tehden selväksi, että vaihtoehto on valittavissa.
- **Tärkeimmät ominaisuudet**:
  - **background-color**: Muuttaa taustavärin tummemmaksi harmaaksi, kun käyttäjä vie hiiren vaihtoehdon päälle. Tämä luo interaktiivisemman ja mukaansatempaavamman käyttäjäkokemuksen tarjoamalla palautetta.

## 8. **button**

- **Mitä se on**: Muotoilee sekä Next- että Reset-painikkeet, joita tietovisassa käytetään.
- **Tarkoitus**: Painikkeet on muotoiltu helposti erotettaviksi ja klikkauskelpoisiksi, niissä on pehmustetta, vihreä tausta ja pyöristetyt kulmat. Hover-efekti lisää interaktiivisuutta.
- **Tärkeimmät ominaisuudet**:
  - **padding**: Lisää tilaa painikkeen sisään, tehden siitä suuremman ja helpommin klikkauskelpoisen.
  - **border: none**: Poistaa oletusselaimen rajaukset, luoden puhtaamman ja modernimman painikkeen ulkonäön.
  - **background-color: #28a745**: Vihreä tausta ilmaisee positiivisen toiminnon (kuten seuraavaan kysymykseen siirtyminen tai tietovisailun nollaaminen).
  - **color: white**: Varmistaa, että painikkeen sisällä oleva teksti on valkoinen, tarjoten vahvan kontrastin vihreään taustaan paremman luettavuuden takaamiseksi.
  - **border-radius**: Lisää painikkeelle pyöristetyt kulmat, sopien yhteen sovelluksen yleisen modernin muotoilun kanssa.
  - **cursor: pointer**: Muuttaa kursorin osoittimeksi, kun se on painikkeen päällä, ilmoittaen sen olevan klikkauskelpoinen.
  - **transition: background-color 0.3s ease**: Sujuva taustavärin siirtymä, kun käyttäjä vie hiiren painikkeen päälle tai klikkaa sitä.

## 9. **button:hover**

- **Mitä se on**: Määrittelee painikkeiden hover-efektin, kun käyttäjä liikuttaa hiirtä niiden päälle.
- **Tarkoitus**: Tarjoaa visuaalisen vihjeen, että painike on interaktiivinen, muuttamalla hieman taustaväriä, kun hiiri on painikkeen päällä.
- **Tärkeimmät ominaisuudet**:
  - **background-color: #218838**: Muuttaa taustavärin hieman tummemmaksi vihreäksi, kun hiiri on painikkeen päällä, tarjoten visuaalista palautetta käyttäjälle.

## 10. **.hidden**

- **Mitä se on**: Yleishyödyllinen luokka, joka piilottaa elementit näkyvistä, kunnes ne täytyy näyttää (kuten Next- ja Reset-painikkeet).
- **Tarkoitus**: Tämä luokka varmistaa, että elementit ovat piilotettuina oletuksena, kuten tulos-osio tai nollauspainike, kunnes tietovisan logiikka tarvitsee niitä.
- **Tärkeimmät ominaisuudet**:
  - **display: none**: Piilottaa elementin kokonaan sivulta, estäen sen tilan varaamisen asettelussa.

## 11. **.result**

- **Mitä se on**: Muotoilee tulososion, jossa tietovisailun pistemäärä näytetään tietovisailun lopussa.
- **Tarkoitus**: Tulos teksti on muotoiltu erottumaan muusta sisällöstä, jotta käyttäjän pistemäärä on selkeä ja helppo lukea.
- **Tärkeimmät ominaisuudet**:
  - **font-weight: bold**: Tekee tulostekstistä lihavoidun, varmistaen, että se kiinnittää käyttäjän huomion.
  - **margin-top**: Lisää tilaa tulostekstin yläpuolelle, erottaen sen muista elementeistä ja tehden siitä näkyvämmän.

## 12. **.correct**

- **Mitä se on**: Muotoilee vastausvaihtoehdon, joka on oikein, kun käyttäjä valitsee sen.
- **Tarkoitus**: Tämä luokka ilmaisee visuaalisesti, mikä vaihtoehto oli oikea vastaus, muuttamalla sen taustavärin vihreäksi.
- **Tärkeimmät ominaisuudet**:
  - **background-color: #28a745**: Asettaa taustavärin vihreäksi, joka on yleisesti tunnettu positiivisena tai oikeana merkkinä.
  - **color: white**: Muuttaa tekstin värin valkoiseksi paremman kontrastin saavuttamiseksi vihreää taustaa vasten.

## 13. **.incorrect**

- **Mitä se on**: Muotoilee vastausvaihtoehdon, joka on väärin, kun käyttäjä valitsee sen.
- **Tarkoitus**: Tämä luokka ilmaisee visuaalisesti, että käyttäjä valitsi väärän vaihtoehdon, muuttamalla sen taustavärin punaiseksi.
- **Tärkeimmät ominaisuudet**:
  - **background-color: #dc3545**: Asettaa taustavärin punaiseksi, joka on yleisesti liitetty virheisiin tai väärään toimintaan.
  - **color: white**: Muuttaa tekstin värin valkoiseksi paremman näkyvyyden saavuttamiseksi punaista taustaa vasten.
