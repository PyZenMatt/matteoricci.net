---
layout: post
title: Manipolazione del DOM in JavaScript
author: Teo
categories: guida_js
image: assets/images/
featured: 
description: "Impara a manipolare il DOM con JavaScript per creare pagine web interattive: selezione degli elementi, eventi e migliori pratiche."
hidden: true
Introduzione a HTML: Creare le Fondamenta del Web
---

La manipolazione del DOM è uno dei concetti fondamentali di JavaScript. È essenziale per ogni sviluppatore web che desideri creare esperienze utente dinamiche e interattive. In questa guida, esploreremo in dettaglio cos'è il DOM, come manipolarlo con JavaScript e le migliori pratiche per sfruttarne appieno le potenzialità.

---

### Cos'è il DOM?

Il **DOM (Document Object Model)** è una rappresentazione strutturata di un documento HTML o XML. Quando una pagina web viene caricata, il browser crea un modello ad albero del documento, dove ogni elemento HTML diventa un nodo. Questo modello è dinamico, il che significa che può essere manipolato attraverso il linguaggio JavaScript per aggiornare i contenuti e gli stili della pagina senza ricaricarla.

#### Struttura del DOM

Un documento HTML come questo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Esempio DOM</title>
  </head>
  <body>
    <h1>Benvenuto nel DOM</h1>
    <p id="paragrafo">Questo è un paragrafo.</p>
    <button id="btn">Clicca qui</button>
  </body>
</html>
```

Sarà rappresentato nel DOM come un albero:

```
html
 ├── head
 │    └── title
 └── body
      ├── h1
      ├── p
      └── button
```

---

### Perché Manipolare il DOM?

La manipolazione del DOM consente di:
- Cambiare dinamicamente i contenuti di una pagina.
- Aggiungere o rimuovere elementi HTML.
- Applicare nuovi stili o modificare quelli esistenti.
- Rispondere agli eventi utente (clic, hover, ecc.).
- Creare esperienze interattive senza ricaricare la pagina.

---

### Come Manipolare il DOM con JavaScript

#### Selezione degli Elementi

Per interagire con il DOM, il primo passo è **selezionare gli elementi**. JavaScript fornisce diversi metodi per farlo:

1. **`getElementById`**
   Seleziona un elemento in base al suo ID:
   ```javascript
   const paragrafo = document.getElementById('paragrafo');
   console.log(paragrafo); // <p id="paragrafo">Questo è un paragrafo.</p>
   ```

2. **`querySelector` e `querySelectorAll`**
   Seleziona elementi usando selettori CSS:
   ```javascript
   const bottone = document.querySelector('#btn'); // Seleziona il bottone con ID "btn".
   const paragrafi = document.querySelectorAll('p'); // Seleziona tutti i paragrafi.
   ```

3. **`getElementsByClassName` e `getElementsByTagName`**
   Seleziona elementi per classe o tag:
   ```javascript
   const paragrafiClasse = document.getElementsByClassName('classe-paragrafo');
   const titoli = document.getElementsByTagName('h1');
   ```

---

#### Modifica dei Contenuti

Una volta selezionato un elemento, puoi modificarne il contenuto con la proprietà `innerHTML` o `textContent`.

- **`innerHTML`**: Modifica il contenuto HTML interno:
  ```javascript
  paragrafo.innerHTML = 'Testo aggiornato con <strong>HTML</strong>.';
  ```

- **`textContent`**: Modifica solo il testo, ignorando eventuali tag HTML:
  ```javascript
  paragrafo.textContent = 'Testo aggiornato senza HTML.';
  ```

---

#### Modifica degli Stili

La proprietà `style` consente di cambiare gli stili di un elemento direttamente tramite JavaScript.

```javascript
paragrafo.style.color = 'blue';
paragrafo.style.fontSize = '20px';
```

Per modifiche più complesse, si consiglia di aggiungere o rimuovere classi con `classList`:

```javascript
paragrafo.classList.add('nuova-classe');
paragrafo.classList.remove('vecchia-classe');
```

---

#### Aggiunta e Rimozione di Elementi

Puoi aggiungere nuovi elementi al DOM con i metodi `createElement` e `appendChild`:

```javascript
const nuovoElemento = document.createElement('div');
nuovoElemento.textContent = 'Sono un nuovo elemento!';
document.body.appendChild(nuovoElemento);
```

Per rimuovere un elemento, usa `remove`:

```javascript
paragrafo.remove();
```

---

#### Gestione degli Eventi

La manipolazione del DOM diventa potente quando si combinano gli eventi. Ad esempio, puoi rispondere al clic di un bottone:

```javascript
const bottone = document.getElementById('btn');
bottone.addEventListener('click', () => {
  alert('Bottone cliccato!');
});
```

---

### Migliori Pratiche per la Manipolazione del DOM

1. **Minimizza le modifiche dirette al DOM:** Ogni modifica al DOM può causare un reflow o repaint, che impatta sulle prestazioni.
2. **Usa `documentFragment` per operazioni multiple:** Per aggiungere molti elementi, crea un frammento di documento per ridurre il numero di operazioni dirette sul DOM.
   ```javascript
   const fragment = document.createDocumentFragment();
   for (let i = 0; i < 5; i++) {
     const nuovoParagrafo = document.createElement('p');
     nuovoParagrafo.textContent = `Paragrafo ${i + 1}`;
     fragment.appendChild(nuovoParagrafo);
   }
   document.body.appendChild(fragment);
   ```
3. **Separa logica e presentazione:** Evita di scrivere codice che mescola troppo stili e logica.

---

### Conclusione

La manipolazione del DOM è al cuore dello sviluppo web interattivo. Da semplici modifiche ai contenuti a complessi aggiornamenti dinamici, JavaScript offre gli strumenti per lavorare in modo efficiente con il DOM. Seguendo le best practice, puoi garantire prestazioni elevate e codice pulito.

Se hai trovato utile questa guida, condividila con altri sviluppatori e inizia subito a esplorare le potenzialità del DOM nella tua prossima applicazione web!

[Eventi e interattività.]({{ site.baseurl }}/eventi-e-interattivita/)