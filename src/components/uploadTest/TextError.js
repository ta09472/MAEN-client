import React from "react";

const TextError = ({ children }) => {
  return (
    <div>
      <h2 color="red">{children}</h2>
    </div>
  );
};

export default TextError;
