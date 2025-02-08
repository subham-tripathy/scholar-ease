import React from "react";
import ScholarshipCard from "./ScholarshipCard";
import Footer from "./Footer";
import ScholarshipDetailCard from "./ScholarshipDetailCard";

const Schemes = () => {
  return (
    <main className="bg-gray-200 min-h-[90vh]">
      <div className="p-5 grid grid-cols-4 w-full mx-auto">
        <ScholarshipCard
          price={"1000"}
          title={"ScholarShip Scheme - 1"}
          path={"/apply?id=1"}
          img={"/images/scholarships/img1.webp"}
        />
        <ScholarshipCard
          price={"2000"}
          title={"ScholarShip Scheme - 2"}
          path={"/scheme2"}
          img={"/images/scholarships/img2.webp"}
        />
        <ScholarshipCard
          price={"3000"}
          title={"ScholarShip Scheme - 3"}
          path={"/scheme3"}
          img={"/images/scholarships/img3.webp"}
        />
        <ScholarshipCard
          price={"4000"}
          title={"ScholarShip Scheme - 4"}
          path={"/scheme4"}
          img={"/images/scholarships/img4.webp"}
        />
        <ScholarshipCard
          price={"1000"}
          title={"ScholarShip Scheme - 1"}
          path={"/scheme1"}
          img={"/images/scholarships/img1.webp"}
        />
        <ScholarshipCard
          price={"2000"}
          title={"ScholarShip Scheme - 2"}
          path={"/scheme2"}
          img={"/images/scholarships/img2.webp"}
        />
        <ScholarshipCard
          price={"3000"}
          title={"ScholarShip Scheme - 3"}
          path={"/scheme3"}
          img={"/images/scholarships/img3.webp"}
        />
        <ScholarshipCard
          price={"4000"}
          title={"ScholarShip Scheme - 4"}
          path={"/scheme4"}
          img={"/images/scholarships/img4.webp"}
        />
      </div>
      <ScholarshipDetailCard />
      <Footer />
    </main>
  );
};

export default Schemes;
