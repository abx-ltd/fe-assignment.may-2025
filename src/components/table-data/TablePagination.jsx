"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TablePagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between p-2 mt-auto border-t bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl border-slate-200 dark:border-slate-700">
      <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
        Page {currentPage} of {totalPages}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="w-10 h-10 transition-all duration-200 rounded-lg border-slate-200 hover:bg-blue-50 hover:border-blue-300"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="sr-only">Previous page</span>
        </Button>

        <div className="flex items-center gap-1">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }

            return (
              <Button
                key={pageNum}
                variant={currentPage === pageNum ? "default" : "outline"}
                size="sm"
                onClick={() => onPageChange(pageNum)}
                className={`w-10 h-10 rounded-lg transition-all duration-200 ${
                  currentPage === pageNum
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "border-slate-200 hover:bg-blue-50 hover:border-blue-300"
                }`}
              >
                {pageNum}
              </Button>
            );
          })}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="w-10 h-10 transition-all duration-200 rounded-lg border-slate-200 hover:bg-blue-50 hover:border-blue-300"
        >
          <ChevronRight className="w-4 h-4" />
          <span className="sr-only">Next page</span>
        </Button>
      </div>
    </div>
  );
}
