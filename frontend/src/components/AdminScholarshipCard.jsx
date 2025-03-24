import React from "react";
import {
  BACKEND_BASE_URL,
  errorToast,
  revealScholarshipDetailCard,
  successToast,
} from "./functions";

const AdminScholarshipCard = ({ id, img, price, title, arr, setRefreshTrigger }) => {
  return (
    <div className="relative flex flex-col bg-white p-4 m-4 rounded-md shadow-md shadow-black w-[250px] h-[300px] mx-auto">
      <button
        className="cursor-pointer absolute w-5 z-10 right-2"
        onClick={() => {
          fetch(BACKEND_BASE_URL + "/deleteScheme", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              scheme_id: id,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status) {
                successToast(data.message);
                setRefreshTrigger((prev) => !prev);
              } else {
                errorToast(data.message);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <img src="/images/delete-icon.png" className="relative w-full h-auto" />
      </button>
      <img
        className="relative w-[80%] mx-auto border rounded-xl shadow shadow-gray-500"
        src={img}
      />
      <p className="mt-5 text-[#4285F4] text-lg font-semibold">₹{price}</p>
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex justify-between text-xl mt-auto">
        <button
          className="cursor-pointer text-sm w-full bg-[#4285F4] text-white py-1 rounded"
          onClick={() => {
            revealScholarshipDetailCard(id, arr);
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default AdminScholarshipCard;
