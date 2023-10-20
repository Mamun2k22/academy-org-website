import React from "react";
import HeroImg from "../../../src/assets/parents.webp";
// import ParentRecent from "./ParentRecent";
import ParentResources from "./ParentResources";

const Parents = () => {
  return (
    <div className="lg:my-20 my-20">
      <div
        className="relative flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${HeroImg})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "400px",
        }}
      >
        <h1 className="text-center text-white font-[800] text-[52px] md:w-11/12">
          PARENTS
        </h1>
      </div>
      <ParentResources />
      <div>
        {/* <ParentRecent /> */}
      </div>
    </div>
  );
};

export default Parents;
