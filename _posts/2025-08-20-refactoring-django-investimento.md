---
title: "Refactoring in Django: investimento per scalabilità e stabilità"
slug: refactoring-investimento-schoolplatform
description: "Case study tecnico: come un refactoring mirato ha reso il backend di SchoolPlatform più stabile, scalabile e veloce da sviluppare."
tags:
  - django
  - backend
  - refactoring
  - best-practices
  - blockchain
categories:
  - sviluppo
  - case-study
canonical: "https://matteoricci.net/blog/2025/08/18/refactoring-django-investimento.html"
meta_title: "Refactoring in Django: investimento per scalabilità e stabilità"
meta_description: "Come il refactoring mirato di SchoolPlatform ha ridotto bug, aumentato la velocità di sviluppo e migliorato la scalabilità del backend Django."
meta_keywords: "django, refactoring, blockchain, backend, best practices"
og_title: "Refactoring in Django: investimento per scalabilità e stabilità"
og_description: "Come un refactoring mirato ha reso SchoolPlatform più robusta e scalabile."
og_image: "/assets/images/posts/refactoring-schoolplatform-cover.jpg"
noindex: false
reading_time: "6 min"
---

# Refactoring in Django: investimento per scalabilità e stabilità

## Il giorno in cui ho capito che il refactoring è un investimento, non una perdita di tempo

Quando ho iniziato **SchoolPlatform**, la priorità era *“finire”* il prodotto.  
Scrivevo codice veloce, incollavo funzioni dove servivano e andavo avanti.  
Finché è arrivato il momento di integrare la **blockchain** — e il codice ha iniziato a ribellarsi.


- [Refactoring in Django: investimento per scalabilità e stabilità](#refactoring-in-django-investimento-per-scalabilità-e-stabilità)
  - [Il giorno in cui ho capito che il refactoring è un investimento, non una perdita di tempo](#il-giorno-in-cui-ho-capito-che-il-refactoring-è-un-investimento-non-una-perdita-di-tempo)
    - [🔍 Sintomi di un backend fragile](#-sintomi-di-un-backend-fragile)
  - [Refactoring Django: separazione tra Database e Blockchain](#refactoring-django-separazione-tra-database-e-blockchain)
    - [Vantaggi ottenuti:](#vantaggi-ottenuti)
  - [Pulizia e coerenza del codice](#pulizia-e-coerenza-del-codice)
  - [Ho introdotto test per:](#ho-introdotto-test-per)
  - [❓ FAQ – Refactoring Django + Blockchain](#-faq--refactoring-django--blockchain)
  - [Risorse correlate](#risorse-correlate)


### 🔍 Sintomi di un backend fragile

- Logica di business mescolata tra viste Django e funzioni blockchain.
- Metodi duplicati in più moduli con leggere variazioni.
- API REST difficili da estendere senza rompere compatibilità.
- Assenza di test sui flussi critici.

Ogni nuova feature diventava un rischio. Ho fermato tutto per **una settimana di refactoring mirato**.

---

## Refactoring Django: separazione tra Database e Blockchain

Prima, le operazioni on-chain e quelle su database vivevano nello stesso metodo.  
Ora ho introdotto un **service layer** per separare le responsabilità:

```python
# services/teocoin.py
class TeoCoinService:
    def mint(self, wallet, amount):
        self.blockchain.mint(wallet.address, amount)
        self.db.log_transaction(wallet.user, amount, "mint")
```

### Vantaggi ottenuti:

- Riduzione delle chiamate alla blockchain ai soli punti necessari (mint / burn).

- Implementazione di un fallback DB-first per ridurre costi di gas.

- Maggiore leggibilità e riuso del codice.

## Pulizia e coerenza del codice

- Rinominati metodi ed endpoint con nomenclatura coerente (create_payment_intent, confirm_payment).

- Eliminato codice duplicato centralizzando la validazione in un unico modulo.

- Sostituite magic numbers con costanti definite.

Test unitari mirati a blockchain e pagamenti

## Ho introdotto test per:

- API di wallet connect/disconnect con autenticazione JWT.

- Deduzione e rollback di TeoCoin in caso di errore blockchain.

- Interazioni Stripe + DB simulate con mock, senza toccare la rete reale.

*Esempio di test rollback:*

```python

@pytest.mark.django_db
def test_wallet_deduction_with_blockchain_failure(teocoin_service, user_wallet):
    with patch("blockchain_client.burn", side_effect=BlockchainError):
        result = teocoin_service.deduct(user_wallet, 50)
        assert result is False
        assert user_wallet.balance == 100  # rollback
```

📈 Risultati del refactoring
Metrica	Miglioramento
Bug critici in QA	-60%
Tempo sviluppo feature	-40%
Integrazione nuove API	Più rapida
Scalabilità	Multi-chain ready

## ❓ FAQ – Refactoring Django + Blockchain

**1) Perché fare refactoring in un progetto Django?**  
Il refactoring migliora leggibilità, riuso del codice e scalabilità, riducendo i bug. In SchoolPlatform ha ridotto i bug critici del 60% e accelerato le feature del 40%.

**2) Come separare database e blockchain in Django?**  
Con un **service layer** che isola le operazioni DB e on‑chain, mantenendo pulite le viste e riducendo le chiamate alla blockchain.

**3) Quanto costa il mint su Polygon?**  
Dipende dal gas price. In media pochi centesimi su mainnet; in testnet è gratuito. Ridurre le chiamate on‑chain abbatte i costi.

**4) Come testare funzioni blockchain in Django senza spendere gas?**  
Usa **mock** nei test e una **testnet** (es. Polygon Mumbai) per validare i flussi senza costi e senza toccare la rete reale.

**5) Cosa sono le “magic numbers” e perché evitarle?**  
Valori hardcoded senza contesto. Sostituiscile con **costanti** (es. `MAX_MINT_AMOUNT=50`) per chiarezza e manutenibilità.


## Risorse correlate

- [Come integrare Django e Blockchain in un unico backend]("https://matteoricci.net/blog/2025/08/18/case-study-django-blockchain-backend-schoolplatform-drf-jwt-web3py.html")

Service Layer in Django: architettura e best practice: Coming Soon

Matteo Ricci
Full Stack Developer

