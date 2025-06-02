"use client";
import { useState } from "react";
import { WORK_PACKAGES, WP_CATEGORIES } from "@/utils/data";

// Import separated components
import { EstimatorBreadcrumb } from "./EstimatorBreadcrumb";
import { EstimatorSidebar } from "./EstimatorSidebar";
import { EstimatorMainContent } from "./EstimatorMainContent";
import { ChevronRight } from "lucide-react";
export default function EstimatorPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWPType, setSelectedWPType] = useState("rfx");
  const [selectedCategory, setSelectedCategory] = useState("All Work Packages");

  const filteredPackages = WORK_PACKAGES.filter((pkg) => {
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleWPTypeChange = (value) => {
    setSelectedWPType(value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="flex pl-4">
      <div className="w-full">
        <EstimatorBreadcrumb />

        {/* Title */}
        <div className="px-4 py-4">
          <h1 className="pl-8 text-lg font-semibold text-gray-900">
            Work Packages (WP)
          </h1>
        </div>

        <div className="grid grid-cols-5 gap-0 p">
          <EstimatorSidebar
            selectedWPType={selectedWPType}
            onWPTypeChange={handleWPTypeChange}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {selectedCategory === "All Work Packages" && (
            <EstimatorMainContent
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              filteredPackages={filteredPackages}
            />
          )}
        </div>
      </div>
    </div>
  );
}
