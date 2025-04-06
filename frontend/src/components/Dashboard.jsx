import React, { useContext, useEffect, useState } from "react";
import { BACKEND_BASE_URL, openEditAccountComponent } from "./functions";
import { useNavigate } from "react-router-dom";
import { loggedInContext } from "../contexts";
import Footer from "./Footer";
import EditAccountComponent from "./EditAccountComponent";
import History from "./History";

const Dashboard = () => {
  const [reloadDashboard, setReloadDashboard] = useState(false);
  document.title = "Scholar Ease - Dashboard";
  const globalContext = useContext(loggedInContext);
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    if (
      localStorage.getItem("scholar-ease-uid") === null ||
      !globalContext.loggedIn
    ) {
      navigate("/login");
    }

    if (localStorage.getItem("scholar-ease-uid").includes("admin")) {
      navigate("/admin");
    }
    fetch(BACKEND_BASE_URL + "/getAccountInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: localStorage.getItem("scholar-ease-uid"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0]);
        setStudentData(data[0]);
        if (data[0].account_type === "admin") {
          navigate("/admin");
        } else {
          document.getElementById("dashboardName").textContent = data[0].name;
          document.getElementById("dashboardUID").textContent = data[0].uid;
          document.getElementById("dashboardEmail").textContent = data[0].email;
          document.getElementById("dashboardPhno").textContent = data[0].phno;
          document.getElementById("dashboardType").textContent =
            "Account Type: " + data[0].account_type;
        }
      });
  }, [reloadDashboard]);

  return (
    <>
      <main className="bg-gray-200 min-h-[89vh] pt-5">
        <div className="relative w-[90%] mx-auto rounded-lg border-3 border-white shadow-md shadow-gray-700 flex bg-blue-700 text-white">
          <button
            className="absolute w-12 right-3 top-2 bg-white rounded-full p-2 cursor-pointer"
            onClick={() => {
              openEditAccountComponent();
            }}
          >
            <img
              src="/images/pencil-edit-button.png"
              className="relative w-full h-auto"
            />
          </button>
          <img
            className="w-[25%] my-5"
            src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          />
          <div className="m-10 flex flex-col justify-between">
            <h1 className="text-5xl font-semibold" id="dashboardName"></h1>
            <h1 className="text-xl font-semibold" id="dashboardUID"></h1>
            <h2 className="" id="dashboardType"></h2>
            <h2 className="" id="dashboardEmail"></h2>
            <h2 className="" id="dashboardPhno"></h2>
          </div>
        </div>
        <History />
      </main>
      {studentData ? (
        <EditAccountComponent
          setReloadDashboard={setReloadDashboard}
          studentData={studentData}
        />
      ) : null}
      <Footer />
    </>
  );
};

export default Dashboard;
