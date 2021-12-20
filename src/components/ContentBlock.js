import React from "react";
import ContentBlockStyled from "./styled/ContentBlockStyled";
import CardListBlock from "./CardListBlock";
import TabBlock from "./TabBlock";

const ContentBlock = () => {
  return (
    <ContentBlockStyled>
      <TabBlock />
      <CardListBlock />
    </ContentBlockStyled>
  );
};

export default ContentBlock;
