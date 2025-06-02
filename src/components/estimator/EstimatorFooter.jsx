import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EstimatorFooter = () => {
  return (
    <div className="px-6 py-3">
      <div className="flex">
        <Button
          variant="outline"
          className="px-4 py-2 ml-auto text-sm rounded-lg text-[#005A86]"
        >
          Next <ArrowRight />
        </Button>
      </div>
    </div>
  );
};
