/* ESERCIZIO 1 (COMPLETATO)
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 10
let n2 = 20

if (n1 > n2) {
  console.log('10 è maggiore di 20')
} else {
  console.log('20 è maggiore di 10')
}



/* ESERCIZIO 2 (COMPLETATO)
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x1 = 5
let x2 = 2

if (x2 !== x1) {
  console.log('not equal')
}

else {
  console.log('equal')
}



/* ESERCIZIO 3 (COMPLETATO)
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (50 / 5) {
  console.log('divisibile per 5')
}

else {
  console.log('non divisibile per 5')
}



 
/* ESERCIZIO 4 (COMPLETATO)
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = 8
let number2 = 16

let sottrazione = (number2 - number1)
console.log('ESERCIZIO 4', sottrazione)



 
/* ESERCIZIO 5 (COMPLETATO)
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 40
let ship = 10

if (totalShoppingCart > 50) {
  console.log('Hai diritto alla spedizione gratuita')
}

else if (totalShoppingCart < 50) {
   console.log('Spedizione con costo fisso a 10 euro')
}

let totalAmount = totalShoppingCart + ship
console.log('ESERCIZIO 5 Prezzo totale:', totalAmount + ' euro')




/* ESERCIZIO 6 (COMPLETATO)
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

totalShoppingCart = 40 * 20 / 100

if (totalShoppingCart > 50) {
  console.log("Hai diritto alla spedizione gratuita, inclusa l'offerta di oggi!")
} else if (totalShoppingCart < 50) {
  console.log('Spedizione con costo fisso a 10 euro')
}

totalAmount = totalShoppingCart + ship
console.log('ESERCIZIO 6 Prezzo totale: ', totalAmount)




/* ESERCIZIO 7 (COMPLETATO)
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let variable1 = 10
let variable2 = 20
let variable3 = 25

let arrayOne = ['variable2', 'variable1', 'variable3']

if (variable1 < variable2 && variable1 < variable3) {
  arrayOne.sort()
  console.log('ESERCIZIO 7', arrayOne)
} else {
  console.log('Errore')
}




/* ESERCIZIO 8 (COMPLETATO)
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let es81 = 10
let es82 = '10'

console.log('ESERCIZIO 8 - PARTE 1', typeof es81)
console.log('ESERCIZIO 8 - PARTE 2', typeof es82)




/* ESERCIZIO 9 
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let es83 = 20




/* ESERCIZIO 10 (COMPLETATO)
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 10
  if (val <= 10) {
      console.log("Meno di 10");
    } else if (val > 5) {
      console.log("Maggiore di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }



/* ESERCIZIO 11 (COMPLETATO)
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto'
}
console.log('ESERCIZIO 11', me)




/* ESERCIZIO 12 (COMPLETATO)
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log('ESERCIZIO 12', me)




/* ESERCIZIO 13 (COMPLETATO)
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()
console.log('ESERCIZIO 13', me.skills)




/* ESERCIZIO 14 (COMPLETATO)
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myFirstArray = []
console.log('ESERCIZIO 14 - PARTE 1', myFirstArray)

myFirstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('ESERCIZIO 14 - PARTE 2 ', myFirstArray)



 
/* ESERCIZIO 15 (COMPLETATO)
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myFirstArray.pop()
myFirstArray.push(100)
console.log('ESERCIZIO 15', myFirstArray)

