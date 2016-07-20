const express  = require('express');
const users    = express.Router()
const db       = require('../models/users')

const sendJSONresp = (req,res)=>res.json(res.rows)

users.route('/:user_id')
  .put(db.updateUser, sendJSONresp)
  .delete(db.deleteUser, ( req,res ) => res.send( req.params.users_id ))

users.route('/')
  .get(db.getUsers, sendJSONresp)
  .post(db.addUser, sendJSONresp)



module.exports = users;

