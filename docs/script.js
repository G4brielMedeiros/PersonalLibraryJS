let library = [];
let contentDOM = document.getElementById('content')

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}




function displayBook(index, book) {

    let bookDOM = document.createElement('div');
    let titleDOM = document.createElement('h3');
    let authorDOM = document.createElement('h4');
    let pagesDOM = document.createElement('p');
    let readDOM = document.createElement('p');

    bookDOM.id = index;
    bookDOM.className = 'book-object'
    titleDOM.className = 'book-title'
    authorDOM.className = 'book-author'
    pagesDOM.className = 'book-pages'
    readDOM.className = 'book-read'

    titleDOM.innerText = book.title;
    authorDOM.innerText = book.author;
    pagesDOM.innerText = book.pages;
    readDOM.innerText = book.read;
    bookDOM.append(titleDOM, authorDOM, pagesDOM, readDOM);

    contentDOM.appendChild(bookDOM);

}

function addNewBook() {
  let book = new Book(
    document.getElementById('new-book-title').value,
    document.getElementById('new-book-author').value,
    document.getElementById('new-book-pages').value,
    document.getElementById('new-book-read').checked
    
  )
  library.push(book);
  console.log(book);
  displayBook(library.length, book);
}



const book1 = new Book('book1', 'author1', 5, false);
const book2 = new Book('book2', 'author2', 6, false);
const book3 = new Book('book3', 'author3', 7, true);
const book4 = new Book('book4', 'author4', 8, true);

library.push(book1, book2, book3, book4);

library.forEach((book) => {
  displayBook(book)
})







