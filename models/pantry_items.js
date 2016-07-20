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
  getPantryItems(req,res,next) {
    _db.any(`SELECT * FROM pantry_items;`)
       .then( pantry_items => {
        res.rows = pantry_items;
        next()
       })
       .catch( error => {
        console.error('Error', error)
       })
  },
  addPantryItem(req,res,next) {
    console.log('=====', req.body)
    _db.any(
      `INSERT INTO
      pantry_items (ingredient_name)
      VALUES ($/ingredient_name/)
      returning *;`, req.body
    )
    .then(pantry_items => {
      console.log('Added pantry_items successfully');
      res.rows = pantry_items;
      next()
    })
    .catch(error =>{
      console.error('Error in ADDING pantry_items', error)
    })
  },

  updatePantry_items(req,res,next) {
    req.body.pID = Number.parseInt(req.params.pantry_itemsID)
    req.body.completed = !!req.body.completed;
    _db.one(
      `UPDATE pantry_itemss
      SET ingredient_name = $/ingredient_name/,
      WHERE items_id = $/pID/
      returning * ;`, req.body
    )
    .then(pantry_items => {
      console.log('Update pantry_items successfully');
      res.rows = pantry_items;
      next()
    })
    .catch(error =>{
      console.error('Error in Updating pantry_items', error)
    })
  },

  deletePantryItems(req,res,next) {
    const pID = Number.parseInt(req.params.pantry_itemsID)
    _db.none(
      `DELETE FROM pantry_itemss
      WHERE items_id = $1;`, [tID]
    )
    .then(() => {
      console.log('Deleted pantry_items successfully');
      next()
    })
    .catch(error =>{
      console.error('Error in DELETE pantry_items', error)
    })
  }
}


