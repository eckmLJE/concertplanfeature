import React, { Component, Fragment } from "react";
import "./Hamburger.css";

import HamburgerMenu from "./HamburgerMenu";

class Hamburger extends Component {
  state = { hamburger: false };

  burgerX = () => (this.state.hamburger ? " exed" : "");

  handleBurger = e => {
    if (e) e.preventDefault();
    this.setState({ hamburger: !this.state.hamburger });
  };

  render() {
    const burgerClass = this.burgerX();
    return (
      <Fragment>
        <HamburgerMenu
          handleBurger={this.handleBurger}
          burgerClass={burgerClass}
        />
        <button className="hamburger" onClick={this.handleBurger}>
          <div className="hamburger-box">
            <div className={"hamburger-inner top" + burgerClass} />
            <div className={"hamburger-inner middle" + burgerClass} />
            <div className={"hamburger-inner bottom" + burgerClass} />
          </div>
        </button>
      </Fragment>
    );
  }
}

export default Hamburger;
