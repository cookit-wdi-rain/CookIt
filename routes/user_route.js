const express  = require('express');
const users    = express.Router()
const db       = require('../models/users')

const sendJSONresp = (req,res)=>res.json(res.rows)

<<<<<<< HEAD
users.route('/:user_ID')
  .delete(db.deleteUser, ( req,res ) => res.send( req.params.users_ID ))
=======

// users.route('/:user_ID')
  //.put(db.updatePantryItem, sendJSONresp)
  // .delete(db.deleteusers, ( req,res ) => res.send( req.params.users_ID ))
>>>>>>> 59f08b9022822f7ca3923947277ae94f497825e3


users.route('/')
  .get(db.getUsers, sendJSONresp)
  .post(db.addUser, sendJSONresp)



module.exports = users;

