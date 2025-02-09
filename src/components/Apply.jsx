import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Apply = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return (
    <main className="flex flex-col items-center bg-gray-200 min-h-[92vh]">
      <div className="shadow-black shadow rounded w-[25%] p-5 mt-5 bg-white">
        <h1 className="text-lg mb-5 text-center">
          Application Form for Scholarship Id: {id}
        </h1>
        <form action="" className="flex flex-col">
          <label className="text-sm" htmlFor="dob">
            Select Date Of Birth:
          </label>
          <input
            className="border rounded-md text-md mb-6 p-2"
            type="date"
            name="dob"
            id="dob"
          />

          <label className="text-sm" htmlFor="gender">
            Select Gender:
          </label>
          <select
            className="border rounded-md text-md mb-6 p-2"
            name="gender"
            id="gender"
          >
            <option hidden>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label className="text-sm" htmlFor="category">
            Select Category:
          </label>
          <select
            className="border rounded-md text-md mb-6 p-2"
            name="category"
            id="category"
          >
            <option hidden>Select Category</option>
            <option value="general">General</option>
            <option value="obc">OBC</option>
            <option value="st">ST</option>
            <option value="sc">SC</option>
          </select>
          
          <label className="text-sm" htmlFor="doc">
            Upload Required Document:
          </label>
          <input
            className="border rounded-md text-md mb-6 p-2"
            type="file"
            name="doc"
            id="doc"
          />
          <label className="text-sm" htmlFor="aadhar">
            Enter Aadhar Card Number
          </label>
          <input
            className="border rounded-md text-md mb-6 p-2"
            type="text"
            placeholder="Enter Aadhar Number"
            id="aadhar"
          />
          <button className="cursor-pointer bg-[#4285F4] text-lg text-white rounded-md py-2">
            Submit Application Form
          </button>
        </form>
      </div>
    </main>
  );
};

export default Apply;
