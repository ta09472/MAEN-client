import React from "react";
import PostFormStyled from "../styled/uploadStyled/PostFormStyled";
import InputWrapper from "../styled/uploadStyled/InputWrapper";
import Input from "../styled/uploadStyled/Input";
import Uploader from "./Uploader";

const PostForm = () => {
  return (
    <div>
      MyComponent
      <Uploader />
      <InputWrapper>
        <Input />
        <Input />
      </InputWrapper>
    </div>
  );
};

export default PostForm;
