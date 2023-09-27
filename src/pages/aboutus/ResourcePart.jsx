import React from "react";

const ResourcePart = () => {
  const resourceData = [
    {
      id: 101,
      imageUrl:
        "https://libertylaunchacademy.org/wp-content/uploads/2023/07/Liberty_Launch_Academy_Private_Education_Liberty_Lake_Washington_Partner_Resources_6.webp",
    },
    {
      id: 102,
      imageUrl:
        "https://libertylaunchacademy.org/wp-content/uploads/2023/07/Liberty_Launch_Academy_Private_Education_Liberty_Lake_Washington_Partner_Resources_1.webp",
    },
    {
      id: 103,
      imageUrl:
        "https://libertylaunchacademy.org/wp-content/uploads/2023/07/Liberty_Launch_Academy_Private_Education_Liberty_Lake_Washington_Partner_Resources_12.webp",
    },
    {
      id: 104,
      imageUrl:
        "https://libertylaunchacademy.org/wp-content/uploads/2023/07/Liberty_Launch_Academy_Private_Education_Liberty_Lake_Washington_Partner_Resources_8.webp",
    },
    {
      id: 105,
      imageUrl:
        "https://libertylaunchacademy.org/wp-content/uploads/2023/07/Liberty_Launch_Academy_Private_Education_Liberty_Lake_Washington_Partner_Resources_4.webp",
    },
    {
      id: 106,
      imageUrl:
        "https://libertylaunchacademy.org/wp-content/uploads/2023/07/Liberty_Launch_Academy_Private_Education_Liberty_Lake_Washington_Partner_Resources_11.webp",
    },
    {
      id: 107,
      imageUrl:
        "https://libertylaunchacademy.org/wp-content/uploads/2023/07/Liberty_Launch_Academy_Private_Education_Liberty_Lake_Washington_Partner_Resources_2.webp",
    },
    {
      id: 108,
      imageUrl:
        "https://libertylaunchacademy.org/wp-content/uploads/2023/07/Liberty_Launch_Academy_Private_Education_Liberty_Lake_Washington_Partner_Resources_3.webp",
    },
    {
      id: 109,
      imageUrl:
        "https://libertylaunchacademy.org/wp-content/uploads/2023/07/Liberty_Launch_Academy_Private_Education_Liberty_Lake_Washington_Partner_Resources_7.webp",
    },
    {
      id: 110,
      imageUrl:
        "https://libertylaunchacademy.org/wp-content/uploads/2023/07/Liberty_Launch_Academy_Private_Education_Liberty_Lake_Washington_Partner_Resources_10.webp",
    },
    {
      id: 111,
      imageUrl:
        "https://libertylaunchacademy.org/wp-content/uploads/2023/07/Liberty_Launch_Academy_Private_Education_Liberty_Lake_Washington_Partner_Resources_14reDesign-logo-2021.png",
    },
    {
      id: 112,
      imageUrl:
        "https://libertylaunchacademy.org/wp-content/uploads/2023/07/Liberty_Launch_Academy_Private_Education_Liberty_Lake_Washington_Partner_Resources_13-PersonalizeSC.png",
    },
  ];
  return (
    <div>
      <div className="text-center ">
        <h1 className="font-bold text-black text-4xl text-[36px] mt-4">
          Resource Partners
        </h1>
        <p className="font-normal text-black lg:px-72 text-[24px] lg:mt-5 mt-4 ">
          We are driving a new arrow of education and are constantly
          identifying, testing and implementing the best tools, resources, and
          programs to fulfill our vision of excellence, empowering growth
          together!
        </p>
      </div>

      <div className="flex flex-wrap sm:flex-row lg:my-16 mt-10 lg:gap-14 gap-3 justify-center">
        {resourceData?.map((resource) => (
          <div
            key={resource.id}
            className="relative w-[26%] lg:w-[12%] h-[90px] lg:h-10 lg:mx-10 mx-4"
          >
            <img src={resource.imageUrl} alt="" srcSet="" />
          </div>
        ))}
      </div>

      <div className="border-[1px] border-y-stone-300 mx-10"></div>
    </div>
  );
};

export default ResourcePart;
