<<<<<<< HEAD
let myInit = {
 method: 'GET',
 headers: {
   "X-Mashape-Key":
 }
=======
// let myInit = {
//   method: 'GET'
//   // headers: {
//   //   "X-Mashape-Key":
//  }
>>>>>>> 909865f138391b9492933f9ab76250f7fd89020f

const ajaxAdapter = {

cuisineCall(query) {
<<<<<<< HEAD
 }
 let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine='+ query
 return fetch(url, myInit)
 .then(res => res.json() )
=======

  let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine='+ query
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
>>>>>>> 909865f138391b9492933f9ab76250f7fd89020f
},

testCall() {
 return fetch('/testapi')
 .then(res=>res.json())
},

<<<<<<< HEAD

ingredientsCall(query) {
 let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients='+ query
 return fetch(url, myInit)
 .then(res => res.json() )
},


recipeCall(query) {
 let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+ query + '/information'
 return fetch(url, myInit)
 .then(res => res.json() )
=======
recipeCall(query) {
  let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+ query + '/information'
  return fetch(url, myInit)
  .then(res => res.json() )
>>>>>>> 909865f138391b9492933f9ab76250f7fd89020f
},


secondCall(query) {
<<<<<<< HEAD
 return fetch('/testapi/'+query)
 .then(res=>res.json())
}


=======
  return fetch('/testapi/'+query)
  .then(res=>res.json())
}

}
>>>>>>> 909865f138391b9492933f9ab76250f7fd89020f
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

<<<<<<< HEAD
}
export default ajaxAdapter;
=======

export default ajaxAdapter;

>>>>>>> 909865f138391b9492933f9ab76250f7fd89020f
