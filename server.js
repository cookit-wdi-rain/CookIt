'use strict'

const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';
const dotenv      = (DEV) ? require('dotenv').config() : undefined;

const express     = require('express')
const morgan      = require('morgan')
const path        = require('path')
const bodyParser  = require('body-parser')
const app         = express()
// const userRoute   = require('./routes/user_route')
// const pantryRoute = require('./routes/pantry_route')
// const recipeRoute = require('./routes/recipe_route')
//Dummy SQL database for API replacement during testing
const testRoute   = require('./routes/testData')
const port        = process.argv[2] || process.env.PORT || 3000

app.use(morgan( DEV ? 'dev' : 'common'))
// app.use(morgan('dev'))

app.use(express.static(path.join(__dirname,'dist')))

app.use(bodyParser.json());

// app.use('/users', userRoute)

// app.use('/recipes', recipeRoute)

// app.use('/pantry', pantryRoute)

//Dummy SQL database for API replacement during testing
app.use('/testapi', testRoute)

app.listen(port, ()=>{
  console.log('Server maxin\' and relaxin\' at ', port)
})
