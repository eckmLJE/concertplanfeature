import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { fetchPlans } from "../actions/plans";

import PlanView from "./PlanView";

class PlanViewGate extends Component {
  componentDidMount = () => {
    this.props.fetchPlans();
  };

  render() {
    return (
      <Fragment>
        {!!this.props.plans.length ? (
          <PlanView planId={this.props.match.params.id} />
        ) : null}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  plans: state.plans.plans
});

const mapDispatchToProps = dispatch => ({
  fetchPlans: () => dispatch(fetchPlans())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanViewGate);
