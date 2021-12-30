import React from "react";
import Header from "../common/Header";
import UploadButton from "../common/UploadButton";
import SideNav from "../common/SideNav";
import Sort from "../main/Sort";
import MainWrapper from "../styled/commonStyled/MainWrapper";
import ContentWrapper from "../styled/mainStyled/ContentWrapper";
import HomeWrapper from "../styled/mainStyled/HomeWrapper";
import Upload from "../upload/Upload";
import { Route, Routes, Link } from "react-router-dom";
import SearchUser from "./SearchUser";
import SearchTag from "./SearchTag";
import Content from "../main/Content";

const SearchResult = () => {
  return (
    <HomeWrapper>
      <SideNav />
      <ContentWrapper>
        <SearchUser />
        <SearchTag />
      </ContentWrapper>
      <UploadButton />
    </HomeWrapper>
  );
};

export default SearchResult;
