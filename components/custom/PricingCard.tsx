import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type PricingCardProps = {
  price: number;
  color: "green" | "purple" | "red";
  perks: string[];
};
const colorMap = {
  green: "bg-green-100 border-green-500",
  purple: "bg-purple-100 border-purple-200",
  red: "bg-red-500 border-red-200",
};

const PricingCard: React.FC<PricingCardProps> = ({ price, color, perks }) => {
  return (
    <Card className={`w-full max-w-xs rounded-2xl ${colorMap[color]}`}>
      <CardHeader className="text-center pb-4">
        <div className="text-3xl font-bold text-gray-900 mb-1">
          ${price}
          <span className="text-lg font-normal text-gray-600 ml-2">
            / Month
          </span>
        </div>
        <CardTitle className="text-xl font-semibold text-gray-900">
          Premium Plan
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
          <span className="text-sm text-gray-700">Unlimited auto tracking</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600" />
          <span className="text-sm text-gray-700">
            1 Day transaction clearing
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600" />
          <span className="text-sm text-gray-700">
            Priority customer support
          </span>
        </div>
        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white mt-6">
          Select Plan
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
