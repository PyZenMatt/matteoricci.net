# GUIDA COMPLETA: Transizione Dominio per Google

## 🔄 STRATEGIA DI RESET DOMINIO

Il tuo dominio matteoricci.net ospitava contenuti completamente diversi. Ecco come gestire la transizione:

## 1. GOOGLE SEARCH CONSOLE

### Setup Iniziale:
1. Vai su [Google Search Console](https://search.google.com/search-console)
2. Aggiungi la proprietà `matteoricci.net`
3. Verifica il dominio tramite:
   - **Metodo DNS**: Aggiungi record TXT al DNS
   - **Metodo File HTML**: Scarica il file di verifica e caricalo nella root del sito
   - **Tag HTML**: Aggiungi meta tag nella sezione `<head>`

### Azioni da Fare:
- **Rimuovi vecchi contenuti**: Usa "Rimozioni" → "Rimuovi temporaneamente" per vecchie pagine
- **Forza reindicizzazione**: Usa "Controllo URL" per le nuove pagine
- **Sitemap**: Invia la nuova sitemap `/sitemap.xml`

## 2. GOOGLE ANALYTICS

### Setup GA4:
1. Crea una nuova proprietà GA4 su [Google Analytics](https://analytics.google.com)
2. Copia il Measurement ID (formato: G-XXXXXXXXXX)
3. Sostituisci `G-XXXXXXXXXX` nel file `index.html` con il tuo ID reale
4. Sostituisci anche in `_config.yml`

### Configurazione:
```javascript
// In index.html, il tuo ID è già configurato:
const GA_MEASUREMENT_ID = 'G-MLB32YW721';
```

```yaml
# In _config.yml, il tuo ID è già configurato:
google_analytics: G-MLB32YW721
```

## 3. CONTENUTI FRESCHI

### Meta Tag Implementati:
- `<meta name="robots" content="index, follow">`: Dice a Google di indicizzare
- `<meta name="date">`: Data di ultima modifica
- `<meta name="last-modified">`: Quando il contenuto è stato aggiornato
- `<meta name="category">`: Nuova categoria del sito

### Keywords Ottimizzate:
- Full Stack Developer
- Django, React, Python, Web3
- Portfolio professionale
- Milan, Italy

## 4. STRUTTURA BLOG PRONTA

### Cartelle Create:
- `_posts/`: Per i futuri articoli
- `blog.html`: Pagina indice del blog
- `_layouts/post.html`: Layout per gli articoli

### Come Aggiungere Articoli:
1. Crea file in `_posts/` con formato: `YYYY-MM-DD-titolo-articolo.md`
2. Usa questo formato:

```markdown
---
layout: post
title: "Il Tuo Titolo"
description: "Descrizione per SEO"
category: "Web Development"
---

Il tuo contenuto qui...
```

## 5. AZIONI IMMEDIATE

### Ora:
1. ✅ **GA ID Configurato**: Il tuo ID `G-MLB32YW721` è già attivo
2. **Verifica Search Console**: Aggiungi e verifica il dominio
3. **Invia Sitemap**: Carica `/sitemap.xml` in Search Console

### Nei Prossimi Giorni:
1. **Rimuovi vecchi contenuti**: Usa lo strumento rimozioni
2. **Forza indicizzazione**: Testa le nuove pagine
3. **Monitora**: Controlla errori e coverage

### Dopo 1-2 Settimane:
1. **Primo articolo**: Pubblica contenuto tech fresco
2. **Internal linking**: Collega portfolio e blog
3. **Social signals**: Condividi sui social

## 6. FILE OTTIMIZZATI

### robots.txt ✅
- Indica chiaramente cosa indicizzare
- Punta alla sitemap corretta
- Blocca file di build Jekyll

### Meta Tags ✅
- Ottimizzati per SEO
- Schema markup pronto
- Open Graph per social

### Analytics ✅
- Integrato con cookie consent
- Rispetta GDPR
- Caricamento condizionale

## 7. MONITORING

### Metriche da Monitorare:
- **Search Console**: Impression, click, posizione media
- **Analytics**: Traffico organico, bounce rate, sessioni
- **Core Web Vitals**: Performance del sito

### Alert da Impostare:
- Errori 404 per vecchi contenuti
- Problemi di indicizzazione
- Calo improvviso di traffico

## 8. LINK BUILDING FUTURO

### Strategie:
1. **Articoli tecnici**: Tutorial Django/React
2. **GitHub projects**: Link al portfolio
3. **Dev.to / Medium**: Cross-posting
4. **Community**: Partecipa a discussioni tech

---

🚀 **Il tuo portfolio è ora ottimizzato per una transizione Google di successo!**

Priorità: GA ID → Search Console → Primo articolo
