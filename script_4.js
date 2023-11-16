
//const ce sont des variables non modifiables

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//afficher la liste complète dans la console
console.log(`Voici notre liste d'entrepreneurs :`);
console.log(entrepreneurs);

//entrepreneurs nés dans les années 70
console.log('Et voici les entrepreneurs nés dans les années 70 :' );
const seventies = entrepreneurs.filter((entrepreneurs) => entrepreneurs.year >= 1970 && entrepreneurs.year < 1980);
console.log(seventies);


// Sors une array qui contient le prénom et le nom des entrepreneurs
// Ici objet est une variable 
// function est une fonction anonyme qui va prendre chq objet de l'array comme argument
let entrepreneursName = entrepreneurs.map(function(objet) {
  return {first: objet.first, last: objet.last};
});

console.log(entrepreneursName);

//Quel âge aurait chaque inventeur aujourd'hui ?
let actualDate = new Date();
let actualYear = actualDate.getFullYear();

let entrepreneursAge = entrepreneurs.map(function(objet) {
  let age = actualYear - objet.year;
  return {first: objet.first, last: objet.last, age: age};
});
console.log(entrepreneursAge);

//Trie les entrepreneurs par ordre alphabétique du nom de famille
let entrepreneursSorted = entrepreneurs.sort((a,b) => a.last.localeCompare(b.last));
console.log(entrepreneursSorted);