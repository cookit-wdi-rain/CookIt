const express   = require('express');
const pantry    = express.Router()
const db        = require('../models/pantry_items')


const sendJSONresp = (req,res)=>res.json(res.rows)

pantry.route('/:taskID')
  .put(db.updatePantryItem, sendJSONresp)
  .delete(db.deletePantryItem, ( req,res ) => res.send( req.params.items_id ))

pantry.route('/')
  .get(db.getPantryItems, sendJSONresp)
  .post(db.addPantryItem, sendJSONresp)






module.exports = pantry;
