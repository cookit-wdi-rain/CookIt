import React     from 'react'
//import ajax      from '../helpers/ajaxAdapter.js'

export default class ResultsSelected extends React.Component {
  render(){
      return (
        <div className="recipe_results">
          <div className="image_container" key>
            <h4>{this.props.recipes.title}</h4>
            <img className="recipe_image" src={this.props.recipes.image} />
          </div>
        </div>
      )
     }
  }

