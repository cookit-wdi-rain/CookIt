'use strict'

const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';
const dotenv      = (DEV) ? require('dotenv').config() : undefined;
const express     = require('express')
const morgan      = require('morgan')
const path        = require('path')
const bodyParser  = require('body-parser')
const app         = express()
const movieRoute  = require('./routes/movies')
const port        = process.argv[2] || process.env.PORT || 3000

app.use(morgan( DEV ? 'dev' : 'common'))
app.use(bodyParser.json());



app.use('/movies', movieRoute)
app.use(express.static(path.join(__dirname,'dist')))




app.listen(port, ()=>{
  console.log('Server maxin\' and relaxin\' at ', port)
})
