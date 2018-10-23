import React from "react";
import "./CommentList.css";

const CommentList = props => (
  <div className="comment-list">
    <ul>
      {props.comments.map(comment => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  </div>
);

export default CommentList;
