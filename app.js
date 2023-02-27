"use strict"

// PROJECT Section
console.log("PROJECT:\n==========\n");
const submitBook = document.getElementById("addBookButton");
//const unsubmitBook = document.getElementById("removeBookButton");
const checkboxMark = document.getElementById("bookRead");
//const removeButtonHTML = document.getElementsByClassName("rmvBookBtnn");

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
        this.books = [{
            id: 0,
            title: 'Name of The Wind',
            author: 'Patrick Rothfuss',
            read: true,


        }];
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
        const addedTitle = title.value;
        const addedAuthor = author.value;
        const addedRead = read.value;


        let newBook = new Book(this.bookCount, addedTitle, addedAuthor, addedRead);
        this.books.push(newBook);

        console.log(library.books);



        const tBody = document.getElementById("tableBody");
        const tRow = document.createElement("tr")
        tRow.setAttribute("id", "tRow");
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



        const newCheck = document.createElement("input");
        newCheck.setAttribute("type", "checkbox");
        newCheck.checked = newBook.read;
        newCheck.disabled = newBook.read;
        checkboxMark.addEventListener("click", (addBook) => {
            library.markRead(newCheck);
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


    removeItem() {
        console.log("runnin!");

// maybe for each 
        if (this.book != "") {
            tRow.remove();

        }

    }


}

let library = new Library();


submitBook.addEventListener("click", () => {
    library.addBook(library.books, library.bookCount);
    const removeButtonHTML = document.getElementsById("removeBookBtn");


});


removeButtonHTML.addEventListener("click", () => {
    library.removeItem(library.books, library.bookCount);
})