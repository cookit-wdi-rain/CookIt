'use strict'

const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';
const dotenv      = (DEV) ? require('dotenv').config() : undefined;

const express     = require('express')
const morgan      = require('morgan')
const path        = require('path')
const bodyParser  = require('body-parser')
const app         = express()
const userRoute   = require('./routes/user-route')
const pantryRoute = require('./routes/pantry-route')
const recipeRoute = require('./routes/recipe-route')
const port        = process.argv[2] || process.env.PORT || 3000

app.use(morgan( DEV ? 'dev' : 'common'))
app.use(bodyParser.json());

app.use('/users', userRoute)
app.use(express.static(path.join(__dirname,'dist')))

app.use('/recipes', recipeRoute)
app.use(express.static(path.join(__dirname,'dist')))

app.use('/pantry', pantryRoute)
app.use(express.static(path.join(__dirname,'dist')))

app.listen(port, ()=>{
  console.log('Server maxin\' and relaxin\' at ', port)
})
