import React, { Component } from "react";
import { connect } from "react-redux";
import "./Header.css";

import { navTo } from "../actions/navs";
import { setActiveNav } from "../actions/navs";

import Hamburger from "./Hamburger";

class Header extends Component {
  componentDidMount = () => {
    const nav = this.props.location.slice(1);
    nav ? this.props.setActiveNav(nav) : this.props.setActiveNav("home");
  };

  handleNav = e => {
    const nav = e.target.getAttribute("name");
    this.props.navTo(nav);
  };

  checkNav = name => {
    return this.props.activeNav === name ? "navActive" : null;
  };

  render() {
    return (
      <header className="header">
        <h1 name="home" onClick={this.handleNav}>
          CONCERTPLAN
        </h1>
        <Hamburger />
        <nav>
          <ul onClick={this.handleNav}>
            <li name="home" className={this.checkNav("home")}>
              HOME
            </li>
            <li name="concerts" className={this.checkNav("concerts")}>
              CONCERTS
            </li>
            <li name="plans" className={this.checkNav("plans")}>
              PLANS
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  activeNav: state.navs.activeNav,
  location: state.router.location.pathname,
  loggedIn: state.user.loggedIn,
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  navTo: nav => dispatch(navTo(nav)),
  setActiveNav: nav => dispatch(setActiveNav(nav))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
