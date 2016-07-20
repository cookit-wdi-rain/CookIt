<<<<<<< HEAD
'use strict'

const ajaxAdapter = {

  getTasks(){
    return fetch('/tasks')
      .then( r=> r.json() )
  },


  createTask( newTask ){
    return fetch ('/tasks',{
      method: 'POST',
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      },
      body:JSON.stringify(newTask)
    })
    .then(r=> r.json() )
  },


  updateTask( task ){
    return fetch (`/tasks/${task.task_id}`,{
      method: 'PUT',
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      },
      body:JSON.stringify(task)
    })
    .then(r=> r.json() )
  },


  deleteTask( task ){
    return fetch (`/tasks/${task.task_id}`,{
      method: 'DELETE',
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      },
      body:JSON.stringify(task)
    })
    .then(r=> r.json() )

  },

}
=======
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
>>>>>>> 5570aafb6e16057130b664ea558b4c22f3e9e6c2
