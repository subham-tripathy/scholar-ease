import React, { useState } from "react";
import {
  BACKEND_BASE_URL,
  closeAddSchemePanel,
  errorToast,
  successToast,
} from "./functions";

const AddSchemePanel = () => {
  const [schemeName, setSchemeName] = useState("");
  const [schemeAmount, setSchemeAmount] = useState("");
  const [schemeDesc, setSchemeDesc] = useState("");
  const [eligibilityCriteria, setEligibilityCriteria] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (schemeName.trim() == "") {
      errorToast("Enter Scheme Name !");
      return;
    }

    if (schemeAmount.trim() == "") {
      errorToast("Enter Scheme Amount !");
      return;
    }

    if (schemeDesc.trim() == "") {
      errorToast("Enter Scheme Description !");
      return;
    }

    if (eligibilityCriteria.trim() == "") {
      errorToast("Enter Eligibility Criteria !");
      return;
    }

    if (deadline.trim() == "") {
      errorToast("Choose Deadline !");
      return;
    }

    fetch(BACKEND_BASE_URL + "/addScheme", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        schemeName,
        schemeAmount,
        schemeDesc,
        eligibilityCriteria,
        deadline,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg == "success") {
          successToast("Scheme Successfully Added");
        }
        if (data.msg == "duplicate name") {
          errorToast("This Schema Name is already present ");
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
        id="addSchemePanel"
        className="flex flex-col gap-2 px-10 py-5 w-[65%] mx-auto bg-white rounded-xl border-4 border-black absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
      >
        <h1 className="text-center text-2xl">
          Add New Scholarship Scheme Form
        </h1>

        <form className="flex flex-col">
          <label className="text-md" htmlFor="scheme_name">
            Scheme Name
          </label>
          <input
            className="border rounded text-md mb-3 p-2"
            type="text"
            name="scheme_name"
            id="scheme_name"
            onChange={(e) => {
              setSchemeName(e.target.value);
            }}
          />

          <label className="text-md" htmlFor="scheme_amt">
            Scheme Amount
          </label>
          <input
            className="border rounded text-md mb-3 p-2"
            type="number"
            name="scheme_amt"
            id="scheme_amt"
            onChange={(e) => {
              setSchemeAmount(e.target.value);
            }}
          />

          <label className="text-md" htmlFor="scheme_desc">
            Scheme Description
          </label>
          <input
            className="border rounded text-md mb-3 p-2"
            type="text"
            name="scheme_desc"
            id="scheme_desc"
            onChange={(e) => {
              setSchemeDesc(e.target.value);
            }}
          />

          <label className="text-md" htmlFor="eligibility_criteria">
            Eligibility Criteria
          </label>
          <input
            className="border rounded text-md mb-3 p-2"
            type="text"
            name="eligibility_criteria"
            id="eligibility_criteria"
            onChange={(e) => {
              setEligibilityCriteria(e.target.value);
            }}
          />

          <label className="text-md" htmlFor="deadline">
            DeadLine
          </label>
          <input
            className="border rounded text-md mb-3 p-2"
            type="date"
            name="deadline"
            id="deadline"
            onChange={(e) => {
              setDeadline(e.target.value);
            }}
          />
          <div className="flex justify-between">
            <button
              className="cursor-pointer bg-[#4285F4] text-lg text-white px-2 py-1 rounded-lg w-[100px]"
              id="signUpBTN"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              ADD
            </button>
            <button
              className="cursor-pointer bg-[#dc3545] text-lg text-white px-2 py-1 rounded-lg w-[100px]"
              onClick={(e) => {
                e.preventDefault();
                closeAddSchemePanel();
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

export default AddSchemePanel;
