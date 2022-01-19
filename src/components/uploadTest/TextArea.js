import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import DescriptionInput from "../styled/uploadStyled/DescriptionInput";
const TextArea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />

      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default TextArea;
