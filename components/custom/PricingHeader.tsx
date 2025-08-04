"use client";
import React, { useState } from "react";

type PricingHeaderProps = {
  billingCycle: "monthly" | "yearly";
  toggleBillingCycle: () => void;
};
const PricingHeader = ({
  billingCycle,
  toggleBillingCycle,
}: PricingHeaderProps) => {
  return (
    <div className="text-center max-w-4xl mx-auto px-8 pt-12 ">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Pick Your Plan</h1>

      <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
        Our Pricing Plan provides a selection of tailored options to suit
        various needs and budgets.
      </p>

      <div className="flex items-center justify-center gap-4 mb-12">
        <span
          className={`text-lg font-medium ${
            billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"
          }`}
        >
          Bill Monthly
        </span>

        <button
          onClick={toggleBillingCycle}
          className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors  focus:ring-2 focus:ring-gray-500 cursor-pointer"
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              billingCycle === "yearly" ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>

        <span
          className={`text-lg font-medium ${
            billingCycle === "yearly" ? "text-gray-900" : "text-gray-500"
          }`}
        >
          Bill Yearly
        </span>
      </div>
    </div>
  );
};

export default PricingHeader;
