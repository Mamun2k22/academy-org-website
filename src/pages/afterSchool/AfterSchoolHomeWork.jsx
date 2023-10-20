import React from "react";
import hom1 from "../../../src/assets/hom1.webp";
import home2 from "../../../src/assets/home2.webp";
import work3 from "../../../src/assets/work3.webp";

const AfterSchoolHomeWork = () => {
  return (
    <div className="bg-[#fff] my-20">
      <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg md:px-18 lg:px-8">
        <h1 className="text-center font-[400] text-[36px]">
          What Will our Days Look Like?
        </h1>
        <h3 className="text-center font-[300] text-[20px] mt-3 mb-8">
          We have{" "}
          <span className="text-center font-[400]  text-[22px]">
            Homework Help
          </span>{" "}
          available everyday
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center">
          <img src={hom1} alt="" />
          <img src={home2} alt="" />
          <img src={work3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AfterSchoolHomeWork;
