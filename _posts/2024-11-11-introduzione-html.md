---
layout: post
title: "Introduzione a HTML: Guida Completa per Principianti"
author: sal
categories: [html, tutorial, sviluppo web, linguaggio HTML]
image: assets/images/12.jpg
featured: true
description: "Scopri le basi dell'HTML in questa guida per principianti: dai tag alla struttura delle pagine web, impara a costruire le fondamenta del web."
keywords: HTML, introduzione HTML, guida HTML, tag HTML, creare sito web, linguaggio HTML
Introduzione a HTML: Creare le Fondamenta del Web
published: false
---



Benvenuti nella guida introduttiva a HTML, il linguaggio di markup che sta alla base di ogni pagina web. Se volete imparare a creare un sito o semplicemente capire il funzionamento delle pagine che visitate, questo è il posto giusto! Scopriamo insieme come HTML (HyperText Markup Language) crea la struttura delle pagine web e impariamo a usarlo efficacemente.
Cos'è HTML?

HTML è un linguaggio di markup utilizzato per definire la struttura di una pagina web. A differenza di linguaggi come Python o JavaScript, HTML non esegue calcoli o logiche complesse ma determina come il contenuto viene presentato nella pagina. In HTML, ogni elemento è racchiuso in tag, come titoli, paragrafi, immagini, link, ecc.
Struttura di Base di una Pagina HTML

Per iniziare, ecco un esempio di base di una pagina HTML. Inserisci questo codice in un editor come Visual Studio Code o Notepad++ e salva il file come index.html.

<!DOCTYPE html>:
{% raw %}
<html>
<head>
    <title>La mia prima pagina HTML</title>
</head>
<body>
    <h1>Benvenuti nel mio sito web!</h1>
    <p>Questa è la mia prima pagina web creata interamente con HTML.</p>
</body>
</html>
{% endraw %}

Spiegazione degli Elementi:

    <!DOCTYPE html>: Indica che si utilizza HTML5.
    <html>: Elemento radice che racchiude tutto il contenuto HTML.
    <head>: Contiene metadati come il titolo della pagina.
    <title>: Testo che appare nella scheda del browser.
    <body>: Racchiude il contenuto visibile della pagina.

Tag HTML Principali

Ecco una lista dei tag HTML più importanti e utilizzati:

    <h1> - <h6>: Titoli e sottotitoli.
    <p>: Paragrafo di testo.
    <a href="">: Link ipertestuali.
    <img src="" alt="">: Immagini.
    <ul>, <ol>, <li>: Liste ordinate e non ordinate.

Esempio: Pagina con Immagini e Link

Vediamo come aggiungere immagini e link:

<!DOCTYPE html>
<html>
<head>
    <title>Progetto HTML per Neofiti</title>
</head>
<body>
    <h1>Il mio primo progetto HTML</h1>
    <p>Benvenuti! Questa è una semplice pagina HTML con immagini e link.</p>
    
    <img src="immagine.jpg" alt="Descrizione dell'immagine">
    <a href="https://www.esempio.com" target="_blank">Visita il mio sito preferito</a>
</body>
</html>

Creare una Pagina Completa

Provate a costruire una pagina HTML più complessa con questo codice:

<!DOCTYPE html>
<html>
<head>
    <title>La mia seconda pagina HTML</title>
</head>
<body>
    <h1>Ciao mondo!</h1>
    <p>Questa è una pagina per imparare HTML passo dopo passo.</p>

    <img src="paesaggio.jpg" alt="Un bel paesaggio">
    <ul>
        <li>Primo elemento della lista</li>
        <li>Secondo elemento della lista</li>
        <li>Terzo elemento della lista</li>
    </ul>
    <a href="pagina2.html">Vai alla seconda pagina</a>
</body>
</html>

Conclusione

Con queste basi HTML, potete già creare e personalizzare una semplice pagina web! La pratica è essenziale: continuate a sperimentare con nuovi tag e layout per scoprire tutte le possibilità. Buon divertimento e buona fortuna nel mondo del web!