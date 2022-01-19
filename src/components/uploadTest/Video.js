import React from "react";
import { Field, ErrorMessage } from "formik";

const Video = (props) => {
  const { label, name, ...rest } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
    </>
  );
};

export default Video;
