import React, { useState, useEffect } from "react";
import Button from "../ReusableComponent/Button";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import AOS from "aos";
import "aos/dist/aos.css";
const CollegeData = () => {
  const [count, setCount] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ScrollTrigger
      onEnter={() => setCount(true)}
      onExit={() => setCount(false)}
    >
      <div className="flex flex-col justify-center  bg-[#0D2A4F] py-4">
        <div className="flex md:flex-nowrap flex-wrap justify-around px-[4rem] p-[2rem]  ">
          <h1
            data-aos="zoom-in-down"
            data-aos-offset="200"
            data-aos-duration="1000"
            className="text-2xl sm:w-[500px] sm:text-4xl font-bold text-white text-start"
          >
            FIND TOP COLLEGES OF YOUR CHOICE AT ONE PLACE.
          </h1>
          <p
            data-aos="zoom-in-down"
            data-aos-offset="200"
            data-aos-duration="1000"
            className="text-start sm:w-[500px] text-[14px] text-gray-500  sm:text-[18px] "
          >
            1 single form and get access to 2500+ colleges across India. College
            Dakhla saves your time, money and makes the college application
            process easier for you to apply to numerous colleges using one
            window.
          </p>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-offset="100"
          data-aos-duration="1000"
          className="flex flex-wrap justify-evenly items-center"
        >
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              {count && (
                <CountUp start={0} end={50000} duration={2} delay={0} />
              )}
              +
            </h2>
            <span className="text-[12px] text-gray-500 sm:text-xl">
              APPLICATIONS FILLED
            </span>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              {count && (
                <CountUp start={0} end={10000} duration={2} delay={0} />
              )}
              +
            </h2>
            <span className="text-[14px] text-gray-500 sm:text-xl ">
              ADMISSIONS DONE
            </span>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              {count && <CountUp start={0} end={150} duration={2} delay={0} />}+
            </h2>
            <span className="text-[14px] text-gray-500 sm:text-xl">
              EXPERT COUNSELLORS
            </span>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="80"
          data-aos-duration="3000"
          className="flex justify-center py-[2rem] "
        >
          <Button
            text="DISCOVER MORE"
            className=" bg-blue-500 rounded-lg text-xs sm:text-sm font-semibold  cursor-pointer p-3 text-white hover:bg-blue-800  duration-200"
          />
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CollegeData;
