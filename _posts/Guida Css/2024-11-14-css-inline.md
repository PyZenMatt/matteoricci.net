---
layout: post
title: "Introduzione a CSS:Cos'è il css e lo stile inline"
author: Teo
categories: guida_CSS
image: assets/images/
featured: false
description: "Guida CSS Completa: Impara le Basi per Creare Pagine Web Moderne e Responsive"
keywords: CSS, introduzione CSS, guida CSS, creare sito web, linguaggio HTML
hidden: true
Introduzione a HTML: Creare le Fondamenta del Web
---

Cos’è il CSS e come funziona con HTML

CSS, acronimo di Cascading Style Sheets (fogli di stile a cascata), è un linguaggio utilizzato per descrivere la presentazione di un documento HTML. Mentre HTML definisce la struttura e il contenuto di una pagina web (ad esempio titoli, paragrafi, immagini, link), il CSS si occupa di stabilire l’aspetto di tali elementi, come colori, font, spaziature e layout.

HTML e CSS lavorano insieme, dove l’HTML rappresenta lo scheletro della pagina e il CSS ne è la “pelle” che ne determina l’aspetto. Il CSS permette di separare la presentazione dal contenuto, così da rendere il codice più ordinato, scalabile e facile da mantenere. Grazie al CSS, puoi applicare uno stile coerente su tutte le pagine di un sito con un solo file CSS, mantenendo un design uniforme e facilitando la gestione di aggiornamenti.
Il funzionamento di CSS: Cascading e Specificità

Il termine "cascading" si riferisce al modo in cui vengono applicati gli stili quando ci sono più dichiarazioni CSS che riguardano lo stesso elemento HTML. Le regole CSS seguono una specifica gerarchia di applicazione chiamata specificità, che può essere riassunta come segue:

    Inline styles (stili in linea): sono applicati direttamente agli elementi HTML e hanno la massima priorità.
    Internal stylesheets (fogli di stile interni): definiti all’interno della pagina HTML.
    External stylesheets (fogli di stile esterni): definiti in un file separato e collegati alla pagina HTML.

Quando ci sono conflitti tra diversi stili, il CSS applica il concetto di specificità per determinare quale stile prevale. Oltre alla specificità, l’ordine in cui le regole sono dichiarate gioca un ruolo, con le regole definite per ultime che hanno la precedenza.
Come aggiungere CSS a una pagina HTML

Esistono tre modi per aggiungere CSS a una pagina HTML: inline, internal e external stylesheets. Ogni approccio ha i suoi vantaggi e svantaggi e viene usato in base al contesto e alla struttura del progetto.
1. Inline CSS

L'inline CSS viene utilizzato direttamente all'interno di un elemento HTML, applicando uno stile specifico solo a quel singolo elemento. È definito usando l’attributo style direttamente nell'elemento HTML, come mostrato nell'esempio seguente:
```css
<p style="color: blue; font-size: 16px;">Questo testo è blu e ha un font di 16px.</p>
```

Pro:

    Adatto per stili molto specifici e unici a un singolo elemento.
    Ha priorità elevata e può sovrascrivere facilmente altri stili CSS.

Contro:

    Complica il codice, rendendolo difficile da leggere e mantenere.
    Non è riutilizzabile e quindi poco efficiente per progetti più grandi.

2. Internal CSS (foglio di stile interno)

Il CSS interno viene scritto all’interno di un tag <style> situato nella sezione <head> del documento HTML. Questo approccio viene utilizzato quando vuoi applicare stili che si applicano a tutta la pagina, ma senza creare un file esterno.

Esempio di CSS interno:
```html
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pagina con CSS interno</title>
  <style>
    body {
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
    }
    h1 {
      color: #333333;
      text-align: center;
    }
    p {
      color: #555555;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <h1>Ciao Mondo!</h1>
  <p>Questa è una pagina di esempio con CSS interno.</p>
</body>
</html>
```
Pro:

    Utile per pagine singole che richiedono stili specifici.
    Gli stili sono facilmente accessibili senza un file CSS esterno.

Contro:

    Non è ideale per gestire stili di un sito web con più pagine, poiché non è riutilizzabile.
    Il codice HTML risulta più pesante e disordinato, specialmente in progetti grandi.

3. External CSS (foglio di stile esterno)

Il CSS esterno si trova in un file separato con estensione .css (ad esempio, stile.css). Questo file viene collegato all’HTML tramite il tag <link> all’interno della sezione <head> del documento HTML. È l’approccio più comune e professionale per i progetti web di qualsiasi dimensione, poiché consente di applicare gli stessi stili a più pagine, mantenendo il codice HTML pulito e organizzato.

Esempio di file HTML che usa un CSS esterno:
```html
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pagina con CSS esterno</title>
  <link rel="stylesheet" href="stile.css">
</head>
<body>
  <h1>Ciao Mondo!</h1>
  <p>Questa è una pagina di esempio con CSS esterno.</p>
</body>
</html>
```
Esempio di file stile.css:
```html
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333333;
  text-align: center;
}

p {
  color: #555555;
  line-height: 1.6;
}
```
Pro:

    Mantiene il codice HTML ordinato e facile da leggere.
    Consente il riutilizzo degli stessi stili su più pagine.
    Facile da aggiornare: modificando il file CSS, gli stili si aggiornano in tutto il sito.

Contro:

    Richiede una richiesta HTTP aggiuntiva per caricare il file CSS, anche se può essere minimizzata con la memorizzazione nella cache.
    Inizialmente richiede una configurazione leggermente più complessa, ma i vantaggi di mantenimento sono molto più elevati.

Quale metodo scegliere?

In generale, il metodo inline viene utilizzato solo per piccole modifiche specifiche, internal per pagine isolate con stili personalizzati, e external per siti web con più pagine, dove la coerenza degli stili è cruciale. L’external CSS è lo standard per il web design moderno, poiché permette una manutenzione semplificata e un’esperienza utente più omogenea su tutto il sito.

Per concludere questo articolo sulle basi del CSS e sull’uso dello stile inline, vorrei ancora sottolineare l’importanza di comprendere le diverse modalità con cui si possono applicare stili ai documenti HTML. 

L’inline CSS, nonostante sia meno utilizzato nelle applicazioni professionali a causa della sua limitata riusabilità e della mancanza di separazione tra contenuto e presentazione, resta utile in situazioni specifiche come test rapidi o modifiche mirate che non richiedono fogli di stile esterni o globali.

Ora che hai acquisito le nozioni essenziali su come funziona CSS e come applicare gli stili inline, sei pronto a esplorare approcci più avanzati, come i fogli di stile esterni e i CSS modulari, per creare progetti più strutturati e facili da mantenere.

Vai al [Capitolo 2]({{sitebase.url}}/selettori-css)