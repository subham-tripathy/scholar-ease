import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Footer from "./Footer";
import { BACKEND_BASE_URL, errorToast, successToast } from "./functions";

const Apply = () => {
  document.title = "Scholar Ease - Application Form";
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  if (id == null) {
    navigate("/");
  }

  const [formData, setFormData] = useState({
    student_id: localStorage.getItem("scholar-ease-uid"),
    full_name: "",
    date_of_birth: "",
    gender: "",
    nationality: "",
    contact_number: "",
    email: "",
    address: "",
    photograph: null,
    digital_signature: null,

    // Academic details
    class_10_board: "",
    class_10_passing_year: "",
    class_10_percentage: "",
    class_10_certificate: null,

    class_12_type: "12th",
    class_12_board: "",
    class_12_passing_year: "",
    class_12_percentage: "",
    class_12_certificate: null,

    // Family details
    father_name: "",
    father_occupation: "",
    mother_name: "",
    mother_occupation: "",
    family_income: "",

    // Scholarship details
    scholarship_id: id,

    // Document uploads
    aadhar_card: null,
    residence_certificate: null,
    income_certificate: null,
    caste_certificate: "default is good",
    pan_card: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = new FormData();

    // Append text fields
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && typeof formData[key] !== "object") {
        submissionData.append(key, formData[key]);
      }
    });

    // Append file fields (check if they are not null)
    const fileFields = [
      "photograph",
      "digital_signature",
      "class_10_certificate",
      "class_12_certificate",
      "aadhar_card",
      "residence_certificate",
      "income_certificate",
      "pan_card",
    ];

    fileFields.forEach((field) => {
      if (formData[field]) {
        submissionData.append(field, formData[field]);
      }
    });

    // console.log("Form Data Being Sent:");
    // for (let [key, value] of submissionData.entries()) {
    //   console.log(key, value);
    // }

    fetch(BACKEND_BASE_URL + "/apply", {
      method: "POST",
      body: submissionData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.msg == "success") {
          successToast("Apllied Successfully");
        } else {
          errorToast("Internal Error Occurred");
        }
      });
  };

  return (
    <main className="bg-[url(/images/bg-2.png)] bg-cover">
      <div className="flex flex-col items-center min-h-[92vh] backdrop-blur">
        <div className="bg-white w-[80%] m-5 mb-20 px-10 py-5 border-4 border-black rounded-2xl">
          <h1 className="text-4xl mt-3 mb-10 text-center font-bold">
            Application Form for Scholarship ID: {id}
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col">
            <label>Full Name:</label>
            <input
              className="border rounded-md text-md mb-4 p-2"
              type="text"
              name="full_name"
              onChange={handleInputChange}
              required
            />

            <div className="flex justify-between">
              <div className="flex flex-col w-[200px]">
                <label>Date of Birth:</label>
                <input
                  className="border rounded-md text-md mb-4 p-2"
                  type="date"
                  name="date_of_birth"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col w-[200px]">
                <label>Gender:</label>
                <select
                  className="border rounded-md text-md mb-4 p-2"
                  name="gender"
                  onChange={handleInputChange}
                  required
                >
                  <option hidden>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col w-[200px]">
                <label>Nationality:</label>
                <input
                  className="border rounded-md text-md mb-4 p-2"
                  type="text"
                  name="nationality"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col w-[200px]">
                <label>Contact Number:</label>
                <input
                  className="border rounded-md text-md mb-4 p-2"
                  type="tel"
                  name="contact_number"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col w-[200px]">
                <label>Address:</label>
                <input
                  className="border rounded-md text-md mb-4 p-2"
                  type="text"
                  name="address"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-[200px]">
                <label>Email:</label>
                <input
                  className="border rounded-md text-md mb-4 p-2"
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-[200px]">
                <label>Photograph:</label>
                <input
                  className="border rounded-md text-md mb-4 p-2"
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  name="photograph"
                  required
                />
              </div>

              <div className="flex flex-col w-[200px]">
                <label>Signature:</label>
                <input
                  className="border rounded-md text-md mb-4 p-2"
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  name="digital_signature"
                  required
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-center">
              Class 10th Details
            </h2>

            <div className="flex justify-between">
              <div className="flex flex-col w-[200px]">
                <label>Class 10th Board:</label>
                <select
                  name="class_10_board"
                  className="border rounded-md text-md mb-4 p-2"
                  onChange={handleInputChange}
                >
                  <option hidden>Class 10th Board</option>
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="State Board">State Board</option>
                </select>
              </div>

              <div className="flex flex-col w-[200px]">
                <label>Class 10th passing year:</label>
                <input
                  type="number"
                  name="class_10_passing_year"
                  min="1900"
                  max="2099"
                  className="border rounded-md text-md mb-4 p-2"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col w-[200px]">
                <label>Class 10th Percentage:</label>
                <input
                  type="number"
                  name="class_10_percentage"
                  className="border rounded-md text-md mb-4 p-2"
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex flex-col w-[200px]">
                <label>Class 10th Certificate:</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  name="class_10_certificate"
                  className="border rounded-md text-md mb-4 p-2"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-center">
              Class 12th Details
            </h2>

            <div className="flex justify-between">
              <div className="flex flex-col w-[200px]">
                <label>Class 12th Board:</label>
                <select
                  name="class_12_board"
                  className="border rounded-md text-md mb-4 p-2"
                  onChange={handleInputChange}
                >
                  <option hidden>Class 12th Board</option>
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="State Board">State Board</option>
                </select>
              </div>

              <div className="flex flex-col w-[200px]">
                <label>Class 12th passing year:</label>
                <input
                  type="number"
                  name="class_12_passing_year"
                  min="1900"
                  max="2099"
                  className="border rounded-md text-md mb-4 p-2"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col w-[200px]">
                <label>Class 12th Percentage:</label>
                <input
                  type="number"
                  name="class_12_percentage"
                  className="border rounded-md text-md mb-4 p-2"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col w-[200px]">
                <label>Class 12th Certificate:</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  name="class_12_certificate"
                  className="border rounded-md text-md mb-4 p-2"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-center">
              Family Details
            </h2>

            <div className="flex justify-between">
              <div className="flex flex-col w-[200px]">
                <label>Father's Name:</label>
                <input
                  type="text"
                  name="father_name"
                  className="border rounded-md text-md mb-4 p-2"
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex flex-col w-[200px]">
                <label>Father's Occupation:</label>
                <input
                  type="text"
                  name="father_occupation"
                  className="border rounded-md text-md mb-4 p-2"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col w-[200px]">
                <label>Mother's Name:</label>
                <input
                  type="text"
                  name="mother_name"
                  className="border rounded-md text-md mb-4 p-2"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col w-[200px]">
                <label>Mother's Occupation:</label>
                <input
                  type="text"
                  name="mother_occupation"
                  className="border rounded-md text-md mb-4 p-2"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <label>Family's Annual Income:</label>
            <input
              type="number"
              name="family_income"
              className="border rounded-md text-md mb-4 p-2"
              onChange={handleInputChange}
            />

            <h2 className="text-2xl font-bold mt-10 mb-4 text-center">
              Personal Documents:
            </h2>

            <div className="flex justify-between">
              <div className="flex flex-col w-[200px]">
                <label>Adhaar Card:</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  name="aadhar_card"
                  className="border rounded-md text-md mb-4 p-2"
                />
              </div>

              <div className="flex flex-col w-[200px]">
                <label>Residence Certificate:</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  name="residence_certificate"
                  className="border rounded-md text-md mb-4 p-2"
                />
              </div>

              <div className="flex flex-col w-[200px]">
                <label>Income Certificate:</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  name="income_certificate"
                  className="border rounded-md text-md mb-4 p-2"
                />
              </div>

              <div className="flex flex-col w-[200px]">
                <label>Pan Card:</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  name="pan_card"
                  className="border rounded-md text-md mb-4 p-2"
                />
              </div>
            </div>

            <button
              className="cursor-pointer bg-[#4285F4] text-lg text-white rounded-md px-6 py-2 w-full mt-10 mby-5"
              type="submit"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Apply;
