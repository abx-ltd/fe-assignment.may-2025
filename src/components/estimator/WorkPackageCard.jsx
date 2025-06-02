import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const WorkPackageCard = ({ pkg }) => {
  return (
    <Card className="h-48 gap-2 py-2 border border-gray-200 rounded-sm shadow-sm min-w-fit min-h-fit">
      <CardHeader className="pb-1 overflow-hidden line-clamp-1">
        <CardTitle className="flex justify-between font-medium text-gray-900 text-[18px]">
          {pkg.title}
          <ChevronRight className="text-gray-600" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="overflow-hidden text-sm leading-relaxed text-gray-600 line-clamp-2">
          {pkg.description}
        </p>
        <div className="flex">
          <ChevronRight className="w-6 h-6 mx-1 text-gray-400 bg-blue-50" />
          <ChevronRight className="w-6 h-6 mx-1 text-gray-400 bg-blue-50" />
        </div>

        <div className="flex justify-between space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="text-xs text-[#005B86] border-gray-200 bg-gray-200 hover:bg-gray-50 hover:cursor-pointer"
          >
            View Detail
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center justify-center p-2 border-gray-300 hover:bg-gray-50 hover:cursor-pointer"
            aria-label="Add to cart"
          >
            <img
              src="/AddToCardIcon.png"
              alt="Add to cart"
              className="w-4 h-4"
            />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
