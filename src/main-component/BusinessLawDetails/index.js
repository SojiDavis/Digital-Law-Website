import React from "react";

// components
import Navbar from "../../components/Navbar";
import Breadcumb from "../../components/breadcumb";

import PracticDetails from "../../components/BusinessLawDetails";
import FooterSection from "../../components/Footer";

const BusinessLawDetails = () => {
  return (
    <div>
      <Navbar />
      <Breadcumb bdtitle={"Practice Area"} bdsub={"Business Law Details"} />
      <PracticDetails />
      <FooterSection />
    </div>
  );
};

export default BusinessLawDetails;
