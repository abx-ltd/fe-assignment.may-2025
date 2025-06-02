import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 h-[52px] border-b border-gray-200">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className={index === items.length - 1 ? "text-[#005B86]" : ""}>
            {item}
          </span>
          {index < items.length - 1 && <ChevronRight className="w-4 h-4" />}
        </div>
      ))}
    </div>
  );
}
