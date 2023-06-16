"use client";

import styled from "styled-components";

export const StyledFormBtn = styled.button<{
  $reversed?: boolean;
}>`
  padding: 12px 16px;
  width: fit-content;
  border: ${({ $reversed }) => ($reversed ? "1.5px solid #5558FA" : "none")};
  border-radius: 4px;
  color: ${({ $reversed }) => ($reversed ? "#5558fa" : "#ffffff")};
  background-color: ${({ $reversed }) => ($reversed ? "#ffffff" : "#5558fa")};
`;
