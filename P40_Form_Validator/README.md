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
