import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about-us">
      <div
        className="bg-cover bg-center h-screen my-2 lg:my-20 relative bg-fixed "
        style={{
          backgroundImage:
            'url("https://i.ibb.co/tBTyQTV/robot-finger-template.webp")',
        }}
      >
        <div className="absolute h-full lg:w-full w-full bg-opacity-80 top-0 bg-[#4465a3]"></div>
        <div>
          <div className="absolute top-0 right-1 flex">
          <div className="basis-4/5 pl-4 lg:pl-20 text-white flex items-center">
  <div>
    <h1 className="text-2xl lg:text-4xl lg:mt-0 mt-20">ABOUT US</h1>
    <h2 className="text-xl lg:text-3xl font-poppins font-bold py-4 lg:py-6">
    Exceptional Students <br />
Remarkable Results

    </h2>
    <p className="w-auto lg:w-9/12 text-sm lg:text-base">
    Here, we nurture students, inspire passionate purpose, and ignite motivation from within. Dedicated to action-centered, experiential learning, our students actively apply their knowledge, setting them apart as standout students and leaders in the community. At All-Star Academy, we're committed to shaping a future where every child not only excels but also find there purpose and makes a lasting impact on the world.
    </p>
    <Link to="/contact-us">
      <button className="bg-red-500 bg-gradient-to-r from-indigo-600 via-blue-700 to-blue-600 hover:from-yellow-600 hover:via-red-600 hover:to-red-600 px-4 lg:px-8 py-2 lg:py-3 mt-4 lg:mt-6 rounded-full text-sm lg:text-base border">
        Call for Tour
      </button>
    </Link>
  </div>
</div>

            <div className="relative">
              <div className="basis-2/5 mt-12 ">
                <img
                  className="h-[500px] w-[700px] pb-5 rounded-md hidden sm:block"
                  src="https://static.wixstatic.com/media/2a89f4_d0a2419764634675a9a625edf4c8096b~mv2.jpeg/v1/crop/x_0,y_439,w_1536,h_1248/fill/w_416,h_338,al_c,q_90,enc_auto/Piper%20and%20Spike_heic.jpeg"
                  alt=""
                />
              </div>
              {/* <img
                className="absolute top-48 -left-36 h-80 w-80"
                src="https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-SchoolLife-010.jpeg"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
