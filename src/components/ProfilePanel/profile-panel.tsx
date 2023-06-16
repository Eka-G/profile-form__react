import { ProfileLinksList } from "@/components";
import { StyledProfile, StyledAvatar, StyledName, StyledInfo } from "./styled";

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
    <StyledProfile>
      <StyledAvatar>
        <span>{initials}</span>
      </StyledAvatar>

      <StyledInfo>
        <StyledName>{userName}</StyledName>
        <ProfileLinksList
          telegramLink={telegramLink}
          gitHubLink={gitHubLink}
          resumeLink={resumeLink}
        />
      </StyledInfo>
    </StyledProfile>
  );
}

export default ProfilePanel;
