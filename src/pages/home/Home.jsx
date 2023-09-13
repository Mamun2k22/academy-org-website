import ParentStories from "../../components/aboutUsComponents/parentStories";
import AboutUs from "../aboutus/abouteus";
import Academics from "../academics/academics";
import OurMissions from "./OurMissions";
import VideoNavbar from "./VideoNavbar";
export const Home = () => {
  return (
    <div>
      <VideoNavbar />
      <OurMissions />
      <div className="md:px-18 lg:px-12 mt-10">
        <AboutUs />
      </div>
      <div className="md:px-18 lg:px-12 bg-[#1d3767] mt-10">
        <Academics />
      </div>
    </div>
  );
};
