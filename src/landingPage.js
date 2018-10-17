import React, { Component } from "react";
import auth from "./auth";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <button
          onClick={() => {
            auth.login(() => {
              this.props.history.push("./app");
            });
          }}
        >
          Login
        </button>
      </div>
    );
  }
}

export default LandingPage;
