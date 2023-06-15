"use client";

import "./form-wrapper.css";
import { usePathname } from "next/navigation";

function FormWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const mainPageStyle = {
    padding: "25px",
    width: "900px",
    height: "704px",
    borderRadius: "12px 12px 0px 0px",
  };

  const stepsStyle = {
    padding: "62px 110px 80px 110px",
    borderRadius: "24px",
  };

  const currentStyles = pathname === "/" ? mainPageStyle : stepsStyle;

  return (
    <div className="form-wrapper" style={currentStyles}>
      {children}
    </div>
  );
}

export default FormWrapper;
