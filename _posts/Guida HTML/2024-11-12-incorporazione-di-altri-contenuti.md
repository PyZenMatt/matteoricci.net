---
layout: post
title: "incorporazione di contenuti esterni"
author: Teo
categories: guida_html
image: assets/images/
featured: 
description: "Arricchisci le tue pagine HTML con mappe, video e contenuti interattivi. Scopri come usare iframe per integrare risorse esterne."
hidden: true
---
L’incorporazione di contenuti esterni come mappe o video nelle tue pagine HTML è utile per arricchire l’esperienza dell’utente, aggiungendo funzionalità interattive e contenuti multimediali. Un modo comune per farlo è utilizzare il tag HTML `<iframe>`. Vediamo nel dettaglio come funziona.

### Cosa è `<iframe>`?
Il tag `<iframe>` (inline frame) consente di integrare contenuti di una pagina esterna all'interno della tua pagina web. Questo può includere video, mappe, o persino un'intera pagina web.

### Struttura base di `<iframe>`

Ecco un esempio base di come utilizzare `<iframe>`:

```html
<iframe src="URL_del_contenuto" width="larghezza" height="altezza" title="descrizione del contenuto"></iframe>
```
I principali attributi sono:
- **src**: indica l'URL della risorsa esterna che desideri incorporare.
- **width** e **height**: specificano la larghezza e l'altezza dell'iframe in pixel.
- **title**: descrive il contenuto e migliora l’accessibilità della pagina.

### Esempi di utilizzo

1. **Incorporare un video di YouTube**:

   ```html
   <iframe width="560" height="315" src="https://www.youtube.com/embed/ID_VIDEO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   ```
   - `src`: sostituisci `ID_VIDEO` con l’ID del video di YouTube.
   - `allowfullscreen`: consente all'utente di espandere il video a schermo intero.
   ```

2. **Incorporare una mappa di Google Maps**:

   ```html
   <iframe src="https://www.google.com/maps/embed?pb=ID_MAPPA" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   ```
   - `src`: `ID_MAPPA` è il codice generato da Google Maps.
   - `loading="lazy"`: consente il caricamento ritardato, utile per ottimizzare i tempi di caricamento della pagina.

### Attributi Opzionali Utili

- **frameborder**: controlla se visualizzare il bordo attorno all’iframe (spesso impostato su `0` per nasconderlo).
- **allow**: definisce le autorizzazioni per i contenuti incorporati, ad esempio, `allow="autoplay"` per consentire l’avvio automatico dei video.
- **loading**: utilizza `"lazy"` per posticipare il caricamento dell’iframe, migliorando le prestazioni.
- **sandbox**: limita le azioni eseguibili all'interno dell’iframe per ragioni di sicurezza, con valori come `allow-scripts` o `allow-same-origin`.

### Cose a cui prestare attenzione
1. **Sicurezza**: incorporare contenuti esterni può esporre il tuo sito a rischi. Usa l’attributo `sandbox` per limitare le operazioni che possono essere eseguite dall’iframe.
2. **Responsività**: usa CSS per rendere gli iframe adattabili a schermi di diverse dimensioni.
3. **Cambiamenti della sorgente esterna**: la risorsa incorporata è controllata da un sito esterno e potrebbe subire modifiche o essere rimossa senza preavviso.

L'utilizzo di `<iframe>` è versatile ma richiede attenzione a sicurezza e performance, soprattutto quando si incorporano contenuti multimediali o esterni.

[Capitolo 11]({{ site.baseurl }}/accessibilita/): "Accessibilità"