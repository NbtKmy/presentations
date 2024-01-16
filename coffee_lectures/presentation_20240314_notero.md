---
marp: true
paginate: true
footer: "19. Nov. 2023 / Nobutake Kamiya: Datenpaket von Github in Zenodo"

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

# Notero = Notion + Zotero
<div class="text_white">Nobutake Kamiya</div>

![bg 100%](../uni_img/hintergrund_1page.jpg)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## [Notion](https://www.notion.so/) 
- Eine Webapplikation für Wissensmanagement
- Dienstleistung seit 2016; Anbieter Notion Labs Inc.
- Ähnliche Dienstleistungen - OneNote, Google Keep, Simplenote, Evernote
- Kostenfreie Nutzung möglich (siehe [Pricing](https://www.notion.so/de-de/pricing))
- Bietet auch ein kostenpflichtiges Plug-in [Notion-AI](https://www.notion.so/de-de/help/ai-pricing-and-usage#notion-ki-zu-deinem-plan-hinzufugen) (10 USD/Monat) an

![bg 30%](./img/Notion-logo.svg)



---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## [Zotero](https://www.zotero.org/) 

- Ein Literaturverwaltungssystem
- Open Source Software - [viele Plugins](https://www.zotero.org/support/plugins) vorhanden 

![bg 30%](./img/zotero-logo.svg)



---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## [Notero](https://github.com/dvanoni/notero)

- Ein Plugin für Zotero
- Erstellt von David Vanoni, Software Entwickler
- Ermöglicht bibliographische Information und Notizen von Zotero in Notion zu übertragen 


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## DEMO - Wie funktioniert Notero?



---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Ja, ich will Notero! Aber wie?

Anleitung ist eigentlich im [Readme des Plugins](https://github.com/dvanoni/notero?tab=readme-ov-file#notero) gut dokumentiert...

Aber wir schauen es Schritt für Schritt!
1. Ein API-Token [Notion - Meine Einbindungen](https://www.notion.so/my-integrations) generieren und gut bewahren
1. Eine Tabelle ("Database") in Notion anlegen und selber konfigurieren oder die vorgefertigten Muster kopieren 
1. Zugriff von Notero auf die Tabelle zulassen
1. Notero in Zotero installieren und konfigurieren

---


