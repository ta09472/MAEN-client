import React from "react";
import SigninWrapper from "../styled/signinStyled/SigninWrapper";
import IconWrapper from "../styled/signinStyled/IconWrapper";
import SignIconBlock from "../styled/signinStyled/SignIconBlock";
import GlobalWrapper from "../styled/commonStyled/GlobalWrapper";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

const SignIn = () => {
  return (
    <GlobalWrapper>
      <SigninWrapper>
        <p>Join in MAEN</p>
        <IconWrapper>
          <SignIconBlock>
            <FcGoogle />
          </SignIconBlock>
          Login with Google
        </IconWrapper>
        <IconWrapper>
          <SignIconBlock>
            <RiKakaoTalkFill />
          </SignIconBlock>
          Login with KakaoTalks
        </IconWrapper>
        <IconWrapper>
          <SignIconBlock>
            <FaFacebook />
          </SignIconBlock>
          Login with Facebook
        </IconWrapper>
      </SigninWrapper>
    </GlobalWrapper>
  );
};

export default SignIn;
