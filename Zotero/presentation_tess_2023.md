---
marp: true
paginate: true
footer: "18. April 2023 / Nobutake Kamiya: Zotero II (Tools für das wissenschaftliche Informationsmanagement)"

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

# PDF-Dokumente OCRisieren 
<div class="text_white">Tools für das wissenschaftliche Informationsmanagement<br>
Nobutake Kamiya</div>

![bg 100%](../uni_img/hintergrund_1page.jpg)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

![width:600px](./img/zotero-logo.svg)
[Link zur offiziellen Seite](https://www.zotero.org/)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Was ist Zotero?
- Ein Literaturverwaltungssystem wie [Mendeley](https://www.mendeley.com/), [Endnote](https://endnote.com/) oder [Citavi](https://www.citavi.com/de/download)
- Eine Open Source Software ([Quellcode in Github](https://github.com/zotero/zotero))

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Was kann man mit Zotero machen? I
- Zitat einfach erstellen
- Bibliografie erstellen
- Literatur importieren und mit Tags versehen
- Literaturliste über Cloud synchronisieren und mit anderen teilen und publizieren

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Was kann man mit Zotero machen? II 
- PDFs annotieren (siehe Beschreibung der [neuen Funktionen von Zotero 6](https://www.zotero.org/blog/zotero-6/))
- Zitierstile editieren (mit [Citation Style Language](https://citationstyles.org/))
- Weitere [Plugins](https://www.zotero.org/support/plugins) verwenden

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Heute machen wir ...
- [Tesseract](https://tesseract-ocr.github.io/tessdoc/Downloads.html) installieren
- [Poppler (Windows) wegen pdftoppm](https://github.com/oschwartz10612/poppler-windows) installieren
- Ein Plugin [Zotero OCR](https://github.com/UB-Mannheim/zotero-ocr) installieren
- Ein PDF-Dokument ohne Text OCRisieren


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Voraussetzung
1. Zotero Stand alone (Version 6 oder höher) ist auf dem Rechner bzw. Laptop installiert



---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Installation I : Tesseract installieren...
- Offizielle [tesseract](https://tesseract-ocr.github.io/tessdoc/Downloads.html)-Seite
- Leider gibt es momentan keinen offiziellen Installer (Stand: 31.01.2023)
- Deshalb den Installer von UB Mannheim nehmen
![height:300px](./img/illust_plugin_tessa_1.png)



---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Installation I : Tesseract installieren... (Windows)
- [Tesseract UB Mannheim](https://github.com/UB-Mannheim/tesseract/wiki)
- Einen passenden Installer auswählen und herunterladen
![height:300px](./img/illust_plugin_tessa_2.png)


---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Installation I : Tesseract installieren... (Windows)
- Bei __Windows__ exe-File ausführen
- Pfad merken
![height:300px](./img/illust_plugin_tessa_3.png)


---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Installation II : Poppler installieren... (Windows)
- Das Github Repo [Poppler (Windows)](https://github.com/oschwartz10612/poppler-windows) besuchen
- Das neueste Release (ZIP-File) herunterladen
- ZIP-File in einem neuen Ordner entpacken und den Pfad merken
![height:300px](./img/illust_plugin_popp.png)


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Installation III : Plugin "Zotero OCR" installieren...
- Offizielle [Plugin-List](https://www.zotero.org/support/plugins)
- [Zotero OCR](https://github.com/UB-Mannheim/zotero-ocr) anwählen
![height:300px](./img/illust_plugin_tessa_4.png)

---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>


## Installation III : Plugin "Zotero OCR" installieren...
- Unter der Kategorie "Releases" "latest" klicken
![height:300px](./img/illust_plugin_github.png)

---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Installation III :  Plugin "Zotero OCR" installieren...
- XPI-File herunterladen (Bei FireFox rechts klick und "Speichern unter..." auswählen)
![height:300px](./img/illust_plugin_github2.png)


---



<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Installation IV :  Plugin "Zotero OCR" installieren...
- XPI-File herunterladen (Bei FireFox rechts klick und "Speichern unter..." auswählen)
![height:300px](./img/illust_plugin_github2.png)



---
## Vielen Dank!