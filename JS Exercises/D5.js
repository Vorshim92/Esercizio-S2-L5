/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log("ES1: ", pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log("ES2: ", pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

// pets.sort((a, b) => -(a - b));
// console.log("ES3: ", pets);

pets.reverse();
console.log("ES3: ", pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let firstPet = pets[0];

pets.shift();

pets.push(firstPet);

console.log("ES4: ", pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  const addRandomValue = Math.floor(Math.random() * 11);
  cars[i].licensePlate = addRandomValue;
}

console.log("ES5: ", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let newObj = {
  brand: "Jeep",
  model: "Renegade",
  color: "black",
  trims: ["titanium", "st", "active"],
};
cars.push(newObj);
console.log("ES6: ", cars);
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log("ES6: ", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log("ES7: ", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.startsWith("b") === true) {
    console.log("ES8: ", "Fizz");
  } else console.log("ES8: ", "Buzz");
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let c = 0;
while (numericArray[c] !== 32) {
  console.log("ES9: ", numericArray[c]);
  c++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const numberArray = [];

// .toLowerCase().charCodeAt(0) - 96); // .charCodeAt(0): Restituisce il codice Unicode del primo carattere della stringa. Ogni carattere in JavaScript è rappresentato da un numero intero che rappresenta il suo codice Unicode. "- 96": Sottraendo 96 al codice Unicode ottenuto, si ottiene un numero che rappresenta la posizione della lettera nell'alfabeto. Questo è basato sul fatto che, nel set di caratteri Unicode, i codici Unicode per le lettere minuscole dell'alfabeto inglese ('a' - 'z') iniziano da 97. Quindi, sottraendo 96, otterrai un numero che rappresenta la posizione dell'alfabeto, dove 'a' sarà 1, 'b' sarà 2 e così via.



function NumeroAlfabeto(a) {                      // scoperto questo fantastico metodo per restituire il codice Unicode, utilizziamolo con una funzione per automatizzare il tutto, qualsiasi stringa verrà inserita all'interno della funzione (parametro "a" === string, non accetta altro) verrà automaticamente translata nel corrispettivo numero della posizione nell'alfabeto.
  if (typeof a === "string") {
    return a.toLowerCase().charCodeAt(0) - 96;
  }
}


for (let i = 0; i < charactersArray.length; i++) {         // qui ho pensato di evitare di fare mille "case" dentro lo switch poiché mi sembrava poco pratico creare un "case" per ogni lettera dell'alfabeto, anche perché c'è già una funzione che fa questa cosa!
  switch (charactersArray[i]) {                            //  quindi ho creato uno stratagemma per far sì che qualsiasi array inserito andasse a pushare automaticamente nella funzione la stringa traducendo direttamente nell'array nuovo i numeri. 
    case charactersArray[i]:
      numberArray.push(NumeroAlfabeto(charactersArray[i]));
      break;
  }
}
console.log("ES10: ", numberArray);
