import React      from 'react'


export default class Ingredients extends React.Component {

  render(){
    return (
      <div className="ingredients">
        <div>
            {this.props.recipes.extendedIngredients
            .map((item,i)=>{
              return (

                // <div key={i}>
                  <ul>
                    <li><button key={i}>{item.name}</button></li>
                  </ul>
                // </div>
              )
            })}
        </div>
      </div>
    )
  }
}
