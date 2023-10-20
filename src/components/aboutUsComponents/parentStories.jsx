import { useRef } from "react";
import YouTube from "react-youtube";

const ParentStories = () => {
  const videoPlayer = useRef(null);

  const opts = {
    height: "300",
    width: "400",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="border-b pb-4">
      <div className="space-y-3 sm:w-1/2 lg:w-full px-4 sm:px-0 text-center">
        <p className="font-bold text-blue-600 text-4xl text-[36px] mt-4 ">Testimonials</p>
        <h2 className="text-xl font-semibold text-stone-700">
          At All Star Academy, we cherish the integral role parents play
          in shaping their future.
        </h2>
        <p className="text-md sm:text-xl text-[#444444]  lg:px-52 px-2 text-left lg:text-center">
          Hear directly from the parents who have enrolled students attending
          All Start Academy. These parents expand on what our mission is
          all about.
        </p>
      </div>
      <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 sm:px-0">
        <div className="rounded-lg overflow-hidden ">
          <YouTube videoId="9PzOOxPLD7Y" opts={opts} ref={videoPlayer} />
          <p className="text-[#a2a2a2] pt-4">Calvin & Jackie</p>
        </div>
        <div className="rounded-lg overflow-hidden ">
          <YouTube videoId="17hGSeEqE40" opts={opts} ref={videoPlayer} />
          <p className="text-[#a2a2a2] pt-4">Niki </p>
        </div>
        <div className="rounded-lg overflow-hidden ">
          <YouTube videoId="xLt2-7kwSgU" opts={opts} ref={videoPlayer} />

          <p className="text-[#a2a2a2] pt-4">Olga</p>
        </div>
      </div>
    </div>
  );
};

export default ParentStories;
