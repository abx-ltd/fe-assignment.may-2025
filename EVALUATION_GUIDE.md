# Junior Front-end Engineer Assignment - Evaluation Guide

## Overview
This guide provides comprehensive instructions for evaluating a Junior Front-end Engineer's implementation of three key components: Layout Implementation, JSON Forms with Vietnamese Address Support, and Paginated Table with advanced features. The project uses Next.js, React, TailwindCSS, ShadCN UI components, and Redux Toolkit for state management.

## Project Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Running the Project

#### Local Development
```bash
# Install dependencies
yarn install

# Start development server
yarn run dev

# Open browser to http://localhost:3000
```

#### Live Production Deployment
**Production URL:** https://rfx-project.vercel.app/

The project is deployed and fully functional on Vercel. You can evaluate all components directly using the live deployment URLs below.

## Assignment Components Overview

The assignment consists of three main components:

1. **Layout Implementation** - Responsive layout using TailwindCSS and ShadCN components
2. **JSON Form Rendering** - Dynamic form generation with Vietnamese address field support
3. **Paginated Table** - Advanced data table with sorting, filtering, and pagination

---

## Component 1: Layout Implementation

### Location
- Main page: `/src/app/projects/page.jsx`


### Testing Steps
1. Open `http://localhost:3000/projects`
2. Resize browser window to test responsive behavior
3. Navigate between different sections using sidebar
4. Check mobile view using browser developer tools
5. Inspect code structure in `/src/components/Sidebar.jsx`

---

## Component 2: JSON Form Rendering with Vietnamese Address Support

### Location
- Open `http://localhost:3000/form-addres`
- Main page: `/src/app/form-address/page.jsx`
- Vietnamese address component: `/src/components/form/VietnamAddressField.jsx`
- Address data: `/src/data/vietnameseAddress.js`
- Redux state: `/src/store/formSlice.js`

### Evaluation Criteria

#### ✅ **JSON Form Schema Implementation**
1. **Form Generation**
   - [ ] Forms are dynamically generated from JSON schema
   - [ ] Multiple field types are supported (text, select, radio, checkbox, etc.)
   - [ ] Proper validation rules are applied
   - [ ] Error messages are displayed appropriately

2. **Form Rendering**
   - [ ] Clean and intuitive form layout
   - [ ] Proper field labeling and descriptions
   - [ ] Consistent styling with overall design system

#### ✅ **Vietnamese Address Field**
1. **Address Hierarchy**
   - [ ] Province/City (Tỉnh/Thành phố) dropdown is populated
   - [ ] District (Quận/Huyện) dropdown updates based on province selection
   - [ ] Address text input for detailed address

2. **Data Integration**
   - [ ] Vietnamese address data is properly loaded
   - [ ] Cascading dropdowns work correctly
   - [ ] All levels of address hierarchy are supported
   - [ ] Data validation ensures proper selection flow

3. **User Experience**
   - [ ] Dropdown options are in Vietnamese
   - [ ] Search/filter functionality in dropdowns (if implemented)
   - [ ] Loading states during data updates
   - [ ] Clear indication of required fields

#### ✅ **Redux State Management**
1. **State Persistence**
   - [ ] Form data is stored in Redux store
   - [ ] State persists across page refreshes (using redux-persist)
   - [ ] Multiple forms can be managed simultaneously
   - [ ] Form validation state is properly managed

2. **Redux Implementation**
   - [ ] Actions are properly defined in formSlice.js
   - [ ] Reducers handle state updates correctly
   - [ ] Component properly connects to Redux store
   - [ ] No unnecessary re-renders

#### Form Generation Testing
1. Navigate to `http://localhost:3000/form-address`
2. Verify form renders with all expected fields
3. Test different input types and validation
4. Submit form and check data handling

#### Vietnamese Address Testing
1. **Province Selection**
   - Select different provinces
   - Verify district dropdown updates appropriately
   - Check that ward dropdown resets

2. **District Selection**
   - Select different districts within a province
   - Verify ward dropdown updates with correct options
   - Test with multiple provinces

3. **Complete Address Flow**
   - Select: Hồ Chí Minh City → Quận 1 → Phường Bến Nghé
   - Select: Hà Nội → Quận Ba Đình → Phường Phúc Xá
   - Enter detailed address in text field
   - Verify complete address data structure

#### Redux State Testing
1. Fill out form completely
2. Refresh page - verify data persistence
3. Open browser developer tools → Redux DevTools
4. Monitor state changes during form interactions
5. Verify form data structure in store

---

## Component 3: Paginated Table with Advanced Features

### Location
- Open: 
- Main page: `/src/app/table-data/page.jsx`
- Table components: `/src/components/table-data/`
  - `CustomerDataTable.jsx` - Main table wrapper
  - `DataTable.jsx` - Core table rendering
  - `TablePagination.jsx` - Pagination controls
  - `TableHeader.jsx` - Header with actions
  - `TableFilters.jsx` - Filter controls
  - `ColumnFilter.jsx` - Individual column filters
- Table hook: `/src/hooks/useCustomerTable.js`
- Redux state: `/src/store/tableSlice.js`
- Sample data: `/customers-100.csv`

### Evaluation Criteria

#### ✅ **Data Loading & Display**
1. **Data Source**
   - [ ] CSV data is properly loaded and parsed
   - [ ] Table displays all expected columns
   - [ ] Data types are correctly handled (text, numbers, dates)
   - [ ] Proper handling of missing/null values

2. **Table Rendering**
   - [ ] Clean, readable table layout
   - [ ] Proper column headers
   - [ ] Responsive table design
   - [ ] Loading states during data operations

#### ✅ **Pagination Features**
1. **Basic Pagination**
   - [ ] Page navigation controls (Previous, Next, Page numbers)
   - [ ] Configurable page size (10, 20, 50, 100 items per page)
   - [ ] Display of current page and total pages
   - [ ] Total item count display

2. **Pagination Behavior**
   - [ ] Smooth navigation between pages
   - [ ] Proper handling of edge cases (first/last page)
   - [ ] Page size changes reset to first page
   - [ ] URL updates with pagination state (if implemented)

#### ✅ **Sorting Functionality**
1. **Column Sorting**
   - [ ] Click column headers to sort
   - [ ] Support for ascending/descending order
   - [ ] Visual indicators for sort direction (arrows/icons)
   - [ ] Multiple column sorting (if implemented)

2. **Sort Implementation**
   - [ ] Proper sorting for different data types (text, numbers, dates)
   - [ ] Case-insensitive text sorting
   - [ ] Null/undefined value handling in sorting
   - [ ] Sort state persistence

#### ✅ **Filtering Capabilities**
1. **Global Search**
   - [ ] Search input filters across all columns
   - [ ] Real-time search as user types
   - [ ] Search highlights or indicates matching results
   - [ ] Case-insensitive search

2. **Column-Specific Filters**
   - [ ] Individual column filter controls
   - [ ] Appropriate filter types (text input, dropdowns, date pickers)
   - [ ] Filter combination logic (AND/OR operations)
   - [ ] Clear filter functionality

3. **Advanced Filtering**
   - [ ] Date range filtering (if applicable)
   - [ ] Numeric range filtering (if applicable)
   - [ ] Multi-select filters for categorical data
   - [ ] Filter state indicators

#### ✅ **State Management & Persistence**
1. **Redux Integration**
   - [ ] Table state stored in Redux (pagination, sorting, filters)
   - [ ] State persists across page refreshes
   - [ ] Multiple table instances can coexist
   - [ ] Efficient state updates

2. **Performance**
   - [ ] Efficient data processing for large datasets
   - [ ] Debounced search input
   - [ ] Minimal re-renders during interactions
   - [ ] Proper memoization where applicable

#### ✅ **User Experience**
1. **Interaction Design**
   - [ ] Clear visual feedback for user actions
   - [ ] Intuitive control placement and labeling
   - [ ] Consistent interaction patterns
   - [ ] Accessibility considerations

2. **Error Handling**
   - [ ] Graceful handling of data loading errors
   - [ ] User-friendly error messages
   - [ ] Fallback states for empty data
   - [ ] Network error recovery

### Testing Steps

#### Basic Functionality Testing
1. Navigate to `http://localhost:3000/table-data`
2. Verify table loads with customer data
3. Check all columns are displayed correctly
4. Verify initial page shows correct number of items

#### Pagination Testing
1. **Navigation Testing**
   - Click "Next" button → verify page 2 loads
   - Click "Previous" button → verify page 1 loads
   - Click specific page numbers → verify correct page loads
   - Test with different page sizes (10, 20, 50, 100)

2. **Edge Case Testing**
   - Navigate to last page → verify "Next" is disabled
   - Navigate to first page → verify "Previous" is disabled
   - Change page size on last page → verify correct behavior

#### Sorting Testing
1. **Single Column Sorting**
   - Click "Name" column → verify alphabetical ascending order
   - Click "Name" again → verify alphabetical descending order
   - Click "Age" column → verify numeric sorting
   - Click "Date" column → verify date sorting

2. **Sort Persistence**
   - Apply sort → refresh page → verify sort is maintained
   - Navigate between pages → verify sort is maintained

#### Filtering Testing
1. **Global Search**
   - Type "John" → verify only matching names appear
   - Type partial email → verify email matches
   - Clear search → verify all data returns

2. **Column Filters**
   - Use age filter (if numeric range) → verify filtering
   - Use status filter (if dropdown) → verify category filtering
   - Apply multiple filters → verify AND logic

3. **Filter Combinations**
   - Apply global search + column filter
   - Apply multiple column filters
   - Verify filter interaction with pagination
   - Test filter clear functionality

#### State Persistence Testing
1. **Browser Refresh Testing**
   - Apply filters and sorting
   - Navigate to page 3
   - Refresh browser
   - Verify all state is restored

2. **Redux DevTools Testing**
   - Open Redux DevTools in browser
   - Monitor tableSlice state changes
   - Verify state structure matches expectations
   - Check for unnecessary action dispatches


