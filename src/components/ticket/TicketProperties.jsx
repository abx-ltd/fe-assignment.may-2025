import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const getBadgeVariant = (type, value) => {
  switch (type) {
    case "status":
      switch (value.toLowerCase()) {
        case "in-progress":
          return {
            variant: "none",
            className: "text-blue-800 border-none",
          };
        case "completed":
          return {
            variant: "none",
            className: "text-green-800 border-none",
          };
        case "pending":
          return {
            variant: "none",
            className: "text-yellow-800 border-none",
          };
        default:
          return {
            variant: "none",
            className: "text-gray-800 border-none",
          };
      }
    case "priority":
      switch (value.toLowerCase()) {
        case "critical":
          return {
            variant: "none",
            className: "text-red-800 border-none",
          };
        case "high":
          return {
            variant: "none",
            className: "text-orange-800 border-none",
          };
        case "medium":
          return {
            variant: "none",
            className: "text-yellow-800 border-none",
          };
        case "low":
          return {
            variant: "none",
            className: "text-gray-800 border-none",
          };
        default:
          return {
            variant: "none",
            className: "text-gray-800 border-none",
          };
      }
    default:
      return { variant: "secondary", className: "text-gray-800" };
  }
};

const PropertyField = ({ label, value, type }) => {
  const badgeConfig =
    type === "badge" ? getBadgeVariant(label.toLowerCase(), value) : null;

  return (
    <div className="grid items-center grid-cols-2 gap-2">
      <label className="text-sm font-medium text-gray-600">{label}:</label>
      <div className="flex items-center">
        <ChevronDown size={13} color="gray" />
        {type === "badge" ? (
          <Badge
            variant={badgeConfig.variant}
            className={`${badgeConfig.className} text-xs px-0 py-1`}
          >
            {value}
          </Badge>
        ) : (
          <div className="text-sm text-gray-900">{value}</div>
        )}
      </div>
    </div>
  );
};

export function TicketProperties({ properties }) {
  return (
    <Card className="relative z-50 h-full py-1 overflow-visible border-0 border-l rounded-none shadow-none border-l-gray-200">
      <CardHeader className="h-[34px] border-b border-gray-200 flex items-center pb-0! px-3">
        <CardTitle className="flex items-center gap-2 font-normal text-center text-gray-600">
          Properties
          <ChevronDown size={13} />
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-visible">
        <div className="space-y-4 overflow-visible">
          {properties.map((property, index) => (
            <PropertyField
              key={index}
              label={property.label}
              value={property.value}
              type={property.type}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
