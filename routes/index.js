const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Express" }); // think of a clever homepage name
});

module.exports = router;
