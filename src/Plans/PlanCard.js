import React, { Component } from "react";
import "./PlanCard.css";

import moment from "moment";

import { ViewPlanButton } from "../Buttons/Buttons";

class PlanCard extends Component {
  selectUser = id =>
    this.props.plan.attributes.users.find(user => user.id === id);

  planCreatorName = () => {
    const userId = parseInt(this.props.plan.attributes["creator-id"], 10);
    const user = this.selectUser(userId);
    return user.name;
  };

  render() {
    return (
      <div className="plan-card">
        <div className="plan-card-inner">
          <div
            className="plan-card-image"
            style={{
              backgroundImage: `url(${this.props.plan.attributes["img-url"]}`
            }}
          />
          <div className="plan-card-right">
            <div className="plan-concert-detail">
              <div className="plan-concert-detail-inner">
                <h1>{this.props.plan.attributes.name}</h1>
                <h4>{this.props.plan.attributes.venue}</h4>
                <p>
                  {moment(this.props.plan.attributes.datetime).format(
                    "MMMM Do YYYY"
                  )}
                </p>
                <p>
                  {moment(this.props.plan.attributes.datetime).format("h:mm a")}
                </p>
              </div>
            </div>
            <div className="plan-detail">
              <div className="plan-detail-left">
                <div className="plan-detail-start">
                  <h1>STARTED BY</h1>
                  <p>
                    <strong>{this.planCreatorName()}</strong>
                  </p>
                </div>
              </div>
              <div className="plan-detail-center">
                <div className="plan-detail-activity">
                  <div className="plan-detail-activity-left">
                    <p>FRIENDS: </p>
                    <p>COMMENTS: </p>
                  </div>
                  <div className="plan-detail-activity-right">
                    <p>{this.props.plan.attributes.users.length}</p>
                    <p>{this.props.plan.attributes.comments.length}</p>
                  </div>
                </div>
              </div>
              <div className="plan-detail-right">
                <ViewPlanButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlanCard;
