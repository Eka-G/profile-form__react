"use client";

import { type FieldAttributes, useField } from "formik";
import { type Color } from "@/shared";
import { StyledField } from "./styled";

type FormItemProps = FieldAttributes<{
  bgColor: Color;
}>;

const FormItemField = ({ bgColor, ...props }: FormItemProps) => {
  const [field] = useField(props);

  return <StyledField $bgColor={bgColor} {...field} {...props} />;
};

export default FormItemField;
