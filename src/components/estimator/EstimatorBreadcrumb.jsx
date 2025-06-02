import { ChevronRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EstimatorBreadcrumb = () => {
  return (
    <div className="flex justify-between px-4 py-3 border-b border-gray-200">
      <div className="flex items-center text-sm text-gray-500 ">
        <span>Estimator</span>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="text-[#005B86]">Work Packages</span>
      </div>
      <div className="px-6 py-1">
        <div className="flex items-center justify-end">
          <Button className="px-4 py-2 text-sm text-white bg-[#005B86] rounded-4xl hover:bg-teal-700">
            <Menu />
            View Summary
          </Button>
        </div>
      </div>
    </div>
  );
};
