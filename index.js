const express = require("express");
const parser = require("body-parser");
const app = express();
const methodOverride = require("method-override");
const recipeController = require("./controller.js");

app.use(methodOverride("_method"));

app.use(express.static("public"));

app.set("view engine", "hbs");

app.use(parser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("layout");
});

app.get("/", (req, res) => {
  console.log(
    Recipe.find({})
      .limit(10)
      .populate("title")
  );
});
//router.get("/", function(req, res) {
//  res.render("views/index");
//});

app.listen(3008, () => console.log("listening on port 3008"));
