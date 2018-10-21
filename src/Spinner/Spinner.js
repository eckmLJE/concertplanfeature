import React from "react";

import "./Spinner.css";

const Spinner = props => {
  return (
    <div className="spinner">
      <div className="loader">{props.content}</div>
    </div>
  );
};

export default Spinner;
