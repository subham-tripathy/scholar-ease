import React from "react";
import { closePendingApplicationCard } from "./functions";

const PendingApplicationDetailCard = () => {
  return (
    <div
      style={{ backdropFilter: "blur(10px)", scale: "0" }}
      className="bg-transparent fixed h-full w-full top-0 left-0 right-0 bottom-0 z-10"
    >
      <div
        id="PendingApplicationDetailCard"
        className="flex flex-col gap-3 p-10 bg-[url(/images/bg-6.jpg)] bg-cover rounded-xl border w-[90vw] h-[90vh] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
      >
        <img
          id="photograph"
          src="/images/default-acc-icon.png"
          className=" relative h-[25%] mx-auto border rounded p-3 shadow shadow-gray-500"
        />


        <h2 className="text-sm font-bold" id="scholarship_id" />

        <div className="grid grid-cols-4 gap-x-2 items-center">
          <h2 className="text-sm font-bold" id="student_id" />
          <h2 className="text-sm font-bold" id="full_name" />
          <h2 className="text-sm font-bold" id="gender" />
          <h2 className="text-sm font-bold" id="contact_number" />
          <h2 className="text-sm font-bold" id="email" />
          <h2 className="text-sm font-bold" id="address" />
          <h2 className="text-sm font-bold" id="date_of_birth" />
          <h2 className="text-sm font-bold" id="nationality" />
          <h2 className="text-sm font-bold" id="bank_account_number" />
          <h2 className="text-sm font-bold" id="ifsc_code" />
        </div>

        <h2 className="text-sm font-bold" id="application_date" />

        <div className="grid grid-cols-4 gap-x-2 items-center">
          <h2 className="text-sm font-bold" id="class_10_board" />
          <h2 className="text-sm font-bold" id="class_10_passing_year" />
          <h2 className="text-sm font-bold" id="class_10_percentage" />
        </div>

        <div className="grid grid-cols-4 gap-x-2 items-center">
          <h2 className="text-sm font-bold" id="class_12_board" />
          <h2 className="text-sm font-bold" id="class_12_passing_year" />
          <h2 className="text-sm font-bold" id="class_12_percentage" />
        </div>

        <div className="grid grid-cols-4 gap-x-2 items-center">
          <h2 className="text-sm font-bold" id="father_name" />
          <h2 className="text-sm font-bold" id="father_occupation" />
          <h2 className="text-sm font-bold" id="mother_name" />
          <h2 className="text-sm font-bold" id="mother_occupation" />
          <h2 className="text-sm font-bold" id="family_income" />
        </div>

        <div className="grid grid-cols-4 mt-4 gap-x-10 gap-y-1 items-center">
          <h2 className="text-sm font-bold flex justify-between items-center" id="class_10_certificate" />
          <h2 className="text-sm font-bold flex justify-between items-center" id="class_12_certificate" />
          <h2 className="text-sm font-bold flex justify-between items-center" id="digital_signature" />
          <h2 className="text-sm font-bold flex justify-between items-center" id="identity_proof" />
          <h2 className="text-sm font-bold flex justify-between items-center" id="income_certificate" />
          <h2 className="text-sm font-bold flex justify-between items-center" id="pan_card" />
          <h2 className="text-sm font-bold flex justify-between items-center" id="passbook_photo" />
          <h2 className="text-sm font-bold flex justify-between items-center" id="photograph" />
          <h2 className="text-sm font-bold flex justify-between items-center" id="residence_certificate" />
          <h2 className="text-sm font-bold" id="caste_certificate" />
        </div>

        <button
          onClick={() => {
            closePendingApplicationCard();
          }}
          className="text-xl absolute cursor-pointer bg-[#dc3545] px-2 py-1 rounded-lg bottom-5 right-5 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PendingApplicationDetailCard;
