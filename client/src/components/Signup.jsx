import React from "react";

//////Client/////

import ClientSignup from "./Client/ClientSignup.jsx";

//////FreeLancer/////

import FreelancerSignup from "./Freelancer/FreeLancerSignup.jsx";
import FreelancerSignupCopy from "./Freelancer/FreeLancerSignupCopy.jsx";
///////////Routes///////////

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/ClientSignup" component={ClientSignup} />
          <Route path="/FreeLancerSignup" component={FreelancerSignup} />
          <Route path="/FreeLancerSignupCopy" component={FreelancerSignupCopy} />
        </Switch>
      </div>
    );
  }
}
export default Signup;
