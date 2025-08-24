---
title: "Case Study Django + Blockchain: come ho costruito il backend di SchoolPlatform (DRF, JWT, web3.py)"
layout: post
slug: "case-study-django-blockchain-backend-schoolplatform-drf-jwt-web3py"
description: "Come ho integrato Django 4.2, DRF e web3.py per far convivere DB relazionale e blockchain (Polygon): JWT, caching off-chain, costi gas e test reali. Guida pratica con codice e best practice."
tags:
  - python
  - django
  - django-rest-framework
  - simplejwt
  - web3
  - blockchain
  - polygon
  - jwt
  - backend
  - case-study
categories:
  - django
canonical: "https://matteoricci.net/blog/2025/08/16/case-study-django-blockchain-backend-schoolplatform-drf-jwt-web3py.html"
meta_title: "Django + Blockchain: backend con DRF & web3.py — Case Study"
meta_description: "Come integrare Django 4.2, DRF, JWT e web3.py su Polygon: on-chain vs off-chain, service layer, caching dei saldi e test sui costi gas. Case study con codice."
meta_keywords: "django, drf, web3, blockchain, polygon, jwt, backend"
og_title: "Case Study Django + Blockchain: backend SchoolPlatform con DRF & web3.py"
og_description: "Integrazione Django 4.2, DRF e web3.py su Polygon: architettura modulare, gestione on-chain/off-chain, JWT, caching, costi gas e test reali."
og_image: "https://res.cloudinary.com/YOUR_CLOUD/image/upload/f_auto,q_auto,w_1200/v1754991098/case-study-django-blockchain-schoolplatform.jpg"
noindex: false
reading_time: "9 min"
---

# Case Study Django + Blockchain: come ho costruito il backend di SchoolPlatform (DRF, JWT, web3.py)

## Introduzione
Se vuoi far parlare un **database** relazionale con una **blockchain** pubblica senza far impazzire gli utenti a colpi di **gas** fee, devi scegliere bene cosa va on-chain e cosa resta off-chain.
In questo case study ti mostro come ho costruito il backend di **SchoolPlatform** con **Django 4.2**, **Django REST Framework**, **JWT** e **web3.py** su **Polygon**: pattern architetturali, service layer per mint/burn, caching dei saldi e test sui costi reali. Niente magie, solo scelte tecniche concrete che puoi copiare e adattare.

- [Case Study Django + Blockchain: come ho costruito il backend di SchoolPlatform (DRF, JWT, web3.py)](#case-study-django--blockchain-come-ho-costruito-il-backend-di-schoolplatform-drf-jwt-web3py)
  - [Introduzione](#introduzione)
  - [Perché Django per un LMS con token su blockchain](#perché-django-per-un-lms-con-token-su-blockchain)
  - [Stack tecnico (Django 4.2, DRF, SimpleJWT, web3.py, Polygon)](#stack-tecnico-django-42-drf-simplejwt-web3py-polygon)
  - [On-chain vs Off-chain: quando scrivere in blockchain (e quando no)](#on-chain-vs-off-chain-quando-scrivere-in-blockchain-e-quando-no)
  - [Service layer web3.py in Django: pattern e gestione errori RPC](#service-layer-web3py-in-django-pattern-e-gestione-errori-rpc)
  - [JWT \& DRF: autenticazione API per client mobile](#jwt--drf-autenticazione-api-per-client-mobile)
  - [Caching e sync: Redis + Celery per bilanci TEO “istantanei”](#caching-e-sync-redis--celery-per-bilanci-teo-istantanei)
  - [Sicurezza chiavi: KMS/HSM, env, rotazione, masking](#sicurezza-chiavi-kmshsm-env-rotazione-masking)
  - [Costi gas: test su testnet Polygon e ottimizzazioni](#costi-gas-test-su-testnet-polygon-e-ottimizzazioni)
  - [Test E2E: acquisto → pagamento → accredito token](#test-e2e-acquisto--pagamento--accredito-token)
  - [Roadmap: staking, NFT certificati, DAO corsi](#roadmap-staking-nft-certificati-dao-corsi)
  - [FAQ](#faq)
  - [Conclusione](#conclusione)


---

## Perché Django per un LMS con token su blockchain

Ho scelto **Django 4.2** per tre motivi:

1. **Chiarezza strutturale** – App separate per utenti, corsi, pagamenti e reward.
2. **Sicurezza integrata** – ORM, protezioni XSS/CSRF, validazione form.
3. **Velocità di sviluppo** – Arrivare a un MVP senza reinventare la ruota.

---

## Stack tecnico (Django 4.2, DRF, SimpleJWT, web3.py, Polygon)

* **Backend**: Django 4.2 + Django REST Framework
* **Autenticazione**: SimpleJWT
* **Blockchain**: web3.py con RPC Polygon
* **Cache e task asincroni**: Redis + Celery
* **Test e sviluppo**: testnet Polygon, pytest

---

## On-chain vs Off-chain: quando scrivere in blockchain (e quando no)

La regola:

* **On-chain** → operazioni che richiedono tracciabilità immutabile (es. mint/burn token).
* **Off-chain** → logica interna, bilanci temporanei, staking, sconti.

Esempio di modello per i bilanci off-chain:

```python
class DBTeoCoinBalance(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    available_balance = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    staked_balance = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)

    def total_balance(self):
        return self.available_balance + self.staked_balance
```

---

## Service layer web3.py in Django: pattern e gestione errori RPC

Esempio di modello wallet utente:

```python
class UserWallet(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    address = models.CharField(max_length=42, unique=True)  # 0x...
    private_key = models.CharField(max_length=66)  # ⚠️ Da cifrare in produzione
    created_at = models.DateTimeField(auto_now_add=True)

    def get_masked_private_key(self):
        return f"{self.private_key[:6]}...{self.private_key[-4:]}"
```

Le chiavi private vanno **cifrate** o gestite tramite **HSM/KMS**.

---

## JWT & DRF: autenticazione API per client mobile

Esempio endpoint per saldo TEO:

```python
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_wallet_balance(request):
    user = request.user
    result = blockchain_service.get_user_wallet_balance(user)
    return Response(result)
```

L’uso di caching riduce latenza e chiamate RPC superflue.

---

## Caching e sync: Redis + Celery per bilanci TEO “istantanei”

* Redis come store temporaneo saldi.
* Celery per sincronizzare on-chain in batch.

---

## Sicurezza chiavi: KMS/HSM, env, rotazione, masking

* Mai salvare private key in chiaro.
* Rotazione periodica delle chiavi.
* Mascheramento in UI.

---

## Costi gas: test su testnet Polygon e ottimizzazioni

* Test di transazioni multiple per ridurre fee.
* Uso di funzioni smart contract ottimizzate.

---

## Test E2E: acquisto → pagamento → accredito token

* Integrazione acquisto corso → mint token.
* Test gas-optimized su Polygon testnet.
* Fallback RPC per garantire saldo corretto.

---

## Roadmap: staking, NFT certificati, DAO corsi

* Staking avanzato.
* NFT come certificati di completamento.
* DAO per governance corsi.

---

## FAQ

**Django funziona con Web3?**
Sì, con web3.py e pattern service layer.
**Come gestire le chiavi?**
Con KMS/HSM o cifratura asimmetrica.
**Quanto costa il mint?**
Dipende da gas price su Polygon; in media pochi centesimi.

---

## Conclusione

SchoolPlatform dimostra che un backend Django può integrarsi con blockchain in modo fluido e user-friendly. Il trucco sta nel bilanciamento tra on-chain e off-chain, nella gestione sicura delle chiavi e in un’architettura modulare che separa responsabilità.

💬 E tu? Hai mai dovuto sincronizzare un DB con una blockchain? Che approccio hai scelto?

Grazie per essere arrivato fino alla fine!

Matteo Ricci - Full Stack Developer

