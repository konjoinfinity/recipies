const { Recipe } = require("./recipe.js");

module.exports = {
  index: (req, res) => {
    Recipe.find({})
      .limit(10)
      .populate("author")
      .then(recipes => {
        res.render("app/index", { recipies });
      });
  }
};

/*
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
*/
