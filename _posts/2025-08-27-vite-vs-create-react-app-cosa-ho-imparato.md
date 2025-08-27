---
layout: post
title: "Vite vs Create React App: cosa ho imparato sul campo"
description: "Confronto pratico tra Vite e Create React App: dev loop, HMR, tempi di build e bundle size. Esempi reali, guida di migrazione passo-passo e FAQ."
permalink: /vite-vs-create-react-app-cosa-ho-imparato/
slug: vite-vs-create-react-app-cosa-ho-imparato
lang: it
categories: ["Frontend", "React"]
tags: ["React", "Vite", "TypeScript", "Figma", "Design Tokens", "Primitives", "react-router-dom", "ethers.js", "MetaMask", "Polygon", "SchoolPlatform"]
author: "Matteo Ricci"
---

# Vite vs Create React App: cosa ho imparato sul campo

**Promessa veloce:** se oggi scrivi UI React e ti pesa il _dev loop_, Vite accorcia avvio server, **HMR** e build. 

Qui trovi numeri **esperienziali** (con disclaimer), come li ho misurati, snippet pronti e una guida **CRA → Vite**. 

In chiusura: **quando NON migrare** (sì, esiste) e **FAQ** in stile *People Also Ask*.

## Indice dei contenuti
1. [Perché mettere a confronto Vite e CRA](#perche-confronto)
2. [Dev loop: cold start e HMR](#dev-loop)
3. [Build e dimensione del bundle](#build-e-bundle)
4. [Strumenti di misura che ho usato](#strumenti-misura)
5. [Migrazione guidata da CRA a Vite](#migrazione-guidata)
6. [Edge case e compatibilità](#edge-case)
7. [Quando migrare (e quando no)](#quando-migrare)
8. [Conclusioni operative + CTA](#conclusioni)
9. [FAQ](#faq)

---

## 1 Perché mettere a confronto Vite e CRA {#perche-confronto}

CRA ti mette su **Webpack** con zero configurazione. Vite separa sviluppo e build: **esbuild** per il dev server (rapidissimo) e **Rollup** per la produzione. Risultato pratico: **feedback loop** più corto e concentrazione alta, specie in team.

## 2 Dev loop: cold start e HMR {#dev-loop}

Progetto tipo: **React 18 + TypeScript**, decine di componenti, alcune rotte in **lazy**.

- **Cold start dev server**: Vite ~**0.3–1.5 s** vs CRA ~**8–15 s**  
- **HMR** dopo salvataggio: Vite ~**50–150 ms** vs CRA ~**700–1500 ms**

> Numeri indicativi: dipendono da macchina, dipendenze, cache. Il pattern però è costante: Vite “ti restituisce” l’editor molto prima.

### HMR out-of-the-box

Con `@vitejs/plugin-react` l’HMR funziona senza magie. Effetto reale: iteri su stile/UX in **micro-passi** senza spezzare il flusso mentale.

## 3 Build e dimensione del bundle {#build-e-bundle}

Vite usa **Rollup** per la build finale, con **tree-shaking** solido. Con **code-splitting** per rotta e dipendenze sobrie, ho visto:

- Build più rapide rispetto a CRA default
- **Bundle iniziale** più asciutto e **caching** migliore separando i vendor

```ts
// vite.config.ts (estratto)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), visualizer({ filename: 'stats.html', gzipSize: true })],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
})
````

Inserisci nel post uno **screenshot** di `stats.html` con alt tecnico (es. “Treemap bundle con split vendor/app e peso librerie router”).

## 4 Strumenti di misura che ho usato {#strumenti-misura}

**Bundle**: `rollup-plugin-visualizer` (Vite) · `webpack-bundle-analyzer` (CRA)

**Tempi dev/build**: cronometro terra-terra + log CLI su **3–5 run** per media

**Runtime**: DevTools “Coverage” per valutare codice caricato inutilmente

Piccolo rito: misura **prima** della migrazione, **dopo** e **una settimana** più tardi. Annota versione dipendenze: future update falsano il confronto.

## 5 Migrazione guidata da CRA a Vite {#migrazione-guidata}

### 5.1 Crea progetto Vite

```
npm create vite@latest my-app -- --template react-ts
cd my-app && npm i
```

### 5.2 Sposta il tuo `src/`

Copia componenti/pagine/asset. Nota: in Vite **`index.html` è in root**, non in `public/`.

### 5.3 Variabili d’ambiente

CRA → `process.env.REACT_APP_API_BASE_URL`
Vite → `import.meta.env.VITE_API_BASE_URL`

`.env`:

```
VITE_API_BASE_URL=http://127.0.0.1:8000
```

Uso:

```ts
const baseURL = import.meta.env.VITE_API_BASE_URL
```

### 5.4 Alias TypeScript e import puliti

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()]
})
```

### 5.5 Proxy verso il backend

```ts
// vite.config.ts
export default defineConfig({
  server: {
    proxy: {
      '/api': { target: 'http://127.0.0.1:8000', changeOrigin: true }
    }
  }
})
```

### 5.6 Code-splitting per rotta

```tsx
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Courses = lazy(() => import('./pages/Courses'))

export function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <Routes>
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Suspense>
  )
}
```

### 5.7 Script e test

```json
// package.json (estratto)
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "lint": "eslint ."
  }
}
```

Se usi **Jest**, puoi restare su Jest o passare a **Vitest** (più reattivo in watch; integrazione naturale con Vite).

> Tip: se hai path alias tipo `@/components`, sincronizza `tsconfig.json` + `vite-tsconfig-paths`.

## 6 Edge case e compatibilità {#edge-case}

**PWA/Service Worker** → valuta `vite-plugin-pwa`

**SVG/asset** → in Vite import come modulo o URL; verifica eventuali loader custom di CRA

**Polyfill** → aggiungi solo ciò che serve (es. `URL`, `fetch`)

**Monorepo** → configura `root`/`build.outDir` e workspace correttamente

**Linting** → controlla regole ESLint legate a Webpack che non servono più

## 7 Quando migrare (e quando no) {#quando-migrare}

**Ha senso migrare se…**

il **dev loop è lento** e frena la produttività;

cerchi **code-splitting** pulito e toolchain moderna;

stai avviando un nuovo progetto o il codebase non è enorme.

**Meglio NON migrare se…**

dipendi da **plugin Webpack** difficili da replicare;

pipeline di build/CD è fortemente legata a CRA e **non hai banda** per rifattorizzare;

il team è in una fase critica (release imminente) e i tempi attuali sono **accettabili**.

> Strategia low-risk: prova Vite in **branch** solo per lo sviluppo (dev server), lasciando la build prod su CRA per una o due settimane. Se i guadagni sono chiari, completi il passaggio.

## 8 Conclusioni operative + CTA {#conclusioni}

Vite rende lo sviluppo **più scattante**. Se vivi di micro-iterazioni UI/UX, lo senti subito. Misura, migra a cerchi concentrici e mantieni i benchmark **ripetibili**.

**Vuoi un caso reale?** Dai un’occhiata al mio studio sul frontend React + Vite di SchoolPlatform → [/figma-react-vite-schoolplatform/]({% post_url 2025-08-25-figma-react-vite-schoolplatform %}).

---

## 9 FAQ {#faq}

**Vite è più veloce anche in produzione?**
Spesso sì: la build Rollup è rapida e produce bundle puliti. Il guadagno più evidente resta comunque il **dev loop**.

**Posso usare Redux/React Query/Router con Vite?**
Sì. L’ecosistema React funziona normalmente.

**Come leggo le env in Vite?**
Con `import.meta.env` (prefisso `VITE_` nei file `.env`).

**C’è l’equivalente di `react-scripts build`?**
Sì: `vite build`. Aggiungi `manualChunks` e plugin per analizzare il bundle se vuoi ottimizzare il caching.

**Jest o Vitest?**
Entrambi. **Vitest** è integrato con Vite ed è più rapido in watch.

**E se mi serve SSR o routing server-side?**
Vite non è un framework. Per SSR/routing server-side valuta **Next.js**, **Remix** o soluzioni Vite-SSR dedicate.

Grazie per aver letto fino in fondo!

Matteo Ricci | Full Stack Developer


<!-- JSON-LD per arricchire la SERP -->

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Vite vs Create React App: cosa ho imparato sul campo",
  "description": "Confronto pratico tra Vite e Create React App: dev loop, HMR, tempi di build e bundle size, con guida di migrazione e FAQ.",
  "image": "{{ '/assets/img/cover/vite-vs-cra.webp' | absolute_url }}",
  "author": { "@type": "Person", "name": "Matteo Ricci" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "{{ page.url | absolute_url }}" },
  "datePublished": "{{ page.date | date_to_xmlschema }}",
  "dateModified": "{{ page.last_modified_at | default: page.date | date_to_xmlschema }}"
}
</script>