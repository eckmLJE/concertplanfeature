import React, { Component } from "react";
import "./ConcertTile.css";

import moment from "moment";

import { StartPlanButton } from "../Buttons/Buttons";

class ConcertTile extends Component {
  selectImage = () => {
    const image = this.props.concert.images.find(image => image.width > 1000);
    return image.url;
  };

  render() {
    return (
      <div className="concert-tile">
        <div className="concert-tile-inner">
          <div
            className="tile-image"
            style={{ backgroundImage: `url(${this.selectImage()}` }}
          />
          <div className="tile-details">
            <div className="tile-event-details">
              <h1>{this.props.concert.name}</h1>
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
              <StartPlanButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConcertTile;
