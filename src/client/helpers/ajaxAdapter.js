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


  cuisineCall(query) {
    let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine='+ query + '&number=12'
    return fetch(url, myInit)
    .then(res => res.json() )
    .then(console.log('cuisine call worked'))
  },

  testCall() {
    return fetch('/testapi')
    .then(res=>res.json())
  },

  ingredientsCall(query) {
    let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients='+ query.replace(/\s/,'%2C')+ '&number=12'
    return fetch(url, myInit)
    .then(res => res.json() )

  },

  testCall() {
   return fetch('/testapi')
   .then(res=>res.json())
   .then(console.log(res))
  },


  recipeCall(query) {
    let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+ query + '/information'
    return fetch(url, myInit)
    .then(res => res.json() )

<<<<<<< HEAD
  },
=======
pantryCall() {
  return fetch('/pantry')
  .then(res => res.json() )
},
>>>>>>> a32f6a8d2645848d45646dac61ffa1b6dba59a1d


  secondCall(query) {
    console.log(query)
    return fetch(`/testapi/${query}`)
    .then(res=>res.json())
  },

  pantryCall() {
    return fetch('/pantry')
    .then(res=>res.json())
    .then(res=>console.log("Pantry Call ", res))
  }



}


export default ajaxAdapter;


