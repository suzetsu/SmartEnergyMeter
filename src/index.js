import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/login'
import Dashboard from './components/dashboard'
import Admin from './components/admin'
import Customer from './components/customer'
import Signup from './components/signup';
import {
  BrowserRouter as Router,
  Route,
  Switch
  
} from "react-router-dom";

ReactDOM.render(
  <React.Fragment>
  <Router>
  <div>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/customer" component={Customer}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Switch> 
  </div>
  </Router>
  </React.Fragment>
  ,
  document.getElementById('root')
);




