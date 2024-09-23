# Nettisivu: https://keudaope.github.io/JSProjekteja/P09_Flashcard_App

# Johdanto

<<<<<<< HEAD
Flashcard-sovellus on hyödyllinen työkalu opiskeluun ja tiedon muistamiseen digitaalisia flashcardeja käyttämällä. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla oppien luomaan, hallitsemaan ja näyttämään flashcardeja. Käyttäjät voivat lisätä uusia flashcardeja, kääntää ne paljastaakseen vastaukset ja selata useiden flashcardien välillä.

# HTML-selitys

## 1. **DOCTYPE Declaration**:

- **Mikä se on**: &lt;!DOCTYPE html> on julistus, joka kertoo selaimelle, mitä HTML-versiota dokumentti käyttää. Tässä tapauksessa HTML5.
- **Tarkoitus**: Se varmistaa, että dokumentti renderöidään nykyaikaisten HTML5-standardien mukaisesti ja välttää mahdolliset ongelmat vanhempien selaimien kanssa, jotka käyttävät "quirks mode" -tilaa.
- **Keskeinen yksityiskohta**: Sisällytä DOCTYPE-julistus aina HTML-dokumentin alkuun rakenteen ja yhteensopivuuden varmistamiseksi.

## 2. **HTML-tunniste**:

- **Mikä se on**: &lt;html lang="en">-elementti ympäröi koko HTML-dokumentin ja määrittää HTML-rakenteen juuren.
- **Tarkoitus**: Se toimii säiliönä kaikelle sivun sisällölle. lang="en"-attribuutti määrittää, että sisältö on englanniksi, mikä auttaa hakukoneita ja saavutettavuustyökaluja ymmärtämään sivun kielen.
- **Keskeinen yksityiskohta**: Sivun kielen määrittäminen on tärkeää SEOn ja ruudunlukuohjelmia käyttävien käyttäjien kannalta.

## 3. **Head-tunniste**:

- **Mikä se on**: &lt;head>-elementti sisältää verkkosivun metatietoja, kuten merkkikoodauksen, näkymäasetukset, tyylit ja skriptit.
- **Tarkoitus**: Se tarjoaa selaimelle tärkeitä tietoja ja varmistaa, että dokumentti näytetään oikein eri laitteilla ja kielillä.
  - Keskeiset yksityiskohdat:
  - **Charset: &lt;meta charset="UTF-8">** määrittää merkistön UTF-8-muotoiseksi, joka tukee lähes kaikkia eri kielten merkkejä.
  - **Viewport: &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">** varmistaa, että verkkosivu on responsiivinen ja sopii oikein eri näyttökokoihin, erityisesti mobiililaitteille.
  - **Title**: &lt;title>-tunniste määrittää verkkosivun otsikon, joka näkyy selaimen välilehdellä. Tässä tapauksessa "Flashcard App" on sopiva ja kuvaava.

## 4. **Google Fonts -linkki**:

- **Mikä se on**: &lt;link>-tunniste sisältää ulkoisen tyylitiedoston Google Fontsista, lataa "Poppins"-fontin.
- **Tarkoitus**: Se mahdollistaa modernin, verkkoturvallisen fontin käytön CSS:ssä ilman, että sitä tarvitsee asentaa paikallisesti. "Poppins"-fontti valitaan sen puhtaan ja modernin ulkonäön vuoksi.
- **Keskeinen yksityiskohta**: Ulkoiseen fonttiin linkittäminen parantaa typografiaa ja sivun visuaalista ilmettä.

## 5. **Body-tunniste**:

- **Mikä se on**: &lt;body>-elementti sisältää kaiken verkkosivun näkyvän sisällön, jonka käyttäjä näkee ja jolla hän vuorovaikuttaa.
- **Tarkoitus**: Body-elementti käärii koko sivun käyttöliittymän (UI), mukaan lukien lomakkeen flashcardien lisäämistä varten, flashcardien näytön ja navigointipainikkeet.
- **Keskeinen yksityiskohta**: Kaikki verkkosivulla näkyvä sisältö sisältyy &lt;body>-elementtiin. Loput sivusta (kuten &lt;head>-elementti) sisältävät metatietoja ja asetuksia, kun taas body on itse sisällölle.

## 6. **Pääsäiliö (Tag &lt;div class="container">)**:

- **Mikä se on**: &lt;div>-elementti luokalla "container" käärii kaiken flashcard-sovelluksen sisällön, mukaan lukien lomakkeen, flashcard-näytön ja navigointipainikkeet.
- **Tarkoitus**: Säiliö ryhmittelee liittyvän sisällön ja soveltaa ulkoasua ja asettelua. Se myös keskittää sisällön sivulla CSS Flexboxin avulla.
- **Keskeinen yksityiskohta**: Soveltamalla luokkaa container, voimme muokata säiliön ulkoasua erikseen CSS-tiedostossa hallitaksemme sen ulkonäköä ja asettelua, kuten pehmusteita, border-radiusia ja varjoja.

## 7. **Otsikko (Tag &lt;h1>Flashcard App&lt;/h1>)**:

- **Mikä se on**: &lt;h1>-elementti on ensimmäisen tason otsikko, joka edustaa sivun pääotsikkoa.
- **Tarkoitus**: Se toimii sivun pääotsikkona ja on tyylitelty erottuvaksi ja visuaalisesti houkuttelevaksi. Tässä tapauksessa se yksinkertaisesti näyttää "Flashcard App", ilmoittaen käyttäjille sovelluksen tarkoituksesta.
- **Keskeinen yksityiskohta**: &lt;h1>-tunniste on tärkeä SEOn ja saavutettavuuden kannalta, koska se osoittaa asiakirjan pääotsikon.

## 8. **Lomake-elementti (Tag &lt;form id="flashcard-form">)**:

- **Mikä se on**: &lt;form>-elementti, jolla on id "flashcard-form", ryhmittelee syöttökentät ja painikkeen uusien flashcardien lisäämistä varten.
- **Tarkoitus**: Se sallii käyttäjän syöttää kysymyksen ja vastauksen flashcardille. Kun lomake lähetetään, JavaScript käsittelee uuden flashcardin lisäämisen.
- **Keskeinen yksityiskohta**: Id "flashcard-form" mahdollistaa lomakkeen helpon viittauksen JavaScriptissä, jossa lisäystoiminnot toteutetaan.

## 9. **Syöttökentät (Tag &lt;input type="text">)**:

- **Mikä se on**: &lt;input>-elementit antavat käyttäjän syöttää arvot flashcardin kysymykselle ja vastaukselle.
  - **Syöttötyyppi** on tekstikenttä, joka hyväksyy vain tekstiarvot.
  - **Placeholder**-attribuutti antaa käyttäjälle vihjeen syötettävästä sisällöstä.
- **Tarkoitus**: Nämä kentät keräävät käyttäjän syötteen (kysymys ja vastaus), jotka JavaScript käsittelee flashcardin luomiseksi.
- **Keskeinen yksityiskohta**: Required-attribuutti varmistaa, että sekä kysymys- että vastauskentät on täytettävä ennen flashcardin lisäämistä.

## 10. **Lähetä-painike (Tag &lt;button type="submit">Add Flashcard&lt;/button>)**:

- **Mikä se on**: &lt;button>-elementti, jonka tyyppi on submit, käytetään lomakkeen lähettämiseen, joka lisää uuden flashcardin.
- **Tarkoitus**: Kun painiketta klikataan, lomake lähetetään ja JavaScript-koodi käsittelee flashcardin lisäämisen.
- **Keskeinen yksityiskohta**: Painike on tyylitelty ja merkitty oikein, jotta sen toiminto on käyttäjälle selkeä.

## 11. **Flashcard-näyttö (Tag &lt;div class="flashcard" id="flashcard">)**:

- **Mikä se on**: &lt;div>-elementti luokalla "flashcard" ja id:llä "flashcard" käytetään näyttämään parhaillaan valittu flashcard.
- **Tarkoitus**: Tämä osio päivitetään dynaamisesti JavaScriptin avulla näyttämään flashcardin kysymyksen tai vastauksen käyttäjän vuorovaikutuksen perusteella.
- **Keskeinen yksityiskohta**: Tätä div-elementtiä JavaScript manipuloi näyttämään joko flashcardin kysymyksen tai vastauksen.

## 12. **Navigointipainikkeet (Tag &lt;div class="navigation"> ja &lt;button>)**:

- **Mikä se on**: &lt;button>-elementit, joiden idt ovat "prev" ja "next", käytetään siirtymiseen flashcardien välillä.
- **Tarkoitus**: Ne mahdollistavat käyttäjän liikkumisen eteenpäin ja taaksepäin flashcard-listan läpi.
- **Keskeinen yksityiskohta**: Näitä painikkeita hallitaan JavaScriptin avulla päivittämään flashcard-näyttö navigoinnin aikana.

## 13. **JavaScript-linkki (Tag &lt;script src="app.js">&lt;/script>)**:

- **Mikä se on**: &lt;script>-elementti linkittää ulkoiseen JavaScript-tiedostoon, joka hallitsee flashcard-sovelluksen toiminnallisuutta.
- **Tarkoitus**: Se lataa skriptin, joka sallii käyttäjän lisätä uusia flashcardeja, navigoida niiden välillä ja vaihdella kysymysten ja vastausten välillä.
- **Keskeinen yksityiskohta**: JavaScript-tiedoston sisällyttäminen ulkoisesti parantaa koodin ylläpidettävyyttä ja pitää sivun rakenne ja toiminnallisuus erillään.

# CSS-selitys

## 1. Global Reset (Valitsin \*):

- **Mitä se on**: \* (universaali valitsin) vaikuttaa kaikkiin sivun elementteihin.
- **Tarkoitus**: Tämä sääntö nollaa oletusmarginaalit ja -täytteet kaikilta elementeiltä varmistaen yhtenäiset tilat eri selaimissa. Lisäksi se asettaa box-sizing: border-box;, joka helpottaa layoutin hallintaa sisällyttämällä täytteet ja reunukset elementin kokonaisleveyteen ja -korkeuteen.
- **Keskeinen yksityiskohta**: Nollaus varmistaa ennustettavan ja yhtenäisen tyylin marginaaleille ja täytteille eri selaimissa, mikä estää odottamattomat tilankäyttöongelmat.

## 2. Body Styling (body):

- **Mitä se on**: Tämä sääntö määrittelee &lt;body>-elementin tyylit, vaikuttaen koko sivun ulkoasuun ja asetteluun.
- **Tarkoitus**:
  - **Fontti: font-family: 'Poppins', sans-serif;** käyttää modernia, selkeää fonttia Google Fontsista, parantaen tekstin luettavuutta ja visuaalista ilmettä.
  - **Tausta: background: linear-gradient(135deg, #74ebd5, #acb6e5);** luo visuaalisesti houkuttelevan liukuvärjätyn taustan, joka antaa sivulle modernin ja raikkaan ilmeen.
  - **Asettelu: display: flex; justify-content: center; align-items: center;** keskittää sisällön sekä vaaka- että pystysuunnassa Flexboxin avulla.
  - **Korkeus: height: 100vh;** varmistaa, että body-elementti täyttää koko näkymäkorkeuden, mikä pitää sisällön pystysuunnassa keskitettynä.
- **Keskeinen yksityiskohta**: Flexboxia käytetään sisällön helppoon keskittämiseen, ja liukuvärjätty tausta antaa sovellukselle dynaamisen ja houkuttelevan visuaalisen tyylin.

## 3. Container Styling (.container):

- **Mitä se on**: Tämä sääntö määrittelee flashcard-sovelluksen sisällön pääkääre-elementin tyylit.
- **Tarkoitus**:
  - **Taustaväri: background-color: white;** luo puhtaan ja minimalistisen taustan flashcard-sisällölle, joka erottuu hyvin liukuvärjätyn taustan kanssa.
  - **Täyte: padding: 30px;** varmistaa, että säiliön sisällä olevalla sisällöllä on riittävästi tilaa.
  - **Reunojen pyöristys: border-radius: 12px;** lisää säiliöön pyöristetyt kulmat, jotka antavat sille pehmeän ja modernin ulkonäön.
  - **Varjo: box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);** lisää säiliöön syvyyttä luomalla hienovaraisen varjon, joka saa sen näyttämään hieman kohotetulta taustasta.
  - **Maksimileveys: max-width: 500px;** rajoittaa säiliön leveyttä, pitäen sen kompaktina ja hyvin suhteutettuna suuremmilla näytöillä.
  - **Siirtymä: transition: transform 0.3s ease;** mahdollistaa sujuvan siirtymäefektin, kun säiliöön kohdistetaan hover-efekti, mikä saa vuorovaikutukset tuntumaan dynaamisemmilta.
- **Keskeinen yksityiskohta**: Täytteen, pyöristettyjen kulmien ja pehmeän varjon yhdistelmä antaa säiliölle korttimaisen ulkonäön, joka on suosittu muotoilutrendi moderneissa verkkosovelluksissa.

## 4. Container Hover Effect (.container:hover):

- **Mitä se on**: Tämä sääntö vaikuttaa, kun käyttäjä vie hiiren säiliön päälle.
- **Tarkoitus**: transform: scale(1.03); suurentaa säiliötä hieman, luoden hienovaraisen zoomausvaikutelman hover-tilassa.
- **Keskeinen yksityiskohta**: Hover-efekti lisää vuorovaikutteisen ja houkuttelevan tunnelman, tehden säiliöstä dynaamisemman ilman, että se tuntuu ylivoimaiselta käyttäjälle.

## 5. Heading Styling (h1):

- **Mitä se on**: Tämä sääntö määrittelee pääotsikon &lt;h1>Flashcard App&lt;/h1> tyylit.
- **Tarkoitus**:
  - **Fonttikoko: font-size: 2.5em;** tekee otsikosta suuren ja huomattavan, osoittaen sen olevan sovelluksen pääotsikko.
  - **Väri: color: #333;** käyttää tummanharmaata väriä tekstissä, joka tarjoaa hyvän kontrastin valkoista taustaa vasten olematta niin kova kuin täysin musta.
  - **Marginaali: margin-bottom: 20px**; lisää tilaa otsikon alle, erottaen sen alla olevasta lomakkeesta ja parantaen asettelua.
- **Keskeinen yksityiskohta**: Otsikko on suunniteltu erottumaan selkeästi, kiinnittäen käyttäjän huomion sovelluksen otsikkoon puhtaalla ja visuaalisesti houkuttelevalla tavalla.

## 6. Form Layout (form):

- **Mitä se on**: Tämä sääntö määrittelee lomakkeen, joka sisältää syötekentät ja painikkeen flashcardien lisäämiseksi.
- **Tarkoitus**:
  - **Asettelu: display: flex; flex-direction: column;** järjestää lomakkeen elementit pystysuoraan sarakkeeseen.
  - **Väli: gap: 15px;** lisää tilaa syötekenttien ja painikkeen välille, tehden lomakkeesta visuaalisesti järjestäytyneemmän ja helpomman käyttää.
  - **Marginaali: margin-bottom: 20px;** tarjoaa tilaa lomakkeen ja flashcard-näytön välille, parantaen yleistä asettelua ja virtausta.
- **Keskeinen yksityiskohta**: Flexboxin ja elementtien välisen tilan käyttö luo puhtaan, järjestäytyneen rakenteen, tehden lomakkeesta käyttäjäystävällisen ja visuaalisesti tasapainoisen.

## 7. Input Fields Styling (input[type="text"]):

- **Mitä se on**: Tämä sääntö määrittelee syötekenttien tyylit, joihin käyttäjät syöttävät kysymyksen ja vastauksen flashcardeille.
- **Tarkoitus**:
  - **Leveys: width: 100%;** varmistaa, että syötekentät vievät koko lomakkeen leveyden, tehden niistä helpompia käyttää.
  - **Täyte: padding: 12px;** lisää tilaa syötekenttien sisälle, tehden tekstistä helpommin luettavaa ja kentistä mukavampia käyttää.
  - **Reuna: border: 1px solid #ccc;** lisää vaaleanharmaan reunuksen, joka määrittää syötekentän alueen ilman, että se olisi liian voimakas.
  - **Reunojen pyöristys: border-radius: 6px;** lisää syötekenttiin hieman pyöristetyt kulmat, jotka sopivat sovelluksen moderniin muotoiluun.
  - **Varjo: box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);** lisää syötekenttiin hienovaraisen varjon, mikä antaa niille kohotetun ulkonäön ja lisää syvyyttä.
  - **Siirtymä: transition: border-color 0.3s ease;** varmistaa sujuvan siirtymäefektin, kun syötekenttä on aktiivinen, parantaen vuorovaikutteisuutta.
- **Keskeinen yksityiskohta**: Syötekentät on suunniteltu toimiviksi ja visuaalisesti yhtenäisiksi sovelluksen puhtaan, modernin muotoilun kanssa, tehden lomakkeesta intuitiivisen ja helppokäyttöisen.

## 8. Input Focus Effect (input[type="text"]:focus):

- **Mitä se on**: Tämä sääntö soveltuu, kun käyttäjä klikkaa tai valitsee syötekentän.
- **Tarkoitus**: border-color: #28a745; vaihtaa reunuksen värin vihreäksi, kun syötekenttä on valittu, tarjoten visuaalista palautetta käyttäjälle, että kenttä on aktiivinen.
- **Keskeinen yksityiskohta**: Tämä fokus-efekti parantaa käyttäjäkokemusta tekemällä selväksi, mikä syötekenttä on valittuna, mikä parantaa käytettävyyttä.

## 9. Button Styling (button):

- **Mitä se on**: Tämä sääntö määrittelee "Add Flashcard" -painikkeen tyylit.
- **Tarkoitus**:
  - **Täyte: padding: 12px;** varmistaa, että painike on riittävän suuri ollakseen helposti klikattavissa.
  - **Taustaväri: background-color: #28a745;** asettaa eläväisen vihreän taustan, joka viestii positiivisesta toiminnosta (flashcardin lisääminen).
  - **Väri: color: white;** varmistaa, että teksti erottuu selkeästi vihreää taustaa vasten.
  - **Reuna: border: none;** poistaa oletusarvoisen reunuksen, luoden puhtaan ja modernin ilmeen.
  - **Reunojen pyöristys: border-radius: 6px**; lisää hieman pyöristetyt kulmat, jotka sopivat sovelluksen yleiseen muotoiluun.
  - **Kursori: cursor: pointer;** vaihtaa hiiren osoittimen osoittamaan, että painike on klikattavissa.
  - **Siirtymä: transition: background-color 0.3s ease, transform 0.2s ease;** varmistaa sujuvat siirtymät, kun painiketta viedään hiiren päälle, parantaen vuorovaikutteisuutta.
- **Keskeinen yksityiskohta**: Painike on suunniteltu erottumaan visuaalisesti ja olemaan vuorovaikutteinen, hover-efekteillä, jotka tekevät siitä reagoivan käyttäjän toimintaan.

## 10. Button Hover Effect (button:hover):

- **Mitä se on**: Tämä sääntö soveltuu, kun käyttäjä vie hiiren painikkeen päälle.
- **Tarkoitus**:
  - **background-color: #218838;** vaihtaa taustavärin tummemman vihreäksi hover-tilassa, tarjoten visuaalista palautetta.
  - **transform: translateY(-2px);** liikuttaa painiketta hieman ylöspäin, luoden kohotusvaikutelman.
- **Keskeinen yksityiskohta**: Hover-efekti parantaa käyttäjäkokemusta tekemällä painikkeesta vuorovaikutteisemman ja houkuttelevamman.

## 11. Flashcard Display Styling (.flashcard):

- **Mitä se on**: Tämä sääntö määrittelee div-elementin tyylin, jossa flashcardin kysymys tai vastaus esitetään.
- **Tarkoitus**:
  - **Taustaväri: background-color: #f8f9fa;** antaa flashcardille vaaleanharmaan taustan, joka tekee tekstistä erottuvan ja tarjoaa pehmeän, neutraalin värin.
  - **Täyte: padding: 30px;** varmistaa, että flashcardin sisältöön jää riittävästi tilaa, mikä helpottaa lukemista.
  - **Reunojen pyöristys: border-radius: 10px;** lisää pyöristetyt kulmat, jotka sopivat sovelluksen moderniin ulkonäköön.
  - **Fonttikoko: font-size: 1.5em;** tekee flashcardin tekstistä suurikokoisen ja helposti luettavan.
  - **Väri: color: #333;** käyttää tummanharmaata tekstiä, joka tarjoaa vahvan kontrastin.
  - **Varjo: box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);** lisää pehmeän varjon, joka antaa flashcardille hieman kohotetun ulkonäön.
  - **Kursori: cursor: pointer;** ilmaisee, että flashcard on klikattavissa, rohkaisten vuorovaikutukseen.
  - **Siirtymä: transition: transform 0.3s ease;** sallii sujuvan zoomaus-efektin, kun käyttäjä vie hiiren flashcardin päälle.
- **Keskeinen yksityiskohta**: Flashcard on suunniteltu sekä toimivaksi että visuaalisesti houkuttelevaksi, tarjoten riittävästi tilaa ja kontrastia, jotta se on helppo lukea ja käyttää.

## 12. Flashcard Hover Effect (.flashcard:hover):

    - **Mitä se on**: Tämä sääntö soveltuu, kun käyttäjä vie hiiren flashcardin päälle.
    - **Tarkoitus**: transform: scale(1.05); suurentaa hieman flashcardia hover-tilassa, luoden zoomaus-efektin, joka tekee siitä dynaamisemman.
    - **Keskeinen yksityiskohta**: Hover-efekti lisää sovelluksen vuorovaikutteisuutta ja rohkaisee käyttäjää klikkaamaan flashcardia nähdäkseen vastauksen.

## 13. Navigation Buttons Container (.navigation):

    - **Mitä se on**: Tämä sääntö määrittelee säiliön tyylin, joka sisältää "Previous" ja "Next" navigointipainikkeet.
    - **Tarkoitus**: display: flex; justify-content: space-between; varmistaa, että painikkeet sijoitetaan säiliön vastakkaisiin päihin, luoden tasapainoisen asettelun flashcardien selaamiseen.
    - **Keskeinen yksityiskohta**: Flexbox-asettelu tekee painikkeista helposti saavutettavia ja hyvin sijoitettuja, mikä helpottaa navigointia.

## 14. Navigation Buttons Styling (.navigation button):

- **Mitä se on**: Tämä sääntö määrittelee painikkeiden tyylit, joita käytetään flashcardien välillä navigoimiseen.
- **Tarkoitus**:
  - **Taustaväri: background-color: #007bff;** asettaa kirkkaan sinisen värin, tehden painikkeista erottuvia.
  - **Väri: color: white;** varmistaa, että teksti on luettavaa sinistä taustaa vasten.
  - **Täyte: padding: 10px 20px;** tekee painikkeista tarpeeksi suuret helppoa vuorovaikutusta varten.
  - **Reuna: border: none;** poistaa oletusarvoisen reunuksen, luoden puhtaan ja modernin ulkonäön.
  - **Reunojen pyöristys: border-radius: 6px;** lisää pyöristetyt kulmat, jotka sopivat sovelluksen yleiseen muotoiluun.
  - **Kursori: cursor: pointer;** ilmaisee, että painikkeet ovat klikattavissa.
  - **Siirtymä: transition: background-color 0.3s ease;** lisää sujuvan siirtymän hover-efekteille.
- **Keskeinen yksityiskohta**: Painikkeet on suunniteltu olemaan visuaalisesti erottuvia ja helppokäyttöisiä, tarjoten selkeän osoituksen niiden toiminnallisuudesta.

## 15. Navigation Buttons Hover Effect (.navigation button:hover):

- **Mitä se on**: Tämä sääntö soveltuu, kun käyttäjä vie hiiren navigointipainikkeiden päälle.
- **Tarkoitus**: background-color: #0056b3; vaihtaa taustavärin tummemmaksi siniseksi hover-tilassa, tarjoten visuaalista palautetta käyttäjälle.
- **Keskeinen yksityiskohta**: Hover-efekti parantaa käyttäjän vuorovaikutusta tekemällä painikkeista reagoivampia ja interaktiivisempia.

# JavaScript-selitys

## 1. **DOMContentLoaded Event**:

- **Mitä se on**: document.addEventListener('DOMContentLoaded', ...) on tapahtumankuuntelija, joka laukeaa, kun koko HTML-dokumentti on ladattu ja jäsennelty.
- **Tarkoitus**: Se varmistaa, että kaikki HTML-elementit, kuten lomake, syötekentät, painikkeet ja flashcard-näyttö, ovat täysin ladattuja ja valmiita muokattaviksi ennen JavaScript-koodin suoritusta.
- **Keskeinen yksityiskohta**: Tämä tapahtuma on tärkeä, koska se estää virheitä, jotka johtuvat siitä, että yritetään käyttää DOM-elementtejä ennen niiden latautumista.

## 2. **Selecting DOM Elements**:

- **Mitä se on**: Useita muuttujia käytetään tallentamaan viitteitä tärkeisiin HTML-elementteihin, joita muokataan:
  - **const flashcardForm = document.getElementById('flashcard-form');** valitsee lomakkeen, johon käyttäjät syöttävät kysymyksiä ja vastauksia.
  - **const questionInput = document.getElementById('question');** valitsee syötekentän, johon käyttäjät kirjoittavat flashcardin kysymyksen.
  - **const answerInput = document.getElementById('answer');** valitsee syötekentän flashcardin vastausta varten.
  - **const flashcard = document.getElementById('flashcard');** valitsee div-elementin, jossa flashcard esitetään.
  - **const prevButton = document.getElementById('prev');** ja **const nextButton = document.getElementById('next');** valitsevat edellisen ja seuraavan navigointipainikkeen.
- **Tarkoitus**: Nämä muuttujat sallivat skriptin vuorovaikutuksen vastaavien elementtien kanssa, kuten syötearvojen hakemisen, nykyisen flashcardin näyttämisen tai navigointipainikkeiden käsittelyn.
- **Keskeinen yksityiskohta**: Elementtien valinta niiden id:n perusteella varmistaa nopean ja helpon pääsyn niiden muokkaamiseen JavaScriptissä.

## 3. **Initializing Flashcards and Indexes**:

- **Mitä se on**: Kaksi keskeistä muuttujaa alustetaan:
  - **let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];** lataa flashcardit selaimen paikallisesta tallennustilasta tai alustaa tyhjän taulukon, jos flashcardeja ei ole.
  - **let currentIndex = 0;** pitää kirjaa siitä, mikä flashcard on tällä hetkellä esillä.
  - **let showAnswer = false;** hallitsee, näytetäänkö flashcardin kysymys vai vastaus, kun korttia klikataan.
- **Tarkoitus**:
  - **Flashcardien tallentaminen** taulukkoon mahdollistaa niiden helpon käsittelyn, kun lisätään uusia kortteja tai siirrytään korttien välillä.
  - **localStoragea käytetään** flashcardien säilyttämiseen selaimen istuntojen välillä, jotta ne tallennetaan, vaikka käyttäjä sulkisi selaimen.
  - **currentIndex määrittää**, mikä flashcard on näytöllä, ja showAnswer hallitsee kysymyksen tai vastauksen näyttämistä.
- **Keskeinen yksityiskohta**: localStoragen käyttö varmistaa, että flashcardit tallennetaan pysyvästi, kun taas currentIndex ja showAnswer hallitsevat näytettävän sisällön dynaamista päivitystä.

## 4. **Adding New Flashcards (Form Submission Event Listener)**:

- **Mitä se on**: flashcardForm.addEventListener('submit', ...) kuuntelee, kun käyttäjä lähettää lomakkeen uuden flashcardin lisäämiseksi.
- **Tarkoitus**: Kun lomake lähetetään, tapahtuma:
  - **Estää oletuskäyttäytymisen:** event.preventDefault(); estää lomakkeen lähettämisen, joka virkistäisi sivun.
  - **Hakee syötearvot: const question = questionInput.value.trim();** ja **const answer = answerInput.value.trim();** tallentavat käyttäjän syöttämät kysymys- ja vastausarvot.
  - **Tarkistaa syötteiden oikeellisuuden**: Jos sekä kysymys että vastaus on annettu (eivät tyhjiä), uusi flashcard lisätään taulukkoon: flashcards.push({ question, answer });.
  - **Päivittää localStorage:n:** Päivitetty flashcard-taulukko tallennetaan localStorage:en: localStorage.setItem('flashcards', JSON.stringify(flashcards));.
  - **Tyhjentää syötekentät:** Lähetyksen jälkeen syötekentät tyhjennetään.
  - **Näyttää uuden flashcardin:** currentIndex = flashcards.length - 1; asettaa nykyiseksi kortiksi juuri lisätyn flashcardin ja kutsuu displayFlashcard();-toimintoa sen näyttämiseksi.
- **Keskeinen yksityiskohta**: Tapahtumankuuntelija varmistaa, että lomakkeen lähetys käsitellään dynaamisesti JavaScriptin avulla, estäen sivun uudelleenlatauksen ja mahdollistaen flashcardien reaaliaikaisen päivittämisen.

## 5. **Toggling Between Question and Answer (Click Event Listener on Flashcard)**:

- **Mitä se on**: flashcard.addEventListener('click', ...) kuuntelee, kun flashcardia klikataan.
- **Tarkoitus**: Kun flashcardia klikataan, showAnswer-muuttuja vaihtaa tilaa todeksi tai epätodeksi, vaihtamalla kysymyksen ja vastauksen välillä: showAnswer = !showAnswer;.
- **Keskeinen yksityiskohta**: displayFlashcard()-toimintoa kutsutaan klikkaustapahtuman jälkeen päivittämään näytettävä sisältö sen mukaan, onko showAnswer tosi (vastaus) vai epätosi (kysymys).

## 6. **Navigating to Previous Flashcard (Click Event Listener on Previous Button)**:

- **Mitä se on**: prevButton.addEventListener('click', ...) kuuntelee, kun käyttäjä klikkaa "Edellinen"-painiketta.
- **Tarkoitus**: Kun painiketta klikataan, skripti tarkistaa, onko currentIndex suurempi kuin 0 varmistaakseen, että käyttäjä ei ole jo ensimmäisellä flashcardilla:
  - **Jos totta**, currentIndex-- vähentää indeksiä yhdellä, siirtyen edelliseen flashcardiin.
  - **showAnswer = false;** varmistaa, että kysymys näytetään oletuksena navigoinnin jälkeen, ei vastaus.
  - **Lopuksi displayFlashcard()**; päivittää flashcard-näytön.
- **Keskeinen yksityiskohta**: Tämä tapahtumankuuntelija mahdollistaa käyttäjien helpon navigoinnin taaksepäin flashcardeissa.

## 7. **Navigating to Next Flashcard (Click Event Listener on Next Button)**:

- **Mitä se on**: nextButton.addEventListener('click', ...) kuuntelee, kun käyttäjä klikkaa "Seuraava"-painiketta.
- **Tarkoitus**: Kun painiketta klikataan, skripti tarkistaa, onko currentIndex pienempi kuin flashcardien pituus - 1 varmistaakseen, että käyttäjä ei ole viimeisellä flashcardilla:
  - **Jos totta**, currentIndex++ kasvattaa indeksiä yhdellä, siirtyen seuraavaan flashcardiin.
  - **showAnswer = false;** varmistaa, että kysymys näytetään oletuksena navigoinnin jälkeen.
  - **Lopuksi displayFlashcard();** päivittää flashcard-näytön.
- **Keskeinen yksityiskohta**: Tämä tapahtumankuuntelija mahdollistaa käyttäjien helpon navigoinnin eteenpäin flashcardeissa.

## 8. **Displaying the Current Flashcard (displayFlashcard() Function)**:

- **Mitä se on**: function displayFlashcard() vastaa nykyisen flashcardin näyttämisestä currentIndexin ja showAnswerin perusteella.
- **Tarkoitus**: Tämä toiminto:
  - **Hakee nykyisen flashcardin currentIndexin perusteella**: const currentFlashcard = flashcards[currentIndex];.
  - **Päivittää flashcard-näytön** näyttämään joko kysymyksen tai vastauksen riippuen showAnswer-arvosta.
  - **Jos taulukossa ei ole flashcardeja** (esim. kun sovellus avataan ensimmäistä kertaa tai kaikki flashcardit poistetaan), se näyttää oletusviestin: flashcard.textContent = 'No flashcards available. Add a new flashcard.'.
- **Keskeinen yksityiskohta**: Tämä toiminto päivittää dynaamisesti flashcard-näyttöalueen sisällön aina, kun uusi flashcard lisätään tai käyttäjä navigoi flashcardien välillä.

## 9. **Loading and Displaying Flashcards on Page Load**:

- **Mitä se on**: displayFlashcard(); kutsutaan, kun sivu ladataan aluksi näyttämään ensimmäinen flashcard (tai oletusviesti, jos flashcardeja ei ole).
- **Tarkoitus**: Tämä varmistaa, että kun käyttäjä avaa sovelluksen, viimeisin flashcard (tai viesti, joka kertoo, ettei kortteja ole saatavilla) näytetään heti.
- **Keskeinen yksityiskohta**: Tämä viimeinen kutsu displayFlashcard();-toimintoon varmistaa, että sovellus on toiminnassa ja visuaalisesti valmis käyttäjän vuorovaikutusta varten heti sivun latauduttua.
=======
Flashcard-sovellus on hyödyllinen työkalu opiskeluun ja tiedon muistamiseen digitaalisia kortteja käyttäen. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla, kun he oppivat luomaan, hallitsemaan ja näyttämään kortteja. Käyttäjät voivat lisätä uusia kortteja, kääntää niitä paljastaakseen vastaukset ja siirtyä useiden korttien välillä.

# HTML selitys

## 1. DOCTYPE Declaration:

- **Mikä se on**: **&lt;!DOCTYPE html>** on deklarointi, joka kertoo selaimelle, mitä HTML-versiota dokumentti käyttää. Tässä tapauksessa HTML5.
- **Tarkoitus**: Se varmistaa, että dokumentti renderöidään nykyaikaisten HTML5-standardien mukaisesti ja estää mahdolliset ongelmat vanhemmissa selaimissa, jotka käyttävät "quirks mode" -tilaa.
- **Tärkeä yksityiskohta**: Sisällytä aina DOCTYPE-deklarointi HTML-dokumentin alkuun, jotta säilytetään oikea rakenne ja yhteensopivuus.

## 2. HTML Tag:

- **Mikä se on**: **&lt;html lang="en">**-elementti ympäröi koko HTML-dokumentin ja määrittää HTML-rakenteen juuren.
- **Tarkoitus**: Se toimii säiliönä kaikelle sivun sisällölle. **lang="en"**-attribuutti määrittää, että sisältö on englanninkielistä, mikä auttaa hakukoneita ja saavutettavuustyökaluja ymmärtämään sivun kielen.
- **Tärkeä yksityiskohta**: Dokumentin kielen määrittäminen on tärkeää hakukoneoptimoinnin ja käyttäjien kannalta, jotka luottavat ruudunlukijoihin.

## 3. Head Tag:

- **Mikä se on**: **<head>**-elementti sisältää metatietoja verkkosivusta, kuten merkistöstä, näkymäasetuksista, tyyleistä ja skripteistä.
- **Tarkoitus**: Se tarjoaa tärkeää tietoa selaimelle ja varmistaa, että dokumentti näytetään oikein eri laitteilla ja kielillä.
- **Tärkeät yksityiskohdat**:
  - **&lt;meta charset="UTF-8">** määrittää merkistön UTF-8:ksi, joka tukee lähes kaikkia eri kielten merkkejä.
  - **&lt;meta name="viewport" content="width=device-width, initial-scale=1.0">** varmistaa, että verkkosivu on responsiivinen ja sopii oikein eri näyttökoille, erityisesti mobiililaitteille.
  - **&lt;title>**-tagi määrittää verkkosivun otsikon, joka näkyy selaimen välilehdessä. Tässä tapauksessa "Flashcard App" on sopiva ja kuvaava.

## 4. Google Fonts Link:

- **Mikä se on**: **&lt;link>**-tagi sisältää ulkoisen tyylitiedoston Google Fontseista, joka lataa "Poppins"-fontin.
- **Tarkoitus**: Se mahdollistaa nykyaikaisen, verkkoturvallisen fontin käytön CSS:ssä ilman, että sitä tarvitsee asentaa paikallisesti. "Poppins"-fontti on valittu sen siistin ja modernin ulkoasun vuoksi.
- **Tärkeä yksityiskohta**: Linkittäminen ulkoiseen fonttiin parantaa typografiaa ja sivun visuaalista estetiikkaa.

## 5. Body Tag:

- **Mikä se on**: **&lt;body>**-elementti sisältää kaiken näkyvän sisällön verkkosivulla, jonka kanssa käyttäjä on vuorovaikutuksessa.
- **Tarkoitus**: Body-elementti ympäröi koko sivun käyttöliittymän (UI), mukaan lukien lomakkeen korttien lisäämistä varten, korttien esityksen ja navigointipainikkeet.
- **Tärkeä yksityiskohta**: Kaikki verkkosivulla näkyvä sisältö on **&lt;body>**-elementin sisällä. Loput sivusta (kuten **<head>**-elementti) sisältävät metatietoja ja asetuksia, kun taas body on varattu itse sisällölle.

## 6. Main Container (Tag &lt;div class="container">):

- **Mikä se on**: **&lt;div>**-elementti, jossa on luokka "container", ympäröi kaikki flashcard-sovelluksen sisällön, mukaan lukien lomake, korttinäyttö ja navigointipainikkeet.
- **Tarkoitus**: Säiliö ryhmittelee yhteen liittyvän sisällön ja soveltaa layoutia ja tyyliä. Se myös keskittää sisällön sivulla käyttämällä CSS Flexboxia.
- **Tärkeä yksityiskohta**: Soveltamalla container-luokkaa voimme tyylitellä säiliön erikseen CSS-tiedostossa hallitaksemme sen ulkoasua ja asettelua, kuten pehmustusta, pyöristettyjä kulmia ja varjoja.

## 7. Heading (Tag &lt;h1>Flashcard App&lt;/h1>):

- **Mikä se on**: **&lt;h1>**-elementti on ensimmäisen tason otsikko, joka edustaa sivun pääotsikkoa.
- **Tarkoitus**: Se toimii sivun pääotsikkona ja on tyylitelty näyttämään näkyvältä ja visuaalisesti houkuttelevalta. Tässä tapauksessa se yksinkertaisesti esittää "Flashcard App", jotta käyttäjät tietävät sovelluksen tarkoituksen.
- **Tärkeä yksityiskohta**: **&lt;h1>**-tagi on tärkeä hakukoneoptimoinnin ja saavutettavuuden kannalta, sillä se osoittaa dokumentin pääotsikon.

## 8. Form Element (Tag &lt;form id="flashcard-form">):

- **Mikä se on**: **&lt;form>**-elementti, jossa on id "flashcard-form", ryhmittelee syötekentät ja lähetyspainikkeen uusien korttien lisäämistä varten.
- **Tarkoitus**: Se sallii käyttäjän syöttää kysymyksen ja vastauksen kortille. Kun lomake lähetetään, JavaScript käsittelee uuden kortin lisäämisen.
- **Tärkeä yksityiskohta**: id **flashcard-form** mahdollistaa lomakkeen helpon viittaamisen JavaScriptissä, jossa korttien lisäämiseen liittyvä toiminnallisuus toteutetaan.

## 9. Input Fields (Tag &lt;input type="text">):

- **Mikä se on**: **&lt;input>**-elementit sallivat käyttäjän syöttää arvot kortin kysymykselle ja vastaukselle.
  - Syötekentän tyyppi on teksti, joka hyväksyy vain tekstiarvot.
  - **Placeholder**-attribuutti antaa vihjeen käyttäjälle siitä, mitä syöttää.
- **Tarkoitus**: Nämä kentät tallentavat käyttäjän syötteen (kysymys ja vastaus), jotka käsitellään JavaScriptissä kortin luomista varten.
- **Tärkeä yksityiskohta**: **Required**-attribuutti varmistaa, että sekä kysymys- että vastauskentät on täytettävä ennen kuin käyttäjä voi lisätä kortin.

## 10. Submit Button (Tag &lt;button type="submit">Add Flashcard&lt;/button>):

- **Mikä se on**: **&lt;button>**-elementti, jossa on tyyppi submit, käytetään lomakkeen lähettämiseen, mikä lisää uuden kortin.
- **Tarkoitus**: Kun painiketta klikataan, se lähettää lomakkeen ja käynnistää JavaScript-funktion, joka käsittelee kortin lisäämisen.
- **Tärkeä yksityiskohta**: Painike on tyylitelty ja nimetty asianmukaisesti, jotta sen toiminto olisi käyttäjälle selkeä.

## 11. Flashcard Display (Tag &lt;div class="flashcard" id="flashcard">):

- **Mikä se on**: **&lt;div>**-elementti, jossa on luokka "flashcard" ja id "flashcard", käytetään esittämään valittu kortti.
- **Tarkoitus**: Tätä osaa päivitetään dynaamisesti JavaScriptin avulla näyttämään joko kortin kysymys tai vastaus riippuen käyttäjän toiminnasta.
- **Tärkeä yksityiskohta**: Tätä diviä käsitellään JavaScriptin avulla vaihtamaan kysymyksen ja vastauksen välillä nykyisellä kortilla.

## 12. Navigation Buttons (Tag &lt;div class="navigation"> ja <button>):

- **Mikä se on**: **&lt;button>**-elementit, joissa on id:t **prev** ja **next**, käytetään siirtymään korttien välillä.
- **Tarkoitus**: Ne sallivat käyttäjän siirtyä eteenpäin ja taaksepäin korttiluettelossa.
- **Tärkeä yksityiskohta**: Nämä painikkeet hallitaan JavaScriptin avulla päivittämään korttinäyttö navigoinnin aikana.

## 13. JavaScript Link (Tag <script src="app.js">):

- **Mikä se on**: **&lt;script>**-elementti linkittää ulkoiseen JavaScript-tiedostoon, joka hallitsee flashcard-sovelluksen toiminnallisuutta.
- **Tarkoitus**: Se lataa skriptin, joka sallii käyttäjän lisätä uusia kortteja, navigoida niiden välillä ja vaihtaa kysymysten ja vastausten välillä.
- **Tärkeä yksityiskohta**: JavaScript-tiedoston sisällyttäminen ulkoisesti parantaa koodin ylläpidettävyyttä ja pitää sivun rakenteen ja toiminnallisuuden erillään.

# CSS selitys

# CSS Selitys

## 1. Global Reset (Valitsin \*):

- **Mikä se on**: \* (universaalivalitsin) kohdistuu kaikkiin sivun elementteihin.
- **Tarkoitus**: Tämä sääntö nollaa oletusmarginaalit ja -pehmusteet kaikilta elementeiltä varmistaakseen yhdenmukaiset välit eri selaimissa. Se asettaa myös **box-sizing: border-box;**, mikä helpottaa asettelujen hallintaa sisällyttämällä pehmusteet ja reunat elementin kokonaisleveyteen ja -korkeuteen.
- **Tärkeä yksityiskohta**: Nollaus varmistaa ennustettavan ja yhtenäisen tyylityksen marginaaleille ja pehmusteille eri selaimissa, estäen ei-toivotut väliongelmat.

## 2. Body Styling (body):

- **Mikä se on**: Tämä sääntö tyylittää &lt;body>-elementin, vaikuttaen koko sivun asetteluun ja ulkonäköön.
- **Tarkoitus**:
  - **Fontti**: **font-family: 'Poppins', sans-serif;** käyttää modernia ja selkeää fonttia Google Fontsista, parantaen tekstin luettavuutta ja visuaalista ilmettä.
  - **Taustaväri**: **background: linear-gradient(135deg, #74ebd5, #acb6e5);** luo visuaalisesti miellyttävän liukuvärin taustalle, joka antaa sivulle modernin ja raikkaan ilmeen.
  - **Asettelu**: **display: flex; justify-content: center; align-items: center;** keskittää sisällön sekä vaaka- että pystysuunnassa Flexboxin avulla.
  - **Korkeus**: **height: 100vh;** varmistaa, että body vie koko selainikkunan korkeuden, pitäen sisällön keskitettynä pystysuunnassa.
- **Tärkeä yksityiskohta**: Flexboxia käytetään sisällön helppoon keskittämiseen, ja liukuväritausta antaa sovellukselle dynaamisen ja houkuttelevan visuaalisen ilmeen.

## 3. Container Styling (.container):

- **Mikä se on**: Tämä sääntö tyylittää pääkehyskontin flashcard-sovelluksen sisällölle.
- **Tarkoitus**:
  - **Taustaväri**: **background-color: white;** luo puhtaan ja minimalistisen kontin flashcard-sisällölle, joka erottuu hyvin liukuväritaustasta.
  - **Pehmusteet**: **padding: 30px;** varmistaa, että sisällön ympärillä on riittävästi tilaa kontin sisällä.
  - **Reunojen pyöristys**: **border-radius: 12px;** lisää pyöristetyt reunat kontille, antaen sille modernin ja pehmeän ilmeen.
  - **Varjostus**: **box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);** lisää syvyyttä kontin ulkonäköön luomalla hienovaraisen varjon, joka saa kontin näyttämään hieman kohotetulta taustasta.
  - **Maksimileveys**: **max-width: 500px;** rajoittaa kontin leveyttä, pitäen sen kompaktina ja tasapainoisena isommilla näytöillä.
  - **Siirtymä**: **transition: transform 0.3s ease;** mahdollistaa pehmeän siirtymäefektin, kun konttia leijutetaan, mikä tekee vuorovaikutuksista dynaamisemmat.
- **Tärkeä yksityiskohta**: Pehmusteiden, pyöristettyjen reunojen ja pehmeän varjon yhdistelmä antaa kontin korttimaisen ulkonäön, joka on suosittu suunnittelutrendi nykyaikaisissa web-sovelluksissa.

## 4. Container Hover Effect (.container:hover):

- **Mikä se on**: Tämä sääntö pätee, kun käyttäjä leijuttaa hiirtä kontin päällä.
- **Tarkoitus**: **transform: scale(1.03);** suurentaa hieman konttia, luoden hienovaraisen zoomaustehon, kun sitä leijutetaan.
- **Tärkeä yksityiskohta**: Hover-efekti lisää vuorovaikutteisuutta ja tekee kontista dynaamisemman ilman, että se on liian hallitseva käyttäjälle.

## 5. Heading Styling (h1):

- **Mikä se on**: Tämä sääntö tyylittää pääotsikon &lt;h1>Flashcard App<&lt;/h1>.
- **Tarkoitus**:
  - **Fonttikoko**: **font-size: 2.5em;** tekee otsikosta suuren ja näkyvän, osoittaen, että se on sovelluksen pääotsikko.
  - **Väri**: **color: #333;** käyttää tummanharmaata väriä tekstille, mikä antaa hyvän kontrastin valkoista taustaa vasten olematta liian kova, kuten musta.
  - **Marginaali**: **margin-bottom: 20px;** lisää tilaa otsikon alle, erottaen sen lomakkeesta ja parantaen asettelua.
- **Tärkeä yksityiskohta**: Otsikko on suunniteltu erottumaan selkeästi, kiinnittäen käyttäjän huomion sovelluksen otsikkoon puhtaalla ja visuaalisesti miellyttävällä tavalla.

## 6. Form Layout (form):

- **Mikä se on**: Tämä sääntö määrittää lomakkeen tyylit, johon sisältyvät syötekentät ja painike flashcardien lisäämistä varten.
- **Tarkoitus**:
  - **Asettelu**: **display: flex; flex-direction: column;** järjestää lomakkeen elementit pystysuuntaiseen sarakkeeseen.
  - **Väli**: **gap: 15px;** lisää tilaa syötekenttien ja painikkeen välille, tehden lomakkeesta visuaalisesti järjestetyn ja helppokäyttöisen.
  - **Marginaali**: **margin-bottom: 20px;** tarjoaa tilaa lomakkeen ja flashcard-näytön välillä, parantaen kokonaisasettelua ja virtausta.
- **Tärkeä yksityiskohta**: Flexboxin käyttö ja elementtien välinen tila luo puhtaan, järjestetyn rakenteen, mikä tekee lomakkeesta käyttäjäystävällisen ja visuaalisesti tasapainoisen.

## 7. Input Fields Styling (input[type="text"]):

- **Mikä se on**: Tämä sääntö tyylittää syötekentät, joihin käyttäjät syöttävät flashcard-kysymyksiä ja -vastauksia.
- **Tarkoitus**:
  - **Leveys**: **width: 100%;** varmistaa, että syötekentät vievät koko lomakkeen leveyden, mikä tekee niistä helpommin käytettäviä.
  - **Pehmusteet**: **padding: 12px;** lisää tilaa syötekenttien sisälle, tehden tekstistä helpommin luettavaa ja kentistä mukavampia käyttää.
  - **Reuna**: **border: 1px solid #ccc;** lisää vaaleanharmaan reunan, joka määrittää syöttöalueen ilman, että se on liian hallitseva.
  - **Reunojen pyöristys**: **border-radius: 6px;** lisää kevyesti pyöristetyt reunat syötekentille, jotka sopivat sovelluksen moderniin suunnitteluun.
  - **Varjo**: **box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);** antaa syötekentille hienovaraisen varjon kohotetun ulkonäön aikaansaamiseksi.
  - **Siirtymä**: **transition: border-color 0.3s ease;** varmistaa sujuvan siirtymäefektin, kun syötekenttä on valittuna, parantaen vuorovaikutteisuutta.
- **Tärkeä yksityiskohta**: Syötekentät on suunniteltu toimiviksi ja visuaalisesti yhtenäisiksi sovelluksen puhtaan ja modernin suunnittelun kanssa, tehden lomakkeesta intuitiivisen ja helppokäyttöisen.

## 8. Input Focus Effect (input[type="text"]:focus):

- **Mikä se on**: Tämä sääntö pätee, kun käyttäjä keskittyy syötekenttään napsauttamalla tai napauttamalla sitä.
- **Tarkoitus**: **border-color: #28a745;** vaihtaa reunan värin vihreäksi, kun syötekenttä on valittuna, tarjoten visuaalisen palautteen käyttäjälle siitä, että kenttä on aktiivinen.
- **Tärkeä yksityiskohta**: Fokusefekti parantaa käyttökokemusta tekemällä selväksi, mikä syötekenttä on tällä hetkellä valittuna, parantaen käytettävyyttä.

## 9. Button Styling (button):

- **Mikä se on**: Tämä sääntö tyylittää "Add Flashcard" -painikkeen.
- **Tarkoitus**:
  - **Pehmuste**: **padding: 12px;** varmistaa, että painike on riittävän suuri ollakseen helposti klikattavissa.
  - **Taustaväri**: **background-color: #28a745;** asettaa elinvoimaisen vihreän taustavärin, joka viestii positiivisesta toiminnasta (lisääminen).
  - **Väri**: **color: white;** tekee painikkeen tekstistä selvästi erottuvan vihreää taustaa vasten.
  - **Reuna**: **border: none;** poistaa oletusreunan, luoden puhtaan ja modernin ilmeen.
  - **Reunojen pyöristys**: **border-radius: 6px;** lisää kevyesti pyöristetyt reunat, jotka sopivat sovelluksen yleiseen suunnitteluun.
  - **Kursorin muuttaminen**: **cursor: pointer;** vaihtaa hiiren osoittimen osoittimeen, kun painiketta leijutetaan, osoittaen, että se on klikattavissa.
  - **Siirtymä**: **transition: background-color 0.3s ease, transform 0.2s ease;** varmistaa pehmeät siirtymät, kun painiketta leijutetaan, parantaen vuorovaikutteisuutta.
- **Tärkeä yksityiskohta**: Painike on tyylitelty erottuvaksi ja vuorovaikutteiseksi, ja hover-efektit tekevät siitä käyttäjän toimintaan reagoivan ja helposti huomattavan.

## 10. Button Hover Effect (button:hover):

- **Mikä se on**: Tämä sääntö pätee, kun käyttäjä leijuttaa hiirtä painikkeen päällä.
- **Tarkoitus**:
  - **Taustaväri**: **background-color: #218838;** tummentaa painikkeen taustaa, antaen visuaalista palautetta leijutettaessa.
  - **Liike**: **transform: translateY(-2px);** siirtää painiketta hieman ylöspäin, luoden "nostoefektin".
- **Tärkeä yksityiskohta**: Hover-efekti parantaa käyttökokemusta tekemällä painikkeesta vuorovaikutteisemman ja kiinnostavamman.

## 11. Flashcard Display Styling (.flashcard):

- **Mikä se on**: Tämä sääntö tyylittää &lt;div>-elementin, jossa näytetään flashcardin kysymys tai vastaus.
- **Tarkoitus**:
  - **Taustaväri**: **background-color: #f8f9fa;** antaa flashcardille vaaleanharmaan taustavärin, joka tekee tekstistä selkeästi erottuvan ja tarjoaa pehmeän, neutraalin värin.
  - **Pehmuste**: **padding: 30px;** varmistaa, että flashcardin sisältö saa riittävästi tilaa, tehden siitä helpommin luettavan.
  - **Reunojen pyöristys**: **border-radius: 10px;** lisää pyöristetyt reunat, jotka sopivat sovelluksen moderniin ilmeeseen.
  - **Fonttikoko**: **font-size: 1.5em;** tekee flashcardin tekstistä suuren ja helposti luettavan.
  - **Väri**: **color: #333;** käyttää tummanharmaata väriä tekstille, joka tarjoaa vahvan kontrastin.
  - **Varjostus**: **box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);** lisää pehmeän varjon, antaen flashcardille hieman kohotetun ulkonäön.
  - **Kursori**: **cursor: pointer;** osoittaa, että flashcard on klikattavissa, rohkaisten vuorovaikutukseen.
  - **Siirtymä**: **transition: transform 0.3s ease;** mahdollistaa pehmeän zoomaustehosteen, kun käyttäjä leijuttaa flashcardin päällä.
- **Tärkeä yksityiskohta**: Flashcard on suunniteltu toimivaksi ja visuaalisesti miellyttäväksi, tarjoten riittävästi tilaa ja kontrastia, jotta se on helppo lukea ja käyttää.

## 12. Flashcard Hover Effect (.flashcard:hover):

- **Mikä se on**: Tämä sääntö pätee, kun käyttäjä leijuttaa hiirtä flashcardin päällä.
- **Tarkoitus**: **transform: scale(1.05);** suurentaa flashcardia hieman, luoden zoomaustehon, joka tekee siitä dynaamisemman.
- **Tärkeä yksityiskohta**: Hover-efekti parantaa sovelluksen vuorovaikutteisuutta ja rohkaisee käyttäjää klikkaamaan flashcardia vastauksen näyttämiseksi.

## 13. Navigation Buttons Container (.navigation):

- **Mikä se on**: Tämä sääntö tyylittää kontin, joka sisältää "Edellinen" ja "Seuraava" navigointipainikkeet.
- **Tarkoitus**: **display: flex; justify-content: space-between;** varmistaa, että painikkeet on sijoitettu kontin vastakkaisille puolille, luoden tasapainoisen asettelun flashcardien navigointiin.
- **Tärkeä yksityiskohta**: Flexbox-asettelu tekee painikkeista helposti saavutettavat ja hyvin sijoitetut helppoa navigointia varten.

## 14. Navigation Buttons Styling (.navigation button):

- **Mikä se on**: Tämä sääntö tyylittää painikkeet, joilla siirrytään flashcardien välillä.
- **Tarkoitus**:
  - **Taustaväri**: **background-color: #007bff;** asettaa elinvoimaisen sinisen värin, joka erottaa painikkeet.
  - **Väri**: **color: white;** varmistaa, että painikkeiden teksti on luettavissa sinistä taustaa vasten.
  - **Pehmuste**: **padding: 10px 20px;** tekee painikkeista riittävän suuria helppoa vuorovaikutusta varten.
  - **Reuna**: **border: none;** poistaa oletusreunan, antaen painikkeille puhtaan, modernin ilmeen.
  - **Reunojen pyöristys**: **border-radius: 6px;** antaa painikkeille pyöristetyt kulmat, jotka ovat yhtenäiset sovelluksen yleisen suunnittelun kanssa.
  - **Kursori**: **cursor: pointer;** osoittaa, että painikkeet ovat klikattavissa.
  - **Siirtymä**: **transition: background-color 0.3s ease;** lisää pehmeän siirtymän hover-efekteille.
- **Tärkeä yksityiskohta**: Painikkeet on tyylitelty erottuviksi ja helposti käytettäviksi, tarjoten selkeän merkinnän niiden toiminnallisuudesta.

## 15. Navigation Buttons Hover Effect (.navigation button:hover):

- **Mikä se on**: Tämä sääntö pätee, kun käyttäjä leijuttaa hiirtä navigointipainikkeiden päällä.
- **Tarkoitus**: **background-color: #0056b3;** vaihtaa taustavärin tummemmaksi siniseksi hover-efektin aikana, tarjoten käyttäjälle visuaalista palautetta.
- **Tärkeä yksityiskohta**: Hover-efekti parantaa käyttäjän vuorovaikutusta tekemällä painikkeista reagoivammat ja interaktiivisemmat.

# JavaScript selitys

## 1. DOMContentLoaded Event:

- **Mikä se on**: **document.addEventListener('DOMContentLoaded', ...)** on tapahtumankuuntelija, joka aktivoituu, kun koko HTML-dokumentti on ladattu ja jäsennelty.
- **Tarkoitus**: Se varmistaa, että kaikki HTML-elementit, kuten lomake, syötekentät, painikkeet ja flashcard-näyttö, ovat täysin ladattuja ja valmiita JavaScript-koodin käsiteltäviksi ennen skriptin suorittamisen alkamista.
- **Tärkeä yksityiskohta**: Tämä tapahtuma on ratkaiseva, jotta vältetään virheet, jotka johtuvat siitä, että yritetään käyttää DOM-elementtejä ennen kuin ne ovat saatavilla.

## 2. Selecting DOM Elements:

- **Mikä se on**: Useita muuttujia käytetään tallentamaan viittauksia keskeisiin HTML-elementteihin, joita tullaan käsittelemään:
  - **const flashcardForm = document.getElementById('flashcard-form');** valitsee lomakkeen, johon käyttäjät syöttävät kysymyksiä ja vastauksia.
  - **const questionInput = document.getElementById('question');** valitsee syötekentän, johon käyttäjät kirjoittavat flashcardin kysymyksen.
  - **const answerInput = document.getElementById('answer');** valitsee syötekentän flashcardin vastausta varten.
  - **const flashcard = document.getElementById('flashcard');** valitsee div-elementin, jossa flashcard näytetään.
  - **const prevButton = document.getElementById('prev');** ja **const nextButton = document.getElementById('next');** valitsevat edellisen ja seuraavan navigointipainikkeen.
- **Tarkoitus**: Nämä muuttujat mahdollistavat skriptin vuorovaikutuksen vastaavien elementtien kanssa, kuten syötearvojen noutamisen, nykyisen flashcardin näyttämisen tai navigointipainikkeiden käsittelyn.
- **Tärkeä yksityiskohta**: Elementtien valitseminen niiden id:n perusteella varmistaa nopean ja helpon pääsyn niiden muokkaamiseen JavaScriptissä.

## 3. Initializing Flashcards and Indexes:

- **Mikä se on**: Kaksi keskeistä muuttujaa alustetaan:
  - **let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];** lataa flashcardit selaimen localStorage-muistista tai alustaa tyhjän taulukon, jos flashcardeja ei ole olemassa.
  - **let currentIndex = 0;** seuraa, mikä flashcard on tällä hetkellä näytössä.
  - **let showAnswer = false;** hallitsee sitä, näytetäänkö flashcardin kysymys vai vastaus, kun flashcardia klikataan.
- **Tarkoitus**:
  - Flashcardien tallentaminen taulukkoon mahdollistaa niiden helpon käsittelyn ja navigoinnin.
  - **localStorage**:a käytetään flashcardien säilyttämiseen selainistuntojen välillä, jotta flashcardit säilyvät, vaikka käyttäjä sulkisi selaimen.
  - **currentIndex**:ia käytetään määrittämään, mikä flashcard näytetään, ja **showAnswer**:ia käytetään vaihtamaan kysymyksen ja vastauksen näyttämisen välillä.
- **Tärkeä yksityiskohta**: **localStorage**:n käyttö varmistaa, että flashcardit tallennetaan pysyvästi, kun taas **currentIndex** ja **showAnswer** hallitsevat näytettävän sisällön dynaamisia päivityksiä.

## 4. Adding New Flashcards (Form Submission Event Listener):

- **Mikä se on**: **flashcardForm.addEventListener('submit', ...)** kuuntelee, kun käyttäjä lähettää lomakkeen lisätäkseen uuden flashcardin.
- **Tarkoitus**: Kun lomake lähetetään, tapahtuma:
  - **Estää oletuskäyttäytymisen**: **event.preventDefault();** estää lomakkeen lähettämisen, joka päivittäisi sivun.
  - **Noutaa syötearvot**: **const question = questionInput.value.trim();** ja **const answer = answerInput.value.trim();** sieppaavat käyttäjän syöttämät kysymyksen ja vastauksen.
  - **Validoi syötteet**: Jos sekä kysymys että vastaus on annettu (ts. eivät ole tyhjiä), uusi flashcard lisätään taulukkoon: **flashcards.push({ question, answer });**.
  - **Päivittää localStorage-muistin**: Päivitetty flashcard-taulukko tallennetaan **localStorage**:en: **localStorage.setItem('flashcards', JSON.stringify(flashcards));**.
  - **Tyhjentää syötekentät**: Lähettämisen jälkeen syötekentät nollataan tyhjiksi merkkijonoiksi.
  - **Näyttää uuden flashcardin**: **currentIndex = flashcards.length - 1;** asettaa indeksin juuri lisättyyn flashcardiin ja kutsuu **displayFlashcard();** näyttämään sen.
- **Tärkeä yksityiskohta**: Tapahtumankuuntelija varmistaa, että lomakkeen lähettäminen käsitellään dynaamisesti JavaScriptillä, estäen sivun uudelleenlataukset ja mahdollistaen flashcardien reaaliaikaiset päivitykset.

## 5. Toggling Between Question and Answer (Click Event Listener on Flashcard):

- **Mikä se on**: **flashcard.addEventListener('click', ...)** kuuntelee klikkaustapahtumaa flashcardilla.
- **Tarkoitus**: Kun flashcardia klikataan, **showAnswer**-muuttuja vaihtaa arvon true ja false välillä, jolloin vaihdetaan kysymyksen ja vastauksen välillä: **showAnswer = !showAnswer;**.
- **Tärkeä yksityiskohta**: **displayFlashcard()**-funktiota kutsutaan klikkaustapahtuman jälkeen, jotta päivitetään näytettävä sisältö sen mukaan, onko **showAnswer** tosi (vastaus) vai epätosi (kysymys).

## 6. Navigating to Previous Flashcard (Click Event Listener on Previous Button):

- **Mikä se on**: **prevButton.addEventListener('click', ...)** kuuntelee, kun käyttäjä klikkaa "Edellinen"-painiketta.
- **Tarkoitus**: Kun painiketta klikataan, skripti tarkistaa, onko **currentIndex** suurempi kuin 0 varmistaakseen, että käyttäjä ei ole jo ensimmäisellä flashcardilla:
  - Jos totta, **currentIndex--** pienentää indeksiä yhdellä, siirtyen edelliseen flashcardiin.
  - **showAnswer = false;** varmistaa, että kysymys näytetään oletuksena navigoinnin jälkeen, ei vastausta.
  - Lopuksi **displayFlashcard();** päivittää flashcard-näytön.
- **Tärkeä yksityiskohta**: Tämä tapahtumankuuntelija mahdollistaa käyttäjien helpon navigoinnin taaksepäin flashcardeissa.

## 7. Navigating to Next Flashcard (Click Event Listener on Next Button):

- **Mikä se on**: **nextButton.addEventListener('click', ...)** kuuntelee, kun käyttäjä klikkaa "Seuraava"-painiketta.
- **Tarkoitus**: Kun painiketta klikataan, skripti tarkistaa, onko **currentIndex** pienempi kuin **flashcards.length - 1** varmistaakseen, että käyttäjä ei ole jo viimeisellä flashcardilla:
  - Jos totta, **currentIndex++** kasvattaa indeksiä yhdellä, siirtyen seuraavaan flashcardiin.
  - **showAnswer = false;** varmistaa, että kysymys näytetään oletuksena navigoinnin jälkeen.
  - Lopuksi **displayFlashcard();** päivittää flashcard-näytön.
- **Tärkeä yksityiskohta**: Tämä tapahtumankuuntelija mahdollistaa käyttäjien helpon navigoinnin eteenpäin flashcardeissa.

## 8. Displaying the Current Flashcard (displayFlashcard() Function):

- **Mikä se on**: **function displayFlashcard()** vastaa nykyisen flashcardin näyttämisestä **currentIndex** ja **showAnswer**-arvojen perusteella.
- **Tarkoitus**: Tämä funktio:
  - Noutaa nykyisen flashcardin **currentIndex**:n perusteella: **const currentFlashcard = flashcards[currentIndex];**.
  - Päivittää flashcard-näytön joko näyttämään kysymyksen tai vastauksen riippuen **showAnswer**-arvosta.
  - Jos taulukossa ei ole flashcardeja (esim. kun sovellus käynnistetään ensimmäistä kertaa tai kaikki flashcardit poistetaan), se näyttää oletusviestin: **flashcard.textContent = 'No flashcards available. Add a new flashcard.'**.
- **Tärkeä yksityiskohta**: Tämä funktio päivittää dynaamisesti flashcard-näyttöalueen sisällön aina, kun uusi flashcard lisätään tai käyttäjä navigoi flashcardien välillä.

## 9. Loading and Displaying Flashcards on Page Load:

- **Mikä se on**: **displayFlashcard();** kutsutaan, kun sivu alun perin ladataan, jotta ensimmäinen flashcard (tai oletusviesti, jos flashcardeja ei ole) näytetään.
- **Tarkoitus**: Tämä varmistaa, että kun käyttäjä avaa sovelluksen, viimeisin flashcard (tai viesti, joka ilmoittaa, ettei flashcardeja ole) näytetään välittömästi.
- **Tärkeä yksityiskohta**: Tämä lopullinen kutsu **displayFlashcard()**:lle varmistaa, että sovellus on toiminnallinen ja visuaalisesti valmis käyttäjän vuorovaikutukselle heti, kun sivu avataan.
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
