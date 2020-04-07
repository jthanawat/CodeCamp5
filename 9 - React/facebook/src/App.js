import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import LogInPage from "./login/LogInPage"

function App() {
  return (

    <Switch>
      <Route exact path='/'>
        <div className="App">

        </div>
      </Route>
      <Route path="/home"></Route>
      <Route path="/login"> <LogInPage /> </Route>
    </Switch>
  );
}

export default App;
