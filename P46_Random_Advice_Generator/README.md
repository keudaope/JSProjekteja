# Nettisivu: https://keudaope.github.io/JSProjekteja/P46_Random_Advice_Generator

# Johdanto

Satunnainen neuvogeneraattori on hyödyllinen sovellus, joka hakee ja näyttää satunnaisia neuvoja API:sta. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla, kun he oppivat käsittelemään API-pyyntöjä, prosessoimaan JSON-dataa ja päivittämään DOM:n dynaamisesti. Käyttäjät voivat napsauttaa painiketta saadakseen uuden neuvon, joka näytetään näytöllä.

# HTML-selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on**: <code><</code>!DOCTYPE html> -määritys kertoo selaimelle, että asiakirja noudattaa HTML5-standardeja.
- **Tarkoitus**: Varmistaa, että sivu renderöidään johdonmukaisesti eri selaimissa ja noudattaa moderneja web-standardeja.
- **Tärkeä yksityiskohta**: Se on olennainen nykyaikaisissa HTML-asiakirjoissa ja tulisi aina sisällyttää tiedoston alkuun.

## 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on**: <code><</code>html>-tagi ympäröi kaiken sivun sisällön, ja lang="en"-attribuutti osoittaa, että asiakirjan kieli on englanti.
- **Tarkoitus**: lang-attribuutti auttaa hakukoneita ja saavutettavuustyökaluja, kuten ruudunlukijoita, ymmärtämään sisällön ensisijaisen kielen.
- **Tärkeä yksityiskohta**: Kielen määrittäminen parantaa SEO:a ja saavutettavuutta.

## 3. Head Tag (<code><</code>head>):

- **Mikä se on**: <code><</code>head> -elementti sisältää meta-informaatiota verkkosivusta, kuten metatiedot, ulkoiset resurssit ja tyylitiedostot.
- **Tarkoitus**: Tämä osa valmistaa sivun näyttöä varten linkittämällä ulkoisiin resursseihin (kuten CSS) ja määrittämällä ominaisuuksia, kuten merkistön.
- **Tärkeät yksityiskohdat**:
  - **Meta Charset** (<code><</code>meta charset="UTF-8">): Määrittää merkistön UTF-8:ksi, mikä mahdollistaa monenlaisten merkkien ja symbolien käytön.
  - **Viewport Meta Tag** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">): Varmistaa, että sivu on responsiivinen ja mukautuu eri laitteiden näytöille, erityisesti mobiililaitteilla.
  - **Title Tag** (<code><</code>title>Random Advice Generator</title>): Määrittää sivun otsikon, joka näytetään selaimen välilehdessä, parantaen käyttäjäkokemusta ja SEO:a.
  - **CSS Link** (<code><</code>link rel="stylesheet" href="styles.css">): Linkittää ulkoiseen CSS-tiedostoon (styles.css), joka määrittää sivun asettelun ja visuaalisen ilmeen.

## 4. Body Tag (<code><</code>body>):

- **Mikä se on**: <code><</code>body> -elementti sisältää kaiken verkkosivun näkyvän sisällön, kuten tekstin, painikkeet ja muut interaktiiviset elementit.
- **Tarkoitus**: Body ympäröi kaiken sisällön, johon käyttäjät ovat vuorovaikutuksessa, ja se tyylitellään CSS:llä ja tehdään dynaamiseksi JavaScriptin avulla.
- **Tärkeä yksityiskohta**: <code><</code>body> sisältää sovelluksen HTML-rakenteen, ja se tyylitellään linkitetyllä CSS-tiedostolla.

## 5. Container Div (<code><</code>div class="container">):

- **Mikä se on**: <code><</code>div> -elementti, jossa on "container"-luokka, ympäröi pääsisällön (otsikko, neuvoteksti ja painike).
- **Tarkoitus**: Se ryhmittelee yhteen liittyvät elementit ja mahdollistaa keskitetyn tyylittelyn, jolloin ne asemoidaan sivun keskelle ja niihin lisätään tyylitelty reunus ja varjostus.
- **Tärkeä yksityiskohta**: "Container"-luokka käyttää CSS-tiedoston tyylejä, jotka määrittelevät asettelun, mukaan lukien keskitetyn sijainnin, pehmustuksen, taustavärin ja varjoefektin.

## 6. Heading Element (<code><</code>h1>Random Advice Generator</h1>):

- **Mikä se on**: <code><</code>h1> -tagi edustaa sovelluksen pääotsikkoa, joka näyttää otsikon "Random Advice Generator".
- **Tarkoitus**: Se ilmaisee sivun päätarkoituksen ja toimii sisältöä johdattavana otsikkona. Se on tyylitelty näkyväksi ja helposti luettavaksi.
- **Tärkeä yksityiskohta**: <code><</code>h1> -tagi on tärkeä SEO;n ja saavutettavuudelle, sillä se merkitsee pääotsikon ja auttaa ruudunlukijoita ja hakukoneita tunnistamaan sisällön.

## 7. Advice Display Div (<code><</code>div class="advice" id="advice">Click the button to get advice!</div>):

- **Mikä se on**: <code><</code>div> -elementti, jossa on "advice"-luokka ja id="advice", joka näyttää dynaamisesti satunnaisen neuvon.
- **Tarkoitus**: Se toimii neuvotekstin paikkamerkkinä, jota päivitetään, kun käyttäjä napsauttaa "Get Advice" -painiketta.
- **Tärkeä yksityiskohta**: id="advice" mahdollistaa sen, että JavaScript voi kohdistaa tähän elementtiin ja päivittää sen sisällön haetuilla neuvoilla.

## 8. Button (<code><</code>button id="generate-advice-button">Get Advice</button>):

- **Mikä se on**: <code><</code>button> -elementti, jossa on id="generate-advice-button", jota käyttäjät voivat napsauttaa saadakseen uuden neuvon.
- **Tarkoitus**: Painike käynnistää uuden neuvon hakemisen API:sta, kun sitä napsautetaan, tarjoten sovelluksen ensisijaisen interaktiivisuuden.
- **Tärkeä yksityiskohta**: id="generate-advice-button" mahdollistaa sen, että JavaScript voi lisätä tapahtumankuuntelijan ja käsitellä painikkeen napsautustapahtumaa.

## 9. Script Tag (<code><</code>script src="app.js"></script>):

- **Mikä se on**: <code><</code>script> -tagi linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka hallitsee sovelluksen toiminnallisuutta.
- **Tarkoitus**: Tämä varmistaa, että neuvojen hakemisen ja näyttämisen logiikka pidetään erillään HTML-rakenteesta, mikä noudattaa parhaita käytäntöjä ylläpidon kannalta.
- **Tärkeä yksityiskohta**: Linkittämällä skripti body-osan loppuun varmistetaan, että DOM on täysin ladattu ennen JavaScriptin suorittamista, mikä estää virheet, jotka johtuvat olemattomien elementtien käsittelystä.

# CSS selitys

## 1. Global Body Styling (body):

- **Mikä se on**: Body-sääntö soveltaa globaalia muotoilua koko verkkosivulle ja vaikuttaa asetteluun ja yleiseen ulkoasuun.
- **Tärkeät ominaisuudet**:
  - **font-family: Arial, sans-serif;**: Asettaa fontiksi Arialin, joka on selkeä ja moderni fontti, ja varalle geneerisen sans-serif-fontin, jos Arial ei ole käytettävissä. Tämä varmistaa, että teksti näyttää ammattimaiselta ja helposti luettavalta kaikilla laitteilla.
  - **background-color: #f0f0f0;**: Asettaa vaalean harmaan taustavärin koko sivulle, luoden neutraalin kontrastin valkoisen säilön kanssa.
  - **display: flex; justify-content: center; align-items: center;**: Käyttää Flexboxia keskittämään pääsisällön vaaka- ja pystysuunnassa näytölle. Tämä varmistaa, että neuvojen generaattori on aina keskitettynä, riippumatta näytön koosta.
  - **height: 100vh;**: Varmistaa, että body vie koko näkymäportin korkeuden, joten sisältö on täydellisesti keskitetty myös suuremmilla näytöillä.
  - **margin: 0;**: Poistaa oletusmarginaalit sivun ympäriltä, jotta sisältö täyttää koko näkymäportin leveyden ja korkeuden.
- **Tarkoitus**: Nämä ominaisuudet auttavat varmistamaan, että sovellus on keskitettynä näytöllä, sekä vaaka- että pystysuunnassa, tehden sovelluksesta responsiivisen ja visuaalisesti tasapainoisen.

## 2. Container Styling (div class="container"):

- **Mikä se on**: .container-luokka tyylittää pääsäilön, joka sisältää otsikon, neuvotekstin ja painikkeen.
- **Tärkeät ominaisuudet**:
  - **background: white;**: Asettaa säilölle valkoisen taustavärin, joka erottuu vaalean harmaasta sivun taustasta.
  - **padding: 20px;**: Lisää sisätilaa säilön sisällön ympärille, varmistaen, että teksti ja painike eivät kosketa säilön reunoja.
  - **border-radius: 8px;**: Pyöristää säilön kulmat, antaen sille modernin ja siistin ulkonäön.
  - **box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);**: Lisää hienovaraisen varjon säilön ympärille, luoden syvyyttä ja korostaen säilön erottuvuutta taustasta.
  - **text-align: center;**: Keskittää tekstin ja painikkeen säilön sisällä, parantaen luettavuutta ja säilyttäen selkeän ja järjestelmällisen asettelun.
  - **width: 300px;**: Asettaa säilölle kiinteän leveyden, mikä varmistaa kompaktin ja yhtenäisen asettelun eri näytönkokojen välillä.
- **Tarkoitus**: .container-luokka on suunniteltu tekemään sovelluksesta visuaalisesti miellyttävä antamalla sille puhtaan, modernin ulkonäön hienovaraisilla varjoilla, pyöristetyillä kulmilla ja keskitettynä asetteluna.

## 3. Heading Styling (h1):

- **Mikä se on**: h1-sääntö tyylittää sovelluksen pääotsikon.
- **Tärkeät ominaisuudet**:
  - **margin-bottom: 20px;**: Lisää tilaa otsikon alle erottamaan sen muusta sisällöstä, varmistaen selkeän ja hyvin organisoidun asettelun.
  - **font-size: 1.5em;**: Suurentaa otsikon kokoa, jotta se erottuu selkeästi sivun otsikkona.
- **Tarkoitus**: Nämä tyylit korostavat otsikkoa tehden siitä visuaalisesti erottuvan sivun otsikkona ja parantavat kokonaisluettavuutta.

## 4. Advice Display Styling (div class="advice"):

- **Mikä se on**: .advice-luokka tyylittää divin, jossa satunnainen neuvo näytetään.
- **Tärkeät ominaisuudet**:
  - **font-size: 1.2em;**: Suurentaa neuvotekstin fonttikokoa tehden siitä helposti luettavan ja visuaalisesti korostetun.
  - **margin-bottom: 20px;**: Lisää tilaa neuvotekstin alle varmistaen, ettei se täytä painikkeen tilaa ja säilyttää selkeän erottelun neuvon ja painikkeen välillä.
- **Tarkoitus**: .advice-luokka varmistaa, että näytetty neuvo on helposti luettavissa ja että siinä on tarpeeksi tilaa säilyttää siisti ja järjestelmällinen ulkoasu.

## 5. Button Styling (button):

- **Mikä se on**: button-sääntö tyylittää painikkeen, jota käyttäjät napsauttavat saadakseen satunnaisen neuvon.
- **Tärkeät ominaisuudet**:
  - **padding: 10px 20px;**: Lisää sisäistä tilaa painikkeen tekstin ympärille, tehden painikkeesta suuremman ja helpommin napsautettavan.
  - **border: none;**: Poistaa oletuspainikkeen reunuksen siistin ulkoasun saavuttamiseksi.
  - **background-color: #007bff;**: Asettaa painikkeen taustaväriksi kirkkaan sinisen, joka erottuu sivun pääasiallisena vuorovaikutuselementtinä.
  - **color: white;**: Asettaa tekstin väriksi valkoisen, joka luo korkean kontrastin sinistä taustaa vasten, tehden tekstistä helposti luettavan.
  - **border-radius: 4px;**: Pyöristää painikkeen kulmat hieman, antaen sille modernin ja siistin ulkoasun.
  - **cursor: pointer;**: Muuttaa kursorin osoittimeksi, kun sitä viedään painikkeen päälle, ilmaisten, että painiketta voi napsauttaa.
- **Tarkoitus**: Nämä tyylit tekevät painikkeesta visuaalisesti erottuvan ja interaktiivisen, rohkaisten käyttäjää napsauttamaan sitä, koska se on suuri, näkyvä ja helposti tunnistettavissa.

## 6. Button Hover Effect (button:hover):

- **Mikä se on**: button-sääntö soveltaa hover-efektiä painikkeeseen, kun käyttäjä vie hiiren sen päälle.
- **Tärkeät ominaisuudet**:
  - **background-color: #0056b3;**: Muuttaa taustavärin tummemmaksi siniseksi, kun käyttäjä vie hiiren painikkeen päälle, antaen visuaalista palautetta.
- **Tarkoitus**: Hover-efekti parantaa vuorovaikutusta antamalla käyttäjälle palautetta, kun hän liikuttaa hiirtä painikkeen päälle, tehden sovelluksesta dynaamisemman ja reagoivamman.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener(document.addEventListener('DOMContentLoaded', () => {...});):

- **Mikä se on**: DOMContentLoaded-tapahtuma laukeaa, kun HTML-dokumentti on ladattu ja jäsennelty kokonaan, varmistaen, että kaikki DOM-elementit (kuten painike ja neuvodiv) ovat käytettävissä käsittelyä varten.
- **Tarkoitus**: Se varmistaa, että JavaScript-koodi suoritetaan vasta sen jälkeen, kun verkkosivu on ladattu täysin. Tämä estää virheet, joita syntyy yrittäessä käsitellä DOM-elementtejä, joita ei ole vielä renderöity.
- **Tärkeä yksityiskohta**: Kietomalla logiikka DOMContentLoaded-tapahtumankuuntelijan sisään, JavaScript odottaa, että HTML on täysin valmis ennen kuin se on vuorovaikutuksessa minkään elementin kanssa.

## 2. Selecting DOM Elements(const adviceDiv = document.getElementById('advice'); const generateAdviceButton = document.getElementById('generate-advice-button');):

- **Mikä se on**: Nämä rivit valitsevat keskeiset DOM-elementit HTML:stä käyttämällä getElementById-komentoa.
- **Tarkoitus**:
  - **adviceDiv**: Tämä muuttuja tallentaa viittauksen diviin, jossa neuvot näytetään.
  - **generateAdviceButton**: Tämä muuttuja tallentaa viittauksen painikkeeseen, joka laukaisee neuvon generoinnin.
- **Tärkeä yksityiskohta**: Tallentamalla nämä elementit muuttujiksi, niitä voidaan helposti käyttää ja muokata koko skriptin ajan, mikä tekee koodista luettavampaa ja järjestelmällisempää.

## 3. Adding Event Listener to the Button(generateAdviceButton.addEventListener('click', fetchRandomAdvice);):

- **Mikä se on**: Tämä rivi lisää napsautustapahtumankuuntelijan "Get Advice" -painikkeeseen. Kun painiketta napsautetaan, fetchRandomAdvice-funktio kutsutaan.
- **Tarkoitus**: Se mahdollistaa vuorovaikutteisuuden, jolloin käyttäjä voi luoda satunnaisen neuvon napsauttamalla painiketta. Ilman tätä tapahtumankuuntelijaa painike ei laukaise mitään toimintoa.
- **Tärkeä yksityiskohta**: Tapahtumankuuntelijat mahdollistavat sovelluksen vastaamisen käyttäjän toimiin. Tässä tapauksessa sovellus hakee uuden neuvon aina, kun painiketta napsautetaan.

## 4. Async Function to Fetch Random Advice(async function fetchRandomAdvice() {...}):

- **Mikä se on**: Async-funktiota käytetään hakemaan neuvoja Advice Slip API:sta. Async-avainsana mahdollistaa await-avainsanan käytön, joka tekee asynkronisesta koodista helpommin luettavaa ja kirjoitettavaa.
- **Vaiheet**:
  - fetch()-metodia käytetään tekemään verkkopyyntö Advice Slip API:sta.
  - await-avainsana pysäyttää funktion suorittamisen, kunnes API vastaa, varmistaen, että funktio odottaa tietoja ennen jatkamista.
  - Vastaus muunnetaan sitten JSON-muotoon käyttäen await response.json().
- **Tarkoitus**: Tämä funktio hakee uuden neuvon Advice Slip API:sta aina, kun käyttäjä napsauttaa painiketta. Async/awaitin avulla funktio käsittelee asynkronisia pyyntöjä siistimmin.
- **Tärkeä yksityiskohta**: timestamp=${new Date().getTime()}-parametri lisätään API:iin URL-osoitteeseen välimuistitiedon estämiseksi ja varmistaakseen, että joka kerta tehdään uusi pyyntö. Tämä estää selainta palvelemasta välimuistissa olevaa neuvoa ja varmistaa, että uusi neuvo haetaan aina, kun painiketta napsautetaan.

## 5. Displaying the Advice(adviceDiv.textContent = data.slip.advice;):

- **Mikä se on**: Kun neuvo on haettu API:sta, tämä rivi asettaa adviceDiv:n tekstisisällön haetulle neuvolle (data.slip.advice).
- **Tarkoitus**: Se päivittää verkkosivun uudella haetulla neuvolla korvaten olemassa olevan tekstin adviceDiv:stä uudella neuvolla.
- **Tärkeä yksityiskohta**: Haettu neuvo näytetään dynaamisesti adviceDiv:ssä, tehden sovelluksesta interaktiivisen ja päivittäen sisällön käyttäjän toiminnan perusteella.

## 6. Error Handling(catch (error) {...}):

- **Mikä se on**: Catch-lohkoa käytetään käsittelemään mahdolliset virheet, jotka voivat tapahtua neuvojen haun aikana (esim. verkko-ongelmat tai API-virheet).
- **Vaiheet**:
  - Jos fetch-pyyntö epäonnistuu (esim. verkkoyhteysongelmien takia), virhe otetaan kiinni, ja sovellus antaa käyttäjäystävällisen virheilmoituksen: "Could not fetch advice. Please try again later."
- **Tarkoitus**: Tämä varmistaa, että sovellus käsittelee epäonnistumiset sulavasti tarjoamalla palautetta käyttäjälle, sen sijaan että sovellus jäisi vastaamatta tai näyttäisi teknisen virheen.
- **Tärkeä yksityiskohta**: Virheenkäsittely parantaa käyttäjäkokemusta varmistamalla, että vaikka jotain menee pieleen, sovellus pysyy toiminnassa ja informatiivisena.
