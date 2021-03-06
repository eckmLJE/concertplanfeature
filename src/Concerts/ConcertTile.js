import React, { Component } from "react";
import { connect } from "react-redux";

import "./ConcertTile.css";

import moment from "moment";

import { InactivePlanButton } from "../Buttons/Buttons";

import PlanButtonSwitcher from "./PlanButtonSwitcher";

class ConcertTile extends Component {
  selectImage = () => {
    const image = this.props.concert.images.find(image => image.width > 1000);
    return image.url;
  };

  render() {
    const imgUrl = this.selectImage();
    return (
      <div className="concert-tile">
        <div className="concert-tile-inner">
          <div
            className="tile-image"
            style={{ backgroundImage: `url(${imgUrl}` }}
          />
          <div className="tile-details">
            <div className="tile-event-details">
              <h1>{this.props.concert.name}</h1>
              <h2>{this.props.concert._embedded.venues[0].name}</h2>
              <p>
                {moment(this.props.concert.dates.start.dateTime).format(
                  "MMMM Do YYYY"
                )}
              </p>
              <p>
                {moment(this.props.concert.dates.start.dateTime).format(
                  "h:mm a"
                )}
              </p>
            </div>
            <div className="tile-plan-details">
              {this.props.loggedIn ? (
                <PlanButtonSwitcher
                  imgUrl={imgUrl}
                  concert={this.props.concert}
                />
              ) : (
                <InactivePlanButton />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

// const mapDispatchToProps = dispatch => ({
//   logOutUser: () => dispatch(logOutUser())
// });

export default connect(
  mapStateToProps,
  null
)(ConcertTile);
