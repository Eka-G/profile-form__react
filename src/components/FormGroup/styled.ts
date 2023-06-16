"use client";

import styled from "styled-components";
import { Field } from "formik";
import InputMask from "react-input-mask";

export const StyledWrapper = styled.div`
  position: relative;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
`;

const inputStyles = `
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.04);
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;
`;

export const StyledInputMask = styled(InputMask)`
  ${inputStyles}
`;

export const StyledField = styled(Field)`
  ${inputStyles}
`;

export const StyledError = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.48);
`;
