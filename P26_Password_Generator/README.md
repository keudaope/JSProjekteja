# Nettisivu: https://keudaope.github.io/JSProjekteja/P26_Password_Generator

# Johdanto

Salasanageneraattori on hyödyllinen sovellus, joka luo satunnaisia salasanoja käyttäjän määrittämien kriteerien, kuten pituuden, isojen kirjainten, numeroiden ja erikoismerkkien sisällyttämisen perusteella. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptin, HTML:n ja CSS:n käyttöä samalla, kun he oppivat käsittelemään käyttäjän syötteitä, luomaan satunnaisia arvoja ja päivittämään DOM:ia dynaamisesti. Käyttäjät voivat mukauttaa salasanansa kriteerit ja luoda turvallisia salasanoja.

# HTML Selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>)

- **Mikä se on**: <code><</code>!DOCTYPE html> -määrittely asetetaan dokumentin alkuun.
- **Tarkoitus**: Se kertoo selaimelle, että dokumentti on kirjoitettu HTML5-muodossa, mikä varmistaa, että sivu renderöidään nykyaikaisten standardien mukaisesti. Ilman tätä määrittelyä selain saattaa käyttää vanhempia, vähemmän yhteensopivia renderöintitiloja.
- **Tärkeä yksityiskohta**: Tämä määrittely varmistaa johdonmukaisen toiminnan nykyaikaisissa selaimissa ja parantaa yhteensopivuutta.

## 2. HTML Tag (<code><</code>html lang="en">)

- **Mikä se on**: <code><</code>html -elementti on juurielementti, joka sisältää kaiken verkkosivun sisällön. lang="en" -attribuutti määrittää, että dokumentti on kirjoitettu englanniksi.
- **Tarkoitus**: lang-attribuutti on hyödyllinen saavutettavuustyökaluille, kuten ruudunlukuohjelmille, ja hakukoneille, jotka käyttävät sitä dokumentin ensisijaisen kielen tulkitsemiseen. Tämä on tärkeää hakukoneoptimoinnin (SEO) ja käyttökokemuksen kannalta.
- **Tärkeä yksityiskohta**: Kielen määrittäminen parantaa saavutettavuutta ja hakukoneoptimointia.

## 3. Head Tag (<code><</code>head>)

- **Mikä se on**: <code><</code>head> -osio sisältää metatietoja dokumentista, linkkejä ulkoisiin resursseihin ja muita asetuksia, jotka vaikuttavat sivun esitystapaan.
- **Tarkoitus**: <code><</code>head> -tagi tarjoaa tarvittavat tiedot sivun oikean lataamisen varmistamiseksi ja määrittelee resurssit, kuten CSS-tyylit tai JavaScript-skriptit.
- **Tärkeät yksityiskohdat**:
  - **Meta Charset (<code><</code>meta charset="UTF-8">)**: Tämä määrittää merkistöksi UTF-8:ksi, mikä mahdollistaa laajan valikoiman merkkien ja symbolien käytön, varmistaen tekstin oikean esittämisen eri selaimilla ja laitteilla.
  - **Viewport Meta Tag (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">)**: Tämä varmistaa, että sivu on responsiivinen, mukautuen eri näyttöjen kokoihin, erityisesti mobiililaitteilla. Se ohjaa selainta säätämään sivun leveyden laitteen leveyden mukaan.
  - **Title Tag (<code><</code>title>Password Generator</code><</code>)**: Tämä määrittää verkkosivun otsikon, joka näkyy selaimen välilehdessä. Se edistää myös SEO:a, sillä hakukoneet indeksoivat otsikon auttaakseen ymmärtämään sivun sisältöä.

## 4. Body Tag (<code><</code>body>)

- **Mikä se on**: <code><</code>body> -elementti sisältää kaiken näkyvän sisällön, kuten otsikot, tekstin, lomakkeet, painikkeet ja muut elementit, joiden kanssa käyttäjät ovat vuorovaikutuksessa.
- **Tarkoitus**: <code><</code>body> on paikka, jossa kaikki verkkosivun visuaaliset elementit sijaitsevat. Sen sisältöä tyylitellään CSS:n avulla ja se on vuorovaikutuksessa käyttäjän kanssa JavaScriptin kautta.
- **Tärkeä yksityiskohta**: Kaikki näkyvä ja vuorovaikutteinen sisältö sijoitetaan <code><</code>body> -tagiin.

## 5. Container Div (<code><</code>div class="container">)

- **Mikä se on**: <code><</code>div> -elementti luokan "container" kanssa sisältää koko salasanan luojan sisällön.
- **Tarkoitus**: Container-luokka ryhmittelee kaikki lomake-elementit ja otsikon yhteen, mikä mahdollistaa niiden yhtenäisen tyylittelyn. Tämä auttaa luomaan korttimaisen ulkoasun salasanageneraattorille lisäämällä tyylejä, kuten täytettä, taustaväriä ja reunoja.
- **Tärkeä yksityiskohta**: Container on olennainen osan asettelun järjestämisessä ja yhtenäisten tyylien soveltamisessa koko lomakeosioon.

## 6. Heading Tag (<code><</code>h1>Password Generator</code><</code>)

- **Mikä se on**: <code><</code>h1> -tagi edustaa sivun pääotsikkoa ja näyttää tekstin "Password Generator".
- **Tarkoitus**: Otsikko kertoo heti käyttäjälle sovelluksen tarkoituksen. <code><</code>h1> -tagi on myös tärkeä SEO:lle, sillä hakukoneet käyttävät sitä ymmärtääkseen sivun pääaiheen.
- **Tärkeä yksityiskohta**: <code><</code>h1> -tagia käytetään yleensä vain kerran per sivu edustamaan tärkeintä otsikkoa, ja se on tyylitelty erottumaan ja olemaan helposti tunnistettavissa.

## 7. Input for Password Length (<code><</code>input type="number" id="length" min="4" max="20" value="12" required>)

- **Mikä se on**: <code><</code>input> -elementti tyypillä "number", joka sallii käyttäjän määrittää generoitavan salasanan pituuden.
- **Attribuutit**:
  - **type="number"**: Rajaa syötteen vain numeroihin.
  - **id="length"**: Antaa syöttökentälle yksilöllisen tunnisteen, jonka avulla sitä voidaan käyttää ja muokata JavaScriptin avulla.
  - **min="4" ja max="20"**: Määrittää salasanan pituudelle sallitun alueen, varmistaen, että käyttäjä voi luoda salasanan, joka on 4–20 merkkiä pitkä.
  - **value="12"**: Asettaa oletusarvoksi 12 merkin pituisen salasanan.
  - **required**: Varmistaa, että syöttökenttää ei voi jättää tyhjäksi lomaketta lähetettäessä.
- **Tarkoitus**: Tämä syöttökenttä antaa käyttäjälle mahdollisuuden asettaa halutun pituuden generoitavalle salasanalle. Tämä on tärkeää salasanan mukauttamisen kannalta.

## 8. Checkbox Inputs (e.g., <code><</code>input type="checkbox" id="uppercase">)

- **Mikä se on**: Nämä ovat <code><</code>input> -elementtejä tyypillä "checkbox", ja ne liittyvät eri vaihtoehtoihin salasanan luomisessa (esimerkiksi isot kirjaimet, numerot ja symbolit).
- **Attribuutit**:
  - **type="checkbox"**: Sallii käyttäjien valita tai poistaa valinnan vaihtoehdosta.
  - **id="uppercase", id="numbers", id="symbols"**: Yksilölliset tunnisteet, jotka vastaavat valintoja (isot kirjaimet, numerot, symbolit).
- **Tarkoitus**: Nämä valintaruudut antavat käyttäjän määrittää, millaisia merkkejä he haluavat sisällyttää luotuun salasanaan. Jokainen vaihtoehto vastaa eri merkkijoukkoa JavaScriptissä.
- **Tärkeä yksityiskohta**: Valintaruutujen käyttö antaa käyttäjälle mahdollisuuden hallita salasanan ominaisuuksia, mahdollistaen henkilökohtaisemmat ja turvallisemmat salasanat.

## 9. Button Element (<code><</code>button id="generate-button">Generate Password</code><</code>)

- **Mikä se on**: <code><</code>button> -elementti luo interaktiivisen painikkeen, jota käyttäjä napsauttaa salasanan luomiseksi.
- **Attribuutit**:
  - **id="generate-button"**: Tämä antaa painikkeelle yksilöllisen tunnisteen, jota käytetään JavaScriptin avulla toiminnallisuuden lisäämiseen (esim. salasanan luomiseen).
- **Tarkoitus**: Tämä painike käynnistää salasanan luomisen, kun sitä napsautetaan. Toiminta hoidetaan JavaScriptin avulla, joka käyttää käyttäjän antamia syötteitä (salasanan pituus, merkkivaihtoehdot) ja luo salasanan vastaavasti.
- **Tärkeä yksityiskohta**: Painike on sovelluksen pääasiallinen vuorovaikutteinen elementti, joka käynnistää sovelluksen keskeisen toiminnallisuuden.

## 10. Result Div (<code><</code>div class="result" id="result"></code><</code>)

- **Mikä se on**: <code><</code>div> -elementti luokan "result" kanssa, jossa näytetään luotu salasana.
- **Attribuutit**:
  - **id="result"**: Tämä antaa yksilöllisen tunnisteen, jota käytetään JavaScriptin avulla sisällön dynaamiseen päivittämiseen.
- **Tarkoitus**: Tämä <code><</code>div> toimii paikkamerkkinä, jossa näytetään luotu salasana sen jälkeen, kun käyttäjä napsauttaa "Generate Password" -painiketta. Se päivitetään reaaliaikaisesti käyttäjän vuorovaikutuksen perusteella.
- **Tärkeä yksityiskohta**: Tulostusalue on se paikka, jossa lopullinen salasana näytetään, mikä tekee siitä sovelluksen keskeisen osan palautemekanismin kannalta.

## 11. Script Tag (<code><</code>script src="app.js"></code><</code>)

- **Mikä se on**: <code><</code>script> -elementti linkittää ulkoiseen JavaScript-tiedostoon, joka sisältää salasanan luontilogiikan.
- **Tarkoitus**: Skriptin sisällyttäminen sivun loppuun varmistaa, että HTML on täysin ladattu, ennen kuin JavaScript on vuorovaikutuksessa DOM-elementtien kanssa. Tämä parantaa suorituskykyä ja estää virheet.
- **Tärkeä yksityiskohta**: Skriptin erottaminen ulkoiseen tiedostoon pitää HTML:n puhtaana ja ylläpitää toimintojen eriyttämistä, mikä tekee koodin ylläpidosta ja päivittämisestä helpompaa.

# CSS selitys

## 1. Global Reset (\*)

- **Mikä se on**: \*-valitsin on universaali valitsin, joka kohdistuu kaikkiin sivun elementteihin.
- **Tarkoitus**: Se nollaa oletusmarginaalit ja -täytteet kaikille elementeille, varmistaen, että jokainen elementti alkaa yhtenäisillä tiloilla. box-sizing: border-box; -sääntö varmistaa, että täytteet ja reunukset sisältyvät elementin kokonaisleveyteen ja -korkeuteen, yksinkertaistaen asettelulaskelmia.
- **Tärkeä yksityiskohta**: Tämä nollaus varmistaa yhtenäisen toiminnan eri selaimissa ja tarjoaa puhtaan aloituspisteen tyylittelylle.

## 2. Body Styling (body)

- **Mikä se on**: body-sääntö tyylittelee koko verkkosivun, määritellen taustan, typografian ja asettelun.
- **Tarkoitus**:
  - **Font Family (font-family: 'Arial', sans-serif;)**: Käyttää selkeää sans-serif-fonttia luettavuuden ja modernin ulkoasun vuoksi;
  - **Background (background: linear-gradient(135deg, #74ebd5, #acb6e5;)**: Lisää diagonaalisen gradienttitaustan, joka siirtyy pehmeästi turkoosista vaaleansiniseen, luoden raikkaan ja visuaalisesti houkuttelevan ilmeen;
  - **Layout (display: flex; justify-content: center; align-items: center; height: 100vh;)**: Käyttää Flexboxia keskittääkseen sisällön sekä vaakasuunnassa että pystysuunnassa. Body-elementin korkeus on asetettu 100vh:ksi (100 % näkymäkorkeudesta), jotta säilö pysyy pystysuunnassa keskitettynä;
  - **Margin (margin: 0;)**: Poistaa oletusmarginaalit, jotta asettelu peittää koko näkymän.
- **Tärkeä yksityiskohta**: Flexboxin ja gradienttitaustan yhdistelmä varmistaa, että asettelu pysyy keskitettynä ja visuaalisesti tasapainoisena näytön koosta riippumatta.

## 3. Container Styling (.container)

- **Mikä se on**: .container-luokka tyylittelee pääsäilön, joka sisältää lomake-elementit (otsikon, syötekentät, valintaruudut ja painikkeen).
- **Tarkoitus**:
  - **Background Color (background-color: #fff;)**: Asettaa puhtaan valkoisen taustan säilölle, luoden korttimaisen ulkoasun, joka kontrastoi hyvin gradienttitaustan kanssa;
  - **Padding (padding: 40px 30px;)**: Lisää sisäisen tilan sisällön ympärille varmistaakseen, että teksti ja elementit eivät kosketa säilön reunoja;
  - **Border Radius (border-radius: 12px;)**: Pyöristää säilön kulmat, antaen sille modernin ja ystävällisen ilmeen;
  - **Box Shadow (box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);)**: Lisää hienovaraisen varjon säilön alle, antaen sille syvyyttä ja saaden sen näyttämään hieman irti sivusta;
  - **Text Alignment (text-align: center;)**: Keskittää tekstin säilön sisällä, tehden asettelusta siistin ja helposti luettavan;
  - **Max Width (max-width: 400px;)**: Rajoittaa säilön leveyttä varmistaakseen, että se pysyy helposti luettavana eikä veny liian leveäksi suuremmilla näytöillä;
  - **Transition (transition: transform 0.3s ease;)**: Lisää pehmeän zoomausvaikutelman, kun säilöä leijutetaan, luoden hienovaraisen interaktiivisen tunteen.
- **Tärkeä yksityiskohta**: Säilö on suunniteltu näyttämään kortilta, jossa on pyöristetyt kulmat ja varjo, joka lisää syvyyttä. Tämä auttaa sovellusta erottumaan visuaalisesti ja antaa sille viimeistellyn, modernin ulkonäön.

## 4. Hover Effect for Container (.container:hover)

- **Mikä se on**: lisää visuaalisen vaikutuksen, kun käyttäjä leijuttaa säilön päällä.
- **Tarkoitus**: transform: scale(1.05); -sääntö suurentaa säilöä hieman, kun sitä leijutetaan, tarjoten hienovaraisen zoomausvaikutelman, joka parantaa vuorovaikutteisuutta.
- **Tärkeä yksityiskohta**: Tämä hover-efekti lisää dynaamisen kosketuksen säilöön, saaden sen tuntumaan sitoutuneemmalta ja reagoivammalta käyttäjän toimintaan.

## 5. Heading Styling (h1)

- **Mikä se on**: h1-sääntö tyylittelee sivun pääotsikon, "Password Generator".
- **Tarkoitus**:
  - **Font Size (font-size: 2.5em;)**: Varmistaa, että otsikko on suuri ja huomattava, vetäen heti käyttäjän huomion;
  - **Text Color (color: #333;)**: Asettaa otsikkotekstin tummanharmaaksi, varmistaen hyvän kontrastin valkoista taustaa vasten;
  - **Margin Bottom (margin-bottom: 20px;)**: Lisää tilaa otsikon ja seuraavan elementin väliin, parantaen koko asettelun rakennetta.
- **Tärkeä yksityiskohta**: Otsikko on suunniteltu olemaan sivun näkyvin teksti, auttaen käyttäjää tunnistamaan sovelluksen tarkoituksen helposti.

## 6. Checkbox Container Styling (.checkbox-container)

- **Mikä se on**: .checkbox-container-luokka on sovellettu div-elementtiin, joka sisältää jokaisen valintaruudun ja sen vastaavan etiketin.
- **Tarkoitus**:
  - **Display Flex (display: flex;)**: Flexboxia käytetään kohdistamaan valintaruutu ja etiketti vaakasuoraan, pitäen ne samalla rivillä;
  - **Align Items (align-items: center;)**: Tämä keskittää valintaruudun pystysuunnassa etiketin kanssa, varmistaen, että molemmat ovat oikein kohdistettuja;
  - **Justify Content (justify-content: start;)**: Kohdistaa valintaruudun ja etiketin vasemmalle, antaen lomakkeelle jäsennellyn ulkoasun;
  - **Margin Bottom (margin-bottom: 20px;)**: Lisää tilaa jokaisen valintaruudun vaihtoehdon väliin, varmistaen, etteivät ne näytä olevan liian lähekkäin.
- **Tärkeä yksityiskohta**: Flexboxin käyttö tässä varmistaa, että valintaruudut ja etiketit ovat oikein kohdistettuja, tehden lomakkeesta helposti luettavan ja käytettävän.

## 7. Label Styling (label)

- **Mikä se on**: label-sääntö tyylittelee tekstin, joka liittyy jokaiseen valintaruutuun tai syötekenttään.
- **Tarkoitus**:
  - **Font Size (font-size: 1.1em;)**: Suurentaa hieman etiketin fonttikokoa, jotta se on helpommin luettavissa;
  - **Text Color (color: #2c3e50;)**: Asettaa etiketin tekstin tummansiniseksi-harmaaksi paremman luettavuuden saavuttamiseksi valkoista taustaa vasten;
  - **Margin Left (margin-left: 10px;)**: Lisää tilaa valintaruudun ja etiketin väliin, parantaen asettelua ja tehden lomakkeesta helpommin navigoitavan.
- **Tärkeä yksityiskohta**: Etiketti on suunniteltu olemaan helposti luettavissa, ja tila valintaruudun ja etiketin välillä parantaa lomakkeen yleistä selkeyttä.

## 8. Number Input Styling (input[type="number"])

- **Mikä se on**: input[type="number"]-sääntö tyylittelee syötekentän, jolla valitaan salasanan pituus.
- **Tarkoitus**:
  - **Width (width: 100%;)**: Varmistaa, että syötekenttä kattaa säilön koko leveyden;
  - **Padding (padding: 12px;)**: Lisää sisäistä täytettä syötteeseen, tehden siitä helpomman käyttää ja visuaalisesti tasapainoisemman;
  - **Border (border: 1px solid #ccc;)**: Lisää kevyen harmaan reunuksen syötteeseen, luoden hienovaraisen ja puhtaan ulkoasun;
  - **Border Radius (border-radius: 8px;)**: Pyöristää syötteen kulmat sopiakseen muuhun suunnitteluun;
  - **Box Shadow (box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);)**: Lisää hienovaraisen varjon syötteen alle, antaen sille syvyyttä ja saaden sen näyttämään hieman kohotetulta;
  - **Font Size (font-size: 1em;)**: Varmistaa, että syötteen sisäinen teksti on luettavissa;
  - **Margin Bottom (margin-bottom: 20px;)**: Lisää tilaa syötteen ja seuraavan elementin väliin;
  - **Transition (transition: border-color 0.3s ease;)**: Lisää pehmeän siirtymävaikutelman, kun syötteen reunan väri muuttuu.
- **Tärkeä yksityiskohta**: Syötekenttä on suunniteltu käyttäjäystävälliseksi, riittävän täytteen, selkeiden reunojen ja pyöristettyjen kulmien avulla modernin ulkoasun aikaansaamiseksi.

## 9. Button Styling (button)

- **Mikä se on**: button-sääntö tyylittelee painikkeen, jota käyttäjä napsauttaa luodakseen salasanan.
- **Tarkoitus**:
  - **Background Color (background-color: #007bff;)**: Asettaa painikkeen taustan kirkkaan siniseksi, tehden siitä pääasiallisen toimintakutsun;
  - **Text Color (color: white;)**: Varmistaa, että painikkeen teksti on helposti luettavissa sinistä taustaa vasten;
  - **Padding (padding: 12px 30px;)**: Suurentaa painikkeen kokoa, tehden siitä helpommin napsautettavan ja visuaalisesti houkuttelevamman;
  - **Border Radius (border-radius: 8px;)**: Pyöristää painikkeen kulmat sopiakseen yleiseen suunnitteluun;
  - **Width (width: 100%;)**: Varmistaa, että painike kattaa säilön koko leveyden;
  - **Cursor (cursor: pointer;)**: Muuttaa osoittimen sormeksi, kun se on painikkeen päällä, viitaten siihen, että sitä voi napsauttaa;
  - **Font Size (font-size: 1em;)**: Asettaa painikkeen tekstin koon luettavalle ja mukavalle tasolle;
  - **Transition (transition: background-color 0.3s ease, transform 0.2s ease;)**: Lisää pehmeät siirtymät, kun painiketta leijutetaan tai napsautetaan.
- **Tärkeä yksityiskohta**: Painike on suunniteltu erottuvaksi ja helposti napsautettavaksi, ja siirtymät tekevät siitä tuntuvasti reagoivan käyttäjän toimintaan.

## 10. Button Hover Effect (button:hover)

- **Mikä se on**: lisää visuaalisen vaikutuksen, kun käyttäjä leijuttaa painikkeen päällä.
- **Tarkoitus**: Painikkeen taustaväri tummenee hieman (background-color: #0056b3;) ja painike kohoaa sivulta (transform: translateY(-3px);), antaen välittömän palautteen käyttäjälle.
- **Tärkeä yksityiskohta**: Tämä hover-efekti parantaa vuorovaikutteisuutta, saaden sovelluksen tuntumaan dynaamisemmalta ja viimeistellymmältä.

## 11. Result Styling (.result)

- **Mikä se on**: .result-luokka tyylittelee div-elementin, jossa näytetään luotu salasana.
- **Tarkoitus**:
  - **Margin Top (margin-top: 20px;)**: Lisää tilaa painikkeen ja luodun salasanan väliin;
  - **Font Size (font-size: 1.5em;)**: Suurentaa luodun salasanan kokoa paremman luettavuuden saavuttamiseksi;
  - **Text Color (color: #2c3e50;)**: Asettaa salasanan tekstin tummansiniseksi-harmaaksi, varmistaen hyvän kontrastin taustaa vasten;
  - **Word Break (word-break: break-all;)**: Varmistaa, että pitkät salasanat katkeavat kunnolla vaikuttamatta asetteluun;
  - **Min Height (min-height: 60px;)**: Asettaa vähimmäiskorkeuden tulosalueelle, estäen asettelun siirtymät, kun salasana näytetään.
- **Tärkeä yksityiskohta**: Tulosalue on tyylitelty olemaan selkeä ja helposti luettava, ja tilaa on riittävästi pidempien salasanojen näyttämiseksi ilman asettelun häiriintymistä.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...});)

- **Mikä se on**: Tämä on tapahtumankuuntelija, joka odottaa, että HTML-dokumentti on ladattu ja jäsennetty kokonaan ennen kuin se suorittaa funktion sisällä olevan koodin.
- **Tarkoitus**: Se varmistaa, että kaikki DOM-elementit (kuten syötekentät, valintaruudut ja painike) ovat täysin saatavilla ennen kuin skripti yrittää käyttää niitä. Ilman tätä tapahtumankuuntelijaa skripti saattaa yrittää käyttää elementtejä, joita ei ole vielä ladattu, mikä johtaa virheisiin.
- **Tärkeä yksityiskohta**: DOMContentLoaded:n käyttö takaa, että sovellus alkaa toimia vasta, kun kaikki tarvittavat elementit ovat paikallaan. Tämä estää virheitä ja takaa sujuvamman käyttäjäkokemuksen.

## 2. Selecting DOM Elements (const lengthInput = document.getElementById('length');)

- **Mikä se on**: Nämä koodirivit valitsevat tarvittavat DOM-elementit käyttäjäinteraktiota varten käyttämällä document.getElementById(). Jokainen elementti tallennetaan vakioon, jotta sitä voidaan käyttää myöhemmin skriptissä helposti.
- **Tarkoitus**:
  - **lengthInput**: Viittaa syötekenttään, johon käyttäjä määrittää salasanan pituuden;
  - **uppercaseCheckbox, numbersCheckbox, symbolsCheckbox**: Nämä viittaavat valintaruutuihin, jotka mahdollistavat isojen kirjainten, numeroiden ja symbolien käytön salasanassa;
  - **generateButton**: Viittaa painikkeeseen, joka käynnistää salasanan luomisen, kun sitä napsautetaan;
  - **resultDiv**: Tämä on div-elementti, johon luotu salasana näytetään.
- **Tärkeä yksityiskohta**: Valitsemalla nämä elementit ja tallentamalla ne vakioihin skripti voi tehokkaasti manipuloida sisältöä tai kuunnella käyttäjän toimia. Tämä tekee koodista luettavampaa ja hallittavampaa.

## 3. Button Click Event Listener (generateButton.addEventListener('click', generatePassword);)

- **Mikä se on**: Tämä rivi lisää tapahtumankuuntelijan "Luo salasana" -painikkeeseen. Se kuuntelee napsautustapahtumaa ja käynnistää generatePassword()-funktion, kun painiketta napsautetaan.
- **Tarkoitus**: Tämä yhdistää käyttäjän toiminnan (painikkeen napsautuksen) sovelluksen päätoimintoon (salasanan luominen). Ilman tätä tapahtumankuuntelijaa sovellus ei reagoisi käyttäjän toimintaan.
- **Tärkeä yksityiskohta**: Tapahtumankuuntelijoiden lisääminen varmistaa, että sovellus on vuorovaikutteinen ja sallii käyttäjän luoda salasanoja dynaamisesti. Tapahtumankuuntelija on tärkeä osa sovelluksen toiminnallisuutta.

## 4. Generate Password Function (function generatePassword() {...})

- **Mikä se on**: Tämä funktio on vastuussa satunnaisen salasanan luomisesta käyttäjän syötteiden perusteella (salasanan pituus, isojen kirjainten, numeroiden ja symbolien käyttö).
- **Vaiheet**:
  - **Getting User Inputs**:
    - Salasanan pituus haetaan lengthInput-kentästä käyttämällä parseInt(), joka muuntaa syötetyn arvon kokonaisluvuksi;
    - Valintaruudun tila (valittuna tai ei) määritetään käyttämällä .checked, joka palauttaa true, jos valintaruutu on valittu, ja false, jos ei.
  - **Character Sets**:
    - Funktio määrittelee eri merkkijoukot salasanalle: lowerCaseChars, upperCaseChars, numberChars ja symbolChars. Nämä edustavat pieniä kirjaimia, isoja kirjaimia, numeroita ja symboleita.
    - Merkkijoukko aloitetaan pienillä kirjaimilla oletuksena. Käyttäjän valinnan mukaan muut merkkijoukot (isot kirjaimet, numerot, symbolit) lisätään tähän perusjoukkoon.
  - **Generating the Password**:
    - for-silmukka suoritetaan salasanan pituuden määräämän kerran. Jokaisella iteraatiolla valitaan satunnainen merkki charSetistä käyttämällä Math.random() ja Math.floor() arpoakseen satunnainen indeksi. Valittu merkki lisätään salasanastringiin.
  - **Displaying the Password**:
    - Kun silmukka on valmis, luotu salasana näytetään resultDiv-elementissä käyttämällä resultDiv.textContent =.
- **Tärkeä yksityiskohta**: Tämä funktio hoitaa kaiken logiikan salasanan luomista varten, mukaan lukien käyttäjän asetusten lukemisen ja dynaamisen salasanan luomisen valituista merkkijoukoista. Se päivittää myös sivun luodulla salasanalla heti, kun painiketta napsautetaan.

## 5. Fetching and Parsing the Password Length (const length = parseInt(lengthInput.value);)

- **Mikä se on**: Tämä rivi hakee arvon length-syötekentästä ja muuntaa sen kokonaisluvuksi käyttämällä parseInt().
- **Tarkoitus**: Käyttäjä määrittää salasanan pituuden syötekenttään, ja parseInt() varmistaa, että tätä arvoa käsitellään numerona. Tämä on tärkeää, jotta salasanan luomiseen käytettävä silmukka suoritetaan oikean määrän kertoja.
- **Tärkeä yksityiskohta**: parseInt():n käyttö varmistaa, että syötettä käsitellään kelvollisena numerona, mikä estää mahdolliset ongelmat ei-numeeristen syötteiden kanssa.

## 6. Conditional Character Set Building (if (includeUppercase) charSet += upperCaseChars;)

- **Mikä se on**: Nämä rivit tarkistavat, onko käyttäjä valinnut tiettyjä vaihtoehtoja (esim. isot kirjaimet, numerot, symbolit) tarkistamalla valintaruutujen arvon. Jos valintaruutu on valittu, vastaava merkkijoukko lisätään charSet-merkkijonoon.
- **Tarkoitus**: Nämä ehdolliset lauseet mahdollistavat sen, että käyttäjä voi mukauttaa salasanaa valitsemalla, millaisia merkkejä siihen sisällytetään. Esimerkiksi, jos käyttäjä valitsee "Sisällytä isot kirjaimet" -vaihtoehdon, upperCaseChars-merkkijono lisätään perusmerkkijoukkoon.
- **Tärkeä yksityiskohta**: Tarkistamalla, mitkä valintaruudut on valittu, funktio voi rakentaa mukautetun merkkijoukon käyttäjän mieltymysten mukaan. Tämä mahdollistaa joustavan ja mukautettavan salasanan luonnin.

## 7. Loop for Password Generation (for (let i = 0; i < length; i++) {...})

- **Mikä se on**: Tämä for-silmukka iteroi salasanan pituuden määräämän kerran (eli length-muuttujan arvon mukaan). Jokaisella iteraatiolla satunnainen merkki valitaan charSetistä ja lisätään salasanastringiin.
- **Tarkoitus**: Silmukka vastaa salasanan rakentamisesta merkki kerrallaan. Se suoritetaan täsmälleen niin monta kertaa kuin käyttäjä on määrittänyt pituussyötteessä, varmistaen, että luotu salasana on halutun pituinen.
- **Tärkeä yksityiskohta**: Tämä silmukka on välttämätön salasanan luomiseen. Se varmistaa, että salasana rakennetaan dynaamisesti, ja jokainen merkki valitaan satunnaisesti saatavilla olevasta merkkijoukosta.

## 8. Random Character Selection (const randomIndex = Math.floor(Math.random() \* charSet.length);)

- **Mikä se on**: Tämä rivi generoi satunnaisen indeksin valitakseen merkin charSetistä. Math.random() generoi satunnaisen desimaalin 0 ja 1 välillä, ja kertomalla se charSet.length-arvolla saadaan luku väliltä 0 ja merkkijoukon pituus. Math.floor() pyöristää tämän luvun alaspäin lähimpään kokonaislukuun, varmistaen kelvollisen indeksin.
- **Tarkoitus**: Tämä varmistaa, että jokaisella iteraatiolla silmukassa valitaan satunnainen merkki saatavilla olevasta merkkijoukosta, tehden salasanasta arvaamattoman ja turvallisen.
- **Tärkeä yksityiskohta**: Math.random():n ja Math.floor():n käyttö varmistaa, että merkkien valinta on todella satunnaista, mikä lisää luodun salasanan turvallisuutta.

## 9. Displaying the Generated Password (resultDiv.textContent = Generated Password: ${password};)

- **Mikä se on**: Kun salasana on luotu, tämä rivi päivittää resultDiv-elementin textContent-ominaisuuden näyttämään salasanan sivulla.
- **Tarkoitus**: Tämä tarjoaa käyttäjälle välittömän palautteen näyttämällä luodun salasanan. Se varmistaa, että käyttäjä näkee tuloksen syötteistään ja voi kopioida tai käyttää salasanaa.
- **Tärkeä yksityiskohta**: DOM:in reaaliaikainen päivitys mahdollistaa saumattoman, interaktiivisen kokemuksen, jossa käyttäjä näkee luodun salasanan välittömästi ilman, että sivua tarvitsee päivittää.

## 10. Overall Workflow

- **Mikä se on**: Kun käyttäjä käyttää sovellusta, seuraavat vaiheet tapahtuvat:
  1.  Käyttäjä syöttää salasanan pituuden ja valitsee merkkivaihtoehdot (isot kirjaimet, numerot, symbolit);
  2.  Käyttäjä napsauttaa "Luo salasana" -painiketta;
  3.  generatePassword()-funktio käynnistyy, ja se:
      - Hakee käyttäjän syötteet;
      - Rakentaa mukautetun merkkijoukon valittujen vaihtoehtojen perusteella;
      - Luo salasanan valitsemalla satunnaisia merkkejä joukosta;
      - Näyttää luodun salasanan tulosalueella.
- **Tärkeä yksityiskohta**: Tämä työnkulku varmistaa, että sovellus on vuorovaikutteinen ja reagoi käyttäjän syötteisiin, tehden siitä joustavan työkalun turvallisten salasanojen luomiseen.
