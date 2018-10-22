import React from "react";
import { connect } from "react-redux";
import "./PlanViewButtonSwitcher.css";

import { JoinPlanButton } from "../Buttons/Buttons";
import { addPlanUser } from "../actions/plans";

const PlanViewButtonSwitcher = props => (
  <JoinPlanButton joinPlan={() => props.addPlanUser(props.planId)} />
);

// const mapStateToProps = state => ({
//     loggedIn: state.user.loggedIn,
//     currentUser: state.user.currentUser,
//     plans: state.plans.plans
//   });

const mapDispatchToProps = dispatch => ({
  addPlanUser: planId => dispatch(addPlanUser(planId))
});

export default connect(
  null,
  mapDispatchToProps
)(PlanViewButtonSwitcher);
