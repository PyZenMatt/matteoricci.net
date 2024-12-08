---
layout: post
title: "Routing in Vue.js: Creare SPA con Vue Router"
author: Teo
categories: 
image: 
featured: 
description: "Scopri come utilizzare Vue Router per gestire percorsi, parametri e navigazioni programmate in applicazioni Single Page."
hidden: true
Introduzione a Vue: 
---

Il **routing** in un'applicazione Single Page Application (SPA) con Vue.js viene gestito principalmente attraverso Vue Router, un plugin ufficiale di Vue.js dedicato alla gestione delle navigazioni. 
Vue Router permette di creare e gestire il routing in modo dinamico, efficiente e scalabile. 

Ecco una guida dettagliata su come implementarlo e utilizzarlo per gestire percorsi e parametri.

#### 1. **Installazione e configurazione di Vue Router**
Per utilizzare Vue Router, è necessario prima installarlo. 
Se stai creando un nuovo progetto con Vue CLI, puoi includere Vue Router selezionandolo nelle opzioni quando inizi un nuovo progetto. Per un progetto esistente, puoi aggiungerlo tramite npm o yarn:

```bash
npm install vue-router
```

Dopo l'installazione, devi configurare il router importandolo nel tuo file principale (solitamente `main.js` o `main.ts`) e dicendogli quali percorsi (routes) deve gestire.

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import AboutComponent from './components/AboutComponent.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/about', component: AboutComponent }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
```

#### 2. **Modalità del Router**
Vue Router supporta diverse modalità di navigazione, di cui la principale è la `history` mode. Questa modalità sfrutta la History API del browser per navigare tra le pagine senza un vero e proprio caricamento completo della pagina, offrendo un'esperienza utente simile a quella di un'applicazione tradizionale. L'altra modalità comune è la `hash` mode, che utilizza l'URL hash per simulare una completa navigazione di pagina.

#### 3. **Gestione dinamica dei percorsi**
Vue Router permette di definire percorsi dinamici che possono adattarsi a vari pattern. Questo è utile quando hai pagine che dipendono da un identificativo unico (come un ID di un articolo o di un utente). Ecco come puoi definire un percorso dinamico:

```javascript
const routes = [
  { path: '/user/:id', component: UserComponent }
];
```

In questo esempio, `:id` è un parametro dinamico che Vue Router riconoscerà e renderà disponibile all'interno del componente UserComponent tramite `this.$route.params.id`.

#### 4. **Navigazione programmata**
Oltre a navigare cliccando su link, puoi anche navigare programmatically usando Vue Router. Questo è utile in scenari dove devi eseguire una navigazione come risultato di un'altra azione. Ad esempio:

```javascript
this.$router.push('/home');
```

#### 5. **Gestione degli hook del ciclo di vita del routing**
Vue Router offre anche vari hook che possono essere utilizzati per controllare la navigazione, eseguire azioni prima o dopo che una navigazione avviene. I principali sono `beforeEach`, `afterEach`, e `beforeEnter`. Ad esempio, `beforeEach` può essere usato per verificare l'autenticazione prima di accedere a una rotta:

```javascript
router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !isLoggedIn()) {
    next('/login');
  } else {
    next();
  }
});
```
### Conclusione   
Con questi strumenti e concetti, Vue Router si presenta come una soluzione robusta e flessibile per gestire il routing nelle applicazioni SPA con Vue.js, rendendo facile implementare navigazioni complesse e gestire transizioni senza problemi.

Comprendi la gestione degli eventi e la creazione di metodi personalizzati.
[**Eventi e metodi: Come interagire con l'utente in Vue.js**]({{ site.baseurl }}/eventi-e-metodi/)  
