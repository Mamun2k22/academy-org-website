/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
const About = ()=> {
    return (
      <div>
        <div
          className="bg-cover bg-center h-screen my-20 relative bg-fixed"
          style={{
            backgroundImage: 'url("https://libertylaunchacademy.org/wp-content/uploads/2023/07/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-IG-22-900x604.jpeg")'

          }}
        >
          <div className="absolute h-full w-full bg-opacity-60 top-0 bg-blue-700 "></div>
         <div>
           <div className="absolute top-0 right-1 flex">
            <div className="basis-4/5 pl-20 text-white flex items-center">
              <div>
              <h1 className="text-2xl">ABOUT US</h1>
              <h2 className="text-5xl font-extrabold py-6">Nurturing Leaders,<br />Shaping Success</h2>
              <p className="w-8/12">Liberty Launch Academy is more than a school; it's a catalyst for the trailblazers of tomorrow. Here, we nurture young athletes, inspire budding entrepreneurs, and ignite the passion of innovative thinkers. Dedicated to experiential learning, our students actively apply their knowledge, setting them apart as standout students and leaders in the community. At Liberty Launch, we're committed to shaping a future where every child not only excels but also leads and makes a lasting impact on the world.</p>
              <button className="bg-orange-600 px-6 py-3 mt-5 rounded-full text-sm">Call for Tour</button>
              </div>
            </div>
           <div className="relative">
           <div className="basis-2/5 mt-12 ">
              <img className="h-[560px] w-[700px] pb-5" src="https://libertylaunchacademy.org/wp-content/uploads/2023/07/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Littles-Launch-Academy-06-900x604.jpg" alt="" />
            </div>
            <img className="absolute top-48 -left-40 h-80 w-72" src="https://libertylaunchacademy.org/wp-content/uploads/2023/07/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-grades9-12-01-900x604.jpg" alt="" />
           </div>
             
          </div>
         </div>
        </div>
      </div>
    );
  }
  export default About;