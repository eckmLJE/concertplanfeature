import React, { Component } from "react";
import "./CommentsDrawer.css";

let counter = 0;

class CommentsDrawer extends Component {
  state = { drawer: false };

  handleDrawerClass = () => {
    const drawerClass = this.state.drawer ? " drawer-drop" : " drawer-raise";
    counter += 1;
    if (counter > 1) {
      return drawerClass;
    } else {
      return "";
    }
  };

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
