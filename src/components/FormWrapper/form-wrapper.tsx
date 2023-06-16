"use client";

import { usePathname } from "next/navigation";
import { StyledWrapper } from "./styled";

function FormWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  return <StyledWrapper $isMain={isMainPage}>{children}</StyledWrapper>;
}

export default FormWrapper;
