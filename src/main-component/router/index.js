import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "../HomePage";
import AboutPage from "../AboutPage";
import PracticePage from "../PracticePage";
import FamilyLawDetails from "../FamilyLawDetails";
import PersonalInjuryLaw from "../PersonalInjuryLaw";
import CriminalLawDetails from "../CriminalLawDetails";
import BusinessLawDetails from "../BusinessLawDetails";
import EducationLawDetails from "../EducationLawDetails";
import RealEstateLawDetails from "../RealEstateLawDetails";
import ContactPage from "../ContactPage";

const AllRoute = () => {
  return (
    <div className="App">
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/Family-Law-Details" element={<FamilyLawDetails />} />
        <Route
          path="/Personal-Injury-Details"
          element={<PersonalInjuryLaw />}
        />
        <Route path="/Criminal-Law-Details" element={<CriminalLawDetails />} />
        <Route path="/Business-Law-Details" element={<BusinessLawDetails />} />
        <Route
          path="/Education-Law-Details"
          element={<EducationLawDetails />}
        />
        <Route
          path="/Real-Estate-Law-Details"
          element={<RealEstateLawDetails />}
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default AllRoute;
