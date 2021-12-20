import React from "react";
import UserProfile from "./UserProfile";
import UserName from "./UserName";
import UserBlockStlyed from "./styled/UserBlockStyled";

const UserBlock = () => {
  return (
    <UserBlockStlyed>
      <UserProfile />
      <UserName />
    </UserBlockStlyed>
  );
};

export default UserBlock;
