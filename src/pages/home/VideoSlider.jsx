
import { Link } from "react-router-dom";
import v from "../../assets/v.mp4";
const VideoSlider = () => {
  return (
    <div className="relative h-screen">
      <div className="overlay">
        <video
          autoPlay
          muted
          className="min-w-full h-screen object-cover absolute z-0"
          loop
        >
          <source src={v} type="video/mp4" />
        </video>
        <div className="flex absolute lg:top-36 mt-10 lg:mt-0">
          <div className="text-left text-white mt-16 lg:w-1/2 w-full px-6 lg:mx-20">
            <h1 className="text-3xl font-bold lg:mt-28 ">
              We Are For The Exceptional
            </h1>
            <p className="mt-4 font-poppins font-medium dark:text-gray-400 text-[19px]">
            Calling a Discouraged, Disinterested, Acting Out, and Just Plain Dreading School students!
            </p>

            <div className="mt-4 space-x-2">
             <Link to="/admission">
             <button className="bg-red-500 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-yellow-600 hover:via-red-600 hover:to-red-600 text-white py-2.5 px-6 rounded-full border  text-[16px]">
      Application Details
    </button>
             </Link>
              <button className="border-2  border-white text-white py-2 px-6 rounded-full hover:bg-red-500">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
