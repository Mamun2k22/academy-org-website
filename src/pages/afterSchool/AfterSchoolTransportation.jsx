import React from "react";
import cart from "../../../src/assets/cart.webp";

const AfterSchoolTransportation = () => {
  return (
    <div className=" bg-[#4EBA59] relative sm:mt-0 mt-32">
      <div className="flex flex-col-reverse sm:flex-row justify-center items-center h-[175px] px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-lg md:px-18 lg:px-8 gap-5">
        <h6 className=" text-center text-white font-[600] text-[18px] sm:text-[20px] mx-auto">
          Transportation is included from: <br /> · Cascade View & Timber Ridge
          Elementary Schools via our bus · Clark Elementary students are have a
          bus stop here
        </h6>
        <img className="absolute sm:static -top-32 w-80 sm:w-[400px]" src={cart} alt="" />
      </div>

    </div>
  );
};

export default AfterSchoolTransportation;
