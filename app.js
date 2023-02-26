"use strict"

// PROJECT Section
console.log("PROJECT:\n==========\n");
const submitBook = document.getElementById("addBookButton");
//const unsubmitBook = document.getElementById("removeBookButton");
const checkboxMark = document.getElementById("bookRead");
const removeButtonHTML = document.getElementById("rmvBookButton");


// const books = [{
//     title: "Name of The Wind",
//     author: "Patrick Rothfuss",
//     read: true,
// }] 

class Book {
    constructor(id, title, author, read, btn) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
        this.btn = btn;
        
        
        
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
           btn: null,

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
        const btn = document.getElementById("rmvBookButton");
        //const removeButton = document.getElementById("rmvBookButton");
        //const addedBook = (title.value, author.value, read.checked);
        const addedTitle = title.value;
        const addedAuthor = author.value;
        const addedRead = read.value;
        const addedNewRemoveButt = btn.value;

        let newBook = new Book(this.bookCount, addedTitle, addedAuthor, addedRead, addedNewRemoveButt);
        this.books.push(newBook);
        
        console.log(library.books);
        
       

        const tBody = document.getElementById("tableBody");
        const tRow = document.createElement("tr")
        const addTitle = document.createElement("td");
        const addAuthor = document.createElement("td");
        const newRead = document.createElement("td");
        const newDelete = document.createElement("td");
        addTitle.textContent = addedTitle;
        addAuthor.textContent = addedAuthor;
        const newRemoveButt = document.createElement("input");
        newRemoveButt.setAttribute = ("type", "button");
        newRemoveButt.id = 1;
        newRemoveButt.innerText = "delete";
        newDelete.appendChild(newRemoveButt);
        const newCheck = document.createElement("input");
        newCheck.setAttribute("type", "checkbox");
        newCheck.checked = newBook.read;
        newCheck.disabled = newBook.read;
        checkboxMark.addEventListener("click", (addBook)=> {
            library.markRead(newCheck);
        });
        // add event listener on checkbox that runs a function called library.markedread(newCheck)
        newDelete.appendChild(newRemoveButt);
        newRead.appendChild(newCheck);
        tRow.appendChild(addTitle);
        tRow.appendChild(addAuthor);
        tRow.appendChild(newRead);
        tBody.appendChild(tRow);
       



        this.bookCount++;


    }


    //   removeBook()  {
        
    //     for (books of library.books) {
    //          if (id == );
    //       }
          
    //   }


}
let library = new Library();



submitBook.addEventListener("click", () => {
    library.addBook(library.books, library.bookCount);
});