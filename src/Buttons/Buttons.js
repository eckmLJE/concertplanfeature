import React from "react";
import "./Buttons.css";

export const StartPlanButton = props => {
  return (
    <div className="plan-button start-plan-button">
      <button>START PLAN</button>
    </div>
  );
};

export const LoginButton = props => {
  return (
    <div className="login-button">
      <button onClick={props.authenticate}>LOG IN</button>
    </div>
  );
};
