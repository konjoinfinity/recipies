const express = require("express");
const parser = require("body-parser");
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");

app.use(methodOverride("_method"));
mongoose.connect("mongodb://localhost/recipes");
mongoose.Promise = Promise;

app.use(express.static("public"));

app.set("view engine", "hbs");

app.use(parser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.render("layout");
// });

app.use(require(`/Users/new/wdi/labs/recipies/routes/index.js`));

// router.get("/", function(req, res) {
//   res.render("views/index");
// });

app.listen(3008, () => console.log("listening on port 3008"));
