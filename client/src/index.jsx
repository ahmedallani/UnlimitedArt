import React from "react";
import ReactDOM from "react-dom";
///////////Redux///////////

import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../Redux/redux";

///////////Components///////////
import { Grid } from "@material-ui/core";

import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import NavbarUA from "./components/navbar.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Offers from "./components/Offers.jsx";
///////////Routes///////////

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { display: "Home", path: "/" },
        { display: "Offers", children: [{ display: "List", path: "/" }] },
        { display: "About", path: "/About" },
        {
          display: "SignUp",
          children: [
            { display: "As FreeLancer", path: "/FreeLancerSignup" },
            { display: "As Client", path: "/ClientSignup" },
          ],
        },
        {
          display: "Login",
          children: [
            { display: "As FreeLancer", path: "/FreeLancerLogin" },
            { display: "As Client", path: "/ClientLogin" },
          ],
        },
      ],
    };
    this.changeNavbar = this.changeNavbar.bind(this);
  }
  changeNavbar(type) {
    if (type == "client") {
      this.setState({
        links: [
          { display: "Home", path: "/" },
          {
            display: "Offers",
            children: [
              { display: "List", path: "/" },
              { display: "Posted Offers", path: "/" },
              { display: "post offer", path: "/" },
            ],
          },
          { display: "About", path: "/" },
          {
            display: "Account",
            children: [{ display: "Profile", path: "/Profile" }],
          },
          { display: "Contact", path: "/" },
          { display: "Logout", path: "/" },
        ],
      });
    } else if (type == "freelancer") {
      this.setState({
        links: [
          { display: "Home", path: "/" },
          {
            display: "Offers",
            children: [
              { display: "List", path: "/" },
              { display: "Applications", path: "/" },
            ],
          },
          { display: "About", path: "/" },
          {
            display: "Account",
            children: [{ display: "Profile", path: "/Profile" }],
          },
          { display: "Contact", path: "/" },
          { display: "Logout", path: "/" },
        ],
      });
    }
  }
  render() {
    return (
      <div>
        <Grid
          style={{ flexGrow: "1",alignItems: "stretch" }}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <NavbarUA links={this.state.links} />
          </Grid>
          <Grid item xs={12}>
            <Route path="/" component={Home} exact={true} />
            <Route path="/Offers" component={Offers} />
            <Login Change={this.changeNavbar} />
            <Signup />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const store = createStore(rootReducer);
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>{" "}
  </Router>,
  document.getElementById("app")
);
