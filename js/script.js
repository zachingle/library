let myLibrary = [
  {
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    pages: 694,
    read: false
  }
];

// DOM Objects
$newButton = document.querySelector('.new');
$table = document.querySelector('.table');
$tbody = $table.querySelector('tbody');

$form = document.querySelector('.form');
$titleInput = $form.querySelector('#title');
$authorInput = $form.querySelector('#author');
$pagesInput = $form.querySelector('#pages');
$submitButton = $form.querySelector('#submit');
$returnButon = $form.querySelector('#return');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBookToLibrary = (title, author, pages, read) => {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

const getReadValue = () => $form.querySelector('input[name="read"]:checked').value;

const toggleHiddenElements = () => {
  $form.classList.toggle('hidden');
  $table.classList.toggle('hidden');
  $newButton.classList.toggle('hidden');
}

const clearForm = () => {
  $titleInput.value = null;
  $authorInput.value = null;
  $pagesInput.value = null;
}

const createReadStatusTd = (book) => {
  let $readStatusTd = document.createElement('td');
  let $readStatusButton = document.createElement('button');
  $readStatusButton.textContent = 'Change read status';
  $readStatusButton.addEventListener('click', () => {
    book.read = !book.read;
    updateTable();
  });
  $readStatusTd.appendChild($readStatusButton);
  return $readStatusTd;
}

const createDeleteReadStatusTd = (index) => {
  let $deleteTd = document.createElement('td');
  let $deleteButton = document.createElement('button');
  $deleteButton.textContent = 'Delete';
  $deleteButton.addEventListener('click', () => {
    myLibrary.splice(index);
    updateTable();
  });
  $deleteTd.appendChild($deleteButton);
  return $deleteTd;
}

const updateTable = () => {
  $tbody.textContent = '';

  myLibrary.forEach((book, index) => {
    let $row = document.createElement('tr');
    Object.keys(book).forEach(prop => {
      let $newTd = document.createElement('td');
      $newTd.textContent = book[prop];
      if (prop == 'read') $newTd.textContent = book[prop] ? 'Read' : 'Not read';
      $row.appendChild($newTd);
    }); 

    $row.appendChild(createReadStatusTd(book));
    $row.appendChild(createDeleteReadStatusTd(index));
    $tbody.appendChild($row);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  $newButton.addEventListener('click', toggleHiddenElements);

  $submitButton.addEventListener('click', () => {
    addBookToLibrary();
    updateTable();
    toggleHiddenElements();
    clearForm();
  });

  $returnButon.addEventListener('click', () => {
    toggleHiddenElements();
    clearForm();
  });


});