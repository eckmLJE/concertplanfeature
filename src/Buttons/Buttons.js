import React from "react";
import "./Buttons.css";

export const LoginButton = props => {
  return (
    <div className="login-button">
      <button onClick={props.authenticate}>LOG IN</button>
    </div>
  );
};

export const InactivePlanButton = props => {
  return (
    <div className="plan-button start-plan-button inactive-plan-button">
      <button>LOG IN TO START OR JOIN PLANS</button>
    </div>
  );
};

export const StartPlanButton = props => {
  return (
    <div className="plan-button start-plan-button">
      <button onClick={props.postPlan}>START PLAN</button>
    </div>
  );
};

export const ViewPlanButton = props => {
  return (
    <div className="plan-button view-plan-button">
      <button onClick={props.navToPlan}>VIEW PLAN</button>
    </div>
  );
};
