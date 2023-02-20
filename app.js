"use strict"

// PROJECT Section
console.log("PROJECT:\n==========\n");
const submitBook = document.getElementById("#addBookButton");
const unsubmitBook = document.getElementById("#removeBookButton");



const books = [
    {
        title:"Name of The Wind",
        author:"Patrick Rothfuss",
        read: true,
    }
]

// for adding books
class book {
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
}
class library {
    constructor(books) {
        this.bookCount = books.length;
        this.books = books;

    }
    markRead (checkbox, id) {
      
    }
    

    addBook() {
        
       const title = document.getElementById("#bookTitle");
       const author = document.getElementById("#bookAuthor");
       const read = document.getElementById("#bookRead");
       const addedBook = (title.value, author.value, read.checked);
   
       const tBody = document.getElementById("tableBody");
       const tRow = document.createElement("tr")
       const addTitle = document.createElement("td");
       const addAuthor = document.createElement("td");
       const newRead = document.createElement("td");
       addTitle.textContent = title.value;
       addAuthor.textContent = author.value;
       const newCheck = document.createElement("input");
       newCheck.setAttribute("type", "checkbox");
       newCheck.checked = read.checked;
       newCheck.disabled = read.checked;
       newRead.appendChild(newCheck);
       tRow.appendChild(addTitle);
       tRow.appendChild(addAuthor);
       tRow.appendChild(newRead);
       tBody.appendChild(tRow);


       this.books.push(addedBook);
       bookCount++;


    }

    removeBook () {

    }

    
}

submitBook.addEventListener("click", addBook);