import React from "react";

const HistoryCard = ({ arr }) => {
  // console.log(arr)
  return (
    <div className="relative bg-blue-700 text-white py-3 px-5 flex gap-10 rounded items-center text-center my-5 ">
      <img
        src="/images/default-acc-icon.png"
        className="relative w-[10%] rounded border border-white"
      />
      <div className="w-full flex flex-col gap-y-5 text-left">
        <div className="grid grid-cols-3">
          <h1 className="text-lg w-full">{arr.scheme_name}</h1>
          <h2>Scholarship ID: {arr.scheme_id}</h2>
          <h2>Amount: {arr.scheme_amt}</h2>
        </div>
        <div>
          <h2>Description:</h2>
          <h2 className="text-sm text-gray-300 text-left">{arr.scheme_desc}</h2>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
