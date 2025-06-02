"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, X, ChevronUp, ChevronDown } from "lucide-react";

export function ColumnFilter({
  column,
  value,
  onFilterChange,
  onClearFilter,
  sortColumn,
  sortDirection,
  onSort,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [filterValue, setFilterValue] = useState(value || "");
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setFilterValue(value || "");
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleApplyFilter = () => {
    onFilterChange(column, filterValue);
    setIsOpen(false);
  };

  const handleClearFilter = () => {
    setFilterValue("");
    onClearFilter(column);
    setIsOpen(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleApplyFilter();
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const isFiltered = value && value.length > 0;
  const isSorted = sortColumn === column;

  return (
    <div className="relative inline-block" ref={containerRef}>
      <div className="flex items-center space-x-1">
        <span
          className="transition-colors cursor-pointer select-none hover:text-blue-600"
          onClick={() => onSort(column)}
        >
          {column}
        </span>

        {/* Sort indicator */}
        {isSorted && (
          <div className="flex flex-col">
            <ChevronUp
              className={`w-3 h-3 ${
                sortDirection === "asc" ? "text-blue-600" : "text-gray-300"
              }`}
            />
            <ChevronDown
              className={`w-3 h-3 -mt-1 ${
                sortDirection === "desc" ? "text-blue-600" : "text-gray-300"
              }`}
            />
          </div>
        )}

        {/* Filter button */}
        <Button
          variant="ghost"
          size="sm"
          className={`h-6 w-6 p-0 ${
            isFiltered ? "text-blue-600 bg-blue-50" : "text-gray-400"
          } hover:text-blue-600 hover:bg-blue-50`}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
            if (!isOpen) {
              setTimeout(() => {
                inputRef.current?.focus();
              }, 100);
            }
          }}
        >
          <Filter className="w-3 h-3" />
          {isFiltered && (
            <div className="absolute w-2 h-2 bg-blue-600 rounded-full -top-1 -right-1"></div>
          )}
        </Button>
      </div>

      {/* Filter dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1 p-3 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[200px] dark:bg-gray-800 dark:border-gray-700">
          <div className="space-y-2">
            <Input
              ref={inputRef}
              placeholder={`Filter ${column}...`}
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              onKeyDown={handleKeyPress}
              className="h-8 text-sm"
            />
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleApplyFilter}
                className="flex-1 text-xs h-7"
              >
                Apply
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearFilter}
                className="flex-1 text-xs h-7"
              >
                Clear
              </Button>
            </div>
            {isFiltered && (
              <div className="px-2 py-1 text-xs text-blue-600 rounded bg-blue-50">
                Filtering: "{value}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
