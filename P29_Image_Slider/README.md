# Nettisivu: https://keudaope.github.io/JSProjekteja/P29_Image_Slider

# Johdanto

Kuvakaruselli (Image Slider) on yleinen ja visuaalisesti houkutteleva sovellus, joka näyttää kuvasarjan diaesityksenä. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla kun opitaan käsittelemään käyttäjän vuorovaikutuksia, manipuloimaan DOMia sekä luomaan animaatioita. Käyttäjät voivat siirtyä kuvien välillä käyttämällä Seuraava- ja Edellinen-painikkeita.

# HTML Selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html<code>></code>):

- **Mikä se on:** <!DOCTYPE html> -määrittely kertoo selaimelle, että dokumentti on kirjoitettu HTML5-kielellä.
- **Tarkoitus:** Se varmistaa, että verkkosivu tulkitaan käyttäen nykyaikaisia HTML5-standardeja kaikissa selaimissa, mikä estää ongelmat vanhojen renderointitilojen kanssa.
- **Tärkeä yksityiskohta:** Lisää aina DOCTYPE-määrittely varmistaaksesi yhtenäisen renderoinnin kaikissa selaimissa.

## 2. HTML Tag (<code><</code>html lang="en"<code>></code>):

- **Mikä se on:** <code><</code>html<code>></code> -tagi on juurielementti, joka sisältää kaikki muut HTML-elementit sivulla. lang="en" -attribuutti määrittää, että dokumentin kieli on englanti.
- **Tarkoitus:** lang-attribuutti on tärkeä saavutettavuustyökaluille ja hakukoneille, sillä se kertoo dokumentin ensisijaisen kielen.
- **Tärkeä yksityiskohta:** Kielen määrittäminen parantaa SEO:a ja saavutettavuutta, mikä helpottaa sisällön käsittelyä sekä hakukoneille että apuvälineille.

## 3. Head Tag (<code><</code>head<code>></code>):

- **Mikä se on:** <code><</code>head<code>></code> -osio sisältää metadataa ja linkkejä ulkoisiin resursseihin, kuten tyylitiedostoihin ja fontteihin.
- **Tarkoitus:** <code><</code>head<code>></code> -tagi mahdollistaa selaimen lataamaan tietoja, kuten CSS:n, fonttien ja metadatan, jotka ovat tarpeen sivun renderöimiseksi oikein.
- **Tärkeät yksityiskohdat:**
  - **Meta Charset (<code><</code>meta charset="UTF-8"<code>></code>):** Määrittää merkkikoodaukseksi UTF-8, joka tukee laajaa valikoimaa merkkejä ja symboleja, varmistaen tekstin oikean esittämisen.
  - **Viewport Meta Tag (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0"<code>></code>):** Varmistaa, että sivu on responsiivinen skaalaamalla sisällön sopimaan eri näyttökokoihin, erityisesti mobiililaitteilla.
  - **Title Tag (<code><</code>title<code>></code>Image Slider<code><</code>/title<code>></code>):** Asettaa tekstin, joka näytetään selaimen välilehdellä ja kuvaa sivun sisältöä.
  - **CSS Link (<code><</code>link rel="stylesheet" href="styles.css"<code>></code>):** Linkittää ulkoiseen CSS-tiedostoon (styles.css), joka sisältää tyylit, joilla parannetaan kuvakarusellin ulkoasua.

## 4. Body Tag (<code><</code>body<code>></code>):

- **Mikä se on:** <code><</code>body<code>></code> -tagi sisältää kaiken näkyvän sisällön verkkosivulla, kuten kuvat ja navigointipainikkeet.
- **Tarkoitus:** <code><</code>body<code>></code> on paikka, johon kaikki käyttäjälle näkyvä sisältö sijoitetaan. Se tyylitellään CSS:n avulla ja sitä muokataan JavaScriptin avulla, jotta käyttäjäkokemus olisi interaktiivinen ja responsiivinen.
- **Tärkeä yksityiskohta:** Kaikki dynaaminen ja interaktiivinen sisältö on sisällytetty <code><</code>body<code>></code> -elementtiin, joka on käyttäjän pääasiallinen vuorovaikutusalue.

## 5. Container Div (<code><</code>div class="container"<code>></code>):

- **Mikä se on:** <code><</code>div<code>></code> -elementti, jolla on container-luokka, ympäröi pääsisällön, mukaan lukien kuvat ja navigointipainikkeet.
- **Tarkoitus:** Se ryhmittelee liittyvät elementit yhteen ja mahdollistaa keskitetyn tyylittelyn ja asettelun hallinnan. Container varmistaa, että sisältö näkyy korttimaisessa rakenteessa, erottaen sen visuaalisesti muusta sivusta.
- **Tärkeä yksityiskohta:** Container-luokka on olennainen CSS-ominaisuuksien, kuten taustan, pehmusteen ja varjon soveltamisessa, jolloin kuvakarusellille saadaan puhdas ja moderni ulkoasu.

## 6. Slider Div (<code><</code>div class="slider"<code>></code>):

- **Mikä se on:** <code><</code>div class="slider"<code>></code> ympäröi yksittäiset kuvat, joita käytetään karusellissa.
- **Tarkoitus:** Se sisältää kaikki kuvat ja toimii CSS:n kanssa hallitsemalla kuvien näkyvyyttä ja siirtymiä.
- **Tärkeä yksityiskohta:** Slider-luokkaa käytetään sekä CSS:ssä että JavaScriptissä kuvien siirtymien tyylittelyyn ja hallintaan.

## 7. Image Tags (<code><</code>img src="[https://picsum.photos/600/400?random=1](https://picsum.photos/600/400?random=1)" alt="Slide 1" class="active"<code>></code>):

- **Mikä se on:** Jokainen kuva esitetään <code><</code>img<code>></code> -tagilla, jonka src-attribuutti määrittää kuvan URL-osoitteen. Alt-attribuutti tarjoaa vaihtoehtoisen tekstin saavutettavuutta varten, ja class="active" määrittää näkyvissä olevan kuvan.
- **Tarkoitus:** <code><</code>img<code>></code> -tagia käytetään kuvien esittämiseen karusellissa. Kuvat ovat aluksi piilossa CSS:n avulla, ja ne näytetään yksi kerrallaan JavaScriptin avulla.
- **Tärkeä yksityiskohta:** Active-luokka hallitsee, mikä kuva näkyy milloinkin, ja alt-attribuutti tarjoaa kuvauksen saavutettavuutta varten.

## 8. Navigation Div (<code><</code>div class="navigation"<code>></code>):

- **Mikä se on:** <code><</code>div class="navigation"<code>></code> ympäröi painikkeet, joilla liikutaan kuvien välillä ("Previous" ja "Next").
- **Tarkoitus:** Se ryhmittelee painikkeet ja mahdollistaa niiden keskitetyn sijainnin ja tyylittelyn Flexboxilla, jolloin painikkeet sijoittuvat tasaisesti karusellin molemmille puolille.
- **Tärkeä yksityiskohta:** Navigation-luokka on olennainen painikkeiden asettelun hallinnassa, varmistaen, että ne sijoittuvat oikein container-elementissä.

## 9. Previous Button (<code><</code>button id="prev" aria-label="Previous image"<code>></code><<code><</code>/button<code>></code>):

- **Mikä se on:** <code><</code>button<code>></code> -elementti edustaa "Previous" navigointipainiketta. Id="prev" käytetään JavaScriptissä, ja aria-label-attribuutti varmistaa, että ruudunlukijat tunnistavat painikkeen tarkoituksen.
- **Tarkoitus:** Painike mahdollistaa käyttäjien siirtymisen edelliseen kuvaan karusellissa. Se tyylitellään CSS:n avulla pyöreäksi painikkeeksi, jossa on vasen nuoli (<).
- **Tärkeä yksityiskohta:** Id="prev" mahdollistaa JavaScriptin kiinnittämään tapahtumankuuntelijan, jotta painike toimii, kun taas aria-label="Previous image" parantaa saavutettavuutta.

## 10. Next Button (<code><</code>button id="next" aria-label="Next image"<code>></code>><code><</code>/button<code>></code>):

- **Mikä se on:** Samoin kuin "Previous" -painike, <code><</code>button<code>></code> -elementti edustaa "Next" navigointipainiketta. Id="next" käytetään JavaScriptissä, ja aria-label kuvaa painikkeen tarkoitusta ruudunlukijoille.
- **Tarkoitus:** Painike mahdollistaa käyttäjien siirtymisen seuraavaan kuvaan karusellissa. Se tyylitellään pyöreäksi oikean nuolen symbolilla (>).
- **Tärkeä yksityiskohta:** Id="next" mahdollistaa JavaScriptin suorittamaan toiminnon, joka näyttää seuraavan kuvan.

## 11. Script Tag (<code><</code>script src="app.js"<code>></code>):

- **Mikä se on:** <code><</code>script<code>></code> -tagi linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää logiikan karusellin toiminnan hallitsemiseksi.
- **Tarkoitus:** Se pitää JavaScript-koodin erillään HTML-rakenteesta noudattaen parhaita käytäntöjä modulaarisessa kehityksessä. JavaScript-tiedosto vastaa kuvien siirtymisestä, kun käyttäjät klikkaavat navigointipainikkeita.
- **Tärkeä yksityiskohta:** JavaScript-tiedoston sisällyttäminen ulkoisesti varmistaa, että HTML-tiedosto pysyy selkeänä, kun taas kuvakarusellin toiminnallisuus on ylläpidetty erillisessä, uudelleenkäytettävässä skriptissä.

# CSS selitys

## 1. Global Reset (\*):

- **Mikä se on:** Universaali valitsin \* kohdistaa tyylejä kaikille sivun elementeille.
- **Tarkoitus:** Se nollaa selaimen oletustyylit, kuten marginaalit ja täytöt, varmistaen yhtenäisen lähtökohdan kaikille elementeille. Box-sizing: border-box; varmistaa, että täytöt ja reunukset sisältyvät elementtien leveyteen ja korkeuteen, tehden asettelujen laskemisesta helpompaa.
- **Tärkeä yksityiskohta:** Tämä resetointi poistaa eroavaisuudet siinä, miten elementit renderöidään eri selaimissa, estäen odottamattomat tilat tai asetteluongelmat.

## 2. Body Styling (body):

- **Mikä se on:** Body-sääntö määrittää sivun yleisen asettelun ja ulkoasun
- **Tärkeät yksityiskohdat:**
  - **font-family: 'Arial', sans-serif;:** Asettaa modernin, selkeän fontin koko sivulle, varmistaen yhtenäisyyden kaikessa tekstissä.
  - **background: linear-gradient(135deg, #74ebd5, #acb6e5);:** Lisää diagonaalisen gradientin, joka vaihtuu tealista vaaleansiniseen, antaen sovellukselle visuaalisesti miellyttävän ilmeen.
  - **display: flex; justify-content: center; align-items: center;:** Keskittää sisällön sekä pystysuunnassa että vaakasuunnassa, varmistaen, että liukukuvakaruselli on täydellisesti sijoitettu näkymän keskelle.
  - **height: 100vh;:** Varmistaa, että body vie koko näkymän korkeuden, jolloin liukukuvakaruselli on pystysuunnassa keskitetty.
- **Tarkoitus:** Nämä tyylit varmistavat, että koko sivulla on yhtenäinen asettelu ja että liukukuvakaruselli on sivun keskipiste, visuaalisesti keskittyneenä selaimen ikkunaan.

## 3. Container Styling (.container):

- **Mikä se on:** .container-luokka tyylittelee pääasiallisen wrapper-elementin, joka sisältää karusellin ja navigointipainikkeet.
- **Tärkeät yksityiskohdat:**
  - **background-color: #fff;:** Määrittää containerin taustaväriksi valkoisen, tarjoten puhtaan ja kontrastin taustan karusellille.
  - **padding: 20px;:** Lisää sisäistä tilaa containerin sisällön ja reunojen väliin, varmistaen, ettei kuvat ja painikkeet ole ahtaita.
  - **border-radius: 12px;:** Pyöristää containerin kulmat, antaen sille pehmeän ja modernin ulkonäön.
  - **box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);:** Lisää hienovaraisen varjon containerin taakse, antaen sille syvyyttä ja erottaen sen taustasta.
  - **position: relative;:** Sallii navigointipainikkeiden sijoittamisen absoluuttisesti containerin sisällä.
- **Tarkoitus:** Nämä tyylit luovat puhtaan, korttimaisen rakenteen karusellille ja varmistavat, että kuvat ja painikkeet ovat oikein sijoitettuja ja tyyliteltyjä.

## 4. Hover Effect for Container (.container:hover):

- **Mikä se on:** aktivoituu, kun käyttäjä liikuttaa hiiren containerin päälle.
- **Tärkeät yksityiskohdat:**
  - **transform: scale(1.03);:** Suurentaa containeria hieman, kun sen päällä liikutaan, luoden hienovaraisen zoom-efektin, joka kiinnittää huomion karuselliin.
- **Tarkoitus:** Tämä hover-efekti lisää interaktiivisuutta ja visuaalista houkuttelevuutta, tehden sovelluksesta dynaamisemman.

## 5. Image Styling (.slider img):

- **Mikä se on:** .slider img -sääntö tyylittelee jokaisen kuvan karusellissa
- **Tärkeät yksityiskohdat:**
  - **width: 100%;:** Varmistaa, että kuvat ovat responsiivisia, mukautuen containerin leveyteen ja säilyttäen kuvasuhteensa.
  - **height: auto;:** Säilyttää kuvien alkuperäisen kuvasuhteen estäen vääristymiä.
  - **border-radius: 8px;:** Pyöristää jokaisen kuvan kulmat, tehden niistä visuaalisesti yhteneväisiä containerin pyöristettyjen reunojen kanssa.
- **Tarkoitus:** Nämä tyylit varmistavat, että kuvat näytetään oikein containerissa ja että siirtymät kuvien välillä ovat sulavia.

## 6. Active Image Styling (.slider img.active):

- **Mikä se on:** .slider img.active -sääntö soveltuu karusellin aktiiviseen kuvaan.
- **Tärkeät yksityiskohdat:**
  - **display: block;:** Varmistaa, että aktiivinen kuva on näkyvissä.
  - **opacity: 1;:** Varmistaa, että aktiivinen kuva on täysin läpinäkymätön.
- **Tarkoitus:** Nämä tyylit ohittavat oletusarvoisen display: none; ja tekevät vain aktiivisesta kuvasta näkyvän.

## 7. Navigation Styling (.navigation):

- **Mikä se on:** .navigation-luokka tyylittelee elementin, joka käärii "Edellinen" ja "Seuraava" -painikkeet.
- **Tärkeät yksityiskohdat:**
  - **position: absolute;:** Sallii navigointipainikkeiden sijoittamisen containerin sisällä.
  - **top: 50%;:** Keskittää navigointipainikkeet pystysuunnassa containerin keskelle.
  - **width: 90%;:** Asettaa navigoinnin leveyden 90% containerin leveydestä, estäen painikkeiden koskettamasta reunoja.
  - **left: 50%;:** Sijoittaa navigoinnin vaakasuunnassa keskelle containeria.
  - **transform: translate(-50%, -50%);:** Korjaa sijainnin siirtämällä navigointia takaisin 50% sen leveydestä ja korkeudesta, keskittäen sen täydellisesti molemmissa suunnissa.
  - **display: flex; justify-content: space-between;:** Käyttää Flexboxia, jotta painikkeet sijoitetaan vastakkaisille puolille containeria.
- **Tarkoitus:** Nämä tyylit varmistavat, että navigointipainikkeet on sijoitettu karusellin keskelle ja ne ovat tasaisesti erillään.

## 8. Button Styling (.navigation button):

- **Mikä se on:** .navigation button -sääntö tyylittelee yksittäiset "Edellinen" ja "Seuraava" -painikkeet.
- **Tärkeät yksityiskohdat:**
  - **background-color: rgba(0, 0, 0, 0.5);:** Asettaa painikkeille puoliläpinäkyvän tumman taustan, tehden niistä näkyvät mutta ei liian huomiota herättävät.
  - **color: white;:** Varmistaa, että nuolisymbolit ovat selkeästi näkyvissä tummaa taustaa vasten.
  - **border: none;:** Poistaa oletusarvoisen painikkeen reunuksen, tarjoten siistin ilmeen.
  - **width: 50px; height: 50px;:** Varmistaa, että painikkeet ovat ympyrän muotoisia antamalla niille yhtäläisen leveyden ja korkeuden.
  - **border-radius: 50%;:** Luo täydellisesti pyöreät painikkeet modernin ja huolitellun ulkonäön saavuttamiseksi.
  - **cursor: pointer;:** Muuttaa hiiren osoittimen osoittimeksi, kun painikkeen päällä ollaan, osoittaen, että ne ovat klikattavissa.
  - **display: flex; justify-content: center; align-items: center;:** Varmistaa, että nuolisymbolit ovat keskitettyinä painikkeiden sisällä.
  - **transition: background-color 0.3s ease, transform 0.2s ease;:** Lisää sulavat siirtymät taustavärin muutoksiin ja suurennukseen hover-tilassa.
- **Tarkoitus:** Nämä tyylit tekevät painikkeista helposti klikattavia ja visuaalisesti selkeitä, varmistaen käyttäjäystävällisen navigointikokemuksen.

## 9. Hover Effect for Buttons (.navigation button:hover):

- **Mikä se on:** aktivoituu, kun käyttäjä liikuttaa hiiren painikkeiden päälle.
- **Tärkeät yksityiskohdat:**
  - **background-color: rgba(0, 0, 0, 0.8);:** Tummentaa painikkeiden taustaa hover-tilassa, antaen visuaalista palautetta käyttäjälle.
  - **transform: scale(1.1);:** Suurentaa painikkeita hieman, tehden niistä interaktiivisemmat ja kannustaen käyttäjiä klikkaamaan.
- **Tarkoitus:** Tämä hover-efekti parantaa käyttökokemusta antamalla välitöntä visuaalista palautetta, kun käyttäjä on vuorovaikutuksessa painikkeiden kanssa.

## 10. Z-index for Buttons (.navigation button):

- **Mikä se on:** z-index-ominaisuus varmistaa, että painikkeet pysyvät näkyvinä kuvien päällä.
- **Tärkeät yksityiskohdat:**
  - **z-index: 10;:** Varmistaa, että painikkeet näytetään kuvien päällä, estäen niitä piiloutumasta karusellin taakse.
- **Tarkoitus:** Tämä varmistaa, että painikkeet ovat aina klikattavissa ja näkyvissä, riippumatta siitä, mitä kuvasiirtymiä tapahtuu niiden takana.

# JavaScript Selitys

## 1. DOMContentLoaded-tapahtumakuuntelija (document.addEventListener('DOMContentLoaded', () => {...});):

- **Mikä se on:** Tämä on tapahtumakuuntelija, joka odottaa, että koko HTML-dokumentti ladataan täysin ennen kuin skripti suoritetaan callback-funktiossa.
- **Tarkoitus:** Se varmistaa, että JavaScript on vuorovaikutuksessa DOM-elementtien kanssa vasta, kun ne on ladattu ja käsitelty täysin. Ilman tätä skripti saattaa yrittää manipuloida elementtejä, joita ei vielä ole olemassa, mikä johtaisi virheisiin.
- **Tärkeä yksityiskohta:** Käyttämällä DOMContentLoaded varmistetaan, että sovellus alkaa toimia vasta, kun kaikki HTML-elementit (kuten kuvat ja painikkeet) ovat käytettävissä ja manipuloitavissa JavaScriptillä.

## 2. DOM-elementtien valinta (const images = document.querySelectorAll('.slider img');):

- **Mikä se on:** Tämä rivi valitsee kaikki <code><img></code>-elementit .slider-containerin sisällä käyttäen <code>document.querySelectorAll()</code>-funktiota. Tämä palauttaa NodeListin kaikista kuvaelementeistä.
- **Tarkoitus:** Se kerää kaikki kuvat, jotta niitä voidaan manipuloida (näyttää tai piilottaa) käyttäjän vuorovaikutuksen perusteella. Jokainen kuva käsitellään yksittäisenä elementtinä liukusäätimessä.
- **Tärkeä yksityiskohta:** <code>querySelectorAll</code>-funktion käyttö mahdollistaa useiden elementtien valitsemisen kerralla. Kuvat voidaan kohdistaa niiden indeksin mukaan NodeListissa, mikä helpottaa niiden välillä navigointia.

## 3. Edellisen ja Seuraavan painikkeiden valinnat (const prevButton = document.getElementById('prev'); const nextButton = document.getElementById('next');):

- **Mikä se on:** Nämä rivit valitsevat "Edellinen" ja "Seuraava" navigointipainikkeet niiden id-attribuuttien (prev ja next) avulla.
- **Tarkoitus:** Painikkeet ovat tärkeitä liukusäätimen hallinnassa, jolloin käyttäjä voi navigoida kuvien välillä. Viittaukset tallennetaan, jotta näihin painikkeisiin voidaan lisätä tapahtumakuuntelijat.
- **Tärkeä yksityiskohta:** <code>document.getElementById()</code>-funktiolla saadaan nopeasti jokainen painike käyttöön niiden yksilöllisen tunnisteen avulla.

## 4. Nykyinen indeksi (let currentIndex = 0;):

- **Mikä se on:** Tämä rivi määrittelee muuttujan <code>currentIndex</code>, joka pitää kirjaa siitä, mikä kuva on tällä hetkellä näkyvissä.
- **Tarkoitus:** <code>currentIndex</code>-muuttujaa käytetään tunnistamaan liukusäätimessä aktiivinen kuva. Kun käyttäjä navigoi kuvien välillä, tämä arvo päivitetään vastaamaan uutta aktiivista kuvaa.
- **Tärkeä yksityiskohta:** Indeksi alkaa arvosta 0, koska JavaScript-taulukot (ja NodeListit) ovat nollasta alkavia, mikä tarkoittaa, että ensimmäisellä kuvalla on indeksi 0.

## 5. Näytä kuva -funktio (function showImage(index) {...}):

- **Mikä se on:** Tämä funktio näyttää kuvan annettuna indeksinä ja piilottaa kaikki muut kuvat.
- **Vaiheet:**
  - Funktio käy läpi kaikki kuvat käyttäen <code>forEach()</code>-metodia.
  - Jokaiselta kuvalta poistetaan <code>active</code>-luokka.
  - Sitten se tarkistaa, vastaako kuvan indeksi annettua indeksiä, ja jos näin on, se lisää <code>active</code>-luokan kyseiseen kuvaan, tehden siitä näkyvän.
- **Tarkoitus:** Tämä funktio hallitsee, mikä kuva näytetään milläkin hetkellä aktivoimalla <code>active</code>-luokan. Tämä luokka hallitsee kuvan näkyvyyttä CSS:n avulla (<code>display: block;</code>).
- **Tärkeä yksityiskohta:** Käyttämällä <code>forEach()</code>-metodia funktio käy tehokkaasti läpi kaikki kuvat ja päivittää vain määritetyn indeksin kuvan näkyvyyden.

## 6. Näytä seuraava kuva -funktio (function showNextImage() {...}):

- **Mikä se on:** Tämä funktio siirtää liukusäätimen seuraavaan kuvaan järjestyksessä.
- **Vaiheet:**
  - Se kasvattaa <code>currentIndex</code>-arvoa yhdellä.
  - Jos <code>currentIndex</code> ylittää kuvien määrän (eli saavutetaan viimeinen kuva), se palaa takaisin arvoon 0 (ensimmäinen kuva) käyttämällä jakojäännösoperaattoria <code>%</code>.
  - Se kutsuu <code>showImage(currentIndex)</code>-funktiota näyttääksen uuden aktiivisen kuvan.
- **Tarkoitus:** Tämä funktio tarjoaa eteenpäin navigointia liukusäätimessä. Kun käyttäjä napsauttaa "Seuraava"-painiketta, tämä funktio aktivoituu näyttääkseen seuraavan kuvan.
- **Tärkeä yksityiskohta:** <code>% images.length</code> -operaattorin käyttö varmistaa, että liukusäädin palaa alkuun, kun käyttäjä saavuttaa viimeisen kuvan.

## 7. Näytä edellinen kuva -funktio (function showPrevImage() {...}):

- **Mikä se on:** Tämä funktio siirtää liukusäätimen edelliseen kuvaan järjestyksessä.
- **Vaiheet:**
  - Se vähentää <code>currentIndex</code>-arvoa yhdellä.
  - Jos <code>currentIndex</code> putoaa alle 0 (eli ollaan ensimmäisessä kuvassa ja yritetään palata taaksepäin), se asettaa <code>currentIndex</code>:n kuvien viimeiseksi (<code>images.length - 1</code>).
  - Se kutsuu <code>showImage(currentIndex)</code>-funktiota näyttääkseen uuden aktiivisen kuvan.
- **Tarkoitus:** Tämä funktio tarjoaa taaksepäin navigointia liukusäätimessä. Kun käyttäjä napsauttaa "Edellinen"-painiketta, tämä funktio aktivoituu näyttämään edellisen kuvan.
- **Tärkeä yksityiskohta:** <code>currentIndex - 1 + images.length</code> -tarkistus varmistaa, että liukusäädin palaa viimeiseen kuvaan, jos käyttäjä on ensimmäisessä kuvassa ja napsauttaa "Edellinen".

## 8. Painikkeiden tapahtumakuuntelijat (prevButton.addEventListener('click', showPrevImage); nextButton.addEventListener('click', showNextImage);):

- **Mikä se on:** Nämä rivit liittävät tapahtumakuuntelijat "Edellinen" ja "Seuraava" -painikkeisiin. Kun käyttäjä napsauttaa jompaakumpaa painiketta, vastaava funktio (showPrevImage tai showNextImage) käynnistyy.
- **Tarkoitus:** Tapahtumakuuntelijat varmistavat, että painikkeet ovat toimivia ja mahdollistavat käyttäjän navigoinnin kuvien välillä niitä napsauttamalla.
- **Tärkeä yksityiskohta:** <code>addEventListener</code>-funktion avulla reagoidaan käyttäjän toimintaan (tässä tapauksessa klikkauksiin), jolloin sovelluksesta tulee dynaaminen.

## 9. Alustava näyttö (showImage(currentIndex);):

- **Mikä se on:** Tämä rivi varmistaa, että ensimmäinen kuva näytetään, kun sivu latautuu.
- **Tarkoitus:** Ilman tätä riviä sivu latautuisi aluksi niin, että kaikki kuvat olisivat piilossa (CSS:n oletusarvoisen <code>display: none;</code>-asetuksen vuoksi). Tämä varmistaa, että liukusäädin alkaa ensimmäisen kuvan näyttämisellä.
- **Tärkeä yksityiskohta:** Kutsumalla <code>showImage(currentIndex)</code> heti sivun latautumisen jälkeen ensimmäinen kuva (indeksi 0) tehdään näkyväksi.
