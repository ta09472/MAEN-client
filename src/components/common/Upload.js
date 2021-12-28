import React from "react";
import UploadStyled from "../styled/commonStyled/UploadStyled";
import UploadButtonStyled from "../styled/commonStyled/UploadButtonStyled";
import { MdAdd } from "react-icons/md";

const Upload = () => {
  return (
    <UploadStyled>
      <UploadButtonStyled>
        <MdAdd />
      </UploadButtonStyled>
    </UploadStyled>
  );
};

export default Upload;
