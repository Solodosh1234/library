let bookShelf = []
function library(bookName, author, status) {
  this.bookName = bookName
  this.author = author
  this.status = status

  this.addBook = function (bookName, author, status,date) {
    bookName = this.bookName
    author = this.author
    status = this.status
    date = new Date()
    bookShelf.push({
      id: date,
      bookName,
      author,
      status,
    })
    
  }

  library.renderView = function () {
    
    let bookContainer = document.querySelector('.book-section')
    bookContainer.innerHTML = ''
    bookShelf.forEach(book => {
      let div = document.createElement('div')
       div.innerHTML = `
    <div class="book-card" bookId= "${book['id']}">
    <div class="bookTitle">${book['bookName']}</div>
    <div class="bookAuthor">${book['author']}</div>
    <div class="bookStatus">${book['status']}</div>
    <div class="delete-section"><button class="delete-btn">delete</button></div>
  </div>
    `
      bookContainer.append(div)
    })
     
 
    
  }

  library.deleteBook = function (bookId) {
    for (let i = bookShelf.length - 1; i >= 0; i--) {
      if (bookId == bookShelf[i]["id"]) {
        bookShelf.splice(i, 1)
        
      }
    }
  }
}

let title = document.querySelector('[name= "title"]')
let author = document.querySelector('[name= "author"]')
let status = document.querySelector('[name= "status"]')
document.querySelector('[name="form"]').addEventListener('submit', addBook)

function addBook(e) {
  e.preventDefault()
  if (title.value == '' || title.value == ' ') {
    alert('an input field is empty')
  } else if (author.value == '' || author.value == ' ') {
    alert('an input field is empty')
  } else {
    let newBook = new library(title.value, author.value, status.value)
    newBook.addBook()
    library.renderView()
    title.value = ''
    author.value = ''
    toDelete()
  }
}

function toDelete() {
  let deleteBtn = document.querySelectorAll('.delete-btn')
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', bookDelete)
  })
}

function bookDelete(e) {
  let bookId = e.target.parentElement.parentElement.getAttribute('bookid')
  library.deleteBook(bookId)
  library.renderView()
  toDelete()
}




