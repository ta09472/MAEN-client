import React from "react";
import Header from "../common/Header";
import Upload from "../common/Upload";
import SideNav from "../common/SideNav";
import Content from "../main/Content";
import Sort from "../main/Sort";
import MainWrapper from "../styled/commonStyled/MainWrapper";
import ContentWrapper from "../styled/mainStyled/ContentWrapper";
import HomeWrapper from "../styled/mainStyled/HomeWrapper";

const Main = () => {
  return (
    <HomeWrapper>
      <SideNav />
      <MainWrapper>
        <ContentWrapper>
          <Sort />
          <Content />
        </ContentWrapper>
        <Upload />
      </MainWrapper>
    </HomeWrapper>
  );
};

export default Main;
