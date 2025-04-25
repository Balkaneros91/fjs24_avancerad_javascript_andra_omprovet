// Fråga 10. (2p) Moduler
// Använd ES6 moduler för att importera och exportera klasserna Book och Author, Book.js och Author.js.
// Skapa en tredje fil, main.js, där du importerar klasserna och skapar en författare och en lägger till minst två böcker till författaren.
// Skriv ut författarens böcker och information om böckerna, samt författarens namn

import { Book } from "./question9";
import { Author } from "./question9";

const book5 = new Book("Twilight", "Stephenie Meyer", 5);
console.log(book5);
const book6 = new Book("New Moon", "Stephenie Meyer", 4.8);
console.log(book6);
const book7 = new Book("Eclipse", "Stephenie Meyer", 4.8);
console.log(book7);

const author2 = new Author("Stephenie Meyer");
author2.addBook(book5);
author2.addBook(book6);
author2.addBook(book7);

console.log(author2.name);
console.log(author2.listBooks());

function renderBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = author2.listBooks();
}

renderBooks();
