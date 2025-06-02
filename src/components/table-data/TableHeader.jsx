"use client";

import { Button } from "@/components/ui/button";
import { Download, RefreshCw, Users } from "lucide-react";

export function TableHeader({
  paginatedDataLength,
  sortedDataLength,
  totalDataLength,
  filteredDataLength,
  onExport,
  onResetFilters,
}) {
  return (
    <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center border w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm border-white/30">
          <Users className="text-slate-800 w-7 h-7" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Customer Database</h2>
          <p className="mt-1 text-slate-800">
            Showing {paginatedDataLength} of {sortedDataLength} customers
            {filteredDataLength !== totalDataLength &&
              ` (filtered from ${totalDataLength})`}
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <Button
          onClick={onExport}
          variant="secondary"
          size="sm"
          className="h-10 transition-all duration-200 text-slate-800 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
        >
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
        <Button
          onClick={onResetFilters}
          variant="secondary"
          size="sm"
          className="h-10 transition-all duration-200 text-slate-800 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Reset Filter
        </Button>
      </div>
    </div>
  );
}
