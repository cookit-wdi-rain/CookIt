import React     from 'react'
import ajax      from '../helpers/ajaxAdapter.js'

export default class RecipeResults extends React.Component {
  render(){
    return (
      <div className="recipe_results">
        {this.props.recipes.map((recipe,i)=>{
          return(

            <div className="image_container" key={i}>
              <h4>{recipe.title}</h4>
              <img className="recipe_image" src={recipe.img} />
            </div>
            )
        })}
      </div>
      )
  }
}

