import React from "react";
import Header from "../common/Header";
import UploadButton from "../common/UploadButton";
import SideNav from "../common/SideNav";
import Content from "../main/Content";
import Sort from "../main/Sort";
import MainWrapper from "../styled/commonStyled/MainWrapper";
import ContentWrapper from "../styled/mainStyled/ContentWrapper";
import HomeWrapper from "../styled/mainStyled/HomeWrapper";
import Upload from "../upload/Upload";
import { Route, Routes, Link } from "react-router-dom";

const Recent = () => {
  return (
    <HomeWrapper>
      this is recent
      <SideNav />
      <MainWrapper>
        <ContentWrapper>
          <Sort />
          <Content />
        </ContentWrapper>
        <UploadButton />
      </MainWrapper>
    </HomeWrapper>
  );
};

export default Recent;
