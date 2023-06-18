"use client";

import { ButtonHTMLAttributes } from "react";
import { StyledFormBtn } from "./styled";

interface FormBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  $reversed?: boolean;
}

function FormBtn({ label, ...props }: FormBtnProps) {
  return <StyledFormBtn {...props}>{label}</StyledFormBtn>;
}

export default FormBtn;
