import React     from 'react'
import ajax      from '../helpers/ajaxAdapter.js'

export default class IngredientResults extends React.Component {
  render(){
    // if(this.state.dropdown === )
    return (

      <div className="ingredient_results">
        {this.props.recipes.map((recipe,i)=>{
          return(

            <div className="image_container" key={i}>
              <h4>{recipe.title}</h4>
              <img className="recipe_image" src={"https://spoonacular.com/recipeImages/"+recipe.image} />
            </div>
            )
        })}
      </div>
      )
  }
}

