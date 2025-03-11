---
marp: true
paginate: true
footer: "16. April 2025 / Nobutake Kamiya: Practical tools for your studies / Obsidian + Ollama"

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
  left: 0px;
  background: white;
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
  width: 170px;
  left: 900px;
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
<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.png" class="img_rechts"/>
</header>

# Practical tools for your studies / Obsidian + Ollama
<div class="text_white">
Nobutake Kamiya</div>

![width:100px](./img/cc-by.png)
![bg width:1300px height:600px](../uni_img/hintergrund_1page.jpg)


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.png" class="img_rechts"/>
</header>

![bg width:300px](../coffee_lectures//img/obsidian.png)
![bg width:250px](../coffee_lectures//img/ollama.png)



---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.png" class="img_rechts"/>
</header>

## Obsidian? In short
... is a knowledge management software!
[Link to the official site](https://obsidian.md/)

---


<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.png" class="img_rechts"/>
</header>

## Obsidian? 
- Not an open source software
- But free to the non-commercial, private usage
- Motto = "your thoughts and ideas belong to you" (see [Manifesto](https://obsidian.md/about))

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.png" class="img_rechts"/>
</header>

## Ollama? In a nutshell
... a Software, to run LLMs in your local environment
[link to the official site](https://ollama.com/)


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.png" class="img_rechts"/>
</header>

## Ollama?
- LLMs/VLMs are quantized (GGUF format)
- Language models run in the __local__ environment!
- It is also possible to run your own language model with Ollama (a model must be quantized with llama.cpp and converted to GGUF format)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.png" class="img_rechts"/>
</header>

## A short demo with Ollama


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.png" class="img_rechts"/>
</header>

# How can we use Ollama in Obsidian? - Plugins
![bg width:1300px height:600px](../uni_img/hintergrund_1page.jpg)


---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.png" class="img_rechts"/>
</header>

## Zwo plugins 
- [LocalGPT](https://github.com/pfrankov/obsidian-local-gpt)
- [Smart Second Brain](https://github.com/your-papa/obsidian-Smart2Brain)

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.png" class="img_rechts"/>
</header>

## How to install the plugins?

1. Install Obsidian & Ollama
1. Pull one model for the general purpose and another model for embedding

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.png" class="img_rechts"/>
</header>

## How to pull a model in Ollama...

```
ollama pull [a model name like "llama3.2"]
````

You can chose a model from this list: 
https://ollama.com/library

It depends on the performance of your laptop which model you can/should use...

---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.png" class="img_rechts"/>
</header>

## Install "community plugins" in Obsidian
 1. Turn off the restriction mode
 1. Browse the community plugins
 1. Chose the plugins, "AI Providers", "LocalGPT" and "Smart Second Brain" to install

 The plugin "LocalGPT" requires the plugin "AI Providers". Thus you have to install "AI Providers" either.

 ---

<header class="header_2nd">
<img src="../uni_img/header_links.png" height=80% class="img_links"/>
<img src="../uni_img/header_rechts.png" class="img_rechts"/>
</header>

## Configure the plugins!






