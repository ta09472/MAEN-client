import React from "react";
import SideNavStyled from "../styled/commonStyled/SideNavStyled";
import RecommnadationUser from "../common/RecommnadationUser";
import RecommnadationTag from "../common/RecommnadationTag";
import Footer from "../common/Footer";

const SideNav = () => {
  return (
    <SideNavStyled>
      <RecommnadationUser />
      <RecommnadationTag />
      <Footer />
    </SideNavStyled>
  );
};

export default SideNav;
