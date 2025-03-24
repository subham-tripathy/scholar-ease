import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import ScholarshipDetailCard from "./ScholarshipDetailCard";
import { BACKEND_BASE_URL, openAddSchemePanel } from "./functions";
import AdminScholarshipCard from "./AdminScholarshipCard";
import AddSchemePanel from "./AddSchemePanel";

const AllListedSchemes = () => {
  const [dataArray, setDataArray] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  useEffect(() => {
    fetch(BACKEND_BASE_URL + "/fetchAllSchemes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataArray(data);
      });
  }, [refreshTrigger]);

  return (
    <main className="bg-gray-200 min-h-[92vh] flex flex-col items-center">
      <button
      onClick={()=>{
        openAddSchemePanel();
      }}
        className="cursor-pointer mt-5 px-5 py-1 text-xl bg-[#4285F4] text-white rounded border-2 border-white shadow-md shadow-black"
      >
        Add A New Scheme
      </button>
      <div className="grid grid-cols-4 w-full">
        {dataArray != null ? (
          dataArray.map((e) => (
            <AdminScholarshipCard
              key={e.scheme_id}
              id={e.scheme_id}
              price={e.scheme_amt}
              title={e.scheme_name}
              img={"/images/scholarships/img1.webp"}
              arr={dataArray}
              setRefreshTrigger={setRefreshTrigger}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <AddSchemePanel />
      <ScholarshipDetailCard />
      <Footer />
    </main>
  );
};

export default AllListedSchemes;
