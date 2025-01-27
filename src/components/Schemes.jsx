import React from "react";
import ScholarshipCard from "./ScholarshipCard";
import Footer from "./Footer";
import ScholarshipDetailCard from "./ScholarshipDetailCard";

const Schemes = () => {
  return (
    <main className="bg-gray-200 min-h-[90vh]">
      <div className="p-5 grid grid-cols-4 gap-10 w-max mx-auto">
        <ScholarshipCard
          price={"1000"}
          title={"ScholarShip Scheme - 1"}
          path={"/scheme1"}
        />
        <ScholarshipCard
          price={"2000"}
          title={"ScholarShip Scheme - 2"}
          path={"/scheme2"}
        />
        <ScholarshipCard
          price={"3000"}
          title={"ScholarShip Scheme - 3"}
          path={"/scheme3"}
        />
        <ScholarshipCard
          price={"4000"}
          title={"ScholarShip Scheme - 4"}
          path={"/scheme4"}
        />
        <ScholarshipCard
          price={"1000"}
          title={"ScholarShip Scheme - 1"}
          path={"/scheme1"}
        />
        <ScholarshipCard
          price={"2000"}
          title={"ScholarShip Scheme - 2"}
          path={"/scheme2"}
        />
        <ScholarshipCard
          price={"3000"}
          title={"ScholarShip Scheme - 3"}
          path={"/scheme3"}
        />
        <ScholarshipCard
          price={"4000"}
          title={"ScholarShip Scheme - 4"}
          path={"/scheme4"}
        />
      </div>
      <ScholarshipDetailCard />
      <Footer />
    </main>
  );
};

export default Schemes;
