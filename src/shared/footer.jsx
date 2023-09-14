/* eslint-disable react/jsx-no-target-blank */
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-[#1d3767] ">
      <div className=" sm:w-1/3 mx-auto space-y-6 text-center py-16">
        <img
          className="mx-auto"
          src="https://libertylaunchacademy.org/wp-content/uploads/2023/07/LibertyLaunchAcademy_K-12_PrivateSchool-Idaho-wht3-300x147.png"
          alt="logo"
        />
        <p className="text-white ">
          2110 N Molter Rd, Liberty Lake, WA 99019 Located at the Meadowwood
          Technology Campus{" "}
        </p>
        <p className="text-white ">Call 509.505.7607 </p>
        <div className="flex space-x-4 w-1/3 mx-auto">
          <a
            href="https://www.facebook.com/libertylaunchacademy"
            target="_blank"
          >
            <FaFacebookF className="text-white w-12 h-12 p-2 rounded-full hover:border-white  border border-[#4a5f85] hover:cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/liberty_launch_academy/"
            target="_blank"
          >
            <AiOutlineInstagram className="text-white w-12 h-12 p-2 rounded-full border border-[#4a5f85] hover:border-white hover:cursor-pointer" />
          </a>
        </div>
        <p className="text-white">
          © {year} Liberty Launch Academy - K-12 Private School.
        </p>
      </div>
    </div>
  );
};

export default Footer;
