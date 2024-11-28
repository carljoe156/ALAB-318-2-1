const express = require("express");
const router = express.Router();

// This is the Books Route
router.get("/", (req, res) => {
  res.render("books", { title: "Books" });
});

//Should satisfy the form handling via method POST  /books/submit
router.post("submit-books", (req, res) => {
  const bookTitle = req.body.bookTitle; // aggregates the book title from the form
  console.log(`Book Title Submitted: ${bookTitle}`);
  res.send("Success");
});

// Lists the book by it's ID via method GET: /books/:id
router.get("/:id", (req, res) => {
  const bookId = req.params.id; // using url params to get the book's id
  res.send(`Displaying details for book with ID: ${bookId}`);
});

module.exports = router;
