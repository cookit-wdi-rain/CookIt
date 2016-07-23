import React from 'react';
require('../images/cookit.png')

export default class Header extends React.Component {
  render(){

    return (
      <div className="header">
        <img className="logo" src="../images/cookit.png"/>
      </div>
    )
  }
}


