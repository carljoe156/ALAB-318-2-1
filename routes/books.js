const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("books", { title: "Books" });
});

module.exports = router;
