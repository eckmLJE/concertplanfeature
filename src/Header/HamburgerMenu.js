import React, { Component } from "react";
import { connect } from "react-redux";
import "./HamburgerMenu.css";

import { navTo } from "../actions/navs";

class HamburgerMenu extends Component {
  handleNav = e => {
    const nav = e.target.getAttribute("name");
    this.props.navTo(nav);
  };

  render() {
    return (
      <div className={"hamburger-menu" + this.props.burgerClass}>
        <ul onClick={this.handleNav}>
          <li>
            <p name="home">HOME</p>
          </li>
          <li>
            <p name="concerts">CONCERTS</p>
          </li>
          <li>
            <p name="plans">PLANS</p>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  navTo: nav => dispatch(navTo(nav))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HamburgerMenu);
