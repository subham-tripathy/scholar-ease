import React from "react";
import { closeScholarshipDetailCard } from "./functions";

const ScholarshipDetailCard = () => {
  return (
    <div
      style={{ backdropFilter: "blur(10px)", scale: "0" }}
      className="bg-[rgba(0,0,0,0.0)] fixed h-full w-full top-0 left-0 right-0 bottom-0 z-10"
    >
      <div
        id="scholarshipDetailCard"
        className="flex flex-col gap-3 p-10 w-[90vw] h-[90vh] bg-white rounded-xl border-4 border-black absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
      >
        <h2 id="cardName" className="text-3xl font-bold"></h2>
        <p id="cardAmt" className="text-xl font-semibold"></p>
        <span>
          <h3 className="text-xl font-semibold">Eligibility Criteria:</h3>
          <p id="eligibility" className="text-gray-600 text-lg"></p>
        </span>
        <h3 id="cardDeadLine" className="text-xl"></h3>
        <span>
          <h4 className="text-xl">Details:</h4>
          <p id="cardDesc" className="text-gray-500 text-lg"></p>
        </span>
        <div className="flex justify-between mt-auto text-2xl text-white">
          <button
            onClick={() => {
              closeScholarshipDetailCard();
            }}
            className="cursor-pointer bg-[#dc3545] px-2 py-1 rounded-lg ml-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetailCard;
