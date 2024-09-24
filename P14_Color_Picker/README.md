# Nettisivu: https://keudaope.github.io/JSProjekteja/P14_Color_Picker

# **Johdanto**

**Color Picker App** on hyödyllinen työkalu, joka sallii käyttäjien valita ja kopioida värejä helposti. Tämä projekti auttaa aloittelijoita harjoittelemaan **JavaScriptiä, HTML:ää ja CSS:ää** samalla kun opitaan käsittelemään käyttäjän syötteitä, hallitsemaan tilaa ja päivittämään DOMin dynaamisesti. Käyttäjät voivat valita värin käyttämällä värinsyöttöelementtiä ja kopioida valitun värin **hex-koodin** leikepöydälle.

# **HTML Selitys**

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on**: <code><</code>!DOCTYPE html> -määritys kertoo selaimelle, että dokumentti on kirjoitettu HTML5-kielellä.
- **Tarkoitus**: Tämä varmistaa, että HTML5:n modernit ominaisuudet ovat käytettävissä, ja selain renderöi sivun standardien mukaisesti.
- **Tärkeä yksityiskohta**: Sisällyttämällä <code><</code>!DOCTYPE html> vältetään yhteensopivuusongelmat eri selainten välillä ja taataan uusimpien web-standardien käyttö.

## 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on**: <code><</code>html lang="en"> -elementti on dokumentin juurielementti. Lang="en" -attribuutti ilmoittaa, että sivun sisältö on englanniksi.
- **Tarkoitus**: Lang-attribuutti parantaa hakukoneoptimointia (SEO) ja saavutettavuutta, jolloin hakukoneet ja apuvälineet pystyvät tulkitsemaan sivun kielen oikein.
- **Tärkeä yksityiskohta**: Kielen määrittely parantaa sivun saavutettavuutta erityisesti ruudunlukijoille ja muille apuvälineille.

## 3. Head Section (<code><</code>head>):

- **Mikä se on**: <code><</code>head>-elementti sisältää metatietoja verkkosivusta, linkkejä ulkoisiin resursseihin (kuten CSS ja fontit) sekä sivun otsikon.
- **Tarkoitus**: Se määrittelee, miten sivu esitetään (otsikon, tyylitiedostojen ja fonttien kautta) ja asettaa sivun oikein latausta ja näyttöä varten.
- **Tärkeät yksityiskohdat**:
  - **Merkistökoodaus (<code><</code>meta charset="UTF-8">)**: Määrittelee, että sivu käyttää UTF-8-koodausta, joka tukee laajasti erilaisia kieliä ja merkkejä.
  - **Näkymämetatagi (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">)**: Varmistaa, että sivu on responsiivinen, sopeutuen eri näyttöjen kokoon.
  - **Otsikkotagi (<code><</code>title>Modern Color Picker</code>)**: Otsikko näkyy selaimen välilehdessä ja on tärkeä SEO:n kannalta, antaen hakukoneille tietoa sivun tarkoituksesta.
  - **Google Fonts -linkki (<code><</code>link>)**: Tämä tagi tuo "Poppins"-fontin Google Fontsista, tarjoten sivulle modernin ja selkeän typografian.

## 4. Body Tag (<code><</code>body>):

- **Mikä se on**: <code><</code>body> -elementti sisältää kaiken näkyvän sisällön sivulla, mukaan lukien tekstin, painikkeet ja syöttökentät.
- **Tarkoitus**: Body pitää sisällään kaiken käyttäjälle näkyvän sisällön ja hallitsee sen rakennetta, tyylitystä (CSS:n avulla) ja vuorovaikutusta (JavaScriptin avulla).
- **Tärkeä yksityiskohta**: Kaikki <code><</code>body>-elementin sisällä oleva sisältö on osa käyttäjän vuorovaikutuksessa olevaa sisältöä. Ulkoiset tyylitiedostot ja JavaScript-tiedostot linkitetään tänne paremman ylläpidettävyyden vuoksi.

## 5. Main Container (<code><</code>div class="container">):

- **Mikä se on**: Tämä <code><</code>div class="container"> käärii koko värinvalintasovelluksen sisäänsä, sisältäen otsikon, värinsyötön ja painikkeen.
- **Tarkoitus**: Se ryhmittelee liittyvät elementit (otsikon, syötön ja painikkeen) yhdeksi säilöksi, jotta niiden tyylitys ja asettelu on helppoa hallita. Säilön käyttö auttaa soveltamaan yhtenäistä muotoilua, kuten taustaväriä, tyynyjä ja reunuksia.
- **Tärkeä yksityiskohta**: Luokka "container" mahdollistaa helpon kohdistamisen CSS:ssä, jossa voimme soveltaa tyylejä, kuten taustaväriä, varjoja ja tyynyjä, sovelluksen ulkoasun määrittämiseksi.

## 6. Heading (<code><</code>h1>):

- **Mikä se on**: <code><</code>h1> -elementti on ylimmän tason otsikko, joka edustaa sovelluksen otsikkoa.
- **Tarkoitus**: Otsikko ilmoittaa käyttäjälle heti sovelluksen tarkoituksen ja antaa sivulle selkeän otsikon, parantaen käyttäjäkokemusta.
- **Tärkeä yksityiskohta**: <code><</code>h1> on tärkeä SEO:lle ja saavutettavuudelle, sillä se antaa selkeän osoituksen sivun pääsisällöstä.

## 7. Color Input Field (<code><</code>input type="color" id="color-picker">):

- **Mikä se on**: Tämä on värinsyöttökenttä (<code><</code>input type="color" id="color-picker">), joka sallii käyttäjien valita värin ja palauttaa valitun värin heksadesimaaliarvon.
- **Tarkoitus**: Syöttökenttä mahdollistaa käyttäjien valita värin visuaalisen värinvalitsimen avulla. Kun väri on valittu, sovellus näyttää vastaavan heksadesimaaliarvon.
- **Tärkeä yksityiskohta**: id="color-picker" mahdollistaa JavaScriptin viitata syöttökenttään ja hakea valitun värin arvoa näytettäväksi tai käsiteltäväksi.

## 8. Color Code Display (<code><</code>div class="color-code" id="color-code">#000000</code>):

- **Mikä se on**: Värikoodin näyttö <code><</code>div class="color-code" id="color-code"> näyttää valitun värin heksadesimaaliarvon.
- **Tarkoitus**: Tämä elementti päivittyy dynaamisesti ja näyttää valitun värin heksadesimaaliarvon.
- **Tärkeä yksityiskohta**: id="color-code" mahdollistaa JavaScriptin päivittää tämän <code><</code>div>-elementin teksti valitun värin heksadesimaaliarvolla. Oletusarvoisesti se on asetettu mustaksi (#000000).

## 9. Copy Button (<code><</code>button id="copy-button">):

- **Mikä se on**: Kopiointipainike (<code><</code>button id="copy-button">Copy Color</code>) on napsautettava painike, joka antaa käyttäjille mahdollisuuden kopioida näytetyn värikoodin leikepöydälle.
- **Tarkoitus**: Tämä painike tarjoaa käyttäjille kätevän tavan kopioida valitun värin heksadesimaaliarvo ja käyttää sitä muissa sovelluksissa.
- **Tärkeä yksityiskohta**: id="copy-button" mahdollistaa JavaScriptin käsitellä klikkaustapahtumaa, jolloin väriarvo kopioidaan leikepöydälle. Käyttäjälle annetaan palautetta toiminnon suorittamisesta (esim. muuttamalla painikkeen teksti "Copied!").

## 10. JavaScript Link (<code><</code>script src="app.js">):

- **Mikä se on**: JavaScript-linkki (<code><</code>script src="app.js"></code>) yhdistää ulkoiseen JavaScript-tiedostoon, joka hallitsee sovelluksen vuorovaikutusta.
- **Tarkoitus**: JavaScript-logiikan erottaminen ulkoiseen tiedostoon pitää HTML:n siistinä ja helposti ylläpidettävänä. JavaScript-tiedosto hallitsee käyttäjän vuorovaikutuksia, kuten värin valintaa ja värikoodin kopioimista leikepöydälle.
- **Tärkeä yksityiskohta**: Ulkoisten skriptien käyttö on paras käytäntö puhtaan ja modulaarisen koodin ylläpitämiseen. Tämä lähestymistapa parantaa skaalautuvuutta ja varmistaa, että HTML keskittyy sisältörakenteeseen, kun taas JavaScript hoitaa käyttäytymisen.

# **CSS Selitys**

## 1. Global Reset (\* Selector):

- **Mikä se on**: Yleinen \*-valitsin kohdistaa tyylejä kaikkiin sivun elementteihin.
- **Tarkoitus**: Se nollaa oletusmarginaalit ja -täytteet sekä soveltaa **box-sizing: border-box** varmistaakseen, että täytteet ja reunukset sisältyvät elementtien kokonaisleveyteen ja -korkeuteen. Tämä luo yhtenäisyyttä asetteluun ja tilan hallintaan eri selaimissa.
- **Tärkeä yksityiskohta**: **box-sizing: border-box;** sääntö helpottaa elementtien koon hallintaa erityisesti silloin, kun lisätään täytettä tai reunuksia, sillä kokonaiskoko pysyy ennustettavana.

## 2. Body Styling (body):

- **Mikä se on**: Body-sääntö soveltaa globaaleja tyylejä, jotka vaikuttavat koko sivun asetteluun ja ulkoasuun.
- **Tarkoitus**:
  - **Font Family**: **font-family: 'Poppins', sans-serif;** soveltaa modernin ja selkeän fontin Google Fontsista, parantaen sovelluksen visuaalista ilmettä ja luettavuutta.
  - **Background**: **background: linear-gradient(135deg, #74ebd5, #acb6e5);** luo viistoon kulkevan gradienttitaustan, joka siirtyy vaaleasta turkoosista pehmeään violettiin, antaen sovellukselle eloisan ja modernin ulkonäön.
  - **Layout**: **display: flex; justify-content: center; align-items: center; height: 100vh;** käyttää Flexboxia keskittääkseen sovelluksen sekä vaaka- että pystysuunnassa, varmistaen että se pysyy näkymän keskellä riippumatta näytön koosta.
  - **Text Color**: **color: #333;** asettaa tekstin väriksi tummanharmaan, luoden vahvan kontrastin vaalean taustan kanssa.
- **Tärkeä yksityiskohta**: Yhdistämällä Flexboxin ja täysikokoisen näkymän korkeus (**height: 100vh;**) varmistetaan, että sovellus on täydellisesti keskitetty, mikä luo visuaalisesti tasapainoisen ulkoasun millä tahansa laitteella.

## 3. Container Styling (.container):

- **Mikä se on**: Tämä sääntö muotoilee säilöelementin, joka sisältää kaiken sovelluksen sisällön (otsikko, värinvalitsin ja painike).
- **Tarkoitus**:
  - **Background Color**: **background-color: #fff;** tarjoaa puhtaan, valkoisen taustan säilölle, mikä saa sisällön erottumaan värikkään gradientin taustalta.
  - **Padding**: **padding: 30px;** varmistaa, että sisällön ympärillä on tarpeeksi sisätilaa, mikä parantaa luettavuutta ja visuaalista houkuttelevuutta.
  - **Border Radius**: **border-radius: 15px;** lisää pehmeät, pyöristetyt kulmat säilöön, antaen sille modernin, korttimaisen ulkonäön.
  - **Box Shadow**: **box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);** luo hienovaraisen varjon säilön ympärille, lisäten syvyyttä ja tehden siitä hieman koholla näyttävän taustasta.
  - **Transition**: **transition: transform 0.3s ease;** varmistaa sujuvan zoomausvaikutuksen, kun säilöön viedään kursori, parantaen interaktiivisuutta.
  - **Width**: **width: 350px;** määrittää säilölle kiinteän leveyden, pitäen asettelun siistinä ja yhdenmukaisena.
- **Tärkeä yksityiskohta**: Pehmeän varjon, pyöristettyjen kulmien ja sujuvien siirtymien yhdistelmä antaa säilölle modernin ja huolitellun ulkoasun, joka muistuttaa kelluvaa korttia.

## 4. Hover Effect on Container (.container:hover):

- **Mikä se on**: Tämä sääntö aktivoituu, kun käyttäjä vie kursorin säilön päälle.
- **Tarkoitus**: **transform: scale(1.05);** suurentaa säilöä hieman, luoden hienovaraisen zoomausvaikutuksen, joka parantaa interaktiivisuutta.
- **Tärkeä yksityiskohta**: Hover-vaikutus tekee sovelluksesta dynaamisemman ja reagoivamman, antaen sille hienoisen kohotuksen, mikä parantaa käyttäjäkokemusta ilman, että muotoilu menee liialliseksi.

## 5. Heading Styling (h1):

- **Mikä se on**: Tämä sääntö muotoilee <code><</code>h1>-otsikon, joka näyttää sovelluksen otsikon.
- **Tarkoitus**:
  - **Font Size**: **font-size: 2.5em;** tekee otsikosta näkyvän ja helposti luettavan.
  - **Margin Bottom**: **margin-bottom: 20px;** luo tilaa otsikon ja värinvalitsimen syöttökentän väliin, parantaen visuaalista asettelua.
  - **Color**: **color: #2d3748;** asettaa tekstin väriksi tumman sävyn, mikä takaa vahvan kontrastin ja luettavuuden.
- **Tärkeä yksityiskohta**: Otsikko on muotoiltu kiinnittämään huomiota sovelluksen pääotsikkona, tarjoten selkeän visuaalisen hierarkian ja keskittymispisteen käyttäjille.

## 6. Color Picker Input (input[type="color"]):

- **Mikä se on**: Tämä sääntö muotoilee värinsyöttökentän, jossa käyttäjät voivat valita värin.
- **Tarkoitus**:
  - **Width**: **width: 100%;** varmistaa, että syöttökenttä vie koko leveyden vanhempielementistään, pitäen asettelun siistinä.
  - **Height**: **height: 50px;** tekee syöttökentästä riittävän suuren helppoon käyttöön, erityisesti kosketuslaitteilla.
  - **Border Radius**: **border-radius: 8px;** lisää pyöristetyt kulmat syöttökenttään, linjaten sen sovelluksen yleisen muotokielen kanssa.
  - **Box Shadow**: **box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);** lisää syvyyttä syöttökenttään kevyen varjon avulla, mikä saa sen erottumaan paremmin.
  - **Transition**: **transition: box-shadow 0.3s ease;** mahdollistaa sujuvan varjosiirtymän, kun syöttökenttään viedään kursori.
- **Tärkeä yksityiskohta**: Suuri ja reagoiva syöttökenttä on helppokäyttöinen, ja varjovaikutus lisää syvyyttä suunnitteluun, parantaen visuaalista houkuttelevuutta.

## 7. Hover Effect on Color Picker (input[type="color"]:hover):

- **Mikä se on**: Tämä sääntö aktivoituu, kun käyttäjä vie kursorin värinvalitsinsyötön päälle.
- **Tarkoitus**: **box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);** lisää varjon intensiteettiä, mikä saa syöttökentän erottumaan enemmän ja ilmaisee, että se on interaktiivinen.
- **Tärkeä yksityiskohta**: Tämä hienovarainen hover-vaikutus parantaa interaktiivisuutta, antaen käyttäjille visuaalista palautetta, kun he ovat tekemisissä syöttökentän kanssa.

## 8. Color Code Display (.color-code):

- **Mikä se on**: Tämä sääntö muotoilee <code><</code>div>-elementin, joka näyttää valitun värin heksadesimaaliarvon.
- **Tarkoitus**:
  - **Font Size**: **font-size: 1.5em;** tekee värikoodista helposti luettavan.
  - **Margin Bottom**: **margin-bottom: 20px;** luo tilaa värikoodin ja painikkeen väliin, varmistaen hyvin rakennetun asettelun.
  - **Font Weight**: **font-weight: 500;** antaa tekstille vahvemman ulkoasun, mikä tekee siitä näkyvämmän.
  - **Color**: **color: #2d3748;** varmistaa, että värikoodi on luettavissa vahvalla kontrastilla valkoista taustaa vasten.
- **Tärkeä yksityiskohta**: Värikoodinäyttö on muotoiltu selkeäksi ja näkyväksi, jotta käyttäjät voivat helposti nähdä valitun värin heksadesimaaliarvon.

## 9. Button Styling (button):

- **Mikä se on**: Tämä sääntö muotoilee kopiointipainikkeen, joka sallii käyttäjien kopioida valitun värin heksadesimaaliarvon leikepöydälle.
- **Tarkoitus**:
  - **Padding**: **padding: 12px 24px;** tarjoaa tarpeeksi tilaa painikkeen sisällä, mikä tekee siitä mukavan napsauttaa.
  - **Background Color**: **background-color: #28a745;** antaa painikkeelle vihreän värin, joka ilmaisee positiivisen toiminnon (värin kopioiminen).
  - **Text Color**: **color: white;** varmistaa, että teksti erottuu selkeästi vihreää taustaa vasten.
  - **Border and Border Radius**: **border: none; border-radius: 8px;** poistaa oletusreunan ja lisää pyöristetyt kulmat, jotta painike sopii sovelluksen yleiseen ulkoasuun.
  - **Cursor**: **cursor: pointer;** osoittaa, että painike on napsautettavissa, parantaen käytettävyyttä.
  - **Font Size**: **font-size: 1.1em;** tekee tekstistä riittävän suuren, jotta se on helposti luettavissa.
  - **Transition and Transform**: **transition: background-color 0.3s ease, transform 0.2s ease;** luo sujuvat animaatiot, kun painikkeeseen viedään kursori.
- **Tärkeä yksityiskohta**: Painike on suunniteltu visuaalisesti erottuvaksi, ja hover-vaikutukset parantavat interaktiivisuutta ja parantavat käyttäjäkokemusta.

## 10. Hover Effect on Button (button:hover):

- **Mikä se on**: Tämä sääntö aktivoituu, kun käyttäjä vie kursorin painikkeen päälle.
- **Tarkoitus**:
  - **Background Color**: **background-color: #218838;** tummentaa painiketta hover-tilassa, antaen käyttäjälle visuaalista palautetta.
  - **Transform**: **transform: translateY(-3px);** nostaa painiketta hieman, luoden 3D-vaikutelman, joka tekee interaktiosta dynaamisemman.
- **Tärkeä yksityiskohta**: Hover-vaikutus antaa välittömän palautteen käyttäjälle, parantaen yleistä vuorovaikutusta ja lisäämällä sovelluksen interaktiivisuutta.

## 11. Responsive Design (@media (max-width: 400px)):

- **Mikä se on**: Tämä media query säätää säilön kokoa pienemmille näytöille (kuten mobiililaitteille).
- **Tarkoitus**: **width: 90%;** varmistaa, että säilö mukautuu pienemmille näytöille, tarjoten responsiivisen asettelun, joka toimii hyvin kaikilla laitteilla.
- **Tärkeä yksityiskohta**: Responsiivinen suunnittelu varmistaa, että sovellus säilyttää käyttäjäystävällisen asettelun sekä suurilla että pienillä näytöillä, parantaen käytettävyyttä kaikilla laitteilla.

# **JavaScript Selitys**

## 1. DOMContentLoaded Event Listener:

- **Mikä se on**: **document.addEventListener('DOMContentLoaded', ...)** on tapahtumakuuntelija, joka käynnistyy, kun koko HTML-dokumentti on ladattu ja jäsennelty.
- **Tarkoitus**: Tämä varmistaa, että JavaScript-koodi suoritetaan vasta, kun kaikki DOM-elementit (kuten värinvalitsin ja painike) on renderöity sivulle.
- **Tärkeä yksityiskohta**: **DOMContentLoaded**-tapahtuman käyttö varmistaa, että skripti toimii turvallisesti DOM-elementtien kanssa, estäen virheet, joita syntyisi yrittäessä manipuloida elementtejä, joita ei ole vielä ladattu.

## 2. Selecting DOM Elements:

- **Mikä se on**: Tämä koodin osa valitsee tärkeät DOM-elementit, joita tarvitaan sovelluksen interaktiivisuuteen:
  - **colorPicker** valitsee värin syöttökentän.
  - **colorCode** valitsee <code><</code>div>-elementin, jossa näytetään heksadesimaalinen värikoodi.
  - **copyButton** valitsee painikkeen, jota käytetään värikoodin kopiointiin.
- **Tarkoitus**: Nämä viittaukset mahdollistavat skriptin helpon vuorovaikutuksen valittujen elementtien kanssa, kuten valitun värin heksadesimaalikoodin näyttämisen tai kopioi-leikepöydälle-toiminnon mahdollistamisen.
- **Tärkeä yksityiskohta**: **getElementById()**-menetelmän käyttö varmistaa, että skripti pääsee tehokkaasti käsiksi tiettyihin DOM-elementteihin vuorovaikutusta varten.

## 3. Color Picker Input Event Listener:

- **Mikä se on**: Värin syöttökentässä oleva tapahtumakuuntelija (**colorPicker.addEventListener('input', ...)**) kuuntelee kaikkia muutoksia värinvalitsimessa.
- **Tarkoitus**: Tämä funktio päivittää dynaamisesti näytettävän heksadesimaalisen värikoodin aina, kun käyttäjä valitsee uuden värin.
- **Tärkeä yksityiskohta**: Valitun värin heksadesimaalinen arvo näkyy välittömästi käyttöliittymässä, tarjoten reaaliaikaista palautetta käyttäjälle.

## 4. Copy Button Event Listener:

- **Mikä se on**: **copyButton.addEventListener('click', ...)**-tapahtumakuuntelija tunnistaa, kun käyttäjä napsauttaa "Copy Color" -painiketta.
- **Tarkoitus**: Sen avulla käyttäjä voi kopioida näytettävän heksadesimaalisen värikoodin leikepöydälle käyttämällä Clipboard APIa.
- **Tärkeät yksityiskohdat**:
  - **Clipboard API**: Koodi käyttää **navigator.clipboard.writeText()** kopioimaan värikoodin käyttäjän leikepöydälle.
  - **Visuaalinen palaute**: Painikkeen teksti muuttuu **"Copied!"** onnistuneen kopioinnin jälkeen ja palautuu takaisin **"Copy Color"** 2 sekunnin kuluttua, antaen käyttäjälle selvän visuaalisen palautteen.
  - **Virheenkäsittely**: Jos tapahtuu virhe (esim. jos pääsy leikepöydälle evätään), virhe kirjataan konsoliin.

## 5. Clipboard API (navigator.clipboard.writeText):

- **Mikä se on**: **navigator.clipboard.writeText()** on menetelmä, joka sallii tekstin kopioimisen käyttäjän leikepöydälle.
- **Tarkoitus**: Tämä funktio käytetään kopioimaan värikoodi, joka on näytetty **colorCode**-elementissä, jotta käyttäjät voivat helposti liittää koodin muualle (esim. suunnittelutyökaluun tai koodieditoriin).
- **Tärkeä yksityiskohta**: Tämä toiminto parantaa käytettävyyttä antamalla käyttäjille mahdollisuuden kopioida värikoodi yhdellä napsautuksella. Se käyttää lupauksia käsittelemään kopioinnin onnistumisen tai epäonnistumisen.

## 6. Visual Feedback on Copy Action:

- **Mikä se on**: Painikkeen teksti muuttuu **"Copy Color"**-tilasta **"Copied!"**-tilaan tarjoten välitöntä palautetta sen jälkeen, kun värikoodi on onnistuneesti kopioitu leikepöydälle.
- **Tarkoitus**: Tämä palaute parantaa käyttäjäkokemusta vahvistamalla kopiointitoimenpiteen onnistumisen. 2 sekunnin kuluttua painikkeen teksti palautuu tilaan **"Copy Color"**, nollaten käyttöliittymän.
- **Tärkeä yksityiskohta**: Tämä dynaaminen tekstinmuutos tarjoaa selvää palautetta, parantaen sovelluksen interaktiivisuutta ja varmistaen, että käyttäjä tietää kopiointitoimenpiteen onnistuneen.
