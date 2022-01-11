import React, { useState, useEffect } from "react";
import Post from "./Post";
import PostWrapperStyled from "../styled/mainStyled/PostWrapperStyled";
import axios from "axios";

const Content = () => {
  return (
    <PostWrapperStyled>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </PostWrapperStyled>
  );
};

export default Content;
