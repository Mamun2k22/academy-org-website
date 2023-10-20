import React from "react";
import mon1 from "../../../../src/assets/mon1.webp";
import mon2 from "../../../../src/assets/mon2.webp";
import Tuesday1 from "../../../../src/assets/Tuesday1.webp";
import tuesday2 from "../../../../src/assets/tuesday2.webp";
import wed1 from "../../../../src/assets/wed1.webp";
import wed2 from "../../../../src/assets/wed2.webp";
import thus1 from "../../../../src/assets/thus1.webp";
import thus2 from "../../../../src/assets/thus2.webp";
import friday1 from "../../../../src/assets/friday1.webp";
import friday2 from "../../../../src/assets/friday2.webp";


const AfterSchoolWeeklyLineup = () => {
  return (
    <div className="my-20">
      <div className="mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-8">
        <h1 className="text-center font-[400] text-[36px]">
          Weekly Lineup: Core Daily Focuses!
        </h1>
        <h3 className="text-center font-[300] text-[20px] mt-3 mb-8">
          Exact activity for each day may vary depending on interest and weather
        </h3>

        {/* Monday */}
        <div className="grid grid-cols-1 sm:grid-cols-2 my-20">
          <div className="flex flex-col gap-y-6 items-center">
            <h2 className="text-center sm:text-end text-[32px] font-semibold drop-shadow-xl sm:ml-60">
              - Monday -
            </h2>
            <p className="border-4 rounded-full border-[#4EBA59] py-4 rounded-r-none sm:w-9/12 px-5 sm:px-10 sm:ml-56 text-center text-base">
              <span className="font-medium text-[20px]">
                Team Sports & Playground* 3:45-4:45p
              </span>{" "}

              At the 5 acre Preston Athletic Fields and Park
              across the street.
            </p>

            <div className="ml-4 sm:ml-52 p-2 shadow-md shadow-slate-300">
              <img
                className="mb-4 w-[338px] h-[425px] sm:w-full sm:h-full object-cover"
                src={mon1}
                alt=""
                srcset=""
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-6 mt-10 sm:mt-0">
            <div className="mx-auto sm:mx-4 p-2 sm:w-[338px] sm:h-[425px] shadow-md shadow-slate-300">
              <img
                className="mb-10"
                src={mon2}
                alt=""
                srcset=""
              />
              <p className="text-center">*Weather Depending</p>
            </div>

            <p className="-z-10 -ml-8 mt-10 border-4 rounded-full border-[#4EBA59] py-5 rounded-l-none sm:rounded-l-none sm:w-9/12 sm:px-10 text-center text-base">
              <span className="text-2xl md:text-2xl font-medium text-[20px]">
                Alternative: Trampolines, Art, Free-play!
              </span>{" "}
              <br />
              On-site in our playground area and in our
            </p>
          </div>
        </div>

        {/* Tuesday */}
        <div class="grid grid-cols-1 md:grid-cols-2 my-20">
          <div class="flex flex-col gap-y-6 items-center">
            <h2 class="text-end text-2xl md:text-4xl font-semibold drop-shadow-xl md:ml-60">
              - Tuesday -
            </h2>
            <p class="border-4 rounded-full border-[#4EBA59] py-4 rounded-r-none w-full md:w-9/12 px-5 md:px-7 md:ml-60 text-center text-base md:text-lg">
              <span class="font-medium text-2xl md:text-2xl">
                Film Club 3:45-4:45p
              </span>
              <br />
              How to make a film A-Z. Kids are grouped
              <br />
              for age-appropriate curriculum
            </p>
            <div class="ml-4 md:ml-52 p-2 shadow-md shadow-slate-300">
              <img
                class="mb-4 w-full md:w-[338px] h-[425px] object-cover"
                src={tuesday2}
                alt=""
              />
            </div>
          </div>

          <div class="flex flex-col gap-y-6 mt-10 md:mt-0">
            <div class="ml-4 p-2 md:w-[338px] h-[425px] shadow-md shadow-slate-300">
              <img class="mb-10 w-full h-full object-cover" src={Tuesday1} alt="" />
              <p class="text-center">*Weather Depending</p>
            </div>
            <p class="-z-10 -ml-10 border-4 rounded-full border-[#4EBA59] py-4 rounded-l-none w-full md:w-9/12 px-4 md:px-4 md:mr-64 text-center text-base md:text-lg lg:mt-10 mt-12">
              <span class="font-medium text-[20px]">
                Alternative: Trampolines, Art, Free-play! <br />
              </span>

              On-site in our playground area and in our classrooms!
            </p>
          </div>
        </div>


        {/* Wednesday */}
        <div class="grid grid-cols-1 md:grid-cols-2 my-20">
          <div class="flex flex-col gap-y-6 items-center">
            <h2 class="text-end text-2xl md:text-4xl font-semibold drop-shadow-xl md:ml-60">
              - Wednesday -
            </h2>
            <p class="border-4 rounded-full border-[#4EBA59] py-4 rounded-r-none w-full md:w-9/12 px-5 md:px-7 md:ml-60 text-center text-base md:text-lg">
              <span class="font-medium text-[20px]">
                Horseback Riding!* 2-3:30p & 3:45-5:15p
              </span>
              <br />
              On-site in our horse paddock & on the Preston-Fall City Trail!
            </p>
            <div class="ml-4 md:ml-52 p-2 shadow-md shadow-slate-300">
              <img
                class="mb-4 w-full md:w-[338px] h-[425px] object-cover"
                src={wed2}
                alt=""
              />
            </div>
          </div>

          <div class="flex flex-col gap-y-6 mt-10 md:mt-0">
            <div class="ml-4 p-2 md:w-[338px] h-[425px] shadow-md shadow-slate-300">
              <img class="mb-10 w-full h-full object-cover" src={wed1} alt="" />
              <p class="text-center">*Weather Depending</p>
            </div>
            <p class="-z-10 lg:-ml-12 border-4 rounded-full border-[#4EBA59] py-3 rounded-l-none w-full md:w-10/12 px-5 md:px-4 md:mr-64 text-center text-base md:text-lg lg:mt-10 mt-12">
              <span class=" font-medium text-[20px]">
                Optional**: Cognitive Ability Training
              </span>
              <br />
              Guaranteed to improve executive processing, processing speed, attention control, learning speed, and memory recall. <span className="underline">Click here</span> to download the info packet.
            </p>
          </div>
        </div>

        {/* Thursday */}
        <div class="grid grid-cols-1 md:grid-cols-2 my-20 gap-10">
          <div class="flex flex-col gap-6 items-center">
            <h2 class="text-end text-3xl font-semibold drop-shadow-xl md:ml-60">
              - Thursday -
            </h2>
            <p class="border-4 rounded-full border-green-500 py-4 rounded-r-none w-full md:w-10/12 px-5 md:ml-64 sm:ml-64 text-center text-base">
              <span class="font-medium lg:text-2xl text-xl">
                Nature Day with Horses* 3:45-4:45p <br />
              </span>{" "}

              We take the horses on the Preston-Fall City Trail
              and take turns hiking, horseback riding, & leading
              our miniature horse.
            </p>

            <div class="ml-4 md:ml-52 p-2 shadow-md shadow-slate-300">
              <img
                class="mb-4 w-full md:w-[338px] h-auto md:h-[425px]"
                src={thus2}
                alt=""
                srcset=""
              />
            </div>
          </div>

          <div class="flex flex-col gap-6">
            <div class="ml-4 p-2 w-full md:w-[338px] h-auto md:h-[425px] shadow-md shadow-slate-300">
              <img class="mb-10" src={thus1} alt="" srcset="" />
              <p class="text-center">*Weather Depending</p>
            </div>

            <p class="-z-10 -ml-16 mt-10 border-4 rounded-full border-green-500 py-4 rounded-l-none w-full md:w-9/12 px-6 md:mr-64 text-center text-base">
              <span class="font-medium text-2xl">
                Alternative: Movie + popcorn!
              </span>{" "}
              <br />
              In our classrooms. Free-play and trampolines  are also available!
            </p>
          </div>
        </div>

        {/* Friday */}
        <div className="grid grid-cols-1 sm:grid-cols-2 my-20">
          <div className="flex flex-col gap-y-6 items-center">
            <h2 className="text-center sm:text-end text-[32px] font-semibold drop-shadow-xl sm:ml-60">
              - Friday -
            </h2>
            <p className="border-4 rounded-full border-[#4EBA59] py-4 rounded-r-none sm:w-9/12 px-5 sm:px-10 sm:ml-56 text-center text-base">
              <span className="font-medium text-[20px]">
                Cooking/baking 2-3:30p & 3:45-5:15p
              </span>{" "}
              <br />
              At the Raging River Church we cook, bake
              <br /> and learn about nutrition by a Professional Chef!
            </p>

            <div className="ml-4 sm:ml-52 p-2 shadow-md shadow-slate-300">
              <img
                className="mb-4 w-[338px] h-[425px] sm:w-full sm:h-full object-cover"
                src={friday2}
                alt=""
                srcset=""
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-6 mt-10 sm:mt-0">
            <div className="mx-auto sm:mx-4 p-2 sm:w-[338px] sm:h-[425px] shadow-md shadow-slate-300">
              <img
                className="mb-10"
                src={friday1}
                alt=""
                srcset=""
              />
              <p className="text-center">*Weather Depending</p>
            </div>

            <p className="-z-10 -ml-8 mt-10 border-4 rounded-full border-[#4EBA59] py-4 rounded-l-none sm:rounded-l-none sm:w-8/12 sm:px-10 text-center text-base">
              <span className="font-medium text-[20px]">
                Alternative: Movie + popcorn!
              </span>{" "}
              <br />
              In our classrooms. Free-play and <br /> trampolines are also an option!
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default AfterSchoolWeeklyLineup;
