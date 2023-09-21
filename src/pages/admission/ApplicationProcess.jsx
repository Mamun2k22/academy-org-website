import React from 'react';

const ApplicationProcess = () => {
    return (
        <div>
            <div className='lg:mx-10 text-center mx-4'>
            <h1 className='text-black lg:text-5xl text-4xl text-center font-bold'>Easy Application Process</h1>
            <p className='lg:px-72 lg:text-3xl text-2xl font-serif lg:mt-5 mt-4'>Follow these steps to apply. Feel free to reach out if you have any questions or need any support along the way!</p>
            </div>

            {/* Card Design */}
            <div>
            <div className='flex justify-center items-center lg:mx-32 lg:mt-16 lg:gap-8'>
            
  
            <div class="flex items-center mb-4 lg:gap-3 ">
                <div class="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-red-600 font-semibold lg:px-4 lg:mb-24 ">
                1
                </div>
                <div class="ml-4">
                <h2 class="text-3xl font-sans">Application</h2>
                <p class="text-gray-500 lg:w-11/12">Apply for free by completing your student's online application.</p>
                </div>
            </div>

 
            <div class="flex items-center mb-4 lg:gap-3">
                <div class="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-red-600 font-semibold lg:px-4 lg:mb-24">
                2
                </div>
                <div class="ml-4">
                <h2 class="text-3xl font-sans lg:w-11/12">Financial Aid (Optional)</h2>
                <p class="text-gray-500 lg:w-8/12">Once your application has been reviewed, if applicable, you will be provided a link to apply for financial aid.</p>
                </div>
            </div>


            <div class="flex items-center mb-4 lg:gap-3">
                <div class="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-red-600 font-semibold lg:px-4 lg:mb-24">
                3
                </div>
                <div class="ml-4">
                <h2 class="text-3xl font-sans lg:w-11/12">Family Interview</h2>
                <p class="text-gray-500 lg:w-8/12">Once your application has been accepted, we will reach out to set up a time for a family interview.</p>
                </div>
            </div>

            <div class="flex items-center mb-4 lg:gap-3">
                <div class="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-red-600 font-semibold lg:px-4 lg:mb-24">
                3
                </div>
                <div class="ml-4">
                <h2 class="text-3xl font-sans">Enrollment</h2>
                <p class="text-gray-500 lg:w-8/12">Once the application process is complete, you will receive an enrollment packet to complete.</p>
                </div>
            </div>


            </div>
            <div className='lg:w-10/12 lg:h-0 h-0 border-[1px] border-gray-200 lg:mx-28  lg:mt-36 mb-7 justify-center items-center'>

            </div>
            </div>
            
        </div>
    );
};

export default ApplicationProcess;