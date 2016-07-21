// const ajaxAdapter = {

var myHeaders = process.env.COOKAPI;

var myInit = {
  method: 'GET',
  headers: {
    "X-Mashape-Key": "02d8I6TtiSmshzL98NMXgYIAfXUzp1B7gzkjsn5kJ5mRqk5r4Y"
  }
}

function CuisineCall(query) {
  let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine='+ query

  return fetch(url, myInit).then(res => res.json() )
}



export default CuisineCall;


function IngredientsCall(query) {
  let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients='+ query

  return fetch(url, myInit).then(res => res.json() )
}



export default IngredientsCall;


function FullCall(query) {
  let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+ query + '/information'

  return fetch(url, myInit).then(res => res.json() )
}



export default FullCall;









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

// }
// export default ajaxAdapter

