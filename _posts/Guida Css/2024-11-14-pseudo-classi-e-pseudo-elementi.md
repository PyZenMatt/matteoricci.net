---
layout: post
title: "Introduzione CSS: Pseudo-classi e pseudo-elementi"
author: Teo
categories: guida_CSS
image: assets/images/
featured: 
description: "Guida CSS Completa: Impara le Basi per Creare Pagine Web Moderne e Responsive"
keywords: CSS, introduzione CSS, guida CSS, creare sito web, linguaggio HTML
hidden: true
Introduzione a HTML: Creare le Fondamenta del Web
---

Le pseudo-classi e gli pseudo-elementi sono due concetti fondamentali nel CSS (Cascading Style Sheets) che permettono di definire regole stilistiche più dettagliate e dinamiche per gli elementi HTML. Entrambi permettono di accedere a stati o parti specifiche degli elementi per applicarvi stili senza aggiungere classi o ID extra nel markup HTML.
Pseudo-classi

Le pseudo-classi sono parole chiave che si aggiungono ai selettori e specificano uno stato speciale dell'elemento selezionato. Ecco alcune delle pseudo-classi più comuni:

    — Applica uno stile quando l'utente posiziona il cursore sull'elemento. È molto usata per cambiare il colore di un link o di un bottone quando ci si passa sopra con il mouse.

    — Seleziona un elemento quando ha il focus. Il focus può essere dato cliccando su un elemento o utilizzando il tab del tastiera. È spesso utilizzata per formattare elementi di form come input e textarea.

    — Si applica quando un elemento è attivato dall'utente, per esempio, quando si clicca su un link o un bottone.

    — Questa pseudo-classe si applica agli elementi <a> (links) che sono già stati visitati dall'utente, permettendo di stilizzare i link visitati in modo diverso da quelli non ancora cliccati.

Queste pseudo-classi possono essere combinate con altri selettori per targettizzare elementi specifici in base al loro stato dinamico.
Pseudo-elementi

Gli pseudo-elementi, introdotti con due punti (es. ::before), permettono di stilizzare parti specifiche di un elemento. Essi creano una pseudo-struttura all'interno dell'elemento che può essere utilizzata per inserire contenuti o stili che non fanno parte del documento HTML originale. Gli pseudo-elementi più comuni includono:

    ::before — Inserisce contenuto prima del contenuto dell'elemento selezionato. È necessario utilizzare la proprietà content per definire cosa inserire. Può essere utilizzato per aggiungere icone, ornamenti o altre decorazioni prima del testo o del contenuto effettivo.

    ::after — Funziona come ::before, ma inserisce il contenuto dopo il contenuto dell'elemento. È anch'esso spesso utilizzato per aggiungere contenuti decorativi.

    ::placeholder — Stilizza il testo placeholder di un input o di un textarea, come "Inserisci il tuo nome" in un campo di input.

Esempio pratico:

/* Aggiunge un'icona prima di un paragrafo */
p::before {
  content: "🔍";
  padding-right: 8px;
}

/* Cambia il colore del placeholder */
input::placeholder {
  color: gray;
}

/* Stilizza un link quando è hover */
a:hover {
  color: red;
}

Questi strumenti offrono un gran livello di flessibilità e precisione nella definizione degli stili, permettendo ai designer di creare interfacce utente dinamiche e accattivanti senza sovraccaricare il markup HTML con classi o ID aggiuntivi.