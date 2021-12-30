import React from "react";
import SearchTagStyled from "../styled/searchStyled/SearchTagStyled";
import Content from "../main/Content";

const SearchTag = () => {
  return (
    <SearchTagStyled>
      <p>Posts</p>
      <Content />
    </SearchTagStyled>
  );
};

export default SearchTag;
