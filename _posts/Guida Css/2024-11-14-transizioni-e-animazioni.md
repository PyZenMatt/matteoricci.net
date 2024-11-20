---
layout: post
title: "Introduzione CSS: Transazione e animazione"
author: Teo
categories: guida_CSS
image: assets/images/
featured: 
description: "Esplora transizioni e animazioni CSS per creare interazioni dinamiche e fluide. Guida con esempi pratici per ogni esigenza."
keywords: CSS, introduzione CSS, guida CSS, creare sito web, linguaggio HTML
hidden: true
Introduzione a HTML: Creare le Fondamenta del Web
---

CSS offre potenti strumenti per animare gli elementi di una pagina web, rendendo le interazioni utente più fluide e dinamiche. Le transizioni e le animazioni CSS permettono di applicare effetti di cambiamento agli elementi e di controllarne il flusso, il ritmo e la durata.

### 1. Transizioni CSS
Le transizioni CSS sono usate per creare cambiamenti graduali in una o più proprietà di stile di un elemento, in risposta a un evento (come il passaggio del mouse). Sono facili da implementare e richiedono pochi parametri per funzionare.

- **`transition-property`**: Specifica la proprietà CSS su cui applicare la transizione. Ad esempio, `transition-property: width;` animerebbe solo la larghezza dell'elemento quando cambia.
- **`transition-duration`**: Indica la durata della transizione. Può essere impostato in secondi (s) o millisecondi (ms), ad esempio `transition-duration: 0.5s;` crea una transizione di mezzo secondo.
- **`transition-timing-function`**: Definisce il ritmo del cambiamento, cioè la velocità alla quale la proprietà cambia nel tempo. Alcuni valori comuni includono:
  - `ease` (veloce all’inizio e alla fine, più lento nel mezzo),
  - `linear` (cambio costante),
  - `ease-in` (lento all’inizio),
  - `ease-out` (lento alla fine),
  - `ease-in-out` (lento all’inizio e alla fine).
  
#### Esempio di transizione:
```css
button {
  background-color: blue;
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}
button:hover {
  background-color: green;
}
```
In questo esempio, al passaggio del mouse sul pulsante, il colore di sfondo cambia gradualmente da blu a verde in 0.3 secondi.

### 2. Animazioni CSS
Le animazioni CSS permettono cambiamenti più complessi e articolati rispetto alle transizioni, in quanto non sono vincolate a un singolo cambiamento di stato (come nel caso di un `hover`). Le animazioni possono essere cicliche, direzionali e coinvolgere più stati. Si definiscono tramite una combinazione di `@keyframes` e varie proprietà `animation`.

- **`@keyframes`**: È la regola che definisce i fotogrammi chiave dell’animazione. Ogni keyframe rappresenta un punto nel tempo dove l’elemento assume un particolare stato di stile.
- **`animation-name`**: Specifica il nome dell’animazione che l’elemento deve eseguire. Questo nome deve corrispondere a una regola `@keyframes`.
- **`animation-duration`**: Indica la durata dell'animazione completa, espressa in secondi o millisecondi.
- **`animation-iteration-count`**: Definisce il numero di volte che l’animazione deve essere ripetuta. Può essere un numero intero o `infinite` per un ciclo continuo.
- **`animation-direction`**: Determina la direzione dell'animazione. I valori principali sono:
  - `normal`: esegue l’animazione normalmente (da inizio a fine),
  - `reverse`: esegue l’animazione in senso inverso,
  - `alternate`: alterna tra normale e inverso ad ogni iterazione,
  - `alternate-reverse`: alterna tra inverso e normale.

#### Esempio di animazione:
```css
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
.elemento {
  animation-name: slideIn;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-direction: normal;
}
```
In questo esempio, l’elemento si sposterà da sinistra verso destra, scorrendo dall'esterno al suo punto iniziale, in un secondo. L'animazione avviene una sola volta (`animation-iteration-count: 1`), senza ripetersi.

### Uso combinato di transizioni e animazioni
Le transizioni sono ottime per effetti semplici come il cambiamento di colore o di dimensioni al passaggio del mouse, mentre le animazioni sono più versatili per effetti continui e ciclici. Entrambe possono migliorare notevolmente l'interattività e la percezione visiva di una pagina, se usate con equilibrio.