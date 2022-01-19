import React, { useState } from "react";
import PostStyled from "../styled/mainStyled/PostStyled";
import VideoWrapper from "../styled/mainStyled/VideoWrapper";
import UserBlock from "../common/UserBlock";
import VideoModal from "../videoModal/VideoModal";
import Modal from "react-modal";
import ContentInfo from "../videoModal/ContentInfo";

const Post = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <PostStyled onClick={toggleModal}>
        <VideoWrapper />

        <UserBlock />
        <ContentInfo />
      </PostStyled>
      <VideoModal isOpened={isModalOpen} onClose={toggleModal}></VideoModal>
    </>
  );
};

export default Post;
