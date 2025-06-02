"use client";

import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchTerm,
  setSortColumn,
  setSelectedCountry,
  setCurrentPage,
  setItemsPerPage,
  setColumnFilter,
  clearColumnFilter,
  resetFilters,
} from "@/store/tableSlice";

export function useCustomerTable(data = []) {
  const dispatch = useDispatch();
  const {
    searchTerm,
    sortColumn,
    sortDirection,
    selectedCountry,
    currentPage,
    itemsPerPage,
    columnFilters,
  } = useSelector((state) => state.table);

  // Extract unique countries for filter
  const countries = useMemo(() => {
    const uniqueCountries = [...new Set(data.map((item) => item.Country))];
    return uniqueCountries.filter(Boolean).sort();
  }, [data]);

  // Filter and search data
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Global search filter
      const matchesSearch = Object.values(item).some((value) =>
        value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Country filter
      const matchesCountry =
        selectedCountry === "all" || item.Country === selectedCountry;

      // Column-specific filters
      const matchesColumnFilters = Object.entries(columnFilters).every(
        ([column, filterValue]) => {
          const cellValue = item[column];
          if (!cellValue) return false;
          return cellValue
            .toString()
            .toLowerCase()
            .includes(filterValue.toLowerCase());
        }
      );

      return matchesSearch && matchesCountry && matchesColumnFilters;
    });
  }, [data, searchTerm, selectedCountry, columnFilters]);

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortColumn) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];

      if (!isNaN(aVal) && !isNaN(bVal)) {
        const numA = Number(aVal);
        const numB = Number(bVal);
        return sortDirection === "asc" ? numA - numB : numB - numA;
      }

      const aStr = aVal?.toString() || "";
      const bStr = bVal?.toString() || "";

      if (sortDirection === "asc") {
        return aStr.localeCompare(bStr);
      } else {
        return bStr.localeCompare(aStr);
      }
    });
  }, [filteredData, sortColumn, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = (column) => {
    dispatch(setSortColumn(column));
  };

  const handleSearchChange = (value) => {
    dispatch(setSearchTerm(value));
  };

  const handleCountryChange = (value) => {
    dispatch(setSelectedCountry(value));
  };

  const handleItemsPerPageChange = (value) => {
    dispatch(setItemsPerPage(Number.parseInt(value)));
  };

  const handleColumnFilterChange = (column, value) => {
    dispatch(setColumnFilter({ column, value }));
  };

  const handleClearColumnFilter = (column) => {
    dispatch(clearColumnFilter(column));
  };

  const handleExport = () => {
    const csvContent = [
      Object.keys(data[0] || {}).join(","),
      ...sortedData.map((row) => Object.values(row).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "filtered_customers.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleClearSearch = () => {
    dispatch(setSearchTerm(""));
  };

  const handleClearCountryFilter = () => {
    dispatch(setSelectedCountry("all"));
  };

  return {
    // State
    searchTerm,
    sortColumn,
    sortDirection,
    selectedCountry,
    currentPage,
    itemsPerPage,
    columnFilters,

    // Computed data
    countries,
    filteredData,
    sortedData,
    paginatedData,
    totalPages,

    // Handlers
    handleSort,
    handleSearchChange,
    handleCountryChange,
    handleItemsPerPageChange,
    handleColumnFilterChange,
    handleClearColumnFilter,
    handleClearSearch,
    handleClearCountryFilter,
    handleExport,
    resetFilters: handleResetFilters,
    setCurrentPage: handlePageChange,
  };
}
