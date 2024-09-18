# Nettisivu: https://keudaope.github.io/JSProjekteja/P06_Recipe_Finder

# Johdanto

Reseptinhaku-sovellus on kätevä työkalu, joka mahdollistaa käyttäjien etsiä reseptejä ainesosien perusteella ulkoisen APIn avulla. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptin, HTML:n ja ja CSS:n käyttöä samalla, kun he oppivat käsittelemään API-pyyntöjä, käsittelemään JSON-dataa ja päivittämään DOMia dynaamisesti. Käyttäjät voivat syöttää ainesosia ja saada listan resepteistä, jotka sisältävät kyseiset ainesosat.

# HTML Selitys

## 1. DOCTYPE Declaration:

- **Mitä se on**: DOCTYPE-ilmoitus kertoo selaimelle, että dokumentti on kirjoitettu HTML5:llä.
- **Tarkoitus**: Varmistaa, että verkkosivu tulkitaan ja näytetään nykyaikaisilla HTML5-standardeilla, mikä auttaa estämään ongelmia selaimen renderöinnissä.
- **Tärkeä yksityiskohta**: Ilman tätä ilmoitusta selain voi siirtyä "quirks mode" -tilaan, mikä voi johtaa sisältöjen epäjohdonmukaiseen näyttämiseen.

## 2. HTML Tag:

- **Mitä se on**: &lt;html>-tagi ympäröi koko dokumentin ja merkitsee HTML-sisällön alun. lang="en" määrittää dokumentin kielen englanniksi.
- **Tarkoitus**: lang-attribuutti auttaa sekä hakukoneita että ruudunlukijoita ymmärtämään sisällön ensisijaisen kielen, mikä parantaa saavutettavuutta ja hakukoneoptimointia (SEO).
- **Tärkeä yksityiskohta**: On hyvä käytäntö määrittää lang-attribuutti, erityisesti saavutettavuustyökaluille, jotka lukevat sisältöä ääneen käyttäjille.

## 3. Meta Charset Tag:

- **Mitä se on**: &lt;meta charset="UTF-8">-tagi asettaa dokumentin merkkikoodauksen UTF-8-muotoon.
- **Tarkoitus**: Varmistaa, että dokumentti voi näyttää laajan valikoiman merkkejä, mukaan lukien kansainväliset symbolit ja erikoismerkit, ilman ongelmia.
- **Tärkeä yksityiskohta**: Tämä on oleellinen erityisesti kansainvälisille sivustoille, joissa voi olla ei-englanninkielisiä merkkejä, varmistaen niiden oikean esittämisen.

## 4. Meta Viewport Tag:

- **Mitä se on**: &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">-tagi säätää näkymäportin asetukset, jotta verkkosivu olisi responsiivinen.
- **Tarkoitus**: Tämä tekee sivusta responsiivisen mobiililaitteilla, säätäen asettelun vastaamaan ruudun kokoa ja tarjoamaan optimaalisen katselukokemuksen kaikilla laitteilla.
- **Tärkeä yksityiskohta**: Ilman tätä tagia mobiiliselaimet voivat näyttää sivun niin, että tarvitaan vaakasuuntaista vieritystä, mikä voi huonontaa käyttökokemusta.

## 5. Title Tag:

- **Mitä se on**: &lt;title>-elementti määrittää verkkosivun otsikon, joka näkyy selaimen välilehdessä.
- **Tarkoitus**: Tämä otsikko auttaa käyttäjiä tunnistamaan sivun sisällön selaimessaan ja on myös tärkeä hakukoneille sivun indeksoinnissa.
- **Tärkeä yksityiskohta**: Otsikon tulisi olla lyhyt, kuvaileva ja sivun sisältöön liittyvä, jotta käyttäjäkokemus ja SEO paranevat.

## 6. Link to CSS File:

- **Mitä se on**: &lt;link>-tagi liittää HTML-dokumentin ulkoiseen CSS-tyylitiedostoon.
- **Tarkoitus**: Tämä mahdollistaa tyylien erottamisen HTML-rakenteesta, tehden koodista modulaarisempaa, selkeämpää ja helpommin ylläpidettävää. Kaikki verkkosivun tyylit hallitaan ulkoisessa tiedostossa.
- **Tärkeä yksityiskohta**: Ulkoisiin tyylitiedostoihin linkittäminen parantaa sivun latausnopeutta, sillä selain voi tallentaa tyylitiedoston välimuistiin seuraavia käyntejä varten.
  '

## 7. Body Tag:

- **Mitä se on**: &lt;body>-tagi sisältää kaiken verkkosivulla näkyvän sisällön.
- **Tarkoitus**: Kaikki, mitä käyttäjä näkee ja joiden kanssa hän on vuorovaikutuksessa sivulla, kuten teksti, kuvat, lomakkeet ja painikkeet, sijoitetaan body-tagin sisään.
- **Tärkeä yksityiskohta**: Body-tagi on paikka, jossa verkkosivun pääasiallinen rakenne ja sisältö sijaitsevat, ja se on välttämätön sivun asettelun järjestämisessä.

## 8. Main Container (div with class "container"):

- **Mitä se on**: &lt;div>-elementti, jossa on class="container", toimii koko verkkosovelluksen sisällön kääreenä.
- **Tarkoitus**: Kontti järjestää sivun rakenteen ryhmittämällä yhteen liittyvät elementit, kuten otsikon, lomakkeen ja reseptiosion, ja soveltaa siihen erityisiä tyylejä, kuten marginaaleja, täyttöä ja varjoja, keskittääkseen sisällön.
- **Tärkeä yksityiskohta**: Luokkien, kuten container, käyttö mahdollistaa helpomman tyylittelyn CSS:n avulla ja tekee asettelusta responsiivisen ja järjestetyn.

## 9. Heading (h1):

- **Mitä se on**: &lt;h1>-tagia käytetään sivun pääotsikon luomiseen, yleensä sisällön hierarkiassa tärkein otsikko.
- **Tarkoitus**: Otsikko esittelee sivun tarkoituksen käyttäjälle ja antaa kontekstia hakukoneille ja ruudunlukijoille, auttaen sekä käyttäjiä että botteja ymmärtämään sisällön painopisteen.
- **Tärkeä yksityiskohta**: Sivulla tulisi olla vain yksi &lt;h1>, jotta asiakirjarakenne säilyisi oikeana ja SEO paranisi.

## 10. Form Element:

- **Mitä se on**: &lt;form>-elementti kapseloi lomakekentät ja painikkeet, mahdollistaen käyttäjien syöttää tietoja ja lähettää ne käsiteltäväksi.
- **Tarkoitus**: Tässä tapauksessa lomake antaa käyttäjille mahdollisuuden syöttää ainesosia ja lähettää ne hakemaan reseptejä APIn avulla.
- **Tärkeä yksityiskohta**: id="recipe-form" käytetään tunnistamaan ja kohdistamaan lomake JavaScriptissä, ja aria-label-attribuutti tarjoaa lisätietoa ruudunlukijoille, parantaen saavutettavuutta.

## 11. Input Field:

- **Mitä se on**: &lt;input>-elementti, jonka tyyppi on teksti, antaa käyttäjien syöttää tekstiä, tässä tapauksessa ainesosia reseptien hakemista varten.
- **Tarkoitus**: Käyttäjä syöttää ainesosansa tekstikenttään, jota sovellus sitten käyttää reseptien hakuun APIn kautta.
- **Tärkeä yksityiskohta**: placeholder-attribuutti antaa vihjeen käyttäjille, mitä syöttää, ja required-attribuutti varmistaa, että käyttäjä ei voi lähettää lomaketta ilman ainesosien syöttämistä.

## 12. Submit Button:

- **Mitä se on**: &lt;button>-elementti, jonka tyyppi on submit, käytetään lomakkeen lähettämiseen.
- **Tarkoitus**: Kun painiketta painetaan, se lähettää lomakkeen syötetyt tiedot (ainesosat) JavaScript-funktioon käsiteltäväksi ja API-kutsun tekemiseksi reseptien hakemiseksi.
- **Tärkeä yksityiskohta**: aria-label="Find Recipes" parantaa saavutettavuutta tarjoamalla selkeän kuvauksen painikkeen toiminnasta ruudunlukijoille.

## 13. Recipes Section (div with id "recipes"):

- **Mitä se on**: &lt;div>-elementti, jonka id="recipes", toimii säiliönä, johon APIn tulokset (reseptilista) lisätään dynaamisesti.
- **Tarkoitus**: Tämä osio pysyy tyhjänä, kunnes JavaScript lisää siihen reseptitiedot, kuten otsikot, kuvat ja kuvaukset, API haun jälkeen.
- **Tärkeä yksityiskohta**: id="recipes" avulla JavaScript voi helposti kohdistaa ja päivittää tämän osion sisällön reseptitiedoilla.

## 14. JavaScript Link:

- **Mitä se on**: &lt;script>-tagi yhdistää HTML-dokumentin ulkoiseen JavaScript-tiedostoon.
- **Tarkoitus**: Liitetty JavaScript-tiedosto sisältää logiikan, joka käsittelee lomakkeen lähettämisen, tekee API-kutsut ja päivittää dynaamisesti verkkosivun APIn palauttamilla resepteillä.
- **Tärkeä yksityiskohta**: Sijoittamalla skripti body-osan loppuun varmistetaan, että HTML-sisältö on ladattu kokonaan ennen kuin JavaScript suoritetaan, mikä parantaa suorituskykyä ja ehkäisee virheitä.

## 15. Closing Body and HTML Tags:

- **Mitä se on**: Sulkevat &lt;/body>- ja &lt;/html>-tagit merkitsevät body-sisällön ja HTML-dokumentin lopun.
- **Tarkoitus**: Nämä tagit merkitsevät sisällön lopun ja varmistavat, että kaikki elementit on suljettu oikein.

# **CSS Selitys**

## 1. **General Reset and Box-Sizing:**

- **Mitä se on**: \*-valitsin soveltaa tyylejä kaikkiin sivun elementteihin.
- **Tarkoitus**: Asettaa box-sizing: border-box, joka varmistaa, että elementtien leveys ja korkeus sisältävät myös reunat ja täytön, mikä auttaa välttämään asetteluun liittyviä ongelmia. margin: 0 ja padding: 0 nollaavat selainten oletusmarginaalit ja täytöt, mikä luo johdonmukaisemman asettelun.
- **Tärkeä yksityiskohta**: Tällaisen yleisen resetin avulla on helpompi hallita elementtien välistä tilaa eri selaimissa.

## 2. **Body Styling:**

- **Mitä se on**: Body-tyylit määrittävät koko sivun ulkonäön ja asettelun.
- **Tarkoitus**:
  - **font-family: 'Poppins', sans-serif** antaa sivulle modernin ja siistin ilmeen.
  - **background: linear-gradient(135deg, #74ebd5, #acb6e5)** luo syvyyttä ja visuaalista vetovoimaa lisäävän gradienttitaustan.
  - **display: flex; justify-content: center; align-items: flex-start** keskittää sisällön vaakasuunnassa ja asettaa sen sivun yläreunaan.
  - **height: 100vh** varmistaa, että body täyttää koko näkymäkorkeuden, ja overflow-y: auto mahdollistaa pystysuuntaisen vierityksen, kun sisältö on näkymää pidempi.
- **Tärkeä yksityiskohta**: Flexboxin ja 100vh yhdistelmä varmistaa, että sisältö on keskitetty ja hyvin kohdistettu, kun taas gradienttitausta luo modernin ja visuaalisesti miellyttävän ilmeen.

## 3. **Container Styling:**

- **Mitä se on**: .container-luokkaa sovelletaan pääsisältökääreeseen.
- **Tarkoitus**:
  - **background-color: white** luo siistin kontrastin gradienttitaustaan nähden.
  - **padding: 30px** lisää sisäistä tilaa sisällön ympärille parantaen luettavuutta.
  - **border-radius: 15px** pyöristää kulmat, antaen pehmeämmän ja modernimman ilmeen.
  - **box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2)** lisää hienovaraisen varjon säiliön ympärille, mikä antaa sille syvyyttä ja vaikutelman, että se nousee taustasta.
  - **max-width: 500px** rajoittaa säiliön leveyttä paremman luettavuuden takaamiseksi suuremmilla näytöillä, kun taas margin-top ja margin-bottom luovat tilaa säiliön ja sivun reunojen välille.
- **Tärkeä yksityiskohta**: Yhdistelmä varjoja, pyöristettyjä kulmia ja hienovarainen animaatio tekee säiliöstä modernin korttimaisen, joka on yleinen suunnittelumalli sovelluksissa.

## 4. **Heading Styling (h1):**

- **Mitä se on**: h1-tyylit vaikuttavat sivun pääotsikkoon.
- **Tarkoitus**:
  - **font-size: 2em** suurentaa otsikkoa paremman luettavuuden ja korostuksen takaamiseksi.
  - **margin-bottom: 20px** lisää tilaa otsikon ja alla olevan lomakkeen väliin, varmistaen, ettei asettelu tunnu liian ahtaalta.
  - **color: #333** asettaa tummanharmaan värin, joka on silmille helpompi verrattuna mustaan ja luo hyvän kontrastin valkoiseen taustaan.
  - **Tärkeä yksityiskohta**: Hieman suurempi fonttikoko ja hyvä tila parantavat otsikon näkyvyyttä ilman, että se vaikuttaisi liian hallitsevalta.

## 5. **Form Styling:**

- **Mitä se on**: Form-elementti ryhmittelee syöttökentän ja painikkeen.
- **Tarkoitus**:
  - **display: flex ja flex-direction: column** pinoavat lomake-elementit (syöttökenttä ja painike) pystysuunnassa.
  - **align-items: center** keskittää lomakkeen elementit vaakasuunnassa säiliön sisällä.
  - **margin-bottom: 20px** luo tilaa lomakkeen ja reseptiluettelon väliin, pitäen asettelun siistinä ja organisoituna.
  - **Tärkeä yksityiskohta**: Flexboxin käyttö varmistaa, että lomakkeen elementit ovat linjassa ja tasaisesti sijoitettuja, mikä luo siistin ja responsiivisen suunnittelun.

## 6. **Input Field Styling:**

- **Mitä se on**: input[type="text"]-tyylit määrittelevät tekstinsyöttökentän ulkonäön, jossa käyttäjät syöttävät ainesosia.
- **Tarkoitus**:
  - **width: 100%** varmistaa, että syöttökenttä vie koko lomakkeen leveyden, mikä takaa responsiivisuuden ja yhtenäisen ulkonäön.
  - **padding: 12px** lisää tilaa syöttökentän sisälle, mikä helpottaa sen käyttöä.
  - **margin-bottom: 15px** luo tilaa syöttökentän ja painikkeen väliin, parantaen luettavuutta ja lomakkeen kokonaisasettelua.
  - **border: 1px solid #ccc** luo hienovaraisen reunan syöttökentän ympärille, ja border-radius: 6px pyöristää kulmat, mikä vastaa sovelluksen yleistä suunnittelua.
- **Tärkeä yksityiskohta**: Syöttökentän pehmusteet, leveys ja varjo tekevät siitä käyttäjäystävällisen, responsiivisen ja visuaalisesti houkuttelevan.

## 7. **Input Focus State:**

- **Mitä se on**: input[type="text"] sääntö määrittelee syöttökentän tyylin, kun siihen klikataan tai keskitytään.
- **Tarkoitus**:
  - **border-color: #28a745** muuttaa reunavärin vihreäksi, kun syöttökenttä on keskittynyt, tarjoten selkeän visuaalisen palautteen siitä, että kenttä on aktiivinen.
  - **outline: none** poistaa oletusarvoisen kehystyksen, korvaten sen modernimmalla ja hienovaraisemmalla efektillä.
- **Tärkeä yksityiskohta**: Tämä keskittymistehoste auttaa ohjaamaan käyttäjän huomion aktiiviseen lomakekenttään, parantaen kokonaiskäyttökokemusta.

## 8. **Button Styling:**

- **Mitä se on**: Button-tyylit koskevat "Find Recipes" -painiketta, joka lähettää lomakkeen.
- **Tarkoitus**:
  - **width: 100%** varmistaa, että painike venyy koko lomakkeen leveyteen, vastaten syöttökentän leveyttä.
  - **padding: 12px 24px** tarjoaa mukavan klikkausalueen, mikä tekee painikkeesta helppokäyttöisen.
  - **background-color: #28a745** antaa painikkeelle vihreän taustan, joka viestii positiivisesta toiminnosta (kuten lomakkeen lähettämisestä).
  - **color: white** varmistaa, että teksti erottuu hyvin vihreästä taustasta.
- **Tärkeä yksityiskohta**: Painikkeen väri, varjo ja hover-tehosteet saavat sen erottumaan, mikä rohkaisee käyttäjän vuorovaikutusta.

## 9. **Button Hover Effect:**

- **Mitä se on**: button määrittelee, miten painike käyttäytyy, kun käyttäjä vie hiiren sen päälle.
- **Tarkoitus**:
  - **background-color: #218838** tummenee vihreä tausta hover-tilassa, tarjoten visuaalisen palautteen siitä, että painike on interaktiivinen.
- **Tärkeä yksityiskohta**: Hienovarainen värinmuutos tekee painikkeesta responsiivisen tuntuisen ja antaa käyttäjille varmuuden siitä, että heidän toimensa rekisteröidään.

## 10. **Recipe Container Styling:**

- **Mitä se on**: .recipes-luokkaa sovelletaan säiliöön, johon reseptikortit lisätään dynaamisesti.
- **Tarkoitus**:
  - **margin-top: 20px** lisää tilaa lomakkeen ja reseptiluettelon väliin, estäen asettelun ahtautumisen.
- **Tärkeä yksityiskohta**: Hyvin sijoitettu marginaali ja vasemmalle tasattu teksti parantavat reseptitietojen esitystä.

## 11. **Recipe Card Styling:**

- **Mitä se on**: .recipe-luokkaa sovelletaan yksittäisiin reseptikortteihin.
- **Tarkoitus**:
  - **background-color: #fff** antaa kortille valkoisen taustan, luoden kontrastin sivun taustaa vasten.
  - **margin: 10px 0** lisää tilaa jokaisen reseptikortin väliin, varmistaen, etteivät ne mene päällekkäin.
  - **padding: 15px** lisää tilaa kortin sisälle, parantaen sisällön luettavuutta.
  - **box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)** antaa kortille syvyyttä, tehden siitä erottuvan taustasta.
- **Tärkeä yksityiskohta**: Kortin pehmusteet, varjo ja pyöristetyt kulmat antavat reseptikorteille siistin ja ammattimaisen ulkoasun.

## 12. **Recipe Hover Effect:**

- **Mitä se on**: .recipe sääntö määrittelee, miten reseptikortit käyttäytyvät, kun niihin viedään hiiri päälle.
- **Tarkoitus**:
  - **transform: translateY(-5px)** nostaa korttia hieman hover-tilassa, luoden interaktiivisemman tunteen.
- **Tärkeä yksityiskohta**: Hover-tehoste antaa käyttäjille palautetta ja tekee käyttöliittymästä dynaamisemman ja responsiivisemman.

## 13. **Recipe Title Styling:**

- **Mitä se on**: .recipe h3 -sääntö soveltaa tyylejä jokaisen reseptin otsikkoon.
- **Tarkoitus**:
  - **font-size: 1.2em** suurentaa fonttikokoa, jotta otsikko erottuu.
  - **Tärkeä yksityiskohta**: Fontin hienoinen suurennus ja tila parantavat reseptin otsikoiden hierarkiaa ja luettavuutta.

## 14. **Recipe Image Styling:**

- **Mitä se on**: .recipe img -sääntö tyylittää reseptikuvat.
- **Tarkoitus**:
  - **width: 100%** varmistaa, että kuva täyttää koko kortin leveyden, luoden responsiivisen asettelun.
- **Tärkeä yksityiskohta**: Koko leveydelle venyvä kuva pyöristetyillä kulmilla ja hover-zoomaustehoste tekevät reseptikortista visuaalisesti houkuttelevamman.

## 15. **Image Hover Effect:**

- **Mitä se on**: .recipe img sääntö määrittelee, miten reseptikuvat käyttäytyvät, kun niihin viedään hiiri päälle.
- **Tarkoitus**:
  - **transform: scale(1.05)** lisää kevyen zoomaustehosteen kuvaan hover-tilassa, kiinnittäen huomion visuaaliseen sisältöön.
- **Tärkeä yksityiskohta**: Hover-tehoste tekee reseptikuvista interaktiivisempia ja houkuttelevampia käyttäjälle.

## 16. **Paragraph (Recipe Description) Styling:**

- **Mitä se on**: .recipe p -sääntö soveltaa tyylejä reseptin kuvauksiin.
- **Tarkoitus**:
  - **color: #555** asettaa keskivärin harmaaksi toissijaista tekstiä varten.
- **Tärkeä yksityiskohta**: Kappaletyylit varmistavat, että reseptin kuvaukset ovat luettavia, mutta eivät vie liikaa huomiota otsikosta tai kuvasta.

## 17. **Fade-in Animation:**

- **Mitä se on**: @keyframes fadeIn määrittelee yksinkertaisen fade-in-tehosteen.
- **Tarkoitus**:
  - Se lisää elementtien läpinäkyvyyttä asteittain 0:sta 1:een, jolloin ne ilmestyvät sivulle pehmeästi, kun sivu latautuu.
- **Tärkeä yksityiskohta**: Tämä hienovarainen tehoste parantaa käyttökokemusta lisäämällä sulavan siirtymän, kun säiliön sisältö ilmestyy.

# JavaScript Selitys

## 1. DOMContentLoaded-tapahtumankuuntelija:

- **Mitä se on**: document.addEventListener('DOMContentLoaded', ...) on tapahtumankuuntelija, joka odottaa koko HTML-dokumentin latautumista ennen kuin skripti ajetaan.
- **Tarkoitus**: JavaScriptin tulisi olla vuorovaikutuksessa DOMin (Document Object Model) kanssa vasta, kun kaikki HTML-elementit on ladattu. Odottamalla DOMContentLoaded-tapahtumaa koodi varmistaa, että kaikki elementit ovat käytettävissä ja valmiita käsittelyyn.
- **Tärkeä yksityiskohta**: Tämä estää JavaScriptia yrittämästä käsitellä elementtejä (kuten lomake tai syöttökentät), joita selain ei ole vielä luonut.

## 2. Form-elementtien valinta (recipeForm, ingredientsInput, recipesContainer):

- **Mitä se on**: Nämä muuttujat (recipeForm, ingredientsInput ja recipesContainer) tallentavat viitteitä tiettyihin DOM-elementteihin käyttämällä document.getElementById().
- **Tarkoitus**:
  - **recipeForm**: Kohdistaa lomake-elementin, joka käsittelee ainesosien lähettämisen.
  - **ingredientsInput**: Kohdistaa syöttökentän, johon käyttäjät kirjoittavat ainesosat.
  - **recipesContainer**: Viittaa &lt;div>-elementtiin, jossa reseptit näytetään.
- **Tärkeä yksityiskohta**: Näiden elementtien tallentaminen muuttujiksi helpottaa niiden käyttöä koodin eri osissa (esim. lomakkeen lähettäminen, syöttöarvojen lukeminen ja sisällön lisääminen reseptiosioon).

## 3. Form-lähetyksen tapahtumankuuntelija:

- **Mitä se on**: recipeForm.addEventListener('submit', ...) kuuntelee, kun käyttäjä lähettää lomakkeen.
- **Tarkoitus**: Kun käyttäjä klikkaa "Find Recipes" -painiketta, lomake käynnistää lähetyksen tapahtuman. Tämä funktio keskeyttää lähetyksen, estäen oletuskäyttäytymisen (joka päivittäisi sivun) ja käsittelee syötetyt tiedot reseptien hakemiseksi.
- **Tärkeä yksityiskohta**: event.preventDefault() on ratkaiseva tässä, koska se estää lomakkeen oletustoiminnan (sivun päivityksen), jolloin voimme käsitellä lomakkeen lähetyksen kokonaan JavaScriptillä.

## 4. Ainesosasyötteen saaminen:

- **Mitä se on**: const ingredients = ingredientsInput.value.trim(); hakee käyttäjän syötteen syöttökentästä ja poistaa johtavat tai perässä olevat välilyönnit.
- **Tarkoitus**: Meidän täytyy kerätä käyttäjän kirjoittamat ainesosat. .trim()-funktio poistaa tarpeettomat välilyönnit syötteen alusta tai lopusta, varmistaen, että APIin lähetetään puhdasta dataa.
- **Tärkeä yksityiskohta**: On tärkeää varmistaa, että syöte on puhdas ennen kuin se lähetetään API:lle virheiden tai epätarkkojen tulosten välttämiseksi.

## 5. Tarkistetaan, onko ainesosia annettu:

- **Mitä se on**: if (ingredients)-lause tarkistaa, onko käyttäjä syöttänyt mitään ainesosia.
- **Tarkoitus**: Estää API-kutsun tekeminen, jos syöte on tyhjä. Jos käyttäjä lähettää lomakkeen kirjoittamatta mitään, tämä tarkistus varmistaa, että mitään ei tapahdu.
- **Tärkeä yksityiskohta**: Tämä yksinkertainen ehto auttaa estämään turhia API-kutsuja, parantaen käyttäjäkokemusta ja sovelluksen suorituskykyä.

## 6. Ensimmäinen API-kutsu (findByIngredients):

- **Mitä se on**: await fetch() tekee asynkronisen API-kutsun Spoonacular API:lle käyttäjän syötteen perusteella.
- **Tarkoitus**: Tämä kutsu lähettää API pyynnön, jossa annetaan käyttäjän syöttämät ainesosat. API palauttaa listan resepteistä, jotka sisältävät kyseiset ainesosat.
- **Tärkeä yksityiskohta**: API-avaimen (YOUR_API_KEY) täytyy olla korvattu omalla Spoonacular API-avaimella. await pysäyttää funktion, kunnes API vastaa, varmistaen, että sovellus jatkaa vasta, kun tiedot on haettu.

## 7. API-vastauksen muuntaminen JSON-muotoon:

- **Mitä se on**: const recipes = await response.json(); muuntaa API-vastauksen JSON-muotoon.
- **Tarkoitus**: API-vastaukset ovat yleensä JSON-muodossa, joten ne täytyy muuntaa JavaScript-objekteiksi ennen kuin dataa voidaan käyttää.
- **Tärkeä yksityiskohta**: await varmistaa, että koodi odottaa API-vastauksen täydellistä jäsentämistä ennen kuin siirrytään seuraavaan vaiheeseen. Ilman awaitia funktio voisi yrittää käyttää dataa ennen kuin se on valmis.

## 8. Aikaisempien tulosten poistaminen:

- **Mitä se on**: recipesContainer.innerHTML = ''; tyhjentää reseptikontainerin sisällön.
- **Tarkoitus**: Joka kerta, kun käyttäjä syöttää uusia ainesosia, edelliset tulokset tyhjennetään näytöltä uusien reseptien tieltä.
- **Tärkeä yksityiskohta**: Tämä varmistaa, että sivu ei näytä vanhoja tuloksia, kun uusia reseptejä haetaan, säilyttäen käyttöliittymän puhtaana.

## 9. Toinen API-kutsu (Reseptien tietojen haku):

- **Mitä se on**: Loopin sisällä koodi tekee toisen API-kutsun käyttäen fetch() jokaisen reseptin yksityiskohtien hakemiseen sen yksilöllisen resepti-ID:n perusteella.
- **Tarkoitus**: Ensimmäinen API-kutsu palauttaa perusreseptitiedot, kun taas toinen API-kutsu hakee yksityiskohtaisempia tietoja, kuten lyhyen kuvauksen (summary) jokaisesta reseptistä.
- **Tärkeä yksityiskohta**: Toinen API-kutsu on tarpeellinen, koska alkuperäiset hakutulokset sisältävät vain rajalliset tiedot. Hakemalla yksityiskohtia parannetaan käyttäjäkokemusta näyttämällä hyödyllisempää sisältöä (kuten reseptin kuvaus).

## 10. Jokaisen reseptin näyttäminen (displayRecipe-funktio):

- **Mitä se on**: displayRecipe() luo ja lisää uuden reseptikortin recipesContainer-elementtiin jokaiselle reseptille.
- **Tarkoitus**: Jokaiselle API:sta palautetulle reseptille funktio luo uuden div-elementin, asettaa sen HTML-sisällön, joka sisältää reseptin otsikon, kuvan ja lyhyen kuvauksen, ja liittää sen DOMiin.
- **Tärkeä yksityiskohta**: Tämä funktio vastaa sivun päivittämisestä reaaliajassa haetun datan avulla, luoden saumattoman käyttäjäkokemuksen, kun uusia reseptejä ladataan.

## 11. Reseptikortin rakenne:

- **Mitä se on**: displayRecipe()-funktion sisällä recipeDiv.innerHTML luo sisällön rakenteen jokaiselle reseptikortille.
- **Tarkoitus**: HTML-sisältö sisältää reseptin otsikon, kuvan ja lyhyen kuvauksen, jotka kaikki lisätään dynaamisesti verkkosivulle.
- **Tärkeä yksityiskohta**: Dynaamisesti luomalla tämä sisältö sovellus voi näyttää useita reseptejä ilman, että tarvitsee kovakoodattua HTML:ää, mikä tekee siitä joustavan ja laajennettavan.

## 12. Virheenkäsittely:

- **Mitä se on**: catch (error)-lohko nappaa kaikki virheet, jotka ilmenevät API-pyynnön aikana.
- **Tarkoitus**: Jos jokin menee pieleen (esim. API-avain on virheellinen, ei ole internet-yhteyttä tai API on alhaalla), virheenkäsittely varmistaa, että käyttäjä näkee ystävällisen virheilmoituksen eikä rikki mennyttä sovellusta.
- **Tärkeä yksityiskohta**: Ilman asianmukaista virheenkäsittelyä käyttäjät saattaisivat jäädä hämmentyneiksi, jos API-kutsussa tapahtuu jotain odottamatonta. displayError()-funktio näyttää yksinkertaisen viestin käyttäjälle, jos jokin menee pieleen.

## 13. Virheen näyttäminen (displayError-funktio):

- **Mitä se on**: displayError()-funktio asettaa recipesContainer-elementin sisällön käyttäjäystävälliseksi virheilmoitukseksi.
- **Tarkoitus**: Jos API-kutsussa ilmenee ongelma, tämä funktio antaa palautetta käyttäjälle, ilmoittaen, että reseptejä ei voitu hakea.
- **Tärkeä yksityiskohta**: Tämä funktio parantaa käyttäjäkokemusta antamalla selkeää palautetta virhetilanteissa sen sijaan, että jättäisi sivun tyhjäksi tai rikkinäiseksi.

## 14. Asynkroninen ohjelmointi:

- **Mitä se on**: async ja await-avainsanat tekevät API-pyynnöistä asynkronisia, mikä tarkoittaa, että ne eivät estä muun koodin suoritusta odottaessaan vastausta.
- **Tarkoitus**: Asynkroninen ohjelmointi mahdollistaa datan hakemisen ulkoisista lähteistä (kuten API) ilman, että käyttöliittymä jäätyy. await-avainsana varmistaa, että sovellus odottaa API-vastausta ennen etenemistä, estäen ongelmia kuten määrittelemätöntä dataa tai keskeneräisiä näyttöjä.
- **Tärkeä yksityiskohta**: Asynkronisten funktioiden käyttö parantaa sovelluksen suorituskykyä ja reagointikykyä, erityisesti hitaiden verkkopyyntöjen tai suurten tietomäärien kanssa työskennellessä.
