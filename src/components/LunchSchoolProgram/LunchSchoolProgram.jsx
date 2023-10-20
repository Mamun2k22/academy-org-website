/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import image1 from "../../images/LibertyLaunchAcademy-LunchProgram-Boonli-2048x267 (1).png";
 
import Footer from "./Footer";
import FAQ from "./FAQ";
import { BiSolidUser } from "react-icons/bi";
 

const LunchSchoolProgram = () => {
  return (
    <section>
        <div className="md:w-10/12 lg:w-7/12 mx-auto mt-20">
      <img className="w-[340px] md:w-[500px] mx-auto h-16 mt-16" src={image1} alt="" />
      <div className="mt-20">
        <h1 className="text-center text-3xl font-bold mb-5">
          WELCOME TO BOONLI!
        </h1>
        <p className=" px-10 text-2xl text-gray-600">
          All Start Academy has partnered with BOONLI to provide a secure,
          fast, and easy-to-use online ordering platform that allows you to view
          our menu, order, and pay from your smartphone, tablet, or computer.
        </p>
      </div>
      <div className="border-b-2 my-20"></div>
      <div>
        <h1 className="text-3xl font-bold text-start mb-5 pl-8 lg:pl-0">
          LET’S GET STARTED
        </h1>
        <ul className="text-[19px] list-decimal ml-16 lg:ml-0 mr-3 lg:px-10">
          <li>
            {" "}
            Go to{" "}
            <Link className="text-red-400" to="/">
              https://libertylaunchacademy.boonli.com
            </Link>{" "}
            – (please bookmark this page) or access it on our Parents Menu.
          </li>
          <li>
            {" "}
            <span className="font-bold">Click Create an Account:</span> Password
            is: <span className="font-bold"> LLA1</span>
          </li>
          <li>
            {" "}
            Enter your information to create your account and click{" "}
            <span className="font-bold">Submit</span>
          </li>
          <li>
            {" "}
            Now you will add profiles for those you will be ordering for. Once
            complete, click <span className="font-bold">I’m Done</span>
          </li>
          <li> Sign in to begin ordering!</li>
        </ul>
        <button className="flex gap-x-5 mt-10 bg-[#FF4041] px-6 py-3 rounded-full text-white mx-auto md:mx-10 lg:mx-0">
          Boonli Account Sign Up | Login <BiSolidUser className="h-7 w-7  bg-gray-50 bg-opacity-30 p-[6px] rounded-full"></BiSolidUser>
        </button>
      </div>
      <div className="border-b-2 my-10"></div>
      <div className="px-10 lg:px-0">
        <h1 className="text-2xl">
          We are looking for parents to help with lunch from 11-1pm
        </h1>
        <span className="mt-2">(this does <span className="font-bold italic">not</span> mean everyday!!!)</span>
        <h2 className="my-7">Click below to sign up through sign-up genius.</h2>
        <button className="mb-10 hover:bg-[#FF4041] px-6 py-3 rounded-full hover:text-white border-2 border-black hover:border-none">
          Lunch Volunteer | Sign-up Genius
        </button>
      </div>

      <div className="bg-gray-100  text-lg px-10 lg:px-4">
        <h1 className=" mb-5">
          If you have questions or need help signing up, contact:
        </h1>
        <h2 className="font-bold">Ashley Lunden</h2>
        <h3 className="text-red-400 ">509 280 5767</h3>
        <Link className="text-red-400" to="">
          ashleyl@libertylaunchacademy.org
        </Link>
      </div>
      <div className="border-b-2 my-20"></div>
      <div className="px-10 lg:px-0">
        <h1 className="text-center text-[26px]">FAQ/PROGRAM INFORMATION</h1>
        <h2 className="text-center text-2xl">also available once you are logged in!</h2>
      </div>
     <FAQ></FAQ>
    </div>
     <Footer></Footer>
    </section>
  );
};

export default LunchSchoolProgram;
