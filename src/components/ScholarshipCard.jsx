import React from "react";
import { useNavigate } from "react-router-dom";

const ScholarshipCard = ({ price, title, path }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-white p-4 m-4 rounded-md shadow-md shadow-black w-[300px] h-[400px]">
      <img
        className="relative w-[80%] mx-auto border rounded-xl shadow shadow-gray-500"
        src="/images/scholarship-logo.png"
      />
      <p className="mt-5 text-[#4285F4] text-xl font-semibold">₹{price}</p>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex justify-between text-xl mt-auto">
        <button
          onClick={() => {
            navigate(path);
          }}
          className="cursor-pointer bg-[#4285F4] text-white px-2 py-1 rounded-lg"
        >
          Apply Now
        </button>
        <button
          onClick={() => {
            document
              .querySelector("#scholarshipDetailCard")
              .parentElement.style.scale = "1";
          }}
          className="cursor-pointer"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ScholarshipCard;
