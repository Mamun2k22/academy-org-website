import React from "react";
import AfterSchoolCost from "./AfterSchoolCost";
import Form from "./Form";

const AfterSchoolForm = () => {
  return (
    <div className="my-5 sm:my-20">
      <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-8">
        <h1 className="text-center font-[400] text-[36px] hidden sm:block">
          Cooking · Horseback Riding · Sports
        </h1>
        <h1 className="text-center text-green-500 font-semibold text-[36px] text-2xl sm:text-[36px] mt-5 mb-5 sm:mb-14">
          After-School Program
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <iframe
              className="w-full h-[355px] "
              src="https://www.youtube.com/embed/wMkjJY3YJt0?start=1&autoplay=1&mute=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="my-10">
              <AfterSchoolCost />
            </div>
            <div className="w-10/12 mx-auto flex justify-center items-center gap-5">
              <div>
                <h2 className="uppercase text-[32px] font-[700] text-[#F60419]">
                  Winter Special!
                </h2>
                <p className="text-[16px]">Sign-up by March 20th!</p>
              </div>
              <h4 className="text-[18px] font-[600] uppercase">
                Monday - Friday $899/mo
              </h4>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterSchoolForm;
