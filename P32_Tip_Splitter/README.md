# Nettisivu: https://keudaope.github.io/JSProjekteja/P32_Tip_Splitter

# **Johdanto**

Tip Splitter on hyödyllinen sovellus, joka jakaa laskun ja tipin määrän usean henkilön kesken. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla, kun he oppivat käsittelemään käyttäjän syötteitä, suorittamaan laskelmia ja päivittämään DOM:ia dynaamisesti. Käyttäjät voivat syöttää laskun summan, tipin prosenttiosuuden ja henkilöiden määrän, minkä jälkeen sovellus laskee jokaisen henkilön maksettavan osuuden.

# **HTML Selitys**

## 1. DOCTYPE-ilmoitus (<code><</code>!DOCTYPE html>)

- **Mikä se on:** <code><</code>!DOCTYPE html -ilmoitus määrittää, että dokumentti on kirjoitettu HTML5:llä.
- **Tarkoitus:** Se varmistaa, että verkkosivu tulkitaan nykyaikaisilla HTML5-standardeilla kaikissa selaimissa, estäen ongelmat vanhojen selainten renderöintitilojen kanssa.
- **Tärkeä yksityiskohta:** DOCTYPE-ilmoituksen sisällyttäminen varmistaa yhtenäisen renderöinnin eri selaimissa.

## 2. HTML-tagi (<code><</code>html lang="en">)

- **Mikä se on:** <code><</code>html-tagi on juurielementti, joka käärii kaikki muut HTML-elementit sivulla. lang="en" -attribuutti määrittää dokumentin kieleksi englannin.
- **Tarkoitus:** Lang-attribuutti on tärkeä saavutettavuustyökaluille ja hakukoneille, koska se ilmoittaa dokumentin ensisijaisen kielen.
- **Tärkeä yksityiskohta:** Kielen määrittäminen parantaa hakukoneoptimointia (SEO) ja saavutettavuutta, tehden sisällöstä helpommin käsiteltävää hakukoneille ja avustaville teknologioille.

## 3. Head-tagi (<code><</code>head>)

- **Mikä se on:** <code><</code>head-osio sisältää metatietoja ja linkkejä ulkoisiin resursseihin, kuten tyylitiedostoihin ja fontteihin.
- **Tarkoitus:** <code><</code>head-tagi sallii selaimen ladata tiedot, jotka ovat tarpeen sivun renderöintiä varten, kuten CSS, fontit ja metatiedot.
- **Tärkeät yksityiskohdat:**
  - **Meta Charset:** (<code><</code>meta charset="UTF-8">) määrittää merkistön UTF-8:ksi, tukien laajaa merkkivalikoimaa, varmistaen tekstin oikean näyttämisen.
  - **Viewport Meta Tag:** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">) varmistaa, että sivu on responsiivinen ja skaalautuu eri näyttökokoihin, erityisesti mobiililaitteisiin.
  - **Otsikkotagi:** (<code><</code>title>Tip Splitter<code><</code>/title>) asettaa tekstin, joka näkyy selaimen välilehdessä, viitaten sivun sisältöön.
  - **Google Fonts -linkki:** (<code><</code>link href="[https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap](https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap)" rel="stylesheet">) lataa "Roboto"-fontin Google Fontsista, antaen sovellukselle modernin ja selkeän ilmeen, joka parantaa luettavuutta.
  - **CSS-linkki:** (<code><</code>link rel="stylesheet" href="styles.css">) linkittää ulkoiseen CSS-tiedostoon (styles.css), joka sisältää sovelluksen visuaaliset tyylit.

## 4. Body-tagi (<code><</code>body>)

- **Mikä se on:** <code><</code>body-tagi sisältää kaiken näkyvän sisällön verkkosivulla, kuten syöttökentät, painikkeen ja tuloksen.
- **Tarkoitus:** <code><</code>body on alue, johon kaikki käyttäjälle näkyvä sisältö sijoitetaan. Se tyylitellään CSS:n avulla ja sitä käsitellään JavaScriptillä luoden responsiivisen ja interaktiivisen käyttökokemuksen.
- **Tärkeä yksityiskohta:** Kaikki dynaaminen ja interaktiivinen sisältö sisällytetään <code><</code>body-tagin sisään, tehden siitä tärkeimmän alueen, jossa käyttäjä toimii sisällön kanssa.

## 5. Container-divi (<code><</code>div class="container">)

- **Mikä se on:** <code><</code>div-elementti, jossa on container-luokka, käärii pääsisällön, mukaan lukien syöttökentät, painikkeen ja tuloksen.
- **Tarkoitus:** Se ryhmittelee yhteen liittyvät elementit mahdollistaen keskitetyn tyylittelyn ja asettelun hallinnan. Container varmistaa, että sisältö näkyy korttimaisessa rakenteessa, erottaen sen visuaalisesti muusta sivusta.
- **Tärkeä yksityiskohta:** Container-luokka on keskeinen CSS-ominaisuuksien, kuten taustan, täytteen ja varjon, soveltamisessa, antaen sovellukselle siistin ja modernin ulkoasun.

## 6. Otsikkotagi (<code><</code>h1>Tip Splitter<code><</code>/h1>)

- **Mikä se on:** <code><</code>h1-tagi näyttää sivun pääotsikon "Tip Splitter".
- **Tarkoitus:** Se antaa selkeän otsikon, joka ilmoittaa heti käyttäjille sovelluksen tarkoituksen. <code><</code>h1 on myös tärkeä hakukoneoptimoinnin kannalta, koska se korostaa sivun tärkeintä sisältöä.
- **Tärkeä yksityiskohta:** Ylimmän tason otsikkona <code><</code>h1 on tyylitelty erottuvaksi, varmistaen, että se on ensimmäinen asia, jonka käyttäjät huomaavat sivun latautuessa.

## 7. Syöttökentät (<code><</code>input type="number" id="bill-amount" placeholder="Enter bill amount">)

- **Mikä se on:** <code><</code>input-elementit sallivat käyttäjien syöttää numerotiedot laskun määrälle, tipin prosenttiosuudelle ja henkilöiden määrälle.
  - **type="number":** Määrittää, että syötteen tulee sisältää vain numeerisia arvoja.
  - **id="bill-amount" / id="tip-percentage" / id="number-of-people":** Antaa yksilölliset tunnisteet, jotta JavaScript voi käsitellä ja muokata jokaista syöttökenttää.
  - **placeholder="Enter bill amount":** Antaa vihjeen käyttäjälle siitä, mitä kenttään tulee syöttää.
  - **step="0.01":** Varmistaa, että käyttäjä voi syöttää desimaalilukuja, mikä on ihanteellista laskujen summien ja prosenttien kohdalla.
- **Tarkoitus:** Syöttökentät sallivat käyttäjien syöttää tarvittavat tiedot (laskun summa, tipin prosenttiosuus, henkilöiden määrä) laskeakseen, kuinka paljon kukin maksaa.
- **Tärkeä yksityiskohta:** Nämä syötteet varmistavat, että vain kelvollisia numeerisia arvoja syötetään ja käsitellään asianmukaisesti sovelluksessa.

## 8. Painike (<code><</code>button id="calculate-button">Calculate<code><</code>/button>)

- **Mikä se on:** <code><</code>button-elementti edustaa painiketta, jota käyttäjät klikkaavat käynnistääkseen laskutoimituksen.
  - **id="calculate-button":** Antaa tunnisteen, jotta JavaScript voi liittää tapahtumankuuntelijan ja käynnistää laskutoimituksen, kun painiketta klikataan.
- **Tarkoitus:** Toimii sovelluksen ensisijaisena interaktiivisena elementtinä, joka käynnistää sovelluksen toiminnallisuuden. Kun painiketta painetaan, se aloittaa prosessin, jossa lasketaan, kuinka paljon jokaisen tulee maksaa.
- **Tärkeä yksityiskohta:** Painikkeen id mahdollistaa JavaScriptin helposti liittää toiminnallisuuden siihen, yhdistäen sen calculateSplit-funktioon skriptissä.

## 9. Tulos-divi (<code><</code>div class="result" id="result">)

- **Mikä se on:** <code><</code>div-elementti, jossa on result-luokka, toimii paikkamerkkinä laskutoimituksen tuloksen näyttämiseen.
  - **id="result":** Antaa yksilöllisen tunnisteen, jotta JavaScript voi dynaamisesti päivittää tämän elementin sisällön.
- **Tarkoitus:** Tämä elementti on aluksi tyhjä, mutta JavaScript päivittää sen dynaamisesti näyttämään lasketun summan, jonka jokaisen tulee maksaa syötettyjen tietojen perusteella.
- **Tärkeä yksityiskohta:** Result-divi tarjoaa selkeän, nimetyn alueen, jossa laskettu tulos näytetään käyttäjälle, tehden sovelluksesta dynaamisen.

## 10. Script-tagi (<code><</code>script src="app.js"><code><</code>/script>)

- **Mikä se on:** <code><</code>script-tagi linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää logiikan tipin ja summan laskemiseen ja näyttämiseen.
- **Tarkoitus:** Se erottaa JavaScript-logiikan rakenteesta (HTML) ja tyylittelystä (CSS), noudattaen parhaita käytäntöjä modulaariseen kehitykseen.
- **Tärkeä yksityiskohta:** JavaScript-tiedoston sisällyttäminen ulkoisesti varmistaa, että HTML-tiedosto pysyy selkeänä, samalla kun tipin jakamiseen liittyvä toiminnallisuus säilyy erillisessä, uudelleenkäytettävässä skriptissä.

# **CSS Selitys**

## 1. Global Reset (\*)

- **Mikä se on:** Universaali \*-valitsin soveltaa tyylejä kaikille sivun elementeille.
- **Tarkoitus:** Se nollaa selainten oletustyylit, kuten marginaalit ja täytteet, varmistaen yhtenäisen lähtökohdan kaikille elementeille. **box-sizing: border-box;** -sääntö varmistaa, että täyte ja reunukset sisällytetään elementtien leveyteen ja korkeuteen, mikä helpottaa asettelulaskelmia.
- **Tärkeä yksityiskohta:** Tämä nollaus poistaa erot siitä, kuinka elementit renderöidään eri selaimissa, estäen odottamattomat tilan tai asettelun ongelmat.

## 2. Body-tyylitys (body)

- **Mikä se on:** Body-sääntö määrittää sivun yleisen asettelun ja ulkoasun.
- **Tärkeät ominaisuudet:**
  - **font-family:** 'Roboto', sans-serif;: Käyttää Google Fontsista ladattua "Roboto"-fonttia, antaen sovellukselle modernin ja puhtaan typografian.
  - **background:** linear-gradient(135deg, #74ebd5, #acb6e5);: Lisää diagonaalisen gradientin taustaan, joka siirtyy turkoosista vaaleansiniseen, luoden visuaalisesti houkuttelevan ja raikkaan ilmeen.
  - **display:** flex; justify-content: center; align-items: center;: Käyttää Flexboxia keskittämään sisällön sekä pysty- että vaakasuunnassa, varmistaen, että sovelluksen säiliö on täydellisesti keskitetty näkymään.
  - **height:** 100vh;: Varmistaa, että body vie koko näkymän korkeuden, mahdollistaen sisällön pystykeskityksen.
- **Tarkoitus:** Nämä tyylit varmistavat, että koko sivulla on yhtenäinen asettelu ja että sovelluksen säiliö on visuaalisesti keskitetty selaimen ikkunaan, parantaen käyttäjäkokemusta.

## 3. Container-tyylitys (.container)

- **Mikä se on:** .Container-luokka tyylittää pääsäiliön, joka sisältää syöttökentät, painikkeen ja tulosnäytön.
- **Tärkeät ominaisuudet:**
  - **background-color:** #fff;: Asettaa säiliön taustaväriksi valkoisen, tarjoten siistin ja kontrastisen taustan sisällölle.
  - **padding:** 40px 30px;: Lisää reilusti sisäistä tilaa sisällön ympärille, varmistaen, että syöttökentät, painike ja tulos eivät ole liian ahtaasti.
  - **border-radius:** 15px;: Pyöristää säiliön kulmat modernin ja pehmeän korttimaisen ilmeen saavuttamiseksi.
  - **box-shadow:** 0 10px 30px rgba(0, 0, 0, 0.1);: Lisää hienovaraisen varjon säiliön taakse, antaen sille hieman kohotetun ja syvyydentäyteisen ilmeen.
  - **width:** 100%; max-width: 400px;: Säiliön leveys on 100%, mutta sitä rajoittaa 400px enimmäisleveys, varmistaen, että se pysyy visuaalisesti yhtenäisenä eri näyttökoilla.
  - **text-align:** center;: Keskittää kaiken tekstin ja syöttökentät säiliön sisällä.
- **Tarkoitus:** Nämä tyylit luovat puhtaan, korttimaisen rakenteen sovellukselle ja varmistavat, että kaikki syöttökentät ja painikkeet ovat oikein sijoitettuja ja keskitettyjä.

## 4. Otsikon tyylitys (h1)

- **Mikä se on:** H1-sääntö tyylittää pääotsikon ("Tip Splitter").
- **Tärkeät ominaisuudet:**
  - **font-size:** 2.2em;: Suurentaa otsikon kokoa, jotta se on näkyvä ja helposti luettavissa.
  - **color:** #333;: Asettaa tumman, neutraalin värin otsikolle, varmistaen hyvän kontrastin valkoista taustaa vasten.
  - **margin-bottom:** 20px;: Lisää tilaa otsikon alle erottamaan sen syöttökentistä ja parantaen asettelua.
- **Tarkoitus:** Nämä tyylit varmistavat, että otsikko on visuaalisesti näkyvä ja helposti luettavissa, tarjoten selkeän otsikon sovellukselle.

## 5. Syöttökenttien tyylitys (input[type="number"])

- **Mikä se on:** Input[type="number"]-sääntö tyylittää numeeriset syöttökentät, joissa käyttäjät syöttävät laskun summan, tipin prosenttiosuuden ja henkilöiden määrän.
- **Tärkeät ominaisuudet:**
  - **width:** 100%;: Varmistaa, että syöttökentät vievät koko säiliön leveyden yhtenäisen ulkoasun takaamiseksi.
  - **padding:** 12px;: Lisää mukavaa sisäistä tilaa syöttökenttiin, jotta ne ovat helppokäyttöisiä.
  - **margin-bottom:** 15px;: Lisää tilaa jokaisen syöttökentän alle, erottamaan ne toisistaan ja parantaen visuaalista asettelua.
  - **border:** 1px solid #ccc;: Asettaa kevyen reunuksen syöttökenttien ympärille niiden reunojen määrittelemiseksi.
  - **border-radius:** 8px;: Pyöristää syöttökenttien kulmat modernin ja pehmeän ulkoasun saavuttamiseksi.
  - **text-align:** center;: Varmistaa, että syötetyt arvot ovat keskitettynä syöttökentissä, parantaen luettavuutta.
  - **box-shadow:** 0 5px 15px rgba(0, 0, 0, 0.05);: Lisää pehmeän varjon syöttökenttien alle, luoden syvyyden ja modernin ilmeen.
  - **transition:** border-color 0.3s ease;: Lisää sujuvan siirtymäefektin, kun käyttäjä fokusoituu syöttökenttään, parantaen interaktiivisuutta.
- **Tarkoitus:** Nämä tyylit varmistavat, että syöttökentät ovat visuaalisesti miellyttäviä ja helppokäyttöisiä, tarjoten mukavan käyttökokemuksen.

## 6. Syöttökentän fokus-efekti (input[type="number"]:focus)

- **Mikä se on:** soveltaa tyylejä, kun käyttäjä fokusoituu syöttökenttään (esim. klikkaamalla tai napauttamalla sitä).
- **Tärkeät ominaisuudet:**
  - **border-color:** #007bff;: Muuttaa syöttökentän reunuksen värin kirkkaansiniseksi, kun syöttökenttä on fokuksessa, tarjoten selkeää visuaalista palautetta.
  - **outline:** none;: Poistaa selaimen oletuskehykset, jotta ulkoasu pysyy siistinä ja yhtenäisenä.
- **Tarkoitus:** Nämä tyylit tarjoavat välitöntä palautetta käyttäjälle, kun he ovat vuorovaikutuksessa syöttökenttien kanssa, parantaen käytettävyyttä.

## 7. Painikkeen tyylitys (button)

- **Mikä se on:** Button-sääntö tyylittää "Calculate"-painikkeen, tehden siitä visuaalisesti erottuvan ja helppokäyttöisen.
- **Tärkeät ominaisuudet:**
  - **background-color:** #007bff;: Asettaa painikkeen taustaväriksi kirkkaansinisen, tehden siitä erottuvan toimintakehotuksena.
  - **color:** white;: Varmistaa, että painikkeen teksti on helposti luettavissa sinistä taustaa vasten.
  - **padding:** 12px 30px;: Suurentaa painiketta paremman klikattavuuden ja käyttäjävuorovaikutuksen takaamiseksi.
  - **border-radius:** 8px;: Pyöristää painikkeen kulmat vastaamaan sovelluksen yleistä modernia ja pehmeää ilmettä.
  - **cursor:** pointer;: Muuttaa kursorin osoittimeksi hover-tilassa, osoittaen, että painiketta voi klikata.
  - **font-size:** 1em;: Varmistaa, että painikkeen teksti on helposti luettavissa ja mukavan kokoista.
  - **transition:** background-color 0.3s ease, transform 0.2s ease;: Lisää sujuvat siirtymät hover- ja aktiivisille efekteille, parantaen painikkeen tuntumaa.
- **Tarkoitus:** Nämä tyylit tekevät painikkeesta visuaalisesti houkuttelevan ja helppokäyttöisen, rohkaisten käyttäjiä klikkaamaan ja käyttämään sovellusta.

## 8. Painikkeen hover-efekti (button:hover)

- **Mikä se on:** soveltaa tyylejä, kun käyttäjä vie hiiren painikkeen päälle.
- **Tärkeät ominaisuudet:**
  - **background-color:** #0056b3;: Muuttaa painikkeen taustavärin tummemmaksi siniseksi hover-tilassa, tarjoten selkeän visuaalisen palautteen.
  - **transform:** translateY(-2px);: Nostaa painiketta hieman hover-tilassa, luoden hienovaraisen 3D-efektin.
- **Tarkoitus:** Tämä hover-efekti parantaa interaktiivisuutta tarjoamalla välitöntä visuaalista palautetta, tehden painikkeesta dynaamisemman tuntuisen.

## 9. Painikkeen aktiivinen efekti (button:active)

- **Mikä se on:** soveltaa tyylejä, kun painiketta painetaan.
- **Tärkeät ominaisuudet:**
  - **background-color:** #004494;: Tummentaa painikkeen taustaväriä entisestään, kun painiketta painetaan, osoittaen selkeästi vuorovaikutuksen.
  - **transform:** translateY(1px);: Luo hienovaraisen "painallus"-efektin, jäljitellen fyysistä painikkeen klikkaamista.
- **Tarkoitus:** Tämä efekti tarjoaa taktiilista palautetta käyttäjälle, parantaen kokonaisvuorovaikutuksen kokemusta.

## 10. Tulosnäytön tyylitys (.result)

- **Mikä se on:** .Result-luokka tyylittää <code><</code>div-elementin, jossa näytetään laskettu tulos.
- **Tärkeät ominaisuudet:**
  - **margin-top:** 20px;: Lisää tilaa tulosnäytön yläpuolelle, erottaen sen painikkeesta.
  - **font-size:** 1.5em;: Suurentaa tuloksen fonttikokoa, jotta se on selkeästi näkyvissä.
  - **color:** #2d3748;: Asettaa neutraalin tumman värin tulostekstille, varmistaen, että se on helposti luettavissa valkoista taustaa vasten.
  - **min-height:** 50px;: Varmistaa, että tulosalueella on vakaa korkeus, estäen asettelun siirtymät, kun tulos näytetään.
- **Tarkoitus:** Nämä tyylit varmistavat, että tulos näytetään selkeästi ja helposti luettavissa, parantaen käyttäjäkokemusta.

# **JavaScript Selitys**

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...});)

- **Mikä se on:** Tämä on tapahtumankuuntelija, joka odottaa koko HTML-dokumentin latautumisen ja jäsennellyksi tulemisen ennen kuin suorittaa callback-funktion sisällä olevan skriptin.
- **Tarkoitus:** Se varmistaa, että JavaScript käsittelee DOM-elementtejä vasta, kun ne ovat täysin ladattuja ja käytettävissä. Ilman tätä skripti saattaa yrittää manipuloida elementtejä, jotka eivät vielä ole saatavilla, mikä voi johtaa virheisiin.
- **Tärkeä yksityiskohta:** DOMContentLoaded-tapahtuman käyttäminen takaa, että sovellus toimii oikein, koska kaikki elementit (kuten syöttökentät, painike ja tulos-div) ovat käytettävissä, kun skripti suoritetaan.

## 2. DOM-elementtien valitseminen (const billAmountInput = document.getElementById('bill-amount');)

- **Mikä se on:** Nämä rivit valitsevat tarvittavat DOM-elementit (laskun määrä -syöttökenttä, tipin prosenttiosuus -syöttökenttä, henkilöiden lukumäärä -syöttökenttä, laske-painike ja tulos-div) niiden id:n perusteella käyttäen document.getElementById().
  - **billAmountInput:** Viittaa syöttökenttään, johon käyttäjä syöttää laskun kokonaissumman.
  - **tipPercentageInput:** Viittaa syöttökenttään, johon käyttäjä syöttää halutun tipin prosenttiosuuden.
  - **numberOfPeopleInput:** Viittaa syöttökenttään, johon käyttäjä syöttää henkilöiden määrän, jotka jakavat laskun.
  - **calculateButton:** Viittaa painikkeeseen, jota klikattaessa laskutoimitus käynnistyy.
  - **resultDiv:** Viittaa <code><</code>div-elementtiin, jossa laskettu tulos näytetään.
- **Tarkoitus:** Nämä viittaukset mahdollistavat, että JavaScript pääsee käsiksi käyttäjän syöttämiin arvoihin ja päivittää tulos-divin sisällön dynaamisesti.
- **Tärkeä yksityiskohta:** DOM-elementtien tehokas valitseminen ja viittaaminen tekee koodista selkeämpää ja hallittavampaa, mahdollistaen sovelluksen toiminnan oikein käyttäjän syötteiden perusteella.

## 3. Button Click Event Listener (calculateButton.addEventListener('click', calculateSplit);)

- **Mikä se on:** Tämä tapahtumankuuntelija on liitetty "Calculate"-painikkeeseen ja kuuntelee klikkaustapahtumaa. Kun käyttäjä klikkaa painiketta, calculateSplit-funktio käynnistyy.
- **Tarkoitus:** Se varmistaa, että sovellus reagoi käyttäjän toimintaan. Erityisesti se tunnistaa hetken, jolloin käyttäjä haluaa suorittaa laskelman, ja käynnistää tarvittavan funktion.
- **Tärkeä yksityiskohta:** addEventListener('click', ...) mahdollistaa sovelluksen dynaamisen reagoinnin käyttäjän toimintaan, tarjoten interaktiivisen kokemuksen.

## 4. Calculate Split -funktio (function calculateSplit() {...})

- **Mikä se on:** Tämä funktio käsittelee logiikan siitä, kuinka paljon kunkin henkilön tulee maksaa käyttäjän antamien syötteiden perusteella.
- **Vaiheet:**
  - **Syötteiden jäsentäminen:** Funktio hakee ja muuntaa käyttäjän syöttämät arvot syöttökentistä (laskun määrä, tipin prosenttiosuus ja henkilöiden määrä). Se käyttää parseFloat()-funktiota desimaalilukujen (esim. laskun summa, tipin prosentti) ja parseInt()-funktiota kokonaislukujen (esim. henkilöiden määrä) käsittelyyn.
  - **Syötteiden validointi:** Funktio tarkistaa, ovatko syötetyt arvot kelvottomia (isNaN()) tai onko henkilöiden määrä pienempi tai yhtä suuri kuin nolla. Jos validointi epäonnistuu, funktio näyttää virheilmoituksen tulos-divissä.
  - **Tipin laskeminen:** Funktio laskee tipin määrän kertomalla laskun summan tipin prosenttiosuudella ja jakamalla sen 100:lla. Sitten se lisää tipin laskun summaan saadakseen kokonaissumman.
  - **Laskun jakaminen:** Kokonaissumma jaetaan henkilöiden määrällä, jolloin saadaan, kuinka paljon kukin henkilö maksaa.
  - **Tuloksen näyttäminen:** Laskettu summa per henkilö muotoillaan kahden desimaalin tarkkuudella käyttäen toFixed(2)-funktiota ja näytetään tulos-divissä.
- **Tarkoitus:** Tämä funktio on sovelluksen ydin. Se ottaa käyttäjän syötteet, käsittelee ne, suorittaa tarvittavat laskutoimitukset ja näyttää tuloksen. Jos syötteet ovat virheellisiä, funktio käsittelee myös virheilmoitukset.
- **Tärkeä yksityiskohta:** Syötteiden validointi on ratkaisevan tärkeää, jotta sovellus ei tuota vääriä tai virheellisiä tuloksia, kun käyttäjä syöttää virheellisiä tietoja.

## 5. Käyttäjän syötteiden jäsentäminen (const billAmount = parseFloat(billAmountInput.value);)

- **Mikä se on:** Tämä rivi hakee syöttökenttään syötetyn arvon, muuntaa sen desimaaliluvuksi käyttäen parseFloat()-funktiota ja tallentaa sen billAmount-muuttujaan.
- **Tarkoitus:** Käyttäjän syöte, joka on aluksi merkkijono, täytyy muuntaa numeroksi, jotta siihen voidaan soveltaa matemaattisia operaatioita. Sama prosessi toistetaan tipPercentage- ja numberOfPeople-syötteille.
- **Tärkeä yksityiskohta:** Syötteiden jäsentäminen varmistaa, että tietoja voidaan käyttää laskutoimituksiin, ja NaN-arvojen (Not-a-Number) tarkistaminen varmistaa syötteiden kelvollisuuden.

## 6. Syötteiden validointi (if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numberOfPeople) || numberOfPeople <= 0) {...})

- **Mikä se on:** Tämä validointi tarkistaa, ovatko syötetyt arvot kelvottomia (eli NaN) tai onko henkilöiden määrä pienempi tai yhtä suuri kuin 0.
- **Tarkoitus:** Se varmistaa, että kaikki syötteet ovat kelvollisia ennen laskutoimitusten suorittamista. Jos jokin syöte on kelvoton, funktio näyttää virheilmoituksen tulos-divissä.
- **Tärkeä yksityiskohta:** Käyttäjän syötteiden validointi on tärkeää, jotta sovellus ei tuota vääriä tai järjettömiä tuloksia, erityisesti matemaattisten operaatioiden yhteydessä.

## 7. Tipin ja kokonaissumman laskeminen (const tipAmount = billAmount \* (tipPercentage / 100);)

- **Mikä se on:** Tämä rivi laskee tipin kertomalla laskun summan tipin prosenttiosuudella (joka jaetaan 100:lla prosenttiosuuden muuttamiseksi desimaaliksi).
- **Tarkoitus:** Tämä on ensimmäinen askel siinä, kuinka paljon kukin henkilö maksaa. Tipin määrä lisätään laskun summaan, jolloin saadaan kokonaissumma.
- **Tärkeä yksityiskohta:** Jakamalla tipin prosenttiosuuden 100:lla sovellus muuntaa käyttäjän antaman prosenttiosuuden muotoon, jota voidaan käyttää laskennassa.

## 8. Määrän laskeminen per henkilö (const amountPerPerson = totalAmount / numberOfPeople;)

- **Mikä se on:** Tämä rivi jakaa kokonaissumman (lasku + tipit) henkilöiden määrällä, jolloin saadaan summa, jonka jokainen maksaa.
- **Tarkoitus:** Tämä on sovelluksen keskeinen tulos. Se kertoo jokaiselle käyttäjälle, kuinka paljon heidän täytyy maksaa laskun ja tipin jakamisen jälkeen.
- **Tärkeä yksityiskohta:** Jakamalla kokonaissumman henkilöiden määrällä sovellus tarjoaa oikeudenmukaisen ja tarkan jaon kokonaissummasta.

## 9. Tuloksen näyttäminen (resultDiv.textContent = `Each person pays: $${amountPerPerson.toFixed(2)};`)

- **Mikä se on:** Tämä rivi päivittää tulos-divin sisällön näyttämään, kuinka paljon jokaisen henkilön täytyy maksaa. Summa muotoillaan kahden desimaalin tarkkuudella käyttäen toFixed(2)-funktiota.
- **Tarkoitus:** Se tarjoaa käyttäjälle selkeän ja helposti luettavan tuloksen, joka näyttää tarkalleen, kuinka paljon kukin henkilö on velkaa.
- **Tärkeä yksityiskohta:** Tuloksen muotoilu kahden desimaalin tarkkuudella varmistaa, että tulos on tarkka ja käyttäjäystävällinen, erityisesti valuuttojen kanssa käsiteltäessä.
