import React, { Component } from "react";
import "./CommentsDrawer.css";

import CommentList from "./CommentList";
import { SubmitCommentButton } from "../Buttons/Buttons";

class CommentsDrawer extends Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.state = { drawer: false, comment: "" };
  }

  handleDrawerClass = () => {
    const drawerClass = this.state.drawer ? " drawer-drop" : " drawer-raise";
    // this.counter += 1;
    // if (this.counter > 3) {
    return drawerClass;
    // } else {
    //   return "";
    // }
  };

  handleCommentInput = e => this.setState({ comment: e.target.value });

  handleCommentSubmit = e => {
    e.preventDefault();
    console.log(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div className={"comments-drawer" + this.handleDrawerClass()}>
        <div className="drawer-buffer-top" />
        <CommentList comments={this.props.comments} />
        <div className="add-show-comment">
          <div className="form">
            <textarea
              placeholder="Start a conversation!"
              onChange={this.handleCommentInput}
              value={this.state.comment}
            />
            <div className="comment-submit">
              <SubmitCommentButton submitComment={this.handleCommentSubmit} />
            </div>
          </div>
          <div className="drawer-handle">
            <button
              onClick={() => this.setState({ drawer: !this.state.drawer })}
              className="drawer-button"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CommentsDrawer;
