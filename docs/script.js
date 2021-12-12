let library = [];
let contentDOM = document.getElementById('content')

class Book {
  constructor(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read;
  }
}




function displayBook(book) {

    let bookDOM = document.createElement('div');
    let titleDOM = document.createElement('h3');
    let authorDOM = document.createElement('h4');
    let pagesDOM = document.createElement('p');
    let readDOM = document.createElement('button');
    let deleteBookDOM = document.createElement('button');

    bookDOM.id = book.id;
    bookDOM.className = 'book-object';
    titleDOM.className = 'book-title';
    authorDOM.className = 'book-author';
    pagesDOM.className = 'book-pages';
    readDOM.className = 'book-read';
    deleteBookDOM.className = 'book-delete';

    titleDOM.innerText = book.title;
    authorDOM.innerText = book.author;
    pagesDOM.innerText = book.pages;
    readDOM.innerText = book.read;
    deleteBookDOM.innerText = 'Delete';

    readDOM.addEventListener('click',  () => {
      book.toggleRead();
      readDOM.textContent = book.read;
    })

    deleteBookDOM.addEventListener('click', () => {
      delete library[library.indexOf(book)]
      contentDOM.removeChild(document.getElementById(book.id));
    });
    bookDOM.append(titleDOM, authorDOM, pagesDOM, readDOM, deleteBookDOM);

    contentDOM.appendChild(bookDOM);

}

function createBook() {
  let book = new Book(
    library.length,
    document.getElementById('new-book-title').value,
    document.getElementById('new-book-author').value,
    document.getElementById('new-book-pages').value,
    document.getElementById('new-book-read').checked
    
  )
  library.push(book);
  console.log(book);
  displayBook(book);
}





const book1 = new Book(library.length, 'book1', 'author1', 500, false);
library.push(book1);
const book2 = new Book(library.length, 'book2', 'author2', 600, false);
library.push(book2);
const book3 = new Book(library.length, 'book3', 'author3', 700, true);
library.push(book3);
const book4 = new Book(library.length, 'book4', 'author4', 800, true);
library.push(book4);

library.forEach((book) => displayBook(book))







