import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { BACKEND_BASE_URL, openAddSAGPanel } from "./functions";
import AddSAGPanel from "./AddSAGPanel";
import SAGDetailCard from "./SAGDetailCard";
import SAGmemberCard from "./SAGmemberCard";

const SAGmembers = () => {
  const [dataArray, setDataArray] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  useEffect(() => {
    fetch(BACKEND_BASE_URL + "/fetchAllSAGmembers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDataArray(data);
      });
  }, [refreshTrigger]);

  return (
    <>
      <main className="bg-gray-200 min-h-[92vh] flex flex-col items-center">
        <button
          onClick={() => {
            openAddSAGPanel();
          }}
          className="cursor-pointer mt-5 px-5 py-1 text-xl bg-[#4285F4] text-white rounded border-2 border-white shadow-md shadow-black"
        >
          Create SAG Member
        </button>
        <div className="grid grid-cols-4 w-full">
          {dataArray != null ? (
            dataArray.map((e) => (
              <SAGmemberCard
                key={e.uid}
                account_type={e.account_type}
                email={e.email}
                gender={e.gender}
                name={e.name}
                phno={e.phno}
                profile_pic={e.profile_pic}
                uid={e.uid}
                setRefreshTrigger={setRefreshTrigger}
              />
            ))
          ) : (
            <></>
          )}
        </div>
        <AddSAGPanel setRefreshTrigger={setRefreshTrigger} />
        <SAGDetailCard />
      </main>
      <Footer />
    </>
  );
};

export default SAGmembers;
