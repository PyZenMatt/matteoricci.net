---
layout: post
title: "Introduzione CSS:Selettori CSS"
author: Teo
categories: guida_CSS
image: assets/images/
featured: false
description: "Scopri i selettori CSS, da quelli di base a quelli avanzati, per creare stili precisi e personalizzati. Guida completa ed esempi inclusi."
keywords: CSS, introduzione CSS, guida CSS, creare sito web, linguaggio HTML
hidden: true
Introduzione a HTML: Creare le Fondamenta del Web
---
I selettori CSS sono uno strumento fondamentale per la definizione dello stile degli elementi HTML. Permettono di selezionare specifici elementi o gruppi di elementi all'interno di un documento per applicare loro proprietà di stile. Vediamo i principali tipi di selettori in modo dettagliato:

### 1. Selettori di Base
I selettori di base sono quelli più semplici e si utilizzano per selezionare elementi HTML in base al loro tipo, classe o ID.

- **Selettore di tipo**: seleziona tutti gli elementi di un certo tipo. Ad esempio, `h1 { color: blue; }` applicherà il colore blu a tutti gli elementi `<h1>`.
- **Selettore di classe**: inizia con un punto (`.`) e seleziona tutti gli elementi con una certa classe. Ad esempio, `.classe { font-size: 20px; }` applicherà un font di 20px a tutti gli elementi con `class="classe"`.
- **Selettore di ID**: inizia con un cancelletto (`#`) e seleziona un elemento specifico con un certo ID. Ad esempio, `#id { background-color: yellow; }` applicherà un colore di sfondo giallo all'elemento con `id="id"`.

### 2. Selettori Avanzati
I selettori avanzati permettono una selezione più specifica degli elementi, basandosi sulla loro relazione o stato.

- **Selettore discendente**: seleziona tutti gli elementi discendenti (figli, nipoti, ecc.) di un altro elemento. Ad esempio, `div p { color: red; }` applica il colore rosso a tutti i paragrafi `<p>` all'interno di un `<div>`.

- **Selettore figlio diretto**: seleziona solo gli elementi che sono figli diretti di un altro elemento. Usa il simbolo `>` per specificare questa relazione. Ad esempio, `ul > li { list-style-type: none; }` rimuove il tipo di lista solo per i `<li>` che sono figli diretti di `<ul>`.

- **Pseudo-classi**: si usano per selezionare elementi in uno stato specifico. Alcune tra le più comuni sono:
  - `:hover`: applica uno stile quando l'utente passa il cursore su un elemento, ad esempio `a:hover { color: green; }` cambierà il colore di un link in verde quando il cursore vi passa sopra.
  - `:first-child`: seleziona il primo figlio di un elemento. Ad esempio, `p:first-child { margin-top: 0; }` applicherà un margine superiore pari a zero solo al primo paragrafo.
  - `:nth-child(n)`: permette di selezionare il figlio n-esimo di un elemento o di una combinazione di figli (es. tutti quelli pari o dispari). Ad esempio, `tr:nth-child(odd) { background-color: #f2f2f2; }` colorerà di grigio chiaro tutte le righe dispari di una tabella.

- **Pseudo-elementi**: consentono di selezionare una parte specifica di un elemento, come il contenuto iniziale o finale. Gli pseudo-elementi più comuni sono:
  - `::before` e `::after`: permettono di aggiungere contenuto prima o dopo l'elemento selezionato. Ad esempio:
    ```css
    p::before {
      content: "Intro: ";
      font-weight: bold;
    }
    ```
    Questo aggiungerà la parola "Intro:" prima di ogni paragrafo `<p>` con stile grassetto.
  - `::first-line` e `::first-letter`: permettono di applicare stili rispettivamente alla prima linea o alla prima lettera di un elemento. Ad esempio, `p::first-line { font-weight: bold; }` renderà in grassetto solo la prima riga del paragrafo.

### 3. Selettori Combinati e Selettori di Attributo
- **Selettori combinati**: combinano più selettori per rendere la selezione più precisa.
  - `Selettore combinato di classe`: unisce più classi per selezionare elementi che soddisfano tutte le classi indicate. Ad esempio, `.classe1.classe2` selezionerà solo gli elementi che hanno entrambe le classi `classe1` e `classe2`.
  - `Selettore combinato di tipo e classe`: permette di selezionare un certo tipo di elemento con una classe specifica. Ad esempio, `p.classe` seleziona tutti i paragrafi `<p>` che hanno la classe `classe`.

- **Selettori di attributo**: consentono di selezionare elementi in base a uno specifico attributo o al suo valore. Alcuni esempi:
  - `[type="text"] { font-size: 16px; }` applica un font di 16px a tutti gli elementi con l’attributo `type="text"`.
  - `[href^="https"]` seleziona tutti i link (`<a>`) il cui attributo `href` inizia con "https".
  - `[href$=".pdf"]` seleziona tutti i link (`<a>`) che puntano a file con estensione ".pdf".
  - `[class*="btn-"]` seleziona tutti gli elementi con una classe che contiene "btn-".

### Esempio Completo
```css
/* Selettori di base */
h1 { color: navy; }
.button { padding: 10px; }
#main-title { font-size: 24px; }

/* Selettori avanzati */
ul li { color: red; }         /* Selettore discendente */
ul > li { color: green; }     /* Selettore figlio diretto */
a:hover { text-decoration: underline; }   /* Pseudo-classe */
p::before { content: "Intro: "; font-weight: bold; }  /* Pseudo-elemento */

/* Selettori combinati e attributi */
.button.btn-primary { background-color: blue; } /* Combinazione di classi */
input[type="text"] { border: 1px solid black; } /* Selettore di attributo */
```

Questa guida ti dà una panoramica sui principali selettori CSS e come combinarli per avere un controllo dettagliato sullo stile degli elementi della tua pagina web.

[Box Model]({{sitebase.url}}/box-model/)
