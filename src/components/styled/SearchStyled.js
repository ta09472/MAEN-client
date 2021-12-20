import styled from "styled-components";

const SearchStyled = styled.input`
  border-radius: 5px;
  border: 1px solid #dcdde1;
  height: 2em;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  font-size: 1em;
`;

export default SearchStyled;

// useEffect 써서 리렌더링 안되게 해야함!
