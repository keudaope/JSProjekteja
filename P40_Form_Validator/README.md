# Nettisivu: https://keudaope.github.io/JSProjekteja/P40_Form_Validator

#

# HTML selitys

## 1. DOCTYPE Declaration (&lt;!DOCTYPE html>):

- **Mikä se on:** Määrittää, että dokumentti on kirjoitettu HTML5:llä
- **Tarkoitus:** Varmistaa, että selain näyttää sivun standardimoodissa, noudattaen moderneja HTML-määrityksiä.
- **Tärkeä yksityiskohta:** &lt;!DOCTYPE html> -määritys auttaa säilyttämään yhteensopivuuden nykyaikaisten selainten välillä.

## 2. HTML Tag (&lt;html lang="en">):

- **Mikä se on:** Juurielementti, joka kietoo kaiken sivun sisällön. lang="en" -attribuutti ilmoittaa, että dokumentin kieli on englanti.
- **Tarkoitus:** Tarjoaa aloituspisteen koko HTML-dokumentille, ilmoittaen selaimelle kielen ja rakenteen.
- **Tärkeä yksityiskohta:** Kielen määrittäminen parantaa saavutettavuutta ja hakukoneoptimointia (SEO), auttaen ruudunlukijoita ja hakukoneita tulkitsemaan sivun sisältöä oikein.

## 3. Head Section (&lt;head>):

- **Mikä se on:** Sisältää metatietoja sivusta, kuten merkistökoodauksen, näkymäasetukset ja dokumentin otsikon.
- **Tärkeitä yksityiskohtia:**
  - **Charset Meta Tag (&lt;meta charset="UTF-8">):** Varmistaa oikean merkistökoodauksen laajalle joukolle merkkejä, mukaan lukien symbolit ja erikoismerkit.
  - **Viewport Meta Tag (&lt;meta name="viewport" content="width=device-width, initial-scale=1.0">):** Tekee sivusta responsiivisen varmistamalla, että se mukautuu eri näyttökokoihin, erityisesti mobiililaitteilla.
  - **Title Tag (&lt;title>Form Validator</title>)**: Määrittää otsikon, joka näkyy selaimen välilehdessä ja jota hakukoneet käyttävät.

## 4. Body Tag (&lt;body>):

- **Mikä se on:** Sisältää kaikki verkkosivun näkyvät sisällöt.
- **Tarkoitus:** Body-tägiin sijoitetaan kaikki käyttäjälle näkyvät elementit (lomakkeet, painikkeet ja virheilmoitukset).
- **Tärkeä yksityiskohta:** Kaikki vuorovaikutteiset elementit, kuten lomakkeet ja painikkeet, sijoitetaan &lt;body>-tunnisteen sisään, jota voidaan muotoilla ja käsitellä CSS:llä ja JavaScriptillä.

## 5. Container Div (&lt;div class="container">):

- **Mikä se on:** Kääre-elementti (<div>), joka sisältää kaikki lomake-elementit. Se on muotoiltu CSS:llä luomaan korttimainen rakenne.
- **Tarkoitus:** Ryhmittelee liittyvät elementit (kuten lomakkeen, syöttökentät ja painikkeet) yhteen helpottamaan muotoilua ja asettelun hallintaa.
- **Tärkeä yksityiskohta:** Kontaineri auttaa hallitsemaan asettelua lisäämällä tyhjää tilaa, keskittämällä sisällön ja soveltamalla tyylejä, kuten taustaväriä ja varjoja.

## 6. Heading (&lt;h1>Form Validator&lt;/h1>):

- **Mikä se on:** Otsikko-elementti, joka näyttää lomakkeen otsikon.
- **Tarkoitus:** Ilmoittaa käyttäjälle sivun tarkoituksen, eli että kyseessä on lomakevalidointiesimerkki.
- **Tärkeä yksityiskohta:** &lt;h1>-tunniste on tärkeä saavutettavuuden ja hakukoneoptimoinnin kannalta, koska se osoittaa sivun pääotsikon.

## 7. Form Tag (&lt;form id="form">):

- **Mikä se on:** &lt;form>-elementti määrittää rakenteen käyttäjän syötteelle. Se sisältää tekstikenttiä käyttäjänimelle, sähköpostille, salasanalle ja salasanan vahvistukselle.
- **Tarkoitus**: Sallii käyttäjien syöttää tietoja. Kun lomake lähetetään, JavaScript käsittelee validoinnin ja estää lomakkeen oletuslähetyksen.
- **Tärkeä yksityiskohta:** id="form" mahdollistaa lomakkeen helpon viittauksen JavaScriptissä validointia varten.

## 8. Input Fields (&lt;input type="text" id="username">):

- **Mikä se on:** <input>-elementit sallivat käyttäjien syöttää tekstimuotoisia tietoja. Jokaiselle kentälle määritetään tietty tyyppi (teksti, sähköposti, salasana) odotetun datan perusteella.
- **Tarkoitus**: Kerää käyttäjän tietoja (käyttäjänimi, sähköposti, salasana), jotka JavaScript sitten validoi.
- **Tärkeä yksityiskohta:** id-attribuutti yhdistää jokaisen syöttökentän vastaavaan validointiin JavaScript-koodissa.

## 9. Error Divs (&lt;div class="error" id="username-error">&lt;/div>):

- **Mikä se on:** &lt;div>-elementit, joihin virheilmoitukset näytetään.
- **Tarkoitus:** Näyttää validointiviestejä käyttäjälle, kun tämä lähettää virheellistä tai epäkelpoa syöttötietoa.
- **Tärkeä yksityiskohta:** id-attribuuttia käytetään yhdistämään nämä virheilmoitukset tiettyihin lomakenttiin, mikä tekee niistä helppoja käsitellä JavaScriptillä.

## 10. Submit Button (&lt;button type="submit">Submit&lt;/button>):

- **Mikä se on:** Painike-elementti, joka käynnistää lomakkeen lähetyksen, kun sitä klikataan.
- **Tarkoitus:** Käyttäjä klikkaa tätä painiketta lähettääkseen lomakedatan, joka sitten validoidaan JavaScriptillä.
- **Tärkeä yksityiskohta:** Painike on muotoiltu CSS:llä ja reagoi käyttäjän vuorovaikutukseen (esim. vaihtaa väriä hover-tilassa). Se myös estää lomakkeen oletuslähetyksen, jotta räätälöity validointi voidaan suorittaa.

# CSS Selitys

## 1. Body Styling (body):

- **Mikä se on**: Body-valitsin tyylittelee verkkosivun pääasiallisen rakenteen.
- **Keskeiset ominaisuudet**:
  - **font-family:** Asettaa fontiksi Arialin, sans-serif-fontin, joka antaa siistin ja modernin ilmeen.
  - **background-color:** Käyttää vaaleanharmaata (#f0f0f0) taustaa, joka luo pehmeän ja neutraalin pohjan lomakekontainerille.
  - **display: flex; justify-content: center; align-items: center:** Keskittää lomakekontainerin sekä vaaka- että pystysuunnassa Flexboxin avulla, jolloin lomake näkyy aina näytön keskellä.
  - **height:** Varmistaa, että body kattaa koko näytön korkeuden (100vh), jolloin lomake saadaan pystysuuntaisesti keskitettyä.
  - **margin: 0:** Poistaa oletusmarginaalit bodyn ympäriltä, jotta vältetään ei-toivottu tila.

## 2. Container Styling (.container):

- **Mikä se on**: .container-luokka tyylittelee lomakekontainerin, johon kaikki lomake-elementit (syöttökentät, painikkeet) on sijoitettu.
- **Keskeiset ominaisuudet**:
  - **background**: Asettaa taustaväriksi valkoisen, jotta lomake erottuu vaaleanharmaasta body-taustasta.
  - **padding**: Lisää 20px tilaa kontainerin sisään, jotta lomake-elementit eivät olisi liian ahtaasti.
  - **border-radius**: Pyöristää kontainerin kulmat 8px:ä, antaen pehmeän ja modernin ilmeen.
  - **box-shadow**: Lisää hienovaraisen varjon (0 0 10px rgba(0, 0, 0, 0.1)) kontainerin ympärille, luoden syvyysvaikutelman ja saaden sen visuaalisesti erottumaan taustasta.
  - **width**: Asettaa lomakekontainerille kiinteän 300px leveyden, jotta se pysyy kompaktina ja keskitettynä.
  - **text-align**: center: Keskittää kontainerin sisällön, mukaan lukien lomakekentät ja painike, varmistaen siistin asettelun.

## 3. Heading Styling (h1):

- **Mikä se on**: Tyylittelee lomakkeen pääotsikon, jossa lukee "Form Validator."
- **Keskeiset ominaisuudet**:
  - **margin-bottom**: Lisää 20px marginaalin otsikon alle luodakseen tilaa otsikon ja lomake-elementtien välille, varmistaen visuaalisen eron.

## 4. Input Field Styling (input):

- **Mikä se on**: Soveltaa tyylejä kaikkiin <input>-elementteihin (tekstikentät, sähköpostikentät, salasanakentät) lomakkeen sisällä.
- **Keskeiset ominaisuudet**:
  - **padding**: Lisää 10px täytettä syöttökenttien sisään, jotta käyttäjän kirjoittama teksti on selkeämmin luettavissa ja mukavammin sijoitettuna.
  - **margin-bottom**: Lisää 10px tilaa jokaisen syöttökentän alle erottaakseen ne seuraavasta lomake-elementistä, parantaen luettavuutta ja asettelua.
  - **width**: Käyttää calc(100% - 22px) varmistaakseen, että syöttökentät vievät koko kontainerin leveyden huomioiden täytteen ja reunat, jolloin ne eivät ylitä rajoja.
  - **border**: Lisää hienovaraisen reunuksen (1px solid #ccc) määrittääkseen syöttökentät ilman, että ne ovat liian häiritseviä.
  - **border-radius**: Pyöristää hieman syöttökenttien kulmia, luoden pehmeän ja modernin ilmeen, joka sopii kontainerin tyyliin.

## 5. Button Styling (button):

- **Mikä se on**: Tyylittelee lomakkeen lopussa olevan lähetä-painikkeen.
- **Keskeiset ominaisuudet**:
  - **padding**: Lisää 10px 20px täytettä, jotta painikkeesta tulee suurempi ja helpompi klikata.
  - **border**: Poistaa oletuspainikkeen reunuksen siistimmän ulkoasun saavuttamiseksi.
  - **background-color:** Asettaa painikkeen taustaväriksi kirkkaan sinisen (#007bff), jotta se erottuu visuaalisesti ja ilmaisee, että se on päätoimintopainike.
  - **color**: Käyttää valkoista tekstiä (#fff) painikkeessa luoden korkean kontrastin sinisen taustan kanssa, varmistaen, että teksti on helposti luettavissa. -**border-radius**: Lisää 4px pyöristystä painikkeen kulmiin, sopien yhteen syöttökenttien ja kontainerin pyöristettyjen kulmien kanssa.
  - **cursor: pointer**: Vaihtaa osoittimen osoittimeksi, kun käyttäjä vie hiiren painikkeen päälle, antaen visuaalisen vihjeen, että painike on klikattavissa.

## 6. Button Hover Effect (button):

- **Mikä se on**: Lisää hover-efektin painikkeelle, kun käyttäjä vie hiiren sen päälle.
- **Keskeiset ominaisuudet**:
  - **background-color**: Vaihtaa painikkeen taustavärin tummemmaksi siniseksi (#0056b3) hover-tilassa, antaen käyttäjälle palautteen siitä, että painike on interaktiivinen.

## 7. Error Message Styling (.error):

- **Mikä se on**: Tyylittelee virheilmoitukset, jotka ilmestyvät jokaisen syöttökentän alle, kun validointi epäonnistuu.
- **Keskeiset ominaisuudet**:
  - **color**: Asettaa virheilmoitusten tekstin väriksi punaisen, jotta ne erottuvat lomakkeen neutraaleista väreistä ja selvästi osoittavat, että jotain on vialla.
  - **font-size**: Käyttää pienempää fonttikokoa (0.9em) virheilmoituksissa erottaakseen ne syöttökenttien nimilapuista ja pääsisällöstä.
  - **margin-bottom**: Lisää tilaa jokaisen virheilmoituksen alle varmistaakseen, ettei se mene päällekkäin seuraavan syöttökentän kanssa.
