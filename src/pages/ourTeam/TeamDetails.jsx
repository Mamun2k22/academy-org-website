import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import right from '../../assets/images/right.png'

const TeamDetails = () => {
  const [teamMembers, setTeamMembers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()



  const handleTeamMember = async () => {
    const { data } = await axios.get('https://academic-backend.vercel.app/api/v1/teams/get-team-member')
    setTeamMembers(data?.data)
    setIsLoading(false)
  }



  useEffect(() => {
    handleTeamMember()
  }, [])


  const handleNavigate = (id) => {
    navigate(`/team-details/${id}`)
  }

  return (
    <div className='lg:py-36'>
      <div className='lg:mx- text-center mx-4'>
        <h1 className='text-black lg:text-5xl text-4xl text-center font-bold'>Our Team</h1>
        <p className='lg:px-72 lg:text-3xl text-2xl font-serif lg:mt-5 mt-4'>We handpick those who truly understand our innovative educational model and have a proven history of guiding students to success and leadership</p>
      </div>

      {
        isLoading ? <p className='flex justify-center items-center'>Loading...</p> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center lg:mx-4 gap-5 px-16 lg:my-10 ">
          {teamMembers.length > 0 && teamMembers?.map((profile) => (

            <div onClick={() => handleNavigate(profile?.teamMember?._id)} key={profile?.teamMember?._id} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={profile?.teamMember?.image} />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                <p className="mb-3 text-lg lg:text-4xl font-bold italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{profile?.teamMember?.name}</p>
              </div>
            </div>
          ))}
        </div>
      }


    </div>
  );
};

export default TeamDetails;