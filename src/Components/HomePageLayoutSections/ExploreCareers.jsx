import React, { useEffect } from "react";
import Button from "../ReusableComponent/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import ExploreCourses from "./ExploreCourses";
import StudyGoals from "./StudyGoals";
import TopCollegesSection from "./TopCollegesSection";

const ExploreCareers = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const data = [
    {
      id: 1,
      title: "STEM",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/8055/8055545.png",
      description:
        "Careers in Science, Technology, Engineering, and Mathematics involve solving a variety of problems through research and design.",
    },
    {
      id: 2,
      title: "Business",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/3281/3281412.png",
      description:
        "Careers in Business Management and Administration concentrate on planning, directing, and evaluating business functions essential to efficient and productive operations.",
    },
    {
      id: 3,
      title: "Health & Science",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/5408/5408783.png",
      description:
        "Careers in Health Sciences generally revolve around supporting and caring for patients. Making a paramedic means making big decisions to help people.",
    },
  ];

  return (
    <div className="py-10   text-white px-6 flex flex-col">
      <h1
        data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-duration="900"
        className="font-bold text-2xl text-blue-700 pb-2 sm:text-3xl "
      >
        Explore Careers
      </h1>
      <div className="py-4 flex justify-around md:flex-nowrap flex-wrap gap-[4rem] items-center ">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="900"
          className="p-4 text-start "
        >
          <h2 className="text-xl font-semibold text-[#000133]  md:text-2xl">
            Explore Career Possibilities
          </h2>
          <p className="md:text-[1.2rem]  text-[1rem] text-gray-500 pt-[2rem] pb-[3rem]">
            Answer questions about your interests and passions to learn about
            possible career paths to consider.
          </p>
          <Button
            text="Start your Career 🚀"
            className="bg-blue-700 text-[0.8rem] sm:text-[1rem] p-3 rounded-lg hover:bg-[#00009c]  duration-300  font-semibold text-white  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] "
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-duration="900"
          className="p-2"
        >
          <img
            className="sm:w-[600px] rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"
            alt="std"
          />
        </div>
      </div>
      <div>
        <StudyGoals />
      </div>

      <div>
        <TopCollegesSection />
      </div>

      <ExploreCourses />
      <div className="flex justify-center pt-[0.5rem] flex-col items-center">
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="900"
          className="md:w-[600px]"
        >
          <h2 className="font-bold text-2xl text-blue-700  pb-2 sm:text-3xl ">
            Spotlight on Careers
          </h2>
          <p className="text-[16px] md:text-xl text-slate-400 pt-[2rem] pb-[3rem] text-gray-600">
            We've grouped together careers into clusters that require similar
            skills. Explore more below to learn about possible jobs and watch
            videos from professionals in these fields.
          </p>
        </div>

        <div className="flex justify-center sm:justify-evenly items-center flex-wrap gap-4">
          {data.map((item) => (
            <div
              data-aos="flip-right"
              data-aos-offset="200"
              data-aos-duration="900"
              key={item.id}
              className="flex justify-center items-center flex-col mobile:w-[18rem] pb-[1.5rem] p-2 border-solid border-cyan-500 rounded-lg border-[1px]"
            >
              <img
                className="w-[6rem] h-[6rem]  "
                src={item.imageSrc}
                alt="logo"
              />
              <div>
                <h2 className="sm:text-xl text-[1rem] text-blue-500 font-semibold pt-2">
                  {item.title}
                </h2>
                <h5 className="text-[0.9rem] sm:text-[1rem] text-gray-600 p-2 h-[12rem]">
                  {item.description}
                </h5>
                <Button
                  text="Learn More →"
                  className="py-4 px-4 sm:text-[1rem] text-[0.8rem] font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:outline-none focus:shadow-outline duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCareers;
