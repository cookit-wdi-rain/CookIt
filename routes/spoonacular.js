const express   = require('express');
const spoon     = express.Router()
const db        = require('../models/ajaxsearch')

const sendJSONresp = (req,res)=>res.json(res.rows)

spoon.route('/')
  .get(db.spoonacular, sendJSONresp)



module.exports = spoon;

