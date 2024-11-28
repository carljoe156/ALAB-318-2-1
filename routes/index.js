const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "LiberUnited" }); // Liber in Latin is Books
});

module.exports = router;
