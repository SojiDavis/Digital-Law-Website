import React from "react";

// components
import Navbar from "../../components/Navbar";
import Breadcumb from "../../components/breadcumb";

import PracticDetails from "../../components/RealEstateLawDetails";
import FooterSection from "../../components/Footer";

const RealEstateLawDetails = () => {
  return (
    <div>
      <Navbar />
      <Breadcumb bdtitle={"Practice Area"} bdsub={"Real Estate Law Details"} />
      <PracticDetails />
      <FooterSection />
    </div>
  );
};

export default RealEstateLawDetails;
