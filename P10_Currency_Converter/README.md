# Nettisivu: https://keudaope.github.io/JSProjekteja/P10_Currency_Converter

# Johdanto

Valuuttamuunnin-sovellus on hyödyllinen työkalu, joka mahdollistaa käyttäjien valuuttojen muuntamisen toisikseen käyttäen ulkoista API:a. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptin, HTML:n ja CSS:n käyttöä samalla, kun opitaan käsittelemään API-pyyntöjä, prosessoimaan JSON-dataa ja päivittämään DOM dynaamisesti. Käyttäjät voivat syöttää summan, valita valuutat ja saada muunnetun summan.

# HTML Selitys

**1. DOCTYPE Declaration:**

- **Mikä se on**: &lt;!DOCTYPE html> on julistus, joka määrittää, mitä HTML-versiota dokumentissa käytetään. Tässä tapauksessa se osoittaa, että dokumentti käyttää HTML5:ää.
- **Tarkoitus**: Se varmistaa, että selain näyttää dokumentin nykyaikaisten HTML5-standardien mukaisesti, mikä auttaa välttämään ongelmat vanhojen selainten "quirks mode" -tilan kanssa.
- **Tärkeä yksityiskohta**: Aina tulee sisällyttää DOCTYPE-julistus HTML-tiedoston alkuun oikeanlaisen renderöinnin ja yhteensopivuuden varmistamiseksi nykyaikaisten selainten kanssa.

**2. HTML Tag (&lt;html lang="en">):**

- **Mikä se on**: &lt;html> -elementti ympäröi koko HTML-dokumentin ja edustaa HTML-rakenteen juurta.
- **Tarkoitus**: Se toimii säiliönä kaikelle sivun sisällölle. lang="en" -attribuutti määrittää, että dokumentin kieli on englanti, mikä auttaa hakukoneita ja ruudunlukijoita ymmärtämään sivun sisällön kielen.
- **Tärkeä yksityiskohta**: Dokumentin kielen määrittäminen on tärkeää hakukoneoptimoinnin (SEO) ja ruudunlukijoiden käytön kannalta.

**3. Head Tag (&lt;head>):**

- **Mikä se on**: &lt;head> -elementti sisältää metatietoja HTML-dokumentista, kuten merkkikoodauksen, näkymäasetukset, linkit ulkoisiin tyyleihin ja sivun otsikon.
- **Tarkoitus**: Sisältö &lt;head>-elementin sisällä ei ole näkyvissä sivulla, mutta se on oleellinen dokumentin oikeanlaisen näkymisen kannalta eri laitteilla ja tukee asianmukaista merkkikoodausta.
- **Tärkeät yksityiskohdat**:
  - **Merkkikoodaus** (&lt;meta charset="UTF-8">): Määrittää dokumentin merkkikoodauksen UTF-8:ksi, joka tukee laajaa merkkien kirjoa.
  - **Näkymä** (&lt;meta name="viewport" content="width=device-width, initial-scale=1.0">): Varmistaa, että sivu on responsiivinen ja skaalautuu oikein eri näytön ko'oille, erityisesti mobiililaitteilla.
  - **Otsikko** (&lt;title>): Määrittää verkkosivun otsikon, joka näkyy selaimen välilehdessä. Tässä sovelluksessa se on "Currency Converter", mikä tekee selväksi sivun käyttötarkoituksen.

**4. Google Fonts Link (&lt;link>):**

- **Mikä se on**: &lt;link>-elementti yhdistää ulkoisen resurssin, tässä tapauksessa Google Fonts -palvelun, HTML-dokumenttiin.
- **Tarkoitus**: Se tuo "Poppins"-fontin Google Fontsista, mikä antaa sovellukselle puhtaan ja modernin ilmeen ilman, että fonttia täytyy asentaa paikallisesti.
- **Tärkeä yksityiskohta**: Linkki ulkoisiin fontteihin parantaa sovelluksen visuaalista vetovoimaa tarjoamalla pääsyn korkealaatuisiin verkkofontteihin.

**5. Body Tag (&lt;body>):**

- **Mikä se on**: &lt;body>-elementti sisältää kaiken näkyvän sisällön, jonka käyttäjä näkee ja jonka kanssa hän voi olla vuorovaikutuksessa.
- **Tarkoitus**: Body-elementti ympäröi valuuttamuuntimen sovelluksen koko käyttöliittymän, mukaan lukien lomakkeen, syötekentät ja tulosten näyttöalueen.
- **Tärkeä yksityiskohta**: Kaikki verkkosivulla näkyvä sisältö, kuten tekstit, lomakkeet ja painikkeet, sijaitsee &lt;body>-elementin sisällä. Se määrittää, miten sovellus esitetään käyttäjälle.

**6. Main Container (&lt;div class="container">):**

- **Mikä se on**: &lt;div>-elementti, jossa on container-luokka, ympäröi sovelluksen ydin sisällön, mukaan lukien otsikon, lomakkeen ja tulosten näytön.
- **Tarkoitus**: Se järjestää pääsisällön yhteen lohkoon. Käyttämällä div-elementtiä container-luokalla on helppo soveltaa CSS-tyylejä, jotka hallitsevat säiliön ulkoasua, asettelua ja käyttäytymistä.
- **Tärkeä yksityiskohta**: Sisällön ympäröinti container-div-elementillä mahdollistaa sisällön keskittämisen ja joustavan tyylittelyn, varmistaen, että sisältö on oikein linjassa ja tyylitelty sovelluksessa.

**7. Heading (&lt;h1>Currency Converter&lt;/h1>):**

- **Mikä se on**: &lt;h1>-elementti määrittää sovelluksen pääotsikon, joka tässä tapauksessa on "Currency Converter".
- **Tarkoitus**: Otsikko tarjoaa sovellukselle selkeän pääotsikon, mikä tekee käyttäjälle heti selväksi, mitä sovellus on varten. Otsikot auttavat myös hakukoneoptimoinnissa (SEO), koska ne osoittavat hakukoneille tekstin tärkeyden.
- **Tärkeä yksityiskohta**: &lt;h1>-elementti on tärkeä sekä saavutettavuuden että SEO:n kannalta, koska se määrittää sivun tärkeimmän otsikon ja parantaa dokumentin rakennetta.

**8. Form Element (&lt;form id="converter-form">):**

- **Mikä se on**: &lt;form>-elementti, jonka ID on converter-form, ryhmittelee syötekentät ja painikkeen, joiden avulla käyttäjät voivat syöttää summan ja valita valuutat muunnosta varten.
- **Tarkoitus**: Se tarjoaa interaktiivisen elementin, jossa käyttäjät voivat syöttää tietoja. Kun lomake lähetetään, JavaScript käsittelee muunnosprosessin ilman sivun uudelleenlatausta.
- **Tärkeät yksityiskohdat**:
  - **id="converter-form"** mahdollistaa lomakkeen viittauksen JavaScriptissä toiminnallisuutta varten.
  - Lomake sisältää tärkeitä komponentteja, kuten summan syötekentät ja alasvetovalikot valuutan valintaa varten.

**9. Amount Input Field (&lt;input type="number" id="amount">):**

- **Mikä se on**: &lt;input>-elementti antaa käyttäjälle mahdollisuuden syöttää numeerisen arvon, joka edustaa muunnettavaa valuuttamäärää.
- **Tarkoitus**: Tämä syöte kerää käyttäjältä muunnettavan valuuttasumman. Se varmistaa, että vain kelvollinen numeerinen syöte hyväksytään, mikä estää virheet laskelmissa.
- **Tärkeät yksityiskohdat**:
  - **type="number"**: Määrittää, että vain numeerisia arvoja voidaan syöttää tähän kenttään.
  - **id="amount"**: Antaa ainutlaatuisen tunnisteen, jonka avulla tätä syötettä voidaan käyttää JavaScriptissä.
  - **placeholder="Enter amount"**: Näyttää käyttäjälle vihjeen, joka kertoo, että tähän kenttään tulee syöttää luku.
  - **min="0" ja step="0.01"**: Varmistavat, että syötetty arvo on positiivinen ja voi sisältää desimaaleja (esim. 100,50).
- **Tärkeä yksityiskohta**: **step="0.01"** -attribuutti sallii käyttäjän syöttää desimaalilukuja, mikä tekee sovelluksesta sopivan tarkkoihin valuuttamuunnoksiin.

**10. Currency Dropdowns (&lt;select id="from-currency"> ja &lt;select id="to-currency">):**

- **Mikä se on**: Kaksi &lt;select>-elementtiä tarjoavat alasvetovalikot, joista käyttäjä voi valita muunnettavan lähtövaluutan ja kohdevaluutan.
- **Tarkoitus**: Nämä alasvetovalikot antavat käyttäjälle mahdollisuuden valita lähtövaluutta (valuutta, jota muunnetaan) ja kohdevaluutta (valuutta, johon muunnetaan). JavaScript täyttää alasvetovalikoiden valuuttavaihtoehdot dynaamisesti.
- **Tärkeät yksityiskohdat**:
  - **id="from-currency" ja id="to-currency"**: Tarjoavat ainutlaatuiset tunnisteet kullekin alasvetovalikolle, jolloin niitä voidaan käsitellä JavaScriptissä.
  - **required**: Varmistaa, että molempiin alasvetovalikoihin on tehtävä valinta ennen lomakkeen lähettämistä.
  - **&lt;option value="" disabled selected>**: Ensimmäinen vaihtoehto toimii paikkamerkkinä, joka ohjaa käyttäjää valitsemaan valuutan luettelosta.

**11. Submit Button (&lt;button type="submit">Convert&lt;/button>):**

- **Mikä se on**: &lt;button>-elementti, jossa on tyyppi submit, käynnistää lomakkeen lähettämisen, kun sitä painetaan.
- **Tarkoitus**: Kun käyttäjä napsauttaa painiketta, lomake lähetetään, ja JavaScript käsittelee valuuttamuunnoksen. Painike on tyylitelty erottumaan ja toimimaan interaktiivisesti.
- **Tärkeät yksityiskohdat**:
  - **type="submit"**: Määrittää, että painikkeen toiminto on lomakkeen lähettäminen, kun sitä klikataan.
  - **aria-label="Convert currency"**: ARIA-attribuutti, joka tarjoaa lisätietoja ruudunlukijoille, parantaen saavutettavuutta.

**12. Result Display (&lt;div class="result" id="result">):**

- **Mikä se on**: &lt;div>-elementti, jossa on result-luokka ja ID result, käytetään näyttämään muuntotulos, kun käyttäjä on lähettänyt lomakkeen.
- **Tarkoitus**: Tämä elementti näyttää valuuttamuunnoksen tuloksen sen jälkeen, kun käyttäjä on syöttänyt summan ja valinnut valuutat. JavaScript päivittää tämän dynaamisesti.
- **Tärkeät yksityiskohdat**:
  - **id="result"**: Tarjoaa ainutlaatuisen tunnisteen, jonka avulla elementti voidaan viitata JavaScriptissä.
  - **aria-live="polite"**: Tämä ARIA-attribuutti varmistaa, että ruudunlukijat ilmoittavat tähän alueeseen tehtävistä muutoksista, kun uutta sisältöä lisätään dynaamisesti keskeyttämättä käyttäjää.

**13. JavaScript Link (&lt;script src="app.js">):**

- **Mikä se on**: &lt;script>-tagi sisältää ulkoisen JavaScript-tiedoston (app.js), joka käsittelee valuuttamuunnoksen logiikan.
- **Tarkoitus**: Se yhdistää JavaScript-toiminnallisuuden HTML-dokumenttiin. Skripti sisältää koodin, joka hakee valuuttakurssit, käsittelee lomakkeen lähetyksen ja päivittää tulosnäytön dynaamisesti.
- **Tärkeä yksityiskohta**: Ulkoisen JavaScript-tiedoston linkittäminen pitää koodin modulaarisena ja ylläpidettävänä, eriyttäen rakenteen (HTML), tyylin (CSS) ja toiminnallisuuden (JavaScript).

# CSS selitys

## 1. Global Reset (Selector \*):

- **Mikä se on**: \* (universaali valitsin) koskee kaikkia sivun elementtejä.
- **Tarkoitus**: Tämä sääntö nollaa oletusmarginaalit ja -täytöt sekä asettaa box-sizing: border-box; varmistaakseen, että täytteet ja reunat sisältyvät elementin kokonaisleveyteen ja -korkeuteen.
- **Tärkeä yksityiskohta**: Tämä nollaus varmistaa, että kaikilla elementeillä on yhtenäiset välit ja mitat eri selaimissa, luoden yhdenmukaisen pohjan tyylitykselle.

## 2. Body Styling (body):

- **Mikä se on**: Tämä sääntö tyylittää &lt;body>-elementin, vaikuttaen sivun yleiseen asetteluun ja ulkoasuun.
- **Tarkoitus**:
  - **Fontti**: 'Poppins', sans-serif käyttää modernia ja selkeää fonttia Google Fontsista, parantaen luettavuutta ja tekstin visuaalista vetovoimaa.
  - **Tausta**: Gradientti (linear-gradient(135deg, #74ebd5, #acb6e5)) luo visuaalisesti houkuttelevan taustan, joka antaa sivulle modernin ja raikkaan ilmeen.
  - **Asettelu**: display: flex; justify-content: center; align-items: center; keskittää sisällön sekä vaakasuunnassa että pystysuunnassa, käyttäen Flexboxia.
  - **Korkeus**: height: 100vh; varmistaa, että body vie koko näkymän korkeuden, pitäen sisällön pystysuunnassa keskitettynä.
- **Tärkeä yksityiskohta**: Gradienttitausta antaa sovellukselle dynaamisen ja vangitsevan tyylin, kun taas Flexbox varmistaa, että sisältö on täydellisesti keskitetty sivulla.

## 3. Container Styling (.container):

- **Mikä se on**: Tämä sääntö tyylittää pääkontainerin, joka sisältää koko valuuttamuunnossovelluksen sisällön.
- **Tarkoitus**:
  - **Tausta**: background-color: white; luo puhtaan ja minimalistisen kontainerin, joka kontrastoi gradienttitaustan kanssa.
  - **Täyttö**: padding: 40px; varmistaa, että kontainerin sisällä on riittävästi tilaa sisällön ympärillä.
  - **Reunojen pyöristys**: border-radius: 15px; lisää pehmeästi pyöristetyt kulmat kontaineriin, antaen sille modernin ilmeen.
  - **Varjo**: box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); lisää syvyyttä, jolloin kontainer näyttää kohoavan taustasta.
  - **Maksimileveys**: max-width: 400px; rajoittaa kontainerin leveyttä, pitäen sen kompaktina ja hyvin suhteutettuna sekä mobiili- että työpöytänäytöillä.
  - **Siirtymä**: transition: transform 0.3s ease; mahdollistaa sujuvan zoomausvaikutelman, kun kontainerin päälle viedään hiiri.
- **Tärkeä yksityiskohta**: Täytön, pyöristettyjen kulmien ja hienovaraisen varjon yhdistelmä antaa kontainerille korttimaisen ulkoasun, joka on visuaalisesti houkutteleva ja auttaa kiinnittämään huomion sisällön ympärille.

## 4. Container Hover Effect (.container:hover):

- **Mikä se on**: Tämä sääntö tulee voimaan, kun käyttäjä vie hiiren kontainerin päälle.
- **Tarkoitus**: transform: scale(1.05); suurentaa kontaineria hieman, luoden zoomausvaikutelman.
- **Tärkeä yksityiskohta**: Tämä interaktiivinen hover-efekti antaa kontainerille dynaamisen ja vangitsevan ilmeen, jolloin se erottuu aktiivisena käyttöliittymän osana ilman, että se olisi liian päällekäyvä.

## 5. Heading Styling (h1):

- **Mikä se on**: Tämä sääntö tyylittää pääotsikon &lt;h1>, joka näyttää otsikon "Currency Converter".
- **Tarkoitus**:
  - **Fonttikoko**: font-size: 2em; tekee otsikosta suuren ja näkyvän, korostaen otsikkoa.
  - **Väri**: color: #333; käyttää tummanharmaata väriä tekstille, tarjoten vahvan kontrastin valkoista kontaineria vasten.
  - **Marginaali**: margin-bottom: 20px; lisää tilaa otsikon alapuolelle, erottaen sen lomakkeesta ja parantaen asettelua.
- **Tärkeä yksityiskohta**: Otsikko on suunniteltu erottumaan selkeästi, kiinnittäen käyttäjän huomion ja tehden sovelluksen tarkoituksen heti selväksi.

## 6. Input Fields and Dropdown Styling (input[type="number"], select):

- **Mikä se on**: Tämä sääntö tyylittää syötekentän summalle sekä valintalistat valuutan valitsemiseksi.
- **Tarkoitus**:
  - **Leveys**: width: 100%; varmistaa, että syötekentät ja valintalistat venyvät koko kontainerin leveyteen, tehden niistä helppokäyttöisiä.
  - **Täyttö**: padding: 15px; lisää tilaa syötekenttien ja valintalistojen sisälle, tehden tekstistä helpommin luettavaa ja elementeistä mukavampia käyttää.
  - **Marginaali**: margin-bottom: 15px; antaa tilaa syötekenttien ja valintalistojen välille, parantaen asettelun yleistä luettavuutta.
  - **Reuna ja reunojen pyöristys**: border: 2px solid #ccc; border-radius: 8px; luo selkeästi määritellyn syötealueen pehmeästi pyöristetyillä kulmilla, antaen siistin ulkonäön.
  - **Tausta**: background-color: #f9f9f9; antaa syötekentille pehmeän, neutraalin taustan, joka parantaa käytettävyyttä.
  - **Varjo**: box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); lisää hienovaraisen varjon, antaen syötekentille hieman kohotetun ilmeen.
  - **Siirtymä**: transition: border-color 0.3s ease; varmistaa sujuvan värinvaihdon, kun syötekentät saavat fokuksen.
- **Tärkeä yksityiskohta**: Syötekentät ja valintalistat on tyylitelty sekä visuaalisesti houkutteleviksi että toiminnallisiksi, tehden sovelluksen käytöstä helppoa säilyttäen puhtaan ja modernin ilmeen.

## 7. Input and Dropdown Focus Effect (input[type="number"], select):

- **Mikä se on**: Tämä sääntö tulee voimaan, kun käyttäjä kohdistaa syötekentän tai valintalistan (esim. napsauttamalla tai koskettamalla).
- **Tarkoitus**: border-color: #28a745; vaihtaa reunan värin vihreäksi, kun syötekenttä tai valintalista saa fokuksen, tarjoten välittömän visuaalisen palautteen käyttäjälle.
- **Tärkeä yksityiskohta**: Fokusvaikutus auttaa ohjaamaan käyttäjän huomion ja parantaa interaktiivista kokemusta osoittamalla, mikä kenttä on aktiivinen.

## 8. Button Styling (button):

- **Mikä se on**: Tämä sääntö tyylittää "Convert"-painikkeen, joka lähettää lomakkeen muunnosta varten.
- **Tarkoitus**:
  - **Täyttö**: padding: 12px 25px; varmistaa, että painike on tarpeeksi suuri, jotta sitä on mukava klikata.
  - **Taustaväri**: background-color: #28a745; antaa kirkkaan vihreän värin, joka ilmaisee positiivista toimintaa (muunnos).
  - **Tekstin väri**: color: white; varmistaa, että painikkeen teksti erottuu vihreää taustaa vasten.
  - **Reuna ja reunojen pyöristys**: border: none; border-radius: 8px; poistaa oletusreunan ja lisää pyöristetyt kulmat modernin ja siistin ulkonäön saavuttamiseksi.
  - **Kursori**: cursor: pointer; vaihtaa hiiren osoittimen kädeksi, kun se viedään painikkeen päälle, ilmaisten, että se on interaktiivinen.
  - **Siirtymä**: transition: background-color 0.3s ease, transform 0.2s ease; varmistaa sujuvat värinvaihdot ja animaatiot, kun hiiri viedään painikkeen päälle.
- **Tärkeä yksityiskohta**: Painike on suunniteltu olemaan erittäin näkyvä ja interaktiivinen, tehden käyttäjälle helpoksi lähettää lomake samalla tarjoten sujuvan hover-kokemuksen.

## 9. Button Hover Effect (button:hover):

- **Mikä se on**: Tämä sääntö tulee voimaan, kun käyttäjä vie hiiren "Convert"-painikkeen päälle.
- **Tarkoitus**:
  - **Taustaväri**: background-color: #218838; tummentaa vihreää taustaa hieman, kun painikkeen päälle viedään hiiri, tarjoten visuaalista palautetta.
  - **Transformaatio**: transform: translateY(-3px); nostaa painiketta hieman, antaen 3D-nostovaikutelman hover-tilassa.
  - **Varjo**: box-shadow: 0 6px 15px rgba(40, 167, 69, 0.4); lisää varjon intensiteettiä hover-tilassa, jolloin painike näyttää kohoavan enemmän.
- **Tärkeä yksityiskohta**: Hover-efekti tekee painikkeesta dynaamisen ja reagoivan, parantaen yleistä käyttäjäkokemusta tarjoamalla selkeää interaktiivista palautetta.

## 10. Result Display Styling (.result):

- **Mikä se on**: Tämä sääntö tyylittää &lt;div>-elementin, jossa näytetään muunnoksen tulos.
- **Tarkoitus**:
  - **Marginaali**: margin-top: 25px; antaa tilaa tulosnäytön yläpuolelle, erottaen sen lomakkeesta.
  - **Fonttikoko**: font-size: 1.3em; tekee tulostekstistä suuremman ja näkyvämmän, varmistaen sen erottuvuuden.
  - **Tekstin väri**: color: #333; käyttää tummanharmaata väriä vahvan kontrastin ja luettavuuden saavuttamiseksi.
  - **Fonttipaino**: font-weight: bold; lisää painokkuutta tulokseen, tehden siitä visuaalisesti erottuvan.
  - **Animaatio**: animation: fadeIn 1s ease-out forwards; lisää haalistumisefektin tuloksen ilmestyessä, tehden siirtymästä sulavan.
- **Tärkeä yksityiskohta**: Tulosnäyttö on suunniteltu olemaan selkeä ja helposti luettava, haalistumisanimaatio lisää sovelluksen käyttäjäkokemukseen ammattimaista viimeistelyä.

## 11. Fade-In Animation (@keyframes fadeIn):

- **Mikä se on**: Tämä sääntö määrittää mukautetun avainkuva-animaation nimeltä fadeIn.
- **Tarkoitus**: Animaatio siirtää tuloksen sujuvasti näkymättömästä näkyväksi, alkaen opacity: 0 ja siirtyen opacity: 1 samalla säätäen sen sijaintia hieman.
- **Tärkeä yksityiskohta**: Haalistumistehoste parantaa sovelluksen yleistä sulavuutta, tehden siitä ammattimaisemman ja visuaalisesti vangitsevamman.

# JavaScript selitys

## 1. DOMContentLoaded Event

- **Mikä se on**: DOMContentLoaded-tapahtumaa käytetään varmistamaan, että JavaScript-koodi suoritetaan vasta, kun koko HTML-dokumentti (DOM) on ladattu ja jäsennetty.
- **Tarkoitus**: Tämä takaa, että kaikki HTML-elementit (kuten lomake, syötteet ja pudotusvalikot) ovat valmiina käsiteltäviksi ennen kuin skripti yrittää käyttää niitä. Tämä estää virheitä, joissa skripti suoritetaan ennen kuin DOM on valmis.
- **Tärkeä yksityiskohta**: Tämän tapahtuman sisällä oleva koodi ei suoritu ennen kuin DOM on täysin ladattu, mikä on ratkaisevaa sen varmistamiseksi, että sovellus toimii odotetusti.

## 2. Selecting DOM Elements

- **Mikä se on**: Tärkeät HTML-elementit valitaan ja tallennetaan JavaScript-muuttujiin käyttämällä document.getElementById-metodia. Tämä mahdollistaa skriptin vuorovaikutuksen näiden elementtien kanssa ja niiden muokkaamisen.
- **Tarkoitus**: Valitsemalla lomake, syötekentät ja tulos-div, JavaScript voi dynaamisesti päivittää niiden sisältöä, validoida käyttäjän syötteitä ja näyttää tulokset.
- **Tärkeä yksityiskohta**:
  - **converterForm** käsittelee lomakkeen lähetysprosessin.
  - **amountInput** kaappaa käyttäjän syöttämän summan muunnosta varten.
  - **fromCurrencySelect** ja **toCurrencySelect** ovat pudotusvalikot, joissa käyttäjät valitsevat lähtö- ja kohdevaluutan.
  - **resultDiv** näyttää muunnostuloksen lomakkeen lähettämisen jälkeen.

## 3. Fetching Currency Data from the API

- **Mikä se on**: fetch()-funktiota käytetään tekemään HTTP-pyyntö ExchangeRate API:lle nykyisten valuuttakurssien hakemiseksi.
- **Tarkoitus**: Tämä varmistaa, että sovellus käyttää reaaliaikaisia tietoja valuuttamuunnoksiin. Kun sivu latautuu, sovellus hakee uusimmat kurssit käyttämällä USD:tä oletusvaluuttana.
- **Tärkeät yksityiskohdat**:
  - **JSON-jäsentäminen**: API palauttaa tiedot JSON-muodossa, ja ne jäsennetään response.json()-funktiolla, jotta ne voidaan muuntaa helposti käsiteltäväksi JavaScript-objektiksi.
  - **Valintalistojen täyttäminen**: Saatavilla olevien valuuttojen lista (Object.keys(data.rates)) lisätään dynaamisesti "From"- ja "To"-valintalistoihin JavaScriptin avulla, varmistaen ajantasaiset valuuttavaihtoehdot.

## 4. Handling API Errors

- **Mikä se on**: .catch()-metodia käytetään käsittelemään virheitä fetch-pyynnön aikana (esim. jos API ei toimi tai verkkoyhteysongelma ilmenee).
- **Tarkoitus**: Tämä varmistaa, että sovellus ei kaadu, jos API-ongelma ilmenee. Sen sijaan se näyttää virheilmoituksen käyttäjälle ja kirjaa ongelman konsoliin vianmääritystä varten.
- **Tärkeä yksityiskohta**: Jos API ei lataudu, sovellus näyttää käyttäjäystävällisen viestin tulos-divissä, ilmoittaen, että valuuttatietoja ei voitu noutaa.

## 5. Form Submission Event

- **Mikä se on**: submit-tapahtuma laukeaa, kun käyttäjä klikkaa "Convert"-painiketta. Tapahtuma estetään käyttämällä event.preventDefault()-metodia, joka estää oletusarvoisen lomakkeen lähetyksen (joka lataisi sivun uudelleen).
- **Tarkoitus**: Tämä sallii sovelluksen käsitellä muunnoksen dynaamisesti JavaScriptin avulla ilman, että sivua täytyy ladata uudelleen.
- **Tärkeät yksityiskohdat**:
  - Määrä ja valitut valuutat haetaan lomakkeen syötteistä.
  - Validaatio suoritetaan varmistaakseen, että käyttäjä on syöttänyt kelvollisen määrän ja valinnut valuutat.
  - Jos syöte on virheellinen (esim. jos määrää ei ole annettu), sovellus näyttää virheilmoituksen tulos-divissä.

## 6. Fetching Conversion Rates

- **Mikä se on**: Kun käyttäjä lähettää lomakkeen, tehdään toinen fetch()-pyyntö ExchangeRate API:lle, tällä kertaa valitulla "From"-valuutalla.
- **Tarkoitus**: Tämä pyyntö hakee vaihtokurssit valitulle lähtövaluutalle, jolloin sovellus voi suorittaa muunnoksen.
- **Tärkeä yksityiskohta**: API-URL rakennetaan dynaamisesti valitun lähtövaluutan perusteella. Esimerkiksi, jos käyttäjä valitsee "EUR", URL on [https://api.exchangerate-api.com/v4/latest/EUR](https://api.exchangerate-api.com/v4/latest/EUR).

## 7. Calculating and Displaying the Conversion Result

- **Mikä se on**: Muuntokurssi otetaan talteen API:sta vastauksesta (data.rates[toCurrency]) ja sitä käytetään laskettaessa muunnettu määrä (amount \* conversionRate).
- **Tarkoitus**: Muunnoksen tulos näytetään tulos-divissä, osoittaen käyttäjälle kuinka paljon syötetty määrä lähtövaluutassa on arvoltaan kohdevaluutassa.
- **Tärkeä yksityiskohta**: Tulos on muotoiltu kahden desimaalin tarkkuuteen käyttämällä .toFixed(2)-metodia, varmistaen, että tulos esitetään oikein valuuttamuunnoksissa.

## 8. Handling Conversion Errors

- **Mikä se on**: .catch()-metodi käsittelee virheitä, jotka ilmenevät muunnospyynnön aikana (esim. jos API ei toimi tai verkkoyhteysongelma ilmenee).
- **Tarkoitus**: Jos virhe ilmenee muunnosprosessin aikana, sovellus ilmoittaa siitä käyttäjälle näyttämällä viestin ja kirjaa virheen konsoliin vianmääritystä varten.
- **Tärkeä yksityiskohta**: Tämä varmistaa, että sovellus on vikasietoinen, tarjoten käyttäjälle sujuvan kokemuksen myös virhetilanteissa.
