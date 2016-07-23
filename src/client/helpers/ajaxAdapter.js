
const myInit = {
  method: 'GET',
  headers: {
    "X-Mashape-Key": "9nRKaBF7ulmshtZuHpCkDn8KSmPGp19tV5Djsn4isweJZ0ax0S"
 }
}


const ajaxAdapter = {

cuisineCall(query) {


  let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine='+ query
  // let url = 'http://api.yummly.com/v1/api/recipes?_app_id=c37dfa7e&_app_key=1e1d63556d43eda1326e848eb3e5b596&q=onion+soup'

  return fetch(url, myInit)
  .then(res => res.json() )
},


testCall() {
  return fetch('/testapi')
  .then(res=>res.json())
},

ingredientsCall(query) {
  let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients='+ query
  return fetch(url, myInit)
  .then(res => res.json() )

},

testCall() {
 return fetch('/testapi')
 .then(res=>res.json())
},


recipeCall(query) {
  let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+ query + '/information'
  return fetch(url, myInit)
  .then(res => res.json() )

},


secondCall(query) {
  console.log(query)
  return fetch(`/testapi/${query}`)
  .then(res=>res.json())
}


}

//   getRecipes(){
//     return fetch('/recipes')
//       .then( r=> r.json() )
//   },

//   addRecipe(newIngredient){
//     return fetch(`/recipes/${recipe.recipe_id}`,{
//       method:'post',
//       headers:{
//         "Content-type": "application/json; charset=UTF-8"

//       },
//       body: JSON.stringify(newRecipe)
//     })
//     .then( r=> r.json() )
//   },

//   deleteRecipe(id){
//     return fetch(`/recipes/${id}`,{
//       method:'DELETE',
//       headers:{
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     }).then( r=> r.json() )
//   },



export default ajaxAdapter;


