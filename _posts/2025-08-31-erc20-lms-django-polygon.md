---
layout: post
title: "Come ho integrato un token ERC-20 in un LMS (Polygon + Django)"
description: "Come ho creato TeoCoin (ERC-20) su Polygon con funzioni mint/burn collegate all’LMS Django via web3.py, pensando a un futuro ecosistema artistico che usi la moneta come valuta."
permalink: "/erc20-lms-django-polygon/"
slug: "erc20-lms-django-polygon"
date: "2025-08-31"
last_modified_at: "2025-08-31"
lang: "it"
categories: ["Progetti","Blockchain","Django", Web3]
tags: ["blog","seo","ERC-20","Polygon","Django","web3.py","token","arte"]
author: "Matteo Ricci"
image_alt: "Diagramma architettura LMS con integrazione ERC-20 su Polygon"
canonical_url: "https://matteoricci.net/erc20-lms-django-polygon/"
robots: "index,follow"
sitemap: true
draft: false
---

# Come ho integrato un token ERC-20 in un LMS (Polygon + Django)

Ho sempre avuto un’idea fissa: creare un ponte tra il mondo dell’arte e quello della blockchain. Il risultato è stato **TeoCoin**, un token ERC-20 che ho distribuito su Polygon e collegato al mio LMS sviluppato in Django.  
Perché un LMS? Perché era il terreno perfetto per sperimentare e immaginare un futuro ecosistema dove gli artisti e gli studenti possano muoversi in un’economia basata su una moneta digitale dedicata all’arte.

### Table of Contents
- [Come ho integrato un token ERC-20 in un LMS (Polygon + Django)](#come-ho-integrato-un-token-erc-20-in-un-lms-polygon--django)
    - [Table of Contents](#table-of-contents)
  - [Architettura in breve](#architettura-in-breve)
  - [Il contratto TeoCoin (mint/burn con controllo admin)](#il-contratto-teocoin-mintburn-con-controllo-admin)
  - [Collegare il backend Django con web3.py](#collegare-il-backend-django-con-web3py)
  - [Logica LMS: trasferimenti futuri con mint e burn](#logica-lms-trasferimenti-futuri-con-mint-e-burn)
  - [Verifica su Polygonscan](#verifica-su-polygonscan)
    - [Checklist di sicurezza e costi](#checklist-di-sicurezza-e-costi)
  - [Conclusioni \& Next step](#conclusioni--next-step)

---

## Architettura in breve

La struttura è lineare, quasi didattica:

- L’**LMS** fornisce l’interfaccia agli studenti.  
- Il **backend Django** funge da orchestratore.  
- Con **web3.py** dialogo con il **contratto ERC-20 su Polygon**.  
- Le transazioni sono pubbliche e trasparenti su **Polygonscan**.  

---

## Il contratto TeoCoin (mint/burn con controllo admin)

Per avere un token sicuro ho scelto di partire dalla base: **OpenZeppelin**.  
Ho definito ruoli separati — admin, minter e burner — per controllare chi può creare e chi può distruggere token. Questa separazione garantisce che il sistema sia pronto a scalare senza perdere stabilità.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract TeoCoin is ERC20, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    constructor() ERC20("TeoCoin", "TEO") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external onlyRole(BURNER_ROLE) {
        _burn(from, amount);
    }
}
```

## Collegare il backend Django con web3.py

Il passo successivo è stato permettere al mio LMS di interagire con il contratto.
Con poche righe in Python, Django diventa in grado di inviare transazioni a Polygon: firmare, inviare e verificare.

```solidity
from web3 import Web3
import os

w3 = Web3(Web3.HTTPProvider(os.getenv("POLYGON_RPC_URL")))
contract = w3.eth.contract(address=os.getenv("TEOCOIN_ADDRESS"), abi=teocoin_abi)

def mint_token(user_address, amount, private_key):
    nonce = w3.eth.get_transaction_count(user_address)
    txn = contract.functions.mint(user_address, amount).build_transaction({
        "from": user_address,
        "nonce": nonce,
        "gas": 200000,
        "gasPrice": w3.to_wei("30", "gwei")
    })
    signed = w3.eth.account.sign_transaction(txn, private_key)
    return w3.eth.send_raw_transaction(signed.rawTransaction)
```

## Logica LMS: trasferimenti futuri con mint e burn

Per ora questa funzionalità non è ancora attiva, ma ho già preparato la logica per il futuro.
Nel mio modello, il mint avviene quando uno studente decide di trasferire fondi dal proprio account LMS verso il suo wallet personale: i TeoCoin vengono creati e inviati sulla blockchain.
Il burn invece rappresenta l’operazione inversa: quando lo studente vuole riportare i TeoCoin dal wallet esterno alla piattaforma, i token vengono bruciati e ricreati nel sistema interno dell’LMS.
È un’architettura pensata in prospettiva. Al momento non serve, ma immagino un ecosistema artistico dove i TeoCoin diventino una valuta riconosciuta nel mondo dell’arte, accettata da gallerie, corsi e marketplace creativi.

## Verifica su Polygonscan

Ogni transazione passa al vaglio della blockchain ed è visibile su Polygonscan.
Avere un registro pubblico non è solo una questione tecnica: è un modo per dare fiducia e trasparenza a chi partecipa all’ecosistema.


### Checklist di sicurezza e costi
Per ora ho impostato alcune regole basilari:
    • Separare ruoli (admin, minter, burner).
    • Testare tutto su testnet prima di pensare alla mainnet.
    • Custodire le chiavi private solo in variabili d’ambiente.
    • Valutare sempre i costi del gas (Polygon resta comunque molto conveniente).

## Conclusioni & Next step

Integrare un ERC-20 in un LMS non è stato solo un esperimento tecnico: è stato il primo passo verso un’idea più grande.
Un ecosistema dove TeoCoin diventa la moneta dell’arte, capace di circolare tra studenti, artisti, gallerie e piattaforme creative.
I prossimi step?
    • Attivare realmente le funzioni di mint e burn.
    • Portare il sistema da testnet a mainnet.
    • Creare un primo circuito di utilizzo reale dei TeoCoin nel mondo dell’arte digitale e fisico.

FAQ
Posso testare senza rischi?
Sì, puoi usare la testnet Amoy di Polygon per simulare ogni transazione senza costi reali.
Dove custodire la chiave admin?
Meglio usare un vault sicuro (HashiCorp, AWS Secrets Manager, ecc.) e non salvarla mai nel codice.
Quanto costa il gas su Polygon?
Mediamente pochi centesimi a transazione, un costo minimo rispetto alla mainnet Ethereum.
C’è già un uso reale dei TeoCoin?
Non ancora, ma l’idea è di arrivare a un ecosistema artistico in cui TeoCoin diventi una valuta accettata da piattaforme e gallerie.

Apply This in Practice
    • Immagina il tuo token ERC-20 e distribuiscilo su Polygon testnet.
    • Integra la logica con web3.py per provare le funzioni mint e burn.
    • Rifletti su un ecosistema di utilizzo reale: cosa succederebbe se la tua moneta avesse un ruolo concreto in una community?
👉 Scopri altri progetti su Matteo Ricci

Grazie per aver letto fin qui!

Matteo Ricci Full Stack Developer