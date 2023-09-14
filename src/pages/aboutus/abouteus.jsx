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
      <div>
        <ParentStories />
      </div>
      <div>
        <Article />
      </div>
    </div>
  );
};

export default AboutUs;
