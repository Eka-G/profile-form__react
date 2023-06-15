import Image from "next/image";
import "./profile-links-list.css";

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
    <ul className="profile__links">
      <li className="profile__link">
        <Image
          src="/folder.svg"
          width={13}
          height={11}
          alt="folder"
          className="profile__link-img"
        />
        <a href={telegramLink}>Telegram</a>
      </li>

      <li className="profile__link">
        <Image
          src="/folder.svg"
          width={13}
          height={11}
          alt="folder"
          className="profile__link-img"
        />
        <a href={gitHubLink}>GitHub</a>
      </li>

      <li className="profile__link">
        <Image
          src="/folder.svg"
          width={13}
          height={11}
          alt="folder"
          className="profile__link-img"
        />
        <a href={resumeLink}>Resume</a>
      </li>
    </ul>
  );
}

export default ProfileLinksList;
