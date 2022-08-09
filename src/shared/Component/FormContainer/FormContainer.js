import React, { Component } from "react";
import ErrorLabel from "../ErrorLabel/ErrorLabel";

const FormContainer = ({ children, errorMessage }) => {
  return (
    <div>
      {children}
      {errorMessage !== "" && <ErrorLabel errorMessage={errorMessage} />}
    </div>
  );
};

export default FormContainer;
