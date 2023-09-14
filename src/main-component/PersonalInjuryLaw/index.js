import React from "react";

// components
import Navbar from "../../components/Navbar";
import Breadcumb from "../../components/breadcumb";

import PracticDetails from "../../components/PersonalInjuryLaw";
import FooterSection from "../../components/Footer";

const PersonalInjuryLaw = () => {
  return (
    <div>
      <Navbar />
      <Breadcumb
        bdtitle={"Practice Area"}
        bdsub={"Personal Injury Law Deatils"}
      />
      <PracticDetails />
      <FooterSection />
    </div>
  );
};

export default PersonalInjuryLaw;
