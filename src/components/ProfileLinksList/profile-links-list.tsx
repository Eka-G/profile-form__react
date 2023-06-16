import { StyledList, StyledListItem, StyledListImg } from "./styled";

interface ProfileLinksProps {
  telegramLink: string;
  gitHubLink: string;
  resumeLink: string;
}

function ProfileLinksList({
  telegramLink,
  gitHubLink,
  resumeLink,
}: ProfileLinksProps) {
  return (
    <StyledList>
      <StyledListItem>
        <StyledListImg src="/folder.svg" width={13} height={11} alt="folder" />
        <a href={telegramLink}>Telegram</a>
      </StyledListItem>

      <StyledListItem>
        <StyledListImg src="/folder.svg" width={13} height={11} alt="folder" />
        <a href={gitHubLink}>GitHub</a>
      </StyledListItem>

      <StyledListItem>
        <StyledListImg src="/folder.svg" width={13} height={11} alt="folder" />
        <a href={resumeLink}>Resume</a>
      </StyledListItem>
    </StyledList>
  );
}

export default ProfileLinksList;
