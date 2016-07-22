
const pg = require('pg-promise')({})


const config = {
apikey:       process.env.COOKAPI,
};

module.exports = {
  cuisineCall(req,res,next){
    console.log('req.body', req.body)
    let query = req.body.query
    request({
      url:https:"//spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine="+apikey,
      method: 'GET',
      json: true
    }, function(error,response, data){
      if(error);
      throw error;
    } else {
      console.log(response.statusCode, data);
      console.log(' backend data =', data)
      res.rows = data
      next()
    }

    })
  }





}
