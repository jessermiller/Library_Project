"use strict"

// PROJECT Section
console.log("PROJECT:\n==========\n");
const submitBook = document.getElementById("addBookButton");
const checkboxMark = document.getElementById("bookRead");

class Book {
    constructor(id, title, author, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor(books, bookCount) {
        this.bookCount = 1;
        this.books = [
            new Book(0, 'Name of The Wind', 'Patrick Rothfuss', true)
        ];
        this.markRead = this.markRead.bind(this);
        this.addBook = this.addBook.bind(this);

    }

    markRead(checkbox, id) {

        for (
            let book of library.books
        ) {
            if (book.id == id) {
                console.log('mark book as read')
                book.read = true;
                checkbox.checked = true;
                checkbox.disabled = true;
            }
        }

    }

    addBook() {
        console.log('addBook method');
        const title = document.getElementById("bookTitle");
        const author = document.getElementById("bookAuthor");
        const read = document.getElementById("bookRead");
        const addedTitle = title.value;
        const addedAuthor = author.value;
        const addedRead = read.checked;
        console.log("read value", read.checked);

        let newBook = new Book(this.bookCount, addedTitle, addedAuthor, addedRead);
        this.books.push(newBook);
        console.log(library.books);

        const tBody = document.getElementById("tableBody");
        const tRow = document.createElement("tr")
        tRow.setAttribute("id", `tRow${this.bookCount}`);
        const addTitle = document.createElement("td");
        const addAuthor = document.createElement("td");
        const newRead = document.createElement("td");
        const newDelete = document.createElement("td");
        addTitle.textContent = addedTitle;
        addAuthor.textContent = addedAuthor;
        const newRemoveButt = document.createElement("button");
        newRemoveButt.setAttribute("id", "removeBookBtn");
        newRemoveButt.setAttribute("class", "removeBookBtnn");
        newRemoveButt.innerText = "Delete";
        let currentID = this.bookCount;
        newRemoveButt.addEventListener("click", () => {
            helpremovebook(currentID);
        })
        const newCheck = document.createElement("input");
        newCheck.setAttribute("type", "checkbox");
        newCheck.checked = newBook.read;
        newCheck.disabled = newBook.read;
        newCheck.addEventListener("click", (addBook) => {
            helpMarkRead(newCheck, currentID);
        });

        newDelete.appendChild(newRemoveButt);
        newRead.appendChild(newCheck);
        tRow.appendChild(addTitle);
        tRow.appendChild(addAuthor);
        tRow.appendChild(newRead);
        tRow.appendChild(newDelete);
        tBody.appendChild(tRow);
        this.bookCount++;
    }


    removeItem(id) {
        console.log("!runnin");

        console.log("before", this.books);

        this.books = this.books.filter((book) => {
            console.log(book.id, id);
            if (book.id == id) {
                return false;
            } else {
                return true;
            }
        })
        console.log("after", this.books);
        let bookHTML = document.getElementById(`tRow${id}`);
        this.bookCount -= 1;
        bookHTML.remove();

    }
}

let library = new Library();

function helpremovebook(currentID) {
    library.removeItem(currentID);
}

function helpMarkRead(checkbox, id) {
    library.markRead(checkbox, id);
}

document.getElementById("rmvBookButton").addEventListener("click", () => {
    helpremovebook(0);
})

submitBook.addEventListener("click", () => {
    library.addBook(library.books, library.bookCount);
});