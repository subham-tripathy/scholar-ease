import React, { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "./functions";

const History = () => {
  const [dataArray, setDataArray] = useState("");
  const uid = localStorage.getItem("scholar-ease-uid");
  useEffect(() => {
    fetch(BACKEND_BASE_URL + "/fetchHistory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid }),
    })
      .then((res) => res.json())
      .then((data) => {
        setDataArray(data);
      });
      console.log(dataArray)
    fetch(BACKEND_BASE_URL + "/fetchScholarShipDetail", {
      method: "POST",
      headers: { "Content-Type": "applicantion/json" },
      body: JSON.stringify({
        uid: dataArray.scholarship_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Scholarship Name:</h1>
        <h2>ScholarShip ID: {dataArray.scholarship_id}</h2>
      </div>
    </>
  );
};

export default History;
