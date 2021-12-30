import React from "react";
import SearchUserStyled from "../styled/searchStyled/SearchUserStyled";
import UserBlock from "../common/UserBlock";
import SearchResultWrapper from "../styled//searchStyled/SearchResultWrapper";

const SearchUser = () => {
  return (
    <SearchUserStyled>
      <p>User</p>
      <SearchResultWrapper>
        <UserBlock />
        <UserBlock />
        <UserBlock />
      </SearchResultWrapper>
    </SearchUserStyled>
  );
};

export default SearchUser;
