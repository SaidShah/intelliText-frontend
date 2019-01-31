import React, { Component } from 'react';
import Footer from './react/components/Footer'
import Navbar from './react/components/Navbar'
import {withRouter} from 'react-router-dom'
import './App.css';


class App extends Component {
  render() {
    return (
      <>
      <div className="App">
        <h2>intelliText</h2>
        <Navbar/>
        <Footer/>
      </div>
      </>
    );
  }
}

export default withRouter(App);
