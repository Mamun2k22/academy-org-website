/* eslint-disable react/jsx-key */
import article1 from "../../assets/images/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-grades9-12-01-600x403.jpg";
import article2 from "../../assets/images/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-Littles-Launch-Academy-06-600x403.jpg";
import article3 from "../../assets/images/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-IG-22-600x403.jpeg";

const Article = () => {
  const articleData = [
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
  ];

  return (
    <div className="py-12">
      <div className="space-y-4 sm:space-y-6 w-1/2">
        <h2 className="text-xl lg:text-2xl font-bold">Recent Articles</h2>
        <p className="text-[#444444] text-xl">
          Dive into our newest content. These latest articles offer fresh
          perspectives and compelling insights to keep you in the know.
        </p>
        <p className="font-md">
          RECENT POSTS <span className="text-red-400">/ VIEW ALL POSTS</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {articleData.map((article) => {
          return (
            <div>
              <img src={article.image} alt="article" />
              <h4 className="text-[#ff4041] mt-3 hover:cursor-pointer">
                {article.title}
              </h4>
              <h4 className="text-[#999] font-md">
                |{" "}
                <span className="hover:text-red-400 hover:cursor-pointer">
                  {article.category}
                </span>
              </h4>
              <p className="text-[#676767] text-md mt-3">
                {article.description.length > 250
                  ? article.description.slice(0, 250)
                  : article.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Article;
