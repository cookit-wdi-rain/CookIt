import React     from 'react'
import ajax      from '../helpers/ajaxAdapter.js'

export default class Results extends React.Component {
  render(){
    return (
      <div className="recipe_results">
        {this.props.recipes.map((recipe,i)=>{
        let here = this
          return(
            <div className="image_container"
            <div key={i}>
              <h3>{recipe.title}</h3>
              <img className="recipe_image" src={recipe.img} />
              <form onSubmit={here.props.onSelectRecipe}>
                <input type="hidden" value={recipe.main_id}/>
                <button>Save</button>
              </form>

            </div>
            )
        })}
      </div>
      )
  }
}
