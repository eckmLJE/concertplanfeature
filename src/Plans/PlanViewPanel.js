import React, { Fragment } from "react";
import "./PlanViewPanel.css";

const PlanViewPanel = props => (
  <Fragment>
    <div className="plan-view-panel">
      <div className="plan-view-panel-inner">
        <div className="view-panel-left" />
        <div className="view-panel-right">
          <div className="panel-right-top" />
          <div className="panel-right-bottom">
            <div className="right-bottom-left" />
            <div className="right-bottom-right" />
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default PlanViewPanel;
