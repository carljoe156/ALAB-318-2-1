const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index.js");
const authorsRouter = require("./routes/authors.js");
const booksRouter = require("./routes/books.js");

const app = express();
// For the View Engine
app.set("views", "views");
app.set("view engine", "ejs");

// To handle my static files from the public folder (e.g images)
app.use(express.static(path.join(__dirname, "public")));

//Handles the Middleware for parsing request bodies, also does the static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// Our Routers
app.use("/index", indexRouter); // change the index to something on theme
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

// To display the images via render
app.get("/", (req, res) => {
  res.render("index");
});

// An error handling route for if it doesn't download
app.get("/download", (req, res) => {
  const filePath = path.join(
    __dirname,
    "public",
    "images",
    "being-a-full-stack-dev.jpg"
  );
  res.download(filePath, "being-a-full-stack-dev.jpg", (err) => {
    if (err) {
      console.error("Error Can't download the image:", err);
      res.status(500).send("Error Can't download the image.");
    }
  });
});

// For start server!
app.listen(3000, () => {
  console.log("Express is running on the port 3000");
});
