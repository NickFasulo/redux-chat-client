import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class TopNav extends Component {
  render() {
    return (
      <ul className="nav__ul">
        <li>
          <NavLink
            to="/user-profile"
            className="navbar"
            activeStyle={{ fontWeight: 'bold' }}
            activeClassName="selected"
          >
            {this.props.username}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className="navbar"
            activeStyle={{ fontWeight: 'bold' }}
            activeClassName="selected"
            onClick={() => {}}
          >
            logout
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default TopNav;
