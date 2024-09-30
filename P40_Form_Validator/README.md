# Nettisivu: https://keudaope.github.io/JSProjekteja/P40_Form_Validator

# Johdanto

Lomakkeen validoija on käytännöllinen sovellus, joka varmistaa, että käyttäjän syötteet lomakkeissa täyttävät tietyt kriteerit ennen lomakkeen lähettämistä. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla, kun opitaan käsittelemään käyttäjän syötteitä, validoimaan tietoja ja tarjoamaan reaaliaikaista palautetta. Käyttäjät näkevät virheilmoituksia, jos heidän syöttönsä on virheellinen, mikä parantaa datan laatua ja käyttäjäkokemusta.

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

# JavaScript selitys

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...})):

- **Mikä se on**: Tämä on tapahtumankuuntelija, joka odottaa, että koko HTML-dokumentti ladataan ennen kuin JavaScriptiä suoritetaan takaisinsoittotoiminnon sisällä.
- **Tarkoitus**: Se varmistaa, että JavaScript voi turvallisesti olla vuorovaikutuksessa DOM-elementtien (kuten lomakkeen ja syöttökenttien) kanssa, kun sivu on täysin latautunut.
- **Tärkeä yksityiskohta**: Tämä on kriittinen, jotta vältetään virheitä, jotka johtuvat DOM-elementtien käyttämisestä ennen kuin ne ovat käytettävissä.

## 2. Selecting DOM Elements (const form = document.getElementById('form'), etc.):

- **Mikä se on**: Nämä rivit valitsevat eri DOM-elementtejä käyttämällä getElementById() lomakkeelle ja syöttökentille (esim. käyttäjänimi, sähköposti, salasana, salasanan vahvistus) sekä virheilmoitusten säiliöille (esim. käyttäjänimi-virhe, sähköposti-virhe, jne.).
- **Tarkoitus**: Valitut elementit tallennetaan muuttujiksi, jotta niihin voidaan viitata ja niitä voidaan käsitellä skriptin aikana (esim. virheilmoitusten näyttämiseksi tai syötteiden tarkistamiseksi).
- **Tärkeä yksityiskohta**: Näiden elementtien tallentaminen muuttujiksi helpottaa niiden viittaamista useita kertoja validointitoiminnoissa.

## 3. Form Submission Event Listener (form.addEventListener('submit', (e) => {...})):

- **Mikä se on**: Tämä tapahtumankuuntelija kuuntelee lomakkeen lähetyksen tapahtumaa ja suorittaa validateInputs()-toiminnon, kun lomake lähetetään.
- **Tarkoitus**: Se estää lomakkeen oletuslähetyksen (e.preventDefault() avulla) käsittelemään validoinnin selaimen puolella ennen kuin mitään tietoja lähetetään palvelimelle. Näin lomake lähetetään vain, jos kaikki validoinnit onnistuvat.
- **Tärkeä yksityiskohta**: Oletuslähetyksen estäminen mahdollistaa validointitarkistusten suorittamisen ja virheiden näyttämisen ilman sivun uudelleenlatausta.

## 4. Validate Inputs Function (function validateInputs() {...}):

- **Mikä se on**: Tämä funktio vastaa lomakkeen syöttökenttien (käyttäjänimi, sähköposti, salasana ja salasanan vahvistus) validoinnista.
- **Vaiheet**:
  - Tyhjentää aiemmat virheilmoitukset asettamalla kaikkien virheilmoituselementtien textContent tyhjäksi merkkijonoksi.
  - Tarkistaa, täyttääkö jokainen syöttökenttä määritellyt validointisäännöt (esim. ei tyhjää käyttäjänimeä, oikea sähköpostimuoto, salasanan pituus ja yhteensopivat salasanat).
  - Jos kenttä epäonnistuu validoinnissa, näytetään virheilmoitus ja isValid-lippu asetetaan epätodeksi.
- **Tarkoitus**: Funktio varmistaa, että kaikki syötteet täyttävät määritellyt validointikriteerit ennen lomakkeen lähettämistä, ja näyttää sopivat virheilmoitukset, jos jokin validoinneista epäonnistuu.
- **Tärkeä yksityiskohta**: Jos lomake on validi (isValid pysyy totena), näytetään onnistumisviesti (tai lomake voidaan lähettää). Muussa tapauksessa virheilmoitukset näytetään vastaavien syöttökenttien alla.

## 5. Username Validation (if (username.value.trim() === '')):

- **Mikä se on**: Tämä tarkistaa, onko käyttäjänimi-kenttä tyhjä sen jälkeen, kun johtavat tai perässä olevat välilyönnit on poistettu.
- **Tarkoitus**: Varmistaa, että käyttäjä on syöttänyt käyttäjänimen, joka ei ole tyhjä.
- **Tärkeä yksityiskohta**: Jos kenttä on tyhjä, näytetään virheilmoitus ("Käyttäjänimi on pakollinen") ja lomake merkitään virheelliseksi.

## 6. Email Validation (validateEmail(email.value.trim())):

- **Mikä se on**: Tämä käyttää apufunktiota (validateEmail()) tarkistamaan, onko sähköpostikentässä validi sähköpostiosoitemuoto.
- **Tarkoitus**: Varmistaa, että sähköpostin syöte on oikeassa muodossa (esim. name@example.com).
- **Tärkeä yksityiskohta**: Jos sähköposti ei vastaa odotettua muotoa, näytetään virheilmoitus ("Sähköposti ei ole kelvollinen").

## 7. Password Validation (if (password.value.trim().length < 6)):

- **Mikä se on**: Tämä tarkistaa, onko salasanan pituus alle 6 merkkiä.
- **Tarkoitus**: Varmistaa, että salasana on tarpeeksi vahva asettamalla vähimmäispituusvaatimukseksi 6 merkkiä.
- **Tärkeä yksityiskohta**: Jos salasana on liian lyhyt, näytetään virheilmoitus ("Salasanan on oltava vähintään 6 merkkiä pitkä").
-

## 8. Confirm Password Validation (if (confirmPassword.value.trim() !== password.value.trim())):

- **Mikä se on**: Tämä tarkistaa, vastaavatko vahvista salasana -kentän arvo ja salasana-kentän arvo toisiaan.
- **Tarkoitus**: Varmistaa, että käyttäjä on syöttänyt saman salasanan molempiin kenttiin virheiden välttämiseksi.
- **Tärkeä yksityiskohta**: Jos salasanat eivät täsmää, näytetään virheilmoitus ("Salasanat eivät täsmää").

## 9. Validate Email Helper Function (function validateEmail(email) {...}):

- **Mikä se on**: Apufunktio, joka käyttää säännöllistä lauseketta sähköpostin muodon validointiin.
- **Tarkoitus**: Tarkistaa, noudattaako syöte yleistä sähköpostiosoitteen muotoa (esim. name@example.com).
- **Tärkeä yksityiskohta**: Säännöllinen lauseke varmistaa, että sähköposti sisältää kelvolliset merkit, "@"-symbolin ja verkkotunnuksen nimen.
