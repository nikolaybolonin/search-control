// vendor modules
import { createSelector } from 'reselect';

export const getCurrentTableId = state => {
  return state.todo.currentTable;
};

export const getTableId = createSelector(
  [getCurrentTableId],
  currentTable => tableId => {
    return typeof tableId === 'string' ? tableId : currentTable;
  },
);
