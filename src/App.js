import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './containers/Home';
import page_1 from './containers/page_1';
import page_2 from './containers/page_2';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/page_1" component={page_1}/>
            <Route path="/page_2" component={page_2}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
