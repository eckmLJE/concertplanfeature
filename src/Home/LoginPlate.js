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
    this.setState({ email: "", password: "" });
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
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  authenticateUser: userData => dispatch(authenticateUser(userData))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPlate);
