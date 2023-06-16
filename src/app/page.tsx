import { FormMain, ProfilePanel } from "@/components";

export default function Home() {
  return (
    <>
      <ProfilePanel
        initials="АИ"
        userName="Иван Иванов"
        telegramLink="https://web.telegram.org/"
        gitHubLink="https://github.com/"
        resumeLink="/"
      />
      <FormMain />
    </>
  );
}
