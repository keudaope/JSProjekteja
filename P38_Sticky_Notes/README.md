# Nettisivu: https://keudaope.github.io/JSProjekteja/P38_Sticky_Notes

# Johdanto

Sticky Notes -sovellus on käytännöllinen sovellus, joka antaa käyttäjien luoda ja hallita muistilappuja näytöllä. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptiä, HTML:ää ja CSS:ää sekä oppimaan, miten käsitellä käyttäjän toimintoja, päivittää DOM:ia dynaamisesti ja hallita muistiinpanoja käyttämällä paikallista tallennustilaa (local storage) pysyvyyden varmistamiseksi. Käyttäjät voivat lisätä, muokata ja poistaa muistilappuja, jotka tallentuvat ja palautetaan, vaikka sivu päivitetään.

# HTML selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on**: <code><</code>!DOCTYPE html> -määrittely määrittelee dokumentin tyypin ja version, joka tässä tapauksessa on HTML5.
- **Tarkoitus**: Se ilmoittaa verkkoselaimelle, että sivu on kirjoitettu HTML5-kielellä, varmistaen, että se noudattaa nykyaikaisia web-standardeja sivun renderöinnissä.
- **Tärkeä yksityiskohta**: DOCTYPE-määrittelyn sisällyttäminen on tärkeää, jotta vältytään mahdollisilta renderöintiongelmilta eri selaimissa.

## 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on**: <code><</code>html> on juurielementti, joka ympäröi kaiken sisällön verkkosivulla, ja lang="en"-attribuutti määrittelee, että dokumentin kieli on englanti.
- **Tarkoitus**: Lang-attribuutti parantaa saavutettavuutta auttamalla ruudunlukijoita ja muita työkaluja tunnistamaan sivun kielen, mikä parantaa käyttäjäkokemusta henkilöille, jotka tarvitsevat näitä työkaluja.
- **Tärkeä yksityiskohta**: Dokumentin kielen määrittäminen on tärkeää myös hakukoneoptimoinnin (SEO) kannalta.

## 3. Head Tag (<code><</code>head>):

- **Mikä se on**: <code><</code>head> -osio sisältää metadataa ja linkkejä resursseihin, jotka eivät näy sivulla, mutta ovat välttämättömiä toimivuuden kannalta.
- **Tarkoitus**: Se linkittää ulkoisia tiedostoja (kuten CSS ja JavaScript) ja tarjoaa olennaista metadataa (esim. merkistökoodaus ja viewport-asetukset) varmistaakseen oikeanlaisen latautumisen ja mobiiliresponsiivisuuden.
- **Tärkeät yksityiskohdat**:
  - **Charset Meta Tag (<code><</code>meta charset="UTF-8">)**: Määrittää UTF-8:ksi merkistökoodaukseksi, mikä varmistaa, että sivu tukee laajaa joukkoa merkkejä ja symboleja.
  - **Viewport Meta Tag (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">)**: Tekee sivusta responsiivisen asettamalla näkymäportin leveyden laitteen leveyden mukaiseksi.
  - **Title Tag (<code><</code>title>Sticky Notes<code><</code>/title>)**: Näyttää tekstin "Sticky Notes" selaimen välilehdellä ja auttaa käyttäjiä ja hakukoneita tunnistamaan sivun tarkoituksen.
  - **CSS Link Tag (<code><</code>link rel="stylesheet" href="styles.css">)**: Linkittää ulkoiseen CSS-tiedostoon (styles.css), joka tyylittelee sivun HTML-elementit.

## 4. Body Tag (<code><</code>body>):

- **Mikä se on**: <code><</code>body> -tagi ympäröi kaiken sisällön, joka näytetään verkkosivulla, mukaan lukien tekstit, painikkeet ja muistilaput.
- **Tarkoitus**: Se sisältää näkyvät elementit, joiden kanssa käyttäjät ovat vuorovaikutuksessa, ja ne on tyylitelty liitetyllä CSS:llä sekä JavaScript-funktionaalisuuden avulla.
- **Tärkeä yksityiskohta**: Tämä on se paikka, jossa kaikki sovelluksen interaktiiviset elementit ja rakenne luodaan.

## 5. Container Div (<code><</code>div class="container">):

- **Mikä se on**: <code><</code>div> -elementti, jossa on container-luokka, ympäröi sovelluksen pääsisällön, mukaan lukien otsikko, painike ja muistilaput.
- **Tarkoitus**: Se ryhmittelee sovelluksen ydinkomponentit yhteen mahdollistaen keskitetyn tyylittelyn ja asettelun hallinnan CSS:ssä.
- **Tärkeä yksityiskohta**: Container-luokka helpottaa pääsisällön tyylittelyä ja keskittämistä sivulla.

## 6. Heading Tag (<code><</code>h1>Sticky Notes<code><</code>/h1>):

- **Mikä se on**: Otsikkoelementti (<code><</code>h1>), joka näyttää sovelluksen otsikon.
- **Tarkoitus**: Se toimii verkkosivun pääotsikkona, joka selkeästi osoittaa käyttäjälle sovelluksen tarkoituksen (Sticky Notes).
- **Tärkeä yksityiskohta**: <code><</code>h1> -tagia käytetään ensisijaisena otsikkona, ja se on tärkeä saavutettavuuden ja hakukoneoptimoinnin (SEO) kannalta.

## 7. Button (<code><</code>button id="add-note-button">Add Note<code><</code>/button>):

- **Mikä se on**: Painike-elementti, jossa on ID add-note-button, joka mahdollistaa käyttäjien lisätä uusia muistilappuja.
- **Tarkoitus**: Painike käynnistää toiminnon JavaScriptin kautta luodakseen uuden muistilapun ja näyttääkseen sen sivulla.
- **Tärkeä yksityiskohta**: ID add-note-buttonia käytetään painikkeen viittaamiseen JavaScriptissä, mikä mahdollistaa toiminnallisuuden, kun sitä klikataan.

## 8. Notes Container Div (<code><</code>div class="notes-container" id="notes-container">):

- **Mikä se on**: <code><</code>div> -elementti, jossa on notes-container-luokka ja ID notes-container, ja se sisältää kaikki käyttäjän lisäämät muistilaput.
- **Tarkoitus**: Tämä elementti vastaanottaa ja näyttää dynaamisesti uusia muistilappuja, jotka luodaan sen sisälle lapsielementteinä.
- **Tärkeä yksityiskohta**: ID notes-container mahdollistaa JavaScriptin kohdistaa tämä elementti muistilappujen renderöintiä tai päivittämistä varten.

## 9. JavaScript Link (<code><</code>script src="app.js"><code><</code>/script>):

- **Mikä se on**: <code><</code>script> -elementti, joka linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää kaikki sovelluksen toiminnallisuudet.
- **Tarkoitus**: Se pitää JavaScript-logiikan erillään HTML-rakenteesta, noudattaen parhaita käytäntöjä puhtaan ja ylläpidettävän koodin luomiseksi.
- **Tärkeä yksityiskohta**: Linkittämällä skripti <code><</code>body> -tagin alaosaan varmistetaan, että HTML-sisältö on ladattu kokonaan ennen JavaScriptin suorittamista, mikä estää ongelmat, joissa yritetään kohdistaa DOM-elementtejä, jotka eivät ehkä vielä ole olemassa.

# CSS selitys

## 1. Global Styling for body (body):

- **Mikä se on**: body-sääntö tyylittelee koko verkkosivun rungon ja soveltaa tyylejä, jotka vaikuttavat sivun yleiseen ulkoasuun ja asetteluun.
- **Tärkeät ominaisuudet**:
  - **font-family: Arial, sans-serif;**: Asettaa fontin koko sivun tekstille, käyttäen Arialia ensisijaisena fonttina ja varafonttina sans-serif -tyyppiä; tämä varmistaa puhtaan ja modernin ilmeen kaikelle tekstille.
  - **background-color: #f0f0f0;**: Soveltaa vaaleanharmaan taustan koko sivulle, luoden pehmeän, neutraalin taustan, joka erottuu muistilappujen väreistä.
  - **display: flex;**: Määrittää sivun asettelun käyttämään Flexboxia, mikä mahdollistaa sisällön helpon keskittämisen ja asettelun hallinnan body-elementin sisällä.
  - **flex-direction: column;**: Varmistaa, että body-elementin sisäiset elementit (otsikko, painike ja muistilaput) pinotaan pystysuunnassa.
  - **align-items: center;**: Keskittää kaikki elementit vaakasuunnassa sivun sisällä, luoden tasapainoisen ja hyvin jäsennellyn asettelun.
  - **padding: 20px;**: Lisää sisäisen täytön body-elementtiin, luoden tilaa sivun reunojen ja sisällön välille, jotta sisältö ei ole liian lähellä sivun reunoja.
  - **margin: 0;**: Poistaa oletusmarginaalit body-elementin ympäriltä, varmistaen, ettei sivun reunojen ympärille jää odottamattomia välejä.
- **Tarkoitus**: Nämä tyylit varmistavat, että sivun sisältö on keskitetty sekä vaakasuunnassa että pystysuunnassa, samalla kun ne antavat sivulle puhtaan ja tilavan asettelun. Vaalea tausta luo neutraalin pohjan värikkäille muistilapuille.

## 2. Container Styling (.container):

- **Mikä se on**: .container-luokka tyylittelee pääkääreen, joka sisältää otsikon, painikkeen ja muistilappukontin.
- **Tärkeät ominaisuudet**:
  - **text-align: center;**: Varmistaa, että kaikki teksti ja sisältö containerin sisällä on keskitetty vaakasuunnassa; tämä vaikuttaa otsikkoon ja "Add Note" -painikkeeseen.
- **Tarkoitus**: Container tarjoaa keskitetyn asettelun sovelluksen ydinelementeille, tehden käyttöliittymästä helppolukuisen ja käyttäjäystävällisen.

## 3. Notes Container (.notes-container):

- **Mikä se on**: .notes-container-luokka tyylittelee div-elementin, joka sisältää kaikki muistilaput.
- **Tärkeät ominaisuudet**:
  - **display: flex;**: Käyttää Flexboxia muistilappujen asetteluun kontin sisällä.
  - **flex-wrap: wrap;**: Sallii muistilappujen kietoutua seuraavalle riville, jos ne ylittävät kontin leveyden, varmistaen, etteivät ne mene sivusuunnassa yli.
  - **justify-content: center;**: Keskittää muistilaput vaakasuunnassa kontin sisällä.
  - **margin-top: 20px;**: Lisää tilaa "Add Note" -painikkeen ja muistilappujen väliin, estäen niitä olemasta liian lähellä toisiaan.
- **Tarkoitus**: Nämä tyylit varmistavat, että muistilaput on asennettu responsiivisesti, ja ne kääriytyvät uudelle riville tarvittaessa, pitäen ne keskitettynä kontin sisällä.

## 4. Individual Note Styling (.note):

- **Mikä se on**: .note-luokka soveltaa tyylejä yksittäisiin muistilappuihin.
- **Tärkeät ominaisuudet**:
  - **background-color: #ffeb3b;**: Antaa jokaiselle muistilapulle kirkkaankeltaisen taustan, joka muistuttaa perinteisiä muistilappuja.
  - **border: 1px solid #ccc;**: Lisää vaaleanharmaan reunan jokaisen muistilapun ympärille, antaen niille erottuvuutta ja tehden niistä selkeästi näkyviä.
  - **border-radius: 8px;**: Pyöristää hieman muistilappujen kulmia, antaen niille pehmeämmän ja modernimman ilmeen.
  - **width: 200px; height: 200px;**: Kiinnittää jokaisen muistilapun koon 200x200 pikseliin, varmistaen, että kaikki laput ovat saman kokoisia.
  - **padding: 10px;**: Lisää sisäisen täytön muistilapun sisällä, luoden tilaa tekstin (tai syöttöalueen) ja muistilapun reunojen väliin.
  - **margin: 10px;**: Lisää tilaa jokaisen muistilapun ympärille, varmistaen, etteivät ne kosketa toisiaan näytettäessä kontin sisällä.
  - **position: relative;**: Asettaa muistilapun elementiksi, joka toimii sijaintikontekstina absoluuttisesti sijoitetuille lapsielementeille, kuten poistonapille.
- **Tarkoitus**: Nämä tyylit antavat jokaiselle muistilapulle sen erottuvan ulkoasun ja varmistavat, että laput ovat yhtenäisesti kooltaan, tilaltaan ja siististi aseteltuja kontin sisälle.

## 5. Textarea Styling (.note textarea):

- **Mikä se on**: .note textarea tyylittelee tekstinsyöttöalueen jokaisen muistilapun sisällä.
- **Tärkeät ominaisuudet**:
  - **width: 100%; height: 100%;**: Varmistaa, että tekstinsyöttöalue vie koko muistilapun leveyden ja korkeuden, tarjoten käyttäjälle runsaasti tilaa kirjoittaa muistiinpanonsa.
  - **border: none;**: Poistaa oletusreunan tekstinsyöttöalueen ympäriltä, jolloin se sulautuu muistilapun taustaan, luoden puhtaan ja yksinkertaisen ilmeen.
  - **resize: none;**: Poistaa oletusarvoisen koonmuutostoiminnon tekstialueilta, estäen käyttäjiä muuttamasta muistilappujen kokoa.
  - **background: transparent;**: Tekee tekstinsyöttöalueen taustasta läpinäkyvän, jotta muistilapun keltainen tausta säilyy näkyvissä.
  - **font-family: Arial, sans-serif;**: Varmistaa, että tekstialueen fontti vastaa muualla sovelluksessa käytettyä fonttia.
- **Tarkoitus**: Nämä tyylit varmistavat, että tekstialue on saumattomasti integroitu muistilappuun ja tarjoaa käyttäjille puhtaan ja häiriöttömän kirjoitustilan.

## 6. Delete Button (.note button):

- **Mikä se on**: .note button tyylittelee poistopainikkeen jokaisen muistilapun päällä.
- **Tärkeät ominaisuudet**:
  - **position: absolute;**: Asettaa painikkeen absoluuttisesti muistilapun sisällä, jotta se pysyy oikeassa yläkulmassa riippumatta muistilapun sisällöstä.
  - **top: 5px; right: 5px;**: Asettaa painikkeen 5 pikselin päähän muistilapun ylä- ja oikeasta reunasta.
  - **background-color: #f44336;**: Määrittää painikkeen taustaväriksi kirkkaan punaisen, tehden siitä heti tunnistettavan poistopainikkeena.
  - **color: white;**: Määrittää tekstin väriksi valkoisen, luoden korkean kontrastin punaisen taustan kanssa.
  - **border: none;**: Poistaa oletusreunan painikkeen ympäriltä, antaen sille puhtaamman ulkoasun.
  - **border-radius: 4px;**: Lisää hieman pyöristystä painikkeen kulmiin, mikä tekee siitä yhtenäisen muistilapun pyöristetyn muotoilun kanssa.
  - **cursor: pointer;**: Muuttaa kursorin osoittimeksi, kun painikkeen päälle viedään hiiri, osoittaen, että sitä voi klikata.
- **Tarkoitus**: Nämä tyylit tekevät poistopainikkeesta selkeästi näkyvän ja helposti käytettävän, pitäen sen siististi sijoitettuna muistilapun sisällä.

## 7. Delete Button Hover Effect (.note button:hover):

- **Mikä se on**: Poistonapin hover-tila.
- **Tärkeät ominaisuudet**:
  - **background-color: #d32f2f;**: Muuttaa painikkeen taustavärin tummemmaksi punaiseksi, kun sen päällä leijutaan, antaen käyttäjälle visuaalista palautetta.
- **Tarkoitus**: Hover-efekti antaa käyttäjälle välittömän palautteen, kun hän on vuorovaikutuksessa painikkeen kanssa, tehden käyttöliittymästä responsiivisemman ja intuitiivisemman.

## 8. "Add Note" Button (button#add-note-button):

- **Mikä se on**: Tyylittää sivun yläreunan "Add Note" -painikkeen.
- **Tärkeät ominaisuudet**:
  - **padding: 10px 20px;**: Lisää täytettä painikkeen sisälle, tehden siitä näkyvämmän ja helpomman klikata.
  - **margin-top: 20px;**: Lisää tilaa painikkeen ja otsikon väliin, varmistaen, ettei asettelu ole ahdas.
  - **background-color: #007bff;**: Määrittää painikkeen taustaväriksi kirkkaan sinisen, tehden siitä erottuvan päätoimintopainikkeena.
  - **color: white;**: Varmistaa, että painikkeen teksti on helposti luettavissa asettamalla tekstin väriksi valkoisen.
  - **border: none;**: Poistaa oletusreunan painikkeen ympäriltä, antaen sille puhtaamman ulkoasun.
  - **border-radius: 4px;**: Pyöristää hieman painikkeen kulmia, antaen sille modernin ja viimeistellyn ulkoasun.
  - **cursor: pointer;**: Muuttaa kursorin osoittimeksi, kun painikkeen päälle viedään hiiri, osoittaen, että sitä voi klikata.
- **Tarkoitus**: Nämä tyylit tekevät "Add Note" -painikkeesta visuaalisesti erottuvan ja helposti käytettävän, rohkaisten käyttäjiä lisäämään uusia muistilappuja.

## 9. "Add Note" Button Hover Effect (button#add-note-button:hover):

- **Mikä se on**: "Add Note" -painikkeen hover-tila.
- **Tärkeät ominaisuudet**:
  - **background-color: #0056b3;**: Muuttaa painikkeen taustavärin tummemmaksi siniseksi, kun sen päällä leijutaan, antaen käyttäjälle visuaalista palautetta.
- **Tarkoitus**: Hover-efekti tekee sovelluksesta interaktiivisemman ja tarjoaa selvää palautetta, kun käyttäjä on vuorovaikutuksessa painikkeen kanssa.

# JavaScript selitys

## 1. DOMContentLoaded Event Listener (document.addEventListener('DOMContentLoaded', () => {...})):

- **Mikä se on**: Tämä on tapahtumankuuntelija, joka laukeaa, kun HTML-dokumentti on täysin ladattu ja jäsennetty, varmistaen, että kaikki elementit ovat käytettävissä DOM:ssa ennen JavaScriptin suorittamista.
- **Tarkoitus**: DOMContentLoaded:n käyttö varmistaa, että JavaScript-koodi, kuten elementtien manipulointi tai tapahtumankuuntelijoiden lisääminen, suoritetaan vasta, kun dokumentti on täysin ladattu. Ilman tätä skripti saattaa yrittää käsitellä DOM-elementtejä, joita ei vielä ole ladattu.
- **Tärkeä yksityiskohta**: Tämän tapahtumankuuntelijan avulla JavaScript alkaa olla vuorovaikutuksessa sovelluksen kanssa vasta, kun sisältö on valmiina, estäen mahdollisia virheitä.

## 2. Variables for DOM Elements (const addNoteButton, notesContainer):

- **Mikä se on**: Nämä rivit valitsevat tärkeitä elementtejä DOM:sta:
  - **addNoteButton**: Tämä muuttuja viittaa "Add Note" -painikkeeseen, jota käytetään uuden muistilapun luomisen käynnistämiseen.
  - **notesContainer**: Tämä muuttuja viittaa säilöön, jossa kaikki muistilaput näytetään.
- **Tarkoitus**: Näitä muuttujia käytetään skriptissä toiminnallisuuden lisäämiseksi (kuten muistilappujen luominen tai poistaminen). Tallentamalla viittauksia näihin DOM-elementteihin tapahtumankuuntelijoiden lisääminen ja sisällön päivittäminen on helpompaa.
- **Tärkeä yksityiskohta**: getElementById:n käyttö varmistaa, että oikeat elementit kohdistetaan, sillä id-attribuutit ovat ainutlaatuisia sivulla.

## 3. Retrieve and Parse Notes from Local Storage (const notes = JSON.parse(localStorage.getItem('notes')) || []):

- **Mikä se on**: Tämä rivi hakee tallennetut muistilaput selaimen localStorage:a käyttämällä getItem('notes'). JSON-data jäsennetään taulukoksi käyttäen JSON.parse(). Jos tallennettuja muistilappuja ei ole, oletusarvoksi asetetaan tyhjä taulukko.
- **Tarkoitus**: Tämä mahdollistaa sovelluksen muistilappujen säilymisen selaimen istuntojen välillä. Kun sivu ladataan uudelleen, aiemmin tallennetut muistilaput haetaan ja näytetään.
- **Tärkeä yksityiskohta**: localStorage tallentaa tiedot merkkijonoina, joten JSON.parse()-metodia käytetään muuntamaan merkkijono takaisin käyttökelpoiseksi JavaScript-taulukoksi. || [] varmistaa, että sovellus aloittaa tyhjällä taulukolla, jos muistilappuja ei löydy localStorage:sta.

## 4. Event Listener for the "Add Note" Button (addNoteButton.addEventListener('click', addNote)):

- **Mikä se on**: Tämä tapahtumankuuntelija kuuntelee "click"-tapahtumaa "Add Note" -painikkeessa ja käynnistää addNote()-funktion, kun käyttäjä napsauttaa painiketta.
- **Tarkoitus**: Tämä tarjoaa sovelluksen päätoiminnallisuuden, joka lisää uuden muistilapun, kun painiketta napsautetaan. Ilman tätä käyttäjät eivät voisi luoda uusia muistilappuja.
- **Tärkeä yksityiskohta**: Tapahtumankuuntelijoiden kiinnittäminen painikkeisiin mahdollistaa käyttäjän vuorovaikutuksen sovelluksen kanssa. Tässä käyttäjän toiminta käynnistää uuden muistilapun luomisen.

## 5. Function to Add a New Note (function addNote() {...}):

- **Mikä se on**: Tämä funktio vastaa uuden muistilapun lisäämisestä notes-taulukkoon ja sen renderöimisestä sivulle.
- **Vaiheet**:
  - Luo uuden muistilappuobjektin, jolla on yksilöllinen id (käyttäen Date.now() -aikaleimaa) ja tyhjä sisällön merkkijono.
  - Lisää uusi muistilappu notes-taulukkoon.
  - Kutsuu saveNotes()-funktion tallentaakseen päivitetyn taulukon localStorage:en.
  - Kutsuu renderNotes()-funktion päivittääkseen näytön uudella muistilapulla.
- **Tarkoitus**: Tämä funktio mahdollistaa käyttäjien dynaamisen muistilappujen luomisen. Jokainen lisätty muistilappu tallennetaan localStorage:en ja näytetään näytöllä.
- **Tärkeä yksityiskohta**: Date.now():n käyttö varmistaa, että jokaisella muistilapulla on yksilöllinen tunniste (perustuen aikaleimaan), mikä on tärkeää myöhemmille toiminnoille, kuten muistilapun poistamiselle tai päivittämiselle.

## 6. Function to Delete a Note (function deleteNote(id) {...}):

- **Mikä se on**: Tämä funktio poistaa muistilapun notes-taulukosta sen yksilöllisen id:n perusteella.
- **Vaiheet**:
  - Käyttää findIndex()-metodia löytääkseen muistilapun indeksin, joka vastaa annettua id:tä.
  - Poistaa muistilapun kyseisestä indeksistä käyttäen splice()-metodia.
  - Tallentaa päivitetyn notes-taulukon localStorage:en käyttäen saveNotes()-funktiota.
  - Kutsuu renderNotes()-funktion päivittääkseen näytön poistamalla poistetun muistilapun.
- **Tarkoitus**: Tämä funktio mahdollistaa käyttäjien muistilappujen poistamisen sekä näytöltä että localStorage:sta. Ilman tätä laput kasaantuisivat ilman hallintamahdollisuutta.
- **Tärkeä yksityiskohta**: splice()-metodin käyttö mahdollistaa tarkan muistilapun poistamisen löydetystä indeksistä. Muutokset heijastuvat välittömästi sekä sivulla että localStorage:ssa.

## 7. Function to Update a Note’s Content (function updateNoteContent(id, content) {...}):

- **Mikä se on**: Tämä funktio päivittää muistilapun sisällön sen yksilöllisen id:n perusteella.
- **Vaiheet**:
  - Löytää muistilapun find()-metodilla id:tä vastaamalla.
  - Päivittää kyseisen muistilapun content-ominaisuuden.
  - Tallentaa päivitetyn notes-taulukon localStorage:en käyttäen saveNotes()-funktiota.
- **Tarkoitus**: Tämä funktio varmistaa, että kaikki muutokset muistilapun tekstiin tallennetaan ja päivitetään sekä taulukossa että localStorage:ssa.
- **Tärkeä yksityiskohta**: Muistilapun textarea-syöttökentät on suoraan linkitetty tähän funktioon, mikä mahdollistaa dynaamiset päivitykset käyttäjien kirjoittaessa.

## 8. Function to Save Notes to Local Storage (function saveNotes() {...}):

- **Mikä se on**: Tämä funktio muuntaa notes-taulukon JSON-merkkijonoksi ja tallentaa sen localStorage:en avaimella 'notes'.
- **Tarkoitus**: Muistilappujen tallentaminen varmistaa, että käyttäjän laput säilyvät sivun uudelleenlatausten tai istuntojen välillä, luoden saumattoman käyttökokemuksen, jossa laput pysyvät näkyvissä myös selaimen sulkemisen jälkeen.
- **Tärkeä yksityiskohta**: JSON.stringify():n käyttö muuntaa notes-taulukon formaattiin, joka voidaan tallentaa localStorage:en, joka hyväksyy vain merkkijonodataa.

## 9. Function to Render Notes on the Page (function renderNotes() {...}):

- **Mikä se on**: Tämä funktio luo dynaamisesti ja näyttää muistilaput notes-taulukon tietojen perusteella.
- **Vaiheet**:
  - Tyhjentää notesContainerin asettamalla sen innerHTML:n tyhjäksi merkkijonoksi, varmistaen, että näyttö päivitetään ilman muistilappujen monistamista.
  - Kiertää jokaisen notes-taulukon muistilapun.
  - Jokaiselle muistilapulle luodaan uusi div-elementti, asetetaan classiksi .note ja lisätään textarea sisällölle sekä poistonappi.
  - Lisää uusi muistilappu notesContaineriin.
- **Tarkoitus**: Tämä funktio vastaa muistilappujen renderöimisestä käyttöliittymässä. Jokainen lappu näytetään nykyisellä sisällöllä, ja niissä on mukana poistonappi.
- **Tärkeä yksityiskohta**: Tyhjentämällä kontin ennen renderöintiä estetään muistilappujen monistuminen. Textarea on linkitetty updateNoteContent()-funktioon reaaliaikaisten muutosten tallentamiseksi, ja poistonappi on linkitetty deleteNote()-funktioon muistilappujen poistamiseksi.

## 10. Custom Event for Deleting a Note (function deleteNote(id) {...}):

- **Mikä se on**: Mukautettu funktio, joka lähettää tapahtuman muistilapun poistamiseksi. Kun "delete"-painiketta painetaan, se laukaisee tämän funktion, joka lähettää mukautetun tapahtuman, delete-note, sisältäen muistilapun ID:n.
- **Tarkoitus**: Tämä tarjoaa modulaarisemman tavan käsitellä poistoprosessia, parantaen sovelluksen ylläpidettävyyttä.
- **Tärkeä yksityiskohta**: Mukautetut tapahtumat mahdollistavat paremman eriytyksen ja tapahtumien käsittelyn, mikä helpottaa koodin virheenkorjausta ja muokkaamista tulevaisuudessa.
