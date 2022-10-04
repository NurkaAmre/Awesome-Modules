import Book from './book.js';
import UI from './ui.js';
import Store from './store.js';
import { DateTime } from './luxon.js';

/* Navigation selectors */
const listNav = document.querySelector('.list');
const addNav = document.querySelector('.new-book');
const contactNav = document.querySelector('.contact');

/* Pages selectors */
const listPage = document.querySelector('#list');
const addPage = document.querySelector('#book-form');
const contactPage = document.querySelector('#contact');

// time selector
const displayTime = document.getElementById('date');

function refreshTime() {
  const dateString = DateTime.now().toRFC2822();
  displayTime.textContent = dateString;
}

setInterval(refreshTime, 1000);

/* Header time */
refreshTime();

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // Instatiate book
  const book = new Book(title, author);

  // Add Book to UI
  UI.addBookToList(book);

  // Add book to store
  Store.addBook(book);

  // Clear fields
  UI.clearField();
});

// Event: Remove a Book
document.querySelector('#list').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    const index = [...document.querySelectorAll('.delete')].indexOf(e.target);
    Store.removeBook(index);
    UI.deleteBook(e.target);
  }
});

/* Navigation Functions */

function listSelected() {
  addPage.style.display = 'none';
  addNav.style.color = 'black';
  contactPage.style.display = 'none';
  contactNav.style.color = 'black';
  listPage.style.display = 'block';
  listNav.style.color = 'blue';
}

function addSelected() {
  listPage.style.display = 'none';
  listNav.style.color = 'black';
  contactPage.style.display = 'none';
  contactNav.style.color = 'black';
  addPage.style.display = 'flex';
  addNav.style.color = 'blue';
}

function contactSelected() {
  listPage.style.display = 'none';
  listNav.style.color = 'black';
  addPage.style.display = 'none';
  addNav.style.color = 'black';
  contactPage.style.display = 'block';
  contactNav.style.color = 'blue';
}

/* Navigation event listeners */
listNav.addEventListener('click', listSelected);
addNav.addEventListener('click', addSelected);
contactNav.addEventListener('click', contactSelected);
window.addEventListener('load', listSelected);