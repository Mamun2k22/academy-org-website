import React from "react";

const AfterSchoolCost = () => {
  return (
    <div>
      <h1 className="text-center font-[400] text-[36px]">What's the Cost?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
        <div className="flex flex-col justify-around border-[3px] border-[#4EBA59] rounded-b-3xl text-center">
          <h3 className="p-1 font-[700] text-[26px] uppercase">
            Monday - Friday
          </h3>
          <div className="bg-[#0D5EBA] text-white p-1 font-[600] my-2 text-[18px] ">
            <h4>~ 3:45pm - 5:15pm or 1:45 - 3:15pm</h4>
          </div>
          <h1 className="p-1 font-[800] text-[36px]">
            $45 <span className="font-[600] text-[18px] uppercase">/Day</span>
          </h1>
        </div>
        <div className="flex flex-col justify-around border-[3px] border-[#4EBA59] rounded-b-3xl text-center">
          <h3 className="p-1 font-[700] text-[26px] uppercase">
            Early Release
          </h3>
          <div className="bg-[#0D5EBA] text-white p-1 font-[600] my-2 text-[18px]">
            <h4>~ 1:45 - 5:15pm</h4>
          </div>
          <h1 className="p-1 font-[800] text-[36px]">
            $72 <span className="font-[600] text-[18px] uppercase">/Day</span>
          </h1>
        </div>
        <div className="flex flex-col justify-around border-[3px] border-[#4EBA59] rounded-b-3xl text-center">
          <h3 className="p-1 font-[700] text-[20px] uppercase">
            Extended care options
          </h3>
          <div className="bg-[#0D5EBA] text-white p-1 font-[600] my-1 text-[18px]">
            <h4>Care 5:15-5:30p</h4>
          </div>
          <h1 className="p-1 font-[800] text-[26px]">
            $3 <span className="font-[600] text-[18px] uppercase">/Day</span>
          </h1>
          <div className="bg-[#0D5EBA] text-white p-1 font-[600] my-1 text-[18px]">
            <h4>Care 5:15-6p</h4>
          </div>
          <h1 className="p-1 font-[800] text-[26px]">
            $7 <span className="font-[600] text-[18px] uppercase">/Day</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AfterSchoolCost;
