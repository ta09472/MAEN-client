import React from "react";
import CardStyled from "./styled/CardStyled";
import VideoBlock from "./styled/VideoBlock";
import CardWrapperStyled from "./styled/CardWrapperStyled";
import Info from "./Info";

const Card = () => {
  return (
    <CardWrapperStyled>
      <CardStyled>
        <VideoBlock>
          <video />
        </VideoBlock>
      </CardStyled>
      <Info />
    </CardWrapperStyled>
  );
};

export default Card;
