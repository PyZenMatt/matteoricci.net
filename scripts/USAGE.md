# Esempi d'uso degli script di fetch per Jekyll

## fetch_posts.py
Scarica tutti i post pubblicati dal backend e li esporta in `_posts/`.

```bash
python fetch_posts.py
```

Opzionale:
- Filtra per sito:
  ```bash
  SITE_DOMAIN=https://miosito.it python fetch_posts.py
  ```

---

## fetch_nuovi.py
Scarica solo i post nuovi (non ancora presenti in `_posts/`).

```bash
python fetch_nuovi.py
```

---

## fetch_aggiornati.py
Aggiorna solo i post che sono stati modificati nel backend (campo `updated_at` diverso dal file locale).

```bash
python fetch_aggiornati.py
```

---

## fetch_selettivi.py
Scarica solo i post che corrispondono a filtri specifici.

Esempi:

- Per slug:
  ```bash
  python fetch_selettivi.py --slug post1 post2
  ```
- Per ID:
  ```bash
  python fetch_selettivi.py --id 12 15
  ```
- Per autore:
  ```bash
  python fetch_selettivi.py --author mario
  ```
- Per categoria:
  ```bash
  python fetch_selettivi.py --category tech
  ```
- Per intervallo di date:
  ```bash
  python fetch_selettivi.py --from-date 2025-07-01 --to-date 2025-07-31
  ```
- Combinazioni:
  ```bash
  python fetch_selettivi.py --slug post1 --author mario --from-date 2025-07-01
  ```

---

## fetch_multipla.py
Scarica/aggiorna solo i post specificati tramite slug e/o ID, da argomento o file.

Esempi:

- Da argomento:
  ```bash
  python fetch_multipla.py --slug post1 post2
  python fetch_multipla.py --id 12 15
  ```
- Da file:
  ```bash
  python fetch_multipla.py --slug-file slugs.txt
  python fetch_multipla.py --id-file ids.txt
  ```
- Combinati:
  ```bash
  python fetch_multipla.py --slug post1 --id 12 --slug-file altri_slug.txt
  ```

---

## cleanup_orphaned_posts.py
Rimuove i file Markdown orfani in `_posts/` che non sono più presenti tra gli slug pubblicati.

```bash
python cleanup_orphaned_posts.py
```

---

> Tutti gli script supportano la variabile d'ambiente `OUTPUT_DIR` per cambiare la cartella di destinazione.
> Esempio:
> ```bash
> OUTPUT_DIR=/percorso/custom/_posts python fetch_nuovi.py
> ```
