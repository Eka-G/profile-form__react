"use client";

import { type FieldAttributes, useField } from "formik";
import { type Color } from "@/shared";
import { StyledSelect } from "./styled";

type FormItemProps = FieldAttributes<{
  bgColor: Color;
  options: string[];
}>;

const FormItemSelect = ({ bgColor, options, ...props }: FormItemProps) => {
  const [field] = useField(props);

  return (
    <StyledSelect $bgColor={bgColor} {...field} {...props} multuple>
      {options.map((optionValue) => {
        <option key={optionValue} value={optionValue}>
          {optionValue}
        </option>;
      })}
    </StyledSelect>
  );
};

export default FormItemSelect;
