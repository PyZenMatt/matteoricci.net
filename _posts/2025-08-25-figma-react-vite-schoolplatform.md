---
layout: post
date: '2025-08-25'
title: "Da Figma a React + Vite + TypeScript: il frontend dietro SchoolPlatform"
description: "Come ho trasformato un design Figma.make in un frontend React + Vite con primitives riutilizzabili, routing a moduli e integrazione blockchain tramite ethers.js (MetaMask, Polygon Amoy)."
permalink: /figma-react-vite-schoolplatform/
slug: figma-react-vite-schoolplatform
categories: ["Frontend", "React"]
tags: ["React", "Vite", "TypeScript", "Figma", "Design Tokens", "Primitives", "react-router-dom", "ethers.js", "MetaMask", "Polygon", "SchoolPlatform"]
author: "Matteo Ricci"
canonical: https://matteoricci.net/figma-react-vite-schoolplatform/
---

# Da Figma a React + Vite + TypeScript: il frontend dietro SchoolPlatform

> Dalla bussola visiva ai mattoncini di interfaccia, fino al collegamento con la blockchain: il percorso pratico che ho seguito.

## Indice dei contenuti
- [Da Figma a React + Vite + TypeScript: il frontend dietro SchoolPlatform](#da-figma-a-react--vite--typescript-il-frontend-dietro-schoolplatform)
  - [Indice dei contenuti](#indice-dei-contenuti)
  - [1) Perché partire da Figma.make](#1-perché-partire-da-figmamake)
  - [2) Dai design token ai componenti React (le “primitives”)](#2-dai-design-token-ai-componenti-react-le-primitives)
  - [3) Routing con `react-router-dom` + code-split](#3-routing-con-react-router-dom--code-split)
  - [4) Bootstrap come scorciatoia per prototipare](#4-bootstrap-come-scorciatoia-per-prototipare)
  - [5) Collegare la blockchain con `ethers.js` (MetaMask, Polygon)](#5-collegare-la-blockchain-con-ethersjs-metamask-polygon)
  - [6) Uno sguardo all’interfaccia attuale](#6-uno-sguardo-allinterfaccia-attuale)
  - [7) Cosa ho imparato fin qui](#7-cosa-ho-imparato-fin-qui)
  - [FAQ](#faq)

---

## 1) Perché partire da Figma.make
Sono partito da un mockup su **Figma.make**: palette, spaziature, tipografia. L’obiettivo non era la perfezione estetica, ma una **bussola visiva** che mi permettesse di tradurre subito le scelte in **design token** riutilizzabili. In questo modo evito componenti “usa e getta” e posso evolvere il look senza riscrivere tutto.

**Obiettivo:** coerenza fin dall’inizio, con libertà di iterare.

---

## 2) Dai design token ai componenti React (le “primitives”)
Ho estratto i token sia in **CSS variables** sia in **TypeScript**, così le primitives (Button, Card, Input) restano indipendenti dal framework CSS. Domani posso migrare da Bootstrap a un design system custom senza toccare il codice applicativo.

**`src/styles/tokens.css`**
```css
:root{
  --color-primary: #2d6ae3;
  --color-bg: #0b0e14;
  --color-fg: #eef2f8;
  --radius-md: 12px;
  --space-2: 8px;
  --space-4: 16px;
}
````

**`src/tokens.ts`**

```ts
export const tokens = {
  color: {
    primary: "#2d6ae3",
    bg: "#0b0e14",
    fg: "#eef2f8",
  },
  radius: { md: 12 },
  space: { 2: 8, 4: 16 },
} as const;
```

**`src/components/primitives/Button.tsx`**

{% raw %}
```tsx
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" }
>;

export function Button({ variant = "primary", children, ...rest }: Props) {
  const base = {
    borderRadius: "var(--radius-md)",
    padding: "8px 16px",
    fontWeight: 600,
  } as const;

  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "white",
      border: "none",
    },
    ghost: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "2px solid var(--color-primary)",
    },
  } as const;

  return (
    <button style=&#123;&#123; ...base, ...variants[variant] &#125;&#125; {...rest}>
      {children}
    </button>
  );
}
```
{% endraw %}

Con queste primitives, la **pagina corsi** o la **dashboard wallet** diventano composizioni di mattoncini stabili e tipizzati.

---

## 3) Routing con `react-router-dom` + code-split

Ho impostato tre rotte iniziali (Home, Courses, Wallet) e attivato **code-split** per migliorare LCP/INP. Inoltre **prefetcho** le pagine più visitate al passaggio del mouse.

**`src/App.tsx`**

```tsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home    = lazy(() => import("./pages/Home"));
const Courses = lazy(() => import("./pages/Courses"));
const Wallet  = lazy(() => import("./pages/Wallet"));

export default function App() {
  return (
    <BrowserRouter>
      <nav className="container d-flex gap-3 mt-3">
        <Link to="/" onMouseEnter={() => import("./pages/Home")}>Home</Link>
        <Link to="/courses" onMouseEnter={() => import("./pages/Courses")}>Corsi</Link>
        <Link to="/wallet" onMouseEnter={() => import("./pages/Wallet")}>Wallet</Link>
      </nav>

      <Suspense fallback={<div>Caricamento…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

> Micro-UX: uso `onMouseEnter` per innescare l’import della rotta (prefetch). Le immagini sono servite in **WebP/AVIF** con **dimensioni dichiarate** per stabilizzare il layout (CLS).

Esempio di **debounce** per input di ricerca corsi:

```ts
export const debounce = <F extends (...a: any[]) => void>(fn: F, ms=250) => {
  let t: number | undefined;
  return (...args: Parameters<F>) => {
    window.clearTimeout(t);
    t = window.setTimeout(() => fn(...args), ms);
  };
};
```

---

## 4) Bootstrap come scorciatoia per prototipare

Mi serviva **velocità**. Ho usato Bootstrap per avere layout leggibili e griglie affidabili, mantenendo le primitives come fonte di verità stilistica.

```tsx
<div className="container text-center mt-5">
  <h1>Benvenuto su SchoolPlatform</h1>
  <p className="lead">Corsi, ricompense e wallet blockchain in un unico posto.</p>
  <a className="btn btn-primary" href="/courses">Esplora corsi</a>
</div>
```

> Strategia: **tema come trampolino**, non come gabbia. I token sono l’API grafica che mi permette di migrare a un design system custom “a isole”.

---

## 5) Collegare la blockchain con `ethers.js` (MetaMask, Polygon)

Ho isolato la logica Web3 in un **service**. Verifico la rete (Polygon **Amoy**, testnet) e non salvo mai chiavi private lato client. Le config (RPC, indirizzi contratti) vivono in `.env` (prefisso `VITE_`).

**`src/services/wallet.ts`**

```ts
import { ethers } from "ethers";

const AMOY_CHAIN_ID = 80002; // Polygon Amoy testnet

export async function connectWallet(): Promise<string> {
  const { ethereum } = window as any;
  if (!ethereum) throw new Error("MetaMask non rilevato");

  const provider = new ethers.BrowserProvider(ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer  = await provider.getSigner();
  const network = await provider.getNetwork();

  if (network.chainId !== BigInt(AMOY_CHAIN_ID)) {
    console.warn("Rete diversa da Polygon Amoy:", network.chainId.toString());
  }
  return await signer.getAddress();
}

export async function getErc20Balance(tokenAddress: string, account: string) {
  const { ethereum } = window as any;
  const provider = new ethers.BrowserProvider(ethereum);
  const abi = [
    "function balanceOf(address) view returns (uint256)",
    "function decimals() view returns (uint8)"
  ];
  const contract = new ethers.Contract(tokenAddress, abi, provider);
  const [raw, decimals]: [bigint, number] = await Promise.all([
    contract.balanceOf(account),
    contract.decimals()
  ]);
  return ethers.formatUnits(raw, decimals);
}
```

> Sicurezza: uso **MetaMask** come provider, nessuna chiave privata nel client. Gli indirizzi dei contratti sono centralizzati in un file di **config** tipizzato.

---

## 6) Uno sguardo all’interfaccia attuale

* **Navbar** con i link principali (Home, Courses, Wallet)
* **Cards** Bootstrap per l’elenco corsi
* **Dashboard wallet** con saldo e ultime transazioni

![screenshot dashboard wallet React con saldo TeoCoin su Polygon Amoy](/assets/img/schoolplatform/wallet-dashboard.webp)

Non è ancora raffinata, ma è **navigabile**: posso collegare MetaMask e leggere il saldo di TeoCoin.

---

## 7) Cosa ho imparato fin qui

* **Done is better than perfect**: uno scheletro navigabile batte un mockup perfetto ma statico.
* **Primitives > temi**: investire nei mattoncini riduce il debito quando cambio look & feel.
* **Vite + TypeScript**: dev loop rapido e tipizzazione come rete di sicurezza.

**Prossimi step**: migrare gradualmente da Bootstrap a un **design system** basato sui token Figma.make (nomenclatura condivisa), introdurre componenti complessi (Navbar, Tabs, DataTable, Modal) mantenendo le primitives come fondazione.

---

## FAQ

**Perché Vite invece di Create React App?**
Per build e dev server più rapidi, HMR stabile e code-split nativo. Risultato: feedback immediato e migliore produttività.

**Bootstrap non mi bloccherà?**
Lo uso come **trampolino**. Con CSS variables + primitives posso sostituire le classi Bootstrap a isole senza toccare la logica dei componenti.

**Come gestisci la sicurezza del wallet?**
Niente chiavi sul client. Mi appoggio a **MetaMask** e a `ethers.js`. Le variabili sensibili (RPC, indirizzi) vivono in `.env`.

**Cosa succede se passo da Amoy a mainnet?**
Il service verifica `chainId`. Centralizzo indirizzi/ABI in config e posso cambiare rete senza toccare la UI.

**Come pianifichi la migrazione da Bootstrap a un design system?**
1:1 tra token Figma e CSS vars, primitives neutre, sostituzione progressiva delle classi. Zero riscritture massive.

---

<section id="structured-data">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Da Figma a React + Vite + TypeScript: il frontend dietro SchoolPlatform",
  "description": "Come ho trasformato un design Figma.make in un frontend React + Vite con primitives riutilizzabili, routing a moduli e integrazione blockchain tramite ethers.js (MetaMask, Polygon Amoy).",
  "author": { "@type": "Person", "name": "Matteo Ricci" },
  "dateModified": "2025-08-24",
  "url": "https://matteoricci.net/figma-react-vite-schoolplatform/",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://matteoricci.net/figma-react-vite-schoolplatform/" },
  "keywords": "React, Vite, TypeScript, Figma, Design Tokens, Primitives, react-router-dom, ethers.js, MetaMask, Polygon, SchoolPlatform"
}
</script>
</section>


* 👉 [**Guarda il repo su GitHub**](https://github.com/PyZenMatt/lms_backend)
* 📘 [**Leggi il case study completo di SchoolPlatform**]({% post_url 2025-08-16-case-study-django-blockchain-backend-schoolplatform-drf-jwt-web3py %})
* 🛡️ [**Perché un LMS moderno può trarre vantaggio da Django**]({% post_url 2025-08-20-refactoring-django-investimento %})

Grazie per essere arrivato fino alla fine!

Matteo Ricci - Full Stack Developer

