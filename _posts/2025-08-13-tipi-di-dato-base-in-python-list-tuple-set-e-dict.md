---
title: 'Tipi di dato base in Python: list, tuple, set e dict — differenze e quando
  usarli'
date: '2025-08-13T09:37:55+00:00'
slug: tipi-di-dato-base-in-python-list-tuple-set-e-dict-differenze-e-quando-usarli
description: 'Guida pratica ai tipi di datobase in Python 3.12: list, tuple, set e dict. Differenze, esempi chiari e consigli'
tags: 'python, basi, tipi di dato, guide'
categories:
- python
image: https://res.cloudinary.com/dkoc4knvv/image/upload/v1/
canonical: https://matteoricci.net.git/2025/08/13/tipi-di-dato-base-in-python-list-tuple-set-e-dict.html
meta_title: 'Tipi di dato base in Python: list, tuple, set e dict — differenze e q…'
meta_description:  "Guida pratica ai tipi di datobase in Python 3.12: list, tuple, set e dict. Differenze, esempi chiari e consigli'
meta_keywords: 'python, basi, tipi di dato, guide'
og_title: 'Tipi di dato base in Python: list, tuple, set e dict — differenze e q…'
og_description: 'date: "2025 08 13" description: "Guida pratica ai tipi di dato base in Python 3.12: list, tuple, set e dict. Differenze, esempi chiari e consigli'
og_image: ''
noindex: false
lang: it
reading\_time: "7 min"
---


# Tipi di dato base in Python: list, tuple, set e dict — differenze e quando usarli

> **Sommario**: in 10 minuti capirai come scegliere tra **liste**, **tuple**, **set** e **dizionari** in Python 3.12. Useremo esempi semplici e analogie concrete per evitare confusione e scrivere codice più pulito.

**Assunzioni**

* Python: 3.12
* Livello: beginner
* Vincoli: solo **standard library**, niente librerie esterne

---

** Prerequisiti **

* Python 3.12 installato, `venv`, `pip`
* Comandi rapidi:

```bash
python -m venv .venv && source .venv/bin/activate
python -m pip install -U pip
```

## Contesto / Perché

In Python ci sono 4 “contenitori” che usi ovunque:

* **list** → lista della spesa: ordine importante, puoi aggiungere/togliere.
* **tuple** → scontrino: ordine importante, **non** modificabile.
* **set** → raccolta figurine: solo elementi **unici**, niente duplicati, l’ordine non conta.
* **dict** → rubrica: **chiave → valore**, recuperi velocemente per chiave.

Capire **quando** usare ciascuno ti evita bug e codice complicato.

---

## Liste (`list`) — sequenze ordinate e **mutabili**

Le usi quando la dimensione può cambiare e l’ordine conta.

```python
# file: examples/list_examples.py
frutta = ["mela", "banana", "pera"]
frutta.append("kiwi")           # ['mela', 'banana', 'pera', 'kiwi']
prime_due = frutta[:2]          # slicing → ['mela', 'banana']
ha_mela = "mela" in frutta      # True (ricerca lineare O(n))

# Comprehension: trasformazioni veloci
lunghezze = [len(x) for x in frutta]  # [4, 6, 4, 4]

# Modifica in place
frutta[1] = "fragola"           # ['mela', 'fragola', 'pera', 'kiwi']
```

**Quando usarle**

* Sequenze che **cambiano** (aggiunte/rimozioni frequenti).
* Mantieni un **ordine preciso** (es. todo list da ordinare).

---

## Tuple (`tuple`) — sequenze ordinate e **immutabili**

Perfette per “record” compatti e stabili (non devono cambiare).

```python
# file: examples/tuple_examples.py
coordinate = (41.9028, 12.4964)     # lat, lon
lat, lon = coordinate               # unpacking
# coordinate[0] = 0  # ❌ TypeError: immutabile

# Possono essere chiavi di dict (sono hashable se contengono elementi hashable)
cache = {}
cache[(lat, lon)] = "Roma"
```

**Quando usarle**

* Coppie/terzetti **fissi** (x, y), (data, valore), ecc.
* Come **chiavi** nei `dict` quando ti serve una combinazione di più campi.

---

## Passo 3: Set (`set`) — collezioni **senza duplicati**, non ordinate

Rapidissimi per test di appartenenza e operazioni insiemistiche.

```python
# file: examples/set_examples.py
visti = {"rossi", "bianchi", "verdi"}
visti.add("blu")                 # {'rossi', 'verdi', 'bianchi', 'blu'} (ordine non garantito)
visti.add("rossi")               # nessun effetto (niente duplicati)

# Appartenenza: medio O(1), molto più veloce delle list per ricerche ripetute
"blu" in visti  # True

# Operazioni insiemistiche
primavera = {"margherita", "rosa", "tulipano"}
estate = {"rosa", "girasole"}

comuni = primavera & estate      # intersezione → {'rosa'}
tutti  = primavera | estate      # unione → {'margherita', 'rosa', 'tulipano', 'girasole'}

# Rimuovere duplicati da una lista
numeri = [1, 2, 2, 3, 3, 3]
unici = set(numeri)              # {1, 2, 3}
```

**Quando usarli**

* **Eliminare duplicati**.
* **Membership test** frequenti: “questo elemento è già stato visto?”

---

## Dizionari (`dict`) — mappa **chiave → valore**

Struttura base per dati etichettati. Mantiene l’**ordine di inserimento** (dalla 3.7 in poi).

```python
# file: examples/dict_examples.py
utente = {"nome": "Ada", "cognome": "Lovelace"}
utente["email"] = "ada@example.com"

# Accesso sicuro con default
lingua = utente.get("lingua", "it")  # "it" se non esiste

# Iterazione
for chiave, valore in utente.items():
    print(chiave, "→", valore)

# Dict comprehension: filtrare/trasformare
prezzi = {"mela": 1.0, "banana": 0.8, "pera": 1.2}
scontati = {k: round(v * 0.9, 2) for k, v in prezzi.items() if v >= 1.0}

# Merge (Python 3.9+): comodo in 3.12
a = {"x": 1}
b = {"y": 2}
unito = a | b                    # {'x': 1, 'y': 2}
```

**Quando usarli**

* Dati con **etichette** ben definite (config, profili, risultati API).
* Accesso rapido per **chiave**.

---

## Tabella decisione rapida

| Domanda                                      | Struttura consigliata | Motivo                           |
| -------------------------------------------- | --------------------- | -------------------------------- |
| L’ordine conta e aggiungo/rimuovo spesso?    | `list`                | Sequenza **mutabile** e ordinata |
| I dati sono fissi e voglio proteggerli?      | `tuple`               | **Immutabile**, adatta a record  |
| Mi servono elementi unici e ricerche veloci? | `set`                 | **Unicità** + membership O(1)    |
| Ho coppie chiave→valore?                     | `dict`                | Mappa espressiva e veloce        |

---

## Test rapidi (opzionale, solo standard library)

```python
# file: tests/test_collections_basics.py
import unittest

class TestCollectionsBasics(unittest.TestCase):
    def test_list(self):
        xs = [1, 2]
        xs.append(3)
        self.assertEqual(xs, [1, 2, 3])
        self.assertTrue(2 in xs)

    def test_tuple(self):
        t = (1, 2)
        a, b = t
        self.assertEqual(a + b, 3)
        with self.assertRaises(TypeError):
            # Immutabilità
            t[0] = 0  # type: ignore[index]

    def test_set(self):
        s = {1, 1, 2}
        self.assertEqual(s, {1, 2})
        self.assertTrue(2 in s)
        self.assertEqual({1, 2} | {2, 3}, {1, 2, 3})

    def test_dict(self):
        d = {"a": 1}
        d["b"] = 2
        self.assertEqual(d.get("c", 0), 0)
        self.assertEqual(({"x": 1} | {"y": 2}), {"x": 1, "y": 2})

if __name__ == "__main__":
    unittest.main()
```

Esecuzione:

```bash
python -m unittest -q
```

---

## Errori comuni & Debug

* **Aspettarsi ordine dai `set`** → i `set` sono **non ordinati**; se serve, usa `sorted(mio_set)`.
* **Usare liste come chiavi di `dict` o elementi di `set`** → ❌ non sono hashable; usa `tuple`.
* **Default mutabili nei parametri funzione**:

  ```python
  # ❌
  def add(x, xs=[]): ...
  # ✅
  def add(x, xs=None):
      xs = [] if xs is None else xs
  ```
* **Cercare membership con `list` quando servono prestazioni** → per ricerche ripetute, preferisci `set`/`dict`.

---

## Best practice & Varianti

* Preferisci **comprehension** per trasformazioni concise: `[...]`, `{...}`, `{k: v ...}`.
* Usa `enumerate(lista)` invece di `range(len(lista))`.
* Per copie **shallow**:

  * `lista.copy()`, `tuple(lista)`, `set(altro_set)`, `dict(altro_dict)`.
* Normalizza i dati se usi `set`/`dict` (es. `.lower().strip()`) per confronti coerenti.
* Se ti serve **ordine + unicità**, combina `dict.fromkeys(lista)` o usa `OrderedDict` (ancora in `collections`, anche se `dict` moderno preserva l’ordine d’inserimento).

---

## Collegamenti utili

* Interno: [Funzioni base in Python](/python-funzioni-base)
* Interno: [Controllo di flusso in Python](/python-controllo-flusso)
* Esterno: [Python Docs — Built-in Types](https://docs.python.org/3/library/stdtypes.html)
* Esterno: [Python Docs — Data Structures](https://docs.python.org/3/tutorial/datastructures.html)

---

## Conclusione & Next steps


Ora che hai il quadro chiaro, **scrivi 3 esempi tuoi** (uno con `list`, uno con `set`, uno con `dict`) e **confrontali** con la guida. Piccolo esercizio: prendi una lista con duplicati, rimuovi i doppioni con un `set`, ordina il risultato e mappa ogni elemento alla sua lunghezza con un `dict`. Buon Python!
