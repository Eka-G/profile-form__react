"use client";

import styled from "styled-components";
import { Form } from "formik";
import { FormGroup } from "@/components";

export const StyledGroupWrapper = styled.div`
  margin-bottom: 24px;
`;

export const StyledForm = styled(Form)`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const StyledFormGroup = styled(FormGroup)`
  background: rgba(0, 0, 0, 0.04);
`;
