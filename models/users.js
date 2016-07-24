const _db     = require('./connection');
const bcrypt  = require('bcrypt');
const salt    = bcrypt.genSaltSync(10);

const createSecure = (password)=>
  new Promise( (resolve,reject)=>
    bcrypt.genSalt( (err, salt)=>
      bcrypt.hash(password, salt, (err, hash)=>
        err? reject(err) : resolve(hash)
      )
    )
  )

module.exports = {
  listUsers(req,res,next) {
    _db.any(`SELECT * FROM users;`)
       .then( users => {
        res.rows = users;
        next()
       })
       .catch( error => {
        console.error('Error', error)
       })
  },

  getUserByUsername(req, res, next) {
    _db.one(`
      SELECT *
      FROM users
      WHERE email = lower(trim(from $/email/));
      `, req.body)
      .then( user=>{

        if(bcrypt.compareSync(req.body.password, user.password_digest)){
          res.user = user;
        }else{
          res.error = true
        }
        console.log(res.user)
        next()

      })
      .catch( error=>{
        console.error('Error ', error);
        res.error = error
        next()
      })
  },

  createUser(req,res,next) {
    console.log('=====', req.body)
    createSecure(req.body.password)
     .then( hash=>{
        _db.one(`
          INSERT INTO users (first_name, email, password_digest)
          VALUES ($1, $2, $3)
          returning *;`,[req.body.name, req.body.email, hash]
        )
        .then( newUser=> {
          console.log(newUser)
          res.user = newUser;
          next()
        })
        .catch( err=> {
          console.log(err)
          next()
        })

      });
  },














