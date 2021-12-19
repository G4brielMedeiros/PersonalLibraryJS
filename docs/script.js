let library = [];
let contentDOM        = document.getElementById("content");
let newBookButtonDOM  = document.getElementById("new-book-button");
let newBookFormDOM    = document.getElementById("new-book-form");

class Book {
  constructor(id, title, author, pages, read) {
    this.id     = id;
    this.title  = title;
    this.author = author;
    this.pages  = pages;
    this.read   = read;
  }

  toggleRead() {
    this.read = !this.read;
    return this.getReadStatus();
  }

  getReadStatus() {
    return this.read ? "Done" : "Not read";
  }
}

function displayBook(book) {
  let bookDOM   = document.createElement("div");
  let titleDOM  = document.createElement("h3");
  let authorDOM = document.createElement("h4");
  let pagesDOM  = document.createElement("p");
  let readStatusDOM = document.createElement("button");
  let deleteBookDOM = document.createElement("button");

  bookDOM.id = book.id;
  bookDOM.className   = "book-object";
  titleDOM.className  = "book-title";
  authorDOM.className = "book-author";
  pagesDOM.className  = "book-pages";
  readStatusDOM.className = "book-read";
  deleteBookDOM.className = "book-delete";

  titleDOM.innerText  = book.title;
  authorDOM.innerText = "by " + book.author;
  pagesDOM.innerText  = book.pages == 1 ? "1 page" : book.pages + " pages";
  readStatusDOM.innerText = book.getReadStatus();
  deleteBookDOM.innerText = "Delete";

  readStatusDOM.addEventListener("click", () => 
    readStatusDOM.textContent = book.toggleRead()
  );

  deleteBookDOM.addEventListener("click", () => {
    delete library[library.indexOf(book)];
    contentDOM.removeChild(document.getElementById(book.id));
  });

  bookDOM.append(titleDOM, authorDOM, pagesDOM, readStatusDOM, deleteBookDOM);
  contentDOM.appendChild(bookDOM);
}

function createNewBook() {
  let book = new Book(
    library.length,
    document.getElementById("new-book-title").value,
    document.getElementById("new-book-author").value,
    document.getElementById("new-book-pages").value,
    document.getElementById("new-book-read").checked,
  );

  library.push(book);
  displayBook(book);

  newBookFormDOM.classList.remove("visible");
  newBookFormDOM.classList.add("invisible");
}

newBookButtonDOM.addEventListener("click", () =>
  newBookFormDOM.classList.toggle("invisible")
);

const book1 = new Book(
  library.length, 
  "Unwind", 
  "Neal Shusterman", 
  540, 
  false
);

const book2 = new Book(
  library.length,
  "Book Great",
  "Arthur The Writer",
  604,
  false
);

const book3 = new Book(
  library.length, 
  "Bunchof Words", 
  "Burr Ned", 
  741, 
  true
);

const book4 = new Book(
  library.length,
  "Giant Mess",
  "Bored McPerson",
  924,
  true
);

library.push(book1, book2, book3, book4);

library.forEach((book) => displayBook(book));
