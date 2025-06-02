import { useState, useCallback, useMemo } from "react";

/**
 * Custom hook for managing table selection state
 * @param {Array} items - Array of items to manage selection for
 * @param {string} idKey - Key to use for item identification (default: 'id')
 */
export const useTableSelection = (items = [], idKey = "id") => {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const handleSelectAll = useCallback(
    (checked) => {
      if (checked) {
        setSelectedIds(new Set(items.map((item) => item[idKey])));
      } else {
        setSelectedIds(new Set());
      }
    },
    [items, idKey]
  );

  const handleSelectItem = useCallback((itemId, checked) => {
    setSelectedIds((prev) => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(itemId);
      } else {
        newSet.delete(itemId);
      }
      return newSet;
    });
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  const isAllSelected = useMemo(() => {
    return items.length > 0 && selectedIds.size === items.length;
  }, [items.length, selectedIds.size]);

  const isIndeterminate = useMemo(() => {
    return selectedIds.size > 0 && selectedIds.size < items.length;
  }, [items.length, selectedIds.size]);

  const selectedItems = useMemo(() => {
    return items.filter((item) => selectedIds.has(item[idKey]));
  }, [items, selectedIds, idKey]);

  return {
    selectedIds,
    selectedItems,
    isAllSelected,
    isIndeterminate,
    handleSelectAll,
    handleSelectItem,
    clearSelection,
    selectedCount: selectedIds.size,
  };
};
