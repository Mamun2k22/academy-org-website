import React from 'react';

const ResourcePart = () => {
    const cardDetails = [
        {
            id: 101,
            imageUrl: "https://images.pexels.com/photos/6479591/pexels-photo-6479591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
        {
            id: 102,
            imageUrl: "https://images.pexels.com/photos/6479591/pexels-photo-6479591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        
            
        },
        {
            id: 103,
            imageUrl: "https://images.pexels.com/photos/12705633/pexels-photo-12705633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           
        },
        {
            id: 104,
            imageUrl: "https://images.pexels.com/photos/735249/pexels-photo-735249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            
        },
    ];
    return (
        <div>
             <div className='text-center '>
                <h1 className="font-bold text-black text-4xl text-[36px] mt-4">Resource Partners</h1>
                <p className='font-normal text-black lg:px-72 text-[24px] lg:mt-5 mx-10 mt-4 '>We are pioneering the future of education and are constantly identifying, testing and implementing the best tools, resources, and programs to fulfill our vision of excellence, empowering growth together!</p>
            </div>
            
        </div>
    );
};

export default ResourcePart;