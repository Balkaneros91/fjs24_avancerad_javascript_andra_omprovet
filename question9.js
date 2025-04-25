// Fråga 9. (4p) OOP & Javascript
// Du ska skapa två klasser med ES6 syntax, Book och Author.

// Book ska ha följande egenskaper:
// title, author, rating
// och metoden displayBook som visar information om boken

export class Book {
  constructor(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
  }

  // Method
  displayBook() {
    return `Title: ${this.title}, Author: ${this.author}, Rating: ${this.rating}`;
  }
}

const book1 = new Book("Harry Potter", "JK Rowling", 5);
console.log(book1);
console.log(book1.displayBook(book1));

const book2 = new Book("Fantastic Beasts", "JK Rowling", 5);
console.log(book2);
console.log(book2.displayBook(book2));

// Author ska ha följande egenskaper:
// name,
// books (en array med böcker som är tom från början)
// och metoden
// addBook som lägger till en bok till författarens lista
// listBooks som visar en lista på författarens böcker

export class Author {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  // Method
  addBook(book) {
    this.books.push(book);
  }

  // Method
  listBooks() {
    return this.books.map((book) => book.title).join(", ");
  }
}

const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 4.8);
console.log(book3);
console.log(book3.displayBook(book3));

const book4 = new Book("Tender is the Night", "F. Scott Fitzgerald", 4.5);
console.log(book4);
console.log(book4.displayBook(book4));

const author1 = new Author("F. Scott Fitzgerald");

author1.addBook(book3);
author1.addBook(book4);
console.log(author1.listBooks());

console.log(author1);

// Fråga 10. (2p) Moduler
// Använd ES6 moduler för att importera och exportera klasserna Book och Author, Book.js och Author.js.
// Skapa en tredje fil, main.js, där du importerar klasserna och skapar en författare och en lägger till minst två böcker till författaren.
// Skriv ut författarens böcker och information om böckerna, samt författarens namn

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

export default { Book, Author };
