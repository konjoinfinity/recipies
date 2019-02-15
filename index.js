const express = require("express");
const parser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/recipes");
mongoose.Promise = Promise;

app.use(express.static("public"));

app.set("view engine", "hbs");

app.use(parser.urlencoded({ extended: true }));

const router = express.Router();

router.get("/", function(req, res) {
  res.render("views/index");
});

const message = "Recipe!";

app.listen(3008, () => console.log("listening on port 3008"));

app.get("/", (req, res) => {
  res.render("layout");
});

//routes for crud
