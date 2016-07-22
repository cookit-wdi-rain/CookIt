import React     from 'react'
//import ajax      from '../helpers/ajaxAdapter.js'

export default class Results extends React.Component {
  render(){
    if(!this.props.selected){
      return (
        <div className="recipe_results">
          {this.props.recipes.map((recipe,i)=>{
            return(
              <div className="image_container" key={i}>
                <h4>{recipe.title}</h4>
                  <img className="recipe_image" src={recipe.img} />
                  <button value={recipe.main_id} onClick={this.props.onSelectRecipe}>Save</button>


              </div>
              )
          })}
        </div>
      )
    } else {
      return (
        <div className="recipe_results">
          {this.props.recipes.map((recipe,i)=>{
            return(
              <div className="image_container" key={i}>
                <h4>{recipe.title}</h4>
                  <button
                  value={recipe.main_id}
                  onClick={this.props.onSelectRecipe}>
                  <img className="recipe_image" src={recipe.img} />
                  </button>
              </div>
              )
          })}
        </div>
      )
     }
  }
}
