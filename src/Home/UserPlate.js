import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserPlate.css";

import { navTo } from "../actions/navs";
import { logOutUser } from "../actions/user";

import { LogoutButton } from "../Buttons/Buttons";

class UserPlate extends Component {
  handleNav = e => {
    const nav = e.target.getAttribute("name");
    this.props.navTo(nav);
  };

  render() {
    return (
      <div className="user-plate">
        {this.props.currentUser ? (
          <div className="user-plate-logged-in">
            <h1>
              Welcome, <span>{this.props.currentUser.name}</span>.
            </h1>
            <p>
              Visit{" "}
              <strong name="concerts" onClick={this.handleNav}>
                CONCERTS
              </strong>{" "}
              to view upcoming shows at DC venues, and start plans to go to
              shows with your friends.
            </p>
            <p>
              Go to{" "}
              <strong name="plans" onClick={this.handleNav}>
                PLANS
              </strong>{" "}
              to see all upcoming plans, view their details, and join
              them.{" "}
            </p>
            <LogoutButton logout={this.props.logOutUser} />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  loggedIn: state.user.loggedIn,
  plans: state.plans.plans
});

const mapDispatchToProps = dispatch => ({
  navTo: nav => dispatch(navTo(nav)),
  logOutUser: () => dispatch(logOutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPlate);
