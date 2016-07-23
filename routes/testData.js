const express  = require('express');
const test    = express.Router()
const db       = require('../models/testData')
const ajax      = require('../models/ajaxsearch.js')

const sendJSONresp = (req,res)=>res.json(res.rows)


test.route('/:main_id')
  .get(db.getIngredients, sendJSONresp)

test.route('/')
  .get(db.getRecipes, sendJSONresp)

test.route('/cuisine')
  .get(ajax.searchCuisine, sendJSONresp)


module.exports = test;

