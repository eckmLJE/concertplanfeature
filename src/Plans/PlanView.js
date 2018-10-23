import React, { Component } from "react";
import { connect } from "react-redux";
import "./PlanView.css";

import { clearCurrentPlan, setCurrentPlan } from "../actions/plans";

import PlanViewPanel from "./PlanViewPanel";

class PlanView extends Component {
  componentDidMount = () => {
    this.props.clearCurrentPlan();
    const currentPlan = this.findPlanFromParams();
    this.props.setCurrentPlan(currentPlan);
  };

  findPlanFromParams = () => {
    return this.props.plans.find(plan => plan.id === this.props.planId);
  };

  render() {
    return (
      <section className="plan-view">
        {this.props.currentPlan ? <PlanViewPanel /> : null}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  plans: state.plans.plans,
  currentPlan: state.plans.currentPlan
});

const mapDispatchToProps = dispatch => ({
  clearCurrentPlan: () => dispatch(clearCurrentPlan()),
  setCurrentPlan: plan => dispatch(setCurrentPlan(plan))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanView);
