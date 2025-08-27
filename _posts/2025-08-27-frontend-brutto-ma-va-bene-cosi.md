---
layout: post
title: "Frontend MVP: refactor o riscrittura? Lezioni dal mio primo progetto"
description: "Come ho spedito un MVP funzionante senza curare la grafica, i criteri per scegliere tra refactor e riscrittura, e il piano concreto per migliorare UX/UI con React, Vite e design tokens."
permalink: /frontend-mvp-refactor-vs-rewrite/
slug: frontend-mvp-refactor-vs-rewrite
lang: it
categories: [frontend, UX, React]
tags: [frontend, MVP, UX/UI, refactor, React, Vite, design system, primitives, code-splitting]
date: '2025-08-27'
---

# Il mio primo frontend era brutto e va bene così

### Perché ho spedito prima il funzionante

Ho consegnato un **MVP funzionante** anche se il frontend non seguiva tutte le best practice. Il motivo è semplice: dovevo **validare il flusso** — corsi, lezioni, esercizi, wallet — *prima* di rifinire la pelle dell’interfaccia. Un’interfaccia bella su un prodotto che non gira è un bel mockup; un’interfaccia grezza su un prodotto che gira è **apprendimento reale**.

Spedire presto mi ha dato segnali utili: cosa cercano studenti e docenti, dove inciampano, quali azioni sono davvero frequenti. Da lì ho iniziato a disegnare il piano di rientro su UX/UI, senza buttare via il lavoro.

> Approfondimento tecnico: raccontato passo-passo in “[Da Figma a React + Vite + TypeScript: il frontend dietro SchoolPlatform]({% post_url 2025-08-25-figma-react-vite-schoolplatform %})”.

---

## Indice dei contenuti
- [Il mio primo frontend era brutto e va bene così](#il-mio-primo-frontend-era-brutto-e-va-bene-così)
    - [Perché ho spedito prima il funzionante](#perché-ho-spedito-prima-il-funzionante)
  - [Indice dei contenuti](#indice-dei-contenuti)
    - [Refactor o “purga”? Il mio criterio](#refactor-o-purga-il-mio-criterio)
    - [Piano UX/UI post-MVP](#piano-uxui-post-mvp)
      - [Design tokens → primitives](#design-tokens--primitives)
      - [Accessibilità e naming](#accessibilità-e-naming)
      - [Component library e regole di stile](#component-library-e-regole-di-stile)
    - [Micro-performance e DX: piccoli interventi ad alto impatto](#micro-performance-e-dx-piccoli-interventi-ad-alto-impatto)
    - [Cosa mi porto a casa](#cosa-mi-porto-a-casa)
    - [FAQ](#faq)

---

### Refactor o “purga”? Il mio criterio

Mi sono trovato davanti al bivio classico:

- **Refactor** graduale: tenere l’esistente e migliorare per passi.
- **Purga** (riscrittura mirata): tagliare e rifare dove il debito tecnico blocca.

Ho scelto un approccio ibrido:

- **Purga chirurgica** su moduli con accoppiamento forte e stili hardcoded.
- **Refactor incrementale** su parti già modulari, iniziando da routing, layout e tipografia.

Il criterio pratico:

1. **Impatto utente**: tocco prima ciò che sblocca la frizione maggiore (chiarezza dei percorsi, leggibilità, stati dei bottoni).
2. **Rischio regressioni**: evito riscritture ampie nelle settimane con rilasci funzionali.
3. **Riutilizzo futuro**: investo dove posso creare **primitives** riusabili.

---

### Piano UX/UI post-MVP

#### Design tokens → primitives

Traduco colori, spaziature e tipografia in **design tokens** (CSS/TS) e li promuovo a **primitives** (Button, Input, Card, Badge). In questo modo ogni pagina eredita coerenza automaticamente.

Esempio (semplificato):

```ts
// src/design/tokens.ts
export const colors = {
  primary: "#2563eb",
  surface: "#0b1220",
  text: "#e6e6e6",
  success: "#16a34a",
  warning: "#f59e0b"
};
export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 };
export const font = {
  family: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  size: { sm: "0.875rem", base: "1rem", lg: "1.125rem" },
  weight: { regular: 400, medium: 500, bold: 700 },
  lineHeight: 1.5
};
````

**src/primitives/Button.tsx**

```ts
import { colors, space, font } from "@/design/tokens";
type Variant = "primary" | "ghost" | "danger" | "success";
export function Button({
  variant = "primary",
  disabled,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const styles: Record<Variant, React.CSSProperties> = {
    primary: { background: colors.primary, color: colors.text },
    ghost:   { background: "transparent", border: `1px solid ${colors.text}`, color: colors.text },
    danger:  { background: "#dc2626", color: colors.text },
    success: { background: colors.success, color: colors.text }
  };
  return (
    <button
      style={{
        ...styles[variant],
        padding: `${space.sm}px ${space.lg}px`,
        fontFamily: font.family,
        fontSize: font.size.base,
        borderRadius: 12,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer"
      }}
      {...props}
    >
      {children}
    </button>
  );
}
```

#### Accessibilità e naming

* **Focus state** visibile di default sulle primitives.
* **Contrasto** testo/sfondo ≥ 4.5:1 dove possibile.
* **ARIA** per componenti interattivi.
* **Naming** consistente: `Page`, `Section`, `Panel`, `Card`, `Badge`.

#### Component library e regole di stile

* Storybook per documentare le primitives.
* ESLint + Prettier per standardizzare.
* Regole di commit (Conventional Commits) per tracciare refactor vs feat.

---

### Micro-performance e DX: piccoli interventi ad alto impatto

* **Lazy routes** e **code-split**: carico le pagine solo quando servono.
* **Bundle diet**: rimuovo dipendenze duplicate, import nominativi.
* **Cruciale per UX**: ridurre il *Time to Interactive* nelle pagine corso/esercizi.

Esempio sintetico:

**src/router.tsx**

```ts
import { createBrowserRouter } from "react-router-dom";
import React from "react";
const Course = React.lazy(() => import("./pages/Course"));
const Lesson = React.lazy(() => import("./pages/Lesson"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
export const router = createBrowserRouter([
  { path: "/", element: <React.Suspense fallback={null}><Dashboard/></React.Suspense> },
  { path: "/course/:id", element: <React.Suspense fallback={null}><Course/></React.Suspense> },
  { path: "/lesson/:id", element: <React.Suspense fallback={null}><Lesson/></React.Suspense> }
]);
```

---

### Cosa mi porto a casa

* **Done is better than perfect**, ma con una rotta chiara di rientro su UX/UI.
* I **design tokens** sono il ponte tra bozza e prodotto.
* La coppia **primitives + regole** moltiplica la velocità senza perdere coerenza.
* Refactor e “purga” non sono religioni: sono **strumenti** con criteri.

---

### FAQ

**Perché non hai usato subito un design system completo?**
Perché dovevo validare flussi critici in tempi rapidi. Ora che li ho, introdurre un system è più mirato e meno teorico.

**Quando scegliere la “purga” rispetto al refactor?**
Quando l’accoppiamento è alto, lo stile è hardcoded ovunque e i test non coprono i casi base. In quel caso, rifare un modulo è più economico che limarne i bordi.

**Come garantisci che il refactor non rallenti lo sviluppo?**
Lavoro per *feature slice* e *UI slice*, introduco primitives backward-compatible e migro le pagine una alla volta.

**Quanto incide davvero il code-split sulla UX?**
Nelle pagine con librerie pesanti (editor, grafici, Web3) l’effetto è tangibile: caricamento percepito più rapido e meno freeze iniziali.

---

* Vuoi vedere come trasformo token in **primitives** su un caso reale? Leggi “\[Da Figma a React + Vite + TypeScript: il frontend dietro SchoolPlatform]\({% post\_url 2025-08-25-figma-react-vite-schoolplatform %})”.
* Curioso del codice? Dai un’occhiata al mio **portfolio** e ai repo collegati su GitHub dalla pagina.
* Se ti interessa questo percorso di redesign, scrivimi dalla pagina contact "newsletter" e la tua email.

Come sempre, Grazie per essere arrivato fin qui!

Matteo Ricci | Full Stack Developer

<!-- JSON-LD: BlogPosting -->

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Frontend MVP: refactor o riscrittura? Lezioni dal mio primo progetto",
  "description": "Come ho spedito un MVP funzionante senza curare la grafica, i criteri per scegliere tra refactor e riscrittura, e il piano concreto per migliorare UX/UI con React, Vite e design tokens.",
  "author": { "@type": "Person", "name": "Matteo Ricci" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "/frontend-mvp-refactor-vs-rewrite/" },
  "image": "/assets/img/cover/frontend-brutto.webp",
  "datePublished": "2025-08-24T09:00:00+02:00",
  "dateModified": "2025-08-24T09:00:00+02:00"
}
</script>

```
```
