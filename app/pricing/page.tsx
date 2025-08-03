import PricingCard from "@/components/custom/PricingCard";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center p-4 sm:flex-row sm:justify-between">
        <PricingCard
          price={100}
          color="purple"
          perks={["AI advisor full time", "two"]}
        />
        <PricingCard
          price={100}
          color="green"
          perks={["AI advisor full time", "two"]}
        />
        <PricingCard
          price={100}
          color="green"
          perks={["AI advisor full time", "two"]}
        />
      </div>
    </>
  );
};

export default page;
