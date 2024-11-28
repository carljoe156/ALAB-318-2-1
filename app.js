const express = require("express");
const indexRouter = require("./routes/index.js");
const authorsRouter = require("./routes/authors.js");
const booksRouter = require("./routes/books.js");

const app = express();
// For the View Engine
app.set("views", "views");
app.set("view engine", "ejs");

//Handles the Middleware for parsing request bodies, also does the static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Our Routers
app.use("/", indexRouter); // change the index to something on theme
app.use("/authors", authorsRouter);
app.use("/books", booksRouter);

// Our next middleware checker
const checkerMiddleware = (req, res, next) => {
  console.log(
    `${req.method} request to ${req.url} at ${new Date().toISOString()}`
  );
  next();
};
//active for all routes
app.use(checkerMiddleware);

// For start server!
app.listen(3000, () => {
  console.log("Express is running on the port 3000");
});
