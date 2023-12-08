import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const topCollegesData = [
  {
    name: "Best BTech colleges in India",
    url: "https://images.collegedunia.com/public/college_data/images/cover/1509430807cover.jpg?h=210&w=228&mode=fit",
  },
  {
    name: "Best BTech colleges in Delhi",
    url: "https://images.collegedunia.com/public/college_data/images/cover/1443078523IITDelhi_New.jpg?h=210&w=228&mode=fit",
  },
  {
    name: "Best BTech colleges in India accepting COMEDK",
    url: "https://images.collegedunia.com/public/college_data/images/cover/1601467085Cover.jpg?h=210&w=228&mode=fit",
  },

  {
    name: "Best Private BTech colleges in New Delhi",
    url: "https://images.collegedunia.com/public/college_data/images/cover/14973308071443084987AMITYNOIDANEW.jpg?h=210&w=228&mode=fit",
  },
  {
    name: "Best Private BTech colleges in India",
    url: "https://images.collegedunia.com/public/college_data/images/cover/14973308071443084987AMITYNOIDANEW.jpg?h=210&w=228&mode=fit",
  },
  {
    name: "Best BTech colleges in Mumbai",
    url: "https://images.collegedunia.com/public/college_data/images/cover/1443180014IIT_New.jpg?h=210&w=228&mode=fit",
  },
  {
    name: "Best BTech colleges in India accepting TNEA",
    url: "https://images.collegedunia.com/public/college_data/images/cover/1443675641COEANNA_NEW.jpg?h=210&w=228&mode=fit",
  },
  {
    name: "Best BTech Mechanical Engineering colleges in India",
    url: "https://images.collegedunia.com/public/college_data/images/cover/1509430807cover.jpg?h=210&w=228&mode=fit",
  },
  {
    name: "Best BTech colleges in Bangalore",
    url: "https://images.collegedunia.com/public/college_data/images/cover/1601467085Cover.jpg?h=210&w=228&mode=fit",
  },
  {
    name: "Best BTech colleges in Hyderabad",
    url: "https://images.collegedunia.com/public/college_data/images/cover/1485941210cvr1.png?h=210&w=228&mode=fit",
  },
  {
    name: "Best BTech colleges in Tamil Nadu",
    url: "https://images.collegedunia.com/public/college_data/images/cover/1509430807cover.jpg?h=210&w=228&mode=fit",
  },
  {
    name: "Best BTech colleges in Maharashtra",
    url: "https://images.collegedunia.com/public/college_data/images/cover/1443180014IIT_New.jpg?h=210&w=228&mode=fit",
  },
  {
    name: "Best BTech colleges in Karnataka",
    url: "https://images.collegedunia.com/public/college_data/images/cover/15038956701443098931NITSurathkalNew.jpg?h=210&w=228&mode=fit",
  },
];

const TopCollegesSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2
            data-aos="zoom-in-up"
            data-aos-offset="260"
            data-aos-duration="900"
            className="font-bold text-2xl text-blue-700  pb-2 sm:text-3xl "
          >
            Top Engineering Colleges in India
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {topCollegesData.map((college, index) => (
            <div
              data-aos="flip-up"
              data-aos-offset="260"
              data-aos-duration="900"
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-100 shadow-lg"
              style={{
                backgroundImage: `url(${college.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "150px", // Adjust the height as needed
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute cursor-pointer bottom-0 left-0 right-0 p-2 text-center text-white">
                <h2 className="mb-[0.4rem] text-base font-semibold">
                  {college.name}
                </h2>
                <span className="text-sm text-white font-semibold hover:text-[#00009c]">
                  Explore More
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCollegesSection;
