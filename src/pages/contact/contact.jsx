/* eslint-disable react/no-unescaped-entities */
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import "./contact.css";
const ContactPage = () => {
  return (
    <section className="w-10/12 mx-auto mt-24 lg:flex gap-x-10 pb-20">
      {/* left side  */}
      <div className="basis-2/5">
        <h1 className="text-4xl font-bold">Send us a message</h1>
        <h2 className="border border-[#FF4041] w-20 md:w-28 lg:w-20 mt-8 mb-2"></h2>
        <p>
          We look forward to talking to you. Feel free to call/text during
          business hours or send us a message here anytime! Make sure to include
          any details or context that will help us provide you with better
          service.
        </p>
        <button className="mt-10 bg-[#FF4041] px-6 py-2 rounded-full text-white">
          Call us at 509.505.7607
        </button>
        <div className="mt-10">
          <h3 className="text-[#FF4041]">2110 N Molter Rd,</h3>
          <h3 className="text-[#FF4041]">Liberty Lake, WA 99019</h3>
        </div>
        <div className="flex gap-5 py-7">
          <BiLogoFacebook className="h-12 w-12 border-2 border-[#FF4041] hover:bg-[#FF4041] text-[#FF4041] hover:text-white p-2 rounded-full"></BiLogoFacebook>
          <AiFillInstagram className="h-12 w-12 border-2 border-[#FF4041] text-[#FF4041] hover:text-white p-2 rounded-full  hover:bg-[#FF4041]"></AiFillInstagram>
        </div>
      </div>
      {/* right side  */}
      <div className="basis-4/5">
        <h1 className="mb-1">
          Name <span className="text-red-600">(required)</span>
        </h1>
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
        <div className="md:flex justify-between gap-x-5 mt-10">
          <div className="w-full">
            <h2 className="mb-1">
              Phone Number <span className="text-red-600">(required)</span>
            </h2>
            <input
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="w-full">
            <h2 className="mb-1 mt-7 md:mt-0">
              Email <span className="text-red-600">(required)</span>
            </h2>
            <input
              className="py-2 bg-gray-100 rounded focus-border w-full"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="mt-5">
          <h1>Which of these apply?</h1>
          <div className="flex gap-2 mt-4">
            <input type="checkbox" name="" id="" />{" "}
            <span>I'd like to schedule a tour</span>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" name="" id="" />{" "}
            <span>I'd like to schedule a tour</span>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" name="" id="" />{" "}
            <span>I'd like to schedule a tour</span>
          </div>
        </div>
        {/* text area  */}
        <div className="w-full mt-10">
          <h2>
            Send us a message <span className="text-red-600">(required)</span>
          </h2>

          <textarea
            name=""
            id=""
            cols="10"
            rows="5"
            className="py-2 bg-gray-100 rounded focus-border w-full mt-1"
          ></textarea>
          <button className="mt-6 bg-[#FF4041] px-6 py-3 rounded-full text-white">
          Submit
        </button>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
