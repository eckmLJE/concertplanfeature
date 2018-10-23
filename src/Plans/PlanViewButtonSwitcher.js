import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./PlanViewButtonSwitcher.css";

import { JoinPlanButton } from "../Buttons/Buttons";
import { LeavePlanButton } from "../Buttons/Buttons";
import { addPlanUser, removePlanUser } from "../actions/plans";

class PlanViewButtonSwitcher extends Component {
  checkPlanUsers = () => {
    return this.props.currentPlan.attributes.users.some(
      user => user.id.toString() === this.props.currentUser.id
    );
  };

  render() {
    return (
      <Fragment>
        {this.checkPlanUsers() ? (
          <LeavePlanButton
            leavePlan={() => this.props.removePlanUser(this.props.plan.id)}
          />
        ) : (
          <JoinPlanButton
            joinPlan={() => this.props.addPlanUser(this.props.planId)}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  addPlanUser: planId => dispatch(addPlanUser(planId)),
  removePlanUser: planId => dispatch(removePlanUser(planId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanViewButtonSwitcher);
