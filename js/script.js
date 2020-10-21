let myLibrary = [];

// DOM Objects
$newButton = document.querySelector('.new');
$table = document.querySelector('table');

$form = document.querySelector('.form');
$titleInput = $form.querySelector('#title');
$authorInput = $form.querySelector('#author');
$pagesInput = $form.querySelector('#pages');
$yesButton = $form.querySelector('#yes');
$noButton = $form.querySelector('#no');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = prompt("Title: ");
  let author = prompt("Author: ");
  let pages = prompt("Pages: ");
  let read = prompt("Read: ");
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

const getReadValue = () => {
  $form
};



document.addEventListener("DOMContentLoaded", () => {

});