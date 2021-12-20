import React from "react";
import CardStyled from "./styled/CardStyled";
import Info from "./Info";

const Card = () => {
  return (
    <CardStyled>
      <div>
        <video />
      </div>
      <Info />
    </CardStyled>
  );
};

export default Card;
