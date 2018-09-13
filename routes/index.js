const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  const calvin = { name: "Calvin", age: 32, cool: true };
  res.render("hello");
});

router.get("/reverse/:name", (req, res) => {
  const reverse = [...req.params.name].reverse().join("");
  res.send(reverse);
});

module.exports = router;
