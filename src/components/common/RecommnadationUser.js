import React from "react";
import RecommandationWrapper from "../styled/commonStyled/RecommandationWrapper";
import RecommandTextWrapper from "../styled/commonStyled/RecommandTextWrapper";
import RecommandationUser from "./RecommandationUser";

const RecommnadationUser = () => {
  return (
    <RecommandationWrapper>
      <RecommandTextWrapper>Recommandation Users</RecommandTextWrapper>
      <RecommandationUser />
    </RecommandationWrapper>
  );
};

export default RecommnadationUser;
