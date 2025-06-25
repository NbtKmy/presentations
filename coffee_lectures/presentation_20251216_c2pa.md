---
marp: true
paginate: true
footer: "25. März 2025 / Nobutake Kamiya: Large language models in Obsidian: Smart Second Brain"

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

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Making pictures of Trump getting arrested while waiting for Trump&#39;s arrest. <a href="https://t.co/4D2QQfUpLZ">pic.twitter.com/4D2QQfUpLZ</a></p>&mdash; @eliothiggins.bsky.social (@EliotHiggins) <a href="https://twitter.com/EliotHiggins/status/1637927681734987777?ref_src=twsrc%5Etfw">March 20, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


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

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Vielen Dank!


