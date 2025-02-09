import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminComponentBox from "./AdminComponentBox";
import Footer from "./Footer";

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
  }, []);

  return (
    <main className="bg-gray-200 min-h-[92vh]">
      <div className="grid grid-cols-4 grid-rows-3 h-[92vh]">
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
