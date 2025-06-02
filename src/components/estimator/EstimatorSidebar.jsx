import { Logs } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { WP_CATEGORIES } from "@/utils/data";

export const EstimatorSidebar = ({
  selectedWPType,
  onWPTypeChange,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="col-span-1 p-3 pl-12">
      <div className="mb-4">
        <ToggleGroup
          variant="outline"
          type="single"
          className="w-full p-0.5 border-gray-200 border-1"
          size="sm"
          value={selectedWPType}
          onValueChange={(value) => {
            if (value) {
              onWPTypeChange(value);
            }
          }}
        >
          <ToggleGroupItem
            value="rfx"
            aria-label="Toggle RFX WPs"
            className="hover:cursor-pointer border-none first:rounded-l-sm last:rounded-r-sm text-[12px] text-gray-600 h-7 data-[state=on]:bg-blue-100 data-[state=on]:text-blue-900 data-[state=on]:border-blue-50 hover:bg-blue-50 data-[state=on]:rounded-sm"
          >
            RFX WPs
          </ToggleGroupItem>
          <ToggleGroupItem
            value="custom"
            aria-label="Toggle Custom WPs"
            className="hover:cursor-pointer border-none first:rounded-l-sm last:rounded-r-sm text-[12px] text-gray-600 h-7 data-[state=on]:bg-blue-100 data-[state=on]:text-blue-900 data-[state=on]:border-blue-50 hover:bg-blue-50 data-[state=on]:rounded-sm"
          >
            Custom WPs
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="space-y-1">
        <h3 className="mb-3 text-sm font-medium text-gray-800">Categories</h3>
        {WP_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`h-7 w-full text-left px-3 py-2 text-sm transition-colors border-b border-gray-400 flex items-center ${
              selectedCategory === category
                ? " text-blue-900"
                : "text-gray-400 hover:cursor-pointer"
            }`}
          >
            {category}
          </button>
        ))}
        <span className="text-[#005B86] text-[14px] flex absolute bottom-0 gap-2 items-center text-right">
          <Logs size={15} />
          How to add custom WPs
        </span>
      </div>
    </div>
  );
};
