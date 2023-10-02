import AcademicCard from "../../components/academicComponents/academicCard";
import SocialConnect from "../../components/academicComponents/socialConnect";

const Academics = () => {
  return (
    <div className="lg:my-20">
      <div id="academics" className="py-12 bg-[#1d3767] px-4 md:px-18 lg:px-12 ">
        <div className="space-y-6 ">
          <div>
            <h4
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="2000"
              className="text-md  text-white"
            >
              Program Overview
            </h4>
            <h3
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="2000"
              className="text-2xl font-bold text-white"
            >
              For the exceptional
            </h3>
          </div>
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
            <p className="text-white sm:w-2/3">
              Our curriculum is tailored to the individual child, fostering a natural and intuitive educational experience.
              Through this approach, our students learn to independently
              construct their life’s rocket, ensuring they are fully prepared to
              find there place in the world and thrive.
            </p>
          </div>
        </div>
        <div>
          <AcademicCard />
        </div>
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-white">ATHLETICS</h3>
          <p className="text-white ">
            Contact us to learn more about our sports program and opportunities
            for your child.
          </p>
          <button className="text-white border border-white rounded-full px-4 py-1">
            Athletics info
          </button>
        </div>
      </div>
      <div className="md:px-18 lg:px-12">
        <SocialConnect />
      </div>
    </div>
  );
};

export default Academics;
