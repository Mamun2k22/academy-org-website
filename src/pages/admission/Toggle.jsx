import { useState } from "react";

const Toggle = () => {
   
  return (
    <div className="lg:my-10">
      <div class="hs-accordion-group">
          <div class="hs-accordion active lg:w-10/12 " id="hs-basic-heading-one">
            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-80 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-collapse-one">
            <h1 className="text-3xl font-sans font-extrabold  ">PRESCHOOL</h1>
            <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-6 h-6 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
          <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-6 h-6 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
          <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>

              
            </button>
            <div id="hs-basic-collapse-one" class="hs-accordion-content overflow-hidden transition-[height] duration-300 shadow-lg rounded-lg px-8" aria-labelledby="hs-basic-heading-one">
              <p class="text-gray-800 dark:text-gray-200 py-6 ">
              <span className="text-3xl  font-sans">Pay in Full Price: $6,500 </span><br />
            General Multi-child discount <br />
            2 kids $2000 discount (per fam) <br />
            3 kids $4000 discount (per fam)<br />
            4 kids $6000 discount (per fam)<br /> <br />

            Max multi-child discount cap at $6000 <br /> <br />

            ** Resource Fee: $500 Per Child
              </p>
            </div>
          </div>

        <div class="hs-accordion lg:w-10/12" id="hs-basic-heading-two">
          <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-[260px] w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-collapse-two">
          <h1 className="text-3xl font-sans font-extrabold ">KINDERGARTEN</h1>
          <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-6 h-6 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-6 h-6 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
          
          </button>
          <div id="hs-basic-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 shadow-lg px-8" aria-labelledby="hs-basic-heading-two">
          <p class="text-gray-800 dark:text-gray-200 py-6 ">
              <span className="text-3xl  font-sans">Pay in Full Price: $11,000 <br />
(Volunteer Price: $8950)* </span><br />
            <span className="text-[20px] mt-4">General Multi-child discount</span> <br />
            2 kids $2000 discount (per fam) <br />
            3 kids $4000 discount (per fam)<br />
            4 kids $6000 discount (per fam)<br /> <br />

            Max multi-child discount cap at $6000 <br /> <br />

            * Price includes discount for payment in full and 40 hours of volunteering over the school season. Monthly and quarterly payment plans are also available as well as multi-student discounts.
 <br /><br />
            <span className="text-[18px] font-medium">** Resource Fee: $500 Per Child</span>
              </p>
          </div>
        </div>

        <div class="hs-accordion lg:w-10/12" id="hs-basic-heading-two">
          <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-[270px] w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-collapse-two">
          <h1 className="text-3xl font-sans font-extrabold ">1st - 9th Grades</h1>
          <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-6 h-6 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-6 h-6 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
          
          </button>
          <div id="hs-basic-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 shadow-lg px-8" aria-labelledby="hs-basic-heading-two">
          <p class="text-gray-800 dark:text-gray-200 py-6 ">
              <span className="text-3xl  font-sans">Pay in Full Price: $12,000 <br />
              (Volunteer Price: $9,950)* </span><br />
            <span className="text-[20px] mt-4">General Multi-child discount</span> <br />
            2 kids $2000 discount (per fam) <br />
            3 kids $4000 discount (per fam)<br />
            4 kids $6000 discount (per fam)<br /> <br />

            Max multi-child discount cap at $6000 <br /> <br />

            * Price includes discount for payment in full and 40 hours of volunteering over the school season. Monthly and quarterly payment plans are also available as well as multi-student discounts.
 <br /><br />
            <span className="text-[18px] font-medium">** Resource Fee: $500 Per Child</span>
              </p>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Toggle;