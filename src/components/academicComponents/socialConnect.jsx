/* eslint-disable react/jsx-no-target-blank */
import article1 from "../../assets/images/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-grades9-12-01-600x403.jpg";
import article2 from "../../assets/images/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Littles-Launch-Academy-06-600x403.jpg";
import article3 from "../../assets/images/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-IG-22-600x403.jpeg";
import article4 from "../../assets/images/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-grades9-12-01-600x403.jpg";
import article5 from "../../assets/images/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Littles-Launch-Academy-06-600x403.jpg";
import article6 from "../../assets/images/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-IG-22-600x403.jpeg";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

import { BiLogoInstagram } from "react-icons/bi";
import { useState } from "react";

Modal.setAppElement("#root");
const SocialConnect = () => {
  const [currentShow, setCurrentShow] = useState(3);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const socialData = [
    {
      _id: 1,
      image: article1,
      title: "What is Project Based Learning",
      category: "Educational Models",
      description:
        "Project Based Learning (PBL) is a teaching method in which students learn by actively engaging in real-world and personally meaningful projects. Learn More at pblworks.org",
    },
    {
      _id: 2,
      image: article2,
      title: "Education Reimagined",
      category: "Educational Models",
      description:
        "Excerpt: The learner-centered paradigm for learning functions like a pair of lenses that offers a new way to look at, think about, talk about, and act on education. It constitutes…",
    },
    {
      _id: 3,
      image: article3,
      title: "What is Possible for Personalized Learning",
      category: "Personalized Learning",
      description:
        "An Overview of Personalized Learning for Schools, Families & Communities Read Full PDF",
    },
    {
      _id: 4,
      image: article4,
      title: "What is Project Based Learning",
      category: "Educational Models",
      description:
        "Project Based Learning (PBL) is a teaching method in which students learn by actively engaging in real-world and personally meaningful projects. Learn More at pblworks.org",
    },
    {
      _id: 5,
      image: article5,
      title: "Education Reimagined",
      category: "Educational Models",
      description:
        "Excerpt: The learner-centered paradigm for learning functions like a pair of lenses that offers a new way to look at, think about, talk about, and act on education. It constitutes…",
    },
    {
      _id: 6,
      image: article6,
      title: "What is Possible for Personalized Learning",
      category: "Personalized Learning",
      description:
        "An Overview of Personalized Learning for Schools, Families & Communities Read Full PDF",
    },
  ];

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="py-12 relative">
      <div className="text-center mx-auto w-11/12 sm:w-2/3">
        <h2 className="text-xl sm:text-2xl font-bold">Let’s Get Social!</h2>
        <i className="text-xl sm:text-2xl text-[#444444] pt-6">
          Join our family at All Star Academy! Follow us on Instagram and
          Facebook to keep pace with our vibrant learning community, and
          discover the exciting events and enriching activities we offer for
          your children.
        </i>
        <div className="flex justify-center items-center space-x-4">
          <a
            href="https://www.instagram.com/liberty_launch_academy"
            target="_blank"
          >
            <img
              className="w-16 h-16 border border-[#cc3b92] rounded-full hover:cursor-pointer"
              src="https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Finstagram.fwaw3-2.fna.fbcdn.net%2Fv%2Ft51.2885-19%2F280416801_981118475882068_225830004202324760_n.jpg%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.fwaw3-2.fna.fbcdn.net%26_nc_cat%3D104%26_nc_ohc%3DotoL9imHXaMAX_wzQ2k%26edm%3DAKEQFekBAAAA%26ccb%3D7-5%26oh%3D00_AfBgB2BVlmFeK5cE_DV5NGrZWtTTVxcOxRAZlGOlRuWLwg%26oe%3D65066DA6%26_nc_sid%3D29ddf3"
              alt="logo"
            />
          </a>
          <div className="text-start py-12">
            <a
              href="https://www.instagram.com/liberty_launch_academy"
              target="_blank"
              className="hover:underline text-xl font-bold"
            >
              All Star Academy
            </a>
            <hr />
            <a
              href="https://www.instagram.com/liberty_launch_academy"
              target="_blank"
              className="hover:underline text-[#444444]"
            >
              @all_star_academy
            </a>
          </div>
          <a
            href="https://www.instagram.com/liberty_launch_academy"
            target="_blank"
            className="text-white bg-[#0095f6] rounded-lg px-2 py-1 flex lr-2 items-center justify-center"
          >
            <BiLogoInstagram /> follow
          </a>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialData?.slice(0, currentShow).map((social) => {
            return (
              <div
                onClick={openModal}
                className="hover:cursor-pointer "
                key={social?._id}
              >
                <div className="relative group">
                  <img
                    src={social?.image}
                    alt="Image"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity flex items-center justify-center">
                    <div className="text-white">
                      <p className="px-6">
                        {" "}
                        {social?.description.length > 150
                          ? social.description.slice(0, 150)
                          : social.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => setCurrentShow(currentShow + 3)}
          className="text-white bg-[#0095f6] rounded-lg py-1 flex  items-center justify-center px-8 mx-auto my-4"
        >
          load more
        </button>
      </div>

      <Modal
        className="w-1/2 mx-auto h-screen overflow-auto bg-white"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <AiOutlineClose
          onClick={closeModal}
          className="text-2xl hover:cursor-pointer absolute top-2 sm:right-40"
        />
      </Modal>
    </div>
  );
};

export default SocialConnect;
