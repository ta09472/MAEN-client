import React from "react";
import CardListBlockStyled from "./styled/CardListBlockStyled";
import CardList from "./CardList";

const CardListBlock = () => {
  return (
    <CardListBlockStyled>
      <CardList />
    </CardListBlockStyled>
  );
};

export default CardListBlock;
