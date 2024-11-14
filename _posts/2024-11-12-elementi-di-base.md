---
layout: post
title: "Elementi di Base dell'HTML Tag e Attributi"
author: Teo
categories: HTML, 2024, tutorial, sviluppo web, linguaggio HTML
image: assets/images/
featured: 
description: "L'HTML (HyperText Markup Language) è il linguaggio utilizzato per strutturare e visualizzare il contenuto di una pagina web. È formato da tag e attributi che servono per costruire e personalizzare gli elementi della pagina"
keywords: HTML, introduzione HTML, guida HTML, tag HTML, creare sito web, linguaggio HTML
published: true
hidden: true
---

L'HTML (HyperText Markup Language) è il linguaggio utilizzato per strutturare e visualizzare il contenuto di una pagina web. È formato da tag e attributi che servono per costruire e personalizzare gli elementi della pagina. Partiamo dalle basi.
Tag

Un tag è un comando racchiuso tra parentesi angolari (< >) e indica l'inizio o la fine di un elemento HTML. Di solito, ogni elemento HTML ha un tag di apertura e un tag di chiusura.

Esempio:

```html
<p>Questo è un paragrafo.</p>
```

Qui, <p> è il tag di apertura e </p> è il tag di chiusura. Il contenuto tra questi due tag è il testo che sarà visualizzato nel browser.

# Attributi

Gli attributi forniscono informazioni aggiuntive su un elemento. Vanno sempre inseriti all'interno del tag di apertura, e sono scritti come coppie nome-attributo e valore, separati da un segno uguale.

Esempio:
```html
<p class="testo-evidente">Questo è un paragrafo con attributo.</p>
```
Qui class="testo-evidente" è un attributo che assegna una classe al paragrafo.
Principali Tag Strutturali

Vediamo ora alcuni dei tag più comuni e il loro uso.
1. <h1> - <h6>

I tag <h1> fino a <h6> sono usati per i titoli e i sottotitoli. <h1> rappresenta il titolo principale della pagina e <h6> è il livello più basso. Usarli correttamente è importante anche per l’ottimizzazione sui motori di ricerca (SEO).

Esempio:
```html
<h1>Titolo Principale</h1>
<h2>Sottotitolo</h2>
<h3>Sezione del Sottotitolo</h3>
```
2. <p>

Il tag <p> serve per creare un paragrafo. È uno dei tag più semplici e usati per il testo normale.

Esempio:
```html
<p>Questo è un paragrafo di testo.</p>
```
3. <div>

Il tag <div> è un contenitore generico usato per raggruppare altri elementi. È spesso utilizzato per scopi di layout e di stile (CSS).

Esempio:
```html
<div>
  <h2>Sezione in un Div</h2>
  <p>Testo dentro un div.</p>
</div>
```
4. <span>

Il tag <span> è simile a <div>, ma è un contenitore inline, quindi non crea un'interruzione di linea come fa <div>. Viene usato per applicare stili a una parte specifica di testo all'interno di un paragrafo.

Esempio:
```html
<p>Questo è un testo con una parola <span style="color:red;">evidenziata</span>.</p>
```
5. <br>

Il tag <br> rappresenta un'interruzione di linea. È un tag singolo (non ha un tag di chiusura) e crea una nuova linea all'interno del testo.

Esempio:
```html
<p>Questo è un testo su due righe.<br>Questa è la seconda linea.</p>
```
6. <hr>

Il tag <hr> inserisce una linea orizzontale che viene spesso usata per separare sezioni del contenuto. Anche questo è un tag singolo.
```html
Esempio:

<h2>Sezione 1</h2>
<p>Contenuto della sezione 1.</p>
<hr>
<h2>Sezione 2</h2>
<p>Contenuto della sezione 2.</p>
```
Esempio Completo

Ecco un esempio che mette insieme i tag che abbiamo visto:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Esempio HTML Base</title>
</head>
<body>

  <h1>Benvenuto al mio sito!</h1>
  <p>Questo è un paragrafo introduttivo.</p>

  <h2>Sezione Principale</h2>
  <div>
    <p>Questo è un contenuto di esempio in un div.</p>
    <p>Questa frase contiene una <span style="color:blue;">parola evidenziata</span> in blu.</p>
  </div>

  <hr>

  <h3>Conclusione</h3>
  <p>Grazie per aver visitato il sito!<br>Arrivederci!</p>

</body>
</html>
```
Conclusione

Comprendere gli elementi fondamentali dell'HTML è il primo passo per diventare un esperto nello sviluppo web. Con i tag e gli attributi di base, si può costruire la struttura di qualsiasi pagina e fornire le basi per aggiungere stili e interattività. Se vuoi continuare a imparare, esplora risorse avanzate o consulta le nostre guide[Capitolo 3]({{ site.baseurl }}/testo-e-formattazione/): "Testo e formattazione" per migliorare le tue competenze e scoprire nuovi strumenti per il web design. Con una solida conoscenza di HTML, sarai pronto per affrontare le sfide dello sviluppo e creare siti web accattivanti e funzionali. 

[Capitolo 3]({{ site.baseurl }}/testo-e-formattazione/): "Testo e formattazione"