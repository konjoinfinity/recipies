const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/controller.js");

router.get("/", (req, res) => {
  console.log("hi");
});
router.post("/", recipeController.create);

router.all("*", (req, res) => {
  res.status(404).send();
});

module.exports = router;
