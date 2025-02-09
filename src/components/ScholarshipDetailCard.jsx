import React from "react";

const ScholarshipDetailCard = ({ price, path }) => {
  return (
    <div
      style={{ backdropFilter: "blur(10px)", scale: "0" }}
      className="bg-[rgba(0,0,0,0.0)] fixed h-full w-full top-0 left-0 right-0 bottom-0 z-10"
    >
      <div
        id="scholarshipDetailCard"
        className="flex flex-col gap-3 p-10 w-[90vw] h-[90vh] bg-white rounded-xl border-4 border-black absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"
      >
        <h2 className="text-3xl font-bold">Bright Future Scholarship 2024</h2>
        <p className="text-xl font-semibold">Amount: ₹50,000</p>
        <span>
          <h3 className="text-xl font-semibold">Eligibility Criteria:</h3>
          <p className="text-gray-600 text-lg">
            Must be a full-time undergraduate student enrolled in a recognized
            university. Minimum academic score of 75% in the previous year.
            Family income should not exceed ₹5,00,000 per annum. Open to
            students pursuing STEM (Science, Technology, Engineering, and
            Mathematics) fields.
          </p>
        </span>
        <h3 className="text-xl">Application Deadline: 5th February 2025</h3>
        <span>
          <h4 className="text-xl">Details:</h4>
          <p className="text-gray-500 text-lg">
            The Bright Future Scholarship 2024 aims to support meritorious
            students from economically disadvantaged backgrounds who are
            pursuing higher education in STEM fields. This scholarship provides
            financial assistance to cover tuition fees, books, and other
            academic expenses. Applicants are required to submit their academic
            transcripts, proof of income, and a 500-word essay on their career
            aspirations. Shortlisted candidates may be called for an interview.
          </p>
        </span>
        <div className="flex justify-between mt-auto text-2xl text-white">
          <button
            onClick={() => {
              navigate(path);
            }}
            className="cursor-pointer bg-[#4285F4] px-2 py-1 rounded-lg invisible"
          >
            Apply Now
          </button>
          <button
            onClick={() => {
              document.querySelector(
                "#scholarshipDetailCard"
              ).parentElement.style.scale = "0";
            }}
            className="cursor-pointer bg-[#dc3545] px-2 py-1 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetailCard;
