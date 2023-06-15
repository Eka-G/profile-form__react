import { ProfileLinksList } from "@/components";
import "./profile-panel.css";

interface ProfileProps {
  initials: string;
  userName: string;
  telegramLink: string;
  gitHubLink: string;
  resumeLink: string;
}

function ProfilePanel({
  initials,
  userName,
  telegramLink,
  gitHubLink,
  resumeLink,
}: ProfileProps) {
  return (
    <div className="profile">
      <div className="profile__avatar">
        <span>{initials}</span>
      </div>

      <div className="profile__info">
        <span className="profile__name">{userName}</span>
        <ProfileLinksList
          telegramLink={telegramLink}
          gitHubLink={gitHubLink}
          resumeLink={resumeLink}
        />
      </div>
    </div>
  );
}

export default ProfilePanel;
