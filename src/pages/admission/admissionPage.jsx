import { useState } from "react";

const AdmissionPage = () => {
  const [isChecked, setIsChecked] = useState('')

  const handleOptionChange = (event) => {
    setIsChecked(event.target.value);
  };
  return (
    <div className="py-16 flex justify-center">
      <div className="sm:w-1/2">
        <div className="text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-black">Admissions & Tuition</h2>
          <h4 className="text-xl text-[#444444]">Fill out the form below.
          </h4>
        </div>
        <div className="py-4 space-y-4">
          <p className="text-[#444444]">step 1 of 2</p>

          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-end p-0.5 leading-none rounded-full" style={{ width: "50%" }}> 50%</div>
          </div>

        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-black border-b p-4">Student Info</h2>
          <div className="pt-6">
            <div className="space-y-1">
              <p className="text-[#444444]">Student's Name <span className="text-red-700">(Required)</span></p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <div className="space-y-1">
                  <input className="bg-[#f5f5f5] hover:bg-border focus:outline-red-700 w-full p-2 rounded" type="text" />
                  <p className="text-[#444444]">First</p>
                </div>
                <div className="space-y-1">
                  <input className="bg-[#f5f5f5] hover:bg-border focus:outline-red-700  w-full p-2 rounded" type="text" />
                  <p className="text-[#444444]">Last</p>
                </div>
              </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 pt-4">
              <div>
                <p className="text-[#444444]">Student's Birthday <span className="text-red-700">(Required)</span></p>
                <input className="bg-[#f5f5f5] hover:bg-border focus:outline-red-700  w-full p-2 rounded" type="date" />
              </div>
              <div>
                <p className="text-[#444444] whitespace-nowrap">Student's Current  Grade Level <span className="text-red-700">(Required)</span></p>
                <input className="bg-[#f5f5f5] hover:bg-border focus:outline-red-700  w-full p-2 rounded" type="text" />
              </div>
              <div>
                <p className="text-[#444444]">Gender</p>
                <input className="bg-[#f5f5f5] hover:bg-border focus:outline-red-700  w-full p-2 rounded" type="text" />
              </div>
              <div>
                <p className="text-[#444444]">Learning Disabilities? <span className="text-red-700">(Required)</span></p>
                <div className="flex space-x-2">
                  <input value="yes"
                    checked={isChecked === 'yes'}
                    onChange={handleOptionChange} type="radio" />
                  <p className="text-[#444444]">Yes</p>
                </div>
                <div className="flex space-x-2">
                  <input value="no"
                    checked={isChecked === 'no'}
                    onChange={handleOptionChange} type="radio" />
                  <p className="text-[#444444]">No</p>
                </div>
              </div>
            </div>
            <button className="text-white bg-black rounded-lg px-3 py-1 mt-4">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
