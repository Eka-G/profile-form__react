"use client";

import { type FieldAttributes, useField } from "formik";
import { type Color } from "@/shared";
import { StyledInputMask } from "./styled";

type FormItemProps = FieldAttributes<{
  bgColor: Color;
  mask: string | Array<string | RegExp>;
  maskChar: string | null | undefined;
}>;

const FormItemMask = ({ bgColor, mask, maskChar, ...props }: FormItemProps) => {
  const [field] = useField(props);

  return (
    <StyledInputMask
      mask={mask}
      maskChar={maskChar}
      $bgColor={bgColor}
      {...field}
      {...props}
    />
  );
};

export default FormItemMask;
