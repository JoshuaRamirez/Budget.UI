import { GetDataGrid } from '@/Store/Getters/GetDataGrid';
import { ApplicationState } from '@/Store/ApplicationStore';
import { GetDataGridSortButton } from '@/Store/Getters/GetDataGridSortButton';
import { SortDirection } from '@/Core/SortDirection';

export interface SortDataGridPayload {
  DataGridId : string
  DataGridSortButtonId : string
}

export function SortDataGrid (state : ApplicationState, payload : SortDataGridPayload) {
  const dataGrid = GetDataGrid(state)(payload.DataGridId);
  const dataGridSortButton = GetDataGridSortButton(state)(payload.DataGridId, payload.DataGridSortButtonId);
  if (!dataGrid) {
    throw new Error('Unable to find DataGrid with specified ID.');
  }
  if (!dataGridSortButton) {
    throw new Error('Unable to find DataGridSortButton with specified ID.');
  }
  let columnId = dataGridSortButton.Id;
  let sortDirection = dataGridSortButton.ViewModel.CurrentSortDirection;
  if (sortDirection == null) {
    columnId = 'Id';
    sortDirection = SortDirection.Ascending;
  }
  dataGrid.DataModel.Sort(columnId, sortDirection);
}
