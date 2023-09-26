import "../contact/contact";

const AdmissionPage = () => {
  return (
    <div className="my-20 lg:w-6/12 mx-auto px-10">
      <h1 className="text-3xl lg:text-4xl font-bold text-center">Admissions & Tuition</h1>
      <form>
        <h1 className="text-2xl lg:text-3xl text-center my-5">Fill out the form below.</h1>
        <div>
          <h1 className="my-5">Step 1 of 2</h1>
          <div className="w-full h-[22px] rounded-full bg-gray-200 text-center">
            <div className="bg-blue-600 w-1/2 h-[22px] rounded-l-full">
              <h2 className=" text-right text-white -mt-[4px]"> 50% </h2>
            </div>
          </div>
        </div>
        <div className="border-b">
          <h1 className="text-3xl font-bold py-5">Student Info</h1>
        </div>
        <h2 className="pt-5 pb-2">
          Student's Name <span className="text-[#FF4041]">(Required)</span>{" "}
        </h2>
        <div className="md:flex justify-between gap-x-5">
          <div className="w-full">
            <input
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            />
            <h2 className="my-1">First</h2>
          </div>
          <div className="w-full">
            <input
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            />
            <h2 className="my-1">Last</h2>
          </div>
        </div>

        <div className="md:flex justify-between gap-x-5 mt-5">
          <div className="w-full">
            <h2 className="pt-5 pb-2">
              Student's Birthday{" "}
              <span className="text-[#FF4041]">(Required)</span>{" "}
            </h2>

            <input
              className="py-2 bg-gray-100 rounded focus-border w-1/2"
              type="date"
              name=""
              id=""
            />
          </div>
          <div className="w-full">
            <h2 className="pt-5 pb-2">
              Student's Current Grade Level{" "}
              <span className="text-[#FF4041]">(Required)</span>{" "}
            </h2>
            <input
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="md:flex justify-between gap-x-5 mt-5">
          <div className="w-full">
            <h2 className="pt-5 pb-2">
            Gender
            </h2>

            <input
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="w-full">
            <h2 className="pt-5 pb-2">
            Learning Disabilities? 
              <span className="text-[#FF4041]">(Required)</span>{" "}
            </h2>
            <div className="block">
            <input
              
              type="radio"
              name=""
              id=""
            />
            <br />
            <input
              type="radio"
              name=""
              id=""
            />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdmissionPage;