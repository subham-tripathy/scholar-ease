import React, { useState } from "react";
import {
  BACKEND_BASE_URL,
  closeEditAccountComponent,
  errorToast,
  successToast,
  validateEmail,
  validateIndianPhoneNumber,
} from "./functions";

const EditAccountComponent = ({ setReloadDashboard, studentData }) => {
  const [name, setName] = useState(studentData.name);
  const [gender, setGender] = useState(studentData.gender);
  const [uid, setUid] = useState(studentData.uid);
  const [email, setEmail] = useState(studentData.email);
  const [phno, setPhno] = useState(studentData.phno);
  const [profile_pic, setProfile_pic] = useState(null);
  const handleEditForm = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      errorToast("invalid email");
      return;
    }
    if (!validateIndianPhoneNumber(phno)) {
      errorToast("invalid phone number");
      return;
    }
    // const formdata = new FormData();
    // formdata.append("uid", studentData.uid);
    // formdata.append("new_uid", uid);
    // formdata.append("name", name);
    // formdata.append("gender", gender);
    // formdata.append("phno", phno);
    // formdata.append("email", email);
    // formdata.append("profile_pic", profile_pic);
    // console.log(formdata);
    if (uid != studentData.uid) {
      localStorage.setItem("scholar-ease-uid", uid);
    }
    fetch(BACKEND_BASE_URL + "/editAccountDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: studentData.uid,
        new_uid: uid,
        name,
        gender,
        phno,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "success") {
          successToast("Details Updated");
          setReloadDashboard((value) => !value);
        } else {
          errorToast("Some Error Occurred");
        }
      });
  };
  return (
    <div
      id="EditAccountComponent"
      style={{ backdropFilter: "blur(0px)", scale: "0" }}
      className="bg-[rgba(0,0,0,0.0)] fixed h-full w-full top-0 left-0 right-0 bottom-0 z-10"
    >
      <div className="shadow-black shadow rounded-xl w-[25%] mx-auto px-10 py-7 my-5 bg-white">
        <form className="flex flex-col text-black">
          {/* <label className="text-sm" htmlFor="editImage">
            Image
          </label>
          <input
            className="border rounded text-md mb-3 p-2"
            id="editImage"
            type="file"
            accept="image/jpeg"
            onChange={(e) => {
              setProfile_pic(e.target.files[0]);
            }}
          /> */}
          <label className="text-sm" htmlFor="name">
            Name
          </label>
          <input
            className="border rounded text-md mb-3 p-2"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className="text-sm" htmlFor="pw">
            Gender
          </label>
          <select
            className="border rounded text-md mb-3 p-2"
            name="gender"
            id="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            {studentData.gender == "Male" ? (
              <option value="Male" selected>
                Male
              </option>
            ) : (
              <option value="Male">Male</option>
            )}
            {studentData.gender == "Female" ? (
              <option value="Male" selected>
                Male
              </option>
            ) : (
              <option value="Male">Male</option>
            )}
            {studentData.gender == "Female" ? (
              <option value="Female" selected>
                Female
              </option>
            ) : (
              <option value="Female">Female</option>
            )}
            <option value="Others">Others</option>
          </select>
          <label className="text-sm" htmlFor="uid">
            Username
          </label>
          <input
            className="border rounded text-md mb-3 p-2"
            type="text"
            name="uid"
            id="uid"
            value={uid}
            onChange={(e) => {
              setUid(e.target.value);
            }}
          />
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="border rounded text-md mb-3 p-2"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="text-sm" htmlFor="phno">
            Phone Number
          </label>
          <input
            className="border rounded text-md mb-3 p-2"
            type="number"
            name="phno"
            id="phno"
            value={phno}
            onChange={(e) => {
              setPhno(e.target.value);
            }}
          />
          <button
            className="cursor-pointer bg-[#4285F4] text-lg text-white rounded-md py-2"
            id="signUpBTN"
            onClick={(e) => {
              handleEditForm(e);
            }}
          >
            Submit Changes
          </button>
        </form>
        <button
          className="cursor-pointer bg-[#dc3545] px-2 py-1 rounded-lg w-full mt-4 text-white"
          onClick={() => {
            closeEditAccountComponent();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EditAccountComponent;
