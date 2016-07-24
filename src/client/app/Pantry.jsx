import React      from 'react'


export default class Pantry extends React.Component {

  render(){
    return (
      <div className="pantry">
        <h3>Pantry Items</h3>
          <ul className="ingredients-list">
              {this.props.pantry
              .map((item,i)=>{
                return (
                      <li key={i}><button className="list-group-item"
                      value={item.ingredient_name}
                      onClick={this.props.deletePantry}>
                      {item.ingredient_name}</button></li>

                )
              })}
            </ul>
      </div>
    )
  }
}

