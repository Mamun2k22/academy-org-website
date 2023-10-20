import React from "react";
import women from "../../assets/women.jpg"
import down from "../../assets/down.png"
import International from "../../assets/International.jpg"

const ResourcePart = () => {

  return (
    <div>
      <div className="text-center ">
        <h1 className="font-bold text-blue-600 text-4xl text-[36px] mt-4">
        Some of our Recent Press
        </h1>
        <p className="font-poppins font-medium dark:text-gray-400 lg:px-80 text-[20px] lg:mt-5 mt-4 ">
          We are driving a new era of education and are constantly
          identifying, testing and implementing the best tools, resources, and
          programs to fulfill our vision of excellence, empowering growth
          together!
        </p>
      </div>
 <div className="flex justify-center items-center gap-12 lg:mt-4 mt-2">
 <h2 class="text-red-600 text-lg lg:text-3xl text-[36px] mt-4 text-center hover:animate-pulse transform hover:scale-110 transition-transform font-medium lg:mx-2 mx-6">
    Please Click the Images below to be taken to the article
</h2>
<img className="h-6 w-6 mt-4 border border-red-500 rounded-full px-1 py-1 hidden sm:block" src={down} alt="" srcset="" />
 </div>

      <div className="flex space-x-4  lg:mt-6 px-4 lg:px-8">
    <div className="w-1/2 md:w-1/4 p-2 lg:w-1/2">
      <div className="bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2">
        <a 
         href="https://womeninbusinessmag.com/brandy-simison-of-all-star-academy-on-how-children-can-reach-their-current-potential"
         target="_blank">
        
        <img src={women} className="w-full h-full object-cover border border-blue-500" />
        </a>
        
      </div>
    </div>
    <div className="w-1/2 md:w-1/4 p-2 lg:w-1/2">
      <div className="bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2">
       <a href="https://www.ibtimes.com/brandy-simisons-all-star-academy-breath-fresh-air-education-system-that-our-children-deserve-3678055" target="_blank">
       <img src={International} className="w-full h-full object-cover border border-blue-600 shadow-md" />
       </a>
        
      </div>
    </div>
  </div>
      <div className="border-[1px] border-y-indigo-400 mx-10 mb-8 mt-6"></div>
 

      
    </div>
  );
};

export default ResourcePart;
