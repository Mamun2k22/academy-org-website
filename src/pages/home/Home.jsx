import Academics from "../academics/academics";
import OurMissions from "./OurMissions";
import VideoNavbar from "./VideoNavbar";
export const Home = () => {
  return (
    <div>
      <VideoNavbar />
      <OurMissions />
      <div className="md:px-18 lg:px-12 bg-[#1d3767]">
        <Academics />
      </div>
    </div>
  );
};
