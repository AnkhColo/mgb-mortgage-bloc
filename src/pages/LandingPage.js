import React from "react";
import NavBar from "../landingPageComponents/NavBar";
import { Link } from "react-router-dom";
import HeadHero from "../landingPageComponents/HeadHero";
import AppImages from "../landingPageComponents/AppImages";
import VideoWindow from "../landingPageComponents/VideoWindow";
import TailHero from "../landingPageComponents/TailHero";

const LandingPage = () => {
  return (
    <div className="landing-font">
      <NavBar />
      <HeadHero />
      <AppImages />
      <VideoWindow />
      <TailHero />
    </div>
  );
};

export default LandingPage;
