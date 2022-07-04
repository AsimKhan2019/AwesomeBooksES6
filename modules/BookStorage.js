export default class BookStorage {
  static saveData(dataObj) {
    let dataString = JSON.stringify(dataObj);
    localStorage.setItem('bookList', dataString);
  }

  static getData(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}
