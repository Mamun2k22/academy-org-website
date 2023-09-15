import AboutUs from "../aboutus/abouteus";
import Academics from "../academics/academics";
import OurMissions from "./OurMissions";
import VideoSlider from "./VideoSlider";
export const Home = () => {
  return (
    <div>
      <VideoSlider />
      <OurMissions />
      <div className=" mt-10">
        <AboutUs />
      </div>
      <div className=" mt-10">
        <Academics />
      </div>
    </div>
  );
};
