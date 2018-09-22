import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './Views/Dashboard/Dashboard';
import Details from './Views/Details/Details';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/details/:name" component={Details}/>
            <Route path="/" component={Dashboard}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
