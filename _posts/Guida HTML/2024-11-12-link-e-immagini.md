---
layout: post
title: "Link e immagini"
author: Teo
categories: guida_html
image: assets/images/
featured: 
description: "Crea collegamenti ipertestuali e gestisci immagini in HTML con i tag <a> e <img>, migliorando navigabilità e accessibilità."
keywords: HTML, introduzione HTML, guida HTML, tag HTML, creare sito web, linguaggio HTML
hidden: true
---
In HTML, per creare collegamenti ipertestuali e inserire immagini, si utilizzano i tag <a> e <img>. Di seguito, ti spiego in dettaglio come funzionano e come personalizzarli.
1. Creare Collegamenti Ipertestuali con <a href="">

Il tag <a> viene utilizzato per creare collegamenti ipertestuali, cioè link che, quando cliccati, portano l'utente a una pagina web specifica, a un'altra sezione della stessa pagina o a un documento. La sintassi di base è:

```html
<a href="URL">Testo del link</a>
```
Spiegazione degli attributi principali:

href: È l'attributo più importante e specifica la destinazione del link. Ecco alcuni esempi:
Per collegarsi a un sito web esterno: 
```html
<a href="https://www.esempio.com">Vai a esempio.com</a>
```
Per collegarsi a una pagina interna del sito: 
```html
<a href="pagina_interna.html">Pagina interna</a>
```

Per creare un collegamento a un'ancora (un punto specifico) della stessa pagina: 
```html
<a href="#sezione1">Vai alla Sezione 1</a>
```

Per inviare un'email: 
```html
<a href="mailto:email@esempio.com">Invia una mail</a>
```
**target**: 

Indica dove aprire il link. I valori principali sono:
_self (predefinito): apre il link nella stessa scheda/finestra.
_blank: apre il link in una nuova scheda/finestra.

Esempio: 
    ```html
    <a href="https://www.esempio.com" target="_blank">Apri in una nuova scheda</a>
    ```

title: Fornisce una descrizione o un suggerimento quando l'utente passa il mouse sul link.
Esempio: 
```html
<a href="https://www.esempio.com" title="Visita il nostro sito">Vai a esempio.com</a>
```

Esempio completo:

```html
<a href="https://www.esempio.com" target="_blank" title="Visita il nostro sito">Vai a esempio.com</a>
```
2. Inserire Immagini con <img src="" alt="">

Il tag <img> serve per inserire immagini all'interno di una pagina web. Diversamente da altri tag, <img> è un tag autochiudente, cioè non ha un tag di chiusura. La sintassi di base è:


```html
<img src="URL_dell_immagine" alt="Descrizione dell'immagine">
```
### Spiegazione degli attributi principali:

src: Specifica la posizione dell'immagine. Questo può essere un URL esterno (come un link web) o un percorso locale (come un file nel server).
        Esempio: <img src="immagine.jpg" alt="Descrizione dell'immagine">

alt: Fornisce un testo alternativo che appare se l'immagine non può essere caricata. È fondamentale per l'accessibilità (ad esempio, gli screen reader lo leggono per gli utenti con disabilità visive) e migliora la SEO.

{% raw %}        
Esempio: <img src="immagine.jpg" alt="Foto di un paesaggio marino">
{% endraw %}

width e height: Specificano le dimensioni dell’immagine in pixel o percentuale. È sempre preferibile specificare solo una di queste proprietà, per evitare distorsioni dell'immagine.
        
Esempio: <img src="immagine.jpg" alt="Foto di un paesaggio marino" width="300">

    title: Fornisce un testo che appare quando si passa il mouse sull’immagine.
        Esempio: <img src="immagine.jpg" alt="Foto di un paesaggio marino" title="Paesaggio marino">

Esempio completo:
```html
<img src="https://www.esempio.com/immagine.jpg" alt="Descrizione dell'immagine" width="300" height="200" title="Testo alternativo">
```
Modificare le dimensioni e lo stile dell’immagine tramite CSS

È anche possibile controllare l’aspetto delle immagini con il CSS, specialmente se si vuole applicare lo stesso stile a più immagini:
```html
<img src="immagine.jpg" alt="Foto di un paesaggio marino" class="immagine-personalizzata">
```
E poi nel file CSS:
```css
.immagine-personalizzata {
    width: 50%;
    border: 2px solid black;
    border-radius: 8px;
}
```

Esempio Combinato: Collegare un’Immagine con <a> e <img>

È possibile inserire un’immagine all’interno di un link, in modo che l’immagine stessa diventi cliccabile. Ecco un esempio:
```html
<a href="https://www.esempio.com" target="_blank">
    <img src="immagine.jpg" alt="Vai al sito esempio.com" width="200">
</a>
```
In questo modo, l’immagine diventa un link e, cliccandola, si aprirà la pagina specificata.

La gestione di link e immagini in HTML è essenziale per migliorare la navigabilità e l’esperienza visiva di un sito web. Utilizzando correttamente i tag <a> e <img>, è possibile creare contenuti ricchi e interattivi, ottimizzati per la SEO e accessibili per tutti gli utenti. Ricorda di inserire descrizioni efficaci e testi alternativi alle immagini per favorire l’indicizzazione sui motori di ricerca e migliorare l’accessibilità. In definitiva, padroneggiare questi elementi HTML è un passo fondamentale per costruire pagine web ben strutturate, user-friendly e SEO-friendly, con contenuti che rispondano alle esigenze degli utenti e siano ottimizzati per i motori di ricerca.

Spero che ora tu abbia una visione completa di come utilizzare i tag <a> e <img> in HTML per creare collegamenti e inserire immagini nelle tue pagine web!

[Capitolo 5]({{ site.baseurl }}/formattazione-semantica/):"Formattazione Semantica"