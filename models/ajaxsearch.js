
const pg = require('pg-promise')({})


const config = {
apikey:       process.env.COOKAPI,
};

module.exports = {
   searchCuisine(req,res,next) {
    console.log('req.body = ', req.body);
    // let title = req.body.title;
    // let queryParams = { t: title, r: 'json' };
    let api_url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine='

    console.log("queryParams = ", queryParams);
    request({
        url: api_url, //URL to hit
        // qs: queryParams, //Query string data
        method: 'GET', //Specify the method
        json: true
    }, function(error, response, data){
        if(error) {
          console.log(error);
          throw error;
        } else {
          console.log(response.statusCode, data);
          console.log("backend data = ", data);
          res.rows = data;
          next();
        }
    });
  },
}
