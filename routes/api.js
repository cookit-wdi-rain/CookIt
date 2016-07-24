const express         = require('express');
const api             = express.Router()
const db              = require('../models/users')
const tokenService    = require('../service/tokenService')

const sendJSONresp = (req,res)=>res.json(res.rows)
const sendError    = (err,req,res,next)=>res.status(401).json(err)



api.route('/authenticate')
     .post(db.getUserByUsername,
              tokenService.createToken,
              sendError)

api.get('/', (req, res)=>
  res.json({ message: 'Welcome to the lamest API on earth!' })
)



module.exports = api;





