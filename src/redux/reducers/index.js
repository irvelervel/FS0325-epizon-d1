// qui creo il "robottino" che sta alla base del funzionamento di Redux
// un reducer è una FUNZIONE PURA: una funzione che a partire dallo stesso
// input (parametri) restituisce SEMPRE lo stesso output

// il reducer riceverà da Redux 2 parametri ad ogni invocazione:
// 1) lo stato attuale dell'applicazione
// 2) la action che ha "svegliato" il reducer, ovvero la modifica che vogliamo
// apportare allo store

const initialState = {
  // qui definisco il valore iniziale di state, ovvero lo stato iniziale
  // di Redux. La sua forma (shape) rimarrà sempre invariata durante la vita
  // dell'applicazione
  cart: {
    // questa "sotto-sezione" dello stato di Redux in gergo si chiama "slice"
    // conterrà tutte le informazioni relative alla funzionalità "carrello"
    content: [],
    // qui dentro potrei anche aggiungerci altre informazioni da memorizzare
    // in Redux relative al carrello (quantità, errori, caricamenti)
  },
}

const mainReducer = (state = initialState, action) => {
  // con state = initialState mettiamo la prima "biglia" sul piedistallo
  // cioè alla prima invocazione del mainReducer, quando l'app si sta ancora
  // caricando, state è undefined! lo riempiamo con il nostro stato iniziale
}
