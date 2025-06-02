import { WorkPackageCard } from "./WorkPackageCard";

export const WorkPackageGrid = ({ packages }) => {
  return (
    <div className="flex-1 p-6 pt-0 overflow-auto">
      <div className="grid grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <WorkPackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
};
