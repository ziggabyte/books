//"use strict";

function Book(title, topic, pages, isbn) {
    this.title = title;
    this.topic = topic;
    this.pages = pages;
    this.isbn = isbn;
    this.getBookInfo = function () {
        console.log("Book: " + title + "\nTopic: " + topic +
        "\nPages: " + pages + "\nISBN: " + isbn);
    };
}

let books = [];

books[0] = new Book("Vår kokbok", "Matlagning", 892, 9789113074931);
books[1] = new Book("Ringens brödraskap", "Fantasy", 511, 9789113084909);
books[2] = new Book("Clean code", "Programmering", 464, 9780132350884);

let booksToAdd = prompt("Skriv in hur många böcker du vill lägga till: ");
let lengthOfBooksBeforeLoop = books.length;

if (booksToAdd > 0) {
    for (let i = 0; i < booksToAdd; i++) {
        let title = prompt("Bok " + (i + 1) + ": Titel");
        let topic = prompt("Bok " + (i + 1) + ": Ämne");
        let pages = prompt("Bok " + (i + 1) + ": Antal sidor");
        let isbn = prompt("Bok " + (i + 1) + ": ISBN");

        books[i + lengthOfBooksBeforeLoop] = new Book(title, topic, pages, isbn);
    }
}

books.forEach((book) => { // ger informationen OCH EN RAD UNDEFINED???? 
    console.log(book.getBookInfo());
    console.log("-----");
});
