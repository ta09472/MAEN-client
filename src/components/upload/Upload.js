import React from "react";
import UploadWrapper from "../styled/uploadStyled/UploadWrapper";
import PostForm from "./PostForm";

const Upload = () => {
  return (
    <UploadWrapper>
      <PostForm />
      <PostForm />
      <PostForm />
      <PostForm />
    </UploadWrapper>
  );
};

export default Upload;
