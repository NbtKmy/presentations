---
marp: true
paginate: true
footer: "03. Okt. 2024 / Nobutake Kamiya: Speicherkapazität in Zotero erweitern"

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

# Speicherkapazität in Zotero erweitern
<div class="text_white">
Nobutake Kamiya</div>

![width:100px](./img/by.svg)

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

## Zotero?
- Ein Literaturverwaltungssystem wie [Mendeley](https://www.mendeley.com/), [Endnote](https://endnote.com/) oder [Citavi](https://www.citavi.com/de/download)
- Eine Open Source Software ([Quellcode in Github](https://github.com/zotero/zotero))
- PDF-Reader ab Version 6 [(UB Blog)](https://www.uzh.ch/blog/ub/2022/04/13/zotero-6-neu-mit-pdf-reader/)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Zotero hat aber wenig freie Speicherkapazität😿 
- kostenfreie [Zotero Storage](https://www.zotero.org/storage) nur 300 MB
- In Zotero Storage werden PDFs, images, web snapshot und weitere Files gespeichert

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

<div class="bg_grey text_white">
Mehr Storage = Mehr glückliche Menschen
</div>

---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## 2 Möglichkeiten Storage-Erweiterung
- [WebDAV](https://de.wikipedia.org/wiki/WebDAV) (z.B. SWITCHdrive)
- Cloudstorage (z.B. GoogleDrive, Dropbox, SWITCHdrive) + Zotfile

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

<div class="bg_grey text_white">
Methode 1: WebDAV (SWITCHdrive)
</div>


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## WebDAV in [SWITCHdrive](https://www.switch.ch/en/drive)
- SWITCHdrive bietet 100 GB für Uni-Angehörige an
- SWITCHdrive bietet WebDAV-Zugriff an

---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## SWITCHdrive konfigurieren 1
1. [Erläuterung hier](https://help.switch.ch/drive/faq/mobile-devices/)
1. [Einloggen](https://drive.switch.ch)!
1. Eigenen Account (oben rechts) klicken > Einstellungen klicken > "Sicherheit" in der linken Spalte klicken 
 

---



<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## SWITCHdrive konfigurieren 2

- App-Passcode erstellen und sichern!
![height:350px](./img/zotero_webdav.png)


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## SWITCHdrive konfigurieren 3

1. Einen Ordner für Zotero-Storage erstellen (der Name des untersten Ordner muss "zotero" lauten): z.B. ~/Private/zotero
1. Unten links "Einstellung" klicken > Dort gibt es URL für WebDAV: "https://drive.switch.ch/remote.php/dav/files/[xxx.yyy%40zzz.ch]/"
1. Den vollständige URL bilden - z.B.: "https://drive.switch.ch/remote.php/dav/files/[xxx.yyy%40zzz.ch]/Private/zotero"

---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Zotero konfigurieren

1. Zotero > Bearbeiten > Einstellungen klicken > "Sync" klicken
1. Passende Optionen anhaken und WebDAV-URL und Passcode eingeben
![height:350px](./img/zotero_webdav3.png)


---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Zotero konfigurieren

1. Zotero > Bearbeiten > Einstellungen klicken > "Sync" klicken
1. Passende Optionen anhaken und WebDAV-URL und Passcode eingeben
![height:350px](./img/zotero_webdav3.png)


---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## WebDAV fertig!
![height:350px](./img/zotero_webdav4.png)


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

<div class="bg_grey text_white">
Methode 2: Cloudstorage + Zotfile
</div>

---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Cloudstorage in einer lokalen Umgebung installieren
- Desktop-Applikation für ein Cloudstorage installieren: z.B. [GoogleDrive for Desktop](https://support.google.com/drive/answer/10838124?hl=de#)
- Einen Ordner für Zotero erstellen 

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Zotero konfigurieren 1
- Plug-In "[ZotFile](https://zotfile.com/)" ins Zotero (Desktop-Applikation) installieren
- Zotero > Bearbeiten > Einstellungen klicken > "Erweitert"-Tab öffnen
- Dort bei "Basisverzeichnis für verlinkte Dateianhänge" den Pfad zu dem entsprechenden Ordner von Cloudstorage eingeben 
- __Achtung__ "Speicherort" so belassen!


---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Zotero konfigurieren 2
- Werkzeuge > Zotfile Einstellungen... klicken
- Tab "Allgemein" den Pfad eingeben
![height:350px](./img/zotero_zotfile1.png)


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Zotero konfigurieren 3
- Tab "Umbenennungs-Regeln" ggf. anpassen 
![height:350px](./img/zotero_zotfile2.png)


---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Fertig!
![height:400px](./img/zotero_zotfile3.png)


---
<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Vielen Dank!