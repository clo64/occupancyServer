import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import FloorView from './components/FloorView';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <AppNavbar></AppNavbar>
      <br/>
      <Route path = "/" exact component={FloorView} />
    </div>
    </Router>
  );
}

export default App;
