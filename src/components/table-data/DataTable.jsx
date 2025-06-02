"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Globe, Mail, ExternalLink } from "lucide-react";
import { ColumnFilter } from "./ColumnFilter";

export function DataTable({
  headers,
  paginatedData,
  sortColumn,
  sortDirection,
  onSort,
  columnFilters = {},
  onColumnFilterChange,
  onClearColumnFilter,
}) {
  return (
    <div className="flex-1 overflow-auto rounded-lg mb-4 max-h-[60vh]">
      <Table className="bg-white border shadow-sm border-slate-200 dark:bg-slate-900 dark:border-slate-800 min-h-[60vh]">
        <TableHeader>
          <TableRow className="sticky top-0 z-10 border-b-0 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700">
            {headers.map((header) => (
              <TableHead
                key={header}
                className="relative font-semibold transition-all duration-200 select-none h-14"
              >
                <ColumnFilter
                  column={header}
                  value={columnFilters[header] || ""}
                  onFilterChange={onColumnFilterChange}
                  onClearFilter={onClearColumnFilter}
                  sortColumn={sortColumn}
                  sortDirection={sortDirection}
                  onSort={onSort}
                />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((row, index) => (
            <TableRow
              key={index}
              className="transition-all duration-200 border-b hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20 border-slate-100 dark:border-slate-800"
            >
              {headers.map((header) => (
                <TableCell key={header} className="max-w-xs py-4">
                  {header === "Country" ? (
                    <Badge
                      variant="outline"
                      className="px-3 py-1 text-xs font-medium text-blue-700 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 dark:border-blue-700 dark:text-blue-300"
                    >
                      <Globe className="inline w-3 h-3 mr-1.5" />
                      {row[header]}
                    </Badge>
                  ) : header === "Email" ? (
                    <a
                      href={`mailto:${row[header]}`}
                      className="flex items-center gap-2 text-blue-600 transition-colors duration-200 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 group"
                    >
                      <div className="flex items-center justify-center w-6 h-6 transition-colors duration-200 bg-blue-100 rounded-full dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50">
                        <Mail className="w-3 h-3" />
                      </div>
                      <span className="font-medium truncate">
                        {row[header]}
                      </span>
                    </a>
                  ) : header === "Website" ? (
                    <a
                      href={row[header]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center max-w-xs gap-2 text-purple-600 truncate transition-colors duration-200 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 group"
                    >
                      <div className="flex items-center justify-center w-6 h-6 transition-colors duration-200 bg-purple-100 rounded-full dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50">
                        <ExternalLink className="w-3 h-3" />
                      </div>
                      <span className="font-medium truncate">
                        {row[header]}
                      </span>
                    </a>
                  ) : header === "Customer Id" || header === "Index" ? (
                    <span
                      className="block max-w-xs font-mono text-sm font-medium text-slate-700 dark:text-slate-300"
                      title={row[header]}
                    >
                      {row[header]}
                    </span>
                  ) : (
                    <span
                      className="block max-w-xs font-medium truncate text-slate-700 dark:text-slate-300"
                      title={row[header]}
                    >
                      {row[header]}
                    </span>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
