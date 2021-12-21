import React from "react";
import Sort from "./Sort";
import Sequence from "./Sequence";
import TabBlockStyled from "./styled/TabBlockStyled";
import SortWrapper from "./styled/SortWrapper";

const TabBlock = () => {
  return (
    <TabBlockStyled>
      <Sequence />
      <SortWrapper>
        <Sort />
      </SortWrapper>
    </TabBlockStyled>
  );
};

export default TabBlock;
