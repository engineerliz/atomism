import React from "react";
import Mail from "../../assets/Mail.png";
import Linkedin from "../../assets/Linkedin.png";
import Twitter from "../../assets/Twitter.png";
import { socialStyles } from "./social.styles";

const Social = () => {
  return (
    <socialStyles.container>
      <a href="mailto:liz@atomism.co">
        <socialStyles.iconButton>
          <img src={Mail} className={socialStyles.icon} />
        </socialStyles.iconButton>
      </a>
      <a
        href="https://www.linkedin.com/in/elizabeth-ha-11646811a/"
        target="_blank"
        rel="noreferrer"
      >
        <socialStyles.iconButton>
          <img src={Linkedin} className={socialStyles.icon} />
        </socialStyles.iconButton>
      </a>
      <a
        href="https://twitter.com/not_lizholmes"
        target="_blank"
        rel="noreferrer"
      >
        <socialStyles.iconButton>
          <img src={Twitter} className={socialStyles.icon} />
        </socialStyles.iconButton>
      </a>
    </socialStyles.container>
  );
};

export default Social;
