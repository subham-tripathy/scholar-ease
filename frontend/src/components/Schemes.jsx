import React, { useEffect, useState } from "react";
import ScholarshipCard from "./ScholarshipCard";
import Footer from "./Footer";
import ScholarshipDetailCard from "./ScholarshipDetailCard";
import { BACKEND_BASE_URL } from "./functions";

const Schemes = () => {
  document.title = "Scholar Ease - Schemes";
  const [dataArray, setDataArray] = useState(null);
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
  }, []);

  return (
    <main className="bg-[url(/images/bg-7.jpg)] bg-contain min-h-[92vh]">
      <div className="p-5 grid grid-cols-4 w-full mx-auto">
        {dataArray != null ? (
          dataArray.map((e) => (
            <ScholarshipCard
              key={e.scheme_id}
              id={e.scheme_id}
              price={e.scheme_amt}
              title={e.scheme_name}
              path={"/apply?id=" + e.scheme_id}
              img={"/images/scholarships/img1.webp"}
              arr={dataArray}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <ScholarshipDetailCard />
      <Footer />
    </main>
  );
};

export default Schemes;
