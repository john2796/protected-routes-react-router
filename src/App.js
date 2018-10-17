import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./landingPage";
import appLayout from "./appLayout";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Protected React Router</h1>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/app" component={appLayout} />
        </div>
      </Router>
    );
  }
}

export default App;
