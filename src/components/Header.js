import React from "react";
import HeaderStyled from "./styled/HeaderStyled";
import Logo from "./Logo";
import Search from "./Search";
import UserBlock from "./UserBlock";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Search />
      <UserBlock />
    </HeaderStyled>
  );
};

export default Header;
