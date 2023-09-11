import { useState } from "react";
import logo from "../../assets/logo.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import wd from "../../assets/wd.mp4";
import { Link } from "react-router-dom";

const VideoNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relativ">
      
      <div className="overlay">
      <video
        className="min-w-full min-h-screen object-cover fixed z-0"
        autoPlay
        muted
        loop
      >
        <source src={wd} type="video/mp4" />
      </video>

      <div className="flex absolute lg:top-64">

      <div className="text-left text-white mt-16 lg:w-1/2 w-full px-6 lg:mx-20">

        <h1 className="text-3xl font-bold ">Disrupting Education for Good</h1>
        <p className="mt-4 text-xl">Calling youth athletes, entrepreneurs, and innovators! Liberty Launch Academy is a forge for the next generation of principled leaders who will rise above the status quo, thrive, and make the difference that the world needs.</p>
        
        <div className="mt-4 space-x-2">
          <button className="bg-red-600 text-white py-2 px-4 rounded-3xl hover:bg-teal-accent-500">
            Apply Now
          </button>
          <button className="bg-gray-600 text-white py-2 px-4 rounded-3xl hover:bg-gray-700">
            Learn More
          </button>
        </div>
      </div>

      </div>
      </div>

     {/* Navbar */}
      <nav className="mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-12 relative z-10 flex items-center justify-between px-4 py-4">
        <div className="text-white">
          <h1 className="text-3xl font-bold">
            <img className="h-8 w-36 mr-5" src={logo} alt="Your Logo" />
          </h1>
        </div>
        <ul className="hidden lg:flex space-x-8 text-white">
          <li>
            <Link
              to="/academics"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              ACADEMICS
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to="/our-team"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              OUR TEAM
            </Link>
          </li>
          <li>
            <Link
              to="/event"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              EVENTS
            </Link>
          </li>
          <li>
            <Link
              to="/lunch-program"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              PARENTS
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              CONTACT US
            </Link>
          </li>
          <li>
            <a
              href="/https://www.facebook.com/libertylaunchacademy"
              target="_blank"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="/https://reactrouter.com/en/main/start/tutorial"
              target="_blank"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <Link
              to="/admission"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              ADMISSION
            </Link>
          </li>
          <li>
            <a
              href="/"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              <i className="fas fa-search"></i>
            </a>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
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
            <div className="absolute top-0 right-0 w-full">
              <div className="flex p-5 bg-white border rounded shadow-sm">
                <div>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/academics"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        ACADEMICS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about-us"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        ABOUT US
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/our-team"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        OUR TEAM
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/event"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        EVENTS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lunch-program"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        PARENTS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact-us"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        CONTACT US
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 ml-52 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={closeMenu}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4s0.4,0.4,0.7,0.4s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
   {/* Description Section */}

  
   
   
   

    </div>
  );
};

export default VideoNavbar;
