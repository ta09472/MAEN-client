import React from "react";
import UploaderStyled from "../styled/uploadStyled/UploaderStyled";

const Uploader = () => {
  return (
    <UploaderStyled>
      <input
        type="file"
        accept="video/.avi,video/.mp4,video/.mkv,video/.wmv,video/.mov"
      ></input>
    </UploaderStyled>
  );
};

export default Uploader;
