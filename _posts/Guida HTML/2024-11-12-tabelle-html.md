---
layout: post
title: "Tabelle HTML"
author: sal
categories: guida_html
image: assets/images/
featured: 
description: "Crea e struttura dati in HTML con tabelle. Impara a usare <table>, <thead>, <tbody> e altri tag per una presentazione chiara e professionale."
keywords: HTML, introduzione HTML, guida HTML, tag HTML, creare sito web, linguaggio HTML
Introduzione a HTML: Creare le Fondamenta del Web
hidden: true
---

In HTML, le tabelle sono create usando una struttura specifica di tag che organizzano dati in righe e colonne. Ecco una guida dettagliata su come funzionano i vari elementi per costruire una tabella:

### Tag di base per le Tabelle HTML

1. **`<table>`**: Questo tag definisce l'inizio e la fine della tabella. Tutti gli altri tag per la struttura della tabella devono essere inseriti all'interno di `<table>`.

   ```html
   <table>
       <!-- contenuto della tabella -->
   </table>
   ```

2. **`<tr>` (Table Row)**: Rappresenta una riga della tabella. Ogni riga può contenere più celle, sia di intestazione (`<th>`) sia di dati (`<td>`).

   ```html
   <table>
       <tr>
           <!-- celle della riga -->
       </tr>
   </table>
   ```

3. **`<td>` (Table Data)**: Definisce una cella di dati all'interno della tabella. Ogni cella di dati è posizionata in una colonna specifica all'interno della riga.

   ```html
   <table>
       <tr>
           <td>Data 1</td>
           <td>Data 2</td>
       </tr>
   </table>
   ```

4. **`<th>` (Table Header)**: Definisce una cella di intestazione della tabella. Di solito viene usata per le intestazioni delle colonne, ma può essere usata anche per le righe. I contenuti delle celle `<th>` sono mostrati in grassetto e centrati per impostazione predefinita.

   ```html
   <table>
       <tr>
           <th>Intestazione 1</th>
           <th>Intestazione 2</th>
       </tr>
   </table>
   ```

### Strutturare una Tabella con le Sezioni

Per rendere la struttura della tabella più chiara e facilitare la lettura, HTML permette di organizzare le tabelle in tre sezioni principali:

1. **`<thead>` (Table Head)**: Contiene le righe di intestazione della tabella (spesso `<th>`). Solitamente include una sola riga che descrive le colonne della tabella.

   ```html
   <table>
       <thead>
           <tr>
               <th>Intestazione 1</th>
               <th>Intestazione 2</th>
           </tr>
       </thead>
   </table>
   ```

2. **`<tbody>` (Table Body)**: Contiene le righe di dati principali della tabella. È la sezione centrale della tabella, e può avere molte righe `<tr>` con celle `<td>`.

   ```html
   <table>
       <thead>
           <tr>
               <th>Intestazione 1</th>
               <th>Intestazione 2</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>Dati 1</td>
               <td>Dati 2</td>
           </tr>
           <tr>
               <td>Dati 3</td>
               <td>Dati 4</td>
           </tr>
       </tbody>
   </table>
   ```

3. **`<tfoot>` (Table Footer)**: Di solito contiene i riepiloghi o le note finali della tabella, posizionandosi alla fine della tabella.

   ```html
   <table>
       <thead>
           <tr>
               <th>Intestazione 1</th>
               <th>Intestazione 2</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>Dati 1</td>
               <td>Dati 2</td>
           </tr>
       </tbody>
       <tfoot>
           <tr>
               <td>Totale</td>
               <td>100</td>
           </tr>
       </tfoot>
   </table>
   ```

### Esempio Completo di Tabella HTML

Ecco un esempio completo di una tabella che contiene tutte le sezioni principali:

```html
<table>
   <thead>
       <tr>
           <th>Nome</th>
           <th>Cognome</th>
           <th>Età</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td>Mario</td>
           <td>Rossi</td>
           <td>30</td>
       </tr>
       <tr>
           <td>Luigi</td>
           <td>Bianchi</td>
           <td>25</td>
       </tr>
   </tbody>
   <tfoot>
       <tr>
           <td colspan="2">Media Età</td>
           <td>27.5</td>
       </tr>
   </tfoot>
</table>
```

In questo esempio:
- `<thead>` contiene la riga di intestazione con le etichette delle colonne.
- `<tbody>` contiene le righe con i dati dei singoli individui.
- `<tfoot>` contiene una riga di riepilogo che calcola la media dell’età.

### Attributi Aggiuntivi

- **`colspan`**: Questo attributo permette di unire celle orizzontalmente. Ad esempio, `<td colspan="2">` permette a una cella di occupare due colonne.
- **`rowspan`**: Simile a `colspan`, questo attributo permette a una cella di espandersi verticalmente su più righe.



Con questi elementi, puoi creare una tabella ben organizzata e facile da leggere, utile per presentare dati in modo chiaro e ordinato sul web.

[Capitolo 7]({{ site.baseurl }}/form-html/): "I form in HTML"