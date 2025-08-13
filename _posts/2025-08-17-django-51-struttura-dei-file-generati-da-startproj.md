---
title: 'Django 5.1: struttura dei file generati da startproject e startapp (conesempi pratici)'
date: '2025-08-17T09:59:42+00:00'
slug: django-51-struttura-dei-file-generati-da-startproject-e-startapp-con-esempi-pratici
description: "Guida pratica alla struttura dei file creati da Django 5.1 con startproject e startapp: cosa fa ogni file, come collegare l’app, dove mettere template e static."
tags:
- python
- django
- project-structure
- beginner
categories:
- django
canonical: https://matteoricci.net/blog/it/2025/08/17/django-51-struttura-dei-file-generati-da-startproj.html
meta_title: 'Django 5.1: struttura dei file generati da startproject e startapp…
meta_description: 'Django 5.1: struttura dei file generati da startproject e startapp con esempi pratici'
meta_keywords: django
og_title: 'Django 5.1: struttura dei file generati da startproject e startapp'
og_description: 'Django 5.1: struttura dei file generati da startproject e startappcon esempi pratici'
og_image: ''
noindex: false
reading\_time: "9 min"
---

# Django 5.1: struttura dei file generati da `startproject` e `startapp`

> **Sommario**: In questa guida vediamo **cosa crea Django** quando lanci `startproject` e `startapp`, **a cosa serve ogni file**, e come **agganciare** l’app al progetto con il minimo indispensabile per avviare server, view, template e migrazioni.

**Assunzioni**

* Python/Django: **Python 3.12**, **Django 5.1**
* Livello: **beginner**
* Vincoli: **solo stdlib + Django**, nessun servizio esterno

**Prerequisiti**

* Python 3.12, Django 5.1, venv, pip
* Comandi rapidi:

```bash
python -m venv .venv && source .venv/bin/activate
pip install "Django==5.1.*"
```

> Useremo il nome progetto `config` e l’app `blog`. Puoi cambiarli: i concetti non cambiano.

## Contesto / Perché

Capire **cosa genera** Django ti evita errori classici: app non registrate, URL non collegati, template non trovati, migrazioni dimenticate. Questa base è la **spina dorsale** su cui costruire tutto il resto (DRF, admin, autenticazione, ecc.).

---

## Passo 1: Crea il progetto (`startproject`)

```bash
django-admin startproject config .
```

> Il punto finale `.` dice “crea i file **qui**” senza annidare una cartella esterna.

Struttura creata:

```
.
├── manage.py
└── config/
    ├── __init__.py
    ├── asgi.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py
```

**A cosa serve ogni file**

* **manage.py**: entrypoint CLI. Avvia server, crea migrazioni, shell, ecc.
* **config/**init**.py**: rende `config` un package Python.
* **config/settings.py**: **configurazione** del progetto (app installate, DB, template, static, sicurezza).
* **config/urls.py**: **mappa URL → view** di progetto. Qui includerai gli URL delle app.
* **config/asgi.py**: entrypoint **ASGI** (async). Utile per WebSocket/async server.
* **config/wsgi.py**: entrypoint **WSGI** (sync). Usato da molti server di deploy.

Avvia per test:

```bash
python manage.py runserver
```

Se vedi la pagina di benvenuto, il progetto base è ok.

---

## Passo 2: Crea un’app (`startapp`) e registrala

```bash
python manage.py startapp blog
```

Struttura app:

```
blog/
├── __init__.py
├── admin.py
├── apps.py
├── migrations/
│   └── __init__.py
├── models.py
├── tests.py
└── views.py
```

**A cosa serve**

* **apps.py**: metadati dell’app (`BlogConfig`). Django la usa per registrarla.
* **models.py**: definisci i **modelli** (tabelle).
* **views.py**: funzioni/classi che rispondono alle richieste HTTP.
* **admin.py**: registrazione modelli nell’**admin**.
* **migrations/**: contiene le versioni dello schema DB.
* **tests.py**: test minimi (puoi preferire una cartella `tests/`).

**Registra l’app in settings**

```python
# file: config/settings.py
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "blog",  # <— la tua app
]
```

---

## Passo 3: Collega URL di progetto e app

Crea gli URL dell’app:

```python
# file: blog/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
]
```

Crea una view minimale:

```python
# file: blog/views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse("Ciao dal blog!")
```

Includi gli URL dell’app nel router di progetto:

```python
# file: config/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("blog.urls")),  # homepage → blog.home
]
```

Test rapido:

```bash
python manage.py runserver
# visita http://127.0.0.1:8000/
```

---

## Passo 4: Template e static (il minimo indispensabile)

Aggiungi una cartella template di progetto:

```
templates/
└── blog/
    └── home.html
```

```html
<!-- file: templates/blog/home.html -->
<h1>Benvenuto!</h1>
<p>Questa è una pagina HTML servita da Django.</p>
```

Configura `TEMPLATES`:

```python
# file: config/settings.py
from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],  # <— aggiunto
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]
```

Usa il template nella view:

```python
# file: blog/views.py
from django.shortcuts import render

def home(request):
    return render(request, "blog/home.html")
```

---

## Passo 5: Un modello, migrazioni & admin (facoltativo ma utile)

Definisci un modello base:

```python
# file: blog/models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
```

Migrazioni:

```bash
python manage.py makemigrations
python manage.py migrate
```

Admin:

```python
# file: blog/admin.py
from django.contrib import admin
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "published", "created_at")
    list_filter = ("published",)
    search_fields = ("title",)
```

Crea superuser e prova:

```bash
python manage.py createsuperuser
python manage.py runserver
# visita /admin
```

---

## Test rapidi (opzionale, built-in test runner)

```python
# file: blog/tests.py
from django.test import TestCase
from django.urls import reverse

class HomeUrlTests(TestCase):
    def test_home_status_code(self):
        resp = self.client.get(reverse("home"))
        self.assertEqual(resp.status_code, 200)
```

Esecuzione:

```bash
python manage.py test
```

---

## Errori comuni & Debug

* **Ho creato il progetto senza punto** → Hai una cartella in più. Soluzioni: ricrea con `.` o sposta i file.
* **App non registrata** → `ModuleNotFoundError` o view non risolta: aggiungi `"blog"` in `INSTALLED_APPS`.
* **Template non trovato** → Assicurati `DIRS=[BASE_DIR/"templates"]`, `APP_DIRS=True` e path `blog/home.html` corretto.
* **Dimenticate migrazioni** → `no such table`: esegui `makemigrations` + `migrate`.
* **URL non collegati** → manca `include("blog.urls")` in `config/urls.py`.
* **Import relativi errati** → usa `from . import views` in `blog/urls.py`.

---

## Best practice & Varianti

* **Organizza per app**: una app per “dominio” (es. `accounts`, `blog`, `payments`). Evita “mega-app” tutto dentro.
* **Cartella `tests/`**: preferibile a `tests.py` singolo. Es: `tests/test_views.py`, `tests/test_models.py`.
* **Template per app**: `templates/<app>/<file>.html` riduce collisioni di nomi template.
* **Settings modulari (consigliato)**: separa `base.py`, `dev.py`, `prod.py` e seleziona via `DJANGO_SETTINGS_MODULE`. Eviti `DEBUG=True` in prod e gestisci credenziali via variabili d’ambiente.
* **Sicurezza**: in produzione imposta `DEBUG=False`, `ALLOWED_HOSTS`, nascondi `SECRET_KEY`, attiva HTTPS/CSRF.
* **Static & Media**: definisci `STATIC_URL`, `STATICFILES_DIRS`, `MEDIA_URL`, `MEDIA_ROOT`. Usa `collectstatic` in deploy.
* **Pronto per DRF**: se farai API, aggiungi `djangorestframework`, serializer e viewset con router (non coperto qui).

---

## Collegamenti utili

* Interno: [Impostazioni Django per la produzione](/gestione-settings-prod)

* Interno: [Ottimizzare query con l’ORM](/django-orm-join-ottimizzati)

* Interno: [Funzioni base in Python](/python-funzioni-base)

* Interno: [Controllo di flusso in Python](/python-controllo-flusso)

* Esterno: [Documentazione ufficiale `startproject`](https://docs.djangoproject.com/en/stable/intro/tutorial01/)

* Esterno: [Struttura delle app e `startapp`](https://docs.djangoproject.com/en/stable/intro/reusable-apps/)

---

## Conclusione & Next steps

Hai visto **cosa genera Django** e come **collegare tra loro** progetto, app, URL, template e (facoltativamente) un modello con admin.
**Prossimi passi**: crea una seconda app (es. `accounts`), sposta i test in `tests/`, e valuta **settings modulari** per sviluppo/produzione.


**CTA**: crea il tuo mini‐progetto con `blog` seguendo la guida, poi **aggiungi un modello** e una pagina lista dei post. Quando funziona, condividi i test e confrontali con questa guida.
