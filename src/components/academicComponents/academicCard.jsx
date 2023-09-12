import book from "../../assets/knowledge.png";
import t from "../../assets/t.png";
import fire from "../../assets/fire.png";
import rocket from "../../assets/rocket.png";
import growth from "../../assets/growth.png";
const AcademicCard = () => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="mb-4 md:mb-0">
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <div className="lg:max-w-lg bg-[#1d3767] border border-[#3d537c] rounded px-6 sm:px-8 py-6 sm:py-8 space-y-3">
              <img className="w-16 h-16" src={book} alt="" />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  Littles Launch Academy (ages 3-5)
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
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <div className="lg:max-w-lg bg-[#1d3767] border border-[#3d537c] rounded px-6 sm:px-8 py-6 sm:py-8 space-y-3">
              <img className="w-16 h-16" src={t} alt="" />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Grades 1-4</h3>
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
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <div className="lg:max-w-lg bg-[#1d3767] border border-[#3d537c] rounded px-6 sm:px-8 py-6 sm:py-8 space-y-3">
              <img className="w-16 h-16" src={fire} alt="" />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  Grades 5-6.
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
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <div className="lg:max-w-lg bg-[#1d3767] border border-[#3d537c] rounded px-6 sm:px-8 py-6 sm:py-8 space-y-3">
              <img className="w-16 h-16" src={rocket} alt="" />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  Grades 7-8{" "}
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
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <div className="lg:max-w-lg bg-[#1d3767] border border-[#3d537c] rounded px-6 sm:px-8 py-6 sm:py-8 space-y-3">
              <img className="w-16 h-16" src={growth} alt="" />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  Grades 9-12
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
            <p className="text-white text-xl">
              To learn more or to start the application process click below!
            </p>
            <button className="bg-[#ff4041] text-white rounded-full py-2 px-6">
              Application Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCard;