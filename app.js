"use strict"

// PROJECT Section
console.log("PROJECT:\n==========\n");
const submitBook = document.getElementById("addBookButton");
const unsubmitBook = document.getElementById("removeBookButton");



// const books = [{
//     title: "Name of The Wind",
//     author: "Patrick Rothfuss",
//     read: true,
// }] 

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
            {
                id: 1,
                title: 'Hey',
                author: 'Arnold',
                read: true,

            }
        ];
        this.markRead = this.markRead.bind(this);
        this.addBook = this.addBook.bind(this);

    }
    markRead(checkbox, id) {
        for (
            let book of library.books
        ) {
            if (book.id == checkbox.id) {
                console.log(checkbox);
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
        //const addedBook = (title.value, author.value, read.checked);


        let newBook = new Book(this.bookCount, title, author, read);
        this.books.push(newBook);

        const tBody = document.getElementById("tableBody");
        const tRow = document.createElement("tr")
        const addTitle = document.createElement("td");
        const addAuthor = document.createElement("td");
        const newRead = document.createElement("td");
        addTitle.textContent = newBook.title;
        addAuthor.textContent = newBook.author;
        const newCheck = document.createElement("input");
        newCheck.setAttribute("type", "checkbox");
        newCheck.checked = newBook.read;
        newCheck.disabled = newBook.read; 
        // add event listener on checkbox that runs a function called library.markedread(newCheck)
        newRead.appendChild(newCheck);
        tRow.appendChild(addTitle);
        tRow.appendChild(addAuthor);
        tRow.appendChild(newRead);
        tBody.appendChild(tRow);

        

        this.bookCount++;


    }


    removeBook() {

    }


}
let library = new Library();
submitBook.addEventListener("click", ()=>{
    library.addBook(library.books, library.bookCount);
});