'use strict'
const request = require('request')
const apikey= process.env.COOKAPI;
const myInit = {
  method: 'GET',
  headers: {
    "X-Mashape-Key": apikey }
}

module.exports = {

cuisineCall(req,res,next) {
request({
    url:'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine=italian',
    method:'get',
    headers: {
      "X-Mashape-Key": apikey
    },
    json:true
  }
  ,(err,result,body)=>{
    if (err) throw err;
    console.log('here')
    res.json(body.result)
  })
  next()
}
}



