let library = [];
let contentDOM = document.getElementById('content');
let newBookButtonDOM = document.getElementById('new-book-button');
let newBookFormDOM = document.getElementById('new-book-form');

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

    return this.read ? 'Done' : 'Not read';
  }

  getReadStatus() {
    return this.read ? 'Done' : 'Not read';
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
    authorDOM.innerText = "by " + book.author;
    pagesDOM.innerText = book.pages + " pages";
    readDOM.innerText = book.getReadStatus();
    deleteBookDOM.innerText = 'Delete';

    readDOM.addEventListener('click',  () => {
      
      readDOM.textContent = book.toggleRead();
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
    document.getElementById('new-book-read').checked,
    
  )
  library.push(book);
  console.log(book);
  displayBook(book);
  newBookFormDOM.classList.remove('visible');
  newBookFormDOM.classList.add('invisible')
}


newBookButtonDOM.addEventListener('click', () => {
  if (newBookFormDOM.classList.contains('invisible')) {
    newBookFormDOM.classList.remove('invisible');
    newBookFormDOM.classList.add('visible');
  }
  else {
    newBookFormDOM.classList.remove('visible');
    newBookFormDOM.classList.add('invisible');
  }

})


const book1 = new Book(library.length, 'Unwind', 'Neal Shusterman', 540, false);
library.push(book1);
const book2 = new Book(library.length, 'Book Great', 'Arthur The Writer', 604, false);
library.push(book2);
const book3 = new Book(library.length, 'Bunchof Words', 'Burr Ned', 741, true);
library.push(book3);
const book4 = new Book(library.length, 'Giant Mess', 'Bored McPerson', 924, true);
library.push(book4);

library.forEach((book) => displayBook(book))







