import React, { useEffect } from "react";
import SocialIcons from "../ReusableComponent/SocialIcons";
import AOS from "aos";
import "aos/dist/aos.css";

const FacultySection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const MentorsData = [
    {
      id: 1,
      userImg: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      university: "Harvard University",
    },
    {
      id: 2,
      userImg: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      university: "Stanford University",
    },
    {
      id: 3,
      userImg: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Michael Johnson",
      university: "MIT",
    },
  ];
  return (
    <div className="flex items-center justify-center flex-col text-center pt-[3rem] pb-[3rem] bg-slate-200 sm:w-[100%]">
      <h2
        data-aos="slide-up"
        data-aos-offset="200"
        data-aos-duration="900"
        className="sm:text-3xl text-2xl font-bold text-blue-700 py-[4rem]"
      >
        Meet Our Mentors
      </h2>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="900"
        className="flex sm:items-center flex-star px-[1rem] pb-[2rem]"
      >
        <img
          className="h-[3rem] w-[3rem]"
          src="https://smarted.in/uploads_demo/setting/top-instructor-heading-img.png"
          alt="logo"
        />
        <div className="flex pl-2 justify-start items-start  flex-col py-4">
          <h1 className="text-gray-800 text-[16] sm:text-2xl font-semibold">
            Our Top Instructor.
          </h1>
          <p className="text-gray-500 text-[12px] sm:text-[16px] text-start">
            Meet Our Mentors Who Transformed Students from Beginners to Experts
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {MentorsData.map((item, id) => {
          return (
            <div
              data-aos="flip-up"
              data-aos-offset="260"
              data-aos-duration="900"
              key={id}
              className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex flex-col items-center justify-center my-4 p-4 bg-[#ebf6f7] rounded-[1rem] mobile:w-[17rem] h-[11rem] mx-1"
            >
              <div className="pb-[1rem]">
                <img
                  src={item.userImg}
                  className="h-[80px] w-[80px] rounded-full  border-blue-500 border-solid border-2 p-1 bg-[#ebf6f7]"
                  alt="mentor-img"
                />
              </div>
              <h2 className="text-blue-900 font-semibold text-[16px]">
                {item.name}
              </h2>
              <h3 className="text-purple-1000 font-semibold text-[12px] pb-[2rem]">
                {item.university}
              </h3>
              <div className="pb-[3rem]">
                <SocialIcons />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FacultySection;
