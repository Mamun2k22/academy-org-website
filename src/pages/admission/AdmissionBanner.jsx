const AdmissionBanner = () => {
    return (
      <div className="">
         <div
          className="bg-cover bg-center h-screen lg:my-20 relative bg-fixed"
          style={{
            backgroundImage:
              'url("https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-SchoolLife-007.jpg")',
          }}
        >
  
          
          <div className="absolute h-full w-full bg-opacity-60 top-0 bg-gray-600 "></div>
          <div>
            <div className="absolute flex">
              <div className="text-white flex items-center mx-6 lg:mx-24 lg:mt-20 lg:w-6/12">
                <div className="">
                  <h1 className="text-2xl mt-12">ADMISSIONS INFO</h1>
                  <h2 className="text-4xl font-extrabold py-6">
                  Join the Liberty Launch Family
                  </h2>
                  <p className="w-11/12 text-2xl">
                  Ready to take the next step? Applying to join Liberty Launch Academy is easy. Plus, we’re here to guide you through the process, including details on financial aid options. Explore how you can also get involved through volunteering opportunities.
                  </p>
                  <button className="bg-red-600 px-10 py-3 mt-5 rounded-full text-bs">
                    Aply for Free
                  </button>
                  <button className="hover:text-white text-white px-10 py-3 rounded-3xl hover:bg-red-600 border-2 border-white text-bs lg:mt-0 mt-4 lg:ml-3">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AdmissionBanner;
  