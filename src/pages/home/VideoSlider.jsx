import wd from "../../assets/wd.mp4";
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
          <source src={wd} type="video/mp4" />
        </video>
        <div className="flex absolute lg:top-64">
          <div className="text-left text-white mt-16 lg:w-1/2 w-full px-6 lg:mx-20">
            <h1 className="text-3xl font-bold ">
              We Are For The Exceptional
            </h1>
            <p className="mt-4 text-xl">
              calling all discourage diInterested acting out and just plain dreading school student
            </p>

            <div className="mt-4 space-x-2">
              <button className="bg-red-600 text-white py-2 px-4 rounded-3xl hover:bg-teal-accent-500">
                Application Details
              </button>
              <button className="bg-gray-600 text-white py-2 px-4 rounded-3xl hover:bg-gray-700">
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
