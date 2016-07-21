import React     from 'react'
import ajax      from '../helpers/ajaxAdapter.js'

export default class RecipeResults extends React.Component {
  render(){
    return (
      <div>
        {this.props.recipes.extendedIngredients.map((recipe,i)=>{
          return(
            <div key={i}>
              <h3>{recipe.originalString}</h3>
              <img src={recipe.image} />
            </div>
            )
        })}
      </div>
      )
  }
}

