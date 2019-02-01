import React from 'react';
import {Link } from 'react-router-dom'

const NavBarLoggedIn = () => (
  <>
  <li className="nav-item">
    <Link className="nav-link" to="/login">Log Out</Link>
  </li>
  </>
);

export default NavBarLoggedIn;
