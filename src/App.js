import React from 'react';
import { HashRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import { RouteConfig } from "@router"
import BaseRoute from "@common/baseRoute"
import {Login} from "@pages"
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect from="/" to="/home" exact/>
          {
            RouteConfig.map((item, index) => {
              return <BaseRoute key={index} {...item}/>
            })
          }
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>

    )
  }
}

