import React, { Component } from "react";
import "./App.css";

import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./Home/Home";
import Concerts from "./Concerts/Concerts";
import Plans from "./Plans/Plans";
import PlanView from "./Plans/PlanView";
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
        <div style={{ marginTop: "50px" }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/concerts" component={Concerts} />
          <Route exact path="/plans" component={Plans} />
          <Route path="/plans/:id" component={PlanView} />
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
