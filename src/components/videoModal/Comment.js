import React from "react";
import UserBlcok from "../common/UserBlock";
import CommentWrapper from "../styled/modalStyled/CommentWrapper";
import { Link } from "react-router-dom";

const Comment = () => {
  return (
    <CommentWrapper>
      <Link to="/channel">
        <UserBlcok />
      </Link>
      This is Comment
    </CommentWrapper>
  );
};

export default Comment;
