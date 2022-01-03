import React, { useState } from "react";
import PostStyled from "../styled/mainStyled/PostStyled";
import VideoWrapper from "../styled/mainStyled/VideoWrapper";
import UserBlock from "../common/UserBlock";
import Modal from "../videoModal/Modal";

const Post = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <PostStyled>
      <VideoWrapper />
      <UserBlock />
      #Tag1 #Tag2 #Tag3
      <Modal isOpened={isModalOpen}></Modal>
    </PostStyled>
  );
};

export default Post;
