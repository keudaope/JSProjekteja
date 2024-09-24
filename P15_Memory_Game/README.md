# Nettisivu: https://keudaope.github.io/JSProjekteja/P15_Memory_Game

# Johdanto

- **Mikä se on**: **Memory Game** on yksinkertainen korttien yhteensovittamispeli, jossa käyttäjät kääntävät kortteja löytääkseen pareja.
- **Tarkoitus**: Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla kun he oppivat **tapahtumakäsittelystä**, **pelilogiikasta** ja **DOM-manipuloinnista**.
- **Tärkeä yksityiskohta**: Käyttäjät voivat kääntää kortteja, yrittää löytää pareja ja parantaa muistiaan toistuvalla pelaamisella.

# HTML selitys

## 1. **DOCTYPE Declaration** (<code><</code>!DOCTYPE html<code>></code>):

- **Mikä se on**: <code><</code>!DOCTYPE html<code>></code> -ilmoitus määrittää, että dokumentti on kirjoitettu HTML5:llä.
- **Tarkoitus**: Se varmistaa, että verkkosivu renderöidään standardien mukaisessa tilassa, jolloin HTML5:n modernit ominaisuudet toimivat.
- **Tärkeä yksityiskohta**: <code><</code>!DOCTYPE html<code>></code> -määrityksen käyttäminen varmistaa selainten yhteensopivuuden ja estää mahdolliset renderöintiongelmat.

## 2. **HTML Tag** (<code><</code>html lang="en"<code>></code>):

- **Mikä se on**: <code><</code>html<code>></code>-elementti käärii kaiken verkkosivun sisällön sisään, ja lang="en" ilmaisee, että dokumentin kieli on englanti.
- **Tarkoitus**: lang-attribuutti auttaa parantamaan saavutettavuutta, jolloin ruudunlukuohjelmat ja hakukoneet voivat tulkita oikein verkkosivun kielen.
- **Tärkeä yksityiskohta**: Kielen määrittäminen parantaa SEO:a ja saavutettavuutta käyttäjille, jotka käyttävät avustavia teknologioita.

## 3. **Head Section** (<code><</code>head<code>></code>):

- **Mikä se on**: <code><</code>head<code>></code>-elementti sisältää metatietoja verkkosivusta, linkkejä ulkoisiin resursseihin (CSS, fontit) ja dokumentin otsikon.
- **Tarkoitus**: Se hallitsee esimerkiksi selaimen välilehdessä näkyvää otsikkoa ja linkittää ulkoisiin tyylitiedostoihin ja fontteihin, jotka auttavat verkkosivun muotoilussa.
- **Tärkeät yksityiskohdat**:
  - **Charset Meta Tag** (<code><</code>meta charset="UTF-8"<code>></code>): Määrittää UTF-8-merkkikoodauksen, joka mahdollistaa laajan valikoiman merkkejä ja symboleja.
  - **Viewport Meta Tag** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0"<code>></code>): Varmistaa, että sivu on responsiivinen, mukautuen eri laitteiden leveyksiin asettamalla näkymäleveyden vastaamaan laitteen näytön leveyttä.
  - **Title Tag** (<code><</code>title<code>></code>Modern Memory Game<code><</code>/title<code>></code>): Määrittää selaimen välilehdessä näkyvän otsikon ja edistää hakukoneoptimointia (SEO).
  - **Google Fonts Link**: Tämä tagi linkittää Google Fonts API:n kautta 'Poppins'-fontin, antaen sovellukselle modernin ja selkeän ulkoasun.

## 4. **Body Tag** (<code><</code>body<code>></code>):

- **Mikä se on**: <code><</code>body<code>></code>-elementti sisältää kaiken näkyvän sisällön, johon käyttäjät vuorovaikuttavat.
- **Tarkoitus**: Se pitää pelin sisällön, kuten pelilaudan, ja toimii yhdessä CSS:n ja JavaScriptin kanssa, jotta sivu on toimiva ja interaktiivinen.
- **Tärkeä yksityiskohta**: Kaikki, mitä käyttäjä näkee ja käyttää, on body-elementin sisällä, ja layoutia hallitaan CSS:n avulla ja interaktiivisuutta tuodaan JavaScriptin avulla.

## 5. **Container Div** (<code><</code>div class="container"<code>></code>):

- **Mikä se on**: Tämä <code><</code>div<code>></code> toimii säiliönä, joka käärii koko pelin käyttöliittymän, mukaan lukien pelin otsikon ja pelilaudan.
- **Tarkoitus**: Se tarjoaa rakenteellisen säiliön kaikille pelin elementeille, mahdollistaen yhtenäisten tyylien, kuten pehmustusten, taustavärin ja varjostusten, käytön.
- **Tärkeä yksityiskohta**: Luokka "container" mahdollistaa tämän divin kohdentamisen tyylien hallintaan ulkoisessa CSS-tiedostossa, jolloin ulkoasua, asettelua ja responsiivisuutta voidaan hallita.

## 6. **Heading** (<code><</code>h1<code>></code>Memory Game<code><</code>/h1<code>></code>):

- **Mikä se on**: <code><</code>h1<code>></code>-elementti määrittää sivun pääotsikon.
- **Tarkoitus**: Se ilmoittaa heti käyttäjälle verkkosivun tarkoituksen näyttämällä "Memory Game" pääotsikkona.
- **Tärkeä yksityiskohta**: <code><</code>h1<code>></code>-tunnisteen käyttö varmistaa, että otsikko on näkyvä ja saavutettava, parantaen käyttäjäkokemusta ja hakukoneoptimointia (SEO).

## 7. **Game Board Div** (<code><</code>div class="game-board" id="game-board"<code>></code>):

- **Mikä se on**: Tämä <code><</code>div<code>></code> toimii säiliönä korteille, jotka muodostavat muistipelin. Se käyttää ruudukkoasettelua näyttääkseen kortit 4x4-muodossa.
- **Tarkoitus**: Se pitää sisällään korttielementit, jotka JavaScript generoi dynaamisesti, ja käyttää ruudukkoasettelua korttien yhdenmukaiseen ja responsiiviseen sijoitteluun.
- **Tärkeä yksityiskohta**: Id="game-board" mahdollistaa JavaScriptin helpon viittauksen tähän elementtiin ja korttien dynaamisen lisäämisen pelin asetuksen aikana.

## 8. **Script Tag** (<code><</code>script src="app.js"<code>></code>):

- **Mikä se on**: Tämä <code><</code>script<code>></code>-elementti linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää muistipelin logiikan.
- **Tarkoitus**: Se pitää HTML:n siistinä ja modulaarisena jakamalla pelilogiikan ulkoiseen JavaScript-tiedostoon, joka hallitsee toimintoja, kuten korttien sekoittamista, parien tunnistamista ja korttien kääntämistä.
- **Tärkeä yksityiskohta**: Linkittämällä ulkoiseen JavaScript-tiedostoon koodi noudattaa parhaiden käytäntöjen mukaisia toimintatapoja, mikä tekee HTML:stä helpommin luettavan ja JavaScriptistä helpommin ylläpidettävän.

# CSS selitys

## 1. **Global Reset** (\* Selector):

- **Mikä se on**: Yleinen \*-valitsin soveltaa tyylejä kaikkiin sivun elementteihin.
- **Tarkoitus**: Se nollaa oletusmarginaalit, -pehmusteet ja asettaa box-sizing: border-box kaikille elementeille, varmistaen, että pehmusteet ja reunukset sisällytetään elementin kokonaisleveyteen ja -korkeuteen. Tämä auttaa säilyttämään yhdenmukaisuuden selainten välillä.
- **Tärkeä yksityiskohta**: Oletustyylien nollaaminen auttaa välttämään odottamattomia tilaristiriitoja ja varmistaa yhtenäisen asettelun eri selaimissa.

## 2. **Body Styling** (body):

- **Mikä se on**: Body-säännöt määrittävät koko sivun yleisen tyylin, halliten asettelua ja taustan ulkoasua.
- **Tarkoitus**:
  - **Font Family**: font-family: 'Poppins', sans-serif; soveltaa modernia ja selkeää Google Fontsista saatavaa fonttia, parantaen luettavuutta ja pelin yleisilmettä.
  - **Background**: background: linear-gradient(135deg, #74ebd5, #acb6e5); lisää visuaalisesti houkuttelevan gradienttitaustan, joka siirtyy vinosti vaalean tealista pehmeään siniseen, parantaen pelin estetiikkaa.
  - **Flexbox Layout**: display: flex; justify-content: center; align-items: center; height: 100vh; keskittää sisällön sekä vaakasuunnassa että pystysuunnassa varmistaen, että peli pysyy keskellä sivua riippumatta näytön koosta.
- **Tärkeä yksityiskohta**: Flexbox tekee pelin keskittämisestä sivulla helppoa, ja gradienttitausta tarjoaa modernin ja houkuttelevan ulkoasun.

## 3. **Container Styling** (.container):

- **Mikä se on**: Säiliön tyyliä sovelletaan pääkehykseen, joka sisältää pelisisällön (otsikon ja pelilaudan).
- **Tarkoitus**:
  - **Background Color**: background-color: #fff; tarjoaa puhtaan, valkoisen taustan säiliölle, tehden pelin sisällön erottuvaksi.
  - **Padding**: padding: 20px; varmistaa, että säiliön sisällä on tarpeeksi tilaa sisällön ympärillä.
  - **Border Radius**: border-radius: 15px; lisää pyöristetyt kulmat, jotka antavat säiliölle modernin, korttimaisen ulkonäön.
  - **Box Shadow**: box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); luo hienovaraisen varjon säiliön ympärille, lisäten syvyyttä ja antaen sille kelluvan vaikutuksen taustalla.
  - **Width**: width: 400px; asettaa kiinteän leveyden säiliölle varmistaen, että pelilauta mahtuu siististi sisälle.
  - **Transition**: transition: transform 0.3s ease; mahdollistaa sujuvat siirtymät, kun säiliötä leijutetaan, tehden käyttöliittymästä interaktiivisemman.
- **Tärkeä yksityiskohta**: Säiliössä on siisti ja moderni muotoilu, pyöristetyt kulmat, pehmeä varjo syvyyden luomiseksi ja pehmuste, joka varmistaa hyvin jäsennellyn sisällön.

## 4. **Container Hover Effect** (.container:hover):

- **Mikä se on**: Tämä sääntö soveltuu, kun käyttäjä leijuttaa säiliön päällä.
- **Tarkoitus**: transform: scale(1.05); suurentaa säiliötä hieman, luoden hienovaraisen zoomaustehosteen leijutuksen aikana, mikä tekee suunnittelusta interaktiivisemman.
- **Tärkeä yksityiskohta**: Tämä hover-tehoste lisää dynaamisen ja responsiivisen tunteen suunnitteluun, tehden siitä sitouttavamman käyttäjälle ilman, että se ylittää visuaalisen kokemuksen.

## 5. **Main Heading** (h1):

- **Mikä se on**: Tämä sääntö tyylittää <code><</code>h1<code>></code>-elementin, joka näyttää "Memory Game" -otsikon.
- **Tarkoitus**:
  - **Font Size**: font-size: 2.5em; tekee otsikosta suuren ja helposti luettavan, varmistaen, että se erottuu sivulla.
  - **Margin**: margin-bottom: 20px; lisää tilaa otsikon alapuolelle, luoden erottelua otsikon ja pelilaudan välille.
  - **Color**: color: #2d3748; asettaa tekstin väriksi tumman harmaan korkean kontrastin ja luettavuuden takaamiseksi.
- **Tärkeä yksityiskohta**: Otsikko on tyylitelty näkyväksi ja visuaalisesti houkuttelevaksi, tarjoten selkeän keskipisteen käyttäjälle, kun he katsovat sivua.

## 6. **Game Board Styling** (.game-board):

- **Mikä se on**: Tämä sääntö tyylittää pelilaudan, joka pitää kortit 4x4-ruudukkoasettelussa.
- **Tarkoitus**:
  - **Grid Layout**: display: grid; ja grid-template-columns: repeat(4, 90px); luovat neljän sarakkeen asettelun pelilaudalle, jossa jokaisen kortin leveys on 90px.
  - **Grid Gap**: grid-gap: 10px; varmistaa, että korttien välillä on tasaista tilaa, jolloin lauta näyttää siistiltä ja organisoidulta.
  - **Centering**: justify-content: center; keskittää ruudukon vaakasuunnassa säiliön sisällä.
- **Tärkeä yksityiskohta**: Ruudukkoasettelun käyttäminen varmistaa, että kortit ovat tasaisesti sijoitettuja ja linjassa, luoden visuaalisesti miellyttävän ja helposti ymmärrettävän pelilayoutin.

## 7. **Card Styling** (.card):

- **Mikä se on**: Tämä sääntö tyylittää jokaisen yksittäisen kortin pelilaudalla.
- **Tarkoitus**:
  - **Width and Height**: width: 90px; height: 90px; määrittää jokaisen kortin mitat, varmistaen, että ne ovat neliöitä ja yhdenmukaisia kooltaan.
  - **Background Color**: background-color: #007bff; antaa korteille alkuperäisen sinisen värin, joka on tunnistettava ja visuaalisesti houkutteleva.
  - **Text Color**: color: white; varmistaa, että mikä tahansa teksti (kortin arvo) näkyy selkeästi sinisellä taustalla.
  - **Flexbox Layout**: display: flex; justify-content: center; align-items: center; keskittää kortin arvon sekä pystysuunnassa että vaakasuunnassa, varmistaen, että se näkyy kortin keskellä.
  - **Border Radius**: border-radius: 10px; lisää pyöristetyt kulmat kortteihin, tehden niistä modernin ja säiliön kanssa yhtenäisen näköisiä.
  - **Cursor**: cursor: pointer; osoittaa, että kortit ovat klikattavissa, parantaen pelin interaktiivisuutta.
  - **User Select**: user-select: none; estää tekstin valitsemisen korteista klikkaamisen aikana, parantaen käyttökokemusta.
  - **Transitions**: transition: background-color 0.3s ease, transform 0.2s ease; varmistaa, että taustavärin muutokset (esim. kortin kääntyessä) ja hover-tehosteet tapahtuvat sujuvasti.
  - **Box Shadow**: box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); lisää hienovaraisen varjon, joka antaa korteille syvyyttä ja saa ne näyttämään hieman kohotetuilta.
- **Tärkeä yksityiskohta**: Korttien muotoilu on moderni, sujuvien siirtymien ja varjojen lisäämisen myötä, mikä tekee pelistä visuaalisesti houkuttelevan ja helppokäyttöisen.

## 8. **Flipped Card Styling** (.card.flipped):

- **Mikä se on**: Tämä sääntö koskee kortteja, jotka on käännetty paljastamaan niiden arvo.
- **Tarkoitus**:
  - **Background Color**: background-color: #fff; vaihtaa taustan valkoiseksi, kun kortti on käännetty.
  - **Text Color**: color: #007bff; muuttaa tekstin värin siniseksi kääntyessä, säilyttäen yhdenmukaisen värityksen.
  - **Cursor**: cursor: default; poistaa osoittimen kursorin, osoittaen, ettei käännettyä korttia voi enää klikata.
- **Tärkeä yksityiskohta**: Käännetty tila erottaa paljastetut kortit visuaalisesti kääntämättömistä, parantaen pelikokemusta.

## 9. **Matched Card Styling** (.card.matched):

- **Mikä se on**: Tämä sääntö koskee kortteja, jotka on yhdistetty oikein.
- **Tarkoitus**:
  - **Background Color**: background-color: #28a745; vaihtaa kortin taustan vihreäksi, osoittaen, että kortit on yhdistetty.
  - **Text Color**: color: white; varmistaa, että teksti pysyy näkyvänä vihreää taustaa vasten.
  - **Cursor**: cursor: default; poistaa osoittimen kursorin yhdistetyistä korteista osoittaen, että ne eivät ole enää klikattavissa.
- **Tärkeä yksityiskohta**: Yhdistetyt kortit erotetaan visuaalisesti vihreän taustan avulla, tarjoten pelaajille selkeän palautteen edistymisestä.

## 10. **Card Hover Effect** (.card:hover):

- **Mikä se on**: Tämä sääntö koskee, kun käyttäjä leijuttaa kortin päällä, jota ei ole vielä käännetty tai yhdistetty.
- **Tarkoitus**: transform: translateY(-5px); nostaa korttia hieman leijutettaessa, luoden 3D-tehosteen, joka lisää interaktiivisuutta.
- **Tärkeä yksityiskohta**: Tämä hienovarainen hover-tehoste lisää pelin dynaamisuutta, tehden käyttöliittymästä kiinnostavamman.

## 11. **Responsive Design** (Media Query for max-width 500px):

- **Mikä se on**: Tämä media query mukauttaa korttien ja ruudukon asettelun näytöille, joiden leveys on alle 500px (esim. mobiililaitteet).
- **Tarkoitus**: Se varmistaa, että peli säilyy responsiivisena ja pelattavana pienemmillä näytöillä vähentämällä korttien kokoa ja ylläpitämällä asianmukaista välistystä.
- **Tärkeät yksityiskohdat**:
  - **Grid Layout**: Kortin koko pienenee 80 pikseliin leveydeltään ja korkeudeltaan pienemmillä näytöillä, varmistaen, että peli mahtuu hyvin mobiililaitteille.
- **Tärkeä yksityiskohta**: Tämä varmistaa, että peli on mobiiliystävällinen ja tarjoaa saumattoman käyttökokemuksen eri laitteilla.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener:

- **Mikä se on:** `document.addEventListener('DOMContentLoaded', ...)` on tapahtumankuuntelija, joka laukeaa, kun koko HTML-dokumentti on ladattu ja selain on jäsentänyt sen.
- **Tarkoitus:** Tämä varmistaa, että JavaScript-koodi suoritetaan vasta, kun kaikki DOM-elementit (kuten pelilauta ja kortit) on renderöity sivulle.
- **Tärkeä yksityiskohta:** Käyttämällä DOMContentLoadedia varmistetaan, että skripti voi turvallisesti käsitellä DOM-elementtejä ilman virheitä, jotka johtuvat elementtien lataamattomuudesta.

## 2. Card Array (cardsArray):

- **Mikä se on:** `const cardsArray = [...]` määrittelee taulukon, jossa kunkin kortin arvot esiintyvät kahdesti muodostaen pareja.
- **Tarkoitus:** Taulukko sisältää korttien arvot, joita käytetään muistipelin pelilaudan täyttämiseen. Taulukossa on 16 arvoa, jotka sekoitetaan ja näytetään pelissä 16 korttina.
- **Tärkeä yksityiskohta:** Jokainen kortin arvo esiintyy kahdesti, mahdollistaen parien löytämisen. Taulukko sekoitetaan myöhemmin korttien järjestyksen satunnaistamiseksi.

## 3. Shuffled Cards (shuffleArray()):

- **Mikä se on:** `shuffleArray()` on apufunktio, joka sekoittaa korttien arvot Fisher-Yates-algoritmin avulla.
- **Tarkoitus:** Varmistaa, että korttien arvot sekoitetaan ennen niiden asettamista pelilaudalle, jotta peli on joka kerta erilainen.
- **Tärkeä yksityiskohta:** Fisher-Yates-algoritmi on luotettava tapa sekoittaa taulukko, mikä tekee siitä täydellisen korttien satunnaiseen järjestykseen.

## 4. Game State Variables:

- **Mitä ne ovat:**
  - **let firstCard = null;**: Seuraa ensimmäistä klikattua korttia.
  - **let secondCard = null;**: Seuraa toista klikattua korttia.
  - **let lockBoard = false;**: Lukitsee pelilaudan väliaikaisesti, jotta estetään useamman kuin kahden kortin kääntäminen yhtä aikaa.
- **Tarkoitus:** Nämä muuttujat auttavat hallitsemaan pelin tilaa seuraamalla, mitkä kortit on käännetty, ja varmistavat, että vain kaksi korttia voidaan kääntää kerrallaan.
- **Tärkeä yksityiskohta:** Seuraamalla pelilaudan tilaa peli varmistaa loogisen pelikokemuksen ja estää pelaajia kääntämästä enemmän kuin kaksi korttia samaan aikaan.

## 5. Game Board Element (const gameBoard = document.getElementById('game-board');):

- **Mikä se on:** Tämä valitsee pelilaudan `<code><</code>div>`-elementin DOMista, johon kortit lisätään dynaamisesti.
- **Tarkoitus:** Pelilauta toimii säiliönä kaikille korteille.
- **Tärkeä yksityiskohta:** `getElementById()`-metodin avulla skripti voi tehokkaasti käsitellä pelilautaa korttien lisäämiseksi pelin aikana.

## 6. Creating the Game Board (createBoard()):

- **Mikä se on:** `createBoard()` on funktio, joka dynaamisesti luo pelilaudan luomalla jokaiselle kortin arvolle korttielementit sekoitetusta taulukosta.
- **Tarkoitus:** Funktio asettaa pelin luomalla 16 korttia, asettamalla niille arvot ja lisäämällä ne pelilaudalle. Jokaiselle kortille määritetään klikattava tapahtumankuuntelija kortin kääntämistä varten.
- **Tärkeät yksityiskohdat:**
  - Funktio käy läpi `shuffledCards`-taulukon ja luo <code><</code>div>-elementin jokaiselle kortille.
  - `card.dataset.value = cardValue;` tallentaa kortin arvon `data-value`-attribuuttiin, jota käytetään myöhemmin tarkistamaan, täsmäävätkö kortit.
  - `card.addEventListener('click', flipCard);` lisää jokaiselle kortille tapahtumankuuntelijan, joka kääntää kortin klikkauksen yhteydessä.
  - `gameBoard.appendChild(card);` liittää jokaisen kortin pelilaudalle.

## 7. Card Flip Function (flipCard()):

- **Mikä se on:** `flipCard()` on funktio, joka hoitaa kortin kääntämisen klikkauksen yhteydessä. Se paljastaa kortin arvon ja tarkistaa, onko kaksi korttia käännetty.
- **Tarkoitus:** Tarkistaa, onko kyseessä ensimmäinen vai toinen kortti, ja paljastaa kortin arvon lisäämällä `flipped`-luokan ja asettamalla tekstisisällön.
- **Tärkeät yksityiskohdat:**
  - Funktio tarkistaa ensin, onko pelilauta lukittu (`lockBoard`) tai yrittääkö käyttäjä klikata samaa korttia kahdesti (`this === firstCard`). Jos jompikumpi ehto täyttyy, kortin kääntäminen estetään.
  - Jos ensimmäistä korttia ei ole vielä käännetty, funktio tallentaa klikattavan kortin muuttujaan `firstCard`.
  - Jos ensimmäinen kortti on jo käännetty, funktio tallentaa toisen kortin `secondCard`-muuttujaan ja kutsuu `checkForMatch()`-funktiota tarkistaakseen, täsmäävätkö kortit.

## 8. Check for Match Function (checkForMatch()):

- **Mikä se on:** `checkForMatch()` tarkistaa, täsmäävätkö kaksi valittua korttia vertaamalla niiden `data-value`-attribuutteja.
- **Tarkoitus:** Funktio määrittää, ovatko käännetyt kortit samoja. Jos kortit täsmäävät, se kutsuu `disableCards()`-funktiota merkitäkseen ne löydetyiksi. Jos ne eivät täsmää, se kutsuu `unflipCards()`-funktiota kääntääkseen ne takaisin piiloon.
- **Tärkeä yksityiskohta:** Tämä funktio hoitaa korttien parituksen logiikan, tehden pelistä interaktiivisen ja responsiivisen.

## 9. Disable Matched Cards (disableCards()):

- **Mikä se on:** `disableCards()` kutsutaan, kun kaksi korttia täsmäävät. Se merkitsee ne löydetyiksi lisäämällä niille `matched`-luokan.
- **Tarkoitus:** Se näyttää visuaalisesti, että korttipari on oikein, ja estää niiden uudelleen klikkaamisen poistamalla osoittimen osoitinkursorin.
- **Tärkeä yksityiskohta:** Merkitsemällä kortit "löydetyiksi" peli etenee, ja pelaaja voi keskittyä jäljellä oleviin parittomiin kortteihin.

## 10. Unflip Cards Function (unflipCards()):

- **Mikä se on:** `unflipCards()` kääntää kortit takaisin piiloon, jos ne eivät täsmää. Se lukitsee pelilaudan hetkeksi (käyttäen `setTimeout()`-funktiota) antaen pelaajalle hetken nähdä kortit ennen niiden kääntämistä takaisin piiloon.
- **Tarkoitus:** Se palauttaa kaksi korttia takaisin piilotettuun tilaan, jos ne eivät täsmää, ja antaa pelaajan jatkaa muiden korttien kanssa.
- **Tärkeät yksityiskohdat:**
  - Pelilauta lukitaan (`lockBoard = true;`), jotta estetään lisäklikkaukset, kun kortit käännetään takaisin piiloon.
  - 1 sekunnin viiveen jälkeen kortit käännetään takaisin piiloon ja niiden arvot piilotetaan poistamalla `flipped`-luokka ja tyhjentämällä tekstisisältö.

## 11. Reset Board Function (resetBoard()):

- **Mikä se on:** `resetBoard()` nollaa pelin tilan tyhjentämällä `firstCard` ja `secondCard` -muuttujat ja avaa pelilaudan uudelleen.
- **Tarkoitus:** Se varmistaa, että peli on valmis seuraavalle korttien kääntökierrokselle jokaisen paritarkistuksen jälkeen, riippumatta siitä täsmäävätkö kortit.
- **Tärkeä yksityiskohta:** Tämä funktio auttaa ylläpitämään pelin sujuvuuden varmistamalla, että peli nollataan kunnolla jokaisen korttikäännön jälkeen.

## 12. Shuffle Array Function (shuffleArray()):

- **Mikä se on:** `shuffleArray()` on apufunktio, joka sekoittaa korttien arvot Fisher-Yates-algoritmin avulla.
- **Tarkoitus:** Varmistaa, että korttien arvot satunnaistetaan ennen jokaista peliä, mikä tekee pelistä haastavamman ja estää toistuvia kuvioita.
- **Tärkeä yksityiskohta:** Korttien satunnaistaminen varmistaa, että peli on joka kerta erilainen, lisäten uudelleenpelattavuutta.

## 13. Board Creation Trigger (createBoard()):

- **Mikä se on:** `createBoard()`-funktio kutsutaan skriptin lopussa, jotta pelilauta luodaan, kun sivu latautuu ensimmäisen kerran.
- **Tarkoitus:** Se alustaa pelin luomalla dynaamisesti korttielementit ja näyttämällä ne pelilaudalla.
- **Tärkeä yksityiskohta:** Pelilauta luodaan dynaamisesti sen sijaan, että kortit koodattaisiin suoraan HTML:ään, mikä mahdollistaa joustavuuden ja helpomman ylläpidon.
