import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type PricingCardProps = {
  price: number;
  color: "green" | "purple" | "yellow";
  perks: string[];
  plan: "Premium" | "Free";
  billingCycle: "monthly" | "yearly";
};
const colorMap = {
  purple: "bg-purple-100 border-purple-500",
  green: "bg-green-100 border-green-500",
  yellow: "bg-yellow-100 border-yellow-500",
};

const PricingCard: React.FC<PricingCardProps> = ({
  price,
  color,
  perks,
  plan,
  billingCycle,
}) => {
  return (
    <Card className={`w-full max-w-xs rounded-2xl ${colorMap[color]}`}>
      <CardHeader className="text-center pb-4">
        <div className="text-3xl font-bold text-gray-900 mb-1">
          ${price}
          <span className="text-lg font-normal text-gray-600 ml-2">
            / {billingCycle === "monthly" ? "Month" : "Year"}
          </span>
        </div>
        <CardTitle className="text-xl font-semibold text-gray-900">
          {plan}
        </CardTitle>
        <p className="text-sm text-gray-600">For a Lifetime</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600" />
          <span className="text-sm text-gray-700">{perks[0]}</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600" />
          <span className="text-sm text-gray-700">{perks[1]}</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600" />
          <span className="text-sm text-gray-700">{perks[2]}</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600" />
          <span className="text-sm text-gray-700">{perks[3]}</span>
        </div>

        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white mt-6 cursor-pointer">
          Select Plan
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
