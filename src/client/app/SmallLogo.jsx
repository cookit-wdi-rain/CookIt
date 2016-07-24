import React      from 'react'
require('../images/cookit-small.png')

export default class SmallLogo extends React.Component {
  render(){

    return (
      <div className="smallHeader">
        <a href="/"><img className="smallLogo" src="../images/cookit-small.png"/></a>
      </div>
    )
  }
}
