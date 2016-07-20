const express  = require('express');
const users    = express.Router()
const db       = require('../models/users')

const sendJSONresp = (req,res)=>res.json(res.rows)

users.route('/:user_ID')
  .delete(db.deleteUser, ( req,res ) => res.send( req.params.users_ID ))

users.route('/')
  .get(db.getUsers, sendJSONresp)
  .post(db.addUser, sendJSONresp)



module.exports = users;

