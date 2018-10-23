import React from "react";
import "./CommentList.css";

import moment from "moment";

const CommentList = props => (
  <div className="comment-list">
    <ul>
      {props.comments.map(comment => (
        <li key={comment.id}>
          <div className="comment-info">
            <h1>
              {comment.user_name}{" "}
              <span>
                posted at{" "}
                {moment(comment.created_at).format("MMMM Do YYYY, h:mm a")}{" "}
              </span>
            </h1>
          </div>
          <div className="comment-content">{comment.content}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default CommentList;
