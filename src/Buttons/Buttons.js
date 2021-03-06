import React from "react";
import "./Buttons.css";

export const LoginButton = props => {
  return (
    <div className="login-button">
      <button onClick={props.authenticate}>LOG IN</button>
    </div>
  );
};

export const LogoutButton = props => {
  return (
    <div className="login-button">
      <button onClick={props.logout}>LOG OUT</button>
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

export const JoinPlanButton = props => {
  return (
    <div className="plan-button view-plan-button">
      <button onClick={props.joinPlan}>JOIN PLAN</button>
    </div>
  );
};
export const LeavePlanButton = props => {
  return (
    <div className="plan-button leave-plan-button">
      <button onClick={props.leavePlan}>LEAVE PLAN</button>
    </div>
  );
};

export const SubmitCommentButton = props => {
  return (
    <div className="plan-button submit-comment-button">
      <button onClick={props.submitComment}>SUBMIT</button>
    </div>
  );
};

export const CommentDrawerButton = props => {
  return (
    <div className="plan-button comment-drawer-button">
      <button onClick={props.handleDrawer}>{props.content}</button>
    </div>
  );
};

export const VenueSelectButton = props => {
  return (
    <div className={"venue-select-button" + props.activeClass}>
      <button onClick={props.venueSelect} name={props.venueName}>
        {props.stringName}
      </button>
    </div>
  );
};
