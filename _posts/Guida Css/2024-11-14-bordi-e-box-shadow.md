---
layout: post
title: "Introduzione CSS: Bordi e Box Shadow"
author: Teo
categories: guida_CSS
image: assets/images/
featured: 
description: "Guida CSS Completa: Impara le Basi per Creare Pagine Web Moderne e Responsive"
keywords: CSS, introduzione CSS, guida CSS, creare sito web, linguaggio HTML
hidden: true
---

In CSS, lo stile dei bordi e delle ombre è utilizzato per rendere i contenuti visivamente più accattivanti e per dare profondità o risalto agli elementi. Ecco una spiegazione dettagliata delle proprietà coinvolte.

### 1. Stile del Bordo
Le proprietà CSS relative al bordo consentono di definire la larghezza, il colore, lo stile e il raggio dei bordi degli elementi.

#### `border`
La proprietà `border` è una scorciatoia per definire larghezza, stile e colore del bordo in una sola dichiarazione. Si utilizza così:

```css
border: 2px solid #333;
```

In questo caso:
- `2px` rappresenta la larghezza del bordo.
- `solid` indica lo stile del bordo.
- `#333` è il colore del bordo.

##### Esempi di stili di bordo (`border-style`)
- `solid`: un bordo pieno e continuo.
- `dotted`: un bordo a punti.
- `dashed`: un bordo a tratteggio.
- `double`: un bordo doppio.
- `none`: nessun bordo.

#### `border-radius`
`border-radius` definisce l’arrotondamento degli angoli di un elemento, permettendo di creare effetti visivi come bordi arrotondati o cerchi perfetti. Si può applicare in diversi modi:

- **Valore singolo**: `border-radius: 10px;` – arrotonda tutti gli angoli con un raggio di 10px.
- **Valori separati per ogni angolo**: `border-radius: 10px 20px 30px 40px;` – arrotonda ogni angolo con valori differenti (rispettivamente in senso orario: angolo in alto a sinistra, in alto a destra, in basso a destra, in basso a sinistra).

##### Esempi
- Per creare un cerchio: imposta `border-radius` al 50% su un elemento quadrato.

```css
border-radius: 50%;
```

#### `border-color`
`border-color` specifica il colore del bordo e supporta colori definiti con nomi (`red`), esadecimali (`#ff0000`), RGB (`rgb(255, 0, 0)`) o altre notazioni. Se combinato con `border-style` e `border-width`, si può creare un bordo ben definito attorno all’elemento.

```css
border-color: #ff0000;
```

#### `border-style`
`border-style` definisce il tipo di bordo (continuo, tratteggiato, puntinato, ecc.) e va sempre specificato per rendere visibile il bordo.

```css
border-style: dashed;
```

### 2. Ombre
Le ombre migliorano la profondità visiva e la leggibilità degli elementi. In CSS, abbiamo `box-shadow` per le ombre degli elementi e `text-shadow` per il testo.

#### `box-shadow`
Questa proprietà permette di creare un’ombra attorno agli elementi, definendo offset orizzontale e verticale, sfocatura, estensione e colore.

```css
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
```

Dove:
- `5px`: offset orizzontale (positivo verso destra, negativo verso sinistra).
- `5px`: offset verticale (positivo verso il basso, negativo verso l’alto).
- `10px`: raggio di sfocatura dell’ombra (più è alto, più è sfocata).
- `rgba(0, 0, 0, 0.5)`: colore dell’ombra con trasparenza.

##### Opzioni Aggiuntive
- **Valore di estensione (spread radius)**: specifica quanto l'ombra si estende oltre i bordi dell'elemento. Ad esempio:

```css
box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.3);
```

##### Ombre Multiple
Puoi creare più ombre per un singolo elemento separandole con una virgola.

```css
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5), -5px -5px 5px rgba(255, 0, 0, 0.5);
```

#### `text-shadow`
`text-shadow` applica un’ombra al testo, migliorando la leggibilità o creando effetti visivi accattivanti.

```css
text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
```

Dove:
- `2px`: offset orizzontale.
- `2px`: offset verticale.
- `5px`: raggio di sfocatura.
- `rgba(0, 0, 0, 0.5)`: colore dell’ombra.

### Esempio Completo
Combinando tutte queste proprietà, puoi creare un elemento stilizzato:

```css
.elemento {
  border: 2px solid #333;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  color: #333;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}
```

### Riassunto
- **Bordi**: usa `border`, `border-radius`, `border-color` e `border-style` per gestire spessore, colore, stile e arrotondamento del bordo.
- **Ombre**: usa `box-shadow` per creare ombre intorno agli elementi e `text-shadow` per aggiungere ombre al testo, dando profondità e risalto visivo. 

Questi strumenti ti permettono di creare effetti visivi che migliorano l'estetica e la leggibilità dei contenuti CSS.