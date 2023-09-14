import React from "react";

// components
import Navbar from "../../components/Navbar";
import Breadcumb from "../../components/breadcumb";

import PracticDetails from "../../components/EducationLawDetails";
import FooterSection from "../../components/Footer";

const EducationLawDetails = () => {
  return (
    <div>
      <Navbar />
      <Breadcumb bdtitle={"Practice Area"} bdsub={"Education Law Details"} />
      <PracticDetails />
      <FooterSection />
    </div>
  );
};

export default EducationLawDetails;
