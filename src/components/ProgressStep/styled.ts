"use client";

import styled from "styled-components";
import { type StepType } from "@/shared";

export const StyledStepsLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledStep = styled.div<{
  $stepPhase: StepType;
  $stepNumber: number;
}>`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ $stepPhase }) => {
    switch ($stepPhase) {
      case "usual":
        return "#a6a6a6";
      case "current":
        return "no-repeat center #5558fa url('/current-step-mark.svg')";
      case "compleated":
        return "no-repeat center #5558fa url('/compleated-step-mark.svg')";
      default:
        return "#a6a6a6";
    }
  }};

  &::after {
    position: absolute;
    top: 28px;
    left: 0;
    content: "${({ $stepNumber }) => $stepNumber}";
    color: ${({ $stepPhase }) =>
      $stepPhase === "usual" ? "#666666" : "#5558fa"}};
  }
`;
