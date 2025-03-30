import React, { useState } from "react";
import {
  BACKEND_BASE_URL,
  closeAddSAGPanel,
  errorToast,
  successToast,
} from "./functions";

const AddSAGPanel = ({ setRefreshTrigger }) => {
  const [SAGid, setSAGid] = useState("");
  const [SAGname, setSAGname] = useState("");
  const [SAGgender, setSAGgender] = useState("");
  const [SAGemail, setSAGemail] = useState("");
  const [SAGphno, setSAGphno] = useState("");
  const [SAGpw, setSAGpw] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (SAGid.trim() == "") {
      errorToast("Enter SAG ID !");
      return;
    }

    if (SAGname.trim() == "") {
      errorToast("Enter SAG Name !");
      return;
    }

    if (SAGgender.trim() == "") {
      errorToast("Choose SAG Gender !");
      return;
    }

    if (SAGemail.trim() == "") {
      errorToast("Enter SAG Email !");
      return;
    }

    if (SAGphno.trim() == "") {
      errorToast("Enter SAG Phone Number !");
      return;
    }

    if (SAGpw.trim() == "") {
      errorToast("Enter SAG Member Password !");
      return;
    }

    fetch(BACKEND_BASE_URL + "/addSAGmember", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        SAGid,
        SAGname,
        SAGgender,
        SAGemail,
        SAGphno,
        SAGpw,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg == "success") {
          successToast("Scheme Successfully Added");
          setRefreshTrigger((prev) => !prev);
        } else if (data.msg == "duplicate name") {
          errorToast("The SAG ID already used !");
        } else {
          errorToast("Internal Error Occurred !!");
        }
      });
  };
  return (
    <div
      style={{ backdropFilter: "blur(10px)", scale: "0" }}
      className="bg-[rgba(0,0,0,0.0)] fixed h-full w-full top-0 left-0 right-0 bottom-0 z-20"
    >
      <div
        id="addSAGPanel"
        className="flex flex-col gap-2 px-10 py-5 w-[65%] mx-auto bg-white rounded-xl border-4 border-black absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
      >
        <h1 className="text-center text-2xl">
          Add New Scholarship Scheme Form
        </h1>

        <form className="flex flex-col">
          <label className="text-md">SAG ID:</label>
          <input
            className="border rounded text-md mb-3 p-2"
            type="text"
            onChange={(e) => {
              setSAGid(e.target.value);
            }}
          />

          <label className="text-md">SAG Member Name:</label>
          <input
            className="border rounded text-md mb-3 p-2"
            type="text"
            onChange={(e) => {
              setSAGname(e.target.value);
            }}
          />

          <label className="text-md">SAG Member Gender:</label>
          <select
            className="border rounded text-md mb-3 p-2"
            onChange={(e) => {
              setSAGgender(e.target.value);
            }}
          >
            <option hidden>Choose Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>

          <label className="text-md">SAG Member Email:</label>
          <input
            className="border rounded text-md mb-3 p-2"
            type="email"
            onChange={(e) => {
              setSAGemail(e.target.value);
            }}
          />

          <label className="text-md">SAG Member Phone Number:</label>
          <input
            className="border rounded text-md mb-3 p-2"
            type="number"
            onChange={(e) => {
              setSAGphno(e.target.value);
            }}
          />

          <label className="text-md">SAG Member Password:</label>
          <input
            className="border rounded text-md mb-3 p-2"
            type="password"
            onChange={(e) => {
              setSAGpw(e.target.value);
            }}
          />

          <div className="flex justify-between">
            <button
              className="cursor-pointer bg-[#4285F4] text-lg text-white px-2 py-1 rounded-lg w-[200px]"
              id="signUpBTN"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Create SAG Member
            </button>
            <button
              className="cursor-pointer bg-[#dc3545] text-lg text-white px-2 py-1 rounded-lg w-[100px]"
              onClick={(e) => {
                e.preventDefault();
                closeAddSAGPanel();
              }}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSAGPanel;
