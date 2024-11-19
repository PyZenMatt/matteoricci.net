---
layout: post
title: "Django Forms"
description: "Scopri come iniziare a programmare con Django. Una guida introduttiva per principianti ed imparare le basi e costruire applicazioni web."
image: assets/images/
author: "Teo"
categories: guida_django
tags: django
featured: false
keywords: "django, guida, tutorial django"
hidden: true
---

### Introduzione ai Django Forms

Django Forms è uno strumento essenziale per qualsiasi sviluppatore web che utilizza il framework Django per creare applicazioni web interattive. In questo tutorial, esploreremo come creare, validare e gestire form in Django, fornendo agli utenti un'interfaccia intuitiva per l'input dei dati. Questo articolo è pensato per essere una guida introduttiva all'uso dei Django Forms e assume che tu stia lavorando su un sistema Linux Ubuntu.

### Cosa sono i Django Forms?

Django Forms è una libreria integrata nel framework Django che facilita la raccolta e la validazione dei dati degli utenti tramite form HTML. Utilizzando Django Forms, puoi ridurre significativamente il codice boilerplate necessario per creare form sicuri e user-friendly.
Perché usare Django Forms?

### Utilizzare Django Forms offre diversi vantaggi:

Validazione dei dati: Django Forms gestisce la validazione lato server, garantendo che i dati inviati dagli utenti siano corretti e sicuri prima di essere elaborati o salvati.
    
Riduzione del codice: Con i form Django, il codice necessario per generare form HTML, raccogliere dati grezzi, e convertirli in tipi Python utilizzabili è notevolmente ridotto.
    
Riutilizzabilità: I form possono essere definiti una volta e riutilizzati in diverse parti dell'applicazione, mantenendo il codice organizzato e DRY (Don't Repeat Yourself).

### Creazione di un Form in Django

Per creare un form in Django, inizia definendo una classe Form che eredita da django.forms.Form. Ecco un semplice esempio di un form per la raccolta di un nome utente e una password:
```py
from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(label='Username', max_length=100)
    password = forms.CharField(widget=forms.PasswordInput())
```
In questo esempio, username è un campo di testo e password è un campo di password, il quale nasconde l'input visualizzato grazie a forms.PasswordInput().

### Validazione dei Dati

Django fornisce una validazione automatica di base, ma puoi anche definire metodi di validazione personalizzati. Per aggiungere una validazione personalizzata al campo username, puoi definire un metodo nella tua classe form che segue il formato clean_<fieldname>():
```py
def clean_username(self):
    data = self.cleaned_data['username']
    if "Django" in data:
        raise forms.ValidationError("Username non può contenere 'Django'")
    return data
```

Questo metodo controlla se la parola "Django" è presente nel nome utente e, in tal caso, solleva un errore di validazione.
Gestione del Form nel View

Per utilizzare il form in una vista, devi gestire sia le richieste GET che POST. Ecco come potresti configurare una vista per utilizzare il LoginForm:
```py
from django.shortcuts import render
from .forms import LoginForm

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            # Processa i dati in form.cleaned_data
            # (ad esempio autenticazione dell'utente)
            return redirect('success_url')
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})
```

In questa vista, il form viene inizializzato vuoto per le richieste GET, mentre per le richieste POST il form viene popolato con i dati inviati e validato. Se la validazione riesce, i dati possono essere processati ulteriormente.
Conclusione

I Django Forms sono uno strumento potente che semplifica la gestione dei dati degli utenti nelle applicazioni web. Con essi, puoi facilmente creare form sicuri e validare i dati con minimi sforzi, migliorando l'efficienza dello sviluppo e l'integrità dell'applicazione. Continua a esplorare le funzionalità dei Django Forms per sfruttare appieno il loro potenziale nel tuo progetto Django.

[Testing in Django]({{sitebase.url}}/testing-in-django/)