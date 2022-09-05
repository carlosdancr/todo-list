import * as C from "./styles";
import { ReactComponent as LinkedinLogo } from "../../assets/logo-linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/logo-github.svg";
import { ReactComponent as TelegramLogo } from "../../assets/logo-telegram.svg";

const Header = () => {
  return (
    <C.Header>
      <C.Container>
        <C.Title>To-Do List</C.Title>

        <C.SocialMediaList>
          <li>
            <C.Link href="https://www.linkedin.com/in/carlosdancr/">
              <LinkedinLogo />
            </C.Link>
          </li>
          <li>
            <C.Link href="https://www.github.com/carlosdancr/">
              <GithubLogo />
            </C.Link>
          </li>
          <li>
            <C.Link href="https://t.me/carlosdancr/">
              <TelegramLogo />
            </C.Link>
          </li>
        </C.SocialMediaList>
      </C.Container>
    </C.Header>
  );
};

export default Header;
