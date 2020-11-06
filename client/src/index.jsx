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
import Test from "./components/Freelancer/FreeLancerSignupCopy.jsx";
///////////Routes///////////

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid
          style={{ flexGrow: "1", alignItems: "stretch" }}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <NavbarUA  />
          </Grid>
          <Grid item xs={12}>
            <Route path="/" component={Home} exact={true} />
            <Route path="/Offers" component={Offers} />
            <Route path="/Test" component={Test} />
            <Login />
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
