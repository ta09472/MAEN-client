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
      <ButtonStyled>
        <MdTrendingUp />
        인기
      </ButtonStyled>
      <ButtonStyled>
        <MdAvTimer />
        최신
      </ButtonStyled>
    </SortStyled>
  );
};

export default Sort;
