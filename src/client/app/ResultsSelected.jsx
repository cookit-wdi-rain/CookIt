import React     from 'react'
//import ajax      from '../helpers/ajaxAdapter.js'

export default class ResultsSelected extends React.Component {
  render(){
      return (
        <div className="recipe_results">
          <div className="image_container" key>
            <h3>{this.props.recipes.title}</h3>
            <img className="recipe_image" src={this.props.recipes.image} />
            <h4>Recipe: <a href={this.props.recipes.spoonacularSourceUrl}>{this.props.recipes.spoonacularSourceUrl}</a></h4>
        </div>

        </div>
      )
     }
  }

