import React     from 'react'

export default class CuisineResults extends React.Component {
  render(){
    return (
      <div>
        {this.props.recipes.map((recipe,i)=>{
          return(
            <div key={i}>
              <h3>{recipe.title}</h3>
              <img src={"https://spoonacular.com/recipeImages/"+recipe.image} />
            </div>
            )
        })}
      </div>
      )
  }
}

export default class IngredientResults extends React.Component {
  render(){
    return (
      <div>
        {this.props.recipes.map((recipe,i)=>{
          return(
            <div key={i}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} />
            </div>
            )
        })}
      </div>
      )
  }
}


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

