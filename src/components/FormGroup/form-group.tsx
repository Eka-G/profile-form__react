"use client";

import { type FieldAttributes, useField } from "formik";
import {
  StyledWrapper,
  StyledLabel,
  StyledInputMask,
  StyledField,
  StyledError,
} from "./styled";

type FormGroupProps = FieldAttributes<{
  label: string;
  mask?: string | Array<string | RegExp>;
  maskChar?: string | null | undefined;
}>;

const FormGroup = ({ label, mask, maskChar, ...props }: FormGroupProps) => {
  const [field, meta] = useField(props);

  return (
    <StyledWrapper>
      <StyledLabel htmlFor={props.name}>{label}</StyledLabel>
      {mask ? (
        <StyledInputMask
          mask={mask}
          maskChar={maskChar}
          {...field}
          {...props}
        />
      ) : (
        <StyledField {...field} {...props} />
      )}

      {meta.touched && meta.error ? (
        <StyledError>{meta.error}</StyledError>
      ) : null}
    </StyledWrapper>
  );
};

export default FormGroup;
