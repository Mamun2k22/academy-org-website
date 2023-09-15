/* eslint-disable react/no-unknown-property */
import Article from "../../components/aboutUsComponents/article";
import ParentStories from "../../components/aboutUsComponents/parentStories";
import About from "./About";
import ResourcePart from "./ResourcePart";

const AboutUs = () => {
  return (
    <div Id="about-us">
      <div>
        <About />
        <ResourcePart />
      </div>
      <div className="md:px-18 lg:px-12">
        <ParentStories />
      </div>
      <div className="md:px-18 lg:px-12">
        <Article />
      </div>
    </div>
  );
};

export default AboutUs;
