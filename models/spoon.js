'use strict'
const request = require('request')
const apikey= process.env.COOKAPI;
const myInit = {
  method: 'GET',
  headers: {
    "X-Mashape-Key": apikey }
}

module.exports = {

spoonacular(req,res,next) {
request({
    url:'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine='+req.body.cuisine,
    method:'get',
    headers: {
      "X-Mashape-Key": apikey
    },
    json:true
  }
  ,(err,result,body)=>{
    if (err) throw err;
    res.rows = result.body.results
    console.log(res.rows)
    next()
  })
}
}



