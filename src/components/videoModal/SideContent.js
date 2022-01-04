import React from "react";
import SideWrapper from "../styled/modalStyled/SideWrapper";
import UserBlcok from "../common/UserBlock";
import VideoDescription from "./VideoDescription";
import ContentInfo from "./ContentInfo";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";
import CommentInput from "./CommentInput";

const SideContent = () => {
  return (
    <SideWrapper>
      <Link to="/channel">
        <UserBlcok />
      </Link>
      <VideoDescription />
      <ContentInfo />
      <CommentList />
      <CommentInput />
    </SideWrapper>
  );
};

export default SideContent;
