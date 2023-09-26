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
    const teamProfiles = [
      {
        id: 1,
      img:"https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Molly4.jpg",
      details: "Personal Motto: I don't want to live an easy life, I want to live a meaningful life.Molly is going into her second year teaching at Liberty Launch Academy. She is most excited for the curiosity and energy of the kids! She is also excited to build community, connect with families, and continue challenging herself to push the boundaries of what education can look like. Something Molly would like to learn is how to hunt, forage, and grow/raise my own food. There is something powerful about being connected to the land, the environment, and the foods we nourish our bodies with. One person who can always make her laugh is Johnny, her 5 year old nephew."
  
      },
      {
        id: 2,
      img:"https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Sarah-Bushnell.jpg",
      details: "Family Motto: ADVENTURE! Sarah is excited to be starting the school year at Liberty Launch Academy. She is a morning person and is really excited to greet everyone “Good Morning!” as the school year begins. Her current passion project is regenerative farming and creating sustainable and attainable foods for the community. She would love to learn how to paint watercolors. Sarah loves to laugh at dad jokes."
  
      },
      {
        id: 3,
      img:"https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-cammy2.jpg",
      details: "Cammy is in her second year at Liberty Launch Academy, She is excited to work with a team of teachers to create exciting and inviting experiences for students. So it fits that her current passion project is to create an amazing elementary program at LLA. When she has time Cammy would like to learn another language. Just about anything can make Cammy laugh, because laughing is her favorite!"
  
      },
      {
        id: 4,
      img:"https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Jason-1.jpg",
      details: "Bio Coming Soon"
  
      },
      {
        id: 5,
      img:"https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Kenna2.jpg",
      details: "Family Motto:At the end of the day, always be best friends againKenna is in her first year teaching at Liberty Launch Academy. She is most excited about getting to know all her students and helping mold them into the great humans that they are! Something that Kenna would like to learn someday is how to crochet or knit a blanket and the thing that always makes her laugh is her husband. Her current passion project is making a cookbook of all the recipes that she and her husband love."
  
      },
      {
        id: 6,
      img:"https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Savanna-3.jpg",
      details: "Family Motto: It is what it is Savannah is in her first year of teaching at Liberty Launch Academy. She is most excited about starting a new position at a school that cares about teaching through creativity and having a hands-on approach. She is also really looking forward to being in a space where children are excited to come to play and learn. Something that Savannah has always wanted to learn is how to play the guitar. She loves a good DIY project that can transform a space. Her current project is creating a little backyard oasis that her family can enjoy on summer nights spent at home. The thing that always makes her laugh is spending good quality time with family and friends, telling stories and being silly."
  
      },
      {
        id: 7,
      img:"https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Jason-1.jpg",
      details: "Family Motto: There are always options-never a dead end. March Forth!Jason is starting his second year at Liberty Launch Academy. He is excited about the opportunity to ignite “wonder” in students- in both curiosity and amazement! To create the space for students to own their learning and see the real world application. To be present while kids ground themselves in healthy culture, habits and mindset for the greatest wellbeing. He is also excited to work with a dedicated and passionate team of educators! Something Jason himself would like to learn is more languages, how to tango dance, a musical instrument and how to be more self-sustainable/reliant. His passion projects are traveling, spending time with family and close friends and being in nature. The one thing that always makes him laugh is his students!"
  
      },
      {
        id: 8,
      img:"https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Amber-Nichols.jpg",
      details: "Family Motto: You can’t burn a candle at both ends Amber is beginning her first year at Liberty Launch Academy. She is most excited to really be connected with the real world in our curriculum in our learning. She has always wanted to learn how to do the west coast swing and salsa dancing. If you want to get her laughing the thing that will do the trick is funny cat and dog videos."
  
      },
      {
        id: 9,
      img:"https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Felice2.jpg",
      details: "Family Motto: Your character knows when you cut corners Felice is in her first year of teaching at Liberty Launch Academy. The thing that she looks forward to most is the opportunity to learn from other people. One day Felice would like to learn woodworking. Her current passion project is her home and the thing that makes her laugh is her kids."
  
      },
      {
        id: 10,
      img:"https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Damone.jpg",
      details: "Family Motto: We listen, We learn, We Lead and always have God, Grace, and Gratitude. Damone is starting his second year with Liberty Launch Academy. He is looking forward to being able to impact and inspire more lives…Educate, Motivate, Elevate. His current Passion project is to learn how he can best impact and grow every aspect of his family and loved ones. Damone likes to Laugh so anything really works- Comedy movies, shows, his family. One day Damone would like to learn how to speak fluent Spanish."
  
      },
      {
        id: 11,
      img:"https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Zayne2.jpg",
      details: "Family Motto: Live for the experiences. This is Zayne’s second year teaching at Liberty Launch Academy. The thing Zayne is most excited for this year is off campus experiences and science experiments. A skill he has always wanted to learn is how to land a kickflip. One thing that can always make him laugh is a witty pun or good quip. His current passion project is raising his Japanese language skill to conversational fluency."
  
      },
      {
        id: 12,
      img:"https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Sophie4.jpg",
      details: "Family Motto: Remember who you are Sophie is starting her first year teaching at Liberty Launch Academy. She is excited to make learning fun and unique for 4th graders. Something Sophie has always wanted to learn is Pottery. Her current passion project is learning the sport of pickleball. And being silly with friends is a definite way to make her laugh."
  
      },
      {
        id: 13,
      img:"https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Katie.jpg",
      details: "Family Motto: Live your life Katie is a first year teacher at Liberty Launch Academy. She is most excited to build relationships with both students and Staff. One thing that she has always wanted to learn is the game of Tennis. Her current passion project is to expand her outdoor living space. The people who make Katie laugh are her kids, friends and people who tell “dad jokes”."
  
      },
      {
        id: 14,
      img:"https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Team-Headshots-Nicole-Zamora.jpg",
      details: "Family Motto: We are a team Nichole is a first year teacher at Liberty Launch Academy. She is excited to be a part of a brand new school and to help build the school community and climate as well as the academic and professional success for the students and staff. A new skill Nichole is working on this summer is learning how to drive a boat. She is also learning a new sport in the game of golf, which will allow her to play a sport with both her husband and son. A passion project that makes her happy is learning to decorate cookies and cupcakes. “I may not be the best at baking and decorating, but it makes me feel good and it allows me to tap into my unique artistic skills”. The thing that makes her laugh most is her family and funny memes."
  
      },
    
    ]

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