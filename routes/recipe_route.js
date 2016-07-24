
const express   = require('express');
const recipe    = express.Router()
const db        = require('../models/recipes')
const ajax      = require('../models/ajaxsearch.js')



const sendJSONresp = (req,res)=>res.json(res.rows)



recipe.route('/:recipe_id')
  .delete(db.deleteRecipe, ( req,res ) => res.send( req.params.recipe_id ))


recipe.route('/')
  .get(db.getRecipes, sendJSONresp)
  .post(db.addRecipe, sendJSONresp)


module.exports = recipe;


