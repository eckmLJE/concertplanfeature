import React, { Component } from "react";
import "./ConcertTile.css";

import moment from "moment";

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
                  "MMMM Do YYYY, h:mm a"
                )}
              </p>
              <p>{this.props.concert._embedded.venues[0].name}</p>
            </div>
            <div className="tile-plan-details" />
          </div>
        </div>
      </div>
    );
  }
}

export default ConcertTile;
