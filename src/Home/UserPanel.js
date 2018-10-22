import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserPanel.css";

import LoginPlate from "./LoginPlate";
import UserPlate from "./UserPlate";

class UserPanel extends Component {
  render() {
    return (
      <section className="user-panel">
        <div className="user-box sample-users-box">
          <div className="user-card">
            <div className="sample-details">
              <h1>SAMPLE USERS</h1>
              <p>Use these logins to see a friend group already in action.</p>
              <ul>
                <li>
                  <h1>Alex</h1>
                  <p>
                    <strong>username:</strong> alex@example.com
                  </p>
                  <p>
                    <strong>password:</strong> alex
                  </p>
                </li>
                <li>
                  <h1>Conor</h1>
                  <p>
                    <strong>username:</strong> conor@example.com
                  </p>
                  <p>
                    <strong>password:</strong> conor
                  </p>
                </li>
                <li>
                  <h1>Josh</h1>
                  <p>
                    <strong>username:</strong> josh@example.com
                  </p>
                  <p>
                    <strong>password:</strong> josh
                  </p>
                </li>
                <li>
                  <h1>Lucas</h1>
                  <p>
                    <strong>username:</strong> lucas@example.com
                  </p>
                  <p>
                    <strong>password:</strong> lucas
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="user-box login-box">
          <div className="user-card">
            {this.props.loggedIn ? <UserPlate /> : <LoginPlate />}
          </div>
        </div>
      </section>
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
)(UserPanel);
