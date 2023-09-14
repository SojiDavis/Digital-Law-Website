import React from "react";

// components
import Navbar from "../../components/Navbar";
import Breadcumb from "../../components/breadcumb";

import Features from "../../components/features";
import AboutSection from "../../components/about";
import PracticeArea from "../../components/PracticeArea";
import TeamSection from "../../components/Team";
// import BlogSection from "../../components/BlogSection";
import FooterSection from "../../components/Footer";

const AboutPage = () => {
  return (
    <div className="about-layout">
      <Navbar />
      <Breadcumb bdtitle={"About Us"} bdsub={"About"} />
      <Features />
      <AboutSection />
      <PracticeArea />
      <TeamSection />
      {/* <BlogSection /> */}
      <FooterSection />
    </div>
  );
};

export default AboutPage;
