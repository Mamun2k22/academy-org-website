import React from "react";
import AfterSchoolTransportation from "./AfterSchoolTransportation";
import AfterSchoolHomeWork from "./AfterSchoolHomeWork";
import AfterSchoolForm from "./AfterSchoolForm";
import AfterSchoolWeeklyLineup from "./afterSchoolWeekly/AfterSchoolWeeklyLineup";
import AfterSchoolHero from "./AfterSchoolHero";
import AfterSchoolFaq from "./AfterSchoolFaq";

const AfterSchool = () => {
  return (
    <div>
     <div className="hidden sm:block lg:my-20">
     <AfterSchoolHero />
     </div>
      <AfterSchoolForm />
      <AfterSchoolTransportation />
      <AfterSchoolHomeWork />
      <AfterSchoolWeeklyLineup />
      <AfterSchoolFaq></AfterSchoolFaq>

    </div>
  );
};

export default AfterSchool;
