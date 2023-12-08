import React, { useEffect } from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AOS from "aos";
import "aos/dist/aos.css";

const StudyGoals = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const studyGoalsData = [
    {
      goal: "Engineering",
      goalimg:
        "https://cdn0.iconfinder.com/data/icons/set-02/355/vector_486-487-490_02-64.png",
      count: 6155,
      courses: [
        { name: "BE/B.Tech" },
        { name: "Diploma in Engineering" },
        { name: "ME/M.Tech" },
        { name: "BCA/MCA" },
      ],
    },
    {
      goal: "Management",
      goalimg:
        "https://cdn4.iconfinder.com/data/icons/business-conceptual-mixed-set-1/512/27-64.png",
      count: 7391,
      courses: [
        { name: "MBA/PGDM" },
        { name: "BBA/BBM" }, // Replace 0 with the actual count
        { name: "Executive MBA" }, // Replace 0 with the actual count
      ],
    },
    {
      goal: "Commerce",
      goalimg:
        "https://cdn3.iconfinder.com/data/icons/leto-finance-money-1/64/finance_growth_money_income-64.png",
      count: 4777,
      courses: [
        { name: "B.Com" },
        { name: "M.Com" }, // Replace 0 with the actual count
      ],
    },
    {
      goal: "Exams",
      goalimg:
        "https://cdn3.iconfinder.com/data/icons/education-157/512/_Exams-64.png",
      count: "Exams & ",
      courses: [
        { name: "JEE Advance" },
        { name: "JEE Main" }, // Replace 0 with the actual count
        { name: "NEET" }, // Replace 0 with the actual count
        { name: "BITSAT" }, // Replace 0 with the actual count
      ],
    },
  ];

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-offset="260"
      data-aos-duration="900"
      className="my-6 pt-[2rem]"
    >
      <h1 className="font-bold text-2xl text-blue-700  pb-2 sm:text-3xl  pt-4 ">
        Choose Your Career
      </h1>
      <div className="bg-white text-black py-6 sm:py-8 lg:py-12 flex">
        <div className="mx-auto  max-w-screen-xl px-4 flex gap-4 justify-center flex-wrap">
          {studyGoalsData.map((goal, index) => (
            <div
              key={index}
              className="bg-white p-4 mobile:w-[16rem] rounded-lg shadow-md mb-4"
            >
              <div className="flex py-2 gap-4">
                <img src={goal.goalimg} alt="goalimg" />
                <div className="text-start">
                  <h2 className="text-sm sm:text-xl font-semibold mb-2">
                    {goal.goal}
                  </h2>
                  <span className="text-gray-500 text-[0.8rem] mb-2">
                    {goal.count} colleges
                  </span>
                </div>
              </div>
              <ul>
                {goal.courses.map((course, courseIndex) => (
                  <li
                    key={courseIndex}
                    className="flex justify-between items-center py-2 border-b"
                  >
                    <span className="text-[0.9rem] text-gray-600 hover:text-blue-600 duration-300 cursor-pointer">
                      {course.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyGoals;
