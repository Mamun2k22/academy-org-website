/* eslint-disable react/no-unknown-property */
import Article from "../../components/aboutUsComponents/article";
import ParentStories from "../../components/aboutUsComponents/parentStories";

const AboutUs = () => {
  return (
    <div Id="about-us">
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
