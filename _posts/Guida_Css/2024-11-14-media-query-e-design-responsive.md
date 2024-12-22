---
layout: post
title: "Introduzione CSS: Media Query e Design Responsive"
author: Teo
categories: guida_CSS
image: assets/images/
featured: 
description: "Impara a creare design responsive con le media query CSS e le unità fluide. Adatta i tuoi progetti a ogni dispositivo."
keywords: CSS, introduzione CSS, guida CSS, creare sito web, linguaggio HTML
hidden: true
Introduzione a HTML: Creare le Fondamenta del Web
---

**Media Query e Design Responsive**

Il **design responsive** è un approccio alla progettazione web che mira a creare siti e applicazioni in grado di adattarsi automaticamente alle diverse dimensioni e orientamenti dello schermo su cui vengono visualizzati. Questo garantisce un'esperienza utente ottimale su una vasta gamma di dispositivi, dai piccoli schermi degli smartphone ai grandi monitor desktop.

---

### Concetti base di responsive design e unità di misura fluide (%, vw, vh)

Per realizzare un design responsive efficace, è fondamentale utilizzare **unità di misura fluide** che permettano agli elementi della pagina di adattarsi proporzionalmente allo spazio disponibile. Ecco le principali unità fluide utilizzate:

- **Percentuale (%)**: indica una proporzione rispetto all'elemento contenitore. Ad esempio, se si imposta la larghezza di un elemento al 50%, questo occuperà metà della larghezza del suo contenitore.

  ```css
  .contenitore {
    width: 100%; /* Occupa il 100% della larghezza disponibile */
  }
  ```

- **Viewport Width (vw)**: 1vw equivale all'1% della larghezza del viewport (l'area visibile della pagina). È utile per dimensionare elementi in base alla larghezza dello schermo.

  ```css
  .elemento {
    font-size: 2vw; /* La dimensione del testo varia con la larghezza dello schermo */
  }
  ```

- **Viewport Height (vh)**: 1vh equivale all'1% dell'altezza del viewport. Ideale per dimensionare elementi in funzione dell'altezza dello schermo.

  ```css
  .sezione {
    height: 100vh; /* L'altezza dell'elemento occupa il 100% dell'altezza del viewport */
  }
  ```

L'utilizzo di queste unità consente di creare layout flessibili che si adattano fluidamente alle dimensioni del dispositivo dell'utente, migliorando l'accessibilità e l'usabilità.

---

### Media query: @media, breakpoints per schermi piccoli, medi e grandi

Le **media query** sono una funzionalità di CSS3 che permette di applicare stili specifici in base a determinate condizioni, come la larghezza dello schermo, l'orientamento del dispositivo o la risoluzione.

La sintassi base di una media query è:

```css
@media (condizione) {
  /* Regole CSS applicate quando la condizione è vera */
}
```

**Breakpoints**: sono i punti di interruzione in cui il layout del sito cambia per adattarsi meglio alle dimensioni dello schermo. Generalmente, i breakpoints vengono definiti per tre categorie di dispositivi:

- **Schermi piccoli (mobile)**: dispositivi con larghezza massima di 767px.

  ```css
  @media (max-width: 767px) {
    /* Stili per smartphone */
  }
  ```

- **Schermi medi (tablet)**: dispositivi con larghezza compresa tra 768px e 1024px.

  ```css
  @media (min-width: 768px) and (max-width: 1024px) {
    /* Stili per tablet */
  }
  ```

- **Schermi grandi (desktop)**: dispositivi con larghezza minima di 1025px.

  ```css
  @media (min-width: 1025px) {
    /* Stili per desktop */
  }
  ```

**Esempio pratico**:

```css
/* Stili generali applicati a tutti i dispositivi */
.container {
  width: 100%;
  padding: 20px;
}

/* Stili specifici per dispositivi mobili */
@media (max-width: 767px) {
  .container {
    padding: 10px;
  }
}

/* Stili specifici per tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  .container {
    padding: 15px;
  }
}

/* Stili specifici per desktop */
@media (min-width: 1025px) {
  .container {
    padding: 30px;
  }
}
```

---

### Tecniche avanzate di responsive design con Flexbox e CSS Grid

Oltre alle unità fluide e alle media query, CSS offre potenti strumenti come **Flexbox** e **CSS Grid** per creare layout complessi e altamente responsivi.

#### Flexbox (Flexible Box Layout)

Flexbox è un sistema di layout unidimensionale che gestisce la distribuzione degli elementi lungo un asse (orizzontale o verticale). È ideale per creare layout flessibili che si adattano allo spazio disponibile.

**Caratteristiche principali:**

- **Allineamento flessibile**: controlla l'allineamento degli elementi sia sull'asse principale che su quello trasversale.
- **Distribuzione dello spazio**: gestisce gli spazi tra gli elementi in modo uniforme.
- **Riorganizzazione degli elementi**: modifica l'ordine di visualizzazione senza alterare l'ordine del codice HTML.

**Esempio di utilizzo:**

```css
.container {
  display: flex;
  flex-wrap: wrap; /* Permette agli elementi di andare a capo se necessario */
}

.item {
  flex: 1 1 200px; /* Crescita, restringimento, dimensione base */
  margin: 10px;
}
```

#### CSS Grid

CSS Grid è un sistema di layout bidimensionale che permette di gestire righe e colonne simultaneamente. È particolarmente utile per creare griglie complesse e layout articolati.

**Caratteristiche principali:**

- **Controllo preciso**: definisce la struttura della griglia con righe e colonne di dimensioni fisse o flessibili.
- **Posizionamento degli elementi**: posiziona gli elementi in specifiche aree della griglia.
- **Allineamento e spazio**: gestisce gli spazi interni ed esterni degli elementi con precisione.

**Esempio di utilizzo:**

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Colonne flessibili */
  grid-gap: 20px;
}

.grid-item {
  background-color: #f2f2f2;
  padding: 20px;
}
```

In questo esempio, la griglia crea automaticamente il numero di colonne necessario per riempire lo spazio disponibile, mantenendo una larghezza minima di 250px per ogni elemento.

---

### Combinazione di Media Query, Flexbox e CSS Grid

Per ottenere un design completamente responsive, è possibile combinare le media query con Flexbox e CSS Grid. Ad esempio, si può utilizzare CSS Grid per il layout su schermi grandi e passare a Flexbox o a un layout a singola colonna su schermi più piccoli.

**Esempio pratico:**

```css
/* Layout per schermi grandi */
@media (min-width: 1025px) {
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Layout per tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Layout per smartphone */
@media (max-width: 767px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
```

---

**Conclusione**

La progettazione di siti web responsive è essenziale per garantire accessibilità e usabilità su tutti i dispositivi. Comprendendo e applicando correttamente:

- Le **unità di misura fluide** (% , vw, vh) per creare layout adattivi.
- Le **media query** per applicare stili specifici in base alle dimensioni dello schermo.
- Le tecniche avanzate con **Flexbox** e **CSS Grid** per costruire layout flessibili e complessi.

Sarai in grado di sviluppare interfacce utente che offrano un'esperienza coerente e piacevole, indipendentemente dal dispositivo utilizzato dall'utente.

[Pseudo-classi e Pseudo-elementi]({{sitebase.url}}/pseudo-classi-e-pseudo-elementi/)