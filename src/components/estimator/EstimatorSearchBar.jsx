import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const EstimatorSearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="px-6 py-3">
      <div className="relative max-w-full">
        <Search className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
        <Input
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 border-gray-300"
        />
      </div>
    </div>
  );
};
