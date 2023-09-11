import AcademicCard from "../../components/academicComponents/academicCard";

const Academics = () => {
  return (
    <div className="py-12">
      <div className="space-y-6">
        <div>
          <h4 className="text-md  text-white">Program Overview</h4>
          <h3 className="text-2xl font-bold text-white">Liberty to Launch</h3>
        </div>
        <div>
          <p className="text-white sm:w-2/3">
            Our curriculum is tailored to maximize learning for each age group,
            fostering a natural and intuitive educational experience. Through
            this approach, our students learn to independently construct their
            life’s rocket, ensuring they are fully prepared to soar into the
            world and thrive.
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
  );
};

export default Academics;
