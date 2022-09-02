import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card } from "./components/card/Card";
import Logo from "./components/logo/Logo";
import { getBackgroundColor } from "./background";
import { css } from "@emotion/css";
import Social from "./components/socials/Social";
import { appStyles } from "./app.styles";
import Company from "./components/companies/Company";
import { List } from "immutable";
import { Companies } from "./components/companies/companies";
import { Subheading } from "./components/styles/fonts";

function App() {
  const [background, setBackground] = useState<string>();
  useEffect(() => {
    setBackground(getBackgroundColor());
  }, []);
  console.log("background", background);

  return (
    <>
      <div className={appStyles.background(background)} />
      <div className={appStyles.container}>
        <Logo />
        <appStyles.subtitle>Product Solutions</appStyles.subtitle>
        <Social />
        <appStyles.companiesContainer>
          {Companies.map((company) => (
            <Company {...company} hashtags={company.hashtags} />
          ))}
        </appStyles.companiesContainer>
        <br />
        <Subheading.SH14>
          Please reach out for more details on past work.
        </Subheading.SH14>
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
