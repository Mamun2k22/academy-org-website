import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import SearchBar from "../components/searchBar";
import { useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [showAfterDropdown, setShowAfterDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  console.log(scrolled)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


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
          className="text-[14px] border-b-[3px] border-transparent hover:border-[#dd3939] transition-all duration-300"
          to="/academics"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ACADEMICS
        </NavLink>

      </li>
      <li>
        <NavLink
          className="text-[14px] border-b-[3px] border-transparent hover:border-[#dd3939] transition-all duration-300"
          to="/about-us"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ABOUT US
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-[14px] border-b-[3px] border-transparent hover:border-[#dd3939] transition-all duration-300"
          to="/our-team"
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
          className="text-[14px] border-b-[3px] border-transparent hover:border-[#dd3939] transition-all duration-300"
          to="/event"
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
        <span className="text-[14px] border-b-[3px] border-transparent hover:border-[#dd3939] transition-all duration-300 cursor-pointer relative">
          PARENTS
        </span>
        {showMoreDropdown && (
          <div className="absolute z-10 bg-white w-52 py-4 shadow-md rounded-md lg:mt-[2px]">
          <ul className="">
            <li>
              <NavLink
                activeClassName="active"
                className="hover:text-[#73C780] text-[14px] px-5 py-3 block text-stone-800 text-left"
                to="/lunch-program"
              >
                School Lunch Program
              </NavLink>
            </li>
    
            <li>
              <NavLink
                activeClassName="active"
                className="hover:text-[#73C780] text-[14px] px-5 block text-stone-800"
                to="/contact-us"
              >
                School Supply List 23-24
              </NavLink>
            </li>
          </ul>
        </div>
        )}
      </li>
      <li>
        <NavLink
          className="text-[14px] border-b-[3px] border-transparent hover:border-[#dd3939] transition-all duration-300"
          to="/contact-us"
          rel="noreferrer"
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
  <a
    className="text-[14px] border-b-[3px] border-transparent hover:border-[#dd3939] transition-all duration-300 relative"
    href="https://www.facebook.com/libertylaunchacademy"
  >
    <img
      className="h-6 w-6 transition-transform transform scale-100 hover:scale-110"
      src="https://cdn-icons-png.flaticon.com/128/3128/3128208.png"
      alt=""
      srcSet=""
    />
  </a>
</li>
<li>
  <a
    className="text-[14px] border-b-[3px] border-transparent hover:border-[#dd3939] transition-all duration-300 relative"
    href="https://www.instagram.com/liberty_launch_academy/"
  >
    <img
      className="h-5 w-5 transition-transform transform scale-100 hover:scale-110"
      src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png"
      alt=""
      srcSet=""
    />
  </a>
</li>

      <li>
        <NavLink
          className="text-[14px] border-b-[3px] border-transparent transition-all duration-300"
          to="/admission"

        >
          <button className=" justify-items-center bg-red-500 lg:text-lg text-white  py-2 px-6 rounded-3xl hover:bg-teal-accent-500">
            Admissions
          </button>
        </NavLink>
      </li>
    </>
  );

  // className="bg-[#fff] sticky top-0 z-50"
  return (
    <div>
      <div className={`${scrolled ? "bg-[#fff] lg:text-black" : "bg-transparent"} ${location.pathname.includes('academics') || location.pathname.includes('about-us') ? 'text-white': 'text-stone-900'} fixed top-0 left-0 right-0  z-10 flex items-center text-white`}>
      <div className="px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18">
        <div className="relative flex items-center h-[85px] gap-10">

          <Link
            to="/"

            className="inline-flex items-center mx-auto sm:mx-0"
          >
            <img className="w-48 h-[65px]" src={"https://allstaracademy.netlify.app/static/media/logo.0d27b2af3063b53fcc5c.webp"} alt="" />
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
                <div className="absolute top-2 lg:right-48 sm:top-2 sm:right-0 lg:left-8">
                  <SearchBar />
                </div>
              </div>
            )}
          </div>
        </div>
      
        <div className="absolute lg:top-4 lg:right-32 hidden sm:block ">
        <SearchBar />
      </div>
      </div>
     
      </div >
    </div>
  );
};

export default Navbar;
