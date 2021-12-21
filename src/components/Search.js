import React from "react";
import SearchBoxStyled from "./styled/SearchBoxStyled";
import SearchStyled from "./styled/SearchStyled";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <SearchBoxStyled>
      <FaSearch color="#7f8fa6" />
      <SearchStyled placeholder="Search"></SearchStyled>
    </SearchBoxStyled>
  );
};

export default Search;
