"use client";

import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;
`;

export const StyledError = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.48);
`;
