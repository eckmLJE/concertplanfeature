import React, { Component } from "react";
import { connect } from "react-redux";
import "./PlanView.css";

import PlanViewPanel from "./PlanViewPanel";

class PlanView extends Component {
  selectPlan = () => {
    const planId = this.props.match.params.id;
    return this.props.plans.find(plan => plan.id === planId);
  };

  render() {
    return (
      <section className="plan-view">
        {this.props.plans.length ? (
          <PlanViewPanel plan={this.selectPlan()} />
        ) : null}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  plans: state.plans.plans
});

//   const mapDispatchToProps = dispatch => ({
//     navTo: nav => dispatch(navTo(nav))
//   });

export default connect(
  mapStateToProps,
  null
)(PlanView);
