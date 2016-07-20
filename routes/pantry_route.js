const express   = require('express');
const router    = express.Router()
const db        = require('../models/pantry_items')


router.get('/', function (req,res){
  res.send('PANTY PAGE')
})






module.exports = router;
