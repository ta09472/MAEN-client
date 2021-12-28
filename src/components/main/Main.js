import React from "react";
import Header from "../common/Header";
import Upload from "../common/Upload";
import SideNav from "../common/SideNav";
import Content from "../main/Content";
import Sort from "../main/Sort";
import MainWrapper from "../styled/commonStyled/MainWrapper";
import ContentWrapper from "../styled/mainStyled/ContentWrapper";

const Main = () => {
  return (
    <MainWrapper>
      <SideNav />
      <ContentWrapper>
        <Sort />
        <Content />
      </ContentWrapper>
      <Upload />
    </MainWrapper>
  );
};

export default Main;
