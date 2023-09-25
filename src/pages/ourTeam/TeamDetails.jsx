import React from 'react';
// import right from '../../assets/images/right.png'

const TeamDetails = () => {
    const TeamProfiles = [
        {
          id: 1,
          image:
            "https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Molly-Bauman-500x500.jpg",
          name: "Molly Bauman"
        },
        {
          id: 2,
          image:
            "https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Sarah-Bushnell-500x500.jpg",
          name: "Sarah-Bushnell"
        },
        {
          id: 3,
          image:
            "https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Cammy-C.--500x500.jpg",
          name: "Cammy Cirhan"
        },
        {
          id: 4,
          image:
            "https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Luke-Kjar-500x500.jpg",
          name: "Luke Kjar"
        },
        {
          id: 5,
          image:
            "https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Kenna-Kyler-500x500.jpg",
          name: "Kenna Kyler"
        },
        {
          id: 6,
          image:
            "https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Savannah-McIntyre-500x500.jpg",
          name: "Savannah McIntyre"
        },
        {
          id: 7,
          image:
            "https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Jason-Miller-500x500.jpg",
          name: "Jason Miller"
        },
        {
          id: 8,
          image:
            "https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Amber-Nichols-500x500.jpg",
          name: "Amber Nichols"
        },
        {
          id: 9,
          image:
            "https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Felice-500x500.jpg",
          name: "Felice Orrell"
        },
        {
          id: 10,
          image:
            "https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Damone-500x500.jpg",
          name: "Damone Solomon"
        },
        {
          id: 11,
          image:
            "https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Zayne-500x500.jpg",
            name: "Zayne Starr"
        },
        {
          id: 12,
          image:
            "https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Sophie-Steele-500x500.jpg",
            name: "Sophie Steele"
        },
        {
          id: 13,
          image:
            "https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-DSC04309-copy-500x500.jpg",
            name: "Katie Zachow"
        },
        {
          id: 14,
          image:
            "https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Nicole-Zamora-500x500.jpg",
            name: "Nicole Zamora"
        },
      ];
    return (
        <div className='lg:py-36'>
          <div className='lg:mx- text-center mx-4'>
            <h1 className='text-black lg:text-5xl text-4xl text-center font-bold'>Our Team</h1>
            <p className='lg:px-72 lg:text-3xl text-2xl font-serif lg:mt-5 mt-4'>We handpick those who truly understand our innovative educational model and have a proven history of guiding students to success and leadership</p>
            </div>  

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center lg:mx-4 gap-5 px-16 lg:my-10 ">
            {TeamProfiles?.map((profile) => (
              <div key={profile.id}className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"src={profile.image}/>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                
                    <p className="mb-3 text-lg lg:text-4xl font-bold italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{profile.name}</p>
                  </div>
              </div>
              
            ))}
      </div>  
        </div>
    );
};

export default TeamDetails;




