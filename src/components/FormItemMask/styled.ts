"use client";

import styled from "styled-components";
import InputMask from "react-input-mask";
import { type Color, formItemStyles } from "@/shared";

export const StyledInputMask = styled(InputMask)<{ $bgColor: Color }>`
  background-color: ${({ $bgColor }) => $bgColor};
  ${formItemStyles}
`;
