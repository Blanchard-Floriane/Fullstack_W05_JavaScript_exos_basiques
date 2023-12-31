const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Est-ce que tous les livres ont été au moins empruntés une fois ?
let bookBorrow = books.every(book => book.rented > 0); 
console.log("Est-ce que tous les livres ont été empruntés une fois au moins ?" + " " + bookBorrow)

//Quel est livre le plus emprunté ?
let bookMostBorrowed = books.reduce((a, b) => (a.rented > b.rented ? a : b));
console.log(`Le livre le plus emprunté est : ${bookMostBorrowed.title}`);

//Quel est le livre le moins emprunté ?
let bookLessBorrowed = books.reduce((a, b) => (a.rented < b.rented ? a : b));
console.log(`Le livre le moins emprunté est : ${bookLessBorrowed.title}`);

//Trouve le livre avec l'ID: 873495 ;
let specialBook = books.find((objet) => objet.id == 873495);
console.log(`Le livre dont l'ID est 873495 correspond à : ${specialBook.title}.`);

//Supprime le livre avec l'ID: 133712 ;
let booksLessOne = books.filter(book => book !== specialBook);
console.log(`Le livre ${specialBook.title} a été supprimé de la liste.`);

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
let booksLessOneSorted = booksLessOne.sort((a,b) => a.title.localeCompare(b.title));
console.log(booksLessOneSorted);