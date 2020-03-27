import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from './Homepage'
import Resume from './Resume'
import Facebook from './Facebook'
import App from './App'
import 'antd/dist/antd.css';

export default class MyWeb extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/resume" component={Resume} />

        <Route path="/facebook" component={Facebook} />
        <Route path="/app" component={App} />
      </Switch>
    )
  }
}
