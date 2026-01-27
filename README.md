# Progetto Finale - Frontend

Applicazione frontend in React/Vite realizzata come progetto finale. Fornisce una semplice interfaccia per visualizzare prodotti, dettagli, wishlist e confronto.

## Caratteristiche
- Lista di prodotti
- Dettaglio prodotto
- Wishlist
- Barra di comparazione dei prodotti
- Routing con `react-router-dom`

## Prerequisiti
- Node.js (versione 18+ raccomandata)
- npm o yarn

## Installazione
1. Clona la repository o copia i file nella tua macchina:

```
git clone <repo-url>
cd progetto-finale-spec-frontend-front
```

2. Installa le dipendenze:

```bash
npm install
# oppure
yarn
```

## Script utili
I comandi disponibili (definiti in `package.json`):

- `npm run dev` — avvia il server di sviluppo Vite
- `npm run build` — crea la build di produzione
- `npm run preview` — esegue una preview della build locale
- `npm run lint` — esegue ESLint sul progetto

Esempio: avviare l'app in sviluppo

```bash
npm run dev
```

Apri il browser su `http://localhost:5173` (o la porta indicata dal terminale).

## Struttura del progetto (principali cartelle/file)

- `src/` — codice sorgente principale
  - `App.jsx` — componente radice
  - `main.jsx` — entrypoint di Vite
- `components/` — componenti React (Navbar, Footer, ProductsCard, ecc.)
- `pages/` — pagine dell'app (HomePage, ProductList, ProductDetails, ecc.)
- `context/GlobalContext.jsx` — stato globale via Context API
- `hooks/` — hook personalizzati (`useProduct.js`, `useProducts.js`)
- `database/product.json` — dati di esempio dei prodotti
- `public/` — asset statici

