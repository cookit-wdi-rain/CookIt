const express   = require('express');
const pantry    = express.Router()
const db        = require('../models/pantry_items')
const tokenService    = require('../service/tokenService')


const sendJSONresp = (req,res)=>res.json(res.rows)

// pantry.use( tokenService.validateToken)

pantry.route('/:item_id')
  .put(db.updatePantryItem, sendJSONresp)
  .delete(db.deletePantryItem, ( req,res ) => res.send( req.params.items_id ))

pantry.route('/')
  .get(db.getPantryItems, sendJSONresp)
  .post(db.addPantryItem, (req,res) => res.status(201).json({data: 'success'}).end())






module.exports = pantry;

