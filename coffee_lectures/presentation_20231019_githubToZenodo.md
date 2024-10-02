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

# Datenpaket von Github in Zenodo
<div class="text_white">Nobutake Kamiya</div>

![bg 100%](../uni_img/hintergrund_1page.jpg)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## [Github](https://github.com/) - in Kürze
- Cloud basierte Plattform für Softwareentwicklung und Versionsverwaltung
- Dienstleistung seit 2008
- Gehört Microsoft seit 2018
- Ähnliche Dienstleistung z.B. GitLab (UZH hat ein [Instanz](https://www.zi.uzh.ch/de/staff/software-elearning/webplatforms/gitlab.html))

## Ganz Kurz
Mit Github kann man ein Software, Datenset oder Codes mit einem Team entwickeln und die Version einfach verwalten!

---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## [Zenodo](https://zenodo.org/) - in Kürze
- Online-Speicherdienst. Finanziert von der Europäsichen Kommission
- Gepflegt/Wartung von CERN Data Centre & InvenioRDM
- Man kann dort die wissenschaftlichen Datensets oder auch Software usw. deponieren 
- Der Eintrag erhält DOI

## Ganz Kurz
Zenodo ist ein gutes Data-Repository, wo die Wissenschaftler selber die Daten hochlanden können. 

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Workflow - Datenset/Software von Github zu Zenodo?

... Also man kann gut die beiden Dienstleistungen von Github und Zenodo kombinieren und dadurch einen Workflow konzipieren;
1. Erster Schritt - Entwicklung/Versionverwaltung des Datenset/Software in Github
1. Zweiter Schritt - wenn Projekt die erste Version publiziern will, kann das Datenpaket auf Zenodo publiziert werden



---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## ...und wie das geht? Part 1

### Voraussetzung 
- Im Github-Repo bereits das Datenset oder Software vorhanden


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## ...und wie das geht? Part 2

1. Bei Zenodo mit Github-Account anmelden
1. Dann "Profile Menü" oben rechts aufmachen. Darunter "Github" klicken
1. Dann erscheit die Anleitung, der du folgen kannst...


---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## ...und wie das geht? Part 3

![](./githubZenodo.png)


---
<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Zitieren erleichtern mit CFF-File

Wenn man die ZIP-File in Zenodo hochgeladen hat, erhält man DOI. Dies kann man wiederum in Github (README und CFF-File) hinzufügen!

Eine CFF-File sieht so aus:
```cff
cff-version: 1.2.0
authors:
  - family-names: Kamiya
    given-names: Nobutake
    orcid: https://orcid.org/0000-0002-5755-3322
title: "DB-App (Database Application)"
version: 1.0.0
doi: 10.5281/zenodo.8381877
date-released: 2023-09-26
```

---
<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## UB hilft bei weiteren Themen wie...

- Erstellung der DMP (Data Management Plan)
- Data Management

Bitte bei Liaison Librarian in entsprechenden Bereichen fragen!