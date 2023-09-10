import React, { useState } from 'react';
import logo from '../../src/assets/logo.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import wd from '../assets/wd.mp4';
import { Autoplay } from 'swiper';

const VideoNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relativ">
      <video
        className="min-w-full min-h-screen object-cover fixed z-0"
        autoPlay
        muted
        loop
      >
        <source src={wd} type="video/mp4" />
   
      </video>

        <nav className="mx-auto max-w-full md:max-w-full lg:max-w-screen-xl md:px-18 lg:px-12 relative z-10 flex items-center justify-between px-4 py-4">
        <div className="text-white">
          <h1 className="text-3xl font-bold">
            <img className="h-8 w-36 mr-5" src={logo} alt="Your Logo" />
          </h1>
        </div>
        <ul className="hidden lg:flex space-x-8 text-white">
          <li>
            <a
              href="/"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              ACADEMICS
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              OUR TEAM
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              EVENTS
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              PARENTS
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              CONTACT US
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              ADMISSION
            </a>
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
                      <a
                        href="/"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        ACADEMICS
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        ABOUT US
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        OUR TEAM
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        EVENTS
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        PARENTS
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        CONTACT US
                      </a>
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
    </div>
  );
};

export default VideoNavbar;
