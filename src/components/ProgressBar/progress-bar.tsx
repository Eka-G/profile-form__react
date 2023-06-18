"use client";

import { type StepType } from "@/shared";
import { ProgressStep } from "@/components";
import { StyledBar, StyledProgress, StyledStepsWrapper } from "./styled";

interface ProgressBarProps {
  widthPercent?: number;
  steps: StepType[];
}

function ProgressBar({ widthPercent, steps }: ProgressBarProps) {
  return (
    <StyledBar>
      <StyledProgress $widthPercent={widthPercent} />
      <StyledStepsWrapper>
        <ProgressStep steps={steps} />
      </StyledStepsWrapper>
    </StyledBar>
  );
}

export default ProgressBar;
