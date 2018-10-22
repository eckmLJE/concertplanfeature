import React from "react";
import { connect } from "react-redux";
import "./PlanView.css";

import PlanViewPanel from "./PlanViewPanel";

const PlanView = props => {
  return (
    <section className="plan-view">
      {props.plans.length ? (
        <PlanViewPanel planId={props.match.params.id} />
      ) : null}
    </section>
  );
};

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
