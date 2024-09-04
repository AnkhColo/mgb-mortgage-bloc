import React from "react";
import NavBar from "../landingPageComponents/NavBar";
import { Link } from "react-router-dom";
import HeadHero from "../landingPageComponents/HeadHero";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <HeadHero />
    </div>
  );
};

export default LandingPage;
