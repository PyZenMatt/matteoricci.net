---
title: 'Tipi di dato base in Python: str, int, float, bool (con esempi chiari)'
date: 2025-08-12 08:00:00 +0200
slug: tipi-di-dato-base-in-python-str-int-float-bool-con-esempi-chiari
description: 'Guida pratica ai tipi di dato base in Python 3.12: stringhe, interi,
  float e booleani. Operazioni comuni, conversioni, errori frequenti e best practice.'
tags: python, basi, tipi-di-dato
categories:
- python
image: https://res.cloudinary.com/dkoc4knvv/image/upload/v1/
canonical: https://matteoricci.net/blog/it/tipi-di-dato-base-python-str-int-float-bool
meta_title: 'Tipi di dato base in Python: str, int, float, bool (con esempi chiari)'
meta_description: 'Guida pratica ai tipi di dato base in Python 3.12: stringhe, interi,
  float e booleani. Operazioni comuni, conversioni, errori frequenti e best practice.'
meta_keywords: python, basi, tipi-di-dato
og_title: 'Tipi di dato base in Python: str, int, float, bool (con esempi chiari)'
og_description: 'Guida pratica ai tipi di dato base in Python 3.12: stringhe, interi,
  float e booleani. Operazioni comuni, conversioni, errori frequenti e best practice.'
og_image: ''
noindex: false
date: "2025-08-13"
lang: it
reading\_time: "6 min"
---

# Tipi di dato base in Python: str, int, float, bool

> **Sommario**: in questa guida impari a usare i quattro tipi fondamentali di Python—**stringhe**, **interi**, **float** e **booleani**—con esempi minimi ma completi: operazioni, conversioni (`int()`, `float()`, `str()`, `bool()`), errori frequenti e buone pratiche.

**Assunzioni**

* Python: 3.12
* Livello: beginner
* Vincoli: solo standard library

**Prerequisiti**

* Python 3.12 installato, opzionale `venv`, `pip`.
* Comandi rapidi:

```bash
python -m venv .venv && source .venv/bin/activate
python --version
```

## Contesto / Perché

Capire i tipi di dato base è il primo passo per scrivere codice affidabile. Questi quattro tipi coprono l’80% dei casi: testi (`str`), numeri interi (`int`), numeri con virgola (`float`) e logica booleana (`bool`). Sapere come si comportano evita bug tipici (es. arrotondamenti strani o confronti che falliscono).

---

## Stringhe (`str`)

Le stringhe sono **immutabili** (ogni modifica crea una nuova stringa). Supportano indicizzazione, slicing e molti metodi utili.

```python
# file: examples/strings_basics.py
name = "Ada Lovelace"

# indicizzazione e slicing
initial = name[0]           # 'A'
surname = name.split()[1]   # 'Lovelace'
first_three = name[:3]      # 'Ada'

# metodi utili
clean = "  Hello  ".strip()         # 'Hello'
lowered = "PyThOn".lower()          # 'python'
parts = "a,b,c".split(",")          # ['a', 'b', 'c']
joined = "-".join(parts)            # 'a-b-c'

# f-string per formattazione
age = 28
msg = f"{name} aveva {age} anni"
```

**Note**

* Le `f-string` sono preferibili a `format()` per leggibilità.
* Usa slicing con passo: `"abcdef"[::2]` → `'ace'`.

---

## Numeri interi (`int`) e in virgola mobile (`float`)

Gli interi non hanno limiti pratici (se non la memoria). I `float` usano la rappresentazione IEEE 754: comoda ma a volte **imprecisa**.

```python
# file: examples/numbers_basics.py
a, b = 7, 3

# operazioni base
sum_ = a + b          # 10
diff = a - b          # 4
prod = a * b          # 21
div = a / b           # 2.3333333333333335 (float)
floordiv = a // b     # 2 (intero)
mod = a % b           # 1
power = a ** b        # 343

# attenzione ai float
x = 0.1 + 0.2         # 0.30000000000000004
round_x = round(x, 2) # 0.3
```

Se ti serve **precisione finanziaria**, usa `decimal.Decimal` inizializzando **da stringa**:

```python
# file: examples/decimal_money.py
from decimal import Decimal, getcontext
getcontext().prec = 28

price = Decimal("19.99")
tax = Decimal("0.22")
total = price * (Decimal("1") + tax)  # Decimal preciso
```

---

## Booleani (`bool`) e “truthiness”

`True` e `False` sono tipi booleani. Qualsiasi oggetto può essere valutato come vero/falso:

* **Falso**: `0`, `0.0`, `""`, `[]`, `{}`, `set()`, `None`, `False`
* **Vero**: tutto il resto

```python
# file: examples/bool_basics.py
is_admin = False
has_token = "abc123"

if is_admin or has_token:
    allowed = True
else:
    allowed = False

# confronti e chaining
a, b, c = 2, 2, 5
res = (a == b < c)  # True: a == b and b < c

# not, and, or sono short-circuit
def heavy():
    print("calcolo pesante")
    return True

ok = True or heavy()  # heavy() non viene chiamata
```

**Nota**: nei confronti con `None` usa `is`/`is not`:

```python
value = None
if value is None:
    ...
```

---

## Conversioni e parsing

Le funzioni **costruttore** convertono valori tra tipi. Attenzione agli input non validi.

```python
# file: examples/casting_parsing.py
# da str a numeri
n = int("42")          # 42
pi = float("3.14")     # 3.14

# errori comuni
# int("3.0") -> ValueError (non intero puro)
# float("3,14") -> ValueError (virgola italiana)

# da valori a stringa
s1 = str(123)          # "123"
s2 = str(3.14)         # "3.14"

# bool() e truthiness
bool("")      # False
bool("0")     # True (stringa non vuota!)
bool(0)       # False
bool(1)       # True

# parsing sicuro con fallback
def to_int_safe(text: str, default: int | None = None) -> int | None:
    try:
        return int(text)
    except ValueError:
        return default
```

---

## Test rapidi (opzionale)

```python
# file: tests/test_basic_types.py
import math
from decimal import Decimal

def test_str_ops():
    s = " Python "
    assert s.strip().lower() == "python"
    assert "-".join(["a", "b", "c"]) == "a-b-c"

def test_numbers_ops():
    a, b = 7, 3
    assert a // b == 2
    assert a % b == 1
    assert math.isclose(0.1 + 0.2, 0.3, rel_tol=1e-9)

def test_decimal_precision():
    total = Decimal("19.99") * (Decimal("1") + Decimal("0.22"))
    assert str(total) == "24.388"  # nessun errore binario

def test_bool_truthiness():
    assert not bool("")
    assert bool("0")  # stringa non vuota -> True
    assert not bool(0)
    assert bool(1)

def test_safe_int():
    from examples.casting_parsing import to_int_safe
    assert to_int_safe("42") == 42
    assert to_int_safe("3.0") is None
```

Esecuzione:

```bash
pytest -q
```

---

## Errori comuni & Debug

* **`0.1 + 0.2 != 0.3`** → usa `round()` o confronti con `math.isclose()`. Per soldi usa `Decimal`.
* **`int("3.0")`** → `ValueError`: converti con `float()` e poi eventualmente casta, o valida l’input.
* **`bool("False")` è `True`** → ogni stringa non vuota è vera; se parsifichi booleani, mappa esplicitamente `"true"/"false"`.
* **Mutabilità confusa** → `str` è immutabile: metodi come `.replace()` restituiscono **nuove** stringhe.

---

## Best practice & Varianti

* Preferisci **f-string**: `f"{name=}"` durante il debug mostra `name='Ada'`.
* Per importi monetari o somme accumulate, usa **`decimal.Decimal`** con input **stringa**.
* Confronta con `None` usando **`is`/`is not`**.
* Usa `math.isclose()` per confronti tra `float`.
* Valida gli input esterni prima del cast e gestisci le eccezioni.

---

## Collegamenti utili

* Interno: [Funzioni base in Python](https://matteoricci.net/blog/it/2025/08/13/tipi-di-dato-base-in-python-list-tuple-set-e-dict-differenze-e-quando-usarli/)
* Interno: [Cos'è Django e come usarlo](https://matteoricci.net/blog/it/2025/08/07/cose-django-e-perche-usarlo/)
* Esterno: [Python Docs – Built-in Types](https://docs.python.org/3/library/stdtypes.html)
* Esterno: [Python Docs – `decimal`](https://docs.python.org/3/library/decimal.html)

---

## Conclusione & Next steps

Hai visto l’essenziale di `str`, `int`, `float`, `bool`. Prossimo passo: **scrivi 3 snippet tuoi** (uno per tipo) con input dell’utente, conversione sicura e messaggio finale. Poi confrontali con gli esempi qui sopra e ottimizzali.

Buon Python!

Matteo Ricci
