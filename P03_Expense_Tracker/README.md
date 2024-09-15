# Nettisivu: https://keudaope.github.io/JSProjekteja/P03_Expense_Tracker

# Johdanto

Kululaskurisovellus on käytännöllinen työkalu henkilökohtaisten talouksien hallintaan. Tämä sovellus mahdollistaa käyttäjien lisätä kuluja, luokitella ne ja tarkastella yhteenvedon omista menoista. Se on erinomainen projekti aloittelijoille JavaScriptin, HTML:n ja ja CSS:n harjoitteluun, sillä se sisältää lomakkeiden käsittelyä, taulukoiden käyttöä sekä yksinkertaista datan käsittelyä.

# HTML Selitys

## 1. &lt;!DOCTYPE html>

- **Mitä se on**: Tämä on asiakirjatyypin ilmoitus.
- **Tarkoitus**: Se kertoo selaimelle, että kyseessä on HTML5-asiakirja. Ilman tätä selain ei ehkä näytä sivua oikein tai yhdenmukaisesti eri laitteilla ja selaimilla.
- **Tärkeys**: Varmistaa, että selain renderöi sivun käyttäen moderneimpia saatavilla olevia standardeja.

## 2. &lt;html lang="en">

- **Mitä se on**: Tämä on HTML-dokumentin juurielementti.
- **lang="en"**: Määrittää, että asiakirjan kieli on englanti ("en"). Tämä auttaa ruudunlukuohjelmia ja hakukoneita ymmärtämään käytetyn kielen.
- **Tärkeys**: Parantaa esteettömyyttä vammaisten käyttäjien kannalta ja tehostaa SEO (hakukoneoptimointia).

## 3. &lt;head>

- **Mitä se on**: Head-osio sisältää metatietoja ja linkkejä ulkoisiin resursseihin, joita ei näytetä suoraan sivulla.
- **Tarkoitus**: Head-osiossa oleva tieto auttaa selainta ja hakukoneita ymmärtämään, miten sivu tulisi renderöidä ja indeksoida.

## 4. &lt;meta charset="UTF-8">

- **Mitä se on**: Tämä asettaa asiakirjan merkistökoodauksen UTF-8-muotoon.
- **Tarkoitus**: UTF-8 tukee useimpia kieliä ja erikoismerkkejä, varmistaen, että sivu voi näyttää monenlaisia merkkejä oikein (esim. aksenttimerkit, symbolit).
- **Tärkeys**: Varmistaa, että teksti, erityisesti ei-englanninkieliset merkit tai symbolit, näkyvät oikein eri selaimissa ja laitteilla.

## 5. &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">

- **Mitä se on**: Tämä meta-tunniste tekee verkkosivusta responsiivisen ja varmistaa, että se skaalautuu oikein eri laitteilla (esim. matkapuhelimet, tabletit, työpöytälaitteet).
- **Attribuutit**:
  - **width=device-width:** Asettaa sivun leveyden vastaamaan laitteen leveyttä.
  - **initial-scale=1.0:** Varmistaa, että sivu latautuu 100 % zoom-tasolla.
- **Tärkeys**: Ilman tätä tunnistetta sivu ei ehkä skaalaudu oikein mobiililaitteilla, mikä voi johtaa siihen, että elementit ovat liian pieniä tai suuria.

## 6. &lt;title>Expense Tracker&lt;/title>

- **Mitä se on**: Title-elementti määrittää verkkosivun otsikon.
- **Tarkoitus**: &lt;title>-sisältö näkyy selaimen välilehdessä ja hakukoneet käyttävät sitä sivun indeksointiin.
- **Tärkeys**: Auttaa käyttäjiä tietämään, mistä sivulla on kyse, ja vaikuttaa SEOon

## 7. &lt;link rel="stylesheet" href="styles.css">

- **Mitä se on**: Tämä on linkki ulkoiseen CSS-tiedostoon (styles.css).
- **Tarkoitus**: Se soveltaa kaikki ulkoisessa tiedostossa määritellyt tyylit HTML-elementteihin. CSS:n erottaminen eri tiedostoon auttaa ylläpitämään koodia pitämällä rakenne (HTML) ja suunnittelu (CSS) erillään.
- **Tärkeys**: Parantaa koodin ylläpidettävyyttä ja mahdollistaa HTML:n pysymisen puhtaana ja keskittyneenä rakenteeseen, ei esitystapaan.

## 8. &lt;body>

- **Mitä se on**: Body-elementti sisältää kaikki verkkosivun näkyvät sisällöt.
- **Tarkoitus**: Kaikki, mikä näkyy verkkosivulla (esim. teksti, kuvat, lomakkeet), sijoitetaan body-tunnisteen sisään.
- **Tärkeys**: Ilman body-tunnistetta selain ei tietäisi, mihin näkyvät elementit sijoitetaan sivulla.

## 9. &lt;div class="container">

- **Mitä se on**: Tämä on div-elementti, jolla on "container"-luokka.
- **Tarkoitus**: Div toimii säiliönä koko kululaskurisovellukselle. Se mahdollistaa sisällön ryhmittelyn ja tiettyjen tyylien soveltamisen CSS-luokan "container" avulla.
- **Tärkeys**: Samankaltaisen sisällön ryhmittäminen div-elementtiin luokan avulla helpottaa yhdenmukaisten tyylien ja asettelun soveltamista.

## 10. &lt;h1>Expense Tracker&lt;/h1>

- **Mitä se on**: &lt;h1>-tunniste edustaa sivun pääotsikkoa.
- **Tarkoitus**: Se antaa sivulle otsikon ja kertoo käyttäjille, että he ovat tekemisissä "Expense Tracker" -sovelluksen kanssa.
- **Tärkeys**: &lt;h1> on tärkeä sekä esteettömyyden että SEOn kannalta. Se kertoo hakukoneille, mikä on sivun pääaihe, ja ruudunlukijat käyttävät sitä auttaakseen näkövammaisia käyttäjiä navigoimaan sivulla.

## 11. &lt;form id="expense-form">

- **Mitä se on**: &lt;form>-elementtiä käytetään käyttäjän syötteen keräämiseen.
- **Tarkoitus**: Tämä lomake mahdollistaa käyttäjien syöttää tietoja seurattavasta kulusta (esim. nimi, summa, kategoria).
- **Attribuutit**:
  - **id="expense-form"**: Lomakkeelle annetaan tunniste, jotta siihen voidaan kohdistaa ja sen kanssa vuorovaikuttaa JavaScriptin avulla.
- **Tärkeys**: Lomake on olennaisen tärkeä käyttäjätietojen keräämisessä ja niiden lähettämisessä sovellukselle käsiteltäväksi.

## 12. &lt;input type="text" id="expense-name" placeholder="Expense name" required>

- **Mitä se on**: Tämä on tekstisyötekenttä.
- **Attribuutit**:
  - **type="text"**: Määrittää, että syöte hyväksyy tekstin.
  - **id="expense-name"**: Yksilöllinen tunniste, jolla tähän kenttään voidaan kohdistaa JavaScript-koodissa.
  - **placeholder="Expense name"**: Paikkamerkkiteksti, joka opastaa käyttäjää syötteen täyttämisessä.
  - **required**: Varmistaa, että käyttäjä ei voi lähettää lomaketta täyttämättä tätä kenttää.
- **Tarkoitus**: Antaa käyttäjälle mahdollisuus syöttää kulun nimi (esim. "Ruokaostokset").
- **Tärkeys**: Varmistaa, että käyttäjä antaa merkityksellisen syötteen kulujen seuraamista varten.

## 13. &lt;input type="number" id="expense-amount" placeholder="Amount" required>

- **Mitä se on**: Tämä on numerosyötekenttä.
- **Attribuutit**:
  - **type="number":** Määrittää, että syöte hyväksyy vain numeroita.
  - **id="expense-amount"**: Yksilöllinen tunniste, jolla tähän kenttään voidaan kohdistaa JavaScript-koodissa.
  - **placeholder="Amount"**: Paikkamerkkiteksti, joka opastaa käyttäjää syötteen täyttämisessä (esim. kulun summa).
  - **required**: Varmistaa, että käyttäjä ei voi lähettää lomaketta täyttämättä tätä kenttää.
- **Tarkoitus**: Antaa käyttäjälle mahdollisuus syöttää kulun summa (esim. $20).
- **Tärkeys**: Auttaa validoimaan käyttäjän syötteen rajoittamalla sen numeroihin.

## 14. &lt;select id="expense-category" required>

- **Mitä se on**: Tämä on alasvetovalikko kulun kategorian valitsemista varten.
- **Attribuutit**:
  - **id="expense-category"**: Yksilöllinen tunniste, jolla tähän alasvetovalikkoon voidaan kohdistaa JavaScriptissa.
  - **required**: Varmistaa, että käyttäjä valitsee kategorian ennen lomakkeen lähettämistä.
- **Tarkoitus**: Antaa käyttäjälle mahdollisuus valita kulun kategoria (esim. Ruoka, Liikenne).
- **Tärkeys**: Kulujen kategorisointi auttaa käyttäjiä järjestämään ja analysoimaan menojaan.

## 15. &lt;option value="" disabled selected>Select category&lt;/option>

- **Mitä se on**: Tämä on ensimmäinen vaihtoehto alasvetovalikossa, joka toimii ohjeena.
- **Attribuutit**:
  - **disabled**: Estää tämän vaihtoehdon valitsemisen.
  - **selected**: Varmistaa, että tämä vaihtoehto näytetään oletuksena, kun lomake ladataan ensimmäistä kertaa.
- **Tarkoitus**: Toimii paikkamerkkinä, kehottaen käyttäjää valitsemaan kategorian alasvetovalikosta.

## 16. &lt;button type="submit">Add Expense&lt;/button>

- **Mitä se on**: Tämä on painike, jolla lomake lähetetään.
- **Attribuutit**:
  - **type="submit"**: Määrittää, että painikkeella lähetetään lomakkeen tiedot.
- **Tarkoitus**: Kun painiketta klikataan, se käynnistää lomakkeen lähettämisen ja kulu lisätään luetteloon.
- **Tärkeys**: Tarjoaa käyttäjälle selkeän tavan olla vuorovaikutuksessa lomakkeen kanssa ja lähettää tiedot.

## 17. &lt;div class="expense-list" id="expense-list">&lt;/div>

- **Mitä se on**: Tämä on div-elementti, joka sisältää kaikki lisätyt kulut.
- **Attribuutit**:
  - **id="expense-list"**: Yksilöllinen tunniste, jolla tähän säilöön voidaan kohdistaa JavaScriptissa.
- **Tarkoitus**: Tämä div täytetään dynaamisesti käyttäjän lisäämien kulujen listalla.
- **Tärkeys**: Toimii paikkamerkkinä dynaamisesti luotujen kuluerien näyttämiselle.

## 18. &lt;div class="summary" id="summary">&lt;/div>

- **Mitä se on**: Tämä on div-elementti, joka näyttää yhteenvedon kaikista kuluista.
- **Attribuutit**:
  - **id="summary"**: Yksilöllinen tunniste, jolla tähän säilöön voidaan kohdistaa JavaScriptissa.
- **Tarkoitus**: Tämä div näyttää kaikkien kulujen kokonaissumman, joka päivittyy dynaamisesti, kun uusia kuluja lisätään tai poistetaan.
- **Tärkeys**: Antaa käyttäjälle selkeän yhteenvedon menoista yhdellä silmäyksellä.

## 19. &lt;script src="app.js">&lt;/script>

- **Mitä se on**: Tämä on linkki ulkoiseen JavaScript-tiedostoon (app.js).
- **Tarkoitus**: Linkittää HTML-tiedoston JavaScript-tiedostoon, joka käsittelee sovelluksen toiminnallisuutta (esim. kulujen lisääminen, poistaminen ja laskeminen).
- **Tärkeys**: Pitää JavaScript-koodin erillään HTML:stä, mikä parantaa projektin ylläpidettävyyttä ja selkeyttä.

# CSS Selitys

## 1. body

- **Mitä se on**: Body-valitsin soveltaa tyylejä koko sivuun.
- **Keskeiset ominaisuudet**:
  - **font-family: 'Roboto', sans-serif;**: Asettaa sivun globaaliksi fontiksi "Roboto"-fontin, modernin ja selkeän fontin, ja sans-serif on varafontti, jos Roboto ei ole käytettävissä.
  - **background: linear-gradient(135deg, #74ebd5, #ACB6E5);**: Lisää gradienttitaustan, joka vaihtuu vaaleasta tealista (#74ebd5) pehmeään violettiin (#ACB6E5), antaen sivulle raikkaan ja modernin ilmeen.
  - **display: flex; justify-content: center; align-items: center;**: Flexboxia käytetään sisällön keskittämiseen vaakasuunnassa (justify-content) ja pystysuunnassa (align-items), varmistaen, että pääkontti on keskitetty ruudulle.
  - **height: 100vh;**: Asettaa bodyn korkeuden 100 % näkymäkorkeudesta (vh), varmistaen, että sisältö vie koko näytön.
  - **margin: 0;**: Poistaa oletusmarginaalit, jotta ei synny ylimääräistä valkoista tilaa sisällön ympärille.
- **Tarkoitus**: Luo visuaalisesti houkutteleva, keskitetty asettelu modernilla tuntumalla, varmistaen, että sisältö on hyvin kohdistettu ja vie koko ruudun.

## 2. .container

- **Mitä se on**: Tämä luokka sovelletaan pääkonttiin, joka sisältää koko sovelluksen.
- **Keskeiset ominaisuudet**:
  - **background: white;**: Asettaa kontin taustaväriksi valkoisen, joka luo kontrastia värikkääseen gradienttitaustaan.
  - **padding: 30px;**: Lisää sisäistä tilaa kontin sisällön ja reunojen välille, antaen sille avaruutta ja selkeän asettelun.
  - **border-radius: 12px;**: Pyöristää kontin kulmat, antaen sille modernin ja pehmeämmän ulkonäön.
  - **box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);**: Lisää varjon syvyyden luomiseksi, saaden kontin näyttämään kohoavalta ja antamalla sivulle 3D-efektin.
  - **width: 400px;**: Asettaa kontin leveyden kiinteäksi, varmistaen yhtenäisen asettelun eri näyttökokojen välillä.
  - **text-align: center;:** Keskittää tekstin kontin sisällä, tehden sovelluksesta visuaalisesti yhtenäisen.
  - **transition: transform 0.3s ease;**: Valmistelee kontin sujuviin animaatioihin ja muunnoksiin.
- **Tarkoitus**: Antaa sovellukselle rakenteellisen, modernin korttimaisen ulkoasun, tehden siitä visuaalisesti houkuttelevan ja järjestelmällisen.

## 3. h1

- **Mitä se on**: Muotoilee sovelluksen pääotsikon.
- **Keskeiset ominaisuudet**:
  - **margin-bottom: 20px;**: Lisää tilaa otsikon alapuolelle, erottamalla sen lomakkeesta.
  - **color: #333;**: Asettaa otsikkotekstin väriksi tumman harmaan, varmistaen hyvän kontrastin valkoista taustaa vasten.
  - **font-weight: 500;**: Asettaa otsikon hieman kevyemmäksi kuin lihavoitu, mikä antaa modernin ja puhtaan ilmeen.
- **Tarkoitus**: Varmistaa, että pääotsikko erottuu visuaalisesti, mutta ei ole liian hallitseva, noudattaen moderneja suunnitteluperiaatteita.

## 4. form

- **Mitä se on**: Soveltaa tyylejä lomakkeeseen, jossa käyttäjä syöttää kulutietoja.
- **Keskeiset ominaisuudet**:
  - **display: flex;**: Mahdollistaa flexbox-asettelun lomake-elementeille.
  - **flex-direction: column;**: Kohdistaa lomake-elementit pystysuunnassa, yksi toisen päälle.
  - **align-items: center;**: Kohdistaa lomakekentät vaakasuunnassa keskelle.
- **Tarkoitus**: Järjestää lomakkeen asettelun helpottamaan sen käyttöä, tarjoten selkeän ja yksinkertaisen käyttöliittymän.

## 5. input[type="text"], input[type="number"], select

- **Mitä se on**: Muotoilee tekstikentät, numerokentät ja alasvetovalikon (select).
- **Keskeiset ominaisuudet**:
  - **width: 100%;**: Asettaa syötekentät täyttämään koko kontin leveyden, tarjoten runsaasti tilaa käyttäjän syötteelle.
  - **padding: 12px;**: Lisää pehmustetta kenttien sisään, tehden syötetystä tekstistä helpommin luettavaa.
  - **margin-bottom: 15px;**: Luo tilaa jokaisen syötekentän väliin, parantaen luettavuutta ja käytettävyyttä.
  - **border: 1px solid #ccc;**: Lisää vaalean harmaan reunan kenttien ympärille, määritellen syöttöalueen.
  - **border-radius: 6px;**: Pyöristää syötekenttien kulmat, säilyttäen yhtenäisen ulkoasun muun suunnittelun kanssa.
  - **box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);**: Lisää hienovaraisen varjon luomaan 3D-efektin, saaden kentät näyttämään kohotetuilta.
  - **transition: border-color 0.3s ease;**: Varmistaa sujuvan siirtymän, kun reunan väri muuttuu keskittyessä.
- **Tarkoitus**: Tarjoaa puhtaat ja modernit syötekentät, jotka ovat helppokäyttöisiä ja visuaalisesti yhdenmukaisia sovelluksen kanssa.

## 6. input:focus, select:focus

- **Mitä se on**: Muotoilee syötekentät ja alasvetovalikon, kun ne ovat keskittyneinä.
- **Keskeinen ominaisuus**:
  - **border-color: #28a745;**: Muuttaa reunan väriksi vihreän, kun käyttäjä klikkaa kenttää tai siirtyy siihen, antaen visuaalista palautetta.
- **Tarkoitus**: Tarjoaa selkeän fokustilan, parantaen käyttökokemusta osoittamalla, missä kentässä käyttäjä on.

## 7. button

- **Mitä se on**: Muotoilee lähetyspainikkeen.
- **Keskeiset ominaisuudet**:
  - **padding: 12px 24px;**: Lisää pehmustetta painikkeen sisälle, tehden siitä riittävän suuren helppoa klikkaamista varten.
  - **border: none;**: Poistaa oletusreunan, pitäen suunnittelun puhtaana.
  - **background-color: #28a745;**: Asettaa painikkeen taustaväriksi vihreän, ilmaisten positiivista toimintaa, kuten kulun lisäämistä.
  - **color: white;**: Asettaa tekstin väriksi valkoisen, luoden hyvän kontrastin vihreää taustaa vasten.
  - **border-radius: 6px;**: Pyöristää painikkeen kulmat, säilyttäen yhtenäisen ilmeen syötekenttien kanssa.
  - **cursor: pointer;**: Muuttaa kohdistimen osoittimeksi, kun hiiren osoitin on painikkeen päällä, osoittaen, että se on klikattavissa.
  - **transition: background-color 0.3s ease, transform 0.2s ease;**: Lisää sujuvan siirtymän, kun taustaväri muuttuu ja kun painiketta painetaan.
- **Tarkoitus**: Tarjoaa modernin ja visuaalisesti houkuttelevan painikkeen, jota on helppo käyttää.

## 8. button

- **Mitä se on**: Soveltaa tyylejä, kun käyttäjä siirtää hiiren painikkeen päälle.
- **Keskeiset ominaisuudet**:
  - **background-color: #218838;**: Muuttaa painikkeen taustavärin tummemman vihreäksi, antaen palautetta siitä, että painike on interaktiivinen.
  - **transform: translateY(-2px);**: Siirtää painiketta hieman ylöspäin, luoden hienovaraisen nostovaikutuksen.
- **Tarkoitus**: Parantaa käyttökokemusta tarjoamalla selkeän visuaalisen muutoksen, kun painike on hover-tilassa, osoittaen, että se on klikattavissa.

## 9. .expense-list

- **Mitä se on**: Muotoilee kontin, joka sisältää kululistan.
- **Keskeiset ominaisuudet**:
  - **margin-top: 20px;**: Lisää tilaa kululistan yläpuolelle, erottamalla sen lomakkeesta.
  - **text-align: left;:** Kohdistaa tekstin vasemmalle listakohteiden sisällä.
- **Tarkoitus**: Valmistaa kontin dynaamiselle kululistalle, pitäen sen visuaalisesti järjestelmällisenä.

## 10. .expense-item

- **Mitä se on**: Muotoilee jokaisen yksittäisen kuluerän listassa.
- **Keskeiset ominaisuudet**:
  - **display: flex;**: Flexboxia käytetään asettelemaan kohteen sisältö.
  - **justify-content: space-between;**: Varmistaa, että teksti ja poistopainike ovat erillään.
  - **align-items: center;**: Kohdistaa sisällön pystysuunnassa keskelle.
  - **padding: 15px;**: Lisää sisäistä tilaa jokaisen kohteen sisälle parantamaan luettavuutta.
  - **background: #f4f4f4;**: Asettaa vaaleanharmaan taustavärin jokaiselle kuluerälle.
  - **margin: 8px 0;**: Lisää tilaa jokaisen kohteen väliin, erottamalla ne visuaalisesti.
  - **border-radius: 6px;**: Pyöristää jokaisen kohteen kulmat, säilyttäen yhtenäisen ulkoasun muun suunnittelun kanssa.
  - **box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);**: Lisää hienovaraisen varjon syvyyden luomiseksi, saaden jokaisen kohteen näyttämään kohotetulta.
  - **transition: opacity 0.4s ease, transform 0.4s ease;**: Varmistaa sujuvan siirtymän läpinäkyvyyden ja liikkeen osalta, kun elementit ilmestyvät ja katoavat.
- **Tarkoitus**: Varmistaa, että jokainen kuluerä on visuaalisesti erottuva ja hyvin eroteltu, parantaen luettavuutta ja vuorovaikutusta.

## 11. .expense-item.added ja .expense-item.removing

- **Mitä se on**: Nämä luokat hallitsevat kuluerien sisään- ja ulosfääniä.
- **Keskeiset ominaisuudet**:
  - **.added**:
    - **opacity: 0;**: Aluksi kohde on näkymätön.
    - **transform: translateY(-20px);**: Asettaa kohteen hieman korkeammalle, jotta sen ilmestyminen on sulavaa.
  - **.show**:
    - **opacity: 1;**: Fadaa kohteen näkyviin.
    - **transform: translateY(0);**: Siirtää kohteen sen lopulliseen paikkaan.
  - **.removing**:
    - **opacity: 0;:** Fadaa kohteen pois näkyvistä.
    - **transform: translateX(20px);**: Siirtää kohdetta hieman oikealle sen kadotessa.
- **Tarkoitus**: Lisää sujuvat animaatiot, kun kuluerä lisätään tai poistetaan, parantaen käyttäjäkokemusta.

## 12. .summary

- **Mitä se on**: Muotoilee yhteenveto-osuuden, joka näyttää kokonaiskulut.
- **Keskeiset ominaisuudet**:
  - **margin-top: 20px;**: Lisää tilaa yhteenveto-osuuden yläpuolelle.
  - **text-align: left;**: Kohdistaa yhteenvetotekstin vasemmalle.
  - **font-weight: 600;**: Tekee kokonaissummasta lihavoidun, korostaen sitä.
- **Tarkoitus**: Varmistaa, että yhteenveto on visuaalisesti erottuva ja helppolukuinen.

# JavaScript Selitys

## 1. document.addEventListener('DOMContentLoaded', () => { ... });

- **Mitä se on**: Tämä rivi lisää tapahtumankuuntelijan, joka odottaa, että koko DOM (Document Object Model) latautuu ennen kuin JavaScript-koodi suoritetaan.
- **Tarkoitus**: JavaScript saattaa yrittää toimia ennen kuin HTML-elementit ovat täysin ladattuja, mikä johtaa virheisiin. Odottamalla 'DOMContentLoaded'-tapahtumaa varmistetaan, että kaikki elementit ovat valmiita käsiteltäviksi JavaScriptillä.
- **Tärkeys**: Estää virheitä ja varmistaa, että kaikki HTML-elementit ovat vuorovaikutteisia.

## 2. const expenseForm = document.getElementById('expense-form');

- **Mitä se on**: Tämä valitsee &lt;form>-elementin käyttäen id:tä "expense-form".
- **Tarkoitus**: Lomake kerää käyttäjän syötteet kulun nimestä, summasta ja kategoriasta, ja sen lähettäminen aloittaa kulun lisäämisen listalle.
- **Keskeinen yksityiskohta**: Käyttämällä document.getElementById() voidaan kohdistaa ja käsitellä tiettyjä HTML-elementtejä JavaScriptillä.

## 3. const expenseName = document.getElementById('expense-name');

- **Mitä se on**: Tämä valitsee &lt;input>-elementin, johon käyttäjä kirjoittaa kulun nimen, käyttäen id:tä "expense-name".
- **Tarkoitus**: Meidän on saatava käyttäjän syöttämä kulun nimi, jotta voimme näyttää sen kululistassa.
- **Keskeinen yksityiskohta**: Syöttökentän value-ominaisuus antaa käyttäjän kirjoittaman tekstin.

## 4. const expenseAmount = document.getElementById('expense-amount');

- **Mitä se on**: Tämä valitsee &lt;input>-elementin, johon käyttäjä kirjoittaa kulun summan, käyttäen id:tä "expense-amount".
- **Tarkoitus**: Käyttäjän syöttämä summa kerätään ja sitä käytetään kokonaissumman laskemiseen.
- **Keskeinen yksityiskohta**: value-ominaisuus antaa käyttäjän syöttämän numeron, joka voidaan muuntaa liukuluvuksi laskutoimituksia varten.

## 5. const expenseCategory = document.getElementById('expense-category');

- **Mitä se on**: Tämä valitsee &lt;select>-elementin, jossa käyttäjä valitsee kulun kategorian, käyttäen id:tä "expense-category".
- **Tarkoitus**: Käyttäjän valitsema kategoria (esim. Ruoka, Kuljetus) kerätään ja näytetään kulutietojen yhteydessä.
- **Keskeinen yksityiskohta**: value-ominaisuus antaa meille pudotusvalikosta valitun vaihtoehdon.

## 6. const expenseList = document.getElementById('expense-list');

- **Mitä se on**: Tämä valitsee &lt;div>-elementin, jossa kululista näytetään, käyttäen id:tä "expense-list".
- **Tarkoitus**: Tämä on säilö, johon lisätään jokainen käyttäjän lisäämä uusi kulu (nimi, summa ja kategoria).
- **Keskeinen yksityiskohta**: Vuorovaikutus tämän elementin kanssa mahdollistaa sisällön dynaamisen päivittämisen ilman sivun uudelleenlatausta.

## 7. const summary = document.getElementById('summary');

- **Mitä se on**: Tämä valitsee &lt;div>-elementin, jossa kokonaissumma näytetään, käyttäen id:tä "summary".
- **Tarkoitus**: Tämä osio näyttää käyttäjän lisäämien kulujen kokonaismäärän.
- **Keskeinen yksityiskohta**: Päivittämällä tätä elementtiä dynaamisesti voimme heijastaa muutoksia kokonaissummaan, kun kuluja lisätään tai poistetaan.

## 8. let expenses = [];

- **Mitä se on**: Tämä luo tyhjän taulukon, johon tallennetaan kaikki käyttäjän lisäämät kulut.
- **Tarkoitus**: Jokainen käyttäjän lisäämä kulu tallennetaan oliona tähän taulukkoon, jolloin voimme seurata ja hallita kaikkia kuluja.
- **Keskeinen yksityiskohta**: Taulukot ovat hyödyllisiä luetteloiden, kuten kulujen, tallentamisessa, joita voidaan käsitellä (esim. lisätä, poistaa tai päivittää).

## 9. expenseForm.addEventListener('submit', (event) => { ... });

- **Mitä se on**: Tämä lisää tapahtumankuuntelijan lomakkeeseen, joka kuuntelee 'submit'-tapahtumaa, kun käyttäjä lähettää lomakkeen.
- **Tarkoitus**: Kun käyttäjä lähettää lomakkeen (napsauttamalla "Lisää kulu" -painiketta), tämä tapahtumankuuntelija tallentaa lähetyksen ja antaa meidän käsitellä sen JavaScriptissä.
- **Keskeinen yksityiskohta**: 'submit'-tapahtuma tallentaa sekä painikkeen klikkaukset että Enter-näppäimen painamisen, kun käyttäjä on syöttökentässä.

## 10. event.preventDefault();

- **Mitä se on**: Tämä estää lomakkeen oletustoiminnon, joka on sivun uudelleenlataus lähetyksen yhteydessä.
- **Tarkoitus**: Estämällä sivun uudelleenlataus voimme käsitellä lomakkeen lähetyksen JavaScriptillä ja päivittää sisällön dynaamisesti ilman sivun uudelleenlatausta.
- **Keskeinen yksityiskohta**: Ilman preventDefault() sivu latautuisi uudelleen, jolloin käyttäjän syöte menetettäisiin ja käyttökokemus keskeytyisi.

## 11. const name = expenseName.value.trim();

- **Mitä se on**: Tämä hakee käyttäjän syöttämän kulun nimen syöttökentästä ja poistaa ylimääräiset välilyönnit käyttäen .trim()-metodia.
- **Tarkoitus**: Tarvitsemme kulun nimen, jotta voimme näyttää sen listalla ja varmistaa, että syöte on kelvollinen.
- **Keskeinen yksityiskohta**: .trim() poistaa tarpeettomat välilyönnit varmistaen, että syötetty nimi on siisti ja kelvollinen.

## 12. const amount = parseFloat(expenseAmount.value);

- **Mitä se on**: Tämä hakee käyttäjän syöttämän kulun summan syöttökentästä ja muuntaa sen numeroksi käyttäen parseFloat().
- **Tarkoitus**: Summaa tarvitaan kokonaissumman laskemiseen, ja parseFloat() varmistaa, että arvo käsitellään numerona.
- **Keskeinen yksityiskohta**: Syötteen muuntaminen liukuluvuksi on välttämätöntä numeerisia operaatioita, kuten yhteenlaskua, varten.

## 13. const category = expenseCategory.value;

- **Mitä se on**: Tämä hakee pudotusvalikosta valitun kategorian arvon.
- **Tarkoitus**: Kategoria näytetään kulun nimen ja summan yhteydessä.
- **Keskeinen yksityiskohta**: Pudotusvalikosta valittu arvo näytetään kategoriana.

## 14. if (name !== '' && !isNaN(amount) && category !== '') { ... }

- **Mitä se on**: Tämä tarkistaa, ovatko kaikki vaaditut kentät (kulun nimi, summa ja kategoria) täytetty.
- **Tarkoitus**: Varmistaa, että lomaketta käsitellään vain, jos kelvolliset tiedot on syötetty. Jos jokin kenttä on tyhjä tai virheellinen, kuluja ei lisätä.
- **Keskeinen yksityiskohta**: Tämä estää sovellusta hyväksymästä puutteellisia tai virheellisiä syötteitä, parantaen käyttäjäkokemusta.

## 15. const expense = { name, amount, category };

- **Mitä se on**: Tämä luo olion, joka tallentaa kulun tiedot: nimi, summa ja kategoria.
- **Tarkoitus**: Kulun olio mahdollistaa kaikkien kulun tietojen hallinnan jäsennellysti, jolloin niiden käsittely ja näyttäminen on helpompaa.
- **Keskeinen yksityiskohta**: Ryhmittämällä kulun tiedot olioon, voimme helposti tallentaa, hakea ja näyttää ne myöhemmin.

## 16. expenses.push(expense);

- **Mitä se on**: Tämä lisää juuri luodun kulun olion expenses-taulukkoon.
- **Tarkoitus**: Tallennamme kulun taulukkoon, jotta se voidaan seurata ja näyttää listassa.
- **Keskeinen yksityiskohta**: Jokainen uusi kulu lisätään taulukkoon, mikä mahdollistaa jatkuvan kululuettelon ylläpitämisen.

## 17. addExpenseItem(expense);

- **Mitä se on**: Tämä kutsuu addExpenseItem-funktiota ja välittää juuri luodun kulun olion sille.
- **Tarkoitus**: Tämä funktio on vastuussa kulun lisäämisestä näkyvään listaan sivulla.
- **Keskeinen yksityiskohta**: Kutsumalla tätä funktiota varmistamme, että kulu lisätään visuaalisesti listaan ilman sivun uudelleenlatausta.

## 18. expenseForm.reset();

- **Mitä se on**: Tämä nollaa lomakekentät ja tyhjentää syötteet, kun käyttäjä on lähettänyt lomakkeen.
- **Tarkoitus**: Kun kulu on lisätty, lomakekentät tyhjennetään, jotta käyttäjä voi lisätä uuden kulun ilman edellisen syötteen manuaalista poistamista.
- **Keskeinen yksityiskohta**: Parantaa käyttäjäkokemusta tekemällä lomakkeesta valmiin seuraavaan syötteeseen jokaisen lähetyksen jälkeen.

# **Kulujen lisääminen ja näyttäminen**

## 19. function addExpenseItem(expense) { ... }

- **Mitä se on**: Tämä funktio luo dynaamisesti ja näyttää uuden kulun kohteen listassa.
- **Tarkoitus**: Lisää juuri luodun kulun olion DOMiin, jotta se näkyy käyttäjälle.
- **Keskeinen yksityiskohta**: Tätä funktiota kutsutaan aina, kun uusi kulu lisätään, varmistaen, että lista päivittyy reaaliajassa.

## 20. const div = document.createElement('div');

- **Mitä se on**: Tämä luo uuden div-elementin, joka sisältää kulun tiedot.
- **Tarkoitus**: Jokaiselle kululle luodaan uusi div, joka sisältää kulun nimen, summan ja kategorian.
- **Keskeinen yksityiskohta**: Luomalla uuden divin jokaiselle kululle varmistamme, että jokainen listan kohde on ainutlaatuinen ja voidaan tyylittää erikseen.

## 21. div.className = 'expense-item added';

- **Mitä se on**: Tämä asettaa expense-item ja added -luokat juuri luodulle diville
- **Tarkoitus**: expense-item-luokka soveltaa tarvittavat tyylit, kun taas added-luokka aktivoi häivytystehosteen, joka tekee visuaalisesta siirtymästä pehmeän.
- **Keskeinen yksityiskohta**: Luokkien avulla varmistamme, että uusi kuluerä on tyylitelty ja animoitu johdonmukaisesti listan muiden kohteiden kanssa.

## 22. div.innerHTML = ...

- **Mitä se on**: Tämä asettaa HTML-sisällön div-elementtiin, joka näyttää kulun tiedot ja poistonapin.
- **Tarkoitus**: Asettaa nimen, summan, kategorian ja painikkeen kulun poistamiseen uuteen diviin
- **Keskeinen yksityiskohta**: innerHTML:n avulla voimme dynaamisesti luoda sisältöä jokaiselle kuluerälle, mikä tekee tietojen näyttämisestä helppoa.

# **Poistojen käsittely ja yhteenvedon päivittäminen**

## 23. div.setAttribute('data-index', index);

- **Mitä se on**: Tämä lisää mukautetun data-index-attribuutin diviin perustuen kulun sijaintiin taulukossa.
- **Tarkoitus**: data-index-attribuuttia käytetään tunnistamaan, mikä kuluerä vastaa tätä div-elementtiä, kun se täytyy poistaa.
- **Keskeinen yksityiskohta**: Tämä attribuutti mahdollistaa oikean kuluerän tarkkaan poistamisen, kun käyttäjä napsauttaa poistonappia.

## 24. setTimeout(() => { div.classList.add('show'); }, 10);

- **Mitä se on**: Tämä lisää show-luokan lyhyen viiveen jälkeen, joka aktivoi uuden kulun häivytystehosteen.
- **Tarkoitus**: Viive varmistaa, että kohde häivyttyy sulavasti näkyviin sen sijaan, että se ilmestyisi äkisti.
- **Keskeinen yksityiskohta**: Tämä pieni viive parantaa käyttäjäkokemusta tekemällä visuaalisesta siirtymästä pehmeämmän.

## 25. function updateSummary() { ... }

- **Mitä se on**: Tämä funktio päivittää yhteenvedon osion, joka näyttää kulujen kokonaissumman.
- **Tarkoitus**: Laskee ja näyttää käyttäjän lisäämien kulujen kokonaismäärän.
- **Keskeinen yksityiskohta**: Tätä funktiota kutsutaan aina, kun uusi kulu lisätään tai poistetaan, pitäen kokonaissumman ajan tasalla.

## 26. expenses.reduce((sum, expense) => sum + expense.amount, 0);

- **Mitä se on**: Tämä laskee kokonaissumman lisäämällä yhteen kaikki expenses-taulukon summat.
- **Tarkoitus**: Laskee kaikkien kulujen summat antaen käyttäjälle kokonaissumman heidän menoistaan.
- **Keskeinen yksityiskohta**: reduce-metodi laskee tehokkaasti summan käymällä taulukon läpi ja lisäämällä jokaisen summan kokonaissummaan.

## 27. window.removeExpense = function(index) { ... }

- **Mitä se on**: Tämä funktio vastaa kulun poistamisesta, kun käyttäjä napsauttaa "Poista" -painiketta.
- **Tarkoitus**: Mahdollistaa käyttäjän poistamaan kuluja listalta napsauttamalla poistopainiketta kohteen vieressä.
- **Keskeinen yksityiskohta**: Funktio käyttää kulun indeksiä taulukossa varmistaakseen, että oikea kulu poistetaan.

## 28. expenseItem.classList.add('removing');

- **Mitä se on**: Tämä lisää removing-luokan kuluerään, aktivoiden häivytystehosteen ennen sen poistamista.
- **Tarkoitus**: Tarjoaa pehmeän visuaalisen siirtymän, kun kulu poistetaan listalta.
- **Keskeinen yksityiskohta**: Tämä luokka aktivoi CSS-animaation häivytystehosteelle, joka tekee poistoprosessista visuaalisesti sulavan.

## 29. expenses.splice(index, 1);

- **Mitä se on**: Tämä poistaa kulun expenses-taulukosta.
- **Tarkoitus**: Päivitämme taulukon niin, että poistettu kulu ei enää näy tai sitä ei lasketa mukaan.
- **Keskeinen yksityiskohta**: splice-metodi varmistaa, että vain valittu kulu poistetaan vaikuttamatta muihin taulukon kohteisiin.

## 30. expenseList.removeChild(expenseItem);

- **Mitä se on**: Tämä poistaa kulun esittävän divin näkyvästä listasta sivulla.
- **Tarkoitus**: Kun häivytystehoste on valmis, kulu poistetaan DOMista, joten se ei ole enää näkyvissä.
- **Keskeinen yksityiskohta**: Elementtien dynaaminen poistaminen DOMista varmistaa, että käyttäjä näkee vain ajantasaisen kululistan.
