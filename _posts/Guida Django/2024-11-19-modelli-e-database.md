---
layout: post
title: "Modelli e database"
description: "Scopri come iniziare a programmare con Django. Una guida introduttiva per principianti ed imparare le basi e costruire applicazioni web."
image: assets/images/
author: "Teo"
categories: guida_django
tags: django
featured: false
keywords: "django, guida, tutorial django"
hidden: true
---

Modelli e Database in Django

Nel mondo dello sviluppo web con Django, una comprensione solida dei modelli e della gestione del database è fondamentale. In questo post, esploreremo come Django gestisce i dati attraverso i modelli, le migrazioni e l'ORM. Questo tutorial è destinato a chi utilizza il sistema operativo Linux Ubuntu.
Definizione dei Modelli per Rappresentare i Dati

In Django, i modelli sono le strutture che definiscono la forma dei dati che intendi salvare nel tuo database. Un modello in Django è una classe Python che eredita da django.db.models.Model e definisce le caratteristiche dei dati attraverso vari attributi di campo.

Ogni campo del modello rappresenta una colonna nel database e può contenere dati di diversi tipi, come CharField per testo breve, IntegerField per numeri interi, o DateField per le date. Qui di seguito è mostrato un esempio semplice di un modello per un blog:
```py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    published_date = models.DateField(auto_now_add=True)
```

Uso delle Migrazioni per Sincronizzare il Database

Le migrazioni sono uno strumento potente di Django che permette di evolvere il database di un'applicazione nel tempo. Quando apporti modifiche ai modelli, Django può generare automaticamente script di migrazione che modificano lo schema del database senza perdere dati.

Per creare una migrazione, usa il comando:
```py
python manage.py makemigrations
```

Questo comando genererà file di migrazione che descrivono come applicare e annullare le modifiche apportate ai tuoi modelli. Per applicare le migrazioni al database, esegui:
```py
python manage.py migrate
```

### Introduzione all'ORM di Django per Interagire con il Database

L'Object-Relational Mapping (ORM) di Django è uno strumento che ti consente di interagire con il database in maniera intuitiva. Attraverso l'ORM, puoi eseguire query, aggiungere, modificare e cancellare dati dal database, tutto utilizzando codice Python. Ecco un esempio di come potresti aggiungere un nuovo post al database:

```py
from myapp.models import Post

new_post = Post(title='Il mio primo post', content='Benvenuti nel mio blog.')
new_post.save()
```

### Relazioni tra Modelli

I modelli possono anche essere collegati tra loro attraverso relazioni come ForeignKey (relazione uno-a-molti), ManyToMany (molti-a-molti) e OneToOne (uno-a-uno). Queste relazioni ti permettono di rappresentare relazioni complesse nei tuoi dati.

```py
class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    text = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)
```

In questo esempio, ogni commento è collegato a un singolo post tramite una ForeignKey.

Utilizzando queste tecniche, puoi costruire applicazioni robuste e scalabili con Django su un sistema operativo Linux Ubuntu, sfruttando appieno le potenzialità di questo framework.

Con queste basi, sei pronto per esplorare ulteriori aspetti della programmazione con Django, come la gestione delle form, l'autenticazione degli utenti, e molto altro.

[Admin di Django]({{sitebase.url}}/admin-django/)