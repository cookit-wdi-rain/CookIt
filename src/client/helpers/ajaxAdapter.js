const myInit = {
 method: 'GET',
 headers: {
   "X-Mashape-Key": "9nRKaBF7ulmshtZuHpCkDn8KSmPGp19tV5Djsn4isweJZ0ax0S"
}
}

const ajaxAdapter = {

 constructor(fetch){
    if(!fetch) throw "We need the Fetch library to make this work, bru.";
  },


  createUser(newUser){
    return fetch('/api/users',{
      method:'POST',
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(newUser)
    })
    .then( r=> r.json() )
  },

addPantry(item){
    console.log(item)
    return fetch('/pantry',{
      method:'POST',
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(item)
    })
    .then( r=> r.json() )
  },

deletePantry(item){
    return fetch('/pantry',{
      method:'DELETE',
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(item)
    })
    .then( r=> console.log(r) )
  },

  cuisineCall(query) {
    let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine='+ query + '&number=12'
    return fetch(url, myInit)
    .then(res => res.json() )
    .then(console.log('cuisine call worked'))
  },



  ingredientsCall(query) {
    let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients='+ query.replace(/\s/,'%2C')+ '&number=12'
    return fetch(url, myInit)
    .then(res => res.json() )

  },




  recipeCall(query) {
    let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+ query + '/information'
    return fetch(url, myInit)
    .then(res => res.json() )
},




  pantryCall() {
    return fetch('/pantry')
    .then(res=>res.json())
    }

}


export default ajaxAdapter;


