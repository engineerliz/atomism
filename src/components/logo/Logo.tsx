import React from "react";
import AtImg from "../../assets/at.png";
import MismImg from "../../assets/mism.png";
import DiamondImg from "../../assets/diamond.png";
import { logoStyles } from "./logo.styles";

const Logo = () => {
  return (
    <logoStyles.container>
      <img src={AtImg} className={logoStyles.text} />
      <img src={DiamondImg} className={logoStyles.diamond} />
      <img src={MismImg} className={logoStyles.text} />
    </logoStyles.container>
  );
};

export default Logo;
