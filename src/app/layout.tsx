import { SBSans } from "@/fonts";
import { FormWrapper } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Profile",
  description: "Edit profile form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={SBSans.className}>
        <main>
          <FormWrapper>{children}</FormWrapper>
        </main>
      </body>
    </html>
  );
}
