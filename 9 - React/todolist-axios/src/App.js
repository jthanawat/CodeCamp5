import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, NavLink, Link, Redirect } from 'react-router-dom'
import Login from './components/Pages/Login';
import Index from './components/Pages/Index';
import Register from './components/Pages/Register';
import Profile from './components/Pages/Profile';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
