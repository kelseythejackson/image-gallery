import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () =>
  <nav className="main-nav">
    <ul>
          <li><NavLink exact to='/cats'>Cats</NavLink></li>
          <li><NavLink to='/dogs'>Dogs</NavLink></li>
          <li><NavLink to='/computers'>Computers</NavLink></li>
          <li><NavLink to='/sneakers'>Sneakers</NavLink></li>
          <li><NavLink to='/search'>Search</NavLink></li>
        </ul>
  </nav>

export default Navigation;
