"use client";

import { type FieldAttributes, useField } from "formik";
import { StyledWrapper, StyledLabel, StyledError } from "./styled";

type FormGroupProps = FieldAttributes<{
  label: string;
}>;

const FormGroup = ({ label, id, children, ...props }: FormGroupProps) => {
  const [, meta] = useField(props);

  return (
    <StyledWrapper>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>

      {children}

      {meta.touched && meta.error ? (
        <StyledError>{meta.error}</StyledError>
      ) : null}
    </StyledWrapper>
  );
};

export default FormGroup;
