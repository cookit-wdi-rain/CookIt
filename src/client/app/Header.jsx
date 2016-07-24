import React from 'react';
require('../images/cookit.png')

export default class Header extends React.Component {
  render(){

    return (
      <div className="header">
        <a href="/"><img className="logo" src="../images/cookit.png"/></a>
      </div>
    )
  }
}


