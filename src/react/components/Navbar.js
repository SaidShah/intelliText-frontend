import React, { Component } from "react";
import {Link} from 'react-router-dom'
import NavBarLoggedOut from './NavbarLoggedOut'
import NavBarLoggedIn from './NavbarLoggedIn'

class Navbar extends Component {

render() {
  return (
    <>

    <nav className="navbar fixed-top navbar-expand-lg navbar-dark blue scrolling-navbar">
      <Link className="navbar-brand" to="/"><strong>IntelliText</strong></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/train">Train</Link>
          </li>
          {this.props.user ? <NavBarLoggedIn/> : <NavBarLoggedOut/>}


        </ul>
        <ul className="navbar-nav nav-flex-icons">
          <li className="nav-item">
            <a className="nav-link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" ></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" ></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" ></i></a>
          </li>
        </ul>
      </div>
    </nav>

    </>
    );
  }
}

export default Navbar;
