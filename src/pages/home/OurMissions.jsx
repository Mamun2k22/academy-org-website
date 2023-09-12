import React, { useState } from 'react';

const OurMissions = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const cardDetails = [
        {
            id: 101,
            title: "Innovation",
            imageUrl: "https://images.pexels.com/photos/6479591/pexels-photo-6479591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            details:"Embracing creativity and new ideas fosters an environment where students flourish and learning excels.",
            
        },
        {
            id: 102,
            title: "Character Development",
            imageUrl: "https://images.pexels.com/photos/6479591/pexels-photo-6479591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            details:
                "Proactively helping kids to see that it is not just about what they want to do, but who they are that can make the difference!",
            
        },
        {
            id: 103,
            title: "Athletics ",
            imageUrl: "https://images.pexels.com/photos/12705633/pexels-photo-12705633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            details:
                "We engage with clubs such as lacrosse, rugby, wrestling, soccer, and more!",
           

        },
        {
            id: 104,
            title: "Project Based Learning",
            imageUrl: "https://images.pexels.com/photos/735249/pexels-photo-735249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            details:
                "Spark curiosity and hold students accountable to apply the knowledge that they learn with empathy and collaboration."
        },
    ];

    return (
        <div className='lg:my-12'>
            <div className='text-center '>
                <h1 className="font-sans text-black text-xl text-[28px] mt-4">OUR MISSION</h1>
                <h1 className="text-bold font-bold text-black lg:text-4xl text-3xl  lg:px-64 mx-5 lg:mt-5 mt-4">Human Thriving Through Experiential Learning and Development of the Whole Child</h1>
                <p className='font-sans text-black lg:px-72 text-[24px] lg:mt-5 mx-10 mt-4 '>Liberty Launch Academy offers a compelling alternative to public education, focusing on experiential learning, whole child development, and preparing principled leaders for the future.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:my-16 ml-5 mt-10 lg:gap-0 gap-6">
                        {cardDetails?.map((card) => (
                            <div
                                key={card.id}
                                className="relative w-11/12 h-[450px] overflow-hidden shadow-lg"
                                onMouseEnter={() => setHoveredCard(card.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-top"
                                    style={{ backgroundImage: `url(${card.imageUrl})` }}
                                />
                                <div
                                    className={`absolute inset-x-0 bottom-0 bg-[#164d8c] text-white ${hoveredCard === card.id
                                        ? "h-56 opacity-100"
                                        : "h-44 opacity-100"
                                        } transition-all duration-700 ease-in-out`}
                                >
                                    <div className="h-full flex flex-col justify-start items-start px-4">
                                        <h3 className="text-lg font-semibold divider font-serif">{card.title}</h3>
                                        <h4 className="text-right font-serif">{card.by}</h4>

                                        {hoveredCard === card.id && (
                                            <ul className="font-thin">
                                                <li>
                                                    {card.details}

                                                </li>
                                                
                                     
                                            </ul>
                                        )}
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
            </div>

            <div className='justify-center'>
                <h1 className="text-black font-sans lg:px-72 w-11/12 lg:mx-0 text-[27px] text-center mx-4 mt-8">By providing a nurturing, values-driven environment with individualized attention, we aim to empower your child to thrive and succeed in all aspects of life.</h1>
                
            <div className="flex flex-col lg:justify-center items-center sm:flex-row sm:space-x-2 mt-6 gap-6">
              <button className="bg-red-600 text-white py-2 px-4 rounded-3xl hover:bg-teal-accent-500">
                View Application Process
              </button>
              <button className=" hover:text-white text-red-600 py-2 px-4 rounded-3xl hover:bg-red-600 border-2 border-red-400">
                Contact us for more info
              </button>
            </div>
            </div>
        </div>
    );
};

export default OurMissions;