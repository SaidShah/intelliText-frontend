import React from 'react';
import {Link} from 'react-router-dom'

const NavBarLoggedOut = () => (
  <>
  <li className="nav-item">
    <Link className="nav-link" to="/login">Log in</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/signup">Sign up</Link>
  </li>
  </>
);

export default NavBarLoggedOut;
