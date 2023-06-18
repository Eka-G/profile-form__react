import { ProgressBar, FormStep1 } from "@/components";
import { StyledWrapper } from "./styled";

export default function CreatePage() {
  return (
    <StyledWrapper>
      <ProgressBar steps={["current", "usual", "usual"]} />

      <FormStep1 />
    </StyledWrapper>
  );
}
