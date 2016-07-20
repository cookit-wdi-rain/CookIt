
const express   = require('express');
const recipe    = express.Router()
const db        = require('../models/recipes')

const sendJSONresp = (req,res)=>res.json(res.rows)

// recipe.route('/:recipeID')
//   .delete(db.deleteRecipe, ( req,res ) => res.send( req.params.recipe_ID ))

recipe.route('/')
  .get(db.getRecipes, sendJSONresp)
  .post(db.addRecipe, sendJSONresp)


module.exports = recipe;

