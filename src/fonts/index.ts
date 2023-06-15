import localFont from "next/font/local";

const SBSans = localFont({
  src: "./SBSansInterface-Regular.woff2",
  weight: "400",
});

const SBSansSemibold = localFont({
  src: "./SBSansInterface-Semibold.woff2",
  weight: "600",
});

export { SBSans, SBSansSemibold };
