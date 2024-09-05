import React from "react";
import NavBar from "../landingPageComponents/NavBar";
import { Link } from "react-router-dom";
import HeadHero from "../landingPageComponents/HeadHero";

const LandingPage = () => {
  return (
    <div className="landing-font">
      <NavBar />
      <HeadHero />
      <HeadHero />
    </div>
  );
};

export default LandingPage;
