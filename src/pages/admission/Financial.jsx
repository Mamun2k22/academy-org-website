import React from 'react';
import { Link } from 'react-router-dom';

const Financial = () => {
    return (
        <div className='lg:mt-10 mt-14'>

        <div
        className="bg-cover bg-center h-screen lg:my-0 relative bg-fixed"
        style={{
          backgroundImage:
            'url("https://libertylaunchacademy.org/wp-content/uploads/2023/07/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-IG-23.jpeg")',
            height: "520px",
          
        }}
      >
        
        <div className="absolute h-full w-full bg-opacity-80 top-0 bg-gray-950 "></div>
        
        <div>
          <div className="absolute top-0 right-1 flex lg:mx-20">
          <div className="relative">
              <div className=" mt-12 ">
                <img
                  className="h-[400px] w-[800px] lg:mt-6"
                  src="https://libertylaunchacademy.org/wp-content/uploads/2023/07/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-IG-04.jpeg"
                  alt=""
                />
              </div>
            
            </div>
            <div className="text-white flex items-center lg:mx-10 lg:mt-2 lg:w-10/12">
              <div className="">
              <h1 className="text-5xl font-extrabold py-6">
              Financial Aid
                </h1>
                <p className="lg:w-full text-lg">
                At All Start Academy, we recognize the importance of making our outstanding educational experiences accessible to all families, regardless of their financial circumstances. Our Financial Assistance program is designed to ease the tuition burden, encompassing not just need-based financial aid but also discounts to acknowledge parent support and volunteer contributions to our community.
                To be considered for our financial aid or volunteer discounts, complete our application and we will reach out to talk to you more about out payment options and financial assistance
                </p>

                <div className="flex flex-col lg:flex-row mt-4 lg:space-x-3">
                <Link to='/apply'>
                  <button className="bg-red-500 px-8 py-3 rounded-full text-base lg:text-lg">
                    Start Application Process
                  </button>
                </Link>
                <button className="hover:text-white text-white px-8 py-3 rounded-full hover:bg-red-600 border-2 border-white text-base lg:text-lg lg:mt-0 mt-4">
                  Contact Us
                </button>
               </div>
               
              </div>
            </div>
       
          </div>
        </div>
       
        </div>
        </div>
    );
};

export default Financial;