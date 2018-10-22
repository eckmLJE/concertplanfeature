import React, { Component } from "react";
import "./App.css";

import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./Home/Home";
import Concerts from "./Concerts/Concerts";
import Plans from "./Plans/Plans";
import PlanViewGate from "./Plans/PlanViewGate";
import Header from "./Header/Header";

import { loadUser } from "./actions/user";

class App extends Component {
  componentDidMount = () => {
    this.props.loadUser();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div style={{ marginTop: "75px" }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/concerts" component={Concerts} />
          <Route exact path="/plans" component={Plans} />
          <Route path="/plans/:id" component={PlanViewGate} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(loadUser())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
