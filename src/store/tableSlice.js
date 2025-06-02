import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  sortColumn: "",
  sortDirection: "asc",
  selectedCountry: "all",
  currentPage: 1,
  itemsPerPage: 10,
  columnFilters: {}, // For individual column filters
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.currentPage = 1; // Reset to first page when searching
    },
    setSortColumn: (state, action) => {
      const column = action.payload;
      if (state.sortColumn === column) {
        state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
      } else {
        state.sortColumn = column;
        state.sortDirection = "asc";
      }
    },
    setSortDirection: (state, action) => {
      state.sortDirection = action.payload;
    },
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
      state.currentPage = 1; // Reset to first page when filtering
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1; // Reset to first page when changing items per page
    },
    setColumnFilter: (state, action) => {
      const { column, value } = action.payload;
      if (value === "" || value === null || value === undefined) {
        delete state.columnFilters[column];
      } else {
        state.columnFilters[column] = value;
      }
      state.currentPage = 1; // Reset to first page when filtering
    },
    clearColumnFilter: (state, action) => {
      const column = action.payload;
      delete state.columnFilters[column];
      state.currentPage = 1;
    },
    resetFilters: (state) => {
      state.searchTerm = "";
      state.selectedCountry = "all";
      state.sortColumn = "";
      state.sortDirection = "asc";
      state.currentPage = 1;
      state.columnFilters = {};
    },
    resetTableState: () => {
      return initialState;
    },
  },
});

export const {
  setSearchTerm,
  setSortColumn,
  setSortDirection,
  setSelectedCountry,
  setCurrentPage,
  setItemsPerPage,
  setColumnFilter,
  clearColumnFilter,
  resetFilters,
  resetTableState,
} = tableSlice.actions;

export const tableReducer = tableSlice.reducer;
