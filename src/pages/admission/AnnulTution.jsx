import React from 'react';
import { useState } from 'react';
import Toggle from './Toggle';

const AnnulTution = () => {
   
    return (
       <div className=''>
         <div className='flex justify-between'>
          <div className="flex lg:my-0 lg:w-8/12">
            <div className="text-gray-800 flex items-center mx-8 lg:mx-20 lg:mt-6">
              <div className="lg:10/12">
                <h1 className="text-5xl font-extrabold py-6">
                Annual Tuition
                </h1>
                <p className="text-xl font-light">
                At Liberty Launch Academy, we’re continually refining our approach to ensure the best educational experience while recognizing the financial considerations of our families. We’re excited to share the latest updates to our tuition structure that offers both flexibility and value for our community. Please review the details below and let us know if you have any questions <br /> <br /> <span className='text-xl font-bold'>Financial AID: </span> Liberty Launch Academy offers both Financial Aid and Volunteer Discounts to assist families in making this investment. See Financial Aid section at the bottom of this page or give us a call for more info!
                
                </p>
                <button className="lg:mt-8 bg-red-600 px-10 py-3 mt-5 rounded-full text-bs text-white">
                  Aply for Free
                </button>
                <button className="hover:text-white text-red-500 px-10 py-3 rounded-3xl hover:bg-red-600 border-2 border-red-600 text-bs lg:mt-0 mt-4 lg:ml-3">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          <div className='w-1/2'>
          <Toggle></Toggle>
          </div>
        </div>
        <p className='justify-center text-center lg:w-8/12 mx-96 lg:mt-10 px-36 font-normal text-xl'>NOTE: Multi-Child discounts are calculated based on total number of children currently attending Liberty Launch Academy in any grade.</p>
       </div>
    );
};

export default AnnulTution;