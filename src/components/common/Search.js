import React from "react";
import SearchBoxStyled from "../styled/commonStyled/SearchBoxStyled";
import SearchStyled from "../styled/commonStyled/SearchStyled";
import { FaSearch } from "react-icons/fa";
import { Route, Routes, Link } from "react-router-dom";

const Search = () => {
  return (
    <SearchBoxStyled>
      <SearchStyled placeholder="Search"></SearchStyled>
      <Link to="/search">
        <FaSearch color="#7f8fa6" />
      </Link>
    </SearchBoxStyled>
  );
};

export default Search;
