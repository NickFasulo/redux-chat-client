import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <ul className="nav__ul">
        <li>
          <NavLink
            to="/user-profile"
            className="navbar"
            
            
          >
            {this.props.username}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className="navbar"
            
            
            onClick={() => {}}
          >
            logout
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Navbar;
