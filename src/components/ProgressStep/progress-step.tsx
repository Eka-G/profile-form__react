"use client";

import { type StepType } from "@/shared";
import { StyledStep, StyledStepsLine } from "./styled";

interface ProgressStepProps {
  steps: StepType[];
}

function ProgressStep({ steps }: ProgressStepProps) {
  return (
    <StyledStepsLine>
      {steps.map((step, i) => {
        return (
          <StyledStep key={step + i} $stepPhase={step} $stepNumber={i + 1} />
        );
      })}
    </StyledStepsLine>
  );
}

export default ProgressStep;
