
import React from 'react';

const Nav = props=>
<nav className="navbar navbar-inverse navbar-static-top">
 <div className="container-fluid">
    <div className="navbar-header ">
      <a href="#"  className="logo"><img className="headerLogo" src="http://i.imgur.com/5VkOZVD.png"  /></a>
    </div>

    <p className="navbar-text gaDisplayFont">CookIt</p>
    <h1 className="headerName">CookIt</h1>
    <p className="navbar-text navbar-right navbar-last">Signed in as <a href="#" className="navbar-link"> Guest </a> <span className="glyphicon glyphicon-user"></span></p>
  </div>
</nav>

export default Nav;
