import { EstimatorSearchBar } from "./EstimatorSearchBar";
import { WorkPackageGrid } from "./WorkPackageGrid";
import { EstimatorFooter } from "./EstimatorFooter";

export const EstimatorMainContent = ({
  searchTerm,
  onSearchChange,
  filteredPackages,
}) => {
  return (
    <div className="flex flex-col col-span-4 pr-28">
      <EstimatorSearchBar
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
      />
      <WorkPackageGrid packages={filteredPackages} />
      <EstimatorFooter />
    </div>
  );
};
