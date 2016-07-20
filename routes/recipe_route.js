
const express   = require('express');
const router    = express.Router()
const db        = require('../models/recipes')

router.get('/', function (req,res){
  res.send('RECIPE PAGE')
})







module.exports = router;

