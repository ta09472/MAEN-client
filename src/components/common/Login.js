import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserBlock from "./UserBlock";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return isLoggedIn ? (
    <Link to="/channel">
      <UserBlock />
    </Link>
  ) : (
    <Link to="/signin">
      <div>guest</div>
    </Link>
  );
};

export default Login;
