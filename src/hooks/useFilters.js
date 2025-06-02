import { useState, useCallback, useMemo, useEffect } from "react";

/**
 * Custom hook for managing filter state and filtered data
 * @param {Array} data - Array of data to filter
 * @param {Object} initialFilters - Initial filter values
 * @param {number} debounceDelay - Delay for debouncing filter changes (default: 300ms)
 */
export const useFilters = (
  data = [],
  initialFilters = {},
  debounceDelay = 300
) => {
  const [filters, setFilters] = useState(initialFilters);
  const [debouncedFilters, setDebouncedFilters] = useState(initialFilters);

  // Debounce filter changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFilters(filters);
    }, debounceDelay);

    return () => clearTimeout(timer);
  }, [filters, debounceDelay]);

  const updateFilter = useCallback((key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      return Object.entries(debouncedFilters).every(([key, value]) => {
        if (!value || value === "All" || value === "") return true;

        const itemValue = item[key];
        if (typeof itemValue === "string" && typeof value === "string") {
          return itemValue.toLowerCase().includes(value.toLowerCase());
        }

        return itemValue === value;
      });
    });
  }, [data, debouncedFilters]);

  const hasActiveFilters = useMemo(() => {
    return Object.values(filters).some(
      (value) => value && value !== "All" && value !== ""
    );
  }, [filters]);

  return {
    filters,
    filteredData,
    hasActiveFilters,
    updateFilter,
    resetFilters,
    resultCount: filteredData.length,
  };
};
