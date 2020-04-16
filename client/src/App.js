//import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import FloorView from './components/FloorView';

import './App.css';

class App extends Component {
  state = {
    alertFlag: "0"
  }
  render() {
  return (
    <Router>
    <div className="App">
      <AppNavbar SendAlertFlag = {this.state.alertFlag}></AppNavbar>
      <br/>
      <Route path = "/" exact component={FloorView} />
    </div>
    </Router>
  );
}
}


export default App;
