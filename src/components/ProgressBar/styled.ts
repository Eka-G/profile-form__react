"use client";

import styled from "styled-components";

export const StyledBar = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.08);
`;

export const StyledProgress = styled.div<{ $widthPercent?: number }>`
  margin-bottom: 36px;
  width: ${({ $widthPercent }) => ($widthPercent ? `${$widthPercent}%` : 0)};
  height: 100%;
  border-radius: 8px;
  background-color: #5558fa;
`;

export const StyledStepsWrapper = styled.div`
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
`;
