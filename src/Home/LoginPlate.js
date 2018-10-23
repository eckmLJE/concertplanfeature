import React, { Component } from "react";
import { connect } from "react-redux";

import "./LoginPlate.css";

import { authenticateUser } from "../actions/user";

import { LoginButton } from "../Buttons/Buttons";

class LoginPlate extends Component {
  state = {
    email: "",
    password: ""
  };

  handleLogin = e => {
    e.preventDefault();
    const userData = this.state;
    this.props.authenticateUser(userData);
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-header">
          <h1>LOG IN</h1>
          <p>Please use one of the sample users to the left. </p>
        </div>
        <div className="login-plate">
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={e =>
              this.setState({ email: e.target.value.toLowerCase() })
            }
          />
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={e =>
              this.setState({ password: e.target.value.toLowerCase() })
            }
          />
          <LoginButton authenticate={this.handleLogin} />
          {this.props.logInFailed ? (
            <div className="login-fail">
            <p>LOGIN FAILED - PLEASE TRY AGAIN.</p>
            <p>BE SURE TO USE SAMPLE LOGINS TO LEFT.</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  logInFailed: state.user.logInFailed
});

const mapDispatchToProps = dispatch => ({
  authenticateUser: userData => dispatch(authenticateUser(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPlate);
