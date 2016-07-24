import React      from 'react'


export default class Pantry extends React.Component {

  render(){
    return (
      <div className="pantry">
        <h3>Pantry Items</h3>
          {this.props.pantry.map((item,i)=>{
            return(
              <div className="image_container" key={i}>
                <h4>{item.ingredient_name}</h4>
              </div>
            )
          })
          }
      </div>
    )
  }
}

