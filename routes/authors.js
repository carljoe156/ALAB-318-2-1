const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("authors", { title: "Authors" });
});

module.exports = router;
