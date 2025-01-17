/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/


var sum = 10+20;

console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21)

console.log(random);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Gioele",
  surname: "Piazza",
  age: 31
}

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;

console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["Java","JavaScript","Html","Css"];

console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("SQL");

console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice(){
  let random = Math.floor(Math.random() * 6)+1;
  return random;
}

console.log(dice());


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(a,b) {
  

  if(a == b){
    console.log("Sono due numeri uguali")
  }else if(a>b){
    return a;  
  }else {
    return b; 
  }
}

console.log(whoIsBigger(dice(),dice()));



/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e 
  ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe (string){
  let splitted = string.split(" ");
  
  for(let i = 0; i<splitted.length; i++){
    splitted [i] = splitted[i].charAt(0).toUpperCase()+ splitted[i].slice(1);
    
  }
  
  return splitted;
}

console.log(splitMe("i love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere,
   altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne (string , boolean){
  if(boolean == true){
    return string.slice(1);
  }else {
    return string.slice(0,string.length-1);
  }
}

console.log(deleteOne("i love coding" , false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro
   e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/


function onlyLetters (string){
  
  
  for(let i = 0; i<string.length; i++){
    if (!isNaN(parseInt(string[i]))){
        string = string.slice(0,i)+ string.slice(i+1);
    }
  }
  return string;
}

console.log(onlyLetters("i have 4 dogs"));



/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna
   true se la stringa è un valido indirizzo email.
*/



function isThisAnEmail (string){
  for(let i = 0; i<string.length;i++){
    if(string.charAt(i)== "@"){
      return true;
    }
  }
  return false;
}

console.log(isThisAnEmail("andreagioele@piazza.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

today = new Date();
week = ["domenica","lunedì","martedì","mercoledì","giovedì","venerdì", "sabato"];

function whatDayIsIt (date){
  return week[date.getDay()];
}

console.log(whatDayIsIt(today));

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, 
  e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle 
  invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices (num){
  result = {
  sum : 0,
  values: []
  }

  for(let i = 0; i<num; i++){
    let estratti = dice();
    result.sum += estratti;
    result.values.push(estratti);
  }
  return result;

}

console.log(rollTheDices(dice()));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi
   da tale data.
*/
let date = new Date("10/02/1993");

function howManyDays(date){
  let today = new Date();

  let difftime = today - date;

  let diffday =  Math.floor(difftime / (1000 * 60 * 60 * 24));

  console.log("Sono passati "+ diffday + " giorni.")

}

howManyDays(date);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, 
  falso negli altri casi.
*/



function itsTodayMyBirthday (date){
  let today = new Date();
  let birth;

  if(today.getMonth()==date.getMonth()&& today.getDate() == date.getDate()){
    birth = true;
  }else {
    birth = false
  }
  
  return birth;

}

console.log(itsTodayMyBirthday(date));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; 
  deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

let array = ["scuola", "casa", "libro", "aereoplano"]

function deleteProp(array, string){

  for(let i = 0; i<array.length; i++){
    if(array[i] == string){
      array.splice(i,1);
    }
  }

  return array;

}

console.log(deleteProp(array,"libro"));


//----------------------------------------- Esercizi Array-----------------------------

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/



function newestMovie (movie){
let newest = 0;
let count = 0;

for(let i =0; i<movie.length; i++){
  if(newest<parseInt(movie[i].Year)){
      newest = parseInt(movie[i].Year);
      count = i;
  }
}

return movie[count];

}

console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(movies){
  let count = 0;

  for(let i = 0; i<movies.length; i++){
    if(movies[i].Type == "movie"){
      count++;
    }
  }
  return count;
}

console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti 
  nell'array "movies" fornito.
*/

function onlyYears (movies){
  years = [];

  for(let i = 0; i<movies.length; i++){
    years.push(movies[i].Year);
  }
  return years;
}

console.log(onlyYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso
   contenuti nell'array "movies" fornito.
*/

function onlyLastMillennium (movies){
  let mill = [];

  for(let i = 0; i<movies.length; i++){
    if(parseInt(movies[i].Year) >1999){
      mill.push(movies[i]);
    }
  }

  return mill;
}

console.log(onlyLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti
   i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(movies){
  let sum = 0;

  for(let i = 0; i<movies.length; i++){
    sum += parseInt(movies[i].Year);
  }
  return sum;
}

console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array 
  "movies" fornito che la contengono nel titolo.
*/

let string = "Avengers: Endgame";


function searcByTitle(string){
  
  for(let i = 0; i<movies.length; i++){
    if(string == movies[i].Title){
      return movies[i]
    }
  }
}

console.log(searcByTitle(string));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e 
  ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono 
  la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide (string){
  let obj = {
  match : [],
  unmatch : []
  }


  for(let i = 0; i<movies.length; i++){
    if(movies[i].Title.includes(string)){
      obj.match.push(movies[i])
    }else{
      obj.unmatch.push(movies[i])
    }
  }

  return obj;
}

console.log(searchAndDivide("Avengers"));



/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro
   e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(num){  
  movies.splice(num,1);
  return movies;
}

console.log(removeIndex(3));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function containerSelector(){
  let container = document.getElementById("container");
  return container;
}


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function tdSelector(){
  let td = document.querySelectorAll("td");
  return td;
}


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function tdContent (){
  let td = document.querySelectorAll("td");
  for(let i = 0; i<td.length; i++){
    console.log(td.textContent)
  }
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function bckgColor (){
  let aHref = document.querySelector("a");
  
  for(let i = 0; i<a.length; i++){
    a[i].style.backgroundColor = "red";
  }

}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addLi(){
  const ul = document.getElementById("myList")

  const li = document.createElement("li");

  ul.appendChild(li);
}



/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function svuotaLi(){
  const ul = document.getElementById("myList");
  
  for(let i = 0; i<ul.length; i++){
    ul.removeChild(ul.firstChild);
  }
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function test (){
  const tr = document.querySelectorAll("tr");

  for(let i = 0; i<ul.length; i++){
    tr[i].classList.add("test");
  }


}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e 
  costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfThree (num){
  

for(let i = 0; i<num; i++){
  let row = "";
  for(let y = 0; y<= i; y++){
    row += "*";
  }
  console.log(row);
}

}

halfThree(5);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e 
  costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

function Three (num){
  

  for(let i = 0; i<num; i++){
    
    
      let rowSpace = " ".repeat(num - i - 1)
      let row = "*".repeat(2 * i + 1);
   
    console.log(rowSpace + row);
  }
  
  }

  Three(5);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(num){

  if(num<=1){
    return console.log("non è un numero primo");
  }
  for(let i = 2; i<Math.sqrt(num); i++){
    if(num % i == 0){
      return console.log("non è un numero primo");
    }else {
       return console.log("è un numero primo")
    }
  }
}

isItPrime(12);



