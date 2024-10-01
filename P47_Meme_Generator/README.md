# Nettisivu: https://keudaope.github.io/JSProjekteja/P47_Meme_Generator

# Johdanto

Meme Generator on hauska ja interaktiivinen sovellus, joka antaa käyttäjille mahdollisuuden luoda ja jakaa meemejä. Käyttäjät voivat ladata kuvan, lisätä ylä- ja alatekstin ja ladata luodun meemin. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää samalla kun opitaan käsittelemään tiedostolatauksia, manipuloimaan DOM:ia ja käyttämään canvas-rajapintaa tekstin piirtämiseen kuviin.

# HTML selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on**: Tämän dokumentin tyyppimääritys on HTML5.
- **Tarkoitus**: Se ilmoittaa selaimelle, että dokumentti noudattaa HTML5-standardeja, mikä varmistaa yhtenäisen renderöinnin selaimissa.
- **Tärkeä yksityiskohta**: Sisällytä tämä aina, jotta vältät vanhojen selainten väärintulkinnat.

## 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on**: Dokumentin juurielementti, joka kattaa kaiken sisällön.
- **Tarkoitus**: lang="en" -attribuutti määrittelee, että sisältö on englanninkielistä, mikä parantaa saavutettavuutta ja hakukoneoptimointia (SEO).
- **Tärkeä yksityiskohta**: lang-attribuutti auttaa ruudunlukijoita ja hakukoneita tulkitsemaan sisällön kielen.

## 3. Head Tag (<code><</code>head>):

- **Mikä se on**: Sisältää metatiedot dokumentista (kuten otsikon, merkistökoodauksen ja linkit tyylitiedostoihin).
- **Tarkoitus**: Se lataa ulkoiset resurssit (kuten CSS:n) ja määrittää dokumentin otsikon ja reagoivan toiminnan.
- **Tärkeät yksityiskohdat**:
  - **Meta Charset** (<code><</code>meta charset="UTF-8">): Varmistaa, että sivu voi käsitellä laajaa valikoimaa merkkejä käyttämällä UTF-8-koodausta.
  - **Viewport Meta Tag** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">): Varmistaa, että sivu skaalautuu oikein eri laitteilla hallitsemalla katseluikkunan leveyttä. Tämä tekee sivusta reagoivan.
  - **Title Tag** (<code><</code>title>Meme Generator</title>): Määrittelee selaimen välilehdellä näkyvän otsikon. Se auttaa myös SEO:ssa ja saavutettavuudessa.

## 4. Body Tag (<code><</code>body>):

- **Mikä se on**: Sisältää kaikki näkyvät sisällöt ja vuorovaikutteiset elementit verkkosivulla.
- **Tarkoitus**: Kaikki sivulla näkyvä sisältö on sisällä <code><</code>body>. Body on tyylitelty ja sisältää meemingeneraattorisovelluksen rakenteen ja toiminnallisuuden.
- **Tärkeä yksityiskohta**: Se sisältää lomake-elementit, painikkeet ja canvas-elementin meemin luomista varten sekä JavaScript-tiedoston.

## 5. Container Div (<code><</code>div class="container">):

- **Mikä se on**: <code><</code>div>, joka kattaa pääsisällön (otsikko, syöttökentät ja painikkeet) rakenteen ja tyylin antamiseksi sovellukselle.
- **Tarkoitus**: Se ryhmittelee sovelluksen keskeiset komponentit (otsikko, lomakekentät, painikkeet) ja tarjoaa keskitetyn tavan soveltaa tyylittelyä. Se auttaa myös layoutissa ja kohdistamisessa.
- **Tärkeä yksityiskohta**: Kontti on tyylitelty pehmustuksella, pyöristetyillä kulmilla ja varjostuksella luomaan korttimaisen rakenteen.

## 6. Heading Tag (<code><</code>h1>Meme Generator</h1>):

- **Mikä se on**: Tason 1 otsikko, joka näyttää sovelluksen otsikon.
- **Tarkoitus**: Se kertoo käyttäjälle sovelluksen tarkoituksen ja on tyylitelty näkyväksi.
- **Tärkeä yksityiskohta**: <code><</code>h1>-tagi on tärkeä SEO

  ja saavutettavuuden kannalta, koska se signaloi sivun pääotsikon.

## 7. Input for Image (<code><</code>input type="file" id="image-input" accept="image/\*">):

- **Mikä se on**: Syöttökenttä, jonka avulla käyttäjä voi ladata kuvatiedoston.
- **Tarkoitus**: Tämä on pääasiallinen vuorovaikutuspiste, jossa käyttäjä valitsee kuvan meemin luomista varten.
- **Tärkeä yksityiskohta**: accept="image/\*" -attribuutti varmistaa, että vain kuvatiedostot voidaan ladata.

## 8. Text Inputs (<code><</code>input type="text" id="top-text" placeholder="Top text">):

- **Mikä se on**: Kaksi tekstinsyöttökenttää, joihin käyttäjä voi syöttää ylä- ja alatekstin meemiä varten.
- **Tarkoitus**: Näiden kenttien avulla käyttäjä voi lisätä mukautettua tekstiä meemiin.
- **Tärkeä yksityiskohta**: placeholder-attribuutti näyttää vihjeen syöttökenttien sisällä ohjaten käyttäjää, mitä tekstiä syöttää.

## 9. Buttons for Meme Generation and Downloading (<code><</code>button id="generate-meme-button">Generate Meme</button>):

- **Mikä se on**: Painikkeet, jotka käynnistävät toimintoja, kuten meemin luomisen ja lataamisen.
- **Tarkoitus**: Nämä painikkeet mahdollistavat käyttäjän luoda ja ladata meemin sen luomisen jälkeen.
- **Tärkeä yksityiskohta**: Painikkeet ovat interaktiivisia ja näkyvät tai piilotetaan sovelluksen tilan perusteella. Esimerkiksi latauspainike ilmestyy vasta, kun meemi on luotu.

## 10. Canvas Element (<code><</code>canvas id="meme-canvas" style="display;"><code><</code>/canvas>):

- **Mikä se on**: Canvas-elementti, jota käytetään meemin kuvan ja tekstin renderöimiseen.
- **Tarkoitus**: Tähän piirretään meemi sen jälkeen, kun käyttäjä on ladannut kuvan ja syöttänyt meemin tekstin. Se on aluksi piilotettu, kunnes meemi on luotu.
- **Tärkeä yksityiskohta**: Canvas mahdollistaa dynaamisen kuvien ja tekstin renderöinnin, mikä on olennaista meemin luomisessa.

## 11. Script Tag (<code><</code>script src="script.js"></script>):

- **Mikä se on**: Linkittää ulkoiseen JavaScript-tiedostoon, joka sisältää sovelluksen logiikan.
- **Tarkoitus**: Se erottaa JavaScriptin toiminnallisuuden HTML-rakenteesta, mikä edistää siistiä ja helposti ylläpidettävää koodia.
- **Tärkeä yksityiskohta**: Script on sisällytetty bodyn loppuun, jotta DOM-elementit latautuvat ennen JavaScriptin suorittamista, mikä estää virheet elementtien käsittelyssä.

# CSS selitys

## 1. Global Body Styling (body):

- **Mikä se on**: Tyylisäännöt, jotka koskevat koko sivun body-elementtiä.
- **Tarkoitus**: Nämä tyylit hallitsevat sivun yleistä ulkoasua ja layoutia varmistaen, että se näyttää johdonmukaiselta ja responsiiviselta eri laitteilla.
- **Tärkeät yksityiskohdat**:
  - **font-family**: Arial, sans-serif;: Asettaa fontiksi Arialin luettavuuden parantamiseksi ja käyttää sans-serif-fonttia varalla, jos Arial ei ole käytettävissä.
  - **background-color**: #f0f0f0;: Käyttää vaaleanharmaata taustaväriä luoden neutraalin kontrastin valkoisen kontin kanssa.
  - **display**: flex; justify-content: center; align-items: center;: Käyttää Flexboxia keskittämään sisältö sekä vaakasuunnassa että pystysuunnassa, varmistaen, että sovellus on täydellisesti kohdistettu näkymäalueella.
  - **height**: 100vh;: Varmistaa, että body vie koko näkymän korkeuden, jolloin sisältö keskitetään pystysuunnassa.
  - **margin**: 0;: Poistaa oletusmarginaalit, joita selain voi lisätä, estäen ei-toivotun tilan sivun sisällön ympäriltä.

## 2. Container Styling (.container):

- **Mikä se on**: .container-luokka tyylittelee pääkontin, joka sisältää sovelluksen komponentit, kuten otsikon, syöttökentät ja painikkeet.
- **Tarkoitus**: Se ryhmittelee meemingeneraattorin keskeiset osat antaen sille puhtaan ja rakenteellisen ulkonäön.
- **Tärkeät yksityiskohdat**:
  - **background**: white;: Asettaa taustaväriksi valkoisen, jolloin kontti erottuu vaaleanharmaasta taustasta.
  - **padding**: 20px;: Lisää tilaa kontin sisäpuolelle estäen sisällön osumisen kontin reunoihin.
  - **border-radius**: 8px;: Pyöristää kontin kulmat antaen sille modernin ja hiotun ulkoasun.
  - **box-shadow**: 0 0 10px rgba(0, 0, 0, 0.1);: Lisää hienovaraisen varjon kontin ympärille, luoden lievän kolmiulotteisen vaikutelman ja syvyyttä.
  - **text-align**: center;: Keskittää kaiken kontin sisällä olevan tekstin varmistaen, että otsikko, painikkeet ja muu sisältö on hyvin kohdistettu.
  - **width**: 300px;: Asettaa kontin kiinteäksi leveydeksi, pitäen sen kompaktina ja siististi rakenteisena.

## 3. Heading Styling (h1):

- **Mikä se on**: Tyylittelee sovelluksen pääotsikon.
- **Tarkoitus**: Otsikko kertoo käyttäjälle sovelluksen tarkoituksen ja on tyylitelty näyttämään näkyvältä ja visuaalisesti houkuttelevalta.
- **Tärkeä yksityiskohta**:
  - **margin-bottom**: 20px;: Lisää tilaa otsikon alle erottaen sen muusta sisällöstä varmistaen puhtaan layoutin.

## 4. File Input Styling (input[type="file"]):

- **Mikä se on**: Tyylittelee tiedostonsyöttökentän, johon käyttäjät voivat ladata kuvia meemiä varten.
- **Tarkoitus**: Syöttökenttä sallii käyttäjien ladata kuvatiedostoja ja on tyylitelty selkeyden ja tilan vuoksi.
- **Tärkeä yksityiskohta**:
  - **margin-bottom**: 10px;: Lisää tilaa tiedostonsyöttökentän alle erottaen sen muista elementeistä, parantaen lomakkeen luettavuutta.

## 5. Text Input Styling (input[type="text"]):

- **Mikä se on**: Tyylittelee tekstinsyöttökentät, joihin käyttäjä voi lisätä ylä- ja alatason tekstit meemiin.
- **Tarkoitus**: Se tarjoaa puhtaan ja käyttäjäystävällisen syöttökentän käyttäjille meemin tekstin lisäämiseksi.
- **Tärkeät yksityiskohdat**:
  - **padding**: 10px;: Lisää pehmusteen tekstinsyöttökenttien sisään, tehden niistä mukavia käyttää ja visuaalisesti tasapainoisia.
  - **margin-bottom**: 10px;: Lisää tilaa tekstinsyöttökenttien alle estäen niiden koskettamisen muihin elementteihin.
  - **width**: calc(100% - 22px);: Varmistaa, että syöttökentät vievät kontin täyden leveyden, miinus pehmustus ja reunojen tila, tehden niistä responsiivisia ja hyvin mitoitettuja.
  - **border**: 1px solid #ccc;: Lisää kevyen harmaan reunuksen tekstinsyöttökenttien ympärille selkeästi määrittelemään ne.
  - **border-radius**: 4px;: Pyöristää kenttien kulmia hieman modernin ulkonäön saavuttamiseksi.

## 6. Buttons Container (.buttons):

- **Mikä se on**: Tyylittelee kontin, joka sisältää "Generate Meme" ja "Download Meme" -painikkeet.
- **Tarkoitus**: Se kohdistaa painikkeet vaakasuunnassa ja lisää tilaa niiden välille paremman käytettävyyden ja esteettisyyden vuoksi.
- **Tärkeät yksityiskohdat**:
  - **display**: flex; justify-content: center; gap: 10px;: Käyttää Flexboxia kohdistamaan painikkeet vaakasuunnassa lisäten 10px välin niiden välille varmistaen, ettei niistä tule ahtaita.
  - **margin-top**: 10px;: Lisää tilaa painikekontin yläpuolelle erottaen sen syöttökentistä siistin layoutin aikaansaamiseksi.

## 7. Button Styling (button):

- **Mikä se on**: Tyylittelee molemmat painikkeet (Generate ja Download).
- **Tarkoitus**: Painikkeet on suunniteltu selkeiksi, klikattaviksi ja visuaalisesti houkutteleviksi, ohjaten käyttäjää avaintoimintoihin.
- **Tärkeät yksityiskohdat**:
  - **padding**: 10px 20px;: Lisää pehmusteen painikkeiden sisään tehden niistä tarpeeksi suuria mukavaan klikkaamiseen.
  - **border**: none;: Poistaa oletuksena olevan selainreunan painikkeiden ympäriltä luoden puhtaamman ulkoasun.
  - **background-color**: #007bff;: Antaa painikkeille kirkkaan sinisen värin, tehden niistä selkeitä interaktiivisia elementtejä.
  - **color**: white;: Asettaa tekstin väriksi valkoisen korkean kontrastin ja luettavuuden saavuttamiseksi.
  - **border-radius**: 4px;: Lisää pyöristetyt kulmat, jotka sopivat sovelluksen moderniin ja hiottuun ilmeeseen.
  - **cursor**: pointer;: Muuttaa kohdistimen osoittimeksi, kun sen päällä on hiiri, viestittäen käyttäjälle, että painike on klikattavissa.

## 8. Button Hover Effect (button:hover):

- **Mikä se on**: Lisää vaikutuksen, kun käyttäjät liikuttavat hiirtä painikkeiden päällä.
- **Tarkoitus**: Hover-efekti antaa käyttäjille palautetta ja lisää vuorovaikutteisuutta ja visuaalista vetovoimaa.
- **Tärkeä yksityiskohta**:
  - **background-color**: #0056b3;: Muuttaa painikkeen taustavärin tummemmaksi sinisen sävyksi, kun sen päällä on hiiri, signaloiden, että painike on valmis klikattavaksi.

## 9. Canvas Styling (canvas):

- **Mikä se on**: Tyylittelee kankaan, jossa meemi luodaan.
- **Tarkoitus**: Canvas on paikka, jossa käyttäjän kuva ja teksti piirretään meemin luomiseksi. Se on aluksi piilotettu, kunnes meemi luodaan.
- **Tärkeät yksityiskohdat**:
  - **margin-top**: 20px;: Lisää tilaa kankaan ja painikkeiden väliin varmistaen riittävän erottelun.
  - **border**: 1px solid #ccc;: Lisää hienovaraisen reunuksen kankaan ympärille, määritellen sen selkeästi.
  - **border-radius**: 8px;: Pyöristää kankaan kulmat vastaamaan kontin tyyliä, luoden visuaalista yhtenäisyyttä.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...});):

- **Mikä se on**: Tämä tapahtumakuuntelija varmistaa, että skripti suoritetaan vasta, kun koko HTML-dokumentti on ladattu ja jäsennelty.
- **Tarkoitus**: Se estää skriptiä käynnistymästä ennen kuin tarvittavat HTML-elementit (kuten kuvan syöttö ja painikkeet) ovat saatavilla DOMissa, mikä varmistaa sujuvan toiminnallisuuden.
- **Tärkeä yksityiskohta**: Kaikkien sovelluksen logiikan sijoittaminen DOMContentLoaded-tapahtumakuuntelijan sisään varmistaa, että koodi on yhteensopiva DOM-elementtien kanssa.

## 2. Selecting DOM Elements (const imageInput = document.getElementById('image-input');):

- **Mikä se on**: Nämä rivit valitsevat tärkeitä elementtejä DOMista, joita käytetään sovelluksessa.
- **Valitut elementit**:
  - **imageInput**: Viittaa tiedoston syöttöön, jossa käyttäjä lataa kuvan.
  - **topTextInput** ja **bottomTextInput**: Tallentavat viitteet tekstikenttiin, joihin käyttäjä syöttää ylä- ja alatekstin meemiä varten.
  - **generateMemeButton**: Painike, joka käynnistää meemin luomisen, kun sitä klikataan.
  - **downloadMemeButton**: Painike, joka tulee näkyviin meemin luomisen jälkeen ja sallii käyttäjien ladata meeminsä.
  - **canvas**: Viittaa canvas-elementtiin, johon meemin kuva ja teksti piirretään.
  - **ctx**: Canvaksen piirtoympäristö, jonka avulla voidaan tehdä 2D-piirtoja ja piirtää tekstiä/kuvia canvakselle.
- **Tarkoitus**: Nämä muuttujat tallentavat viitteitä keskeisiin DOM-elementteihin, mahdollistaen sovelluksen vuorovaikutuksen niiden kanssa, kuten tiedostonsyöttöjen lukemisen, tekstin näyttämisen ja kuvien renderöinnin canvakselle.

## 3. Generate Meme Button Click Event Listener (generateMemeButton.addEventListener('click', () => {...});):

- **Mikä se on**: Tämä tapahtumakuuntelija kuuntelee "Generate Meme" -painikkeen klikkausta.
- **Vaiheet**:
  - Kun käyttäjä klikkaa painiketta, se hakee valitun kuvan tiedostonsyötöstä.
  - Jos kuva on valittu, FileReader API:ä käytetään lataamaan kuva data-URL-muodossa.
  - Kun kuva on ladattu, se piirretään canvakselle, ja käyttäjän syöttämä ylä- ja alateksti lisätään kuvaan.
  - Meemi näytetään ja "Download Meme" -painike tulee näkyviin.
- **Tarkoitus**: Tapahtumakuuntelija tarjoaa sovelluksen ytimen toiminnallisuuden luomalla meemin käyttäjän syöttämän kuvan ja tekstin perusteella. Ilman tätä sovellus ei pystyisi luomaan meemejä dynaamisesti.
- **Tärkeä yksityiskohta**: Tämä on käyttäjän pääasiallinen vuorovaikutuspiste. Kun sitä klikataan, tapahtuma käynnistää koko meemin luomisprosessin.

## 4. Reading and Loading the Uploaded Image (const reader = new FileReader();):

- **Mikä se on**: Tämä rivi alustaa uuden FileReader API -instanssin, jota käytetään lukemaan käyttäjän valitsema tiedosto.
- **Vaiheet**:
  - **reader.onload = () => {...}**: Kun kuvatiedosto on luettu, **onload**-tapahtuma laukaistaan.
  - Onload-tapahtuman sisällä luodaan uusi **Image()**-objekti, ja sen **src** asetetaan FileReaderin tulokseksi (data-URL).
  - Kun kuva on täysin ladattu, se piirretään canvakselle.
- **Tarkoitus**: FileReader API mahdollistaa sovelluksen ladata käyttäjän kuvan heidän tietokoneeltaan ja näyttää sen canvaksella, tehden meemin luomisesta vuorovaikutteista.
- **Tärkeä yksityiskohta**: Kuva renderöidään canvakselle käyttäen canvaksen **drawImage()**-metodia, mikä varmistaa, että kuva näkyy alkuperäisessä koossaan.

## 5. Drawing Text on the Canvas (ctx.fillText() ja ctx.strokeText()):

- **Mikä se on**: Nämä metodit piirtävät ylä- ja alatekstin canvakselle, lisäten tekstitasot kuvan päälle.
- **Tarkoitus**: Tämä mahdollistaa käyttäjän luoda meemi-tyylistä tekstiä, mikä on meemingeneraattorin keskeinen ominaisuus.
- **Vaiheet**:
  - **fillText()** piirtää valkoisella täytetyn tekstin canvakselle, ja **strokeText()** piirtää mustat ääriviivat tekstin ympärille kontrastin lisäämiseksi.
  - **textAlign**-ominaisuus keskittää tekstin vaakasuunnassa, kun taas tietyt x- ja y-koordinaatit sijoittavat tekstin kuvan ylä- ja alareunaan.
- **Tärkeä yksityiskohta**: Sekä **fillText()**:n että **strokeText()**:n käyttäminen varmistaa, että teksti on hyvin näkyvissä millä tahansa taustalla, ja musta ääriviiva tekee valkoisesta tekstistä erottuvan myös vaaleita taustoja vasten.

## 6. Show Canvas and Download Button (canvas.style.display = 'block'; downloadMemeButton.style.display = 'block';):

- **Mikä se on**: Nämä rivit tekevät canvaksen ja latauspainikkeen näkyviksi meemin luomisen jälkeen.
- **Tarkoitus**: Kun käyttäjä on luonut meemin, canvaksen (joka oli aluksi piilotettu) näkyvyys aktivoidaan, ja meemi näytetään. Myös "Download Meme" -painike tulee näkyviin, jolloin käyttäjä voi tallentaa meemin.
- **Tärkeä yksityiskohta**: Elementit ovat aluksi piilotettuina pitäen käyttöliittymän siistinä, mutta ne tulevat näkyviin, kun käyttäjä on luonut meemin.

## 7. Download Meme Button Click Event Listener (downloadMemeButton.addEventListener('click', () => {...});):

- **Mikä se on**: Tämä tapahtumakuuntelija kuuntelee "Download Meme" -painikkeen klikkausta.
- **Tarkoitus**: Sen avulla käyttäjä voi ladata luodun meemin PNG-kuvana.
- **Vaiheet**:
  - Väliaikainen <a>-elementti luodaan lataus-attribuutilla.
  - **<a>**-elementin href asetetaan canvaksen kuvatieto-URL-osoitteeksi käyttäen **canvas.toDataURL('image/png')**.
  - **<a>**-elementtiä klikataan ohjelmallisesti latauksen aloittamiseksi.
- **Tärkeä yksityiskohta**: Tämä mahdollistaa käyttäjän tallentaa luomansa meemin paikalliselle laitteelleen kuvana.

## 8. Error Handling (alert('Please upload an image.')):

- **Mikä se on**: Yksinkertainen virheilmoitus, joka näytetään, jos käyttäjä yrittää luoda meemin lataamatta kuvaa.
- **Tarkoitus**: Se varmistaa, että sovellus yrittää luoda meemin vain, jos käyttäjä on ladannut kuvan, parantaen käyttäjäkokemusta ja ehkäisten virheitä.
- **Tärkeä yksityiskohta**: Hälytys kehottaa käyttäjää lataamaan kuvan ennen meemin luomista.
