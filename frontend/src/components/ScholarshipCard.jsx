import React from "react";
import { useNavigate } from "react-router-dom";
import { revealScholarshipDetailCard } from "./functions";

const ScholarshipCard = ({ id, img, price, title, path, arr}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-white p-4 m-4 rounded-md shadow-md shadow-black w-[250px] h-[300px]">
      <img
        className="relative w-[80%] mx-auto border rounded-xl shadow shadow-gray-500"
        src={img}
      />
      <p className="mt-5 text-blue-700 text-lg font-semibold">₹{price}</p>
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex justify-between text-xl mt-auto">
        <button
          onClick={() => {
            navigate(path);
          }}
          className="cursor-pointer bg-[#17B169] text-sm text-white px-2 py-1 rounded-lg"
        >
          Apply Now
        </button>
        <button
          onClick={() => {
            revealScholarshipDetailCard(id, arr);
          }}
          className="cursor-pointer text-sm"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ScholarshipCard;
