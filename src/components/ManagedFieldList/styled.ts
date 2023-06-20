"use client";

import styled from "styled-components";
import { Form } from "formik";

export const StyledListWrapper = styled.div`
  margin-bottom: 64px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 8px;
  width: 336px;
`;

export const StyledFieldWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 20px;
  column-gap: 16px;
  align-items: center;
`;

export const StyledDeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background: no-repeat center transparent url("/delete-icon.png");
  background-size: 100% 100%;
`;

export const StyledHint = styled.div`
  font-size: 12px;
  color: #a6a6a6;
`;
