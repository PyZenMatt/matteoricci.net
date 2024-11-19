---
layout: post
title: "Views e template in django"
description: "Scopri come iniziare a programmare con Django. Una guida introduttiva per principianti ed imparare le basi e costruire applicazioni web."
image: assets/images/
author: "Teo"
categories: guida_django
tags: django
featured: false
keywords: "django, guida, tutorial django"
hidden: true
---


## Views e Template in Django

Nel framework Django, **le views** e **i template** sono due componenti fondamentali che lavorano insieme per presentare dati agli utenti in modo dinamico. Questo tutorial spiega come creare viste, utilizzare i template, e passare dati tra di loro, tutto su un sistema operativo Ubuntu Linux.

### Creazione di Views in Django

Una *view* in Django è una funzione Python che prende una richiesta web e restituisce una risposta. Le views gestiscono la logica necessaria per presentare i dati richiesti dall'utente, che possono essere caricati da un modello o semplicemente definiti all'interno della view stessa.

Per creare una view, definisci una funzione nel tuo file `views.py` all'interno dell'applicazione Django. Ecco un esempio semplice:

{% raw %}
```python
from django.http import HttpResponse

def home(request):
    return HttpResponse("Benvenuto nella homepage!")
```

{% endraw %}

Questa view restituisce un semplice messaggio di benvenuto quando viene visitata la homepage del tuo sito.
Utilizzo dei Template

I template in Django sono file di testo che permettono di separare la logica di programmazione dalla presentazione HTML. Utilizzano un linguaggio di template speciale che permette di inserire dati dinamici che vengono passati dalla view.

Per utilizzare un template, prima crea un file HTML all'interno della directory templates della tua app. Per esempio, home.html potrebbe avere questo aspetto:
{% raw %}
```py
<html>
<head>
    <title>Home</title>
</head>
<body>
    <h1>{{ messaggio }}</h1>
</body>
</html>
{% endraw %}
```

### Collegamento dei Template alle Views

Per passare dati da una view a un template, utilizza il contesto di rendering. Modifica la tua view per passare un dizionario di dati al template, come segue:

{% raw %}
```python
from django.shortcuts import render
def home(request):
    context = {'messaggio': 'Benvenuto nella homepage!'}
    return render(request, 'home.html', context)
```
{% endraw %}
## Uso di Tag e Filtri nei Template

I template Django offrono tag e filtri che possono essere utilizzati per eseguire logica semplice, come cicli o condizioni, e per modificare i dati prima di visualizzarli (ad esempio, formattare date, numeri, ecc.).

Per esempio, per iterare su una lista di elementi nel tuo template, puoi usare il tag 

{% raw %}{% for %}:
{% endraw %}

{% raw %}
```python
<ul>
    {% for item in lista_elementi %}
        <li>{{ item }}</li>
    {% endfor %}
</ul>
```
{% endraw %}

I filtri vengono applicati ai dati del template usando il carattere pipe |. Per esempio, per convertire una stringa in maiuscolo:

{% raw %}

<p>{{ messaggio|upper }}</p>
{% endraw %}

### Conclusioni

Le views e i template sono essenziali per lo sviluppo di applicazioni web con Django, permettendo di separare la logica di business dalla presentazione dell'interfaccia utente. Utilizzando Ubuntu Linux come sistema operativo, puoi sfruttare le potenzialità di Django per sviluppare applicazioni robuste e scalabili.

Questo tutorial ti offre una panoramica su come implementare le viste e i template in Django. Segui questi passaggi per iniziare a costruire la tua applicazione Django su Ubuntu Linux.

[Autenticazione e Autorizzazione]({{sitebase.url}}/autenticazione-e-autorizzazione/)