import React     from 'react'

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


export default class FullResults extends React.Component {
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

