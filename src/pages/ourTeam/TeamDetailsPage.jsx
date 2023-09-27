import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useState } from 'react';

const TeamDetailsPage = () => {
  const { id } = useParams()
  const [profileData, SetProfileData] = useState({});
  console.log("profile:", profileData)

  const handleTeamMember = async () => {
    const { data } = await axios.get(`https://academic-backend.vercel.app/api/v1/teams/get-team-member/${id}`)
    SetProfileData(data?.data)
  }

  useEffect(() => {
    handleTeamMember()
  }, [])

  return (
    <div className="flex gap-0">
      {/* Column 1: Title and Description */}
      <div className="w-1/2 p-4 lg:w-6/12 lg:px-36 text-left bg-gray-50 lg:py-28">
        <h2 className="text-black lg:text-5xl text-4xl font-bold ">{profileData?.teamMember?.name}</h2>
        <p className="mt-2 lg:text-xl text-lg font-serif">{profileData?.teamMember?.bio}</p>
      </div>

      {/* Column 2: Image */}
      <div className="w-1/2 overflow-hidden bg-cover bg-no-repeat">
        <img
          src={profileData?.teamMember?.image}
          alt="Image Description"
          className="w-full h-full transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
    </div>
  );
};

export default TeamDetailsPage;