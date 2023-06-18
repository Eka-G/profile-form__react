"use client";

import { type FieldAttributes, useField } from "formik";
import { type Color, type OptionValues } from "@/shared";
import { StyledField, StyledOption } from "./styled";

type FormItemProps = FieldAttributes<{
  bgColor?: Color;
  optionsList?: OptionValues;
}>;

const FormItemField = ({
  bgColor,
  optionsList,
  multiple,
  placeholder,
  ...props
}: FormItemProps) => {
  const [field] = useField(props);

  if (optionsList) {
    return (
      <StyledField $bgColor={bgColor} {...field} {...props} multuple="true">
        <option hidden value="">
          {placeholder}
        </option>
        {optionsList.map(({ id, value, name }) => {
          return (
            <StyledOption key={id} value={value} $bgColor={bgColor}>
              {name}
            </StyledOption>
          );
        })}
      </StyledField>
    );
  }

  return <StyledField $bgColor={bgColor} {...field} {...props} />;
};

export default FormItemField;
