const express = require("express");
const router = express.Router();
const recipeController = require("./controller.js");

//router.post("/", recipeController.create);

router.get("/", recipeController.index);

router.all("*", (req, res) => {
  res.status(404).send();
});

module.exports = router;
module.exports = recipeController;
