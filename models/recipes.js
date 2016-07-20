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
    _db.any(`SELECT * FROM favorite_recipes;`)
       .then( recipes => {
        res.rows = recipes;
        next()
       })
       .catch( error => {
        console.error('Error', error)
       })
  },
  addRecipe(req,res,next) {
    console.log('=====', req.body)
    _db.any(
      `INSERT INTO
      favorite_recipes (recipe_id,
                        recipe_name,
                        recipe_url,
                        img_link)
      VALUES ($/recipe_id/,
              $/recipe_name/,
              $/recipe_url/,
              $/img_link/)
      returning *;`, req.body
    )
    .then(recipe => {
      console.log('Added recipe successfully');
      res.rows = recipe;
      next()
    })
    .catch(error =>{
      console.error('Error in ADDING recipe', error)
    })
  },
  deleteRecipe(req,res,next) {
    const rID = Number.parseInt(req.params.recipe_id)
    _db.none(
      `DELETE FROM favorite_recipes
      WHERE favorites_id = $1;`, [rID]
    )
    .then(() => {
      console.log('Deleted recipe successfully');
      next()
    })
    .catch(error =>{
      console.error('Error in DELETE recipe', error)
    })
  }
}


