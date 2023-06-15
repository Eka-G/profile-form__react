import { ProfilePanel } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <ProfilePanel
      initials="АИ"
      userName="Иван Иванов"
      telegramLink="https://web.telegram.org/"
      gitHubLink="https://github.com/"
      resumeLink="/"
    />
  );
}
