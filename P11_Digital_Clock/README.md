# Nettisivu: https://keudaope.github.io/JSProjekteja/P11_Digital_Clock

# HTML selitys

# Johdanto

Digitaalinen kello -sovellus näyttää nykyisen ajan digitaalisessa muodossa, päivittyen sekunnin välein. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää sekä oppimaan, kuinka käyttää aika- ja päivämääräfunktioita, käsitellä aikavälejä ja päivittää DOM dynaamisesti. Käyttäjät voivat nähdä nykyisen ajan selkeässä ja tarkassa digitaalisessa muodossa.

# HTML selitys

## 1. DOCTYPE Declaration (&lt;!DOCTYPE html>):

- **Mikä se on:** &lt;!DOCTYPE html> -ilmoitus kertoo selaimelle, että tämä on HTML5-dokumentti.
- **Tarkoitus:** Se varmistaa, että dokumentti renderöidään standardien mukaisessa tilassa, mikä varmistaa, että modernit HTML5-ominaisuudet toimivat odotetusti.
- **Tärkeä yksityiskohta:** Sisällytä aina DOCTYPE HTML-tiedoston alkuun välttääksesi yhteensopivuusongelmat eri selainten kanssa.

## 2. HTML Tag (&lt;html lang="en">):

- **Mikä se on:** &lt;html>-elementti on dokumentin juuri ja kietoo kaiken verkkosivun sisällön. lang="en" -attribuutti määrittää, että sisältö on englanniksi.
- **Tarkoitus:** Dokumentin kielen määrittäminen auttaa hakukoneita ja ruudunlukijoita ymmärtämään sivun kielen, mikä parantaa sekä hakukoneoptimointia että saavutettavuutta.
- **Tärkeä yksityiskohta:** lang-attribuutti on olennainen saavutettavuustyökalujen avulla käyttäjiä avustettaessa, erityisesti niille, jotka käyttävät ruudunlukijoita.

## 3. Head Tag (&lt;head>):

- **Mikä se on:** &lt;head>-elementti sisältää verkkosivun metatiedot, mukaan lukien linkit ulkoisiin resursseihin, merkistökoodauksen ja dokumentin otsikon.
- **Tarkoitus:** Head-elementti vastaa selaimelle tärkeän metatiedon määrittelystä, kuten siitä, miten sivu tulisi näyttää ja mitkä ulkoiset resurssit ladata.
- **Tärkeät yksityiskohdat:**
  - **&lt;meta charset="UTF-8">:** Asettaa merkistökoodaukseksi UTF-8

    , mikä mahdollistaa laajan valikoiman merkkejä, symboleita ja tekstejä eri kielistä.

  - **&lt;meta name="viewport" content="width=device-width, initial-scale=1.0">:** Varmistaa, että sivu skaalautuu oikein eri laitteilla, erityisesti mobiililaitteilla. Tämä on kriittinen responsiivisen sivun luomisessa.
  - **&lt;title>Modern Digital Clock&lt;/title>:** Määrittää sivun otsikon, joka näkyy selainvälilehdessä. "Modern Digital Clock" kuvaa sivun tarkoituksen selkeästi.

## 4. Google Fonts Link (&lt;link>):

- **Mikä se on:** &lt;link>-elementti yhdistää HTML-dokumentin ulkoiseen resurssiin, tässä tapauksessa Google Fonts -palveluun.
- **Tarkoitus:** Se tuo "Orbitron"-fontin Google Fonts -palvelusta antaen kellolle futuristisen, digitaalisen estetiikan.
- **Tärkeä yksityiskohta:** Linkittämällä Google Fonts -palveluun varmistat, että fontti ladataan verkkosivulle ilman tarvetta tallentaa sitä paikallisesti, mikä tekee siitä saatavilla eri laitteilla.

## 5. Body Tag (&lt;body>):

- **Mikä se on:** &lt;body>-tagi sisältää kaiken verkkosivun näkyvän sisällön, johon käyttäjä on vuorovaikutuksessa.
- **Tarkoitus:** Kaikki, mikä näkyy näytöllä (teksti, painikkeet, lomakkeet jne.), sisältyy &lt;body>-elementtiin. Se määrittää sivun rakenteen.
- **Tärkeä yksityiskohta:** Sisältö &lt;body>-tagin sisällä näkyy verkkosivulla. Se kietoo elementit kuten otsikot, kappaleet, divit ja digitaalisen kellon.

## 6. Clock Container (&lt;div class="clock-container">):

- **Mikä se on:** Tämä on &lt;div>-elementti, jossa on luokka clock-container, ja se kietoo koko digitaalisen kellon. Se toimii visuaalisena säiliönä kellolle.
- **Tarkoitus:** Säiliö auttaa ryhmittelemään sisällön yhteen, mikä helpottaa kellon tyylittelyä ja sen asettelun hallintaa sivulla. Se toimii keskitettynä elementtinä, johon voit soveltaa tyylittelyä (kuten taustaväriä, pehmustusta ja reunuksia).
- **Tärkeä yksityiskohta:** Kello kietominen säiliöön helpottaa suunnittelun hallintaa ja antaa paremman hallinnan asetteluun, pehmustukseen ja hover-tehosteisiin.

## 7. Clock Display (&lt;div id="clock">):

- **Mikä se on:** &lt;div id="clock"> on elementti, johon digitaalinen aika näytetään dynaamisesti.
- **Tarkoitus:** JavaScript-pohjainen skripti päivittää tämän elementin nykyisellä ajalla. Se alkaa tyhjänä &lt;div>-elementtinä, mutta JavaScript täyttää sen ajalla HH:MM

  .

- **Tärkeä yksityiskohta:** id="clock"-attribuutti mahdollistaa JavaScriptin kohdistamisen tähän tiettyyn elementtiin ja sen sisällön päivittämisen nykyisellä ajalla.

## 8. Script Tag (&lt;script src="app.js">):

- **Mikä se on:** &lt;script>-tagi linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää kellon logiikan.
- **Tarkoitus:** Se yhdistää HTML-dokumentin JavaScript-tiedostoon, jolloin digitaalisen kellon toiminnallisuus toteutetaan erikseen rakenteesta (HTML) ja tyylistä (CSS). JavaScript käsittelee ajan dynaamisen päivittämisen.
- **Tärkeä yksityiskohta:** Linkittämällä ulkoiseen JavaScript-tiedostoon koodi pysyy modulaarisena, mikä helpottaa ylläpitoa ja virheenkorjausta erottamalla rakenne, tyyli ja toiminnallisuus toisistaan.

# CSS selitys

## 1. Global Reset (Selector \*):

- **Mikä se on:** \* (universaali valitsin) vaikuttaa kaikkiin sivun elementteihin.
- **Tarkoitus:** Tämä sääntö nollaa oletusmarginaalit ja -pehmustukset sekä asettaa box-sizing: border-box; kaikille elementeille. Se varmistaa, että pehmustukset ja reunukset sisältyvät elementin kokonaisleveyteen ja -korkeuteen, mikä tekee asetteluista ennakoitavampia ja helpommin hallittavia.
- **Tärkeä yksityiskohta:** Globaali nollaus luo johdonmukaisen lähtökohdan kaikille elementeille eri selaimissa, estäen ei-toivotut tilankäyttö- ja asetteluongelmat.

## 2. Body Styling (body):

- **Mikä se on:** Tämä sääntö muotoilee &lt;body>-elementin, joka sisältää sivun kaiken näkyvän sisällön.
- **Tarkoitus:**
  - **Fontti:** **font-family: 'Orbitron', sans-serif;** soveltaa modernia, futuristista fonttia Google Fontsista, antaen sovellukselle digitaalisen kellon ilmeen.
  - **Tausta:** **background: radial-gradient(circle, #000000, #434343);** lisää visuaalisesti miellyttävän, pyöreän gradienttitaustan, joka siirtyy mustasta tummanharmaaseen, antaen sivulle modernin ja tyylikkään ulkonäön.
  - **Asettelu:** **display: flex; justify-content: center; align-items: center;** keskittää kellon sekä vaaka- että pystysuunnassa näytöllä käyttämällä Flexboxia.
  - **Korkeus:** **height: 100vh;** tekee body-elementistä täyden näkymäkorkeuden, varmistaen, että sisältö pysyy pystysuunnassa keskitettynä.
  - **Tekstin väri:** **color: #ffffff;** varmistaa, että kaikki sivun teksti (mukaan lukien kello) on valkoista, tarjoten vahvan kontrastin tummaa taustaa vasten.
- **Tärkeä yksityiskohta:** Flexboxia käytetään keskittämään sisältö helposti näytön keskelle, kun taas gradienttitausta luo visuaalisesti iskevän mutta yksinkertaisen tyylin.

## 3. Clock Container Styling (.clock-container):

- **Mikä se on:** Tämä sääntö muotoilee pääsäiliön, joka kietoo digitaalisen kellonäytön.
- **Tarkoitus:**
  - **Taustaväri:** **background-color: #222;** antaa säiliölle tumman, tyylikkään taustan, joka luo hyvän kontrastin neonvihreän kellotekstin kanssa.
  - **Pehmuste:** **padding: 40px;** varmistaa, että säiliössä on riittävästi sisätilaa kellon ympärillä, tehden siitä tasapainoisen ja visuaalisesti miellyttävän.
  - **Reunusten pyöristys:** **border-radius: 15px;** lisää pehmeät, pyöristetyt kulmat säiliöön, antaen sille modernin ulkonäön ja pehmeämmän tuntuman.
  - **Varjo:** **box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7);** luo varjotehosteen, antaen säiliölle syvyyttä ja saaden sen näyttämään koholla sivun pinnasta.
  - **Leveys:** **max-width: 500px;** rajoittaa säiliön leveyden pitäen sen kompaktina ja hyvin suhteutettuna erityisesti suuremmilla näytöillä.
  - **Siirtymä:** **transition: transform 0.3s ease;** mahdollistaa sujuvan skaalautumistehosteen, kun käyttäjä vie hiiren säiliön päälle, parantaen vuorovaikutteisuutta.
- **Tärkeä yksityiskohta:** Pehmusteen, reunusten pyöristyksen ja varjojen yhdistelmä luo visuaalisesti houkuttelevan, korttimaisen säiliön, joka on suosittu suunnittelumalli moderneissa verkkosovelluksissa.

## 4. Container Hover Effect (.clock-container:hover):

- **Mikä se on:** Tämä sääntö aktivoituu, kun käyttäjä vie hiiren kellosäiliön päälle.
- **Tarkoitus:** **transform: scale(1.05);** suurentaa säiliötä hieman, kun hiiren osoitin on sen päällä, luoden hienovaraisen zoomaustehosteen, joka tekee käyttöliittymästä interaktiivisemman ja dynaamisemman.
- **Tärkeä yksityiskohta:** Hover-tehoste parantaa käyttäjän vuorovaikutusta, antaen kellosäiliölle responsiivisen ja viimeistellyn tunteen ilman, että se olisi liian häiritsevä.

## 5. Clock Display Styling (.clock):

- **Mikä se on:** Tämä sääntö muotoilee &lt;div>-elementin, joka näyttää ajan (HH:MM).
- **Tarkoitus:**
  - **Fonttikoko:** **font-size: 4rem;** tekee kellonäytöstä suuren ja helposti luettavan, varmistaen, että kello on sivun keskipiste.
  - **Kirjainväli:** **letter-spacing: 5px;** lisää väliä kellon numeroiden välille, luoden puhtaan ja tyylikkään visuaalisen vaikutelman, joka korostaa digitaalista ilmettä.
  - **Tekstin väri:** **color: #0f0;** soveltaa neonvihreää väriä kellotekstiin, jäljitellen klassisen digitaalisen kellon näyttöä.
  - **Tekstin varjo:** **text-shadow: 0 0 20px rgba(0, 255, 0, 0.5);** luo hohtavan efektin tekstin ympärille, lisäten neonmaisen vaikutelman, joka vahvistaa digitaalisen kellon estetiikkaa.
- **Tärkeä yksityiskohta:** Neonvihreän värin, hehkuvan tekstivarjon ja kirjainvälin yhdistelmä tekee kellosta visuaalisesti iskevän, antaen sille modernin ja futuristisen tunnelman.

# JavaScript selitys

## 1. DOMContentLoaded Event:

- **Mikä se on:** document.addEventListener('DOMContentLoaded', ...) on tapahtumankuuntelija, joka laukeaa, kun koko HTML-dokumentti on ladattu ja parsittu selaimessa.
- **Tarkoitus:** Tämä varmistaa, että JavaScript-koodi suoritetaan vasta, kun DOM on täysin ladattu, mikä estää virheet, jotka voisivat ilmetä, jos skripti yrittää vuorovaikuttaa elementtien kanssa ennen kuin ne ovat valmiina (esimerkiksi jos kelloelementtiä ei ole vielä luotu).
- **Tärkeä yksityiskohta:** Odottamalla DOMContentLoaded-tapahtumaa varmistamme, että JavaScript toimii sujuvasti DOM-elementtien kanssa, tehden koodista kestävämmän.

## 2. Selecting the Clock Element:

- **Mikä se on:** **const clockElement = document.getElementById('clock');** valitsee DOMin &lt;div>-elementin, jolla on id="clock".
- **Tarkoitus:** Tämä mahdollistaa sen, että JavaScript voi suoraan muokata kelloelementin sisältöä ja päivittää sen ajantasaisella kellonajalla dynaamisesti.
- **Tärkeä yksityiskohta:** **clockElement**-muuttuja tallentaa viitteen HTML:n kellonäyttöön, mikä tekee sen sisällön päivittämisestä ohjelmallisesti helpompaa **updateClock**-funktiossa.

## 3. The updateClock Function:

- **Mikä se on:** **updateClock**-funktio vastaa nykyisen ajan hakemisesta, sen muotoilusta ja kellonäytön päivittämisestä.
- **Tarkoitus:** Tämä funktio suoritetaan joka sekunti, hakien nykyisen ajan Date-objektin avulla ja muuntaen tunnit, minuutit ja sekunnit muotoiltuun merkkijonoon (HH:MM). Tämä muotoiltu aika näytetään sitten **clockElement**-elementissä.
- **Tärkeät yksityiskohdat:**
  - Nykyisen ajan hakeminen: **const now = new Date();** luo uuden Date-objektin, joka antaa pääsyn nykyiseen päivämäärään ja aikaan.
  - Tuntien, minuuttien ja sekuntien muotoilu:
    - **const hours = now.getHours().toString().padStart(2, '0');** hakee nykyisen tunnin, muuntaa sen merkkijonoksi ja lisää etunollan, jos kyseessä on yksinumeroinen arvo (esim. "09" sen sijaan, että olisi "9").
    - **const minutes = now.getMinutes().toString().padStart(2, '0');** tekee saman minuuteille.
    - **const seconds = now.getSeconds().toString().padStart(2, '0');** lisää etunollan myös sekunneille varmistaen, että aika näytetään aina kaksinumeroisena.
  - Kellon näytön päivittäminen: **clockElement.textContent = `${hours}:${minutes}:${seconds}`;** asettaa kelloelementin tekstisisällöksi nykyisen ajan HH:MM:SS -muodossa.

### 4. Real-Time Updates with setInterval:

- **Mikä se on:** **setInterval(updateClock, 1000);** on funktio, joka kutsuu **updateClock**-funktiota toistuvasti 1000 millisekunnin (1 sekunnin) välein.
- **Tarkoitus:** Tämä varmistaa, että kello päivitetään reaaliajassa. **setInterval**-funktio suorittaa **updateClock**-funktion joka sekunti, varmistaen, että näytetty aika on aina tarkka.
- **Tärkeä yksityiskohta:** **1000** **setInterval**-funktion sisällä tarkoittaa 1000 millisekuntia eli 1 sekuntia, mikä vastaa kellon luonnollista tikitystä. Tämä pitää sivulla näytetyn ajan synkronoituna todellisen kellonajan kanssa.

### 5. Initial Call to updateClock:

- **Mikä se on:** **updateClock();** kutsutaan välittömästi sen jälkeen, kun **setInterval** on asetettu, varmistaen, että nykyinen aika näytetään heti.
- **Tarkoitus:** Ilman tätä alkuperäistä kutsua sivu odottaisi 1 sekunnin ennen ajan näyttämistä (koska **setInterval** alkaa vasta ensimmäisen 1000 millisekunnin jälkeen). **updateClock()**-funktion kutsuminen heti sivun latauduttua varmistaa, että kello näkyy heti, kun käyttäjä vierailee sivulla.
- **Tärkeä yksityiskohta:** Alkuperäinen kutsu **updateClock**-funktioon varmistaa, että käyttäjä ei näe tyhjää tai vanhentunutta kelloa ensimmäisen sekunnin aikana sivun latauduttua, mikä parantaa käyttökokemusta.
