# Nettisivu: https://keudaope.github.io/JSProjekteja/P22_Markdown_Previewer

# Johdanto

Markdown Previewer on hyödyllinen sovellus, jonka avulla käyttäjät voivat kirjoittaa ja esikatsella Markdown-tekstiä reaaliajassa. Markdown on kevyt merkintäkieli, jossa käytetään yksinkertaista tekstimuotoilusyntaksia. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptin, HTML:n ja CSS:n käyttöä samalla, kun he oppivat käsittelemään käyttäjän syötteitä, käyttämään kolmannen osapuolen kirjastoja ja päivittämään DOM:ia dynaamisesti. Käyttäjät voivat syöttää Markdown-tekstiä editoriin ja nähdä sen muotoillun lopputuloksen reaaliajassa.

# HTML selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on:** <code><</code>!DOCTYPE html> -määritys ilmoittaa, että verkkosivu on kirjoitettu HTML5-standardilla.
- **Tarkoitus:** Se varmistaa, että verkkosivu tulkitaan modernin HTML5-standardin mukaisesti, mahdollistaen nykyaikaiset ominaisuudet ja paremman yhteensopivuuden selainten välillä.
- **Tärkeä yksityiskohta:** DOCTYPE-määrityksen lisääminen on välttämätöntä, jotta sivu käyttää oikeita standardeja ja vältetään renderointiongelmat.

## 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on:** <code><</code>html> -elementti on juurielementti, joka sisältää kaikki muut HTML-elementit sivulla. lang="en" -attribuutti ilmoittaa, että sivun sisältö on englanniksi.
- **Tarkoitus:** Lang-attribuutti auttaa saavutettavuuden ja SEO:n kanssa osoittamalla sivun kielen hakukoneille ja avustavalle teknologialle.
- **Tärkeä yksityiskohta:** Sivun kielen määrittäminen parantaa saavutettavuutta, erityisesti ruudunlukijoiden käyttäjille.

## 3. Head Tag (<code><</code>head>):

- **Mikä se on:** <code><</code>head> -elementti sisältää verkkosivun metatiedot, kuten otsikon, linkit ulkoisiin resursseihin ja asetukset oikeanlaista sivun renderöintiä varten.
- **Tarkoitus:** Se sisältää olennaisia tietoja selaimelle, kuten sivun otsikon ja ulkoiset tyylitiedostot, varmistaen oikean tyylin ja toiminnallisuuden.
- **Tärkeät yksityiskohdat:**
  - **Meta Charset (<code><</code>meta charset="UTF-8">):** Määrittää merkistökoodauksen UTF-8:ksi, tukien laajaa valikoimaa merkkejä ja symboleja.
  - **Viewport Meta Tag (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">):** Varmistaa, että verkkosivu on responsiivinen ja skaalautuu eri näyttökokoihin, erityisesti mobiililaitteilla.
  - **Title Tag (<code><</code>title>Markdown Previewer</title>):** Määrittää verkkosivun otsikon, joka näkyy selaimen välilehdessä.
  - **Link to GitHub Markdown CSS:** Tuo CSS:n GitHub-tyylisen markdown-muotoilun renderointiin, varmistaen yhtenäisen ja oikeaoppisesti muotoillun markdown-ulkoasun.
  - **Link to Custom CSS (<code><</code>link rel="stylesheet" href="styles.css">):** Linkittää ulkoiseen tyylitiedostoon (styles.css) lisätyyliä varten, varmistaen, että sovelluksen ulkoasu on huoliteltu ja moderni.

## 4. Body Tag (<code><</code>body>):

- **Mikä se on:** <code><</code>body> -elementti sisältää kaikki näkyvät sisällöt verkkosivulla, mukaan lukien sovelluksen otsikon, syöttöalueen ja markdown-esikatselun.
- **Tarkoitus:** Body pitää kaikki elementit, joiden kanssa käyttäjä on vuorovaikutuksessa. Se on paikka, johon sovelluksen rakenne ja sisältö sijoitetaan, ja se toimii yhdessä CSS:n ja JavaScriptin kanssa ulkoasun ja toiminnallisuuden takaamiseksi.
- **Tärkeä yksityiskohta:** Kaikki <code><</code>body> -elementissä oleva on se, mitä käyttäjä näkee ja käyttää sivulla.

## 5. Container Div (<code><</code>div class="container">):

- **Mikä se on:** Tämä <code><</code>div> toimii pääasiallisena kääreenä kaikelle sisällölle, tarjoten rakenteen ulkoasulle ja tyylille.
- **Tarkoitus:** Se ryhmittelee yhteen liittyvät elementit (otsikon, tekstialueen ja esikatselualueen) ja soveltaa tyylittelyä container-luokan kautta. Tämä varmistaa, että ulkoasu on järjestelmällinen, responsiivinen ja visuaalisesti houkutteleva.
- **Tärkeä yksityiskohta:** Container-div mahdollistaa keskitetyn tyylin ja ulkoasun hallinnan, luoden sovellukselle jäsennellyn ja yhtenäisen ilmeen.

## 6. Heading (<code><</code>h1>Markdown Previewer</h1>):

- **Mikä se on:** <code><</code>h1> -elementti edustaa sovelluksen pääotsikkoa, näyttäen otsikon "Markdown Previewer".
- **Tarkoitus:** Se toimii sovelluksen otsikkona, antaen käyttäjälle välittömästi käsityksen sovelluksen tarkoituksesta.
- **Tärkeä yksityiskohta:** <code><</code>h1> on tyylitelty suureksi ja näkyväksi, mikä tekee siitä helposti luettavan ja selkeän. Se parantaa myös SEO

osoittamalla sivun pääsisällön.

## 7. Textarea for Input (<code><</code>textarea id="editor" placeholder="Enter Markdown text..."></textarea>):

- **Mikä se on:** <code><</code>textarea> on syöttökenttä, joka mahdollistaa käyttäjän syöttää markdown-tekstiä. id="editor" tunnistaa tämän elementin yksilöllisesti JavaScriptille sen käsittelemiseksi, ja placeholder-attribuutti antaa vihjeen käyttäjälle, että tähän voi kirjoittaa markdown-tekstiä.
- **Tarkoitus:** Se tarjoaa alueen, johon käyttäjät voivat syöttää markdown-tekstiä, joka muunnetaan dynaamisesti HTML-muotoon JavaScriptin avulla. id mahdollistaa, että skripti viittaa ja päivittää tätä elementtiä, ja placeholder parantaa käytettävyyttä tarjoamalla kontekstia, kun tekstiä ei ole vielä syötetty.
- **Tärkeä yksityiskohta:** Textarea on olennainen sovelluksen toiminnalle, mahdollistaen käyttäjän syöttää markdown-tekstiä, joka renderoidaan reaaliajassa esikatselualueella.

## 8. Preview Div (<code><</code>div class="preview markdown-body" id="preview">):

- **Mikä se on:** <code><</code>div> luokilla preview ja markdown-body (GitHub markdown CSS:ssä) käytetään näyttämään muotoiltu markdown-output. id="preview" mahdollistaa, että JavaScript voi kohdistaa tämän elementin ja päivittää sen sisällön muunnetulla markdownilla.
- **Tarkoitus:** Tämä div näyttää käyttäjän syötteen markdownina muotoiltuna HTML-muodossa, tarjoten live-esikatselun siitä, miltä markdown näyttää. markdown-body-luokka varmistaa, että sisältö on muotoiltu GitHubin markdown-standardien mukaan.
- **Tärkeä yksityiskohta:** Tämä alue on sovelluksen ydin, jossa markdownin reaaliaikainen renderöinti tapahtuu, tarjoten käyttäjälle välittömän palautteen syötteestä.

## 9. Script Tags:

- **Mitä ne ovat:** Kaksi <code><</code>script> -tagia linkittää ulkoisiin JavaScript-tiedostoihin:
  - **Marked.js Library:** Ensimmäinen skripti tuo marked-kirjaston CDN:stä, jota käytetään markdownin muuntamiseen HTML:ksi.
  - **Custom JavaScript File:** Toinen skripti linkittää ulkoiseen app.js-tiedostoon, joka sisältää logiikan markdown-esikatselun päivittämiseksi käyttäjän kirjoittaessa.
- **Tarkoitus:** Ulkoiset skriptit käsittelevät markdown-esikatselijan toiminnallisuuden, mukaan lukien markdownin parsinnan ja esikatselun dynaamisen päivittämisen. JavaScriptin erottaminen ulkoisiin tiedostoihin pitää HTML:n puhtaana ja keskittyneenä rakenteeseen.
- **Tärkeä yksityiskohta:** Ulkoisten skriptien käyttö varmistaa puhtaan ja modulaarisen lähestymistavan, erottaen toiminnallisuuden (JavaScript) rakenteesta (HTML) ja tyylistä (CSS).

# CSS selitys

## 1. Global Reset (\* Selector):

- **Mikä se on:** Universaali \*-valitsin kohdistuu kaikkiin sivun elementteihin.
- **Tarkoitus:** Se poistaa oletusmarginaalit ja -täytteet johdonmukaisuuden takaamiseksi eri selaimissa. `box-sizing: border-box;` -sääntö varmistaa, että täytteet ja reunat sisältyvät elementin kokonaisleveyteen ja -korkeuteen, mikä yksinkertaistaa ulkoasulaskelmia.
- **Tärkeä yksityiskohta:** Yleinen resetointi estää epäjohdonmukaiset välimatkat eri selainten välillä, varmistaen luotettavan ulkoasun ja helpottaen elementtien koon hallintaa.

## 2. Body Styling (body):

- **Mikä se on:** body-sääntö määrittää koko verkkosivun tyylit, mukaan lukien fontit, taustat ja asetteluasetukset.
- **Tarkoitus:**
  - **Font Family (font-family: 'Roboto', sans-serif;):** Soveltaa "Roboto"-fonttia, modernia ja selkeää kirjasintyyppiä, joka parantaa luettavuutta ja antaa sivulle ammattimaisen ulkoasun.
  - **Background (background: linear-gradient(135deg, #74ebd5, #acb6e5);):** Lisää visuaalisesti houkuttelevan gradienttitaustan, joka vaihtuu pehmeästä tealista siniseksi, antaen sivulle modernin ja raikkaan ilmeen.
  - **Layout (display: flex; justify-content: center; align-items: center;):** Käyttää Flexbox-asettelua keskittääkseen sisällön sekä vaakasuunnassa että pystysuunnassa, varmistaen, että pääkontti pysyy näytön keskellä.
  - **Height (height: 100vh;):** Varmistaa, että sisältö vie koko näkymäikkunan korkeuden, jolloin sisältö pysyy keskitettynä myös suurilla näytöillä.
- **Tärkeä yksityiskohta:** Flexboxin ja gradienttitaustan yhdistelmä luo tasapainoisen ja visuaalisesti houkuttelevan asettelun, joka mukautuu hyvin eri näyttökokoihin.

## 3. Container Styling (.container):

- **Mikä se on:** `.container`-luokka soveltaa tyylejä pääsisältökääreelle, joka sisältää otsikon, tekstialueen ja esikatselun.
- **Tarkoitus:**
  - **Background Color (background-color: #fff;):** Tarjoaa puhtaan valkoisen taustan, joka erottuu taustagradientista, auttaen sisältöä nousemaan esille.
  - **Padding (padding: 30px;):** Lisää sisäistä tilaa sisällön ympärille varmistaen, ettei se kosketa reunoja ja pysyy luettavana.
  - **Border Radius (border-radius: 15px;):** Pyöristää kontin kulmat, luoden modernin, korttimaisen suunnittelun.
  - **Box Shadow (box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);):** Luo hienovaraisen varjoefektin, antaen kontin näyttää kohoavan taustasta ja tuoden syvyyttä suunnitteluun.
  - **Width (width: 700px; max-width: 100%;):** Määrittää kontin kiinteän leveyden varmistaen sen luettavuuden sekä pienillä että suurilla näytöillä, ja `max-width` varmistaa, että kontti ei ylitä pieniä näyttöjä.
  - **Gap (gap: 20px;):** Lisää tilaa lapsielementtien (otsikko, tekstialue ja esikatselu) välille paremman visuaalisen erottelun ja asettelurakenteen takaamiseksi.
  - **Transition (transition: transform 0.3s ease;):** Mahdollistaa sulavat siirtymät animaatioiden, kuten hover-efektien, aikana.
- **Tärkeä yksityiskohta:** Kontti on suunniteltu näyttämään modernilta, kohotetulta kortilta, mikä luo visuaalisesti houkuttelevan ja jäsennellyn asettelun, joka parantaa käyttäjäkokemusta.

## 4. Hover Effect for Container (.container:hover):

- **Mikä se on:** Hover-pseudoluokka soveltaa visuaalista tehostetta, kun käyttäjä siirtää hiiren kontin päälle.
- **Tarkoitus:** `transform: scale(1.05);` suurentaa konttia hieman, kun sen päälle siirretään hiiri, luoden zoomaus-efektin, joka lisää interaktiivisuutta ja saa kontin tuntumaan dynaamiselta ja houkuttelevalta.
- **Tärkeä yksityiskohta:** Hover-efekti lisää hienovaraista interaktiivisuutta, mikä tekee sovelluksesta responsiivisemman ja viimeistellymmän ilman, että se kuormittaa käyttäjää liikaa.

## 5. Heading Styling (h1):

- **Mikä se on:** Määrittelee sovelluksen pääotsikon, "Markdown Previewer".
- **Tarkoitus:**
  - **Font Size (font-size: 2.2em;):** Varmistaa, että otsikko on suuri ja erottuu, antaen sovelluksen otsikolle huomionarvoa.
  - **Text Color (color: #2d3748;):** Soveltaa tummaa väriä otsikkoon, tehden siitä luettavan ja hyvin kontrastissa kontin valkoisen taustan kanssa.
  - **Text Alignment (text-align: center;):** Keskittää tekstin vaakasuunnassa, luoden tasapainoisen ja visuaalisesti houkuttelevan asettelun.
- **Tärkeä yksityiskohta:** Suuri fonttikoko ja keskitetty tasaus tekevät otsikosta sivun näkyvimmän elementin, kertoen käyttäjille heti sovelluksen tarkoituksen.

## 6. Textarea Styling (textarea):

- **Mikä se on:** Määrittelee tekstialueen, johon käyttäjät voivat syöttää Markdown-tekstiä.
- **Tarkoitus:**
  - **Width (width: 100%;):** Varmistaa, että tekstialue täyttää kontin koko leveyden, tehden siitä helppokäyttöisen ja tarjoten riittävästi tilaa tekstin syöttöön.
  - **Height (height: 200px;):** Määrittää tekstialueen korkeuden, antaen käyttäjille riittävästi tilaa Markdown-sisällön syöttämiseen.
  - **Padding (padding: 15px;):** Lisää sisäistä tilaa tekstialueen sisään, tehden kirjoittamisesta miellyttävää.
  - **Border (border: 1px solid #ccc;):** Lisää kevyen harmaan reunuksen tekstialueen ympärille, antaen sille hyvin määritellyn ulkoasun.
  - **Border Radius (border-radius: 8px;):** Pyöristää tekstialueen reunat, joka sopii sovelluksen moderniin suunnitteluun.
  - **Font Family (font-family: monospace;):** Käyttää monospace-kirjasintyyppiä, joka muistuttaa koodieditoreita, tarjoten Markdown-syötölle koodauskokemuksen.
  - **Box Shadow (box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);):** Lisää hienovaraisen varjon tekstialueen alle, tuoden syvyyttä ja saaden syöttökentän erottumaan.
  - **Transition (transition: border-color 0.3s ease;):** Mahdollistaa sulavan siirtymätehosteen, kun tekstialueen reuna vaihtaa väriä fokusoinnin aikana.
- **Tärkeä yksityiskohta:** Modernien suunnitteluelementtien ja toiminnallisen asettelun yhdistelmä tekee tekstialueesta sekä käyttäjäystävällisen että visuaalisesti houkuttelevan.

## 7. Textarea Focus Effect (textarea:focus):

- **Mikä se on:** Määrittelee tekstialueen tyylit, kun se on fokuksessa (kun käyttäjä napsauttaa tai napauttaa sitä).
- **Tarkoitus:** `border-color: #007bff;` muuttaa tekstialueen reunan siniseksi, kun se on aktiivinen, antaen visuaalisen vihjeen siitä, että käyttäjä on vuorovaikutuksessa syöttökentän kanssa.
- **Tärkeä yksityiskohta:** Tämä fokustehoste parantaa käytettävyyttä antamalla selkeän osoituksen aktiivisesta elementistä, parantaen käyttäjän vuorovaikutuskokemusta.

## 8. Preview Area Styling (.preview):

- **Mikä se on:** Määrittelee esikatselualueen, jossa rendatun Markdownin sisältö näytetään.
- **Tarkoitus:**
  - **Background Color (background-color: #f8f8f8;):** Soveltaa vaaleanharmaata taustaa, joka erottuu sisällöstä, tehden Markdown-sisällön helpommin luettavaksi.
  - **Padding (padding: 20px;):** Lisää sisäistä tilaa sisällön ympärille varmistaen, ettei Markdown-teksti kosketa reunoja.
  - **Border (border: 1px solid #ccc;):** Lisää hienovaraisen reunuksen esikatselualueen ympärille visuaalisen erottelun takaamiseksi.
  - **Border Radius (border-radius: 8px;):** Pyöristää reunat, joka vastaa sovelluksen yleistä suunnittelua.
  - **Box Shadow (box-shadow: inset 0 5px 15px rgba(0, 0, 0, 0.05);):** Lisää pehmeän sisäisen varjon, joka antaa esikatselualueelle hienovaraisen syvyyden ja saa sen näyttämään upotetulta näytöltä.
  - **Text Align (text-align: left;):** Varmistaa, että Markdown-rendattu sisältö on vasemmalle tasattu, kuten lukuteksti yleensä on.
  - **Overflow Y (overflow-y: auto;):** Mahdollistaa pystysuoran vierityksen, jos sisältö ylittää näkyvän alueen, varmistaen, että käyttäjä voi vierittää läpi pitkän Markdown-tekstin.
  - **Height (height: 300px;):** Määrittää kiinteän korkeuden esikatselualueelle, säilyttäen siistin ja yhtenäisen asettelun.
- **Tärkeä yksityiskohta:** Esikatselualue on suunniteltu muistuttamaan Markdownin näyttöaluetta, tarjoten hyvin järjestetyn ja luettavan tilan käyttäjille nähdä heidän Markdown-tekstinsä rendattuna.

## 9. Scrollbar Styling for Preview (.preview::-webkit-scrollbar, .preview::-webkit-scrollbar-thumb, .preview::-webkit-scrollbar-track):

- **Mikä se on:** Määrittelee esikatselualueen vierityspalkin ulkoasun.
- **Tarkoitus:**
  - **Scrollbar Width (width: 8px;):** Pienentää vierityspalkin leveyttä, jotta se olisi vähemmän häiritsevä.
  - **Scrollbar Thumb (background-color: #007bff; border-radius: 4px;):** Asettaa vierityspalkin vetimen (siirrettävä osa) siniseksi, jossa on pyöristetyt reunat, tehden siitä visuaalisesti yhtenäisen muun suunnittelun kanssa.
  - **Scrollbar Track (background-color: #f8f8f8;):** Yhdistää vierityspalkin taustan esikatselualueen taustan väriin saumattoman integraation saavuttamiseksi.
- **Tärkeä yksityiskohta:** Mukautetut vierityspalkit parantavat visuaalista suunnittelua, tarjoten kiillotetumman ja yhtenäisemmän käyttökokemuksen, erityisesti silloin, kun sisältö ylittää esikatselualueen.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener:

- **Mikä se on:** `document.addEventListener('DOMContentLoaded', () => {...})` asettaa tapahtumankuuntelijan, joka laukaistaan, kun HTML-dokumentti on ladattu kokonaan.
- **Tarkoitus:** Tämä varmistaa, että JavaScript-koodi suoritetaan vasta sen jälkeen, kun koko HTML-rakenne, mukaan lukien DOM-elementit, on käytettävissä. Ilman tätä skripti voisi yrittää manipuloida elementtejä, joita ei ole vielä ladattu, mikä voi aiheuttaa virheitä.
- **Tärkeä yksityiskohta:** `DOMContentLoaded`-tapahtuman käyttö varmistaa, että JavaScript voi turvallisesti olla vuorovaikutuksessa HTML-elementtien (kuten tekstialueen ja esikatseludivin) kanssa, kun sivu on kokonaan renderöity.

## 2. Selecting DOM Elements (const editor ja const preview):

- **Mikä se on:** `const editor = document.getElementById('editor');` ja `const preview = document.getElementById('preview');` valitsevat tekstialueen (johon käyttäjä syöttää Markdownia) ja divin (johon jäsennetty Markdown näytetään).
- **Tarkoitus:** Nämä viittaukset mahdollistavat skriptin pääsyn sivun syöttö- ja tulostuselementteihin. Valitsemalla elementit `getElementById`-menetelmällä JavaScript voi lukea käyttäjän syötteet ja päivittää dynaamisesti esikatselualueen.
- **Tärkeä yksityiskohta:** DOM-elementtien tehokas valitseminen niiden id:n perusteella parantaa koodin luettavuutta ja suorituskykyä estämällä toistuvat DOM-kyselyt.

## 3. Update Preview Function (function updatePreview()):

- **Mikä se on:** Funktio, joka päivittää dynaamisesti esikatselualueen aina, kun käyttäjä kirjoittaa tekstialueelle.
- **Vaiheet:**
  - **Retrieve Markdown Input (const markdownText = editor.value;):** Hakee nykyisen sisällön tekstialueelta, johon käyttäjä syöttää Markdownia.
  - **Parse Markdown (preview.innerHTML = marked.parse(markdownText);):** Muuntaa Markdown-syötteen HTML:ksi `marked.parse()`-funktion avulla (jonka tarjoaa Marked.js-kirjasto) ja päivittää `preview`-divin innerHTML:n.
- **Tarkoitus:** Funktio antaa reaaliaikaista palautetta muuntamalla ja renderöimällä Markdown-syötteen välittömästi HTML-muotoon esikatselualueella.
- **Tärkeä yksityiskohta:** Marked.js-kirjaston käyttö Markdownin jäsentämiseen mahdollistaa sen, että sovellus käsittelee käyttäjän syötteen dynaamisesti ja tehokkaasti muuntaa sen HTML:n välittömään näyttöön.

## 4. Textarea Input Event Listener (editor.addEventListener('input', updatePreview);):

- **Mikä se on:** Tämä rivi asettaa tapahtumankuuntelijan tekstialueelle (`editor`). Se kuuntelee `input`-tapahtumaa, joka laukaistaan aina, kun käyttäjä kirjoittaa tai poistaa sisältöä.
- **Tarkoitus:** Joka kerta, kun käyttäjä on vuorovaikutuksessa tekstialueen kanssa (kirjoittamalla tai poistamalla tekstiä), `updatePreview`-funktio kutsutaan. Tämä varmistaa, että esikatselu on aina synkronoitu käyttäjän syötteen kanssa ja tarjoaa reaaliaikaisen renderöinnin Markdownista.
- **Tärkeä yksityiskohta:** `input`-tapahtumankuuntelija pitää sovelluksen responsiivisena käyttäjän syötteille, varmistaen, että muutokset tekstialueella heijastuvat välittömästi esikatseluun ilman sivun uudelleenlatausta tai manuaalista lähetystä.

## 5. Initial Preview Update (updatePreview();):

- **Mikä se on:** `updatePreview()`-funktio kutsutaan kerran, kun sivu ladataan.
- **Tarkoitus:** Tämä varmistaa, että esikatselualue täytetään millä tahansa alkuperäisellä sisällöllä tekstialueessa (jos sellaista on), kun sivu ladataan ensimmäisen kerran. Vaikka käyttäjä ei olisikaan vielä kirjoittanut mitään, tämä varmistaa, ettei esikatselualue jää tyhjäksi.
- **Tärkeä yksityiskohta:** `updatePreview()`-funktion suorittaminen sivun latauksen yhteydessä varmistaa, että Markdown-esikatselu generoidaan mistä tahansa esitäytetystä sisällöstä tekstialueessa tai jos selain säilyttää syötearvot päivityksen jälkeen.
