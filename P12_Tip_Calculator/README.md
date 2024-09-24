# Nettisivu: https://keudaope.github.io/JSProjekteja/P12_Tip_Calculator

# Johdanto

Tip Calculator -sovellus on käytännöllinen työkalu, joka laskee tipin määrän laskun kokonaissumman ja halutun tipin prosenttiosuuden perusteella. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptin, HTML:n ja CSS:n käyttöä sekä oppimaan, kuinka käsitellä käyttäjän syötteitä, suorittaa peruslaskelmia ja päivittää DOMin dynaamisesti. Käyttäjät voivat syöttää laskun summan, valita tipin prosenttiosuuden ja nähdä lasketun tipin määrän.

# HTML selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on:** <!DOCTYPE html> -deklarointi dokumentin yläosassa määrittää, että verkkosivu on kirjoitettu HTML5-muodossa.
- **Tarkoitus:** Se varmistaa, että selain renderöi dokumentin standardien mukaisessa tilassa ja varmistaa, että modernit ominaisuudet toimivat odotetusti.
- **Tärkeä yksityiskohta:** Sisällytä aina DOCTYPE välttääksesi mahdolliset yhteensopivuusongelmat eri selaimien kanssa ja varmistaaksesi HTML5:n käytön.

## 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on:** <code><</code>html> -tagi on juurielementti, joka ympäröi kaikkia muita verkkosivun elementtejä. lang="en" -attribuutti osoittaa, että sivun sisältö on englanniksi.
- **Tarkoitus:** lang-attribuutti auttaa hakukoneita ja avustavia teknologioita (kuten ruudunlukijoita) määrittämään verkkosivun kielen, mikä parantaa SEO:a ja saavutettavuutta.
- **Tärkeä yksityiskohta:** Kielen määrittäminen juuritasolla on välttämätöntä, jotta sivu on saavutettavissa käyttäjille, jotka ovat riippuvaisia avustavista teknologioista.

## 3. Head Tag (<code><</code>head>):

- **Mikä se on:** <code><</code>head> -elementti sisältää metatietoja verkkosivusta, linkkejä ulkoisiin resursseihin kuten CSS:ään ja fontteihin sekä asettaa sivun otsikon.
- **Tarkoitus:** <code><</code>head> -osio on kriittinen ulkoisten tyylien, fonttien ja muiden resurssien lataamiseen, jotka ovat välttämättömiä verkkosivun toiminnan ja ulkoasun kannalta. Se sisältää myös metatunnisteet responsiivisuutta ja merkistöä varten.
- **Tärkeät yksityiskohdat:**
  - **Meta Tags:**
    - **<code><</code>meta charset="UTF-8">:** Määrittää UTF-8-merkistökoodauksen, joka tukee lähes kaikkia eri kielten merkkejä.
    - **<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">:** Varmistaa, että sivu on responsiivinen säätämällä sisällön leveys vastaamaan laitteen näytön kokoa.
  - **Otsikko (<code><</code>title>):** <code><</code>title>Modern Tip Calculator<code><</code>/title> asettaa otsikon, joka näkyy selaimen välilehdellä ja kuvaa sovelluksen tarkoituksen.
  - **Google Fonts -linkki (<code><</code>link>):** Tämä linkki tuo "Roboto"-fontin Google Fontseista, mikä parantaa visuaalista vetovoimaa tarjoamalla selkeän, modernin typografian.

## 4. Body Tag (<code><</code>body>):

- **Mikä se on:** <code><</code>body> -tagi sisältää kaikki verkkosivun näkyvät sisällöt, mukaan lukien teksti, lomakkeet, painikkeet ja muut interaktiiviset elementit.
- **Tarkoitus:** Kaikki, mitä käyttäjä näkee ja kanssakäy käyttäessään verkkosivua, on <code><</code>body> -tagin sisällä. Se määrittää sisällön rakenteen ja asettelun, joka näkyy selaimessa.
- **Tärkeä yksityiskohta:** body on pääasiallinen säiliö kaikille näkyville elementeille ja se on suoraan yhteydessä CSS:ään ja JavaScriptiin sisällön dynaamiseen näyttämiseen ja muokkaamiseen.

## 5. Calculator Container (<code><</code>div class="calculator-container">):

- **Mikä se on:** Tämä <code><</code>div> -elementti ympäröi koko tip-laskurin sisällön, mukaan lukien lomakkeen ja tulosnäytön.
- **Tarkoitus:** Säilö auttaa ryhmittelemään liittyvät sisällöt yhteen ja mahdollistaa keskitetyn tyylien ja asettelun hallinnan. Se luo laskurin ympärille visuaalisen rajan, mikä helpottaa CSS-sääntöjen soveltamista.
- **Tärkeä yksityiskohta:** class="calculator-container" mahdollistaa tietynlaisten tyylien, kuten taustavärin, täytteiden, varjojen ja siirtymien, käytön. Se parantaa laskurin ulkonäköä antamalla sille korttimaisen ulkoasun.

## 6. Heading (<code><</code>h1>Tip Calculator<code><</code>/h1>):

- **Mikä se on:** <code><</code>h1> -elementti on tason yksi otsikko, joka edustaa sivun pääotsikkoa.
- **Tarkoitus:** Se antaa sivulle selkeän otsikon, joka kertoo käyttäjälle heti sovelluksen tarkoituksen. Tässä tapauksessa otsikko on "Tip Calculator".
- **Tärkeä yksityiskohta:** <code><</code>h1> -elementti on tärkeä sekä hakukoneoptimoinnille (SEO) että saavutettavuudelle, sillä se ilmaisee verkkosivun ensisijaisen otsikon ja sisällön keskipisteen.

## 7. Form Element (<code><</code>form id="tip-form">):

- **Mikä se on:** <code><</code>form> -elementti ympäröi syötekentät ja lähetä-painikkeen, jotka mahdollistavat käyttäjän syöttää tietoja (laskun summa ja tippiprosentti) ja lähettää lomakkeen laskentaa varten.
- **Tarkoitus:** Lomake ryhmittelee kaikki syötekentät yhteen ja tarjoaa tavan käsitellä käyttäjän syöttämiä tietoja. Kun se lähetetään, JavaScript käsittelee lomakedatan ilman, että sivu latautuu uudelleen, kiitos event.preventDefault()-funktion.
- **Tärkeä yksityiskohta:** id="tip-form" mahdollistaa lomakkeen kohdistamisen JavaScriptillä tapahtumien käsittelyä varten, mahdollistaen tipin laskentaprosessin.

## 8. Input Field for Bill Amount (<code><</code>input type="number" id="bill-amount" placeholder="Enter Bill Amount" required>):

- **Mikä se on:** Tämä on <code><</code>input> -elementti, jossa käyttäjät voivat syöttää laskun kokonaissumman. type="number" -attribuutti rajoittaa syötteen vain numeerisiin arvoihin.
- **Tarkoitus:** Se mahdollistaa käyttäjän syöttää laskunsa määrän, joka on välttämätön tipin laskemiseksi. Paikkamerkkiteksti "Enter Bill Amount" auttaa ohjaamaan käyttäjää.
- **Tärkeä yksityiskohta:** required-attribuutti varmistaa, että käyttäjän on annettava kelvollinen syöte ennen lomakkeen lähettämistä, mikä parantaa käyttökokemusta estämällä puutteellisia lähetyksiä.

## 9. Dropdown for Tip Percentage (<code><</code>select id="tip-percentage" required>):

- **Mikä se on:** Tämä on <code><</code>select> -pudotusvalikko, joka sallii käyttäjän valita tipin prosenttiosuuden. Se sisältää useita <code><</code>option> -elementtejä (10%, 15%, 20%, 25%), jotka edustavat yleisiä tipin prosenttiosuuksia.
- **Tarkoitus:** Pudotusvalikko tarjoaa käyttäjille valmiiksi määritetyt valinnat tipin prosentille, mikä tekee sovelluksesta käyttäjäystävällisemmän poistamalla tarpeen syöttää prosentti manuaalisesti.
- **Tärkeä yksityiskohta:** required-attribuutti varmistaa, että käyttäjä valitsee tipin prosenttiosuuden ennen lomakkeen lähettämistä. Oletusvaihtoehto "Select Tip Percentage" varmistaa selkeyden siitä, mitä käyttäjän tulisi tehdä.

## 10. Submit Button (<code><</code>button type="submit">Calculate Tip<code><</code>/button>):

- **Mikä se on:** Tämä on <code><</code>button> -elementti, joka lähettää lomakkeen, kun sitä painetaan. Se käynnistää JavaScriptin, joka laskee tipin määrän käyttäjän syötteiden perusteella.
- **Tarkoitus:** Painike tarjoaa käyttäjälle selkeän toiminnon: "Calculate Tip." Kun sitä klikataan, lomakedata käsitellään ja tulos näytetään sivulla.
- **Tärkeä yksityiskohta:** Painikkeen type="submit" -attribuutti kertoo lomakkeelle lähettää datansa, kun sitä painetaan, käynnistäen tipin laskentaprosessin, jota JavaScript käsittelee.

## 11. Result Display (<code><</code>div class="result" id="result"><code><</code>/div>):

- **Mikä se on:** Tämä <code><</code>div> on paikka, jossa laskettu tipin määrä näytetään. Aluksi se on tyhjä, mutta JavaScript päivittää sen dynaamisesti tuloksen jälkeen, kun lomake on lähetetty.
- **Tarkoitus:** Tulosdivi toimii paikkamerkkinä tipin määrälle. Se päivitetään dynaamisesti lasketulla tipillä, kun käyttäjä lähettää lomakkeen.
- **Tärkeä yksityiskohta:** id="result" mahdollistaa JavaScriptin kohdistaa tämä div ja lisätä laskettu tippi helposti. Se varmistaa, että tulos näytetään heti samalla sivulla ilman sivun latausta uudelleen.

## 12. External JavaScript Link (<code><</code>script src="app.js"><code><</code>/script>):

- **Mikä se on:** Tämä <code><</code>script> -tagi linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää logiikan tipin laskemiseksi.
- **Tarkoitus:** Se erottaa logiikan (JavaScriptin) rakenteesta (HTML) ja tyylistä (CSS), noudattaen parhaita käytäntöjä eri osa-alueiden erotteluun. JavaScript käsittelee lomakkeen lähettämisen, syötteen validoinnin ja tuloksen laskemisen.
- **Tärkeä yksityiskohta:** Linkittäminen ulkoiseen JavaScript-tiedostoon pitää HTML:n siistinä ja modulaarisena, mikä tekee koodista helpommin ylläpidettävää ja debugattavaa.

# CSS selitys

## 1. Global Reset (Selector \*):

- **Mikä se on:** Yleisvalitsin \* koskee kaikkia sivun elementtejä.
- **Tarkoitus:** Tämä sääntö nollaa oletusmarginaalit ja -täytteet ja asettaa box-sizing: border-box; kaikille elementeille. Se varmistaa, että täytteet ja reunukset sisältyvät elementin kokonaisleveyteen ja -korkeuteen, mikä helpottaa asettelujen hallintaa.
- **Tärkeä yksityiskohta:** Globaali resetointi on olennaista säilyttämään yhtenäinen tila eri selaimissa, estäen arvaamattomat marginaalit ja täytteet.

## 2. Body Styling (<code><</code>body>):

- **Mikä se on:** Tämä sääntö muotoilee <code><</code>body>-elementin, mikä vaikuttaa koko sivun asetteluun ja ulkoasuun.
- **Tarkoitus:**
  - **Fontti:** font-family: 'Roboto', sans-serif; käyttää modernia, selkeää fonttia Google Fontsista parantaen luettavuutta ja antaen sovellukselle viimeistellyn ilmeen;
  - **Tausta:** background: linear-gradient(135deg, #74ebd5, #acb6e5); luo houkuttelevan, modernin gradienttitaustan, joka siirtyy viistosti vaaleasta turkoosista pehmeään violettiin;
  - **Asettelu:** display: flex; justify-content: center; align-items: center; keskittää sisällön sekä horisontaalisesti että vertikaalisesti Flexboxilla varmistaen, että laskin pysyy keskellä näyttöä riippumatta näytön koosta;
  - **Korkeus:** height: 100vh; varmistaa, että body-elementti vie koko näkymän korkeuden, pitäen sisällön vertikaalisesti keskitettynä;
  - **Väri:** color: #333; käyttää tummanharmaata tekstiä, joka luo vahvan kontrastin laskimen valkoiseen taustaan.
- **Tärkeä yksityiskohta:** Flexbox helpottaa sisällön keskittämistä näkymässä, kun taas gradienttitausta lisää visuaalista mielenkiintoa ja luo käyttäjälle miellyttävämmän kokemuksen.

## 3. Calculator Container Styling (.calculator-container):

- **Mikä se on:** Tämä sääntö muotoilee laskimen sisällön pääsäiliön.
- **Tarkoitus:**
  - **Taustaväri:** background-color: #fff; tarjoaa laskimelle puhtaan, minimalistisen valkoisen taustan, joka luo hyvän kontrastin sivun gradienttitaustan kanssa;
  - **Täyte:** padding: 30px; varmistaa, että säiliön sisällön ympärillä on tarpeeksi tilaa, tehden siitä paremmin luettavan ja siististi asetellun;
  - **Reunuksen pyöristys:** border-radius: 12px; lisää säiliöön pyöristetyt kulmat, antaen sille modernin, korttimaisen ulkonäön;
  - **Varjo:** box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); luo hienovaraisen varjon säiliön ympärille, antaen sille syvyyttä ja tehden siitä hieman kohotetun näköisen taustasta;
  - **Maksimileveys:** max-width: 400px; varmistaa, että säiliö ei leviä liian leveäksi suuremmilla näytöillä, pitäen suunnittelun kompaktina ja suhteellisena;
  - **Siirtymä:** transition: transform 0.3s ease; lisää sulavan muunnoksen, kun säiliöön kohdistetaan hiiri, lisäten vuorovaikutteisuutta.
- **Tärkeä yksityiskohta:** Täytteen, varjon ja pyöristettyjen kulmien yhdistelmä antaa laskimelle modernin, korttimaisen suunnittelun, joka on visuaalisesti miellyttävä ja selkeä.

## 4. Container Hover Effect (.calculator-container:hover):

- **Mikä se on:** Tämä sääntö astuu voimaan, kun käyttäjä siirtää hiiren säiliön päälle.
- **Tarkoitus:** transform: scale(1.05); suurentaa säiliötä hieman, kun sitä liikutetaan, luoden hienovaraisen zoomausvaikutuksen, joka antaa säiliölle dynaamisen ja reagoivan tuntuman.
- **Tärkeä yksityiskohta:** Hover-efekti lisää vuorovaikutteisuutta, tehden laskimesta houkuttelevamman ilman, että se olisi häiritsevä.

## 5. Heading Styling (<code><</code>h1>):

- **Mikä se on:** Tämä sääntö muotoilee <code><</code>h1>-otsikon, joka näyttää "Tip Calculator" -otsikon.
- **Tarkoitus:**
  - **Fonttikoko:** font-size: 2.2em; kasvattaa otsikon kokoa, tehden siitä näkyvän ja helppolukuisen;
  - **Marginaali:** margin-bottom: 20px; lisää tilaa otsikon alapuolelle, eristäen sen lomake-elementeistä ja parantaen asettelua;
  - **Väri:** color: #2d3748; käyttää tummempaa väriä tekstissä paremman kontrastin ja näkyvyyden takaamiseksi säiliön valkoista taustaa vasten.
- **Tärkeä yksityiskohta:** Otsikko on muotoiltu erottumaan selvästi sovelluksen pääotsikkona, luoden vahvan visuaalisen fokuksen.

## 6. Input Fields and Dropdown Styling (<code><</code>input[type="number"], <code><</code>select>):

- **Mikä se on:** Tämä sääntö muotoilee sekä laskun määrän syötekentän että tipin prosenttipudotusvalikon.
- **Tarkoitus:**
  - **Leveys:** width: 100%; varmistaa, että sekä syötekenttä että pudotusvalikko täyttävät koko säiliön leveyden, tehden asettelusta siistin ja helposti käytettävän;
  - **Täyte:** padding: 12px; lisää sisäistä tilaa syötekenttiin, tehden tekstistä paremmin luettavaa ja parantaen käytettävyyttä;
  - **Marginaali:** margin-bottom: 15px; luo tilaa syöteelementtien välille, parantaen asettelua ja rakennetta;
  - **Reunus:** border: 1px solid #ccc; lisää kevyen harmaan reunuksen syötekenttiin, antaen niille määritelmän olematta liian rohkea;
  - **Reunuksen pyöristys:** border-radius: 8px; antaa syötteille pyöristetyt kulmat, joka sopii sovelluksen moderniin suunnitteluun;
  - **Fonttikoko:** font-size: 1.1em; suurentaa tekstikokoa paremman luettavuuden saavuttamiseksi;
  - **Varjo:** box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); lisää hienovaraisen varjon, antaen syötekentille hieman kohotetun ulkonäön, lisäten syvyyttä;
  - **Siirtymä:** transition: border-color 0.3s ease; varmistaa sulavan värimuutoksen, kun syötekenttä on valittuna.
- **Tärkeä yksityiskohta:** Syötekentät ja pudotusvalikko on muotoiltu toiminnallisiksi, käyttäjäystävällisiksi ja visuaalisesti yhtenäisiksi sovelluksen yleisen suunnittelun kanssa.

## 7. Focus Effect on Input and Dropdown (<code><</code>input[type="number"]:focus, select:focus):

- **Mikä se on:** Tämä sääntö astuu voimaan, kun käyttäjä valitsee (klikkaa tai koskettaa) syötekentän tai pudotusvalikon.
- **Tarkoitus:** border-color: #28a745; vaihtaa reunuksen värin vihreäksi, kun syöte on valittu, antaen välittömän visuaalisen palautteen käyttäjälle, osoittaen, että kenttä on aktiivinen.
- **Tärkeä yksityiskohta:** Fokusvaikutus parantaa käytettävyyttä osoittamalla selkeästi, mikä kenttä on tällä hetkellä valittuna, parantaen käyttökokemusta.

## 8. Button Styling (<code><</code>button>):

- **Mikä se on:** Tämä sääntö muotoilee lähetä-painikkeen, joka laskee tipin, kun sitä painetaan.
- **Tarkoitus:**
  - **Täyte:** padding: 12px 25px; varmistaa, että painike on tarpeeksi suuri ollakseen helposti klikattavissa, säilyttäen samalla visuaalisen tasapainon;
  - **Taustaväri:** background-color: #28a745; käyttää vihreää taustaväriä, mikä viestii, että kyseessä on toiminto, kuten "Submit";
  - **Tekstiväri:** color: white; varmistaa, että teksti erottuu selkeästi vihreää taustaa vasten;
  - **Reunus ja reunuksen pyöristys:** border: none; border-radius: 8px; poistaa oletusreunuksen ja lisää pyöristetyt kulmat, mikä luo puhtaan, modernin painikkeen;
  - **Kursori:** cursor: pointer; vaihtaa kursorin osoittimeen, kun sen päällä liikutetaan, osoittaen, että se on klikattavissa;
  - **Fonttikoko:** font-size: 1.1em; tekee painikkeen tekstistä helposti luettavaa;
  - **Siirtymä:** transition: background-color 0.3s ease, transform 0.2s ease; lisää sulavia siirtymiä, kun painikeen päällä liikutetaan, parantaen vuorovaikutteisuutta.
- **Tärkeä yksityiskohta:** Painike on muotoiltu erottumaan visuaalisesti ja toimimaan tehokkaasti, sisältäen hover-efektejä ja sulavia siirtymiä, jotka parantavat käyttökokemusta.

## 9. Button Hover Effect (button:hover):

- **Mikä se on:** Tämä sääntö astuu voimaan, kun käyttäjä liikuttaa hiiren painikkeen päälle.
- **Tarkoitus:**
  - **Taustaväri:** background-color: #218838; tummenee painikkeen taustaa, kun sen päälle liikutetaan, antaen visuaalista palautetta käyttäjälle;
  - **Muunnos:** transform: translateY(-2px); nostaa painiketta hieman, luoden dynaamisen 3D-efektin.
- **Tärkeä yksityiskohta:** Hover-efekti tekee painikkeesta vuorovaikutteisemman, parantaen käyttäjäkokemusta antamalla palautetta painikkeen tilasta.

## 10. Result Display Styling (.result):

- **Mikä se on:** Tämä sääntö muotoilee <code><</code>div>-elementin, jossa laskettu tippi näytetään.
- **Tarkoitus:**
  - **Marginaali:** margin-top: 20px; luo tilaa tulosnäytön yläpuolelle, eristäen sen lomake-elementeistä;
  - **Fonttikoko:** font-size: 1.4em; suurentaa tekstin kokoa, tehden tuloksesta näkyvän ja helppolukuisen;
  - **Fontin paino:** font-weight: bold; lisää korostusta tulokseen, tehden siitä visuaalisesti merkittävän;
  - **Väri:** color: #2d3748; käyttää tummempaa tekstiväriä paremman näkyvyyden ja kontrastin saavuttamiseksi;
  - **Animaatio:** animation: fadeIn 0.8s ease-out forwards; tekee tuloksen näkyväksi pehmeällä fade-in-efektillä, tehden siirtymän lomakkeen lähettämisestä tuloksen näyttämiseen miellyttävämmäksi.
- **Tärkeä yksityiskohta:** Tulosnäyttö on suunniteltu olemaan selkeä, helposti luettava ja visuaalisesti korostettu sulavalla animaatiolla, joka parantaa kokonaiskokemusta.

## 11. Fade-In Animation (@keyframes fadeIn):

- **Mikä se on:** Tämä määrittää mukautetun animaation, joka tuo tuloksen näkyviin asteittain.
- **Tarkoitus:** Fade-in-animaatio tarjoaa pehmeän siirtymän, tehden tuloksen näkymisestä ammattimaisemman ja viimeistellymmän.
- **Tärkeä yksityiskohta:** Animaatio lisää sovellukseen hienostuneisuutta, parantaen kokonaiskokemusta tekemällä tuloksen näyttämisestä dynaamisemman ja vuorovaikutteisemman.

# JavaScript selitys

## 1. DOMContentLoaded Event:

- **Mikä se on:** document.addEventListener('DOMContentLoaded', ...) on tapahtumakuuntelija, joka aktivoituu, kun HTML-dokumentti on täysin ladattu ja selain on sen jäsentänyt.
- **Tarkoitus:** Tämä varmistaa, että JavaScript-koodi suoritetaan vasta, kun kaikki DOM-elementit (kuten lomake ja syöttökentät) ovat käytettävissä. Ilman tätä koodi voisi yrittää manipuloida elementtejä, joita ei ole vielä renderöity, aiheuttaen virheitä.
- **Tärkeä yksityiskohta:** DOMContentLoaded-tapahtuman käyttö varmistaa, että JavaScript käsittelee DOM-elementtejä turvallisesti, tehden koodista vankemman ja estäen virheet, jotka liittyvät elementtien puutteelliseen lataukseen.

## 2. Selecting DOM Elements:

- **Mikä se on:**
  - **const tipForm = document.getElementById('tip-form');**
  - **const billAmountInput = document.getElementById('bill-amount');**
  - **const tipPercentageSelect = document.getElementById('tip-percentage');**
  - **const resultDiv = document.getElementById('result');**
  - käytetään viittaamaan tiettyihin DOM-elementteihin.
- **Tarkoitus:** Nämä muuttujat tallentavat viittaukset lomakkeeseen, syöttökenttiin ja tulosnäyttöalueeseen. Tämä mahdollistaa JavaScriptin vuorovaikutuksen näiden elementtien kanssa, kuten käyttäjän syötteiden (laskun summa ja tipin prosenttiosuus) hakemisen ja lasketun tuloksen näyttämisen.
- **Tärkeä yksityiskohta:** Elementtien valitseminen niiden id:n perusteella varmistaa tarkan ja tehokkaan kohdistamisen tiettyihin DOM-elementteihin, mikä helpottaa niiden sisällön tai arvojen muokkaamista.

## 3. Form Submission Event Listener:

- **Mikä se on:** tipForm.addEventListener('submit', (event) => {...}); on tapahtumakuuntelija, joka kuuntelee lomakkeen lähettämistä (kun käyttäjä napsauttaa "Calculate Tip" -painiketta).
- **Tarkoitus:** Tämä funktio estää lomakkeen oletustoiminnan (sivun uudelleenlatauksen) käyttämällä event.preventDefault(). Sen sijaan se käsittelee lomaketiedot ilman sivun uudelleenlatausta, mahdollistaen saumattoman, reaaliaikaisen tipin laskemisen.
- **Tärkeä yksityiskohta:** Lomakkeen oletustoiminnan estäminen on tärkeää sujuvan käyttäjäkokemuksen kannalta, sillä se pitää sovelluksen toiminnassa samalla sivulla ilman tarpeettomia sivun uudelleenlatauksia.

## 4. Retrieving User Input:

- **Mikä se on:** Seuraavat rivit hakevat käyttäjän syötteen:
  - **const billAmount = parseFloat(billAmountInput.value);**: Hakee ja muuntaa laskun summan liukuluvuksi;
  - **const tipPercentage = parseFloat(tipPercentageSelect.value);**: Hakee ja muuntaa valitun tipin prosenttiosuuden liukuluvuksi.
- **Tarkoitus:** Nämä rivit varmistavat, että käyttäjän syöte käsitellään numerona. parseFloat() funktio muuntaa arvot merkkijonosta (kuten syötteet yleensä käsitellään) liukuluvuiksi, mikä on välttämätöntä matemaattisten laskelmien suorittamiseksi.
- **Tärkeä yksityiskohta:** Syöttökentät ja valintalistat palauttavat arvot oletuksena merkkijonoina, joten niiden muuntaminen numeroiksi parseFloat()-funktiolla on välttämätöntä aritmeettisten laskutoimitusten, kuten tipin laskemisen, suorittamiseksi.

## 5. Input Validation:

- **Mikä se on:** if (isNaN(billAmount) || isNaN(tipPercentage)) {...} tarkistaa, antoiko käyttäjä kelvolliset syötteet sekä laskun summalle että tipin prosenttiosuudelle.
- **Tarkoitus:** Tämä validointivaihe varmistaa, että molemmat syötteet ovat numeroita ennen laskelman suorittamista. Jos jompikumpi syöte on virheellinen (esimerkiksi jos käyttäjä jättää laskun summan tyhjäksi tai ei valitse tipin prosenttiosuutta), näytetään virheilmoitus sen sijaan, että laskelma suoritettaisiin.
- **Tärkeä yksityiskohta:** isNaN()-funktio tarkistaa, onko arvo NaN (Not a Number). Jos joko laskun summa tai tipin prosenttiosuus on virheellinen, funktio keskeyttää käsittelyn ja näyttää virheilmoituksen ohjatakseen käyttäjää.

## 6. Calculating the Tip:

- **Mikä se on:** const tipAmount = (billAmount \* (tipPercentage / 100)).toFixed(2); suorittaa tipin laskemisen käyttäjän syötteen perusteella.
- **Tarkoitus:** Tämä rivi laskee tipin kertomalla laskun summan tipin prosenttiosuudella, joka muunnetaan desimaaliksi jakamalla se sadalla. .toFixed(2)-metodi pyöristää tuloksen kahteen desimaaliin, jotta tippi näytetään valuuttamuodossa (esim. 10.50 eikä 10.5).
- **Tärkeä yksityiskohta:** .toFixed(2)-metodi varmistaa, että laskettu tippi näytetään aina kahden desimaalin tarkkuudella, tarjoten ammattimaisen ja standardoidun valuuttamuodon.

### 7. Displaying the Result:

- **Mikä se on:** resultDiv.textContent = `Tip Amount: $${tipAmount}`; päivittää tuloksen <code><</code>div>-elementin sisällön lasketulla tipin summalla.
- **Tarkoitus:** Tämä rivi päivittää tulosalueen dynaamisesti näyttämään käyttäjälle lasketun tipin käyttäjäystävällisessä muodossa. Template literalien (`) avulla tipin summa on helppo upottaa näytettävään viestiin.
- **Tärkeä yksityiskohta:** Tulos <code><</code>div>-elementin sisällön dynaaminen päivittäminen varmistaa, että käyttäjä näkee tuloksen ilman sivun uudelleenlatauksia tai muita keskeytyksiä, tarjoten saumattoman käyttökokemuksen.
