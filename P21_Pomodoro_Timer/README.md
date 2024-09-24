# Nettisivu: https://keudaope.github.io/JSProjekteja/P21_Pomodoro_Timer

# Johdanto

Pomodoro-ajastin on ajanhallintatyökalu, joka auttaa käyttäjiä työskentelemään keskittyneissä jaksoissa (tyypillisesti 25 minuuttia), joita seuraa lyhyet tauot (tyypillisesti 5 minuuttia). Tämä tekniikka, joka tunnetaan nimellä Pomodoro-tekniikka, parantaa tuottavuutta ja keskittymistä. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla kun opitaan käsittelemään ajastimia, hallitsemaan tiloja ja päivittämään DOMin dynaamisesti. Käyttäjät voivat käynnistää, keskeyttää ja pysäyttää ajastimen hallitakseen työjaksojaan tehokkaasti.

# HTML selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on**: <code><</code>!DOCTYPE html> -määrittely osoittaa, että verkkosivu on kirjoitettu HTML5-kielellä.
- **Tarkoitus**: Se varmistaa, että selain tulkitsee dokumentin nykyaikaisen HTML5-standardin mukaisesti, mikä estää yhteensopivuusongelmat vanhemmissa selaimissa.
- **Tärkeä yksityiskohta**: DOCTYPE-määrittelyn sisällyttäminen on välttämätöntä, jotta sivu renderöidään oikein HTML5-standardien mukaisesti.

## 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on**: <code><</code>html>-tag kietoo kaiken sivun sisällön ja määrittää, että sivun kieli on englanti käyttämällä lang="en"-attribuuttia.
- **Tarkoitus**: lang-attribuutti auttaa ruudunlukijoita ja hakukoneita tunnistamaan sisällön kielen, mikä parantaa saavutettavuutta ja hakukoneoptimointia (SEO).
- **Tärkeä yksityiskohta**: Kielen määrittäminen parantaa sekä käyttäjien saavutettavuutta että hakukoneoptimointia (SEO) verkkosivulla.

## 3. Head Tag (<code><</code>head>):

- **Mikä se on**: <code><</code>head>-elementti sisältää verkkosivun metatietoja, kuten otsikon, linkit ulkoisiin tyylitiedostoihin ja muita tietoja, joita ei suoraan näytetä sivulla.
- **Tarkoitus**: Se tarjoaa selaimelle tarvittavat tiedot sivun oikeaa renderöintiä varten ja linkittää ulkoisia resursseja, kuten CSS-tyylit ja fontit.
- **Tärkeät yksityiskohdat**:
  - **Meta Charset** (<code><</code>meta charset="UTF-8">): Varmistaa, että sivu käyttää UTF-8-koodausta, joka tukee laajaa merkkivalikoimaa eri kielistä ja symboleista.
  - **Viewport Meta Tag** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">): Varmistaa, että sivu on responsiivinen ja skaalautuu oikein eri laitteilla.
  - **Title Tag** (<code><</code>title>Pomodoro Timer</title>): Asettaa verkkosivun selaimen välilehdellä näkyvän otsikon ja kertoo sivun tarkoituksen.
  - **Google Fonts Link** (<code><</code>link>): Linkittää Google Fonts -palveluun lataamaan "Roboto"-fontin, joka antaa sovellukselle modernin ja siistin ilmeen.

## 4. Body Tag (<code><</code>body>):

- **Mikä se on**: <code><</code>body>-tag sisältää kaiken näkyvän sisällön verkkosivulla, mukaan lukien otsikot, ajastimen, painikkeet ja muut interaktiiviset elementit.
- **Tarkoitus**: Kaikki käyttäjän vuorovaikutuksessa olevat ja näkyvät osat sijoitetaan <code><</code>body>-elementtiin, joka on yhteydessä sekä CSS:ään että JavaScriptiin, luoden sivun toiminnallisuuden ja ulkoasun.
- **Tärkeä yksityiskohta**: <code><</code>body> on säiliö kaikelle näkyvälle sisällölle, jota käyttäjät näkevät ja joiden kanssa he ovat vuorovaikutuksessa. Se on sivun keskeinen rakenteellinen elementti.

## 5. Main Container Div (<code><</code>div class="container">):

- **Mikä se on**: Tämä <code><</code>div>-elementti kietoo ajastimen, painikkeet ja otsikon, tarjoten sisällölle layout-rakenteen.
- **Tarkoitus**: Se ryhmittelee yhteen liittyvät elementit, mikä mahdollistaa keskitetyn tyylityksen ja layout-hallinnan. Luokka containeriä käytetään CSS-tyyleissä, jotka antavat sovellukselle korttimaisen ulkoasun, jossa on pehmusteet, varjot ja pyöristetyt kulmat.
- **Tärkeä yksityiskohta**: Container toimii visuaalisena rajana, antaen sovellukselle siistin ja järjestelmällisen ilmeen sekä tarjoten keskipisteen layout-tyylien, kuten leveyden, pehmusteiden ja kohdistuksen, soveltamiselle.

## 6. Heading Tag (<code><</code>h1>Pomodoro Timer</code><</code>h1>):

- **Mikä se on**: <code><</code>h1>-elementti näyttää sovelluksen otsikon, "Pomodoro Timer".
- **Tarkoitus**: Otsikko viestii selkeästi sovelluksen tarkoituksen käyttäjille ja se on muotoiltu erottuvaksi ja luettavaksi. Sillä on myös rooli SEO:ssa, koska hakukoneet pitävät <code><</code>h1-tä tärkeimpänä otsikkona sivulla.
- **Tärkeä yksityiskohta**: <code><</code>h1>-elementti on muotoiltu erottumaan sivun yläosassa ja osoittaa sivun pääsisällön painopisteen.

## 7. Timer Display Div (<code><</code>div class="timer" id="timer">25:00</code><</code>div>):

- **Mikä se on**: Tämä <code><</code>div> näyttää ajastimen laskurin, joka on aluksi asetettu aikaan "25:00" 25 minuutin Pomodoro-sessiota varten.
- **Tarkoitus**: Ajastimen div näyttää visuaalisesti jäljellä olevan ajan nykyiselle sessiolle, joka päivittyy dynaamisesti JavaScriptin avulla. id="timer" mahdollistaa JavaScriptin helpon valinnan ja tämän elementin päivittämisen, kun ajastin käy.
- **Tärkeä yksityiskohta**: Ajastin on tärkeä osa sovelluksen toiminnallisuutta, ja sen sisältö päivittyy reaaliajassa Pomodoro-sessioiden edetessä.

## 8. Control Buttons:

- **Mikä ne ovat**: Kolme painiketta (<code><</code>button id="start-button">Start<code><</code>button>, <code><</code>button id="pause-button" class="pause">Pause</code><</code>button>, ja <code><</code>button id="stop-button" class="stop">Stop</code><</code>button>) antavat käyttäjälle mahdollisuuden aloittaa, keskeyttää ja pysäyttää ajastimen.
- **Tarkoitus**: Nämä painikkeet tarjoavat käyttäjälle hallinnan Pomodoro-ajastimen suhteen:
  - **Start Button**: Aloittaa laskennan.
  - **Pause Button**: Keskeyttää ajastimen ilman, että nykyinen aika nollautuu.
  - **Stop Button**: Pysäyttää ajastimen ja palauttaa sen oletusarvoiseen 25 minuutin sessioon.
- **Tärkeä yksityiskohta**: Jokaisella painikkeella on oma id (JavaScript-toiminnallisuutta varten), ja ne on muotoiltu CSS:n avulla, jotta ne antavat visuaalista palautetta napsautettaessa, mikä parantaa käyttäjäkokemusta.

## 9. Script Tag (<code><</code>script src="app.js"></code><</code>script>):

- **Mikä se on**: <code><</code>script-tagi linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää logiikan Pomodoro-ajastimen hallintaan.
- **Tarkoitus**: JavaScriptin erottaminen ulkoiseen tiedostoon noudattaa parhaita käytäntöjä modulariteetin suhteen, tehden koodin ylläpidosta helpompaa ja mahdollistaen HTML:n rakenteen ja sovelluksen toiminnallisuuden puhtaan erottamisen toisistaan.
- **Tärkeä yksityiskohta**: Ulkoiseen skriptiin linkittäminen pitää HTML-tiedoston keskittyneenä rakenteeseen, kun taas JavaScript-tiedosto käsittelee Pomodoro-ajastimen interaktiivisen toiminnallisuuden.

# CSS selitys

## 1. Global Reset (\* Selector):

- **Mikä se on**: Yleinen \*-valitsin kohdistuu kaikkiin sivun elementteihin.
- **Tarkoitus**: Se nollaa marginaalit, täytteet ja box-sizing-ominaisuuden kaikissa elementeissä. box-sizing: border-box; varmistaa, että täytteet ja reunukset sisällytetään elementtien kokonaisleveyteen ja -korkeuteen, mikä estää asetteluun liittyviä ongelmia.
- **Tärkeä yksityiskohta**: Tämä nollaus tarjoaa yhtenäisen asettelun eri selaimissa, välttäen odottamattomat tilanvaihtelut, joita selainten oletustyylit voivat aiheuttaa.

## 2. Body Styling (<code><</code>body>):

- **Mikä se on**: Body-sääntö määrittää koko sivun tyylin.
- **Tarkoitus**: Se määrittää sovelluksen pääasettelun ja ulkoasun:
  - **Font Family**: font-family: 'Roboto', sans-serif; käyttää modernia, selkeää fonttia, joka parantaa luettavuutta ja suunnittelun estetiikkaa.
  - **Background**: background: linear-gradient(135deg, #74ebd5, #acb6e5); lisää diagonaalisen liukuvärin, joka siirtyy tealista siniseen, luoden visuaalisesti houkuttelevan ja modernin taustan.
  - **Flexbox Layout**: display: flex; justify-content: center; align-items: center; keskittää containerin sekä vaaka- että pystysuunnassa varmistaen, että ajastin näkyy ruudun keskellä.
  - **Height**: height: 100vh; varmistaa, että body vie koko näkymän korkeuden, mikä tekee pystysuunnassa keskittämisen mahdolliseksi.
- **Tärkeä yksityiskohta**: Flexbox-asettelun ja liukuvärjätyn taustan yhdistelmä antaa sovellukselle modernin, viimeistellyn ilmeen ja varmistaa, että se on hyvin sijoitettu näytölle.

## 3. Main Container Styling (<code><</code>container>):

- **Mikä se on**: .container-luokka tyylittää pääelementin, joka sisältää ajastimen ja painikkeet.
- **Tarkoitus**:
  - **Background Color**: background-color: #fff; asettaa containerille valkoisen taustan, joka erottaa sen kevyesti taustasta.
  - **Padding**: padding: 30px; lisää sisätilaa sisällön ja containerin reunojen välille, parantaen luettavuutta ja asettelun tasapainoa.
  - **Border Radius**: border-radius: 15px; lisää pehmeät, pyöristetyt reunat containeriin, mikä edistää modernia, korttimaisen muotoilun tunnetta.
  - **Box Shadow**: box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1); luo hienovaraisen varjon containerin alle, saaden sen näyttämään kohotetulta taustasta ja lisää asetteluun syvyyttä.
  - **Width**: width: 350px; asettaa containerille kiinteän leveyden, tehden asettelusta johdonmukaisen ja kompaktin.
  - **Max Width**: max-width: 100%; varmistaa, että container pysyy responsiivisena ja mukautuu pienempiin näyttöihin.
  - **Transition**: transition: transform 0.3s ease; mahdollistaa sujuvat animaatiot hover-efekteissä.
- **Tärkeä yksityiskohta**: Containerin muotoilu yhdistää valkoisen taustan, pyöristetyt reunat ja varjostuksen luodakseen puhtaan ja modernin käyttöliittymän, kun taas leveys ja padding pitävät sisällön hyvin organisoituna.

## 4. Container Hover Effect (.container:hover):

- **Mikä se on**: Hover-pseudo-luokka soveltaa visuaalista efektiä, kun käyttäjä siirtää hiiren containerin päälle.
- **Tarkoitus**: transform: scale(1.05); suurentaa hieman containeria hover-tilassa, luoden zoom-in-efektin, joka saa sovelluksen tuntumaan dynaamiselta ja interaktiiviselta.
- **Tärkeä yksityiskohta**: Tämä hienovarainen hover-efekti lisää vuorovaikutteisuuden ja responsiivisuuden tasoa, parantaen käyttäjäkokemusta ja tehden sovelluksesta houkuttelevamman.

## 5. Heading Styling (<code><</code>h1>):

- **Mikä se on**: <code><</code>h1>-tag tyylittää sovelluksen pääotsikon, "Pomodoro Timer."
- **Tarkoitus**:
  - **Font Size**: font-size: 2.5em; varmistaa, että otsikko on suuri ja näkyvä, tehden siitä helposti huomattavan.
  - **Margin Bottom**: margin-bottom: 20px; lisää tilaa otsikon alle, erottaen sen ajastinnäytöstä ja ylläpitäen visuaalista tasapainoa.
  - **Color**: color: #2d3748; soveltaa tummanharmaata väriä tekstiin, tarjoten vahvan kontrastin valkoista taustaa vasten.
- **Tärkeä yksityiskohta**: Suuri, rohkea otsikko on suunniteltu olemaan sovelluksen pääkohta, antaen käyttäjälle selkeän käsityksen sovelluksen tarkoituksesta.

## 6. Timer Display Styling (<code><</code>timer>):

- **Mikä se on**: .timer-luokka tyylittää divin, joka näyttää jäljellä olevan ajan.
- **Tarkoitus**:
  - **Font Size**: font-size: 3em; varmistaa, että ajastin on suuri ja helposti luettavissa, sillä se on sovelluksen tärkein osa.
  - **Margin Bottom**: margin-bottom: 20px; tarjoaa tilaa ajastimen alle, erottaen sen ohjauspainikkeista ja luoden siistin asettelun.
  - **Text Color**: color: #333; soveltaa tummaa väriä ajastintekstiin, tarjoten selkeän kontrastin valkoista taustaa vasten.
- **Tärkeä yksityiskohta**: Suuri, lihavoitu fontti tekee jäljellä olevasta ajasta helposti luettavan ja varmistaa, että käyttäjät voivat nopeasti nähdä, kuinka paljon aikaa on jäljellä.

## 7. Button Styling (<code><</code>button>):

- **Mikä se on**: <code><</code>button-elementti tyylittää kaikki sovelluksen painikkeet (Start, Pause, Stop).
- **Tarkoitus**:
  - **Padding**: padding: 12px 20px; varmistaa, että painikkeet ovat mukavia klikata ja niissä on riittävästi tilaa tekstille.
  - **Margin**: margin: 5px; luo tilaa jokaisen painikkeen välille, antaen asettelulle siistin ja järjestetyn ulkonäön.
  - **Background Color**: background-color: #007bff; käyttää kirkasta sinistä taustaa oletuksena, tehden niistä erottuvia toiminnallisia elementtejä.
  - **Text Color**: color: white; varmistaa, että painiketeksti on luettavissa sinistä taustaa vasten.
  - **Border Radius**: border-radius: 8px; antaa painikkeille pyöristetyt kulmat, jotka vastaavat containerin modernia muotoilua.
  - **Cursor**: cursor: pointer; muuttaa kursorin osoittimeksi, kun hiiri on painikkeen päällä, osoittaen, että ne ovat klikattavissa.
  - **Font Size**: font-size: 1em; tekee painikkeiden sisällä olevasta tekstistä helposti luettavaa.
  - **Transition**: transition: background-color 0.3s ease, transform 0.2s ease; varmistaa sujuvat hover- ja klikkaustehosteet.
- **Tärkeä yksityiskohta**: Painikkeet on suunniteltu erottuviksi ja vuorovaikutteisiksi, niiden sujuvilla siirtymillä ja selkeillä etiketeillä, jotka parantavat käytettävyyttä.

## 8. Button Hover Effect (button:hover):

- **Mikä se on**: Hover-efekti aktivoituu, kun käyttäjä vie hiiren painikkeen päälle.
- **Tarkoitus**:
  - **Background Color**: background-color: #0056b3; tummentaa painikkeen taustaa hover-tilassa, tarjoten visuaalista palautetta käyttäjälle.
  - **Transform**: transform: translateY(-2px); nostaa painiketta hieman, luoden dynaamisen, 3D-efektin.
- **Tärkeä yksityiskohta**: Hover-efekti parantaa painikkeiden vuorovaikutteisuutta, tehden sovelluksesta responsiivisen ja tarjoten selkeää palautetta käyttäjälle.

## 9. Pause Button Styling (<code><</code>button.pause>):

- **Mikä se on**: .pause-luokka antaa pause-painikkeelle erottuvan värin.
- **Tarkoitus**: background-color: #ffc107; soveltaa keltaista taustaväriä pause-painikkeelle, erottamalla sen visuaalisesti muista painikkeista.
- **Tärkeä yksityiskohta**: Käyttämällä erottuvaa väriä pause-painikkeelle helpotetaan käyttäjiä erottamaan eri toiminnot (Start, Pause, Stop).

## 10. Stop Button Styling (<code><</code>button.stop>):

- **Mikä se on**: .stop-luokka antaa stop-painikkeelle punaisen värin.
- **Tarkoitus**: background-color: #dc3545; käyttää punaista taustaa stop-painikkeelle, tehden siitä helposti tunnistettavan toiminnon ajastimen pysäyttämiseksi.
- **Tärkeä yksityiskohta**: Punainen väri merkitsee tärkeämpää tai lopullisempaa toimintoa, kiinnittäen käyttäjän huomion, kun ajastin halutaan nollata.

## 11. Result Div (.result) [Not used in this case, but useful for future functionality]:

- **Mikä se on**: Tämä luokka tyylittää minkä tahansa tulos- tai palautetekstin, joka näytetään ajastimen päätyttyä (esim. "Aika pitää tauko!").
- **Tärkeä yksityiskohta**: Tulosten erillinen muotoilu mahdollistaa paremman hallinnan siitä, miten palaute näytetään Pomodoro-session päättyessä.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener:

- **Mikä se on**: document.addEventListener('DOMContentLoaded', ...) on tapahtumakuuntelija, joka odottaa, että koko HTML-dokumentti on ladattu ja jäsennelty ennen JavaScript-koodin suorittamista.
- **Tarkoitus**: Tämä varmistaa, että JavaScript on vuorovaikutuksessa DOM-elementtien kanssa (kuten ajastinnäyttö ja painikkeet) vasta, kun ne ovat saatavilla sivulla. Ilman tätä skripti saattaa yrittää käsitellä elementtejä, joita ei ole vielä renderöity, mikä voi aiheuttaa virheitä.
- **Tärkeä yksityiskohta**: Tämä tapahtumakuuntelija varmistaa, että JavaScript-funktiot toimivat oikein odottamalla sivun latautumista ennen DOMin käyttämistä tai muuttamista.

## 2. Selecting DOM Elements:

- **Mikä se on**: Useat document.getElementById()-kutsut haetaan viittaamaan tärkeisiin sivun elementteihin:
  - **timerElement**: Viittaa <code><</code>div>-elementtiin, joka näyttää jäljellä olevan ajan.
  - **startButton**: Viittaa painikkeeseen, jolla ajastin käynnistetään.
  - **pauseButton**: Viittaa painikkeeseen, jolla ajastin pysäytetään.
  - **stopButton**: Viittaa painikkeeseen, jolla ajastin pysäytetään ja nollataan.
- **Tarkoitus**: Nämä viittaukset sallivat JavaScript-koodin vuorovaikuttaa DOM-elementtien kanssa, kuten päivittää ajastimen näyttöä tai liittää tapahtumakuuntelijoita painikkeisiin.
- **Tärkeä yksityiskohta**: DOM-elementtien tehokas valinta varmistaa, että skripti voi muokata niitä dynaamisesti (esim. ajastimen päivittäminen tai vastaaminen painikkeen napsautuksiin).

## 3. Timer Variables (timer, isRunning, timeLeft):

- **Mikä se on**: Määritellään muuttujia ajastimen tilan hallintaan:
  - **timer**: Tallentaa setInterval()-ID:n, jolloin ajastin voidaan pysäyttää tai nollata.
  - **isRunning**: Totuusarvo, joka seuraa, onko ajastin käynnissä, estäen useiden intervallien luomisen samanaikaisesti.
  - **timeLeft**: Edustaa jäljellä olevaa aikaa sekunneissa (alustetaan 25 minuuttiin tai 1500 sekuntiin).
- **Tarkoitus**: Nämä muuttujat hallitsevat ajastimen toimintaa ja tilaa, mahdollistaen sen käynnistämisen, tauottamisen ja nollaamisen tehokkaasti.
- **Tärkeä yksityiskohta**: Ajastimen tilan seuraaminen muuttujien avulla varmistaa tarkan hallinnan siitä, milloin ajastin on aktiivinen, tauolla tai nollattu.

## 4. updateTimerDisplay Function:

- **Mikä se on**: Funktio, joka muuntaa timeLeft-arvon (sekunteina) minuuteiksi ja sekunneiksi ja päivittää timerElementin tekstisisällön.
- **Tarkoitus**: Tämä funktio muotoilee jäljellä olevan ajan ja päivittää ajastinnäytön muotoon MM:SS. Se varmistaa, että käyttäjä näkee jäljellä olevan ajan helposti luettavassa muodossa.
- **Tärkeä yksityiskohta**: .toString().padStart(2, '0') -menetelmän käyttö varmistaa, että sekä minuutit että sekunnit näytetään aina kahdella numerolla, vaikka ne olisivat alle 10 (esim. "05:07").

## 5. startTimer Function:

- **Mikä se on**: Tämä funktio käynnistää ajastimen laskennan käyttämällä setInterval()-komentoa, joka vähentää timeLeft-arvoa 1 sekunnilla säännöllisin välein ja päivittää näytön vastaavasti.
- **Keskeiset osat**:
  - **isRunning Check**: Estää ajastimen käynnistämisen useita kertoja samanaikaisesti, välttäen useiden intervallien käynnistymisen yhtä aikaa.
  - **timeLeft Check**: Varmistaa, että aikaa vähennetään vain, jos se on suurempi kuin 0. Kun aika saavuttaa 0, intervalli pysäytetään, ja käyttäjälle ilmoitetaan, että työjakso on päättynyt.
  - **Break Timer**: Kun 25 minuutin työjakso päättyy, ajastin nollataan automaattisesti 5 minuutin taukoon, ja taukoajastin alkaa.
- **Tarkoitus**: Tämä funktio aloittaa ajastuksen ja varmistaa, että ajastin käyttäytyy oikein sekä työ- että taukojaksolla.
- **Tärkeä yksityiskohta**: clearInterval()-komennon käyttö varmistaa, että ajastin pysäytetään oikein, kun se saavuttaa 0, estäen sen juoksemisen loputtomiin.

## 6. pauseTimer Function:

- **Mikä se on**: Tämä funktio keskeyttää ajastimen kutsumalla clearInterval()-komentoa, mikä pysäyttää ajastimen laskennan ilman timeLeft-arvon nollaamista.
- **Tarkoitus**: Se mahdollistaa käyttäjän tilapäisesti pysäyttää ajastimen ja jatkaa sitä myöhemmin ilman koko työjakson nollaamista.
- **Tärkeä yksityiskohta**: Tämä funktio yksinkertaisesti pysäyttää ajastimen ilman, että jäljellä olevaa aikaa nollataan, varmistaen, että työjakso voi jatkua myöhemmin.

## 7. stopTimer Function:

- **Mikä se on**: Tämä funktio pysäyttää ajastimen ja nollaa timeLeft-arvon takaisin oletusarvoon, 25 minuuttia (1500 sekuntia).
- **Tarkoitus**: Se nollaa koko ajastimen ja päivittää näytön, jolloin käyttäjä voi aloittaa uuden Pomodoro-session alusta.
- **Tärkeä yksityiskohta**: Kuten pause-toiminnossa, clearInterval() pysäyttää ajastimen, mutta tässä tapauksessa aika nollataan alkuperäiseen arvoon, 25 minuuttia.

## 8. Event Listeners for Buttons:

- **Mikä se on**: Kolme tapahtumakuuntelijaa liitetään painikkeisiin:
  - **startButton.addEventListener('click', startTimer)**: Käynnistää ajastimen, kun käyttäjä napsauttaa "Start"-painiketta.
  - **pauseButton.addEventListener('click', pauseTimer)**: Keskeyttää ajastimen, kun käyttäjä napsauttaa "Pause"-painiketta.
  - **stopButton.addEventListener('click', stopTimer)**: Pysäyttää ajastimen ja nollaa sen, kun käyttäjä napsauttaa "Stop"-painiketta.
- **Tarkoitus**: Nämä tapahtumakuuntelijat varmistavat, että käyttäjä voi hallita ajastinta napsauttamalla painikkeita. Jokainen painike on linkitetty tiettyyn funktioon, joka hallinnoi ajastimen käyttäytymistä.
- **Tärkeä yksityiskohta**: Tapahtumakuuntelijat mahdollistavat sovelluksen vastaamisen käyttäjän toimintoihin (napsautuksiin), mikä tekee ajastimesta interaktiivisen.

## 9. Initial Call to updateTimerDisplay:

- **Mikä se on**: updateTimerDisplay() kutsutaan kerran, kun sivu ladataan ensimmäisen kerran, jotta varmistetaan, että alkuperäinen aika (25:00) näytetään.
- **Tarkoitus**: Tämä varmistaa, että ajastin alkaa näkyvällä arvolla, kun sivu ladataan, sen sijaan, että se olisi tyhjä tai virheellinen.
- **Tärkeä yksityiskohta**: Tämä alustava vaihe varmistaa, että käyttäjä näkee oikean oletusajan ennen kuin sovellukseen tehdään mitään vuorovaikutusta.
