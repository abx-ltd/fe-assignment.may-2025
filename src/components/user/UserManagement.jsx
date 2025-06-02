"use client";

import * as React from "react";
import { Filter, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { users } from "@/utils/data";
import { PaginationComponent } from "../Pagination";
import { useRouter } from "next/navigation";
import { Header } from "./Header";
import { FilterSection } from "./FilterSection";
import { RightPanel } from "./RightPanel";
import { UserTable } from "./UserTable";
import { useTableSelection } from "@/hooks/useTableSelection";
import { useFilters } from "@/hooks/useFilters";
import { APP_CONFIG } from "@/constants/app-config";

const INITIAL_FILTERS = {
  userName: "",
  userId: "",
  userType: "",
  phone: "",
  email: "",
  status: "All",
};

export default function UserManagement() {
  const router = useRouter();
  const [showFilters, setShowFilters] = React.useState(false);

  // Use custom hooks for state management
  const {
    filters,
    filteredData: filteredUsers,
    hasActiveFilters,
    updateFilter,
    resetFilters,
    resultCount,
  } = useFilters(users, INITIAL_FILTERS, APP_CONFIG.filters.debounceDelay);

  const {
    selectedIds: selectedUserIds,
    selectedItems: selectedUsers,
    isAllSelected,
    isIndeterminate,
    handleSelectAll: handleCheckAll,
    handleSelectItem: handleUserCheck,
    clearSelection,
    selectedCount,
  } = useTableSelection(filteredUsers);

  const handleRefresh = React.useCallback(() => {
    resetFilters();
    clearSelection();
  }, [resetFilters, clearSelection]);

  return (
    <div className="h-screen">
      {/* Header */}
      <Header router={router} />

      <div className="flex flex-col md:grid md:grid-cols-9 h-[calc(100vh-64px)]">
        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 md:hidden">
          <span className="text-[20px] text-[#294172] font-semibold">
            {resultCount} USERS
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRefresh}
              className="p-2"
            >
              <RefreshCw className="w-4 h-4 text-gray-500" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
              )}
            </Button>
          </div>
        </div>

        {/* Left Sidebar - Filters */}
        <div
          className={`
          ${showFilters ? "block" : "hidden"} md:block
          md:col-span-1 p-4 pt-8 border-r border-gray-200
          md:h-full max-h-[50vh] md:max-h-none overflow-y-auto md:overflow-visible
        `}
        >
          <FilterSection
            filters={filters}
            onFilterChange={updateFilter}
            onReset={resetFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </div>

        {/* User List */}
        <div className="flex flex-col py-3 overflow-hidden md:col-span-4">
          <div className="items-center hidden gap-2 mb-4 md:flex">
            <span className="text-[20px] text-[#294172] font-semibold px-2">
              {resultCount} USERS
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRefresh}
              className="p-2"
            >
              <RefreshCw className="w-4 h-4 text-gray-500" />
            </Button>
          </div>
          <div className="flex-1 overflow-auto">
            <UserTable
              users={filteredUsers}
              selectedUserIds={selectedUserIds}
              onCheckAll={handleCheckAll}
              onUserCheck={handleUserCheck}
              isAllSelected={isAllSelected}
              isIndeterminate={isIndeterminate}
            />
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-2 pt-4 mt-auto border-t">
            <PaginationComponent />
          </div>
        </div>

        {/* Right Panel */}
        <div className="border-l border-gray-200 md:col-span-4">
          <RightPanel
            selectedUsers={selectedUsers}
            selectedCount={selectedCount}
            onClearSelection={clearSelection}
          />
        </div>
      </div>
    </div>
  );
}
