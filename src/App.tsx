import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card } from "./components/card/Card";
import Logo from "./components/logo/Logo";
import { getBackgroundColor } from "./background";
import { css } from "@emotion/css";
import Social from "./components/socials/Social";
import { appStyles } from "./app.styles";

function App() {
  const [background, setBackground] = useState<string>();
  useEffect(() => {
    setBackground(getBackgroundColor());
  }, []);
  console.log("background", background);

  return (
    <div className={appStyles.background(background)}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className={appStyles.container}>
        <Logo />
        <appStyles.subtitle>Product Solutions</appStyles.subtitle>
        <Social />
      </div>
      {/* <div>Atomism</div>
      <Card
        frontColor='#7BFFD0'
        backColor='#FFF171'
        height={400}
        width={280}
      /> */}
    </div>
  );
}

export default App;
