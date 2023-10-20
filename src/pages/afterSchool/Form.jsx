import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [schedule, setSchedule] = useState({
    monday: false,
    tuesday: false,
    wednesdaymorning: false,
    wednesdayevening: false,
    thursday: false,
    fridaymorning: false,
    fridayevening: false,
    untilafter: false,
    untilbefor: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleLanguageChange = (event) => {
    const { name, checked } = event.target;
    setSchedule({ ...schedule, [name]: checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      phone,
      schedule: schedule,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border rounded-lg">
      <h2 className="my-5 text-[26px] text-[#4EBA59]">Interested? Fill Out This Form!</h2>
      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-1/2 md:pr-2 mb-6 md:mb-0">
          <label
            className="block mb-2 font-bold text-[#4EBA59]"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg text-[#4EBA59] focus:outline-none focus:shadow-outline"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-2">
          <label
            className="block mb-2 font-bold text-[#4EBA59]"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg text-[#4EBA59] focus:outline-none focus:shadow-outline"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold text-[#4EBA59]" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg text-[#4EBA59] focus:outline-none focus:shadow-outline"
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold text-[#4EBA59]" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg text-[#4EBA59] focus:outline-none focus:shadow-outline"
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          value={phone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-6">
        <p className="block mb-2 font-bold text-[#4EBA59]">
          Select the Days You're Interested In:
        </p>
        <div className="">
          <div className="">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                name="monday"
                checked={schedule.monday}
                onChange={handleLanguageChange}
              />
              <span className="ml-2 text-[#4EBA59]">Mondays 3:45-5:15pm</span>
            </label>
          </div>
          <div className="">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                name="tuesday"
                checked={schedule.tuesday}
                onChange={handleLanguageChange}
              />
              <span className="ml-2 text-[#4EBA59]">Tuesdays 3:45-5:15pm</span>
            </label>
          </div>
          <div className="">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                name="wednesdaymorning"
                checked={schedule.wednesdaymorning}
                onChange={handleLanguageChange}
              />
              <span className="ml-2 text-[#4EBA59]">Wednesdays 1:45-3:30pm</span>
            </label>
          </div>
          <div className="">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                name="wednesdayevening"
                checked={schedule.wednesdayevening}
                onChange={handleLanguageChange}
              />
              <span className="ml-2 text-[#4EBA59]">Wednesdays 3:45-5:15pm</span>
            </label>
          </div>
          <div className="">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                name="thursday"
                checked={schedule.thursday}
                onChange={handleLanguageChange}
              />
              <span className="ml-2 text-[#4EBA59]">Thursdays 3:45-5:15pm</span>
            </label>
          </div>
          <div className="">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                name="fridaymorning"
                checked={schedule.fridaymorning}
                onChange={handleLanguageChange}
              />
              <span className="ml-2 text-[#4EBA59]">Fridays 1:45-3:30pm</span>
            </label>
          </div>
          <div className="">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                name="fridayevening"
                checked={schedule.fridayevening}
                onChange={handleLanguageChange}
              />
              <span className="ml-2 text-[#4EBA59]">Fridays 3:45-5:15pm</span>
            </label>
          </div>
          <div className="">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                name="untilafter"
                checked={schedule.untilafter}
                onChange={handleLanguageChange}
              />
              <span className="ml-2 text-[#4EBA59]">
                I need care until 5:30pm
              </span>
            </label>
          </div>
          <div className="">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                name="untilbefor"
                checked={schedule.untilbefor}
                onChange={handleLanguageChange}
              />
              <span className="ml-2 text-[#4EBA59]">I need care until 6pm</span>
            </label>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <button
          type="submit"
          className="px-4 py-2 bg-[#4EBA59] text-white font-semibold rounded hover:bg-[#05b616]"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
