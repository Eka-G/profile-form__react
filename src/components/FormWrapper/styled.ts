"use client";

import styled from "styled-components";

export const StyledWrapper = styled.div<{ $isMain: boolean }>`
  padding: ${({ $isMain }) => ($isMain ? "25px" : "62px 110px 80px 110px")};
  width: ${({ $isMain }) => ($isMain ? "900px" : "auto")};
  height: ${({ $isMain }) => ($isMain ? "704px" : "auto")};
  border-radius: ${({ $isMain }) => ($isMain ? "12px 12px 0px 0px" : "24px")};
  background-color: #ffffff;
`;
