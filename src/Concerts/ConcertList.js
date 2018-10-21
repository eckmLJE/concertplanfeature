import React from "react";
import "./ConcertList.css";

import ConcertTile from "./ConcertTile";

const ConcertList = props => (
  <div className="concert-list">
    {props.concerts.map(concert => (
      <ConcertTile key={concert.id} concert={concert} />
    ))}
  </div>
);

export default ConcertList;
