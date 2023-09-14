import React from "react";

// components
import Navbar from "../../components/Navbar";
import Breadcumb from "../../components/breadcumb";

import PracticDetails from "../../components/CriminalLawDetails";
import FooterSection from "../../components/Footer";

const PersonalInjuryLaw = () => {
  return (
    <div>
      <Navbar />
      <Breadcumb bdtitle={"Practice Area"} bdsub={"Criminal Law Details"} />
      <PracticDetails />
      <FooterSection />
    </div>
  );
};

export default PersonalInjuryLaw;
