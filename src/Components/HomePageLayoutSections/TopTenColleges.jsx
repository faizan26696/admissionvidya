import React, { useState } from "react";

const tabData = [
  "Computer Science",
  "Mechanical Engineering",
  "Electronics & Communication",
  "Civil Engineering",
  "Information Technology",
  // ... add other fields
];

const collegeData = [
  // ... add your college data here
];

const TopTenColleges = () => {
  const [selectedTab, setSelectedTab] = useState(tabData[0]);

  const filteredColleges = collegeData
    .filter((college) => college.field === selectedTab)
    .slice(0, 10);

  return (
    <div className="container mx-auto py-8">
      <div className="flex space-x-4">
        {tabData.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 bg-gray-200 hover:bg-gray-300 focus:outline-none ${
              selectedTab === tab ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Rank</th>
            <th className="border border-gray-300 p-2">College</th>
            <th className="border border-gray-300 p-2">Ranking</th>
            {/* Add other columns as needed */}
          </tr>
        </thead>
        <tbody>
          {filteredColleges.map((college, index) => (
            <tr
              key={college.id}
              className={index % 2 === 0 ? "bg-gray-50" : ""}
            >
              <td className="border border-gray-300 p-2">{college.rank}</td>
              <td className="border border-gray-300 p-2">{college.name}</td>
              <td className="border border-gray-300 p-2">{college.ranking}</td>
              {/* Add other columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopTenColleges;
