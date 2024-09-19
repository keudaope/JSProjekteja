# Nettisivu: https://keudaope.github.io/JSProjekteja/P09_Flashcard_App

# Johdanto

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
