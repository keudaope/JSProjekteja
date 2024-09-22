# Nettisivu: https://keudaope.github.io/JSProjekteja/P04_Note-Taking_App

# Johdanto

Muistiinpanosovellus on hyödyllinen työkalu, jonka avulla käyttäjät voivat luoda, muokata ja poistaa muistiinpanoja. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää, ja se esittelee käsitteitä, kuten CRUD-toiminnot (Luo, Lue, Päivitä, Poista), paikallinen tallennus ja DOM-manipulointi.

# HTML Selitys

1. &lt;!DOCTYPE html>

- **Mitä se on**: Tämä on dokumenttityypin julistus, ja sen on oltava minkä tahansa HTML-dokumentin ensimmäinen rivi.
- **Tarkoitus**: Se kertoo selaimelle, että kyseessä on HTML5-dokumentti. Tämä auttaa varmistamaan, että sivu tulkitaan oikein eri selaimissa.
- **Tärkeys**: HTML5 on uusin ja vankin HTML-versio, ja käyttämällä &lt;!DOCTYPE html> varmistetaan kaikkien modernien verkkostandardien tukeminen.

2. &lt;html lang="en">

- **Mitä se on**: &lt;html>-tagi on juurielementti, joka sisältää kaikki muut sivun elementit.
- **Tarkoitus**: Se ympäröi koko HTML-dokumentin. lang="en"-attribuutti määrittää sivun ensisijaiseksi kieleksi englannin.
- **Tärkeys**: Kielen määrittäminen parantaa saavutettavuutta, koska se auttaa ruudunlukijoita ja hakukoneita ymmärtämään sivulla käytetyn kielen, mikä parantaa sekä saavutettavuutta että hakukoneoptimointia (SEO).

3. &lt;head>

- **Mitä se on**: &lt;head>-elementti sisältää dokumentin metatietoja.
- **Tarkoitus**: Se sisältää tietoja sivusta, kuten merkkienkoodauksen, näkymäasetukset ja ulkoiset resurssit (esim. tyylitiedostot ja skriptit). Sisältö &lt;head>-elementissä ei näy itse sivulla, mutta se on kriittinen selaimen toiminnalle.
- **Tärkeys**: Täällä olevat metatiedot varmistavat, että sivu näytetään oikein eri laitteilla ja selaimilla, ja että linkitetyt resurssit (kuten CSS-tiedosto) latautuvat.

4. &lt;meta charset="UTF-8">

- **Mitä se on**: Tämä rivi määrittää dokumentissa käytetyn merkkienkoodauksen.
- **Tarkoitus**: UTF-8 on universaali enkoodaus, joka tukee lähes kaikkia eri kielten ja symbolien merkkejä.
- **Tärkeys**: Varmistaa, että sivu voi näyttää oikein kaikki merkit tai symbolit (kuten aksentit, erikoismerkit tai emojit).

5. &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">

- **Mitä se on**: Tämä &lt;meta>-tagi määrittää sivun näkymän, mikä on ratkaisevaa responsiivisessa suunnittelussa.
- **Tarkoitus**: Se varmistaa, että verkkosivun leveys asetetaan käyttäjän laitteen (mobiili, tabletti tai tietokone) leveydelle ja että alkuperäinen zoomaus on 100 %.
- **Tärkeys**: Ilman tätä tagia sivu ei välttämättä näy oikein mobiililaitteissa, sillä sisältö ei ehkä skaalaudu tai sovellu pienemmille näytöille kunnolla.

6. &lt;title>Note-Taking App&lt;/title>

- **Mitä se on**: &lt;title>-elementti määrittää dokumentin otsikon.
- **Tarkoitus**: &lt;title>-tagin sisältö näkyy selaimen välilehdessä ja sitä käytetään hakukoneissa sivun otsikkona hakutuloksissa.
- **Tärkeys**: Kuvaileva otsikko auttaa käyttäjiä ymmärtämään sivun tarkoituksen ja on tärkeä hakukoneoptimoinnin kannalta.

7. &lt;link rel="stylesheet" href="styles.css">

- **Mitä se on**: &lt;link>-tagi liittää ulkoisen resurssin (tässä tapauksessa CSS-tiedoston) HTML-dokumenttiin.
- **Tarkoitus**: Tämä linkki lataa ulkoisen styles.css-tiedoston, joka sisältää kaikki sivun tyylit.
- **Tärkeys**: CSS
  erottaminen HTML
  ä mahdollistaa siistimmän rakenteen, helpomman ylläpidon ja tyylien uudelleenkäytön useilla sivuilla.

8. &lt;body>

- **Mitä se on**: &lt;body>-elementti sisältää kaiken verkkosivun näkyvän sisällön.
- **Tarkoitus**: Kaikki, mikä on sisällä &lt;body>-elementissä, näytetään käyttäjälle selaimessa. Tämä sisältää otsikot, lomakkeet, painikkeet ja muut interaktiiviset elementit.
- **Tärkeys**: Ilman &lt;body>-elementtiä ei olisi mahdollista näyttää sisältöä tai interaktiivisia elementtejä käyttäjälle.

9. &lt;div class="container">

- **Mitä se on**: &lt;div> on lohkotason kontti, jota käytetään sisällön ryhmittelyyn.
- **Tarkoitus**: Tässä tapauksessa luokan "container" sisältävä &lt;div> ympäröi koko sovelluksen sisällön. Se toimii konttina lomakkeelle, otsikolle ja muistilistalle, mikä mahdollistaa tiettyjen tyylien (kuten marginaalit ja asettelut) soveltamisen koko osioon.
- **Tärkeys**: Sisällön ryhmittely kontin sisällä helpottaa tyylittelyä ja asettelun hallintaa, erityisesti CSS
  avulla, kun elementtejä halutaan keskittää tai niille halutaan asettaa välimatkoja.

10. &lt;h1>Note-Taking App&lt;/h1>

- **Mitä se on**: &lt;h1>-tagi määrittää sivun pääotsikon.
- **Tarkoitus**: Tämä otsikko ilmoittaa käyttäjälle, että kyseessä on muistioiden ottamiseen tarkoitettu sovellus. Se on sivun näkyvin teksti ja sitä käytetään yleensä pääotsikkona.
- **Tärkeys**: &lt;h1>-tagi on tärkeä saavutettavuuden ja SEO
  kannalta, sillä se auttaa hakukoneita ja ruudunlukijoita ymmärtämään sivun pääaiheen.

11. &lt;form id="note-form">

- **Mitä se on**: &lt;form>-elementtiä käytetään keräämään käyttäjän syötteitä.
- **Tarkoitus**: Tässä tapauksessa lomake antaa käyttäjän syöttää uusia muistiinpanoja. Kun lomake lähetetään ("Add Note" -painikkeella), syöte käsitellään JavaScriptin avulla ja uusi muistiinpano lisätään listaan.
- **Attribuutit**:
- id="note-form": Antaa lomakkeelle yksilöllisen tunnisteen, jolloin sitä voidaan helposti käyttää ja käsitellä JavaScriptin avulla.
- **Tärkeys**: Lomakkeet ovat ensisijainen tapa kerätä käyttäjän syötteitä verkkosivulla, ja niiden avulla käyttäjät voivat olla vuorovaikutuksessa sovelluksen kanssa.

12. &lt;input type="text" id="note-input" placeholder="Enter a new note" required>

- **Mitä se on**: &lt;input>-elementti luo interaktiivisen syöttökentän, johon käyttäjät voivat kirjoittaa tekstiä.
- **Tarkoitus**: Tämä syöttökenttä on se, johon käyttäjät kirjoittavat muistiinpanojensa tekstit. placeholder-attribuutti antaa vihjeen kentän sisällä, kun taas required-attribuutti varmistaa, ettei kenttä jää tyhjäksi lomaketta lähetettäessä.
- **Attribuutit**:
- type="text": Määrittää, että tämä on tekstisyötteen kenttä.
- id="note-input": Antaa syöttökentälle yksilöllisen tunnisteen, jolloin sitä voidaan käyttää JavaScriptissa tai CSS:ssä.
- placeholder="Enter a new note": Näyttää vihjeen ohjaamaan käyttäjää.
- required: Varmistaa, että lomaketta ei voi lähettää ilman, että käyttäjä on syöttänyt jotain tekstiä.

13. &lt;button type="submit">Add Note&lt;/button>

- **Mitä se on**: &lt;button>-elementti luo napsautettavan painikkeen.
- **Tarkoitus**: Tämä painike lähettää lomakkeen, kun sitä napsautetaan, käynnistäen JavaScript-funktion, joka lisää uuden muistiinpanon. type="submit"-attribuutti tekee siitä lomakkeen lähetyspainikkeen.
- **Tärkeys**: Painikkeet ovat tärkeitä käyttäjän vuorovaikutuksessa ja niiden avulla käyttäjät voivat käynnistää toimintoja, kuten lomakkeen lähettämisen tai muistiinpanon lisäämisen.

14. &lt;div class="note-list" id="note-list">&lt;/div>

- **Mitä se on**: Toinen &lt;div>-elementti, joka toimii muistiinpanojen listan kontinasi.
- **Tarkoitus**: Tämä &lt;div> täytetään dynaamisesti JavaScriptin avulla muistiinpanojen listalla, jonka käyttäjä lisää. Muistiinpanot lisätään tänne niiden luomisen jälkeen.
- **Attribuutit**:
- class="note-list": CSS-luokka muistiinpanolistan säiliön tyylittämistä varten.
- id="note-list": Tunniste, jonka avulla JavaScript voi käsitellä säiliötä (esim. lisätä tai poistaa muistiinpanoja).
- **Tärkeys**: Ilman tätä konttia muistiinpanoja ei voitaisi näyttää dynaamisesti sivulla. Se on olennainen käyttäjän muistiinpanojen näyttämiseksi järjestelmällisesti.

15. &lt;script src="app.js">&lt;/script>

- **Mitä se on**: &lt;script>-tagia käytetään linkittämään ulkoinen JavaScript-tiedosto.
- **Tarkoitus**: Tämä rivi linkittää app.js-tiedostoon, joka sisältää sovelluksen kaiken logiikan (muistiinpanojen lisääminen, poistaminen jne.).
- **Tärkeys**: Sisällyttämällä skripti &lt;body>-elementin loppuun varmistetaan, että HTML on ladattu kokonaan ennen JavaScriptin suorittamista, mikä estää mahdolliset virheet DOMin kanssa toimiessa.

# CSS Selitys

## 1. body

- **Mitä se on**: Tyylittelee koko verkkosivun.
- **Tarkoitus**: Keskittää sisällön sekä vaaka- että pystysuunnassa sivulla, asettaa taustaksi gradientti ja määrittää fontin koko sovellukselle.
- **Keskeiset ominaisuudet**:
  - **background**: Lineaarinen gradientti luo modernin, visuaalisesti houkuttelevan taustan.
  - **display: flex; justify-content: center; align-items: center;**: Nämä ominaisuudet varmistavat, että sisältö keskitetään sekä vaaka- että pystysuunnassa.
  - **height: 100vh;**: Varmistaa, että body vie koko näkymän korkeuden, jolloin sisältö on aina keskitetty pystysuunnassa.

## 2. .container

- **Mitä se on**: Sovelluksen sisällön pääkontti.
- **Tarkoitus**: Se ryhmittelee visuaalisesti otsikon, lomakkeen ja muistilistat, ja tarjoaa pehmusteen sekä varjon, jotta se näyttää modernilta kortilta.
- **Keskeiset ominaisuudet**:
  - **background: white;**: Luo valkoisen taustan kontin ympärille, jolloin se erottuu gradientista.
  - **padding**: Lisää sisäistä tilaa kontin reunan ja sen sisällön välille.
  - **border-radius: 12px;**: Antaa kontin kulmille pyöreyttä, mikä tekee suunnittelusta modernin.
  - **box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);**: Lisää hienovaraisen varjon, joka luo syvyyttä ja antaa kontin näyttää hieman kohotetulta.
  - **transition**: Varmistaa, että kaikki muutokset kontissa (esim. hover-efektit) ovat sujuvia ja asteittaisia.

## 3. h1

- **Mitä se on**: Tyylittelee pääotsikon.
- **Tarkoitus**: Hallitsee otsikon välistyksiä ja väriä.
- **Keskeiset ominaisuudet**:
  - **margin-bottom**: Lisää väliä otsikon ja sen alapuolella olevan lomakkeen välille.
  - **color**: Asettaa otsikon väriksi tummanharmaan, mikä parantaa luettavuutta ja kontrastia valkoista taustaa vasten.

## 4. form

- **Mitä se on**: Määrittää lomake-elementtien asettelun.
- **Tarkoitus**: Asettaa lomake-elementit (syötekenttä ja painike) pystysuuntaisesti päällekkäin ja keskittää ne kontin sisällä.
- **Keskeiset ominaisuudet**:
  - **flex-direction: column;**: Asettaa lomake-elementit pystysuuntaisesti.
  - **align-items: center;**: Keskittää lomake-elementit vaakasuunnassa kontin sisällä.

5.  input[type="text"]

- **Mitä se on**: Tyylittelee syötekentän, johon käyttäjät kirjoittavat muistiinpanoja.
- **Tarkoitus**: Antaa syötekentälle siistin ulkoasun pehmusteiden, reunojen ja hienovaraisen varjon avulla.
- **Keskeiset ominaisuudet**:
  - **width: 100%;**: Varmistaa, että syötekenttä täyttää koko kontin leveyden.
  - **border-radius:** Lisää pyöristetyt kulmat, jotka sopivat kokonaisilmeeseen.
  - **box-shadow:** Lisää pienen varjon, joka saa syötekentän erottumaan.
  - **transition**: Pehmeästi siirtyy reunaväri, kun syötekenttä on aktiivinen.

## 6. input[type="text"]:focus

- **Mitä se on**: Määrittää syötekentän tyylin, kun se on aktiivinen (klikattu tai valittu).
- **Tarkoitus**: Antaa visuaalisen vihjeen siitä, että syötekenttä on aktiivinen.
- **Keskeiset ominaisuudet**:
  - **border-color:** Muuttaa reunavärin vihreäksi, kun syötekenttä on aktiivinen, mikä parantaa visuaalista palautetta käyttäjälle.

## 7. button

- **Mitä se on**: Tyylittelee muistiinpanojen lisäämispainikkeen.
- **Tarkoitus**: Tekee painikkeesta visuaalisesti erottuvan pehmusteiden, taustavärin ja hover-efektien avulla.
- **Keskeiset ominaisuudet**:
  - **background-color: #28a745;**: Asettaa vihreän taustan, joka viestii positiivista toimintaa (muistiinpanon lisääminen).
  - **border-radius**: Lisää pyöristetyt kulmat, jotka sopivat syötekentän ja kontin ulkoasuun.
  - **transition**: Varmistaa, että taustaväri ja liikkeet ovat sujuvia, kun painiketta hoveroidaan tai klikataan.

## 8. button:hover

- **Mitä se on**: Määrittää painikkeen tyylin, kun käyttäjä hoveroi sitä.
- **Tarkoitus**: Tarjoaa palautteen, kun painiketta käytetään, tekemällä siitä hieman tummemman ja nostetun näköisen.
- **Keskeiset ominaisuudet**:
  - **background-color**: Muuttuu tummemmaksi vihreäksi, kun painiketta hoveroidaan, paremman kontrastin saavuttamiseksi.
  - **transform**: Lisää pienen nostovaikutuksen, jolloin painike näyttää kohoavan sivulta.

## 9. .note-list

- **Mitä se on**: Tyylittelee kontin, jossa muistiinpanot näytetään.
- **Tarkoitus**: Lisää tilaa muistilistan yläpuolelle ja kohdistaa muistiinpanot vasemmalle.
- **Keskeiset ominaisuudet**:
  - **margin-top:** Lisää tilaa lomakkeen ja muistilistan välille.
  - **text-align: left;**: Kohdistaa kunkin muistiinpanon tekstin vasemmalle.

## 10. .note-item

- **Mitä se on**: Tyylittelee yksittäiset muistiinpanot listassa.
- **Tarkoitus**: Ryhmittelee jokaisen muistiinpanon visuaalisesti sen painikkeiden kanssa, käyttäen pehmustetta, pyöristettyjä kulmia ja varjoa syvyyden luomiseksi.
- **Keskeiset ominaisuudet**:
  - **display: flex; justify-content: space-between;**: Kohdistaa muistiinpanon tekstin ja painikkeet (Muokkaa/Poista) vaakasuunnassa, luoden tilaa niiden väliin.
  - **padding**: Lisää sisäistä tilaa jokaisen muistiinpanon ympärille, jotta se näyttää siistimmältä.
  - **background**: Asettaa vaaleanharmaan taustan, joka erottaa muistiinpanon muusta sivusta.
  - **border-radius**: Antaa muistiinpanoille pyöristetyt kulmat, jotka sopivat kokonaisilmeeseen.
  - **box-shadow**: Lisää kevyen varjon, joka saa jokaisen muistiinpanon näyttämään hieman kohotetulta.
  - **transition**: Varmistaa sujuvat muutokset läpinäkyvyydessä ja asennossa fade-in- ja fade-out-efekteille.

## 11. .note-item.adding ja .note-item.adding.show

- **Mitä se on**: Määrittää muistiinpanon alkutilan ja lopputilan, kun se lisätään listaan.
- **Tarkoitus**: Luo fade-in-efektin, kun muistiinpanot lisätään.
- **Keskeiset ominaisuudet**:
  - **opacity**: Alkaa arvolla 0 (näkymätön) ja siirtyy arvoon 1 (täysin näkyvä).
  - **transform**: Siirtää muistiinpanoa hieman ylös ja sitten liu'uttaa sen paikoilleen.

## 12. .note-item.removing

- **Mitä se on**: Määrittää muistiinpanon tyylin, kun sitä poistetaan.
- **Tarkoitus**: Luo fade-out-efektin, kun muistiinpano poistetaan.
- **Keskeiset ominaisuudet**:
  - **opacity**: Siirtyy arvosta 1 (näkyvä) arvoon 0 (näkymätön).
  - **transform**: Siirtää muistiinpanon hieman sivulle sen poistuessa näkyvistä.

## 13. .note-item input

- **Mitä se on**: Tyylittelee syötekentän jokaisessa muistiinpanossa (kun muistiinpanoa muokataan).
- **Tarkoitus**: Tekee muistiinpanojen muokkauskentästä yhtenäisen pääsyötekentän kanssa.
- **Keskeiset ominaisuudet**:
  - **flex: 1**: Varmistaa, että syötekenttä vie tilan, joka on saatavilla painikkeiden välillä.
  - **border-radius**: Vastaa muiden syötekenttien pyöristettyjä kulmia.

## 14. .note-item button

- **Mitä se on**: Tyylittelee Muokkaa- ja Poista-painikkeet jokaisessa muistiinpanossa.
- **Tarkoitus**: Pidä painikkeet yksinkertaisina ilman taustaa, mutta kuitenkin vuorovaikutteisina väri- ja hover-efekteillä.
- **Keskeiset ominaisuudet**:
  - **color: #d9534f;**: Asettaa Poista-painikkeen väriksi punaisen, mikä osoittaa tuhoavaa toimintaa.
  - **transition**: Varmistaa, että väri siirtyy sujuvasti hover-tilaan siirtyessä.

## 15. .note-item .edit ja .note-item .edit:hover

- **Mitä se on**: Tyylittelee Muokkaa-painikkeen ja sen hover-efektin.
- **Tarkoitus**: Tarjoaa erottuvan värin Muokkaa-painikkeelle ja hover-efektin, joka osoittaa, että se on klikattavissa.
- **Keskeiset ominaisuudet**:
  - **color: #5bc0de;**: Asettaa Muokkaa-painikkeen väriksi sinisen.
  - **hover**: Muuttaa värin tummemmaksi siniseksi hover-tilassa, paremman visuaalisen palautteen saavuttamiseksi.

# JavaScript Selitys

## 1. document.addEventListener('DOMContentLoaded', () => { ... });

- **Mitä se on**: Tämä lisää tapahtumankuuntelijan, joka odottaa, kunnes koko HTML-dokumentti on ladattu ennen kuin JavaScript-koodi suoritetaan.
- **Tarkoitus**: Varmistaa, että kaikki DOM-elementit (kuten lomakkeet ja painikkeet) ovat valmiina vuorovaikutusta varten ennen JavaScriptin suorittamista.
- **Tärkeys**: Estää virheet, jotka johtuvat DOM-elementtien käsittelystä ennen kuin ne ovat saatavilla.

## 2. const noteForm = document.getElementById('note-form');

- **Mitä se on**: Tämä valitsee <form>-elementin, jonka id on "note-form".
- **Tarkoitus**: Lomake kerää käyttäjän syötteen uuden muistiinpanon luomiseen.
- **Tärkeä yksityiskohta**: document.getElementById() avulla JavaScript voi olla vuorovaikutuksessa tiettyjen elementtien kanssa sivulla.

## 3. const noteInput = document.getElementById('note-input');

- **Mitä se on**: Tämä valitsee <input>-elementin, jonka id on "note-input".
- **Tarkoitus**: Tämä on syötekenttä, johon käyttäjät kirjoittavat muistiinpanojensa tekstin.
- **Tärkeä yksityiskohta**: Syötekentän value-ominaisuutta käytetään käyttäjän syöttämän tekstin tallentamiseen.

## 4. const noteList = document.getElementById('note-list');

- **Mitä se on**: Tämä valitsee kontin, johon muistiinpanolista näytetään.
- **Tarkoitus**: Tämä elementti on paikka, johon muistiinpanot lisätään dynaamisesti niiden luomisen jälkeen.
- **Tärkeä yksityiskohta**: Tämän elementin avulla voimme lisätä tai poistaa muistiinpanoja ilman sivun uudelleenlatausta.

## 5. let notes = JSON.parse(localStorage.getItem('notes')) || [];

- **Mitä se on**: Tämä alustaa taulukon muistiinpanojen tallentamista varten, joko lataamalla ne localStorage-muistista tai luomalla tyhjän taulukon.
- **Tarkoitus**: Taulukko sisältää kaikki käyttäjän luomat muistiinpanot, jotka säilyvät myös sivun päivityksen jälkeen (localStorage-tallennuksen ansiosta).
- **Tärkeä yksityiskohta**: localStorage-muistia käytetään tietojen säilyttämiseen selainistuntojen välillä, ja JSON.parse() muuntaa tallennetun merkkijonon takaisin taulukoksi.

## 6. function saveNotes() { ... }

- **Mitä se on**: Tämä funktio tallentaa nykyisen muistiinpanotaulukon localStorage-muistiin.
- **Tarkoitus**: Muistiinpanojen tallentaminen mahdollistaa sen, että käyttäjä voi päivittää sivun ja silti nähdä aiemmin lisätyt muistiinpanot.
- **Tärkeä yksityiskohta**: JSON.stringify() muuntaa muistiinpanojen taulukon merkkijonoksi, joka tarvitaan localStorage-tallennukseen.

## 7. function addNoteItem(note) { ... }

- **Mitä se on**: Tämä funktio luo uuden muistiinpanon ja lisää sen muistiinpanolistaan DOMiin .
- **Tarkoitus**: Dynaamisesti luodaan uusi div-elementti, joka sisältää muistiinpanon tekstin ja muokkaus-/poistopainikkeet.
- **Tärkeä yksityiskohta**: Uusi muistiinpano saa fade-in-efektin käyttämällä CSS-luokkaa (ensin adding, sitten show).

## 8. div.innerHTML = ...

- **Mitä se on**: Tämä rivi asettaa uuden muistiinpanon HTML-sisällön, mukaan lukien tekstisyötekentän ja muokkaus-/poistopainikkeet.
- **Tarkoitus**: Muistiinpano esitetään visuaalisesti DOMissa ja siihen lisätään mahdollisuus muokata tai poistaa sitä.
- **Tärkeä yksityiskohta**: Teksti asetetaan readonly-tilaan, mutta sitä voidaan muokata, kun käyttäjä napsauttaa "Muokkaa"-painiketta.

## 9. setTimeout(() => { div.classList.add('show'); }, 10);

- **Mitä se on**: Tämä lisää CSS-luokan show uuteen muistiinpanoon lyhyen viiveen jälkeen, käynnistäen fade-in-efektin.
- **Tarkoitus**: Parantaa käyttäjäkokemusta näyttämällä uudet muistiinpanot sujuvasti sen sijaan, että ne näkyisivät äkillisesti.
- **Tärkeä yksityiskohta**: Viive varmistaa sujuvan siirtymän, kun uusia muistiinpanoja lisätään.

## 10. function renderNotes() { ... }

- **Mitä se on**: Tämä funktio renderöi kaikki muistiinpanot, jotka on tallennettu taulukkoon, tyhjentämällä muistiinpanolistan ja lisäämällä jokaisen muistiinpanon uudelleen DOMiin..
- **Tarkoitus**: Varmistaa, että muistiinpanotaulukko näytetään oikein sivulla päivittämällä koko lista.
- **Tärkeä yksityiskohta**: Tätä funktiota kutsutaan aina, kun muistiinpanotaulukkoa päivitetään (esim. uuden muistiinpanon lisäämisen tai poistamisen yhteydessä).

## 11. window.editNoteItem = function(button) { ... }

- **Mitä se on**: Tämä funktio mahdollistaa muistiinpanon muokkaamisen.
- **Tarkoitus**: Kun "Muokkaa"-painiketta napsautetaan, syötekenttä tulee muokattavaksi ja painike muuttuu "Tallenna"-tilaan. Muistiinpano päivitetään taulukossa tallennuksen jälkeen.
- **Tärkeä yksityiskohta**: Funktio muokkaa oikean muistiinpanon taulukon indeksissä, tallentaa päivitetyn muistiinpanon ja renderöi listan uudelleen.

## 12. window.deleteNoteItem = function(button) { ... }

- **Mitä se on**: Tämä funktio poistaa muistiinpanon listasta.
- **Tarkoitus**: Kun "Poista"-painiketta napsautetaan, vastaava muistiinpano poistetaan fade-out-efektillä ja sen jälkeen se poistetaan taulukosta.
- **Tärkeä yksityiskohta**: Funktio käynnistää ensin fade-out-animaation lisäämällä removing-luokan, ja odottaa sitten siirtymän valmistumista ennen muistiinpanon poistamista taulukosta.

## 13. noteForm.addEventListener('submit', (event) => { ... });

- **Mitä se on**: Tämä lisää tapahtumankuuntelijan lomakkeeseen, kuunnellen submit-tapahtumaa (eli kun käyttäjä lähettää lomakkeen).
- **Tarkoitus**: Tallentaa syötteen, kun lomake lähetetään, ja käsittelee sen (eli lisää muistiinpanon taulukkoon ja renderöi sen listaan).
- **Tärkeä yksityiskohta**: Lomakkeen oletustoiminto estetään (event.preventDefault()), joten sivu ei lataudu uudelleen.

## 14. event.preventDefault();

- **Mitä se on**: Estää lomakkeen oletuskäyttäytymisen, joka olisi ladata sivu uudelleen lähetyksen yhteydessä.
- **Tarkoitus**: Varmistaa, että lomakkeen käsittely tapahtuu JavaScriptin avulla ilman sivun lataamista uudelleen, mahdollistaen dynaamiset päivitykset.
- **Tärkeä yksityiskohta**: Ilman tätä riviä sivu latautuisi uudelleen ja kaikki käyttäjän syötteet katoaisivat.

## 15. const note = noteInput.value.trim();

- **Mitä se on**: Tämä hakee käyttäjän syöttämän arvon syötekentästä ja poistaa ylimääräiset välilyönnit alusta ja lopusta.
- **Tarkoitus**: Varmistaa, että muistiinpanon teksti on oikein muotoiltu ja ettei se ole tyhjä ennen käsittelyä.
- **Tärkeä yksityiskohta**: trim() poistaa tyhjät välilyönnit, jolloin syöte on siisti ja kelvollinen.

## 16. notes.push(note);

- **Mitä se on**: Tämä lisää uuden muistiinpanon muistiinpanotaulukkoon.
- **Tarkoitus**: Päivittää taulukko lisäämällä siihen juuri lisätty muistiinpano, jolloin se voidaan tallentaa ja näyttää.
- **Tärkeä yksityiskohta**: Jokainen uusi muistiinpano lisätään taulukon loppuun, ja se tallennetaan localStorage-muistiin.

## 17. noteForm.reset();

- **Mitä se on**: Tämä tyhjentää lomakkeen syötekentän muistiinpanon lähettämisen jälkeen.
- **Tarkoitus**: Nollaa lomakkeen, jotta käyttäjä voi helposti lisätä uuden muistiinpanon ilman, että hänen täytyy manuaalisesti tyhjentää kenttää.
- **Tärkeä yksityiskohta**: Parantaa käyttökokemusta tekemällä lomakkeen valmiiksi seuraavaa syötettä varten.

## 18. renderNotes();

- **Mitä se on**: Tämä renderöi kaikki muistiinpanot sivulle sen jälkeen, kun uusi muistiinpano on lisätty.
- **Tarkoitus**: Varmistaa, että näkyvä muistiinpanolista päivittyy reaaliajassa ilman, että sivua tarvitsee päivittää.
- **Tärkeä yksityiskohta**: Funktiota kutsutaan aina, kun muistiinpanotaulukkoa muutetaan, pitäen näytetyn sisällön synkronoituna tallennettujen tietojen kanssa.
