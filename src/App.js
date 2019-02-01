import React, { Component } from 'react';
import Footer from './react/components/Footer'
import Navbar from './react/components/Navbar'
import {withRouter, Route, Switch} from 'react-router-dom'
import SignUpForm from './react/components/SignUpForm'
import LoginForm from './react/components/LoginForm'
import './App.css';


class App extends Component {




  render() {
    return (
      <>

        <Navbar currentUser={this.props.user}/>


      <Switch>
      <Route path="/signup" component={()=><SignUpForm/>}/>
      <Route path="/login" component={()=><LoginForm/>}/>
      </Switch>
        <Footer/>
      </>
    );
  }
}

export default withRouter(App);
