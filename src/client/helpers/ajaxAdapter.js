const ajaxAdapter = {

  getRecipes(){
    return fetch('/recipes')
      .then( r=> r.json() )
  },

  addRecipe(newIngredient){
    return fetch(`/recipes/${recipe.recipe_id}`,{
      method:'post',
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(newRecipe)
    })
    .then( r=> r.json() )
  },

  deleteRecipe(id){
    return fetch(`/recipes/${id}`,{
      method:'DELETE',
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then( r=> r.json() )
  },



}
export default ajaxAdapter
