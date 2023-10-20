import React from "react";
import school1 from "../../../src/assets/school1.webp";
import school2 from "../../../src/assets/school2.webp";
import school3 from "../../../src/assets/school3.webp";
import school4 from "../../../src/assets/school4.webp";


const AfterSchoolHero = () => {
  return (
    <div className="relative">
      <h1 className="absolute flex top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center  font-medium text-[40px] text-3xl lg:text-5xl sm:text-[36px] mt-4 mb-5 sm:mb-14">
        AFTER-SCHOOL PROGRAM
      </h1>
      <div className="grid grid-cols-4">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${school1})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "450px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${school2})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "450px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${school3})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "450px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${school4})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "450px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AfterSchoolHero;
