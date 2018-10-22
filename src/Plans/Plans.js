import React, { Component } from "react";
import { connect } from "react-redux";

import "./Plans.css";

import { fetchPlans } from "../actions/plans";

import PlanList from "./PlanList";

class Plans extends Component {
  componentDidMount = () => {
    if (this.props.loggedIn) this.props.fetchPlans();
  };

  render() {
    return (
      <section className="plans">
        {this.props.loggedIn ? (
          <PlanList plans={this.props.plans} />
        ) : (
          <div>Please Log In to View Plans.</div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  plans: state.plans.plans,
  loggedIn: state.user.loggedIn
});

const mapDispatchToProps = dispatch => ({
  fetchPlans: () => dispatch(fetchPlans())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plans);
