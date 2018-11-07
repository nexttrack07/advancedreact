import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

export default () => (
  <React.Fragment>
    <h3>Inside the App component</h3>
    <CommentBox />
    <CommentList />
  </React.Fragment>
);
