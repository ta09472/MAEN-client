import React from "react";
import SequenceStyled from "./styled/SequenceStyled";
import SequenceBlockStyled from "./styled/SequenceBlockStyled";

const Sequence = () => {
  return (
    <SequenceBlockStyled>
      <SequenceStyled>All</SequenceStyled>
      <SequenceStyled>Morning</SequenceStyled>
      <SequenceStyled>Afternoon</SequenceStyled>
      <SequenceStyled>Evening</SequenceStyled>
      <SequenceStyled>Night</SequenceStyled>
    </SequenceBlockStyled>
  );
};

export default Sequence;
