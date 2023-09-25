import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [showAfterDropdown, setShowAfterDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const toggleMoreDropdown = () => {
    setShowMoreDropdown(!showMoreDropdown);
  };
  const toggleAfterDropdown = () => {
    setShowAfterDropdown(!showAfterDropdown);
  };
  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };

  let activeStyle = {
    color: "#73C780",
  };
  const menuItems = (
    <>
      <li
        className="relative"
        onMouseEnter={toggleAboutDropdown}
        onMouseLeave={toggleAboutDropdown}
      >
        <NavLink
          className="hover:text-[#73C780] text-[14px]"
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ACADEMICS
        </NavLink>
        
      </li>
      <li>
        <NavLink
          className="hover:text-[#73C780] text-[14px]"
          to="/academics"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ABOUT US
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-[#73C780] text-[14px]"
          to="/admission"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          OUR TEAM
        </NavLink>
      </li>
      <li
        className="relative"
        onMouseEnter={toggleAfterDropdown}
        onMouseLeave={toggleAfterDropdown}
      >
        <NavLink
          className="hover:text-[#73C780] text-[14px]"
          to="/afterschool"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          EVENTS
        </NavLink>
    
      </li>

   
  
      <li
        className="relative"
        onMouseEnter={toggleMoreDropdown}
        onMouseLeave={toggleMoreDropdown}
      >
        <span className="hover:text-[#73C780] text-[14px] cursor-pointer">
        PARENTS
        </span>
        {showMoreDropdown && (
          <div className="absolute z-10">
            <ul className="bg-white shadow-md rounded-md w-32 text-center py-2">
              <li>
                <NavLink
                  activeClassName="active"
                  className="hover:text-[#73C780] text-[14px]"
                  to="/birthday"
                >
                  BIRTHDAY
                </NavLink>
              </li>
  
              <li>
                <NavLink
                  activeClassName="active"
                  className="hover:text-[#73C780] text-[14px]"
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </li>
           
            </ul>
          </div>
        )}
      </li>
      <li>
        <a
          className="hover:text-[#73C780] text-[14px]"
          href="https://www.6crickets.com/providerDirectory/US/WA/Issaquah/All-Star-Academy-fc79250f8c5b8043/programs/9942-w56b-zb3a/All-Star-Camp!?refer&provider=2439"
          target="_blank"
          rel="noreferrer"
        >
          CONTACT US
        </a>
      </li>
      <li>
        <a
          className="hover:text-[#73C780] text-[14px]"
          href="https://www.6crickets.com/"
        >
          <img className="h-6 w-6" src="https://cdn-icons-png.flaticon.com/128/3128/3128208.png" alt="" srcset="" />
        </a>
      </li>
      <li>
        <a
          className="hover:text-[#73C780] text-[14px]"
          href="https://www.6crickets.com/"
        >
          <img className="h-5 w-5" src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png" alt="" srcset="" />
        </a>
      </li>
      <li>
        <a
          className="hover:text-[#73C780] text-[14px]"
          href="https://www.6crickets.com/"
          
        >
          <button className="bg-red-500 lg:text-lg text-white py-2 px-6 rounded-3xl hover:bg-teal-accent-500">
                Admissions
              </button>
        </a>
      </li>
     
     
    </>
  );
  return (
    <div className="bg-[#fff] sticky top-0 z-50">
      <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-4">
        <div className="relative flex items-center h-[100px] gap-10">
          <Link
            to="/"
            
            className="inline-flex items-center mx-auto sm:mx-0"
          >
            <img className="w-72 h-[96px]" src={"https://libertylaunchacademy.org/wp-content/uploads/2023/07/LibertyLaunchAcademy_K-12_PrivateSchool-Idaho-clr-01.svg"} alt="" />
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {menuItems}
          </ul>
         
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        
                        className="inline-flex items-center mx-auto sm:mx-0"
                      >
                        <img className="w-36 h-[32px]" src={"https://libertylaunchacademy.org/wp-content/uploads/2023/07/LibertyLaunchAcademy_K-12_PrivateSchool-Idaho-clr-01.svg"} alt="" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {menuItems}
                     
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
