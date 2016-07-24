import React      from 'react'


export default class Pantry extends React.Component {

  render(){
    return (
      <div className="pantry">
        <h3>Pantry Items</h3>
          <div>
            <ul className="pantry-list">
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
