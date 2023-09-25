import React from 'react';
// import { useState } from 'react';

const TeamDetailsPage = () => {
    // const [profileData, SetProfileData] = useState([]);
    // useEffect(() => {
    //   fetch("https://academic-backend.vercel.app/")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       SetProfileData(data);
    //     });
    // }, []);

    return (
        <div className="flex gap-0">
      {/* Column 1: Title and Description */}
      <div className="w-1/2 p-4 lg:w-6/12 lg:px-36 text-left bg-gray-50 lg:py-28">
        <h2 className="text-black lg:text-5xl text-4xl font-bold ">Molly Bauman</h2>
        <p className="mt-2 lg:text-xl text-lg font-serif">Personal Motto: I don't want to live an easy life, I want to live a meaningful life. <br /> <br />
    Molly is going into her second year teaching at Liberty Launch Academy. She is most excited for the curiosity and energy of the kids! She is also excited to build community, connect with families, and continue challenging herself to push the boundaries of what education can look like. Something Molly would like to learn is how to hunt, forage, and grow/raise my own food. There is something powerful about being connected to the land, the environment, and the foods we nourish our bodies with. One person who can always make her laugh is Johnny, her 5 year old nephew.</p>
      </div>

      {/* Column 2: Image */}
      <div className="w-1/2 overflow-hidden bg-cover bg-no-repeat">
        <img
          src="https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Molly-Bauman-500x500.jpg"
          alt="Image Description"
          className="w-full h-full transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
    </div>
    );
};

export default TeamDetailsPage;