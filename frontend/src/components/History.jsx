import React, { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "./functions";
import HistoryCard from "./HistoryCard";

const History = () => {
  const uid = localStorage.getItem("scholar-ease-uid");
  const [applyDetail, setApplyDetail] = useState(null);
  const [schemeDetail, setSchemeDetail] = useState(null);
  useEffect(() => {
    fetch(BACKEND_BASE_URL + "/fetchHistory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0].scholarship_id);
        fetch(BACKEND_BASE_URL + "/fetchScholarShipDetail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uid: data[0].scholarship_id,
          }),
        })
          .then((res) => res.json())
          .then((x) => {
            setSchemeDetail(x);
            // console.log(x[0])
          });
      });
  }, []);

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-center">History</h1>
      {schemeDetail != null ? (
        schemeDetail.map((e) => <HistoryCard key={e.scheme_id} arr={e} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default History;
