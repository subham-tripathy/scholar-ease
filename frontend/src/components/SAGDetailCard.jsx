import React from "react";
import { closeSAGDetailCard } from "./functions";

const SAGDetailCard = () => {
  return (
    <div
      style={{ backdropFilter: "blur(10px)", scale: "0" }}
      className="bg-transparent fixed h-full w-full top-0 left-0 right-0 bottom-0 z-10"
    >
      <div
        id="SAGDetailCard"
        className="flex flex-col gap-3 p-10 w-[90vw] h-[90vh] bg-[url(/images/bg-6.jpg)] bg-cover rounded-xl border-4 border-black absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
      >
        <img
          src="/images/default-acc-icon.png"
          className="relative w-[20%] mx-auto border rounded p-3 shadow shadow-gray-500"
        />
        <h2 id="SAGname" className="text-3xl font-bold"></h2>
        <h2 id="SAGuid" className="text-lg font-semibold"></h2>
        {/* <h2 id="SAGaccount_type" className="text-lg font-semibold"></h2> */}
        <h2 id="SAGemail" className="text-lg font-semibold"></h2>
        <h2 id="SAGgender" className="text-lg font-semibold"></h2>
        <h2 id="SAGphno" className="text-lg font-semibold"></h2>
        <h2 id="SAGprofile_pic" className="text-lg font-semibold"></h2>

        <button
          onClick={() => {
            closeSAGDetailCard();
          }}
          className="text-xl absolute cursor-pointer bg-[#dc3545] px-2 py-1 rounded-lg bottom-5 right-5 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SAGDetailCard;
