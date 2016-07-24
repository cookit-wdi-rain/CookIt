import React      from 'react'


export default class Ingredients extends React.Component {

  render(){
    return (
      <div className="ingredients">
        <h3>Ingredients</h3>
          <div>
            <ul className="ingredients-list">
              {this.props.recipes.extendedIngredients
              .map((item,i)=>{
                return (

                  // <div key={i}>
                      <li><button className="list-group-item" key={i}>{item.name}</button></li>
                  // </div>
                )
              })}
            </ul>
          </div>
      </div>
    )
  }
}
