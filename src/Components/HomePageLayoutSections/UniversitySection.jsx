import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const UniversitySection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const universityData = [
    {
      url: "https://smarted.in/uploads/setting/1694863826-LTrx888DOr.png",
      title: "University Selection",
      description:
        "University Selection has become the most vital role in the whole method to start with. Good results to colleges in most states is dependent upon the most suitable picks of the universities/colleges.",
    },
    {
      url: "https://cdn-icons-png.flaticon.com/256/9196/9196974.png",
      title: "Education Loan ",
      description:
        "College Dakhla aims to encourage pupils to pursue their schooling in procuring economic assistance. To encourage students to maintain advanced schooling despite their financial openings.",
    },
    {
      url: "https://cdn.iconscout.com/icon/premium/png-512-thumb/business-meeting-26-1088570.png?f=webp&w=256",
      title: "Admission Guidance",
      description:
        "We understand the stress of a student hence provide personalized direction, support, and counselling to him/her, in the order they know their dream of analyzing at most colleges of both India.",
    },
  ];
  return (
    <div className="bg-slate-200 flex items-center justify-center py-[4rem]   px-4">
      <div className="flex flex-wrap gap-4 justify-evenly items-center max-w-screen-xl mx-auto">
        {universityData.map((item, index) => (
          <div
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-duration="900"
            key={index}
            className=" flex   flex-col   mobile:w-[20rem] sm:h-[22rem]  mb-8 sm:mb-0 cursor-pointer rounded-lg p-[2rem] odd:text-white even:bg-[#FDF0FF] even:text-black    odd:bg-[#0047ab]  hover:shadow-2xl hover:shadow-blue-700 duration-300 gap-2"
          >
            <img
              className="rounded-full w-[80px] h-[80px] mb-4 mx-auto sm:mx-0"
              src={item.url}
              alt="deglogo"
            />
            <div className="text-left  ">
              <h1 className="font-semibold text-[16px] sm:text-xl ">
                {item.title}
              </h1>
              <p className="  text-[14px] pb-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversitySection;
