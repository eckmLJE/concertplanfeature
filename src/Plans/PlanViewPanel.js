import React from "react";
import { connect } from "react-redux";
import "./PlanViewPanel.css";
import moment from "moment";

import CommentsDrawer from "../Comments/CommentsDrawer";
import PlanViewButtonSwitcher from "./PlanViewButtonSwitcher";

const PlanViewPanel = props => (
  <div className="plan-view-panel">
    <div className="plan-view-panel-inner">
      <div
        className="view-panel-left"
        style={{
          backgroundImage: `url(${props.currentPlan.attributes["img-url"]}`
        }}
      />
      <div className="view-panel-right">
        <div className="panel-right-top">
          <div className="right-top-left">
            <h1>{props.currentPlan.attributes.name}</h1>
            <p>
              {moment(props.currentPlan.attributes.datetime).format(
                "MMMM Do YYYY"
              )}
            </p>
            <p>
              {moment(props.currentPlan.attributes.datetime).format("h:mm a")}
            </p>
          </div>
          <div className="right-top-right">
            <h4>{props.currentPlan.attributes.venue}</h4>
          </div>
        </div>
        <div className="panel-right-bottom">
          <div className="right-bottom-left">
            <div className="right-bottom-left-header">
              <h1>FRIENDS JOINED ON</h1>
            </div>
            <ul>
              {props.currentPlan.attributes.users.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          </div>
          <div className="right-bottom-right">
            {!!props.currentUser && (
              <PlanViewButtonSwitcher
                planUsers={props.currentPlan.attributes.users}
                planId={props.currentPlan.id}
                currentPlan={props.currentPlan}
              />
            )}
          </div>
        </div>
      </div>
    </div>
    <CommentsDrawer
      planId={props.currentPlan.id}
      comments={props.currentPlan.attributes.comments}
    />
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  plans: state.plans.plans,
  currentPlan: state.plans.currentPlan
});

export default connect(
  mapStateToProps,
  null
)(PlanViewPanel);
