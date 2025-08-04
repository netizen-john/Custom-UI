"use client";
import React, { useState } from "react";
import PricingCard from "@/components/custom/PricingCard";
import PricingHeader from "@/components/custom/PricingHeader";

const page = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };
  return (
    <>
      <div>
        <PricingHeader
          billingCycle={billingCycle}
          toggleBillingCycle={toggleBillingCycle}
        />

        <div className="flex flex-col gap-4 items-center p-4 sm:flex-row sm:justify-between">
          <PricingCard
            price={0}
            color="purple"
            perks={[
              "🧠 AI advisor for 1 day/month",
              "🔄 2 auto tracking slots",
              "🕒 7-day transaction clearing",
              "📞 Customer support (email only)",
            ]}
            plan="Free"
            billingCycle={billingCycle}
          />
          {/* {billingCycle} */}
          <PricingCard
            price={billingCycle === "monthly" ? 5 : 50}
            color="green"
            perks={[
              "🧠 AI advisor 5 days/month",
              "🔄 Unlimited auto tracking",
              "🕒 1-day transaction clearing",
              "⚡️ Support (live chat + email, 12h response)",
            ]}
            plan="Premium"
            billingCycle={billingCycle}
          />
          <PricingCard
            price={billingCycle === "monthly" ? 15 : 150}
            color="yellow"
            perks={[
              "🧠 AI advisor full-time (24/7 availability)",
              "🔄 Unlimited auto tracking",
              "🕒 Real-time transaction processing",
              "📞 24/7 customer support (phone, chat, email)",
            ]}
            plan="Premium"
            billingCycle={billingCycle}
          />
        </div>
      </div>
    </>
  );
};

export default page;
