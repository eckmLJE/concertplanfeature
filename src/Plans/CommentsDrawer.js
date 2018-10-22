import React, { Component } from "react";
import "./CommentsDrawer.css";

class CommentsDrawer extends Component {
  state = { drawer: false };

  handleDrawerClass = () =>
    this.state.drawer ? " drawer-drop" : " drawer-raise";

  render() {
    return (
      <div
        onClick={() => this.setState({ drawer: !this.state.drawer })}
        className={"plan-view-comments-drawer" + this.handleDrawerClass()}
      />
    );
  }
}

export default CommentsDrawer;
