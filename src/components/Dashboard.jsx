import React, { useContext, useEffect } from "react";
import { BACKEND_BASE_URL } from "./functions";
import { useNavigate } from "react-router-dom";
import { loggedInContext } from "../contexts";

const Dashboard = () => {
  document.title = "Scholar Ease - Dashboard";
  const globalContext = useContext(loggedInContext);
  const navigate = useNavigate();
  
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
        if (data[0].type === "admin") {
          navigate("/admin");
        } else {
          document.getElementById("dashboardName").textContent = data[0].name;
          document.getElementById("dashboardUID").textContent = data[0].uid;
          document.getElementById("dashboardEmail").textContent = data[0].email;
          document.getElementById("dashboardPhno").textContent = data[0].phno;
          document.getElementById("dashboardType").textContent =
            "Account Type: " + data[0].type;
        }
      });
  }, []);

  return (
    <main>
      <div className="w-[90%] mx-auto rounded-lg border-3 border-white shadow-md shadow-gray-700 flex bg-[#4285F4] text-white">
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
    </main>
  );
};

export default Dashboard;
