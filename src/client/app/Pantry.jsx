import React      from 'react'


export default class Pantry extends React.Component {

  render(){
    return (

      <div className="pantry-results">
          {this.props.pantryItems.map((recipe,i)=>{
            return(
              <div className="image_container" key={i}>
                <h4>{recipe.ingredient_name}</h4>
              </div>
            )
          })
          }
      </div>
    )
  }
}

