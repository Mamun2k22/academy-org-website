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
      <div className="space-y-3 sm:w-1/2 px-4 sm:px-0">
        <p className="text:md sm:text-xl text-[#444444]">PARENT STORIES</p>
        <h2 className="text-xl font-bold">
          At Liberty Launch Academy, we cherish the integral role parents play
          in shaping their future.
        </h2>
        <p className="text-md sm:text-xl text-[#444444]">
          Hear directly from the parents who have enrolled students attending
          Liberty Launch Academy. These parents expand on what our mission is
          all about.
        </p>
      </div>
      <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 sm:px-0">
        <div className="rounded-lg overflow-hidden ">
          <YouTube videoId="zxjQTSZ1eKo" opts={opts} ref={videoPlayer} />
          <p className="text-[#a2a2a2] pt-4">SETH HORST – Parent</p>
        </div>
        <div className="rounded-lg overflow-hidden ">
          <YouTube videoId="FZMn9tZW108" opts={opts} ref={videoPlayer} />
          <p className="text-[#a2a2a2] pt-4">SARAH FOBES – Parent</p>
        </div>
        <div className="rounded-lg overflow-hidden ">
          <YouTube videoId="zcQGiQWALwM" opts={opts} ref={videoPlayer} />

          <p className="text-[#a2a2a2] pt-4">SARAH FOBES – Parent</p>
        </div>
      </div>
    </div>
  );
};

export default ParentStories;
