import React from "react";

// components
import Navbar from "../../components/Navbar";
import Breadcumb from "../../components/breadcumb";

import PracticDetails from "../../components/FamilyLawDetails";
import FooterSection from "../../components/Footer";

const FamilyLawDetails = () => {
  return (
    <div>
      <Navbar />
      <Breadcumb bdtitle={"Practice Area"} bdsub={"Family Law Details"} />
      <PracticDetails />
      <FooterSection />
    </div>
  );
};

export default FamilyLawDetails;
