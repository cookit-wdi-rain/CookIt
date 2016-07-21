import React     from 'react'

export default class Results extends React.Component {
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
