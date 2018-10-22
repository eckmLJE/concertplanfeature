import React, { Component } from "react";
import "./UserPanel.css";

class UserPanel extends Component {
  render() {
    return (
      <section className="user-panel">
        <div className="user-box sample-users-box">
          <div className="user-card">Sample Users</div>
        </div>
        <div className="user-box login-box">
          <div className="user-card">Login Card</div>
        </div>
      </section>
    );
  }
}

export default UserPanel;
