import React from "react";
import UploadStyled from "../styled/commonStyled/UploadStyled";
import UploadButtonStyled from "../styled/commonStyled/UploadButtonStyled";
import { MdAddCircle } from "react-icons/md";

const Upload = () => {
  return (
    <UploadStyled>
      <UploadButtonStyled>
        <MdAddCircle />
      </UploadButtonStyled>
    </UploadStyled>
  );
};

export default Upload;
