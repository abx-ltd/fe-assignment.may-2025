"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Globe, Filter } from "lucide-react";

export function TableFilters({
  searchTerm,
  onSearchChange,
  selectedCountry,
  onCountryChange,
  countries,
  itemsPerPage,
  onItemsPerPageChange,
}) {
  return (
    <div className="flex flex-col gap-4 mt-2 sm:flex-row">
      <div className="flex-1">
        <div className="relative group">
          <Search className="absolute w-4 h-4 transition-colors text-slate-800 left-3 top-3 group-focus-within:text-blue-500" />
          <Input
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-12 pl-10 transition-all duration-200 placeholder:text-slate-800 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
          />
        </div>
      </div>
      <div className="w-full sm:w-56">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg dark:bg-blue-900/30">
            <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <Select value={selectedCountry} onValueChange={onCountryChange}>
            <SelectTrigger className="h-12 transition-all duration-200 border-slate-200 focus:border-blue-500">
              <SelectValue placeholder="Filter by country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Countries</SelectItem>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full sm:w-40">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-lg dark:bg-purple-900/30">
            <Filter className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </div>
          <Select
            value={itemsPerPage.toString()}
            onValueChange={onItemsPerPageChange}
          >
            <SelectTrigger className="h-12 transition-all duration-200 border-slate-200 focus:border-blue-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 per page</SelectItem>
              <SelectItem value="10">10 per page</SelectItem>
              <SelectItem value="25">25 per page</SelectItem>
              <SelectItem value="50">50 per page</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
