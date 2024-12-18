---
layout: post
title: "Testo e formattazione"
author: teo
categories: guida_html
image: assets/images/
description: "Scopri i tag HTML per la formattazione del testo e la creazione di liste. Migliora la leggibilità e l'accessibilità dei tuoi contenuti web con tecniche di base e avanzate."
keywords: HTML, introduzione HTML, guida HTML, tag HTML, creare sito web, linguaggio HTML
Introduzione a HTML: Creare le Fondamenta del Web
hidden: true
---

Partiamo dalle basi e analizziamo con cura ogni tag per la formattazione del testo e le liste in HTML. Immagina che HTML sia come uno strumento per dare struttura al testo, mentre i tag di formattazione e liste servono per dare uno stile e una gerarchia visiva. Vediamo ogni tag nel dettaglio.

# Tag per la Formattazione del Testo:

```html
    <strong> e <b>
        <strong>: Utilizziamo questo tag per dare enfasi forte a una parola o frase, segnalandone l’importanza. Anche i lettori di schermo lo interpretano come un contenuto di maggior rilievo. Visivamente, appare in grassetto.
        <b>: Anche questo tag rende il testo in grassetto, ma è una scelta puramente visiva e non segnala un significato speciale per il contenuto. Lo usiamo solo per dare stile.
```
Esempio:

```html
<strong>Testo importante</strong>
<b>Testo in grassetto senza enfasi</b>
```
- `<em>` - `<i>`

- `<em>`: Sta per "emphasis" e indica un'enfasi leggera su una parola o frase. Di solito viene reso in corsivo e viene interpretato dai lettori di schermo per sottolineare il significato.

- `<i>`: Applica il corsivo ma non ha alcun significato semantico, quindi è solo per lo stile, senza enfasi.

Esempio:

```html
<em>Testo con enfasi leggera</em>
<i>Testo in corsivo senza enfasi</i>
```
- u

- `<u>`: Applica una sottolineatura al testo. È usato raramente oggi, ma può servire in casi specifici, per esempio quando si vuole evidenziare qualcosa senza usarlo per link o enfasi.


Esempio:

```html
<u>Testo sottolineato</u>
```

- `<small>`: Riduce la dimensione del testo. È comunemente usato per note a margine o commenti che devono risultare meno prominenti rispetto al testo principale.

Esempio:

```html
<small>Testo meno importante o nota</small>
```
- `<mark>`: Evidenzia il testo come se fosse passato con un evidenziatore, per mettere in risalto un contenuto specifico. Di solito viene reso con uno sfondo giallo o altro colore chiaro.

Esempio:

```html
    <mark>Testo evidenziato</mark>
```
### Liste in HTML

In **HTML**, abbiamo due tipi principali di liste: ordinate e non ordinate. Vediamole.

- Liste non ordinate (`<ul>`)

Una lista non ordinata usa un elenco puntato. Ogni elemento della lista è un punto separato, senza una sequenza numerica.

Tag utilizzati:
            
- `<ul>`: Racchiude l'intera lista non ordinata.
- `<li>`: Ogni elemento della lista è definito con questo tag.

Esempio:

```html
<ul>
    <li>Elemento uno</li>
    <li>Elemento due</li>
    <li>Elemento tre</li>
</ul>
```
Questo produrrà:

    Elemento uno
    Elemento due
    Elemento tre

- Liste ordinate (`<ol>`)

Una lista ordinata ha una sequenza numerica per ogni elemento, perfetta per elenchi che seguono un ordine logico o di importanza.

Tag utilizzati:
        `<ol>`: Racchiude l'intera lista ordinata.
        `<li>`: Definisce ogni elemento della lista.

Esempio:

```html
<ol>
    <li>Passo uno</li>
    <li>Passo due</li>
    <li>Passo tre</li>
</ol>
```
Questo produrrà:

    Passo uno
    Passo due
    Passo tre

- Liste nidificate

    È possibile inserire una lista all'interno di un'altra lista, creando così delle sotto-liste. Funziona sia con le liste ordinate che con quelle non ordinate.

Esempio:

```html 
<ul>
    <li>Frutta
        <ul>
            <li>Mela</li>
            <li>Banana</li>
        </ul>
    </li>
    <li>Verdura
        <ul>
            <li>Carota</li>
            <li>Spinaci</li>
        </ul>
    </li>
</ul>
```
Questo produrrà:

    Frutta
        Mela
        Banana
    Verdura
        Carota
        Spinaci

Ora vediamo un esempio completo di tutti i tag utilizzati in questo articolo e la sua relativa visualizzazione:

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <title>Testo e Formattazione</title>
</head>
<body>
    <header>
        <h1>Testo e Formattazione</h1>
        <p>Scopri i tag HTML per la formattazione del testo e la creazione di liste.</p>
    </header>
    <main>
        <section>
            <h2>Tag per la Formattazione del Testo</h2>
            <h3>Esempi:</h3>
            <p><strong>Testo importante</strong></p>
            <p><b>Testo in grassetto senza enfasi</b></p>
            <p><em>Testo con enfasi leggera</em></p>
            <p><i>Testo in corsivo senza enfasi</i></p>
            <p><u>Testo sottolineato</u></p>
            <p><small>Testo meno importante o nota</small></p>
            <p><mark>Testo evidenziato</mark></p>
        </section>
        <section>
            <h2>Liste in HTML</h2>
            <h3>Lista non ordinata:</h3>
            <ul>
                <li>Elemento uno</li>
                <li>Elemento due</li>
                <li>Elemento tre</li>
            </ul>
            <h3>Lista ordinata:</h3>
            <ol>
                <li>Passo uno</li>
                <li>Passo due</li>
                <li>Passo tre</li>
            </ol>
            <h3>Liste nidificate:</h3>
            <ul>
                <li>Frutta
                    <ul>
                        <li>Mela</li>
                        <li>Banana</li>
                    </ul>
                </li>
                <li>Verdura
                    <ul>
                        <li>Carota</li>
                        <li>Spinaci</li>
                    </ul>
                </li>
            </ul>
        </section>
</body>
</html>
```
Ed ecco come verrebbe visualizzato in qualsiasi browser:
![Esempio degli elementi per formattare il testo in html](/assets/images/guida_html/esempi/html_2.png)


### Conclusione
In questo articolo, abbiamo esplorato i principali tag per la formattazione del testo in HTML, come `<strong>`, `<em>`, `<b>`, e altri elementi fondamentali per rendere il contenuto web accessibile e visivamente strutturato. 

La conoscenza di queste basi permette di creare pagine web che non solo rispettano gli standard di leggibilità e accessibilità, ma che sono anche ottimizzate per i motori di ricerca. 

Implementando queste best practice, i tuoi contenuti saranno meglio interpretati dai crawler, migliorando così il posizionamento nei risultati di ricerca. Continua a sperimentare con i vari tag e a testare le tue pagine per ottenere il massimo dall'**HTML** e far risaltare i tuoi progetti web. 

[Capitolo 4]({{ site.baseurl }}/link-e-immagini/): "Link e Immagini"