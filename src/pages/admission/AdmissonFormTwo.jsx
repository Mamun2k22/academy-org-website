/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import "../contact/contact";
import { useForm } from "react-hook-form";
import { Country } from "country-state-city";


const selectStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    borderColor: isFocused ? 'none' : '',
    boxShadow: isFocused ? '0 0 0 1px #FF4041' : 'none',
    
  }),
  option: (styles, { isFocused, isSelected, isHovered }) => ({
    ...styles,
    backgroundColor: isSelected ? 'gray' : isHovered ? 'gray' : 'white',
    color: isSelected ? 'white' : isFocused ? 'black' : 'black',
  }),
  backgroundColor:"gray"
};
const AdmissionFormTwo = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const allCountry = Country.getAllCountries();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  
  return (
    <div className="my-20 lg:w-7/12 mx-auto px-10">
      <h1 className="text-3xl lg:text-4xl font-bold text-center">
        Admissions & Tuition
      </h1>
      <form>
        <h1 className="text-2xl lg:text-3xl text-center my-5">
          Fill out the form below.
        </h1>
        <div>
          <h1 className="my-5">Step 2 of 2</h1>
          <div className="w-full h-[22px] rounded-full bg-gray-200 text-center">
            <div className="bg-blue-600 w-full h-[22px] rounded-full">
              <h2 className=" text-right text-white -mt-[5px] px-2"> 100% </h2>
            </div>
          </div>
        </div>
        <div className="border-b">
          <h1 className="text-3xl font-bold py-5">Parent/Guardian Info</h1>
        </div>
        <h2 className="pt-5 pb-2">Name</h2>
        <div className="md:flex justify-between gap-x-5">
          <div className="w-full">
            <input
            {...register("firstName")}
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            />
            <h2 className="my-1">First</h2>
          </div>
          <div className="w-full">
            <input
            {...register("lastName")}
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            />
            <h2 className="my-1">Last</h2>
          </div>
        </div>

        <h2 className="pt-5 pb-2">Email</h2>
        <div className="md:flex justify-between gap-x-5">
          <div className="w-full">
            <input
            {...register("email")}
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            />
            <h2 className="my-1">Enter Email</h2>
          </div>
          <div className="w-full">
            <input
            {...register("confirmEmail")}
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            />
            <h2 className="my-1">Confirm Email</h2>
          </div>
        </div>

        <div className="md:flex   gap-x-5 mt-5">
          <div className="w-full">
            <h2 className="pt-5 pb-2">Phone</h2>

            <input
            {...register("phoneNo")}
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="md:flex   gap-x-5 mt-5">
          <div className="w-full">
            <h2 className="pt-5 pb-2">Address</h2>

            <input
            {...register("address")}
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="md:flex   gap-x-5 mt-5">
          <div className="w-full">
            <h2 className="pt-5 pb-2">Street Address</h2>

            <input
             {...register("streetAddress")}
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <h2 className="pt-5 pb-2">Address Line 2</h2>
        <div className="md:flex justify-between gap-x-5">
          <div className="w-full">
            <input
            {...register("city")}
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            />
            <h2 className="my-1">City</h2>
          </div>
          <div className="w-full">
            <input
             {...register("region")}
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            />
            <h2 className="my-1">State / Province / Region</h2>
          </div>
        </div>

        <div className="md:flex justify-between gap-x-5">
          <div className="w-full">
            <input
                {...register("postalCode")}
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            />
            <h2 className="my-1">ZIP / Postal Code</h2>
          </div>
          <div className="w-full">
            <select
             {...register("country")}
            className="hover:border-none"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              placeholder=""
              styles={selectStyles}
            />
            <h2 className="my-1"> Country</h2>
          </div>
        </div>
        <h2 className="pt-5 pb-2">
          {" "}
          Why are you interested in having your student attend Liberty Launch
          Academy? <span className="text-[#FF4041]">(Required)</span>{" "}
        </h2>
        <div className="md:flex justify-between gap-x-5">
          <div className="w-full">
            <textarea
              className="h-40 py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            ></textarea>
            <div className="flex gap-x-5 mt-10">
              <Link to={'/apply'}>
              <button>Previous</button></Link>
              <button className="bg-[#FF4041] text-white font-medium py-3 px-5 rounded-full">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdmissionFormTwo;