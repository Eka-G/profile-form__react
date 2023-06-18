export type StepType = "usual" | "current" | "compleated";
export type Color =
  | `rgba(${number}, ${number}, ${number}, ${number})`
  | `#${string}`;

export const formItemStyles = `
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;
`;
