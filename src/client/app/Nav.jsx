
import React from 'react';

const Nav = props=>
<nav className="navbar navbar-inverse navbar-static-top">
 <div className="container-fluid">
    <div className="navbar-header ">
      <a href="#" className="navbar-brand"><img  src="http://i.imgur.com/5VkOZVD.png" className="headerLogo" /></a>
    </div>

    <p className="navbar-text gaDisplayFont">React To-Do Demo</p>
    <p className="navbar-text navbar-right navbar-last">Signed in as <a href="#" className="navbar-link"> Guest </a> <span className="glyphicon glyphicon-user"></span></p>
  </div>
</nav>

export default Nav;
