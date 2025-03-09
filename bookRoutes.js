const express = require('express');
const router = express.Router();
const books = require('../data/books.json');

// Task 1: Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Task 2: Get book by ISBN
router.get('/isbn/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  const book = books.find(b => b.isbn === isbn);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Task 3: Get books by author
router.get('/author/:author', (req, res) => {
  const author = req.params.author;
  const booksByAuthor = books.filter(b => b.author === author);
  res.json(booksByAuthor);
});

// Task 4: Get books by title
router.get('/title/:title', (req, res) => {
  const title = req.params.title;
  const booksByTitle = books.filter(b => b.title === title);
  res.json(booksByTitle);
});

module.exports = router;