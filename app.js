const express = require("express");
const indexRouter = require("./routes/index.js");
const authorsRouter = require("./routes/authors.js");
const booksRouter = require("./routes/books.js");

const app = express();
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", indexRouter); // change the index to something on theme
app.use("/authors", authorsRouter);
app.use("/books", booksRouter);

app.listen(3000, () => {
  console.log("Express is running on the port 3000");
});
