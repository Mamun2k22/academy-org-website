import React from 'react';
import { useState } from 'react';
import Toggle from './Toggle';

const AnnulTution = () => {
   
    return (
      <div className="">
  <div className="flex flex-col lg:flex-row justify-between">
    <div className="flex lg:w-8/12">
      <div className="text-gray-800 flex items-center mx-4 lg:mx-20 lg:mt-6">
        <div className="lg:10/12">
          <h1 className="text-3xl lg:text-5xl font-extrabold py-4 lg:py-6">
            Annual Tuition
          </h1>
          <p className="text-lg lg:text-xl font-light">
            At All Start Academy, we’re continually refining our approach to ensure the best educational experience while recognizing the financial considerations of our families. We’re excited to share the latest updates to our tuition structure that offers both flexibility and value for our community. Please review the details below and let us know if you have any questions <br /> <br /> <span className='text-lg lg:text-xl font-bold'>Financial AID: </span> All Start Academy offers both Financial Aid and Volunteer Discounts to assist families in making this investment. See Financial Aid section at the bottom of this page or give us a call for more info!
          </p>
          <button className="lg:mt-4 bg-red-600 px-6 lg:px-10 py-2 lg:py-3 mt-3 lg:mt-5 rounded-full text-lg lg:text-base text-white">
            Apply for Free
          </button>
          <button className="hover:text-white text-red-500 px-6 lg:px-10 py-2 lg:py-3 rounded-3xl hover:bg-red-600 border-2 border-red-600 text-lg lg:text-base lg:mt-0 mt-3 lg:ml-3 ml-6">
            Contact Us
          </button>
        </div>
      </div>
    </div>

    <div className='w-full lg:w-1/2'>
      <Toggle></Toggle>
    </div>
  </div>
  <p className='justify-center text-center lg:w-8/12 mx-4 lg:mx-96 lg:mt-4 px-2 lg:px-36 font-normal text-lg lg:text-xl mt-4'>NOTE: Multi-Child discounts are calculated based on the total number of children currently attending All Start Academy in any grade.</p>
</div>

    );
};

export default AnnulTution;