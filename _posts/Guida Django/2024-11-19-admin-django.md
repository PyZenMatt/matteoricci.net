---
layout: post
title: "Configurazione dell'Admin di Django"
description: "Scopri come iniziare a programmare con Django. Una guida introduttiva per principianti ed imparare le basi e costruire applicazioni web."
image: assets/images/
author: "Teo"
categories: guida_django
tags: django
featured: false
keywords: "django, guida, tutorial django"
hidden: true
---


In questo post, esploreremo come configurare e personalizzare l'interfaccia di amministrazione in Django, un potente framework per lo sviluppo web utilizzato per realizzare applicazioni web dinamiche e robuste. Questo tutorial è pensato per utenti che operano su sistemi basati su Ubuntu Linux.

### Introduzione all'interfaccia di amministrazione di Django

L'interfaccia di amministrazione di Django è una delle sue caratteristiche più notevoli. Fornisce una interfaccia web pronta all'uso per gestire il contenuto del sito, permettendo agli sviluppatori di interagire con i modelli definiti nell'applicazione direttamente tramite un browser web.
Configurazione dell'Admin

Per iniziare a utilizzare l'admin di Django, devi seguire alcuni passaggi fondamentali:

### Creazione di un superutente

Dopo aver impostato il tuo progetto Django, devi creare un superutente che avrà accesso completo all'interfaccia di amministrazione. Apri il terminale e naviga alla directory del tuo progetto, poi esegui il comando:

    python manage.py createsuperuser

Segui le istruzioni a schermo per impostare username, email e password.

### Attivazione dell'interfaccia admin

Assicurati che l'app django.contrib.admin sia abilitata nel file settings.py del tuo progetto:

```py

INSTALLED_APPS = [
    ...
    'django.contrib.admin',
    ...
]
```

Verifica anche che urls.py del tuo progetto includa un riferimento all'admin:

    from django.contrib import admin
    from django.urls import path

    urlpatterns = [
        path('admin/', admin.site.urls),
        ...
    ]

### Avvio del server

Per accedere all'interfaccia di amministrazione, avvia il server di sviluppo con:

        python manage.py runserver

Naviga a http://127.0.0.1:8000/admin e accedi utilizzando le credenziali del superutente.

### Personalizzazione dell'interfaccia Admin

La personalizzazione dell'interfaccia di amministrazione è semplice grazie alla flessibilità di Django:

### Registrazione dei modelli

Per aggiungere un modello alla pagina di amministrazione, apri il file admin.py nella tua app e registra il tuo modello con il seguente codice:

    from django.contrib import admin
    from .models import MioModello

    admin.site.register(MioModello)

Modifica dell'aspetto e del comportamento

Puoi personalizzare ulteriormente l'interfaccia admin modificando i moduli di amministrazione:

        class MioModelloAdmin(admin.ModelAdmin):
            list_display = ('campo1', 'campo2')
            search_fields = ['campo1', 'campo2']

        admin.site.register(MioModello, MioModelloAdmin)

### Gestione di utenti e permessi

Django offre un sistema di autenticazione e autorizzazione integrato che ti permette di gestire facilmente utenti e permessi:

Utenti: Puoi aggiungere, modificare ed eliminare utenti tramite l'interfaccia admin.

Gruppi: Organizza gli utenti in gruppi per gestire permessi simili.

Permessi: Assegna permessi specifici agli utenti o gruppi per controllare l'accesso alle funzionalità del tuo sito.

Questo tutorial ha introdotto le basi della configurazione e della personalizzazione dell'admin di Django su un sistema Ubuntu Linux, preparandoti a sfruttare al meglio questa potente funzionalità.

[Views e Template]({{sitebase.url}}/views-e-template/)