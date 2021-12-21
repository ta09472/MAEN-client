import React from "react";
import InfoStyled from "./styled/InfoStyled";
import UserBlock from "./UserBlock";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <InfoStyled>
      <h2>Title</h2>
      <Link to="/channel">
        <UserBlock />
      </Link>
      <p>tag1,tag2,tag3</p>
      <p>like:100 views: 1000</p>
    </InfoStyled>
  );
};

export default Info;
