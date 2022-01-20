import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import UploadControl from "./UploadControl";
import UploadWrapper from "../styled/uploadStyled/UploadWrapper";
import UploaderStyled from "../styled/uploadStyled/UploaderStyled";
import ButtonWrapper from "../styled/uploadStyled/ButtonWrapper";
import UploadButtonStyled from "../styled/uploadStyled/UploadButtonStyled";
import PostFormStyled from "../styled/uploadStyled/PostFormStyled";
import InputWrapper from "../styled/uploadStyled/InputWrapper";

import { useSelector, useDispatch } from "react-redux";
import { uploadPost } from "../../redux/module/upload";

const UploadTest = () => {
  const initialValues = useSelector((state) => state.upload);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    tags: Yup.string().required("required"),
    description: Yup.string().required("required"),
  });

  const onSubmit = (values) => {
    dispatch(uploadPost(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
    >
      {(formik) => (
        <Form>
          <UploadWrapper>
            <PostFormStyled>
              <h3>Upload Your Day</h3>
              <UploaderStyled>
                <input
                  type="file"
                  label="file"
                  onChange={(e) =>
                    formik.setFieldValue("file", e.target.files[0])
                  }
                />
              </UploaderStyled>
            </PostFormStyled>
            <InputWrapper>
              <UploadControl
                control="input"
                type="text"
                label="tags"
                name="tags"
              />
              <UploadControl
                control="textarea"
                label="description"
                name="description"
              />
            </InputWrapper>
          </UploadWrapper>
          <ButtonWrapper>
            <UploadButtonStyled
              type="submit"
              disabled={!formik.isValid || formik.isSubmmiting}
            >
              upload
            </UploadButtonStyled>
          </ButtonWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default UploadTest;
