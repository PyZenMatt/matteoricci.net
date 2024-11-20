---
layout: post
title: "Introduzione a Django"
description: "Introduzione a Django per principianti: cos'è, come funziona e perché usarlo. La guida perfetta per iniziare con questo framework potente e scalabile."
image: assets/images/
author: "Teo"
categories: guida_django
tags: django
featured: false
keywords: "django, guida, tutorial django"
hidden: true
---


## Cos'è Django e perché sceglierlo

[Django](https://www.djangoproject.com/) è un framework web ad alto livello scritto in Python che incoraggia lo sviluppo rapido e la progettazione pulita e pragmatica. Nato nel 2005, Django si propone di facilitare lo sviluppo di siti web complessi, con particolare attenzione alla "velocità di sviluppo" e al "principio non ripetere te stesso" (DRY).

Uno dei principali vantaggi di Django è la sua architettura robusta che supporta lo sviluppo di applicazioni web di qualsiasi dimensione, da piccoli progetti personali a grandi portali aziendali. Grazie alla sua vasta libreria di moduli incorporati, Django permette agli sviluppatori di implementare funzionalità come l'autenticazione utente, la mappatura degli URL, i moduli di amministrazione e molto altro, in modo semplice ed efficace.

### Perché scegliere Django?

- **Efficienza**: Automatizza molti compiti che altrimenti sarebbero ripetitivi e noiosi.
- **Sicurezza**: Incorpora funzionalità per prevenire molti problemi di sicurezza, come l'iniezione di SQL, cross-site scripting, forgery di richieste tra siti e altro.
- **Scalabile**: Adatto per gestire sia piccoli che grandi progetti.
- **Versatile**: Perfetto per sviluppare qualsiasi tipo di sito web, dai social network ai sistemi di gestione dei contenuti.

## Architettura Model-View-Template (MVT)

L'architettura **Model-View-Template (MVT)** di Django è un variazione del più comune Model-View-Controller (MVC). La differenza principale risiede nel modo in cui la logica viene gestita dall'architettura:

- **Model**: Definisce la struttura dei dati. Il modello interagisce con il database e gestisce la validità, le relazioni e altre logiche di business.
- **View**: Gestisce la logica di business e interagisce con i modelli per passare informazioni ai template.
- **Template**: Presenta le informazioni all'utente, definendo come l'output è presentato in formato HTML o in altri formati.

## Configurazione dell'ambiente di sviluppo su Ubuntu

Per iniziare con Django su un sistema Linux Ubuntu, segui questi passaggi per configurare il tuo ambiente di sviluppo:

1. Installa Python e pip (Python Package Installer):
   ```py
   sudo apt update
   sudo apt install python3 python3-pip
   ```

    Installa Django tramite pip:
```py
pip3 install django
```
Verifica l'installazione:
```py
    django-admin --version
```
Questo comando dovrebbe restituire la versione di Django che hai installato, confermando che l'installazione è andata a buon fine.
Creazione del primo progetto e di una app

Dopo aver configurato l'ambiente, è il momento di creare il tuo primo progetto Django:

Crea un nuovo progetto Django:

```py
django-admin startproject mio_progetto
```
Sposta il terminale nella cartella del progetto:
```py
cd mio_progetto
```
Avvia il server di sviluppo per vedere il tuo progetto in azione:
```py
    python3 manage.py runserver
```
Apri il browser all'indirizzo http://127.0.0.1:8000/ per vedere la pagina di benvenuto di Django.

Per creare una nuova app all'interno del progetto:

Mentre sei nella directory del progetto, esegui:

```py
    python3 manage.py startapp mia_app
```

Aggiungi la tua app alla lista INSTALLED_APPS nel file settings.py del tuo progetto per assicurarti che Django la riconosca.

Ora sei pronto per iniziare a sviluppare con Django! Con queste basi, puoi esplorare ulteriormente le potenzialità di Django e iniziare a costruire le tue applicazioni web.

[Modelli e Database]({{sitebase.url}}/modelli-e-database/)