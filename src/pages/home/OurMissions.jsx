/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import icon1 from "../../assets/mission/icon1.png";
import icon2 from "../../assets/mission/icon2.png";
import icon3 from "../../assets/mission/icon3.png";
import icon4 from "../../assets/mission/icon4.png";
import cl from '../../../src/assets/cl.png'
import hug from '../../../src/assets/hug.png'
import kr from '../../../src/assets/kr.png'
import sl from '../../../src/assets/sl.jpg'
import { Link } from "react-router-dom";

const OurMissions = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardDetails = [
    {
      id: 101,
      title: "Individualized & Experience Based",
      imageUrl: cl,
      details:
        "Individual education plans based in action-centered, project-based learning",
      icon: icon1,
    },
    {
      id: 102,
      title: "Cognitive Ability Training",
      imageUrl: kr,
      details:
        "FUN, action-centered program that clinically builds intellectual capabilities & improves any learning struggles",
      icon: icon2,
    },
    {
      id: 103,
      title: "Character Development ",
      imageUrl:sl,
      details:
        " | We enjoy aspects of “farm life” including dedicated “jobs”. We also build a growth mindset with our teachings.",
      icon: icon3,
    },
    {
      id: 104,
      title: "Animal Supported",
      imageUrl:hug,
      details:
        " | We enjoy the therapeutic and character building benefits of keeping domesticated animals.",
      icon: icon4,
    },
  ];

  return (
    <div className="lg:my-12 my-12">
      <div className="text-center ">
      <div className="max-w-xl mx-auto">
            <div className="relative flex flex-col items-center">
                        <div
                            className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                            MISSION
                        </div>
                        <h1 className="text-5xl font-bold dark:text-white"> <span className="text-blue-500"> OUR MISSION
                            </span> </h1>
                        <div className="flex w-40 mt-1 mb-10 overflow-hidden rounded">
                            <div className="flex-1 h-2 bg-blue-200">
                            </div>
                            <div className="flex-1 h-2 bg-blue-300">
                            </div>
                            <div className="flex-1 h-2 bg-blue-400">
                            </div>
                            <div className="flex-1 h-2 bg-blue-500">
                            </div>
                            <div className="flex-1 h-2 bg-blue-600">
                            </div>
                            <div className="flex-1 h-2 bg-blue-700">
                            </div>
                            <div className="flex-1 h-2 bg-blue-800">
                            </div>
                            <div className="flex-1 h-2 bg-blue-900">
                            </div>
                          
                        </div>
            </div>
           </div>
        <h1 className="font-poppins font-medium text-zinc-900 lg:text-3xl text-2xl  lg:px-64 mx-5 lg:mt-0 mt-42">
        Education That Inspires and Invokes Full Potential.
        </h1>
  
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:my-16 ml-5 mt-10 lg:gap-0 gap-6">
        {cardDetails?.map((card) => (
          <div
            key={card.id}
            className="relative w-11/12 h-[450px] overflow-hidden shadow-lg"
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={
                hoveredCard === card.id
                  ? "absolute inset-0 bg-cover bg-top transition scale-105 duration-1000 ease-in-out  "
                  : "absolute inset-0 bg-cover bg-top  duration-1000 ease-in-out border border-blue-600 rounded"
              }
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            />
            <div
              className={`absolute inset-x-0 bottom-0 bg-opacity-50 bg-[#4465a3] ${hoveredCard === card.id
                ? "h-full bg-gradient-to-t from-[#1D3767] text-white opacity-100 pb-5 "
                : "h-96 opacity-100 text-white"
                } transition-all duration-700 ease-in-out`}
            >
              <div
                className={
                  hoveredCard === card.id
                    ? "h-full flex flex-col justify-start px-8  pt-0 duration-700 ease-in-out"
                    : "h-full flex flex-col justify-start px-8 pt-14 duration-700 ease-in-out"
                }
              >
                <div>
                  <img
                    className="border border-indigo-500 h-14 w-14 text-white mb-2 bg-opacity-80 top-0 bg-[#4465a3] rounded-full px-2 py-2"
                    src={card.icon}
                    alt=""
                  />
                  <h3 className="font text-lg">
                    {card.details}
                  </h3>
                </div>
                <h4 className="text-right font-serif">{card.by}</h4>

                {hoveredCard === card.id && (
                  <ul className=" lg:text-3xl text-2xl font-extrabold divider font-serif">
                    <li>{card.title}</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="justify-center">
        <h1 className="text-stone-600 font-poppins lg:px-36 w-11/12 lg:w-11/12 lg:mx-0 text-[22px] lg:text-[22px] text-center mx-4 mt-8">
        We aim to serve student’s who are the exception to traditional education’s
“one-size-fits-all” criterion. If your child has struggled in other
schools, or if you just want a better experience
and outcome for your child,
We are for you!

        </h1>

        <div className="flex flex-col lg:justify-center items-center sm:flex-row sm:space-x-2 mt-6 gap-6">
         <Link to={'/admission'}>
         <button className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-yellow-500 hover:via-red-600 hover:to-red-500 text-white py-3 px-7 rounded-full  text-[16px]">
      View Application Process
    </button></Link>

          <Link to={'/contact-us'}>
          <button className=" hover:text-white text-red-500 py-3 px-6 rounded-full hover:bg-red-600 border-2 border-red-400">
            Contact us for more info
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default OurMissions;
