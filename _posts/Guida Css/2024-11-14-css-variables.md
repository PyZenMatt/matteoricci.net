---
layout: post
title: "Introduzione CSS: Variables"
author: Teo
categories: guida_CSS
image: assets/images/
featured: 
description: "Scopri come le variabili CSS semplificano la gestione degli stili e migliorano la coerenza del design nei tuoi progetti web"
keywords: CSS, introduzione CSS, guida CSS, creare sito web, linguaggio HTML
hidden: true
Introduzione a HTML: Creare le Fondamenta del Web
---

Le variabili CSS (note anche come **proprietà personalizzate CSS**) sono una potente funzionalità introdotta nel CSS che consente di definire valori riutilizzabili per proprietà CSS all'interno del foglio di stile. Questa funzionalità semplifica la gestione dei colori, delle dimensioni, dei margini e di altre proprietà, rendendo il codice più leggibile, mantenibile e modulare. Vediamo nel dettaglio come funzionano e come possono essere utilizzate:

### 1. Cos’è una variabile CSS?

Una variabile CSS è un nome che rappresenta un valore specifico, e può essere richiamata più volte all'interno del foglio di stile. Ad esempio, puoi definire una variabile per il colore principale di un sito e utilizzarla ogni volta che quel colore è necessario, senza dover ripetere il valore specifico.

### 2. Creazione di una variabile CSS

Le variabili CSS sono dichiarate con il prefisso `--` seguito dal nome della variabile. La sintassi di base è:

```css
:root {
    --nome-var: valore;
}
```

Ecco un esempio pratico:

```css
:root {
    --primary-color: #3498db;
    --font-size-large: 1.5rem;
    --padding-medium: 20px;
}
```

In questo esempio:

```css
- `--primary-color` è una variabile che contiene un valore di colore esadecimale (`#3498db`).
- `--font-size-large` rappresenta una dimensione del font (`1.5rem`).
- `--padding-medium` rappresenta un valore di padding (`20px`).
```

La **pseudo-classe** `:root` viene spesso utilizzata per dichiarare le variabili CSS globali, applicandole all'intero documento. Tuttavia, le variabili possono essere dichiarate anche in altri selettori per applicazioni più specifiche (come componenti, sezioni, ecc.).

### 3. Utilizzo delle variabili CSS con `var()`

Per utilizzare una variabile CSS, si richiama il suo nome all'interno della funzione `var()`, specificando il nome della variabile:

```css
.elemento {
    color: var(--primary-color);
    font-size: var(--font-size-large);
    padding: var(--padding-medium);
}
```

Questo codice applicherà all’elemento selezionato il colore `#3498db`, una dimensione del testo di `1.5rem` e un padding di `20px`, riprendendo i valori definiti precedentemente.

### 4. Vantaggi dell’uso delle variabili CSS

- **Manutenzione del Codice**: Cambiare il valore di una variabile (ad esempio `--primary-color`) rifletterà il cambiamento su tutto il sito dove quella variabile è utilizzata, senza la necessità di modificare ogni singola occorrenza.
- **Riutilizzo e Consistenza**: È possibile usare lo stesso valore in più proprietà e classi, migliorando la coerenza del design.
- **Temi**: Con le variabili CSS, puoi facilmente cambiare i temi del sito, come un tema chiaro e uno scuro, sovrascrivendo semplicemente le variabili.
  
### 5. Uso di valori di fallback con `var()`

La funzione `var()` consente anche di specificare un valore di fallback. Questo è utile per supportare browser meno recenti che potrebbero non riconoscere la variabile. La sintassi è:

```css
color: var(--primary-color, #333);
```

In questo caso, se `--primary-color` non è definito o non è supportato, il colore verrà impostato su `#333` come valore di fallback.

### 6. Scope delle variabili

Le variabili CSS sono **scoped**, il che significa che sono disponibili solo all'interno dell'elemento in cui sono definite e degli elementi discendenti. Definendole nel `:root`, si rende la variabile disponibile globalmente. Tuttavia, è possibile ridefinire una variabile in un contesto più specifico, per esempio:

```css
:root {
    --primary-color: #3498db;
}

.section-dark {
    --primary-color: #2c3e50;
}
```

In questo esempio, tutti gli elementi all'interno di `.section-dark` utilizzeranno `#2c3e50` come `--primary-color`, mentre il resto del documento userà `#3498db`.

### 7. Esempio pratico completo

Immagina di voler cambiare il tema del sito tra modalità chiara e scura. Utilizzando variabili CSS, il codice potrebbe essere simile a questo:

```css
:root {
    --background-color: #ffffff;
    --text-color: #333333;
}

.dark-theme {
    --background-color: #333333;
    --text-color: #ffffff;
}

body {
    background-color: var(--background-color);
    color: var(--text-color);
}
```

Aggiungendo la classe `dark-theme` al `body`, il sito adotterà i colori scuri definiti. Questo approccio semplifica notevolmente l'implementazione dei temi, riducendo il bisogno di CSS duplicato.

### 8. Compatibilità dei browser

Le variabili CSS sono supportate dalla maggior parte dei browser moderni, ma è importante verificare la compatibilità per garantire un'esperienza coerente su tutti i dispositivi.

### Conclusioni

Le variabili CSS sono uno strumento fondamentale per i web designer e sviluppatori moderni, in quanto migliorano la flessibilità, la coerenza e la manutenibilità del codice CSS.

[Framework CSS (Introduzione)]({{sitebase.url}}/framework-css/)