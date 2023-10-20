/* eslint-disable react/jsx-no-target-blank */
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import logoc from '../../src/assets/logoc.png'
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-[#1d3767]">
      <div className=" sm:w-1/3 mx-auto space-y-6 text-center py-16">
        <img
          className="mx-auto h-28 w-72"
          src={logoc}
          alt="logo"
        />
        <p className="text-white ">
          2110 N Molter Rd, Liberty Lake, WA 99019 Located at the Meadowwood
          Technology Campus{" "}
        </p>
        <p className="text-white ">Call 509.505.7607 </p>
        <div className="flex space-x-4 w-1/3 mx-auto">
          < Link to={'https://www.instagram.com/allstar_kiddos/'}
            target="_blank"
          >
            <FaFacebookF className="text-white w-12 h-12 p-2 rounded-full hover:border-white  border border-[#4a5f85] hover:cursor-pointer" />
          </Link>
          <Link to={'https://www.instagram.com/allstar_kiddos/'}
            target="_blank"
          >
            <AiOutlineInstagram className="text-white w-12 h-12 p-2 rounded-full border border-[#4a5f85] hover:border-white hover:cursor-pointer" />
          </Link>
        </div>
        <p className="text-white">
          © {year} All Star Academy - K-6 Private School.
        </p>
      </div>
    </div>
  );
};

export default Footer;
