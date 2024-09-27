# Nettisivu: https://keudaope.github.io/JSProjekteja/P33_Mood_Tracker

# **Johdanto**

Mood Tracker on käytännöllinen ja interaktiivinen sovellus, jonka avulla käyttäjät voivat kirjata ja seurata päivittäisiä mielialojaan. Tämä projekti on täydellinen aloittelijoille, jotka opettelevat JavaScriptiä, HTML:ää ja CSS:ää, sillä se sisältää keskeisiä ominaisuuksia, kuten DOM-manipulaation, käyttäjän syötteen käsittelyn ja tietojen tallennuksen localStorageen. Käyttäjät voivat valita mielialansa pudotusvalikosta ja seurata tunteitaan joka päivä, ja sovellus näyttää mieliala-historian visuaalisesti miellyttävässä lokissa. Mood Tracker ei tarjoa pelkästään hauskaa tapaa pohtia tunnekuvioita, vaan myös arvokasta harjoitusta koodaamisessa, mukaan lukien dynaamisten käyttöliittymien luominen ja tietojen paikallinen tallennus pysyvyyden takaamiseksi eri istuntojen välillä.

# **HTML Selitys**

## 1. DOCTYPE-ilmoitus (<code><</code>!DOCTYPE html>)

- **Mikä se on:** <code><</code>!DOCTYPE html -ilmoitus osoittaa, että dokumentti on kirjoitettu HTML5:llä.
- **Tarkoitus:** Se varmistaa, että selain tulkitsee verkkosivun modernien HTML5-standardien mukaisesti.
- **Tärkeä yksityiskohta:** DOCTYPE-ilmoituksen sisällyttäminen varmistaa, että selaimet renderöivät sivun standarditilassa, estäen ongelmat vanhojen tai virhetilojen renderöinnissä.

## 2. HTML-tagi (<code><</code>html lang="en">)

- **Mikä se on:** <code><</code>html-tagi on juurielementti, joka käärii kaikki muut HTML-elementit sivulla. lang="en" -attribuutti määrittää, että dokumentin kieli on englanti.
- **Tarkoitus:** Lang-attribuutti on tärkeä saavutettavuustyökaluille ja hakukoneille, koska se ilmoittaa dokumentin ensisijaisen kielen.
- **Tärkeä yksityiskohta:** Kielen määrittäminen parantaa saavutettavuutta ja hakukoneoptimointia (SEO).

## 3. Head-tagi (<code><</code>head>)

- **Mikä se on:** <code><</code>head-osio sisältää metatiedot ja linkit ulkoisiin resursseihin, kuten tyylitiedostoihin ja fontteihin.
- **Tarkoitus:** Se mahdollistaa selaimen lataamaan tarvittavat tiedot, kuten CSS-tyylit, fontit ja metatiedot, ennen sisällön renderöintiä.
- **Tärkeät yksityiskohdat:**
  - **Meta Charset:** (<code><</code>meta charset="UTF-8">) määrittää merkistökoodauksen UTF-8:ksi, joka tukee laajaa valikoimaa merkkejä ja symboleita.
  - **Viewport Meta Tag:** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">) varmistaa, että sovellus on responsiivinen ja skaalaa sisällön oikein eri näyttökoissa.
  - **Title-tagi:** (<code><</code>title>Mood Tracker<code><</code>/title>) asettaa tekstin, joka näkyy selaimen välilehdessä ja osoittaa sivun tarkoituksen.
  - **Google Fonts -linkki:** (<code><</code>link href="[https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap](https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap)" rel="stylesheet">) lataa "Poppins"-fontin Google Fontsista modernia typografiaa varten.

## 4. Body-tagi (<code><</code>body>)

- **Mikä se on:** <code><</code>body-tagi sisältää kaiken verkkosivulla näkyvän sisällön, kuten otsikot, lomakkeet ja painikkeet.
- **Tarkoitus:** <code><</code>body on osio, johon kaikki interaktiivinen ja visuaalinen sisältö sijoitetaan. Se tyylitellään CSS:n avulla ja sitä käsitellään JavaScriptillä.
- **Tärkeä yksityiskohta:** Body sisältää koko Mood Tracker -käyttöliittymän säiliön, tehden siitä pääalueen käyttäjän vuorovaikutuksille.

## 5. Container-divi (<code><</code>div class="container">)

- **Mikä se on:** <code><</code>div-elementti, jossa on container-luokka, käärii ydinsisällön, mukaan lukien otsikon, kuvauksen, mielialavalinnan, painikkeen ja mielialalokin.
- **Tarkoitus:** Se ryhmittelee yhteen liittyvät elementit ja soveltaa tyylittelyä asettelun ja rakenteen hallintaan.
- **Tärkeä yksityiskohta:** Container-luokka on olennainen CSS-ominaisuuksien, kuten täytteen, varjon ja keskittämisen, soveltamisessa visuaalisesti miellyttävän asettelun luomiseksi.

## 6. Otsikko (<code><</code>h1>Mood Tracker<code><</code>/h1>)

- **Mikä se on:** <code><</code>h1-tagi näyttää sivun pääotsikon "Mood Tracker".
- **Tarkoitus:** Se esittelee käyttäjälle sovelluksen tarkoituksen ja toimii keskipisteenä sivun sisällölle.
- **Tärkeä yksityiskohta:** <code><</code>h1-tagin käyttö on tärkeää SEO:n ja saavutettavuuden kannalta, sillä se edustaa sivun korkeimman tason otsikkoa.

## 7. Kuvaus-kappale (<code><</code>p>Track your mood every day!<code><</code>/p>)

- **Mikä se on:** Yksinkertainen kappale-elementti tarjoaa lyhyen kuvauksen sovelluksen tarkoituksesta.
- **Tarkoitus:** Se auttaa käyttäjiä ymmärtämään sovelluksen tarkoituksen lyhyesti ja selkeästi.
- **Tärkeä yksityiskohta:** Kuvaileva teksti on tärkeä osa käyttökokemusta, varmistaen selkeyden ja ymmärrettävyyden.

## 8. Mielialavalitsin (<code><</code>select id="mood-select">)

- **Mikä se on:** <code><</code>select-elementti tarjoaa pudotusvalikon, josta käyttäjät voivat valita mielialansa.
- **Tarkoitus:** Se sallii käyttäjien valita ennalta määritellyistä mielialoista, kuten "happy", "sad", "angry" jne.
- **Tärkeä yksityiskohta:** id="mood-select" mahdollistaa tämän elementin yksilöinnin JavaScript-toimintaa varten, jolloin valittu arvo voidaan helposti noutaa.

## 9. Lähetä-painike (<code><</code>button id="submit-button">Track Mood<code><</code>/button>)

- **Mikä se on:** <code><</code>button-elementti edustaa klikattavaa painiketta, jota käyttäjät käyttävät mielialan kirjaamiseen.
- **Tarkoitus:** Se käynnistää JavaScript-funktion, joka käsittelee ja kirjaa valitun mielialan.
- **Tärkeä yksityiskohta:** id="submit-button" mahdollistaa, että JavaScript liittää tapahtumankuuntelijan käsittelemään klikkaustapahtumaa.

## 10. Mielialaloki-divi (<code><</code>div class="mood-log" id="mood-log">)

- **Mikä se on:** Tyhjä <code><</code>div-elementti, jossa on mood-log-luokka, toimii säiliönä kirjatun mielialan näyttämiseksi.
- **Tarkoitus:** Se päivittyy dynaamisesti näyttämään aiemmin kirjatut mielialat jokaisen käyttäjän vuorovaikutuksen jälkeen.
- **Tärkeä yksityiskohta:** Tämä elementti on keskeinen käyttäjätietojen tallentamisessa ja näyttämisessä, tehden mielialahistorian näkyväksi.

## 11. Script-tagi (<code><</code>script src="app.js"><code><</code>/script>)

- **Mikä se on:** <code><</code>script-tagi linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää Mood Trackerin toiminnallisuuden.
- **Tarkoitus:** Se erottaa logiikan (JavaScript) rakenteesta (HTML), noudattaen parhaita käytäntöjä pitämällä koodi modulaarisena ja järjestettynä.
- **Tärkeä yksityiskohta:** JavaScriptin sisällyttäminen ulkoisesti parantaa HTML-tiedoston selkeyttä ja helpottaa sovelluksen ylläpitoa ja laajentamista.

# **CSS Selitys**

## 1. Global Reset (\*)

- **Mikä se on:** Universaali valitsin (\*) kohdistaa kaikkiin sivun elementteihin.
- **Tarkoitus:** Se nollaa kaikkien elementtien oletusmarginaalit ja -täytteet varmistaen yhtenäiset välimatkat eri selaimissa. **box-sizing: border-box;** varmistaa, että täyte ja reunukset sisältyvät elementtien leveyden ja korkeuden laskelmiin, mikä helpottaa asettelun hallintaa.
- **Tärkeä yksityiskohta:** Tämä nollaus poistaa eroja elementtien renderöinnissä eri selaimissa ja tarjoaa puhtaan lähtökohdan tyylittelylle.

## 2. Body-tyylitys (body)

- **Mikä se on:** Body-sääntö määrittää sivun rungon yleisen asettelun ja ulkoasun.
- **Tärkeät ominaisuudet:**
  - **font-family:** 'Poppins', sans-serif;: Soveltaa "Poppins"-fonttia, joka tarjoaa modernin ja puhtaan typografian koko sovelluksessa.
  - **background:** linear-gradient(135deg, #74ebd5, #acb6e5);: Lisää diagonaalisen gradienttitaustan, joka siirtyy turkoosista vaaleansiniseen, antaen sovellukselle visuaalisesti houkuttelevan ja raikkaan ilmeen.
  - **display:** flex; justify-content: center; align-items: center;: Käyttää Flexboxia keskittääkseen pääsäiliön sekä pysty- että vaakasuunnassa, varmistaen, että sovellus on hyvin sijoitettu näkymän keskelle.
  - **height:** 100vh;: Varmistaa, että body-elementti vie koko näkymän korkeuden, mahdollistaen sisällön keskittämisen oikein.
- **Tarkoitus:** Nämä tyylit varmistavat, että sovellus on keskitetty ja visuaalisesti houkutteleva kaikilla näyttökoilla, luoden viimeistellyn ja tasapainoisen asettelun.

## 3. Container-tyylitys (.container)

- **Mikä se on:** .container-luokka tyylittää pääsäiliön, joka sisältää ydinsisällön, mukaan lukien otsikon, pudotusvalikon, painikkeen ja mielialalokin.
- **Tärkeät ominaisuudet:**
  - **background-color:** #fff;: Asettaa säiliön taustaväriksi valkoisen, luoden puhtaan kontrastin gradienttitaustaa vasten.
  - **padding:** 40px;: Lisää sisäistä tilaa sisällön ympärille mukavamman ja luettavamman asettelun aikaansaamiseksi.
  - **border-radius:** 12px;: Pyöristää säiliön kulmat modernin ja pehmeän ulkoasun saavuttamiseksi.
  - **box-shadow:** 0 15px 25px rgba(0, 0, 0, 0.1);: Lisää hienovaraisen varjon säiliön ympärille, antaen sille syvyyttä ja saaden sen erottumaan.
  - **text-align:** center;: Varmistaa, että kaikki säiliön sisällä oleva teksti ja elementit ovat keskitettyjä.
  - **max-width:** 400px; width: 100%;: Määrittää maksimi- ja leveyssuhteet, jotta säiliö on responsiivinen ja mukautuu eri näyttöihin.
- **Tarkoitus:** Nämä tyylit antavat säiliölle korttimaisen ulkoasun, jossa on selkeät rajat ja visuaalista syvyyttä, parantaen käyttökokemusta ja luettavuutta.

## 4. Otsikon tyylitys (h1)

- **Mikä se on:** H1-sääntö tyylittää sivun pääotsikon.
- **Tärkeät ominaisuudet:**
  - **font-size:** 2.5em;: Suurentaa otsikon kokoa, jotta se on näkyvä ja helposti luettavissa.
  - **color:** #2c3e50;: Asettaa tumman värin kontrastin ja visuaalisen korostuksen vuoksi.
  - **margin-bottom:** 20px;: Lisää tilaa otsikon alle erottaen sen muista elementeistä.
- **Tarkoitus:** Otsikko toimii visuaalisena keskipisteenä ja esittelee sovelluksen käyttäjälle, asettaen käyttöliittymän sävyn.

## 5. Kappaleen tyylitys (<code>p)

- **Mikä se on:** P-sääntö tyylittää kappaleen, joka kuvaa sovelluksen tarkoitusta.
- **Tärkeät ominaisuudet:**
  - **font-size:** 1.2em;: Määrittää hieman suuremman tekstikoon luettavuuden parantamiseksi.
  - **color:** #555;: Soveltaa pehmeän harmaan värin toissijaiseen tekstiin, varmistaen, ettei se dominoi otsikkoa mutta on silti luettavissa.
  - **margin-bottom:** 30px;: Lisää tilaa kappaleen alle tasapainoisen asettelun säilyttämiseksi.
- **Tarkoitus:** Tämä tyylitys varmistaa, että kuvaus on visuaalisesti erottuva mutta harmoniassa muun suunnittelun kanssa.

## 6. Pudotusvalikon (select) tyylitys

- **Mikä se on:** Select-sääntö tyylittää pudotusvalikon, josta käyttäjät valitsevat mielialansa.
- **Tärkeät ominaisuudet:**
  - **width:** 100%;: Varmistaa, että pudotusvalikko venyy säiliön täyteen leveyteen.
  - **padding:** 12px;: Lisää mukavaa täytettä, mikä parantaa käyttökokemusta.
  - **border-radius:** 8px;: Pyöristää pudotusvalikon kulmat, jotta se sopii yleiseen muotoiluun.
  - **border:** 1px solid #ccc;: Soveltaa kevyttä reunusta selkeyden vuoksi.
  - **margin-bottom:** 20px;: Tarjoaa tilaa pudotusvalikon alle erottaen sen muista elementeistä.
  - **font-size:** 1em; **text-align:** center;: Varmistaa, että pudotusvalikon teksti on luettavissa ja keskitetty.
  - **background-color:** #f9f9f9;: Asettaa vaalean taustavärin puhtaan ja modernin ilmeen saavuttamiseksi.
  - **cursor:** pointer;: Muuttaa kursorin osoittimeksi, osoittaen, että pudotusvalikko on interaktiivinen.
  - **transition:** border-color 0.3s ease;: Lisää sujuvan siirtymäefektin, kun reunuksen väri muuttuu kohdistettaessa.
- **Tarkoitus:** Pudotusvalikko on suunniteltu visuaalisesti yhteensopivaksi sovelluksen kanssa, ja siinä on sujuvat vuorovaikutusefektit sekä selkeää visuaalista palautetta.

## 7. Pudotusvalikon fokus-efekti (select:focus)

- **Mikä se on:** Select sääntö aktivoituu, kun pudotusvalikko on kohdistettuna (klikattu tai napautettu).
- **Tärkeät ominaisuudet:**
  - **border-color:** #007bff;: Muuttaa reunuksen värin siniseksi kohdistettaessa, tarjoten visuaalista palautetta.
  - **outline:** none;: Poistaa selaimen oletuskehykset puhtaamman ilmeen vuoksi.
- **Tarkoitus:** Nämä tyylit parantavat käyttäjän vuorovaikutusta osoittamalla visuaalisesti, milloin pudotusvalikko on aktiivinen, parantaen käyttökokemusta.

## 8. Painikkeen tyylitys (button)

- **Mikä se on:** Button-sääntö tyylittää "Track Mood" -painikkeen.
- **Tärkeät ominaisuudet:**
  - **background-color:** #007bff;: Asettaa eloisan sinisen taustavärin, joka tekee painikkeesta näkyvän.
  - **color:** white;: Varmistaa, että painikkeen teksti on selkeästi näkyvissä.
  - **padding:** 12px 30px;: Lisää reilusti täytettä paremman klikkattavuuden ja visuaalisen vetovoiman takaamiseksi.
  - **border-radius:** 8px;: Pyöristää painikkeen kulmat, jotta se sopii suunnittelukieleen.
  - **cursor:** pointer;: Muuttaa kursorin osoittimeksi osoittaen, että painike on klikattavissa.
  - **transition:** background-color 0.3s ease, transform 0.2s ease;: Lisää sujuvat hover- ja klikkausanimaatiot.
- **Tarkoitus:** Nämä tyylit tekevät painikkeesta visuaalisesti houkuttelevan ja helppokäyttöisen, rohkaisten käyttäjää vuorovaikutukseen.

## 9. Painikkeen hover-efekti (button:hover)

- **Mikä se on:** Button sääntö aktivoituu, kun käyttäjä vie hiiren painikkeen päälle.
- **Tärkeät ominaisuudet:**
  - **background-color:** #0056b3;: Tummuttaa painikkeen taustaväriä hover-tilassa.
  - **transform:** translateY(-2px);: Lisää pienen nostovaikutuksen interaktiivisuuden parantamiseksi.
- **Tarkoitus:** Tämä hover-efekti tarjoaa visuaalista palautetta, mikä tekee painikkeesta interaktiivisemman ja houkuttelevamman.

## 10. Painikkeen aktiivinen efekti (button:active)

- **Mikä se on:** Button sääntö aktivoituu, kun painiketta klikataan tai painetaan.
- **Tärkeät ominaisuudet:**
  - **background-color:** #004494;: Tummentaa painikkeen taustaa entisestään, kun sitä painetaan.
  - **transform:** translateY(1px);: Lisää hienovaraisen "painallus"-efektin.
- **Tarkoitus:** Tämä aktiivinen tila jäljittelee fyysistä palautetta, parantaen kokonaisvaltaista käyttökokemusta.

## 11. Mood Log -tyylitys (.mood-log)

- **Mikä se on:** .Mood-log-luokka tyylittää säiliön, joka pitää kirjaa mielialan merkinnöistä.
- **Tärkeät ominaisuudet:**
  - **margin-top:** 30px;: Lisää tilaa mielialalokin yläpuolelle erottaen sen muista elementeistä.
  - **text-align:** left;: Kohdistaa mielialamerkinnät vasemmalle luettavuuden parantamiseksi.
  - **font-size:** 1.2em;: Varmistaa, että mielialamerkinnät ovat luettavissa ja näkyviä.
  - **color:** #333;: Soveltaa tummaa tekstiväriä selkeyden vuoksi.
- **Tarkoitus:** Tämä osio näyttää käyttäjän kirjaamat mielialat selkeällä ja järjestelmällisellä tavalla.

## 12. Mood Entry -tyylitys (.mood-entry)

- **Mikä se on:** .Mood-entry-luokka tyylittää jokaisen yksittäisen mielialamerkinnän lokissa.
- **Tärkeät ominaisuudet:**
  - **background-color:** #f8f8f8;: Tarjoaa vaalean taustan, joka erottaa jokaisen merkinnän.
  - **padding:** 10px;: Lisää täytettä luettavuuden ja tilan lisäämiseksi merkinnän sisällä.
  - **margin-bottom:** 10px;: Lisää välimatkaa mielialamerkintöjen välille.
  - **border-radius:** 8px;: Pyöristää kulmat yhtenäisen muotoilun saavuttamiseksi.
  - **border:** 1px solid #ccc;: Lisää kevyen reunuksen selkeyden vuoksi.
  - **display:** flex; justify-content: space-between; align-items: center;: Käyttää Flexboxia mielialamerkinnän päivämäärän ja kuvakkeen siistiin kohdistamiseen.
- **Tarkoitus:** Jokainen mielialamerkintä on visuaalisesti erillinen ja selkeästi esillä, mikä tekee käyttäjien mielialojen seuraamisesta helppoa.

## 13. Päivämäärän tyylitys (.mood-date)

- **Mikä se on:** .Mood-date-luokka tyylittää päivämäärän, joka näkyy jokaisen mielialamerkinnän vieressä.
- **Tärkeät ominaisuudet:**
  - **font-size:** 0.9em;: Tekee päivämäärätekstistä hieman pienemmän kuin mielialatekstin.
  - **color:** #777;: Soveltaa hillityn värin toissijaista tietoa varten.
- **Tarkoitus:** Tämä varmistaa, että päivämäärä on luettavissa, mutta se ei varjosta mielialatietoja.

# **JavaScript Selitys**

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...});)

- **Mikä se on:** Tämä on tapahtumankuuntelija, joka odottaa koko HTML-dokumentin latautumista ennen kuin callback-funktion sisällä oleva skripti suoritetaan.
- **Tarkoitus:** Se varmistaa, että kaikki HTML-elementit (kuten mielialavalitsin ja painikkeet) ovat ladattuja ja saatavilla DOM:ssa ennen kuin JavaScript vuorovaikuttaa niiden kanssa. Tämä estää virheitä, jotka voivat ilmetä, jos skripti suoritetaan ennen sivun täydellistä renderöintiä.
- **Tärkeä yksityiskohta:** DOMContentLoaded-tapahtuman käyttäminen takaa, että sovellus alkaa toimia vasta, kun koko sivu on jäsennetty, varmistaen sujuvan käyttökokemuksen.

## 2. DOM-elementtien valinta (const moodSelect = document.getElementById('mood-select');)

- **Mikä se on:** Tämä rivi valitsee <code><</code>select-pudotusvalikon, jossa käyttäjä valitsee mielialansa sen id-attribuutin perusteella.
- **Tarkoitus:** Se mahdollistaa JavaScriptin hakea valitun mielialan arvon, kun käyttäjä lähettää valintansa. Tämä arvo käytetään myöhemmin käyttäjän mielialan tallentamiseen ja näyttämiseen.
- **Tärkeä yksityiskohta:** Valinta tallennetaan moodSelect-muuttujaan, jolloin arvo on helposti saatavilla aina, kun sitä tarvitaan.

## 3. Painikkeen valinta (const submitButton = document.getElementById('submit-button');)

- **Mikä se on:** Tämä rivi valitsee "Track Mood" -painikkeen sen id-attribuutin perusteella.
- **Tarkoitus:** Se mahdollistaa JavaScriptin liittää tapahtumankuuntelijan painikkeeseen, jolloin funktio käynnistyy, kun käyttäjä klikkaa sitä ja kirjaa mielialan.
- **Tärkeä yksityiskohta:** Painike on pääasiallinen interaktiivinen elementti, joka aloittaa mielialan seurantaprosessin.

## 4. Mood Log -valinta (const moodLog = document.getElementById('mood-log');)

- **Mikä se on:** Tämä valitsee tyhjän <code><</code>div-elementin, johon kirjatut mielialat näytetään.
- **Tarkoitus:** Se tarjoaa säiliön, johon mielialamerkinnät lisätään dynaamisesti, kun käyttäjä seuraa mielialaansa. Kirjatut mielialat näkyvät tässä yksittäisinä merkintöinä.
- **Tärkeä yksityiskohta:** Viittaamalla moodLog-elementtiin JavaScript voi dynaamisesti luoda ja lisätä uusia mielialamerkintöjä tähän säiliöön.

## 5. Mielialan seuranta -tapahtumankuuntelija (submitButton.addEventListener('click', logMood);)

- **Mikä se on:** Tämä rivi lisää tapahtumankuuntelijan submit-painikkeeseen, joka kuuntelee klikkaustapahtumaa. Kun painiketta klikataan, logMood-funktio suoritetaan.
- **Tarkoitus:** Se käynnistää käyttäjän mielialan kirjausprosessin aina, kun "Track Mood" -painiketta klikataan.
- **Tärkeä yksityiskohta:** addEventListener-funktio varmistaa, että mieliala kirjataan vain, kun käyttäjä vuorovaikuttaa painikkeen kanssa.

## 6. Log Mood -funktio (function logMood() {...})

- **Mikä se on:** Tämä funktio kutsutaan, kun "Track Mood" -painiketta klikataan. Se hakee valitun mielialan ja tallentaa sen nykyisen päivämäärän kanssa.
- **Vaiheet:**
  - Hakee valitun mielialan pudotusvalikosta käyttäen **moodSelect.value**.
  - Luo uuden div-elementin edustamaan mielialamerkintää.
  - Lisää mielialamerkinnälle **mood-entry**-luokan tyylittelyä varten.
  - Luo JavaScriptin Date-objektilla päivämäärämerkkijonon, joka edustaa nykyistä päivämäärää.
  - Lisää mielialan ja päivämäärän uuteen div-merkintään.
  - Liittää mielialamerkinnän moodLog-säiliöön, jolloin uusi kirjaus näkyy sivulla.
- **Tarkoitus:** Tämä funktio käsittelee sovelluksen ydintoiminnon, eli kirjaa valitun mielialan ja näyttää sen mielialalokissa. Se luo dynaamisesti uusia elementtejä ja päivittää DOM:n, jotta käyttäjän mieliala näkyy.
- **Tärkeä yksityiskohta:** Tämä funktio päivittää sovelluksen käyttöliittymää dynaamisesti ilman sivun uudelleenlatausta, tehden siitä interaktiivisen ja saumattoman.

## 7. Mielialamerkinnän luominen (const moodEntry = document.createElement('div');)

- **Mikä se on:** Tämä rivi luo uuden div-elementin, joka toimii säiliönä jokaiselle yksittäiselle mielialamerkinnälle.
- **Tarkoitus:** Div toimii mielialan ja päivämäärän säiliönä, jolloin jokainen merkintä voidaan tyylitellä ja näyttää erillisesti.
- **Tärkeä yksityiskohta:** Tämä on kohta, jossa uudet mielialamerkinnät luodaan dynaamisesti, varmistaen, että sovellus pysyy interaktiivisena.

## 8. Päivämäärän luominen (const date = new Date().toLocaleDateString();)

- **Mikä se on:** Tämä rivi luo uuden Date-objektin käyttäen JavaScriptin Date-konstuktoria ja muotoilee sen ihmisten luettavaksi merkkijonoksi, jossa on nykyinen päivämäärä.
- **Tarkoitus:** Se tallentaa päivämäärän, jolloin käyttäjä kirjasi mielialansa, mahdollistaen mielialojen seuraamisen ajan kuluessa.
- **Tärkeä yksityiskohta:** **toLocaleDateString()**-metodi muotoilee päivämäärän käyttäjän sijainnin perusteella, varmistaen sen oikean näyttämisen eri alueilla.

## 9. Mielialan ja päivämäärän lisääminen lokiin (moodEntry.innerHTML = ...)

- **Mikä se on:** Tämä rivi lisää valitun mielialan ja nykyisen päivämäärän juuri luotuun div-elementtiin. Se käyttää mallimerkkijonoa täyttääkseen dynaamisesti merkinnän HTML-sisällön.
- **Tarkoitus:** Se päivittää mielialamerkinnän sekä mielialalla että päivämäärällä, tarjoten täydellisen lokin käyttäjän mieliala-historiasta.
- **Tärkeä yksityiskohta:** **innerHTML**-ominaisuus mahdollistaa dynaamisen sisällön lisäämisen, luoden täysin toimivan lokimerkinnän jokaisella klikkauksella.

## 10. Lisääminen Mood Logiin (moodLog.appendChild(moodEntry);)

- **Mikä se on:** Tämä rivi liittää juuri luodun mielialamerkinnän moodLog-säiliöön, tehden siitä näkyvän sivulla.
- **Tarkoitus:** Se päivittää käyttöliittymän heijastamaan uutta mielialamerkintää, näyttäen käyttäjälle mieliala-historian.
- **Tärkeä yksityiskohta:** **appendChild**-metodi lisää uuden mielialamerkinnän DOM:iin, tehden käyttöliittymästä dynaamisen ja interaktiivisen.

## 11. Local Storage -ominaisuus (valinnainen parannus)

- **Mikä se on:** Tämä voi olla lisäominaisuus, jossa mielialat tallennetaan **localStorage**-muistiin, mahdollistaen käyttäjän mielialalokin palauttamisen, vaikka selain suljettaisiin.
- **Tarkoitus:** Se parantaa sovellusta tekemällä mielialalokeista pysyviä istuntojen välillä.
- **Tärkeä yksityiskohta:** Tämä voidaan saavuttaa tallentamalla mielialalokitaulukko JSON-merkkijonona **localStorage**:en ja lataamalla se sivun latautuessa.
