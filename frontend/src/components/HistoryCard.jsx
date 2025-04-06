import React from "react";

const HistoryCard = ({ arr }) => {
  // console.log(arr)
  return (
    <div className="bg-blue-700 text-white p-2 w-[300px] flex flex-col items-center text-justify">
      <img src="/images/default-acc-icon.png" className="relative w-[40%]" />
      <h1 className="text-lg w-full">{arr.scheme_name}</h1>
      <div className="flex justify-between w-full text-sm">
        <h2>ID: {arr.scheme_id}</h2>
        <h2>Amount: {arr.scheme_amt}</h2>
      </div>
      <h2 className="text-sm text-gray-300">{arr.scheme_desc}</h2>
    </div>
  );
};

export default HistoryCard;
