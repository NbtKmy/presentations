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

# PDF-Dokumente übersetzen in Zotero
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
- Ein Plugin [zotero-pdf-translate](https://github.com/windingwind/zotero-pdf-translate) installieren
- ...dann [DeepL](https://www.deepl.com/translator) als Übersetzungsprogramm einstellen


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Voraussetzung
1. Zotero Stand alone (Version 6 oder höher) ist auf dem Rechner bzw. Laptop installiert
1. Für DeepL-API (kostenlos) braucht man eine Kreditkarte


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Installation I : Plugin auswählen...
- Offizielle [Plugin-List](https://www.zotero.org/support/plugins)
![height:300px](./img/illust_plugins.png)

---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>


## Installation II : Github Repo "zotero-pdf-translate" I
- Unter der Kategorie "Releases" "latest" klicken
![height:300px](./img/illust_plugin_github.png)

---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Installation III : Github Repo "zotero-pdf-translate" II
- XPI-File herunterladen (Bei FireFox rechts klick und "Speichern unter..." auswählen)
![height:300px](./img/illust_plugin_github2.png)


---



<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Installation IV : Github Repo "zotero-pdf-translate" II
- XPI-File herunterladen (Bei FireFox rechts klick und "Speichern unter..." auswählen)
![height:300px](./img/illust_plugin_github2.png)


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Installation V : Add-ons Manager in Zotero-Stand alone
- Menü "Werkzeuge > Add-on" klicken
- Das Rädchen-Symbol klicken, dann weiter "Install Add-on From File" klicken 
- Das XPI-File auswählen und öffnen
- Zotero Stand alone neu starten
- Installation fertig!


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Add-on Konfigurieren

- In Zotero-Stand alone "Bearbeiten" > "Einstellungen"
- Wenn das Add-on richtig installiert ist, taucht ein Tab "Translate" (s. die nächste Folie)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Add-on Konfigurieren

![height:400px](./img/config_translator.svg)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Add-on Konfigurieren - DeepL (Free plan) verwenden

- Ein Account bei [DeepL](https://www.deepl.com/pro-api?cta=header-pro-api) erstellen (Eine Kreditkarte notwendig!)
- Die "Konto"-Seite des DeepL-Accounts öffnen 

![height:200px](./img/deepl_1.png)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Add-on Konfigurieren - DeepL (Free plan) verwenden

- Auf der "Konto"-Seite unten findet man den Authentifizierungsschlüssel für API
- Wenn nicht, einen neuen Schlüssel erstellen
![height:200px](./img/deepl_2.png)


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Add-on Konfigurieren - DeepL (Free plan) verwenden
- In der instellung vom Zotero-Stand alone "Translate" wählen
- Bei "Translation Services" "DeepL(Free Plan)" anwählen und den eigenen API-Key hineinkopieren
- Übersetzungssprachen ändern
- Fertig!    

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Zu [DeepL API Free](https://www.deepl.com/docs-api)
- Max. 500.000 Zeichen pro Monat kostenlos 
- Max. Textmenge 128 KB pro ein Request
- Daten werden nicht so stark geschützt wie bei DeepL API Pro 


---
<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Vielen Dank!