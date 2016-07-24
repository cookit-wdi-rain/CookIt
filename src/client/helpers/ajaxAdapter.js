

const ajaxAdapter = {

cuisineCall(query) {
  return fetch('/spoon')
  .then(res => res.json() )
  .then(console.log('worked'))
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
},

pantryCall() {
  return fetch('/pantry')
  .then(res=>console.log(res))
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


