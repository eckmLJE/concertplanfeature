import React from "react";
import "./PlanViewPanel.css";
import moment from "moment";

import CommentsDrawer from "./CommentsDrawer";

const PlanViewPanel = props => (
  <div className="plan-view-panel">
    <div className="plan-view-panel-inner">
      <div
        className="view-panel-left"
        style={{ backgroundImage: `url(${props.plan.attributes["img-url"]}` }}
      />
      <div className="view-panel-right">
        <div className="panel-right-top">
          <h1>{props.plan.attributes.name}</h1>
          <h4>{props.plan.attributes.venue}</h4>
          <p>{moment(props.plan.attributes.datetime).format("MMMM Do YYYY")}</p>
          <p>{moment(props.plan.attributes.datetime).format("h:mm a")}</p>
        </div>
        <div className="panel-right-bottom">
          <div className="right-bottom-left" />
          <div className="right-bottom-right" />
        </div>
      </div>
    </div>
    <CommentsDrawer comments={props.plan.attributes.comments} />
  </div>
);

export default PlanViewPanel;
