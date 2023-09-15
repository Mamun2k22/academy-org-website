/* eslint-disable no-unused-vars */
import React from "react";
import image from "../../images/LibertyLaunchAcademy_K-12_PrivateSchool-Idaho-wht3-300x147.png";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="bg-[#1D3767] text-white">
      <div className="lg:w-7/12 mx-auto">
        <div className="flex justify-center pt-20">
          <img src={image} alt="" />
        </div>
        <div>
          <h1 className="mt-8 text-center">
            2110 N Molter Rd, Liberty Lake, WA 99019
          </h1>
          <h2 className="text-center">
            Located at the Meadowwood Technology Campus
          </h2>
          <h3 className="text-center mt-7">Call 509.505.7607</h3>
          <div className="flex justify-center gap-5 py-7">
            <BiLogoFacebook className="h-12 w-12 border-2 border-gray-500 hover:border-white p-2 rounded-full"></BiLogoFacebook>
            <AiFillInstagram className="h-12 w-12 border-2 border-gray-500 hover:border-white p-2 rounded-full  "></AiFillInstagram>
          </div>
          <p className="text-center pb-20">© 2023 Liberty Launch Academy - K-12 Private School.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
