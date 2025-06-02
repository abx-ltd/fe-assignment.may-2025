"use client";

import { useCustomerTable } from "@/hooks/useCustomerTable";
import { TableHeader } from "./TableHeader";
import { TableFilters } from "./TableFilters";
import { DataTable } from "./DataTable";
import { TablePagination } from "./TablePagination";
import { EmptyState } from "./EmptyState";

export function CustomerDataTable({ data = [] }) {
  const {
    searchTerm,
    sortColumn,
    sortDirection,
    selectedCountry,
    currentPage,
    itemsPerPage,
    columnFilters,
    countries,
    filteredData,
    sortedData,
    paginatedData,
    totalPages,
    handleSort,
    handleSearchChange,
    handleCountryChange,
    handleItemsPerPageChange,
    handleColumnFilterChange,
    handleClearColumnFilter,
    handleClearSearch,
    handleClearCountryFilter,
    handleExport,
    resetFilters,
    setCurrentPage,
  } = useCustomerTable(data);

  if (!data.length) {
    return <EmptyState />;
  }

  const headers = Object.keys(data[0] || {});

  return (
    <div className="flex flex-col w-full h-full">
      <div className="relative flex flex-col h-full overflow-hidden text-slate-800 rounded-2xl bg-gradient-to-br from-pink-100 via-orange-100 to-white">
        <div className="p-6">
          <TableHeader
            paginatedDataLength={paginatedData.length}
            sortedDataLength={sortedData.length}
            totalDataLength={data.length}
            filteredDataLength={filteredData.length}
            onExport={handleExport}
            onResetFilters={resetFilters}
          />

          <TableFilters
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            selectedCountry={selectedCountry}
            onCountryChange={handleCountryChange}
            countries={countries}
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        </div>

        {/* Table with scrollable content */}
        <div className="flex flex-col flex-1 px-6 pb-6 shadow-lg">
          <DataTable
            headers={headers}
            paginatedData={paginatedData}
            sortColumn={sortColumn}
            sortDirection={sortDirection}
            onSort={handleSort}
            columnFilters={columnFilters}
            onColumnFilterChange={handleColumnFilterChange}
            onClearColumnFilter={handleClearColumnFilter}
          />

          <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
