import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

import CaptionInput from "../styled/uploadStyled/CaptionInput";
const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default Input;
