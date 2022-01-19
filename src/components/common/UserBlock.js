import React from "react";
import UserProfileStyled from "../styled/commonStyled/UserProfileStyled";
import UserName from "./UserName";
import UserBlockStlyed from "../styled/commonStyled/UserBlockStyled";
import { Link } from "react-router-dom";

const UserBlock = () => {
  return (
    <UserBlockStlyed>
      <UserProfileStyled
        src="../../public/logo192.png"
        width="32px"
        height="32px"
      />
      <UserName />
    </UserBlockStlyed>
  );
};

export default UserBlock;
