---
marp: true
paginate: true
footer: "18. März 2025 / Nobutake Kamiya: Large language models in Obsidian: LocalGPT"

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

# Large language models in Obsidian: LocalGPT
<div class="text_white">
Nobutake Kamiya</div>

![width:100px](./img/by.svg)

![bg 100%](../uni_img/hintergrund_1page.jpg)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

![bg width:300px](./img/obsidian.png)
![bg width:250px](./img/ollama.png)



---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Obsidian? Genz einfach
... ist ein Wissensmanagementsystem!
[Link zur offiziellen Seite](https://obsidian.md/)

---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Obsidian? Mehr Information
- Kein Open Source Software
- Aber kostenlos für private, nicht-kommerzielle Nutzung 
- Lokale Anwendung; Daten/Notizen lokal gespeichert (s. [Manifesto](https://obsidian.md/about))

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Ollama? Ganz kurz!
... eine Software zur Ausführung von LLMs in der __lokalen__ Umgebung
[Link zur offiziellen Seite](https://ollama.com/)

---
<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Ollama? Mehr Information
- LLMs/VLMs sind quantifiziert (GGUF-Format)
- Sprach-Modelle laufen in der __lokalen__ Umgebung!
- Es ist auch möglich, ein eigenes Sprachmodell mit Ollama laufen zu lassen (ein Modell muss mit llama.cpp quantifiziert und in das GGUF-Format konvertiert werden)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Wie geht das? - Durch Plugin!

# [__LocalGPT__](https://forum.obsidian.md/t/local-gpt-plugin-with-ollama-and-openai-like-providers/73466)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Installation
1. Obsidian und Ollama installieren
1. Modells in Ollama installieren
1. Restriction mode ausschalten (Die Community plugins werden zugelassen)
1. Plugins browsen und die Plugins "AI Provider" und "LocalGPT" auswählen
1. LocalGPT konfigurieren!

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.svg" class="img_rechts"/>
</header>

## Was kann LocalGPT?

Mit Shortcut-Keys kann man folgende Funktionen ausführen:

- Schreiben fortsetzen
- Text Zusammenfassen
- Text-Korrektur


usw...

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

## Fragen?


