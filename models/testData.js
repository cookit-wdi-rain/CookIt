'use strict'
const pg = require('pg-promise')({
});
const config = {
host:       process.env.DB_HOST,
port:       process.env.DB_PORT,
database:   process.env.DB_NAME,
user:       process.env.DB_USER,
password:   process.env.DB_PASS,
};

const _db = pg(config);

module.exports = {
  getRecipes(req,res,next) {
    _db.any(`SELECT * FROM cuisine;`)
       .then( recipe => {
        res.rows = recipe;
        next()
       })
       .catch( error => {
        console.error('Error', error)
       })
  },
  getIngredients(req,res,next) {
    const rID = Number.parseInt(req.params.main_id)
    _db.one(`SELECT * FROM recipe
            JOIN cuisine
            ON recipe.recipe_id=cuisine.cuisine_id
            WHERE cuisine.main_id=$1`, [rID])
        .then( ingredients => {
          res.rows = ingredients;
          next()
        })
        .catch( error => {
          console.error("error", error)
        })
  }
}


