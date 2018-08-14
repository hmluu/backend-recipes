const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidID(req, res, next){
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

function validRecipe(recipe){
  const hasTitle = typeof recipe.title == 'string' && recipe.title.trim() != '';
  const hasURL = typeof recipe.url == 'string' && recipe.url.trim() != '';
  const hasIngredients = typeof recipe.number_of_ingredients != isNaN && recipe.number_of_ingredients.trim() != '';
  const hasInstructions = typeof recipe.instructions == 'string' && recipe.instructions.trim() != '';
  return hasTitle && hasURL && hasIngredients && hasInstructions;
}

router.get('/', (req, res) => {
  queries.getAllRecipes().then(recipes => {
    res.json(recipes);
  });
});

router.get('/:id', isValidID, (req, res, next) => {
  queries.getOne(req.params.id).then(recipe => {
    if(recipe) {
      res.json(recipe);
    } else {
      next();
    }
  });
});

router.post('/', (req, res, next) => {
  if (validRecipe(req.body)) {
  queries.create(req.body).then(recipes => {
    res.json(recipes[0]);
  });
  } else {
    next(new Error('Invalid Recipe'));
  }
});

router.put('/:id', isValidID, (req, res, next) => {
  if(validRecipe(req.body)) {
    queries.update(req.params.id, req.body).then(recipes => {
      res.json(recipes[0]);
    });
  } else {
    next(new Error('Invalid Recipe'));
  }
});

router.delete('/:id', isValidID, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});

module.exports = router;