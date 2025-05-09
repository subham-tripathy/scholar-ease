import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminComponentBox from "./AdminComponentBox";
import Footer from "./Footer";
import { BACKEND_BASE_URL } from "./functions";

const Admin = () => {
  document.title = "Scholar Ease - Admin Panel";

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("scholar-ease-uid") === null) {
      navigate("/login");
    }
    if (!localStorage.getItem("scholar-ease-uid").includes("admin")) {
      navigate("/dashboard");
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
        if (data[0].account_type !== "admin") {
          navigate("/dashboard");
        } else {
          document.getElementById("adminDashboardName").textContent =
            data[0].name;
          document.getElementById("adminDashboardUID").textContent =
            data[0].uid;
          document.getElementById("adminDashboardEmail").textContent =
            data[0].email;
          document.getElementById("adminDashboardPhno").textContent =
            data[0].phno;
          document.getElementById("adminDashboardType").textContent =
            "Account Type: " + data[0].account_type;
        }
      });
  }, []);

  return (
    <main
      className="pt-5 bg-[url(/images/bg-1.jpg)] bg-contain"
    >
      <div className="w-[80%] mb-10 mx-auto rounded-lg border-3 flex bg-blue-700 text-white shadow-lg shadow-gray-600">
        <img
          className="ml-10 w-[170px] h-[170px] my-5 rounded-full border"
          src="/images/default-acc-icon.png"
        />
        <div className="m-10 flex flex-col justify-between">
          <h1 className="text-5xl font-semibold" id="adminDashboardName"></h1>
          <h1 className="text-xl font-semibold" id="adminDashboardUID"></h1>
          <h2 className="" id="adminDashboardType"></h2>
          <h2 className="" id="adminDashboardEmail"></h2>
          <h2 className="" id="adminDashboardPhno"></h2>
        </div>
      </div>
      <h1 className="text-2xl ml-5 font-bold">Admin Controls</h1>
      <hr />
      <div className="grid grid-cols-4 grid-rows-2">
        <AdminComponentBox
          name={"All Listed Scholarship Schemes"}
          path={"/admin/listedschemes"}
        />
        <AdminComponentBox
          name={"Pending Applications"}
          path={"/admin/pendingapplications"}
        />
        <AdminComponentBox
          name={"Expired Scholarship Schemes"}
          path={"/admin/expiredscholarship"}
        />
        <AdminComponentBox
          name={"Scholarship Schemes Report"}
          path={"/admin/scholarshipreports"}
        />

        <AdminComponentBox
          name={"Finance Bureau Members"}
          path={"/admin/financemembers"}
        />
        <AdminComponentBox name={"SAG Members"} path={"/admin/sagmembers"} />
      </div>
      <Footer />
    </main>
  );
};

export default Admin;
