"use client";

import styled from "styled-components";
import { Field } from "formik";
import { type Color, formItemStyles } from "@/shared";

export const StyledField = styled(Field)<{ $bgColor: Color }>`
  background-color: ${({ $bgColor }) => $bgColor};
  ${formItemStyles}
`;
