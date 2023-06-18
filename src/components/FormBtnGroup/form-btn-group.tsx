"use client";

import { FormBtn } from "@/components";
import { StyledButtonWrapper } from "./styled";

interface BtnGroupProps {
  disabled: boolean;
}

function FormBtnGroup({ disabled }: BtnGroupProps) {
  return (
    <StyledButtonWrapper>
      <FormBtn id="button-back" type="button" label="Назад" $reversed />

      <FormBtn
        id="button-next"
        type="submit"
        label="Далее"
        disabled={disabled}
      />
    </StyledButtonWrapper>
  );
}

export default FormBtnGroup;
