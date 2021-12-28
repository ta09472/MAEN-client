import React from "react";
import HeaderStyled from "../styled/commonStyled/HeaderStyled";
import Logo from "./Logo";
import Search from "./Search";
import UserBlock from "./UserBlock";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Search />
      <Link to="/channel">
        <UserBlock />
      </Link>
    </HeaderStyled>
  );
};

export default Header;
