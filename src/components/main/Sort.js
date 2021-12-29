import React from "react";
import SortStyled from "../styled/mainStyled/SortStyled";
import ButtonStyled from "../styled/commonStyled/ButtonStyled";
import { MdTrendingUp } from "react-icons/md";
import { MdAvTimer } from "react-icons/md";
import { Route, Routes, Link } from "react-router-dom";
import Main from "./Main";
import Recent from "./Recent";

const Sort = () => {
  return (
    <SortStyled>
      <Link to="/">
        <ButtonStyled>
          <MdTrendingUp />
          인기
        </ButtonStyled>
      </Link>
      <Link to="/recent">
        <ButtonStyled>
          <MdAvTimer />
          최신
        </ButtonStyled>
      </Link>
    </SortStyled>
  );
};

export default Sort;
