# Nettisivu: https://keudaope.github.io/JSProjekteja/P13_Chat_App

### HUOM! Vaatii "node server.js" -komennon toimiakseen

# Johdanto

Simple Chat App on reaaliaikainen chat-sovellus, jonka avulla käyttäjät voivat lähettää ja vastaanottaa viestejä välittömästi. Tämä projekti auttaa aloittelijoita harjoittelemaan JavaScriptin, HTML:n ja CSS:n käyttöä samalla, kun opitaan WebSocketien käyttöä reaaliaikaiseen viestintään. Käyttäjät voivat liittyä chattiin, lähettää viestejä ja nähdä muiden käyttäjien viestit reaaliajassa.

# HTML selitys

## 1. DOCTYPE Declaration (<code><</code>!DOCTYPE html>):

- **Mikä se on**: <code><</code>!DOCTYPE html> -määrittely dokumentin yläosassa kertoo selaimelle, että sivu on kirjoitettu HTML5:llä.
- **Tarkoitus**: Tämä varmistaa, että selain renderöi dokumentin standardien mukaisessa tilassa, mahdollistaen modernien ominaisuuksien ja toimintojen käytön.
- **Tärkeä yksityiskohta**: On olennaista aina sisällyttää <code><</code>!DOCTYPE html> -määrittely dokumentin alkuun, jotta vältetään mahdolliset yhteensopivuusongelmat eri selainten kanssa.

## 2. HTML Tag (<code><</code>html lang="en">):

- **Mikä se on**: <code><</code>html -tagi on juuri-elementti, joka käärii kaiken verkkosivun sisällön. lang="en"-attribuutti osoittaa, että dokumentti on kirjoitettu englanniksi.
- **Tarkoitus**: Kielen määrittäminen parantaa saavutettavuutta ruudunlukijoille ja auttaa hakukoneita, kuten Googlea, indeksoimaan sisällön tarkemmin käyttäjille, jotka etsivät tietoa englanniksi.
- **Tärkeä yksityiskohta**: lang-attribuutti on erityisen hyödyllinen avustavissa teknologioissa ja hakukoneille, jotta ne ymmärtävät verkkosivun kielellisen kontekstin.

## 3. Head Tag (<code><</code>head>):

- **Mikä se on**: <code><</code>head -elementti sisältää verkkosivun metatiedot, kuten merkistökoodauksen, viewport-asetukset responsiivisuutta varten, linkit ulkoisiin resursseihin ja dokumentin otsikon.
- **Tarkoitus**: <code><</code>head -osio määrittää, miten sivu on jäsennelty, mukaan lukien sen otsikko ja tyylit, sekä lataa resursseja, kuten CSS:ää ja fontteja. Se ei sisällä näkyvää sisältöä, mutta varmistaa, että sivu on oikein konfiguroitu selainta varten.
- **Tärkeät yksityiskohdat**:
  - **Charset** (<code><</code>meta charset="UTF-8">): Määrittää UTF-8-merkistönkoodauksen, joka tukee useimpia merkkejä ja symboleja kaikista kielistä;
  - **Viewport Meta Tag** (<code><</code>meta name="viewport" content="width=device-width, initial-scale=1.0">): Varmistaa, että sivu on responsiivinen säätämällä sen leveys vastaamaan laitteen näyttöä, erityisesti mobiililaitteilla;
  - **Google Fonts** (<code><</code>link href="[https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap](https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap)" rel="stylesheet">): Lataa "Roboto"-fontin Google Fontsista, antaen sivulle modernin ja puhtaan ulkoasun.

## 4. Title Tag (<code><</code>title>):

- **Mikä se on**: <code><</code>title -tagi määrittää verkkosivun otsikon, joka näkyy selaimen välilehdessä.
- **Tarkoitus**: Se antaa verkkosivulle nimen, jonka käyttäjät näkevät selaimen välilehdessä, ja sillä on merkitystä myös hakukoneoptimoinnissa (SEO). Otsikko "Modern Chat App" on kuvaava ja auttaa hakukoneita ymmärtämään sivun tarkoitusta.
- **Tärkeä yksityiskohta**: Otsikko on tärkeä sekä käyttäjäkokemuksen että hakukoneiden sijoituksen kannalta, sillä se kuvaa sivun sisällön selkeästi ja ytimekkäästi.

## 5. Body Tag (<code><</code>body>):

- **Mikä se on**: <code><</code>body -tagi sisältää kaiken verkkosivun näkyvän sisällön, mukaan lukien tekstin, lomakkeet, painikkeet ja muut interaktiiviset elementit.
- **Tarkoitus**: Kaikki, mitä näytetään ruudulla, sijoitetaan <code><</code>body -tagin sisälle. Se toimii pääsäiliönä kaikelle sisällölle ja on paikka, jossa chat-sovelluksen rakenne luodaan.
- **Tärkeä yksityiskohta**: Body-elementti sisältää sekä HTML-rakenteen että sisällön, jota muotoillaan CSS:n avulla ja tehdään interaktiiviseksi JavaScriptin avulla.

## 6. Chat Container (<code><</code>div class="chat-container">):

- **Mikä se on**: Tämä <code><</code>div käärii koko chat-sovelluksen sisällön, mukaan lukien otsikon, viestit ja lomakkeen.
- **Tarkoitus**: Säiliö ryhmittelee kaikki siihen liittyvät elementit yhteen keskeiseen elementtiin, mikä helpottaa tyylin määrittämistä ja asettelun hallintaa. Se toimii myös visuaalisena rajana chat-sovellukselle.
- **Tärkeä yksityiskohta**: class="chat-container" -luokka mahdollistaa säiliön kohdistamisen erityisillä tyyleillä, kuten taustavärillä, täytteellä ja varjostuksilla, antaen sovellukselle korttimaisen ulkoasun.

## 7. Heading (<code><</code>h1>Chat App</code>):

- **Mikä se on**: <code><</code>h1 -tagi edustaa chat-sovelluksen pääotsikkoa.
- **Tarkoitus**: Tämä otsikko kertoo käyttäjille sivun tarkoituksesta ja tekee chat-sovelluksen otsikosta visuaalisesti merkittävän. <code><</code>h1 -elementti on tärkeä sekä SEO:n että saavutettavuuden kannalta.
- **Tärkeä yksityiskohta**: <code><</code>h1 -tagia käytetään sivun tärkeimpänä otsikkona ja se auttaa hakukoneita ymmärtämään sisällön rakenteen. Se tulisi käyttää vain kerran per sivu.

## 8. Message Display Area (<code><</code>div id="messages">):

- **Mikä se on**: Tämä <code><</code>div toimii säiliönä, johon chat-viestit dynaamisesti näytetään.
- **Tarkoitus**: Se tarjoaa omistetun tilan keskusteluhistorian näyttämiseen. JavaScript päivittää tämän elementin dynaamisesti uusilla viesteillä niiden vastaanottamisen tai lähettämisen yhteydessä.
- **Tärkeä yksityiskohta**: id="messages" -attribuutti mahdollistaa tämän säiliön helpon viittaamisen JavaScriptissä, joka liittää uudet viestielementit sen sisään. overflow-y: auto -tyyli mahdollistaa vierittämisen, kun viestit ylittävät säiliön korkeuden.

## 9. Form Element (<code><</code>form id="message-form">):

- **Mikä se on**: Tämä <code><</code>form-elementti sisältää viestin syöttökentän ja lähetä-painikkeen. Se mahdollistaa käyttäjien viestien lähettämisen.
- **Tarkoitus**: Lomakkeet keräävät ja lähettävät käyttäjätietoja. Tässä tapauksessa lomake kerää käyttäjän viestin, joka lähetetään WebSocketin kautta palvelimelle.
- **Tärkeä yksityiskohta**: id="message-form" mahdollistaa JavaScriptin liittämisen tapahtumankuuntelijan lomakkeen lähetykseen, varmistaen, että viestit lähetetään WebSocketin kautta ilman sivun uudelleenlatausta.

## 10. Message Input Field (<code><</code>input type="text" id="message-input" placeholder="Type a message..." required>):

- **Mikä se on**: Tämä on syöttökenttä, johon käyttäjä kirjoittaa viestinsä ennen lähettämistä.
- **Tarkoitus**: Syöttöelementti kerää käyttäjän viestin tekstinä. placeholder-attribuutti antaa vihjeen käyttäjälle, näyttäen "Type a message..." ennen kuin hän alkaa kirjoittaa.
- **Tärkeä yksityiskohta**: required-attribuutti varmistaa, että käyttäjä ei voi lähettää lomaketta ilman viestiä. id="message-input" mahdollistaa JavaScriptin viittaamisen ja syöttökentän arvon käsittelyn lomakkeen lähetyksen yhteydessä.

## 11. Submit Button (<code><</code>button type="submit">Send</button>):

- **Mikä se on**: <code><</code>button-elementti lähettää lomakkeen, kun sitä klikataan, käynnistäen viestin lähettämistoiminnon.
- **Tarkoitus**: Kun käyttäjä klikkaa "Send", lomake lähettää syötetyn viestin, joka käsitellään JavaScriptin kautta ja lähetetään WebSocket-yhteyden kautta.
- **Tärkeä yksityiskohta**: type="submit"-attribuutti varmistaa, että painike käynnistää lomakkeen lähetyksen, jonka JavaScript sieppaa estääkseen oletusarvoisen sivun uudelleenlatauksen.

## 12. Script Tag (<code><</code>script src="app.js"></code>):

- **Mikä se on**: <code><</code>script -tagi linkittää ulkoiseen JavaScript-tiedostoon (app.js), joka sisältää logiikan WebSocket-yhteyden käsittelemiseksi ja chat-toimintojen hallinnoimiseksi.
- **Tarkoitus**: Se erottaa rakenteen (HTML), tyylin (CSS) ja toiminnallisuuden (JavaScript) eri tiedostoihin, mikä parantaa koodin organisointia ja ylläpidettävyyttä.
- **Tärkeä yksityiskohta**: Ulkoiseen JavaScript-tiedostoon linkittäminen pitää HTML:n puhtaana ja keskittyy rakenteeseen samalla, kun toiminnallisuus siirtyy skriptiin, noudattaen parhaita käytäntöjä modulaarisessa kehityksessä.

# CSS selitys

## 1. Global Reset (\* Selector):

- **Mikä se on**: Universaali \*-valitsin soveltaa tyylejä kaikkiin sivun elementteihin.
- **Tarkoitus**: Tämä sääntö nollaa marginaalit, täytteet ja soveltaa box-sizing: border-box -asetuksen kaikille elementeille. Tämä varmistaa, että täytteet ja reunukset sisältyvät elementin kokonaisleveyteen ja -korkeuteen, tehden asettelulaskelmista helpompia ja yhdenmukaisia eri selaimissa.
- **Tärkeä yksityiskohta**: Yleinen nollaus auttaa välttämään eroja välimatkoissa ja varmistaa, että kaikki elementit toimivat yhtenäisesti eri selaimissa.

## 2. Body Styling (<code><</code>body>):

- **Mikä se on**: Tämä sääntö koskee <code><</code>body-elementtiä, vaikuttaen koko sivun asetteluun ja ulkonäköön.
- **Tarkoitus**:
  - **Fontti**: font-family: 'Roboto', sans-serif; soveltaa modernin ja helposti luettavan fontin Google Fontsista, antaen sovellukselle siistin ja viimeistellyn ilmeen;
  - **Taustaväri**: background: linear-gradient(135deg, #74ebd5, #acb6e5); luo diagonaalisen gradienttitaustan, joka vaihtuu vaaleasta turkoosista pehmeään violettiin visuaalisesti miellyttävän efektin saamiseksi;
  - **Asettelu**: display: flex; justify-content: center; align-items: center; height: 100vh; keskittää sisällön sekä vaakasuunnassa että pystysuunnassa koko selainikkunan korkeudella;
  - **Väri**: color: #333; asettaa tumman tekstivärin luettavuuden parantamiseksi vaaleaa taustaa vasten.
- **Tärkeä yksityiskohta**: Flexboxia käytetään helppoon pystysuuntaiseen ja vaakasuoraan keskittämiseen, kun taas gradienttitausta lisää modernin, visuaalisesti houkuttelevan ilmeen.

## 3. Chat Container Styling (.chat-container):

- **Mikä se on**: Tämä sääntö muotoilee chat-sovelluksen sisällön säiliön.
- **Tarkoitus**:
  - **Taustaväri**: background-color: #fff; antaa säiliölle puhtaan valkoisen taustan, joka kontrastoi värikkään gradientin kanssa;
  - **Täyte**: padding: 30px; lisää sisäistä tilaa sisällön ympärille luettavuuden parantamiseksi;
  - **Reunusten pyöristys**: border-radius: 15px; lisää sileät, pyöristetyt kulmat modernin korttimaisen ulkonäön saavuttamiseksi;
  - **Varjostus**: box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); luo hienovaraisen varjostuksen säiliön ympärille, lisäten syvyyttä ja saaden säiliön erottumaan visuaalisesti;
  - **Siirtymä**: transition: transform 0.3s ease; varmistaa sujuvan efektin, kun säiliötä leijutetaan, tehden siitä reagoivan ja dynaamisen.
- **Tärkeä yksityiskohta**: Yhdistelmä täytettä, pyöristettyjä kulmia ja varjostusta luo puhtaan, modernin korttimaisen asettelun chat-sovellukselle.

## 4. Hover Effect on Chat Container (.chat-container:hover):

- **Mikä se on**: Tämä sääntö soveltuu, kun käyttäjä vie hiiren chat-säiliön päälle.
- **Tarkoitus**: transform: scale(1.05); suurentaa säiliötä hieman, kun sitä leijutetaan, tarjoten hienovaraisen zoom-in-efektin, joka lisää interaktiivisuutta.
- **Tärkeä yksityiskohta**: Leijutusefekti parantaa käyttökokemusta tekemällä sovelluksesta dynaamisemman ja reagoivamman ilman, että se tuntuu ylivoimaiselta.

## 5. Heading Styling (<code><</code>h1>):

- **Mikä se on**: Tämä sääntö muotoilee chat-sovelluksen pääotsikon.
- **Tarkoitus**:
  - **Fonttikoko**: font-size: 2.5em; tekee otsikosta merkittävän ja helposti luettavan;
  - **Marginaali**: margin-bottom: 20px; lisää tilaa otsikon alle, erottaen sen viestialueesta;
  - **Väri**: color: #2d3748; asettaa tummemman tekstivärin vahvan kontrastin ja luettavuuden saavuttamiseksi valkoista taustaa vasten.
- **Tärkeä yksityiskohta**: Suuri otsikko kiinnittää huomion sovelluksen nimeen ja selkeyttää sen tarkoitusta samalla, kun se säilyttää visuaalisen tasapainon.

## 6. Messages Display Area (#messages):

- **Mikä se on**: Tämä sääntö muotoilee säiliön, jossa chat-viestit näytetään.
- **Tarkoitus**:
  - **Reunus ja tausta**: border: 1px solid #ccc; background-color: #f9f9f9; antaa viestialueelle kevyen taustan ja hienovaraisen reunuksen, joka erottaa sen muusta sisällöstä;
  - **Täyte**: padding: 15px; tarjoaa tilaa viestien ympärille luettavuuden parantamiseksi;
  - **Korkeus ja ylivuoto**: height: 200px; overflow-y: auto; määrittelee kiinteän korkeuden säiliölle ja mahdollistaa pystysuuntaisen vierittämisen, kun viestit ylittävät säiliön korkeuden;
  - **Marginaali ja reunusten pyöristys**: margin-bottom: 20px; border-radius: 8px; luo tilaa viestialueen alle ja antaa sille pyöristetyt kulmat pehmeämmän ilmeen saavuttamiseksi;
  - **Varjostus**: box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1); lisää hienovaraisen sisäisen varjostuksen, joka antaa syvyyttä viestialueelle.
- **Tärkeä yksityiskohta**: Kiinteä korkeus ja vierittäminen varmistavat, että kaikki viestit ovat näkyvissä ilman, että asettelu rikkoutuu, kun taas tausta ja reunus tarjoavat selkeyttä ja rakennetta viestialueelle.

## 7. Form Layout (#message-form):

- **Mikä se on**: Tämä sääntö muotoilee lomakkeen, johon käyttäjät syöttävät ja lähettävät viestejä.
- **Tarkoitus**:
  - **Flexbox-asettelu**: display: flex; justify-content: space-between; align-items: center; asettaa syöttökentän ja painikkeen riviin, jättäen niiden väliin tilaa siistin asettelun saavuttamiseksi.
- **Tärkeä yksityiskohta**: Flexbox tekee syöttökentän ja painikkeen rinnakkaisasettelun helpoksi, pitäen asettelun responsiivisena ja hyvin jäsenneltynä.

## 8. Message Input Field (#message-input):

- **Mikä se on**: Tämä sääntö muotoilee tekstikentän, johon käyttäjät kirjoittavat viestinsä.
- **Tarkoitus**:
  - **Flex ja täyte**: flex: 1; padding: 12px; antaa syöttökentän viedä loput tilasta ja varmistaa riittävän täytteen mukavan kirjoituskokemuksen saavuttamiseksi;
  - **Reunus ja reunusten pyöristys**: border: 1px solid #ccc; border-radius: 8px; lisää kevyen reunuksen ja pyöristetyt kulmat, tehden syöttökentästä visuaalisesti yhdenmukaisen sovelluksen muiden elementtien kanssa;
  - **Varjostus**: box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); antaa syöttökentälle hienovaraisen varjostuksen, lisäten syvyyttä ja keskittymistä;
  - **Marginaali**: margin-right: 10px; tarjoaa tilaa syöttökentän ja lähetyspainikkeen väliin.
  - **Siirtymä**: transition: border-color 0.3s ease; mahdollistaa sujuvan siirtymän, kun syöttökenttä on aktiivinen.
- **Tärkeä yksityiskohta**: Flexboxin ja varjostuksen käyttö luo modernin, käyttäjäystävällisen syöttökentän, ja sujuvat siirtymät parantavat kokonaiskokemusta.

## 9. Focus Effect on Input (#message-input:focus):

- **Mikä se on**: Tämä sääntö soveltuu, kun syöttökenttä on aktiivinen (klikattu tai napautettu).
- **Tarkoitus**: border-color: #28a745; muuttaa reunuksen värin vihreäksi, kun käyttäjä keskittää syöttökenttään, antaen visuaalista palautetta.
- **Tärkeä yksityiskohta**: Fokusefekti parantaa käyttäjän vuorovaikutusta näyttämällä selkeästi, mikä kenttä on aktiivinen, tehden lomakkeesta intuitiivisemman.

## 10. Button Styling (<code><</code>button>):

- **Mikä se on**: Tämä sääntö muotoilee viestien lähetyspainikkeen.
- **Tarkoitus**:
  - **Täyte ja taustaväri**: padding: 12px 20px; background-color: #28a745; tekee painikkeesta riittävän suuren klikattavaksi ja soveltaa vihreän taustavärin korostaakseen, että se on toimintopainike;
  - **Tekstin väri ja reunus**: color: white; border: none; asettaa valkoisen tekstin hyvän kontrastin saavuttamiseksi ja poistaa oletusreunuksen puhtaamman ulkonäön saamiseksi;
  - **Reunusten pyöristys ja osoitin**: border-radius: 8px; cursor: pointer; tekee painikkeesta visuaalisesti yhdenmukaisen syöttökentän kanssa ja ilmaisee sen klikattavuuden;
  - **Siirtymä ja muunnos**: transition: background-color 0.3s ease, transform 0.2s ease; lisää sujuvia siirtymiä hover-efekteille, tehden painikkeesta interaktiivisemman.
- **Tärkeä yksityiskohta**: Painike on suunniteltu visuaalisesti erottuvaksi, ja hover-efektit lisäävät vuorovaikutteisuutta.

## 11. Button Hover Effect (button:hover):

- **Mikä se on**: Tämä sääntö soveltuu, kun käyttäjä vie hiiren painikkeen päälle.
- **Tarkoitus**:
  - **Taustavärin muutos**: background-color: #218838; tummentaa painikkeen vihreää taustaväriä leijutettaessa, tarjoten palautetta;
  - **Muunnosefekti**: transform: translateY(-2px); nostaa painiketta hieman, lisäten dynaamisen 3D-efektin.
- **Tärkeä yksityiskohta**: Leijutusefekti tekee painikkeesta vuorovaikutteisemman, parantaen kokonaisvaltaista käyttäjäkokemusta.

# JavaScriptin selitys

## 1. DOMContentLoaded Event Listener:

- **Mikä se on**: document.addEventListener('DOMContentLoaded', ...) on tapahtumankuuntelija, joka laukeaa, kun koko HTML-dokumentti on täysin ladattu ja jäsennelty.
- **Tarkoitus**: Tämä varmistaa, että JavaScript-koodi suoritetaan vasta sen jälkeen, kun kaikki DOM-elementit (kuten lomake ja syöttökentät) on ladattu sivulle.
- **Tärkeä yksityiskohta**: DOMContentLoaded:in käyttö varmistaa, että skripti voi turvallisesti olla vuorovaikutuksessa DOM-elementtien kanssa, estäen virheet, jotka aiheutuvat siitä, että yritetään käsitellä elementtejä, joita ei ole vielä ladattu.

## 2. WebSocket Connection (const ws = new WebSocket('ws://localhost:8080');):

- **Mikä se on**: WebSocket-konstruktoria käytetään luomaan WebSocket-yhteys palvelimeen osoitteessa ws://localhost:8080.
- **Tarkoitus**: WebSocketit mahdollistavat reaaliaikaisen, kaksisuuntaisen viestinnän asiakkaan ja palvelimen välillä, mikä on olennainen osa live-chat-sovelluksia.
- **Tärkeä yksityiskohta**: WebSocket-yhteys pysyy auki, mahdollistaen viestien lähettämisen ja vastaanottamisen reaaliajassa ilman, että sivua tarvitsee ladata uudelleen.

## 3. Selecting DOM Elements:

- **Mikä se on**: Seuraavia rivejä käytetään avainelementtien viittaamiseen HTML-dokumentissa:
  - **const messagesDiv = document.getElementById('messages');** valitsee <code><</code>div-elementin, jossa chat-viestit näytetään;
  - **const messageForm = document.getElementById('message-form');** valitsee lomakkeen, jota käytetään viestien lähettämiseen;
  - **const messageInput = document.getElementById('message-input');** valitsee tekstisyöttökentän käyttäjän viestejä varten.
- **Tarkoitus**: Nämä viittaukset antavat JavaScriptin helposti käsitellä vastaavia HTML-elementtejä (esimerkiksi viestien lisääminen viestialueelle tai syöttökentän tyhjentäminen viestin lähettämisen jälkeen).
- **Tärkeä yksityiskohta**: DOM-elementtien tehokas käsittely getElementById()-funktion avulla on olennaista JavaScript-pohjaisten sovellusten interaktiivisuuden kannalta.

## 4. Handling Incoming WebSocket Messages (ws.onmessage):

- **Mikä se on**: ws.onmessage-tapahtumankuuntelija kuuntelee palvelimen lähettämiä viestejä WebSocketin kautta.
- **Tarkoitus**: Tämä funktio käsittelee palvelimelta tulevia uusia viestejä lisäämällä ne dynaamisesti viestinäyttöalueelle.
- **Tärkeät yksityiskohdat**:
  - **event.data** sisältää saapuvan viestin sisällön;
  - **const message = document.createElement('div');** luo uuden <code><</code>div-elementin jokaiselle uudelle viestille;
  - **message.textContent = event.data;** asettaa uuden viestin tekstin;
  - **messagesDiv.appendChild(message);** lisää uuden viestin viestinäyttöalueelle;
  - **messagesDiv.scrollTop = messagesDiv.scrollHeight;** varmistaa, että viestikontti vierittää automaattisesti viimeisimmän viestin näkyviin.
- **Tärkeä yksityiskohta**: Tämä varmistaa, että uudet viestit näytetään reaaliajassa ja että chat-näkymä vierittää aina viimeisimpään viestiin.

## 5. Handling Form Submission (messageForm.addEventListener('submit', ...)):

- **Mikä se on**: Tämä tapahtumankuuntelija laukeaa, kun käyttäjä lähettää viestilomakkeen (klikkaamalla "Lähetä").
- **Tarkoitus**: Tämä funktio lähettää viestin WebSocketin kautta ja tyhjentää syöttökentän viestin lähettämisen jälkeen. Se myös estää lomakkeen oletuskäyttäytymisen (sivun uudelleenlataus).
- **Tärkeät yksityiskohdat**:
  - **event.preventDefault();** estää lomakkeen oletusarvoisen sivun uudelleenlatauksen, mikä mahdollistaa sovelluksen pysymisen samalla sivulla viestin käsittelyn aikana;
  - **if (messageInput.value.trim()) {...}** tarkistaa, että syöttökenttä sisältää ei-tyhjän viestin. Trim() poistaa ylimääräiset välilyönnit, estäen tyhjien viestien lähettämisen;
  - **ws.send(messageInput.value);** lähettää käyttäjän viestin WebSocketin kautta palvelimelle;
  - **messageInput.value = '';** tyhjentää syöttökentän viestin lähettämisen jälkeen.
- **Tärkeä yksityiskohta**: Lomakkeen oletustoiminnan estäminen ja vain ei-tyhjien viestien lähettäminen parantaa käyttökokemusta ja pitää sovelluksen toiminnallisena ilman tarpeettomia sivun uudelleenlatauksia.

## 6. WebSocket Server Code (Node.js):

- **Mikä se on**: WebSocket-palvelin käsittelee saapuvat WebSocket-yhteydet ja lähettää viestit kaikille yhdistetyille asiakkaille.
- **Tärkeät yksityiskohdat**:
  - **const WebSocket = require('ws');** tuo WebSocket-kirjaston WebSocket-palvelimen luomista varten;
  - **const server = new WebSocket.Server({ port: 8080 });** asettaa palvelimen kuuntelemaan porttia 8080;
  - **server.on('connection', (ws) => {...});** kuuntelee uusia asiakasyhteyksiä ja määrittää yhteystapahtuman;
  - **ws.on('message', (message) => {...});** kuuntelee asiakkailta tulevia viestejä;
  - **server.clients.forEach((client) => {...});** käy läpi kaikki yhdistetyt asiakkaat ja lähettää viestin jokaiselle;
  - **if (client.readyState === WebSocket.OPEN) {...}** tarkistaa, onko asiakkaan WebSocket-yhteys auki ennen viestin lähettämistä.
- **Tarkoitus**: Tämä palvelinkoodi varmistaa, että aina kun yksi asiakas lähettää viestin, se lähetetään reaaliajassa kaikille yhdistetyille asiakkaille.
- **Tärkeä yksityiskohta**: WebSocket-palvelin käsittelee reaaliaikaisen viestinnän tehokkaasti, varmistaen, että jokainen yhdistetty asiakas saa viimeisimmät viestit.

## 7. WebSocket Server Logging:

- **Mikä se on**: **console.log('WebSocket server is running on ws://localhost:8080');** tulostaa viestin konsoliin, joka osoittaa, että WebSocket-palvelin on käynnissä.
- **Tarkoitus**: Tämä on hyödyllinen virheenkorjauksessa ja vahvistaa, että palvelin on onnistuneesti käynnistetty ja valmis ottamaan vastaan WebSocket-yhteyksiä.
- **Tärkeä yksityiskohta**: Konsoliloki antaa kehittäjälle palautetta siitä, että palvelin on toiminnassa.
