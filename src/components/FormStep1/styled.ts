"use client";

import styled from "styled-components";
import { Form } from "formik";

export const StyledGroupWrapper = styled.div`
  margin-bottom: 64px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 26px;
  width: 300px;
`;

export const StyledForm = styled(Form)`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
