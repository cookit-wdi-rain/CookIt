const express         = require('express');
const users           = express.Router()
const db              = require('../models/users')
const tokenService    = require('../service/tokenService')

const sendJSONresp = (req,res)=>res.json(res.rows)
const sendError    = (err,req,res,next)=>res.status(500).json(err)



users.post('/',
    db.createUser,
    (req,res) => res.status(201).json({data: 'success'}).end()
)

users.use( tokenService.validateToken )

users.get('/', db.listUsers, (req,res)=>
  res.json( res.users))


module.exports = users;


