
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.status = "available";
        this.borrowedDate = null;
    } markAsBorrowed() {
        if (this.status === "available") {
            this.status = "borrowed";
            this.borrowedDate = new Date();
        } else {
            console.log(`The book "${this.title}" is already borrowed.`);
        }
    }
    markAsAvailable() {
        this.status = "available";
        this.borrowedDate = null;
    }
    isOverdue(maxDays) {
        if (this.status === "borrowed") {
            const now = new Date();
            const diffDays = Math.floor(
                (now - new Date(this.borrowedDate)) / (1000 * 60 * 60 * 24)
            );
            return diffDays > maxDays;
        }
        return false;
    }
    calculateFine(maxDays, finePerDay) {
        if (this.isOverdue(maxDays)) {
            const now = new Date();
            const diffDays = Math.floor(
                (now - new Date(this.borrowedDate)) / (1000 * 60 * 60 * 24)
            );
            return (diffDays - maxDays) * finePerDay;
        }
        return 0;
    }
}
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`Added "${book.title}" by ${book.author} to the library.`);
    }

    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title);
        console.log(`Removed the book titled "${title}" from the library.`);
    }

    borrowBook(title) {
        const book = this.books.find((book) => book.title === title);
        if (book && book.status === "available") {
            book.markAsBorrowed();
            console.log(`You have borrowed "${title}".`);
        } else if (book) {
            console.log(`The book "${title}" is already borrowed.`);
        } else {
            console.log(`The book "${title}" is not found in the library.`);
        }
    }

    searchBooks(query, by = "title") {
        return this.books.filter((book) =>
            book[by].toLowerCase().includes(query.toLowerCase())
        );
    }

    listOverdueBooks(maxDays) {
        return this.books.filter((book) => book.isOverdue(maxDays));
    }

    calculateTotalFine(maxDays, finePerDay) {
        return this.books.reduce(
            (total, book) => total + book.calculateFine(maxDays, finePerDay),
            0
        );
    }
}
const library = new Library();
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.borrow
