import React from "react";
import SortStyled from "./styled/SortStyled";
import { FaClock } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
const Sort = () => {
  return (
    <>
      <SortStyled>
        <FaClock />
        Recent
      </SortStyled>
      <SortStyled>
        <FaFireAlt />
        Popular
      </SortStyled>
    </>
  );
};

export default Sort;
