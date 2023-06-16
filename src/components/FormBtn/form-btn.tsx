"use client";

import { ButtonHTMLAttributes } from "react";
import { StyledFormBtn } from "./styled";

interface FormBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

function FormBtn({ label, ...props }: FormBtnProps) {
  return <StyledFormBtn {...props}>{label}</StyledFormBtn>;
}

export default FormBtn;
