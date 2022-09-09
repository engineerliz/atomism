import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Logo from './components/logo/Logo';
import { getBackgroundColor } from './background';
import Social from './components/socials/Social';
import { appStyles } from './app.styles';
import PortfolioItem from './components/companies/PortfolioItem';
import { Companies, MiniDesigns } from './components/companies/portfolioWork';
import { Subheading } from './components/styles/fonts';
import Background from './components/background/Background';

function App() {
  return (
    <>
      <Background />
      {/* <div className={appStyles.background(background)} /> */}
      <div className={appStyles.container}>
        <Logo />
        <Subheading.SH22 className={appStyles.subtitle}>
          Product Solutions: Design, Engineering, Strategy
        </Subheading.SH22>
        <Social />
        <Subheading.SH18 className={appStyles.sectionTitle}>
          Previous Client Work
        </Subheading.SH18>
        <appStyles.companiesContainer>
          {Companies.toList().map((company) => (
            <PortfolioItem
              key={company.name}
              {...company}
              hashtags={company.hashtags}
            />
          ))}
        </appStyles.companiesContainer>
        <Subheading.SH18 className={appStyles.sectionTitle}>
          More Design Work
        </Subheading.SH18>
        <appStyles.companiesContainer>
          {MiniDesigns.toList().map((company) => (
            <PortfolioItem
              key={company.name}
              {...company}
              hashtags={company.hashtags}
            />
          ))}
        </appStyles.companiesContainer>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
