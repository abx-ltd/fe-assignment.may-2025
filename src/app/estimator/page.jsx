import EstimatorPage from "@/components/estimator/Estimator";
import { Sidebar } from "@/components/Sidebar";

export default function EstimatorPageRoute() {
  return (
    <div className="flex h-screen">
      <Sidebar currentPage="Estimator" isCollapsed={true} />
      <div className="flex flex-col flex-1">
        <div className="flex-1 pr-4 overflow-auto">
          <EstimatorPage />
        </div>
      </div>
    </div>
  );
}
