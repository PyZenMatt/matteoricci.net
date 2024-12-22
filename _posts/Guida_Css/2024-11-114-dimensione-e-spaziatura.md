---
layout: post
title: "Introduzione CSS: Dimensione e spaziatura"
author: Teo
categories: guida_CSS
image: assets/images/
featured: 
description: "Scopri come gestire dimensioni e spaziature in CSS per creare layout puliti e responsive. Una guida passo passo per principianti e non."
keywords: CSS, introduzione CSS, guida CSS, creare sito web, linguaggio HTML
hidden: true
Introduzione a HTML: Creare le Fondamenta del Web
---
---

### Tecniche di Layout Tradizionali

1. **Display**:
    - **inline**: Elementi inline occupano solo lo spazio necessario per il loro contenuto e non interrompono il flusso della pagina. Esempi comuni sono `<span>`, `<a>`, e `<img>`.
    - **block**: Elementi block occupano tutta la larghezza del contenitore in cui si trovano e generano un’interruzione di linea. Esempi sono `<div>`, `<p>`, e `<h1>`.
    - **inline-block**: È una combinazione dei primi due. Gli elementi inline-block occupano solo lo spazio necessario come quelli inline, ma rispettano alcune proprietà come larghezza e altezza.

2. **Position**:
    - **static**: È la posizione predefinita. L'elemento viene posizionato secondo il normale flusso della pagina senza modifiche di posizione.
    - **relative**: Permette di spostare l'elemento rispetto alla sua posizione originale utilizzando le proprietà `top`, `right`, `bottom`, `left`. Questo movimento non influisce sugli elementi circostanti.
    - **absolute**: Posiziona l'elemento rispetto al primo antenato con posizione diversa da `static`, rimuovendolo dal normale flusso del documento.
    - **fixed**: L'elemento è fissato rispetto alla finestra del browser, non si sposta durante lo scorrimento della pagina.
    - **sticky**: È una combinazione tra `relative` e `fixed`; l'elemento scorre finché non raggiunge una posizione specifica nella pagina, dove si fissa temporaneamente.

---

### Flexbox

Flexbox (Flexible Box Layout) è pensato per la creazione di layout più flessibili e allineamenti dinamici. Ecco i concetti fondamentali:

1. **display: flex**: Attiva Flexbox sul contenitore principale, trasformandolo in un "contenitore flex" e i suoi elementi interni in "item flex".

2. **justify-content**: Allinea gli elementi lungo l'asse principale (orizzontale per impostazione predefinita).
    - `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

3. **align-items**: Allinea gli elementi lungo l'asse trasversale (verticale per impostazione predefinita).
    - `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.

4. **flex-direction**: Definisce la direzione dell'asse principale.
    - `row`: da sinistra a destra.
    - `row-reverse`: da destra a sinistra.
    - `column`: dall’alto verso il basso.
    - `column-reverse`: dal basso verso l’alto.

5. **flex-wrap**: Controlla se gli elementi flex devono andare a capo quando lo spazio non è sufficiente.
    - `nowrap`: Gli elementi rimangono su una sola riga.
    - `wrap`: Gli elementi vanno a capo su più righe.
    - `wrap-reverse`: Gli elementi vanno a capo, ma in ordine inverso.

6. **align-self**: Consente di sovrascrivere l’allineamento di un singolo elemento flex rispetto all’asse trasversale (verticale di default).

---

### CSS Grid

CSS Grid è un potente sistema di layout bidimensionale che consente di organizzare gli elementi sia orizzontalmente che verticalmente, offrendo un controllo granulare.

1. **grid-template-columns**: Specifica la struttura delle colonne della griglia. Si può usare una lista di valori di lunghezza (es. `200px 1fr 2fr`) o un valore ripetuto (es. `repeat(3, 1fr)`), dove `1fr` rappresenta una frazione dello spazio disponibile.

2. **grid-template-rows**: Analogamente a `grid-template-columns`, definisce l'altezza delle righe della griglia.

3. **grid-gap**: Definisce lo spazio tra le colonne e le righe della griglia. È possibile utilizzare `column-gap` e `row-gap` per controllare singolarmente lo spazio tra colonne e righe.

4. **grid-area**: Questa proprietà consente di assegnare uno o più elementi della griglia a specifiche aree definite. Ad esempio:
   ```css
   grid-template-areas:
     "header header header"
     "sidebar main main"
     "footer footer footer";
   ```

---

Questi strumenti combinati permettono di creare layout molto complessi, rispondendo in modo flessibile alle diverse risoluzioni dei dispositivi.

[Stile dei Bordo e Box Shadow]({{sitebase.url}}/bordi-e-box-shadow/)