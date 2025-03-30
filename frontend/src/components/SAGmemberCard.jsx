import React from "react";
import { BACKEND_BASE_URL, errorToast, revealSAGDetailCard, successToast } from "./functions";

const SAGmemberCard = ({
  account_type,
  email,
  gender,
  name,
  phno,
  profile_pic,
  uid,
  setRefreshTrigger,
}) => {
  return (
    <div className="relative flex flex-col bg-white p-4 m-4 rounded-md shadow-md shadow-black w-[250px] h-[300px]">
      <button
        className="cursor-pointer absolute w-5 z-10 right-2"
        onClick={() => {
          fetch(BACKEND_BASE_URL + "/deleteSAGmember", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              sagID: uid,
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
        className="relative w-[80%] mx-auto border rounded-full shadow shadow-gray-500"
        src={"/images/default-acc-icon.png"}
      />
      <p className="mt-5 text-blue-700 text-lg font-semibold">{name}</p>
      <h2 className="text-lg">{uid}</h2>
      <div className="flex justify-between text-xl mt-auto">
        <button
          onClick={() => {
            revealSAGDetailCard(
              account_type,
              email,
              gender,
              name,
              phno,
              profile_pic,
              uid
            );
          }}
          className="cursor-pointer text-sm"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default SAGmemberCard;
