import Storage from './BookStorage.js';

export default class UI {
  static getBookList() {
    let books = ' ';
    let deserializedBookList = Storage.getData('bookList');

    deserializedBookList.forEach((value) => {
      books += `
              <div class="book" data-id="${value.bookid}">
                <h2 class="title">${value.title}
                  <span class="author">${value.author}</span>
                </h2>
                <button class="btn btn-remove" type="button">Remove</button>
              </div>
                `;
    });

    const booklist = document.querySelector('.book-display');
    booklist.innerHTML = books;
  }

  static addToList(bookObj) {
    let deserializedBookList = Storage.getData('bookList');
    if (deserializedBookList !== null) {
      deserializedBookList.push(bookObj);
      Storage.saveData(deserializedBookList);
      UI.getBookList();
    }
  }

  static removeFromList(e) {
    let currentDiv = e.target.parentElement;
    currentDiv.parentElement.removeChild(currentDiv);

    let bookId = parseInt(currentDiv.dataset.id, 10);
    let bookList = Storage.getData('bookList');
    let temp = bookList.filter((item) => item.bookid !== bookId);

    Storage.saveData(temp);
    UI.getBookList();
  }
}