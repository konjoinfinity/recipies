const { Recipe } = require("../models/recipe.js");

module.exports = {
  index: (req, res) => {
    Recipe.find({})
      .limit(10)
      .populate("title")
      .then(recipes => {
        res.render("app/", { recipes });
      });
  },
  create: (req, res) => {
    Recipe.create({
      title: req.body.recipe.title,
      description: req.body.recipe.description,
      ingredients: req.body.recipe.ingredients,
      instructions: req.body.recipe.instructions,
      author: req.body.recipe.author
    }).then(recipe => {
      res.redirect("/");
    });
  }
};
