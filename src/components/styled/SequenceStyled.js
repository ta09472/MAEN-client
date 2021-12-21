import styled from "styled-components";

const SequenceStyled = styled.button`
  border: none;
  padding: 5px;
  margin: 5px;
  font-size: 0.9em;
  &:hover {
    color: #dcdde1;
    border-bottom: 1px solid #2f3640;
  }
  &:active {
    color: #2f3640;
    border-bottom: 1px solid #2f3640;
  }
`;

export default SequenceStyled;
