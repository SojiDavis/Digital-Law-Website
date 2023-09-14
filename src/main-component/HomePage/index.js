import React from "react";

// components
import Navbar from "../../components/Navbar";
import SimpleSlider from "../../components/hero";
import Features from "../../components/features";
import AboutSection from "../../components/about";
import PracticeArea from "../../components/PracticeArea";
import ContactSection from "../../components/ContactSection";
import TeamSection from "../../components/Team";
// import BlogSection from "../../components/BlogSection";
import FooterSection from "../../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <SimpleSlider />
      <Features />
      <AboutSection />
      <PracticeArea />
      <ContactSection />
      <TeamSection />
      {/* <BlogSection /> */}
      <FooterSection />
    </div>
  );
};

export default Homepage;
