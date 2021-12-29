import React from "react";
import PostStyled from "../styled/mainStyled/PostStyled";
import VideoWrapper from "../styled/mainStyled/VideoWrapper";
import UserBlock from "../common/UserBlock";

const Post = () => {
  return (
    <PostStyled>
      <VideoWrapper />
      <UserBlock />
      #Tag1 #Tag2 #Tag3
    </PostStyled>
  );
};

export default Post;
