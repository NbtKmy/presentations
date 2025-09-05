---
marp: true
paginate: true
footer: "23. Sept. 2025 / Nobutake Kamiya: NotebookLM als Lernpartner für das Studium"

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
.img_center {
  display: block;
  margin: 0 auto;
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

# NotebookLM als Lernpartner für das Studium
<div class="text_white">
Nobutake Kamiya</div>

![width:100px](./img/by.svg)

![bg 100%](../uni_img/hintergrund_1page.jpg)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

![bg width:500px](./img/notebook-logo.svg)


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## [NotebookLM](https://notebooklm.google/) in Kürze

- Kostenfreie Webapplikation (...aber, Google-Account notwendig)
- Es gibt kostenpflichtige "NotebookLM Pro" auch (Hier reden wir nur über kostenfreie Version)
- Unterschiedliche "Quellen" einlesen und auf dem Basis der Quelleninformation mit LLM Chatten
- Notizen mit Hilfe des LLM erstellen und sie als Quelle speichern
- Aus den ausgewählten Quellen ein "podcast interview like" Audio-Datei generieren
- <span style="color:red;">__Neu__:</span> Notebook kann jetzt mit jemandem geteilt werden 

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Wichtiges in Kürze
- Es sind 3 Nutzungsbedingungen ([Google Workspace](https://workspace.google.com/terms/premier_terms/), [Google Workspace for Education](https://workspace.google.com/terms/education_terms/), [Google-Nutzungsbedingungen](https://policies.google.com/terms)) vorhanden. Sie sind unterschiedlich. Im Weiteren ziehen wir nur Google-Nutzungsbedingungen in Betracht
- Nutzungsbedingugnen für kostenpflichtige Umgebung [hier](https://support.google.com/notebooklm/answer/16213268?ref_topic=16175214&sjid=1596286602733096536-NC)
- Model Gemini 2.5 Flash-Lite(?) (Stand: 26. Juni 2025, siehe [hier](https://developers.googleblog.com/en/gemini-2-5-thinking-model-updates/))

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## ... Bitte einmal selber lesen! 
![width:800px](./img/notebooklm_img2.png)
(Zuletzt gesichtet am 26.06.2025 [hier](https://support.google.com/notebooklm/answer/16164461?hl=de&ref_topic=16164070&sjid=7309936810068079434-EU))

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Was kann NotebookLM?

- Quelle zusammenfassen
- Chatten mit LLM mit Quellen-Wissen
- Notizen erstellen bzw. Notizen LLM erstellen lassen
- Podcast-artiges Gespräch generieren
- Ein Notebook teilen
- usw...

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



