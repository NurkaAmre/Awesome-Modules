import Store from './store.js';
// UI CLASS handle UI tasks
export default class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#list');

    const row = document.createElement('tr');
    row.innerHTML = `
       <h3>"${book.title}" by ${book.author}</h3>
       <td><button class="delete">Remove</button></td>
       `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearField() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}