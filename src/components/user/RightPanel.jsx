import { CARD_SECTIONS } from "@/utils/data";
import { renderCard } from "./CardComponents";

export const RightPanel = () => {
  return (
    <div className="md:col-span-4 px-3 space-y-4 overflow-y-auto border-t md:border-t-0 md:border-l border-gray-200 max-h-[50vh] md:max-h-screen">
      {CARD_SECTIONS.map((section) => renderCard(section))}
    </div>
  );
};
