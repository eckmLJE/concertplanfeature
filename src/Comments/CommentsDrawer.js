import React, { Component } from "react";
import { connect } from "react-redux";
import "./CommentsDrawer.css";

import CommentList from "./CommentList";
import { SubmitCommentButton, CommentDrawerButton } from "../Buttons/Buttons";
import { postComment } from "../actions/plans";

class CommentsDrawer extends Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.state = { drawer: false, comment: "" };
  }

  handleDrawerState = e => {
    e.preventDefault();
    this.setState({ drawer: !this.state.drawer });
  };

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

  handleDrawerButtonText = () => (this.state.drawer ? "CLOSE" : "OPEN");

  handleCommentSubmit = e => {
    e.preventDefault();
    const comment = {
      plan_id: this.props.planId,
      user_id: this.props.currentUser.id,
      content: this.state.comment
    };
    this.props.postComment(comment);
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
              placeholder="Add to the conversation!"
              onChange={this.handleCommentInput}
              value={this.state.comment}
            />
            <div className="comment-submit">
              <SubmitCommentButton submitComment={this.handleCommentSubmit} />
            </div>
          </div>
          <div className="drawer-handle">
            <div className="drawer-button-container">
              <CommentDrawerButton
                content={this.handleDrawerButtonText()}
                handleDrawer={this.handleDrawerState}
              />
            </div>
            <div className="comments-count">
              <h1># COMMENTS:</h1>
              <p>{this.props.comments.length}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  postComment: comment => dispatch(postComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsDrawer);
