"use strict";

function Book(title, topic, pages, isbn) {
    this.title = title;
    this.topic = topic;
    this.pages = pages;
    this.isbn = isbn;
    this.getBookInfo = function () {
        console.log(
            "Book: " + this.title + "\n" +
            "Topic: " + this.topic + "\n" +
            "Pages: " + this.pages + "\n" +
            "ISBN: " + this.isbn + "\n" +
            "-----");
    };
}

let books = [];

books.push(new Book("Vår kokbok", "Matlagning", 892, 9789113074931));
books.push(new Book("Ringens brödraskap", "Fantasy", 511, 9789113084909));
books.push(new Book("Clean code", "Programmering", 464, 9780132350884));

let booksToAdd = prompt("Skriv in hur många böcker du vill lägga till: ");

if (booksToAdd > 0) {
    for (let i = 0; i < booksToAdd; i++) {
        let title = prompt("Bok " + (i + 1) + ": Titel");
        let topic = prompt("Bok " + (i + 1) + ": Ämne");
        let pages = prompt("Bok " + (i + 1) + ": Antal sidor");
        let isbn = prompt("Bok " + (i + 1) + ": ISBN");

        books.push(new Book(title, topic, pages, isbn));
    }
}

books.forEach((book) => {
    book.getBookInfo();
});
