import React from "react";
import Sort from "./Sort";
import Sequence from "./Sequence";
import TabBlockStyled from "./styled/TabBlockStyled";

const TabBlock = () => {
  return (
    <TabBlockStyled>
      <Sequence />
      <Sort />
    </TabBlockStyled>
  );
};

export default TabBlock;
