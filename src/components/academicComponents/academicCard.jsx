import book from "../../assets/knowledge.png";
import t from "../../assets/t.png";
import fire from "../../assets/fire.png";
import rocket from "../../assets/rocket.png";
import growth from "../../assets/growth.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const AcademicCard = () => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="mb-4 md:mb-0">
          <div className="relative lg:max-w-lg overflow-hidden bg-cover bg-no-repeat">
            <div className="lg:max-w-lg bg-[#1d3767] border border-[#3d537c] rounded px-6 sm:px-8 py-6 sm:py-8 space-y-3">
              <img className="w-16 h-16" src={book} alt="" />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  3k/kindergarten (ages 4-6)
                </h3>
                <p className="text-white">
                  We lay foundational skills in reading and math, emphasizing a
                  love for learning through playful education and enhancing
                  critical thinking abilities.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#50c878] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60"></div>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <div className="relative lg:max-w-lg overflow-hidden bg-cover bg-no-repeat">
            <div className="lg:max-w-lg bg-[#1d3767] border border-[#3d537c] rounded px-6 sm:px-8 py-6 sm:py-8 space-y-3">
              <img className="w-16 h-16" src={t} alt="" />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Grades 1-2 (ages 6-8)</h3>
                <p className="text-white">
                  Nurturing a love for learning and honing essential skills
                  while introducing students to the community through
                  skills-based reporting.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#24cace] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60"></div>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <div className="relative lg:max-w-lg overflow-hidden bg-cover bg-no-repeat">
            <div className="lg:max-w-lg bg-[#1d3767] border border-[#3d537c] rounded px-6 sm:px-8 py-6 sm:py-8 space-y-3">
              <img className="w-16 h-16" src={fire} alt="" />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  Grades 3-4 (ages 8-10).
                </h3>
                <p className="text-white">
                  Deepening durable skill development, integrating inquiry-based
                  instruction, and fostering self-directed learning to cultivate
                  a lifelong passion for education.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#e29745] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60"></div>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <div className="relative lg:max-w-lg overflow-hidden bg-cover bg-no-repeat">
            <div className="lg:max-w-lg bg-[#1d3767] border border-[#3d537c] rounded px-6 sm:px-8 py-6 sm:py-8 space-y-3">
              <img className="w-16 h-16" src={rocket} alt="" />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  Grades 5-6 (ages 10-12){" "}
                </h3>
                <p className="text-white">
                  Guiding students towards discovering personal interests by
                  recognizing self-identity, engaging deeply with the community,
                  and mastering personal agency in their educational journey.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#f5d547] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60"></div>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <div className="relative lg:max-w-lg overflow-hidden bg-cover bg-no-repeat">
            <div className="lg:max-w-lg bg-[#1d3767] border border-[#3d537c] rounded px-6 sm:px-8 py-6 sm:py-8 space-y-3">
              <img className="w-16 h-16" src={growth} alt="" />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  Home Schooling
                </h3>
                <p className="text-white">
                  Refining specialized skills for future endeavors,
                  demonstrating progressive learning experiences, connecting
                  academics to real-world contexts, and meeting tailored
                  graduation criteria.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#9452ad] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60"></div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-center space-y-4">
            <p
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="2000"
              className="text-white text-xl"
            >
              To learn more or to start the application process click below!
            </p>
            <button className="bg-red-500 bg-gradient-to-r from-red-600 via-red-500 to-yellow-600 hover:from-yellow-600 hover:via-red-600 hover:to-red-600 text-white rounded-full py-2 px-6">
              Application Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCard;
