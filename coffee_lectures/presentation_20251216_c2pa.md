---
marp: true
paginate: true
footer: "16. Dez. 2025 / Nobutake Kamiya: Wahrheit oder Fälschung? Wie C2PA Licht ins Dunkel bringt"

---
<style>
@import 'default';
/* Bootstrap */
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css2?family=Kosugi&family=Roboto+Mono&display=swap');

:root {
  --theme-yellow: #FEDE00;
  --theme-red: #DC6027;
  --theme-blue: #0028A5;
  --theme-grey: #A3ADB7;
}
header {
  width: 100%;
  height: 80px;
  position: absolute;
  left: -1px;
}
.header_2nd {
  border-bottom: 2px solid var(--theme-grey);
}
.img_links {
  position: relative;
  left: 20px;
}
.img_center {
  display: block;
  margin: 0 auto;
}
.img_rechts {
  position: relative;
  left: 800px;
}
section h1 {
  font-size: 2.65rem;
  color: white;
}
section h2 {
    color: var(--theme-blue);
}
.text_white {
    font-size: 1.65rem;
    color: white;
}
.bg_grey {
    position: relative;
    left: -80px;
    width: 1600px;
    height: 520px;
    background-color: var(--theme-grey);
    text-indent: 100px;
    line-height: 200px;
}
.contact-box {
    /* Flexboxを使って子要素を中央に配置 */
    display: flex;
    flex-direction: column; /* 上から下へ並べる */
    justify-content: center; /* 縦方向の中央揃え */
    align-items: center; /* 横方向の中央揃え */

    /* ボックスのスタイル */
    width: 280px;
    padding: 20px 0;
    border: 3px solid #012c89ff; /* 枠線 */
    
    /* ページ全体で中央に配置する場合 */
    position: absolute;
    top: 83%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .contact-box p:first-child {
    font-size: 24px;
    font-weight: bold;
    color: #012c89ff;
    margin: 0;
  }
  .contact-box p:last-child {
    font-size: 16px;
    color: #014389;
    text-decoration: underline; /* 下線 */
    margin: 5px 0 0 0;
  }


</style>
<header>
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

# Wahrheit oder Fälschung? Wie C2PA Licht ins Dunkel bringt
<div class="text_white">
Nobutake Kamiya</div>

![width:100px](./img/by.svg)

![bg 100%](../uni_img/hintergrund_1page.jpg)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

![bg width:300px](./img/contentcredentials_logo.svg)
![bg width:200px](./img/c2pa_logo.svg)
![bg width:200px](./img/CAI_logo.svg)



---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Hintergrund - Deepfake & Authentizität in KI-Zeitalter

![width:400px](./img/fake_exp.png)
... Ein Beispiel vom [X-Post von @eliothiggins.bsky.social (@EliotHiggins)](https://x.com/EliotHiggins/status/1637927681734987777)



---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Konzept 

Die Generierungs- bzw. Bearbeitungsnachweise der digitalen Medien erstellen und in deren Metadaten verzeichnen.
- [Coalition for Content Provenance and Authenticity (C2PA)](https://c2pa.org/) legt die technischen Standards fest
- [Content Authenticity Initiative (CAI)](https://contentauthenticity.org/) soll C2PA-Standards in diversen Produkte verbreiten

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## C2PA Specifications (Falls jemands sich dafür interessiert...)

https://c2pa.org/specifications/specifications/2.0/index.html


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## [Content Credentials](https://contentcredentials.org/)?

- ist eine Organization
- ..."Pin" für digitale Medien

![bg right width:300px](./img/contentcredentials_logo.svg)


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## [Content Credentials](https://contentcredentials.org/)!

[__Beispiel__](https://contentcredentials.org/verify/?source=https%3A%2F%2Fcontentcredentials.org%2F_app%2Fimmutable%2Fassets%2Fhome2.91ab8f2d.jpg)

![bg right width:300px](./img/contentcredentials_logo.svg)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Aktueller Stand

- Einige AI-Tools (ChatGPT, Adobe FireFly usw.) verleihen C2PA-Metadaten an die durch sie generierten Medien
- Die meisten Kameras und Aufnahmegeräte können nicht die C2PA-Metadaten generieren

### Fazit
C2PA-Metadaten sind noch nicht verbreitet. Weil viele industrielle Stakeholder wie Adobe, Google, Microsoft, OpenAI usw. und Hardware-Hersteller wie Nikon daran teilnehmen, ist es zu hoffen, dass der Standard sich durchsetzt und so die Authentizität der digitalen Medien mehr sichtbar wird... 

---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Tools 1

- [Verifier von ContentCredentials](https://contentcredentials.org/verify) - Eine Website, in der man C2PA-Metadaten visualisieren kann
- [Adobe Content Authenticity (Beta) - Website](https://contentauthenticity.adobe.com/apply) - Eine Browseranwendung, mit der man C2PA-Metadaten einem digitalen Contents hinzufügen kann
- [Adobe Content Authenticity (Beta) - GoogleChrome-Plugin](https://helpx.adobe.com/ch_de/creative-cloud/help/cai/adobe-content-authenticity-chrome-browser-extension.html) - Diese Browser-Erweiterung macht CR-Pin auf der Website sichtbar


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Tools 2

- [Open Source Tools](https://opensource.contentauthenticity.org/docs/introduction/)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Demo

Demo-Website:
https://nbtkmy.github.io/webserve/testCR.html




---
<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

<a href="https://forms.office.com/e/dCjyuGTjVX" target="_blanc" rel="noopener noreferrer"><img src="./img/feedback.png" class="img_center" alt="feedback information" height="350"></a>
<div class="contact-box">
  <p>Kontakt</p>
  <p>nobutake.kamiya@ub.uzh.ch</p>
</div>




---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Vielen Dank!


