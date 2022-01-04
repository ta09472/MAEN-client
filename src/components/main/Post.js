import React, { useState } from "react";
import PostStyled from "../styled/mainStyled/PostStyled";
import VideoWrapper from "../styled/mainStyled/VideoWrapper";
import UserBlock from "../common/UserBlock";
import VideoModal from "../videoModal/VideoModal";
import Modal from "react-modal";

const Post = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PostStyled onClick={() => setIsModalOpen(true)}>
      <VideoWrapper />
      <UserBlock />
      #Tag1 #Tag2 #Tag3
      <VideoModal isOpened={isModalOpen}></VideoModal>
    </PostStyled>
  );
};

export default Post;
