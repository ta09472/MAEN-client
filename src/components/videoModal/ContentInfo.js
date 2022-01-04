import React from "react";
import ContentInfoWrapper from "../styled/modalStyled/ContentInfoWrapper";
import Like from "./Like";
import { MdSms } from "react-icons/md";

const ContentInfo = () => {
  return (
    <ContentInfoWrapper>
      <Like />
      Like:123
      <MdSms />
      Comments:432
    </ContentInfoWrapper>
  );
};

export default ContentInfo;
